# Rebuild prompt — Janua (`janua`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS / Careers
- Folder: `library/websites/janua/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Atmospheric career and verification portal: glowing 3D perspective doorway threshold, dynamic floor light projection, editorial serif typography, and interactive roles directory.

## Title
Janua — Work at Janua · Verifiable Intelligence

## Description meta
The door is open. Come build verifiable intelligence with a small team that cares about getting it right.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
```css
:root {
  --bg-ground: #12110C;
  --bg-surface: #181712;
  --bg-surface-elevated: #1F1E18;
  --bg-surface-glass: rgba(24, 23, 18, 0.72);
  --border-dim: rgba(255, 255, 255, 0.07);
  --border-light: rgba(255, 255, 255, 0.14);
  --border-focus: rgba(255, 255, 255, 0.28);
  --text-primary: #F5F3ED;
  --text-secondary: #9E9B92;
  --text-tertiary: #68655E;
  --accent-white: #FFFFFF;
  --accent-amber: #E2B874;
  --font-serif: "Instrument Serif", Georgia, "Times New Roman", serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
```
