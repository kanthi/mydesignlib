#!/usr/bin/env python3
"""Write library/<type>/<id>/prompt.md for every catalog template on disk.

Each prompt is a rebuild spec taken from the shipped page: exact tokens,
exact copy, landmarks, assets, and controls. Re-run after a template changes.
"""

from __future__ import annotations

import json
import re
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OWNERS = {
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "button", "li", "th", "td", "figcaption", "label", "caption",
    "legend", "summary", "blockquote", "option", "a", "dt", "dd",
}
LANDMARKS = {
    "header", "footer", "nav", "main", "section", "article", "dialog",
    "form", "figure", "ul", "ol", "table",
}
SKIP = {"script", "style", "noscript", "template"}


def unescape(text: str) -> str:
    return (
        text.replace("&nbsp;", " ")
        .replace("&amp;", "&")
        .replace("&lt;", "<")
        .replace("&gt;", ">")
        .replace("&quot;", '"')
        .replace("&#39;", "'")
        .replace("&middot;", "·")
    )


class Outline(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.lines: list[str] = []
        self.images: list[str] = []
        self.controls: list[str] = []
        self.fonts: list[str] = []
        self.scripts: list[str] = []
        self.title = ""
        self.description = ""
        self.skip_depth = 0
        self.landmark_depth = 0
        self.owner: str | None = None
        self.owner_buf: list[str] = []
        self.owner_attrs: dict[str, str] = {}
        self._in_title = False
        self._title_buf: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr = {k: (v or "") for k, v in attrs}
        if tag in SKIP:
            self.skip_depth += 1
            return
        if self.skip_depth:
            return
        if tag == "title":
            self._in_title = True
            self._title_buf = []
        if tag == "meta" and attr.get("name", "").lower() == "description":
            self.description = attr.get("content", "").strip()
        if tag == "link" and "fonts.googleapis.com/css" in attr.get("href", ""):
            self.fonts.append(attr["href"])
        if tag == "script" and attr.get("src"):
            src = attr["src"]
            if not src.startswith("https://www.googletagmanager.com"):
                self.scripts.append(src)
        if tag == "br" and self.owner is not None:
            self.owner_buf.append(" ")
        if tag == "img":
            src = attr.get("src", "")
            alt = attr.get("alt", "")
            if src and not src.startswith("data:"):
                self.images.append(f"{src} — {alt}" if alt else src)
        if tag in {"input", "textarea", "select"}:
            kind = attr.get("type", "text")
            bits = [tag if tag != "input" else f"input[{kind}]"]
            if attr.get("id"):
                bits.append(f"#{attr['id']}")
            if attr.get("name"):
                bits.append(f"name={attr['name']}")
            if attr.get("placeholder"):
                bits.append(f"placeholder={attr['placeholder']!r}")
            self.controls.append(" ".join(bits))
        if tag in LANDMARKS:
            self.landmark_depth += 1
            label = self._landmark(tag, attr)
            self.lines.append(f"{'  ' * (self.landmark_depth - 1)}- {label}")
        if self.owner is None and tag in OWNERS:
            self.owner = tag
            self.owner_buf = []
            self.owner_attrs = attr

    def handle_endtag(self, tag: str) -> None:
        if tag in SKIP and self.skip_depth:
            self.skip_depth -= 1
            return
        if self.skip_depth:
            return
        if tag == "title" and self._in_title:
            self.title = " ".join("".join(self._title_buf).split())
            self._in_title = False
        if tag in LANDMARKS and self.landmark_depth:
            self.landmark_depth -= 1
        if tag == self.owner:
            text = " ".join("".join(self.owner_buf).split())
            if text and "{" not in text and "}" not in text and not text.startswith("import "):
                indent = "  " * max(self.landmark_depth, 0)
                extra = ""
                href = self.owner_attrs.get("href")
                if self.owner == "a" and href and not href.startswith("#") and not href.startswith("mailto:"):
                    extra = ""
                if href:
                    extra = f" → {href}"
                self.lines.append(f"{indent}- {self.owner}: {text}{extra}")
            self.owner = None
            self.owner_buf = []
            self.owner_attrs = {}

    def handle_data(self, data: str) -> None:
        if self.skip_depth:
            return
        if self._in_title:
            self._title_buf.append(data)
        if self.owner is not None:
            self.owner_buf.append(data)

    @staticmethod
    def _landmark(tag: str, attr: dict[str, str]) -> str:
        bits = [tag]
        if attr.get("id"):
            bits.append(f"#{attr['id']}")
        classes = attr.get("class", "").split()
        if classes:
            bits.append("." + ".".join(classes[:3]))
        if attr.get("aria-label"):
            bits.append(f'“{attr["aria-label"]}”')
        return " ".join(bits)


def root_blocks(html: str) -> str:
    blocks = re.findall(r":root\s*\{[^{}]*\}", html, flags=re.S)
    if not blocks:
        return ""
    cleaned = []
    for block in blocks:
        lines = ["  " + line.strip() for line in block.splitlines() if line.strip()]
        cleaned.append("\n".join(lines))
    return "\n\n".join(cleaned)


def jsx_to_markup(source: str) -> str:
    source = re.sub(r"\{/\*.*?\*/\}", "", source, flags=re.S)
    source = re.sub(r"//.*?$", "", source, flags=re.M)
    source = re.sub(r"\{([\"'`])(.*?)\1\}", r"\2", source, flags=re.S)

    def drop_expr(match: re.Match[str]) -> str:
        body = match.group(0)
        return body if "<" in body else " "

    return re.sub(r"\{[^{}]*\}", drop_expr, source)


def source_files(folder: Path) -> list[Path]:
    found: list[Path] = []
    for path in folder.rglob("*"):
        if not path.is_file():
            continue
        rel = path.relative_to(folder).as_posix()
        if rel.startswith(".") or "node_modules/" in rel or "/dist/" in f"/{rel}":
            continue
        if path.suffix.lower() in {".html", ".tsx", ".jsx"}:
            found.append(path)
    found.sort(key=lambda p: (p.name != "index.html", p.as_posix()))
    return found


def local_stylesheets(html: str) -> list[str]:
    hrefs = re.findall(r'<link[^>]+rel=["\']stylesheet["\'][^>]*>', html, flags=re.I)
    out = []
    for tag in hrefs:
        href = re.search(r'href=["\']([^"\']+)["\']', tag)
        if not href:
            continue
        url = href.group(1)
        if url.startswith("http") or url.startswith("data:"):
            continue
        out.append(url.split("?")[0])
    return out


def assets(folder: Path) -> list[str]:
    found = []
    for path in folder.rglob("*"):
        if not path.is_file():
            continue
        if path.name == "prompt.md" or path.name.endswith(".zip"):
            continue
        if path.name == ".DS_Store":
            continue
        rel = path.relative_to(folder).as_posix()
        if rel.startswith(".") or "node_modules/" in rel:
            continue
        found.append(rel)
    found.sort()
    return found


def dedupe(items: list[str]) -> list[str]:
    seen = set()
    out = []
    for item in items:
        if item in seen:
            continue
        seen.add(item)
        out.append(item)
    return out


def css_texts(folder: Path, html: str) -> str:
    chunks = [html]
    seen = set()
    for rel in local_stylesheets(html):
        path = (folder / rel).resolve()
        if path.is_file() and folder in path.parents:
            seen.add(path)
            chunks.append(path.read_text(errors="replace"))
    for path in folder.rglob("*"):
        if path.suffix.lower() not in {".css"} or path in seen:
            continue
        rel = path.relative_to(folder).as_posix()
        if "node_modules/" in rel:
            continue
        chunks.append(path.read_text(errors="replace"))
    return "\n".join(chunks)


def tailwind_colors(folder: Path) -> str:
    for path in folder.rglob("tailwind.config.*"):
        if "node_modules" in path.as_posix():
            continue
        text = path.read_text(errors="replace")
        match = re.search(r"colors\s*:\s*\{(?:[^{}]|\{[^{}]*\})*\}", text, flags=re.S)
        if match:
            return match.group(0).strip()
    return ""


def build_prompt(item: dict, folder: Path) -> str:
    sources = source_files(folder)
    parsers: list[tuple[str, Outline]] = []
    html = ""
    for path in sources:
        raw = path.read_text(errors="replace")
        if path.name == "index.html":
            html = raw
        markup = raw if path.suffix.lower() == ".html" else jsx_to_markup(raw)
        parser = Outline()
        try:
            parser.feed(markup)
        except Exception:
            continue
        if parser.lines or parser.images or parser.title:
            parsers.append((path.relative_to(folder).as_posix(), parser))
    primary = next((p for name, p in parsers if name == "index.html"), parsers[0][1] if parsers else Outline())
    tokens = root_blocks(css_texts(folder, html))
    colors = tailwind_colors(folder)
    react = (folder / "package.json").is_file() or any(p.suffix == ".tsx" for p in sources)
    files = assets(folder)
    name = item.get("name") or item["id"]
    kind = item.get("type") or "website"
    category = item.get("category") or ""
    description = item.get("description") or primary.description
    stack = (
        "Keep the stack already in this folder (package.json, source, and built assets). Do not convert it to a different framework."
        if react
        else "Vanilla HTML, CSS, and small JS. No bundler and no new framework."
    )

    lines = [
        f"# Rebuild prompt — {name} (`{item['id']}`)",
        "",
        "Build this template again so the finished page matches the shipped one. "
        "Use the copy, tokens, landmarks, and files below verbatim. "
        "Do not add sections, controls, brands, or sentences that are not listed. "
        "Do not drop a listed landmark or line of copy.",
        "",
        "## Deliverable",
        f"- Kind: {kind}" + (f" · {category}" if category else ""),
        f"- Folder: `{item['path']}`",
        "- Ship `index.html` plus every local file listed under Files, at the same relative paths.",
        f"- {stack}",
        "- Relative paths only. The site is served from a subpath.",
        "- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.",
        "- Honor `prefers-reduced-motion` on anything that moves.",
        "",
        "## What it is",
        description.strip() or "Match the page outline. Do not invent a new offer.",
        "",
        "## Title",
        primary.title or name,
    ]
    if primary.description:
        lines += ["", "## Description meta", primary.description]
    fonts = dedupe([href for _, parsed in parsers for href in parsed.fonts] or primary.fonts)
    scripts = dedupe([src for _, parsed in parsers for src in parsed.scripts])
    if fonts:
        lines += ["", "## Fonts", "Load only these Google Fonts stylesheets:"]
        lines += [f"- `{href}`" for href in fonts]
    if scripts:
        lines += ["", "## External scripts", "Include these, and no others besides the gtag snippet:"]
        lines += [f"- `{src}`" for src in scripts]
    if tokens:
        lines += ["", "## Tokens", "Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.", "", "```css", tokens, "```"]
    if colors:
        lines += ["", "## Tailwind colors", "Keep these color names and values.", "", "```js", colors, "```"]
    lines += ["", "## Page outline", "Reading order. Text after the colon is exact copy."]
    outline_lines = []
    content_parsers = [(n, p) for n, p in parsers if p.lines]
    if len(content_parsers) > 1:
        for source_name, parsed in content_parsers:
            outline_lines.append(f"### `{source_name}`")
            outline_lines.extend(parsed.lines)
    elif content_parsers:
        outline_lines.extend(content_parsers[0][1].lines)
    if outline_lines:
        lines += outline_lines
    else:
        lines += ["- The page has no text landmarks. Rebuild it from the files and tokens only."]
    images = dedupe([img for _, parsed in parsers for img in parsed.images])
    controls = dedupe([ctrl for _, parsed in parsers for ctrl in parsed.controls])
    if images:
        lines += ["", "## Images in the page"]
        lines += [f"- `{img}`" for img in images]
    if controls:
        lines += ["", "## Fields", "Keep these controls, including ids and placeholders."]
        lines += [f"- {ctrl}" for ctrl in controls]
    lines += [
        "",
        "## Files",
        "Keep every file below at the same relative path. Do not rename assets. Do not add stock images.",
    ]
    lines += [f"- `{rel}`" for rel in files]
    lines += [
        "",
        "## Done when",
        "- The title, landmarks, and every quoted line match this prompt.",
        "- The same images appear in the same places.",
        "- No extra menu, section, price, or call to action has been invented.",
        "- Opening the page feels like the original template, not a restyle.",
        "",
    ]
    return "\n".join(lines)


def main() -> None:
    catalog = json.loads((ROOT / "data" / "catalog.json").read_text())
    written = 0
    skipped = []
    for item in catalog["items"]:
        folder = ROOT / item["path"]
        if not folder.is_dir() or not (folder / "index.html").is_file():
            skipped.append(item["id"])
            continue
        prompt = build_prompt(item, folder)
        (folder / "prompt.md").write_text(prompt)
        written += 1
    print(f"wrote {written} prompt.md files")
    if skipped:
        print("skipped:", ", ".join(skipped))


if __name__ == "__main__":
    main()
