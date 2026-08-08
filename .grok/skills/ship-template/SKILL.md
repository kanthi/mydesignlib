---
name: ship-template
description: >
  End-to-end workflow to turn a design reference (X post, video, image, Framer/Webflow/case study)
  into a fictional-rebrand vanilla HTML/CSS/JS template in this repo, register it in
  data/templates.json, brand-audit, and HTTP-verify. Use when the user pastes an X/Twitter URL,
  design screenshot, Framer link, or says ship template, new template, implement this design,
  rebrand this site, or /ship-template.
---

# Ship template from design reference

Implement **one complete template per reference** unless asked otherwise. Follow project rules in root `AGENTS.md`.

## 1. Research the reference

1. If X/Twitter URL: `x_thread_fetch` on the status ID. Note author, caption, media (photos/video), and any case-study links.
2. Download media:
   - Photos: `curl` `https://pbs.twimg.com/media/<id>.jpg:large` into `/tmp/xmedia/<slug>/`.
   - Video: download mp4; extract frames with `ffmpeg` (e.g. 1 frame / 2s, max ~6 frames).
3. **Read the images** with the image tool so layout, type, color, and sections are understood — do not guess from captions alone.
4. If a live site or case study is linked: `web_fetch` for structure and copy patterns (still rebrand everything).

Capture:

- Industry / product type
- Layout sections (hero, proof, features, pricing, footer…)
- Palette, typography mood, distinctive devices (patterns, glass, split wordmarks, etc.)
- Motion / proprietary stack hints (Framer → free alternatives)

## 2. Rebrand

| Do | Don't |
|----|--------|
| Invent a new brand name | Keep original product/company name |
| Fictional clients, apps, testimonials | Real logos (Kantar, Nike, Cint…) |
| Fictional emails `@brand.example` | Real domains or designer handles in UI |
| Original AI photography / CSS UI | Scraped client shots or marketplace assets |

Name checklist:

```bash
rg -i '<candidate>' data/templates.json templates/ || echo "name free"
```

Prefer short, memorable, non-colliding names. Dual wordmarks (e.g. Clay / Bank) are fine when the identity needs them.

## 3. Assets

Create `templates/<id>/`.

Generate with `image_gen` (see **imagine** skill):

- `preview.jpg` — catalog thumbnail (16:9 mockup or hero crop)
- Hero / section photos as needed
- Patterns only if CSS/SVG cannot match the look

Prefer **HTML/CSS for UI chrome** (dashboards, pricing cards, stats, file lists) so text stays accurate. Use images for photography, texture, and abstract art.

Copy generated files from the session `images/` folder into `templates/<id>/`.

## 4. Build `index.html`

Single-page (unless multi-page is clearly required). Self-contained: relative asset paths, embedded or linked free fonts/libs.

**Required in `<head>` (no search indexing):**

```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
```

Do not add SEO discovery markup (sitemap, canonical to a public marketing domain, Open Graph for indexing). Keep root `robots.txt` as `Disallow: /`.

Match the reference’s **structure and craft**, not its trademarks:

- Section order and hierarchy
- Distinctive devices (glass cards, brick-wave, liquid frame, pill nav, etc.) — reimplemented, not copied as proprietary source
- Responsive layout + simple mobile nav when needed
- One clear primary CTA pattern when the reference is conversion-focused
- `prefers-reduced-motion` when using animation

Footer may say `Sample template` and use `@brand.example` contact.

## 5. Register in `data/templates.json`

Append (do not reorder the whole file casually):

```json
{
  "id": "<id>",
  "name": "<Display Name>",
  "description": "Short punchy summary — key visual beats.",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "<ExistingCategory>",
  "thumbnail": "templates/<id>/preview.jpg",
  "path": "templates/<id>/",
  "featured": true,
  "date": "YYYY-MM-DD"
}
```

Use today’s date. Pick tags that help filtering (e.g. `saas`, `agency`, `monochrome`, `healthcare`). Category must already exist in the catalog `categories` array (or add carefully if a new vertical is intentional).

## 6. Brand audit

```bash
rg -i 'ORIGINAL_BRAND|designerhandle|framer\.com|webflow\.io|realclient' templates/<id>/ || echo "brand audit: clean"
```

Also scan for:

- Real sports/fashion/research conglomerate logos named in copy
- Unchanged case-study client names from the reference
- Comments that still say “Framer remake of X”

Fix any hits before calling done.

## 7. HTTP verify

```bash
# from repo root — start server if needed
python3 -m http.server 8080 &
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8080/templates/<id>/
curl -s -o /dev/null -w '%{http_code}\n' http://127.0.0.1:8080/templates/<id>/preview.jpg
python3 -c "import json; d=json.load(open('data/templates.json')); print(len(d['templates']), d['templates'][-1]['id'])"
```

All critical paths must return **200**. JSON must parse; last entry should be the new id.

## 8. User summary

Keep it short:

- **Brand** (original → fictional)
- **What shipped** (section list)
- **Catalog number** / category
- **Preview URL** `http://127.0.0.1:8080/templates/<id>/`

## Free library policy

| Original | Prefer |
|----------|--------|
| Framer / Webflow interactions | CSS, GSAP + ScrollTrigger, Lenis |
| Proprietary 3D embeds | Three.js |
| Closed component kits | Hand-built HTML/CSS |
| Paid fonts | Google Fonts / SIL / OFL equivalents |

Do not introduce a bundler or npm app for a single landing page.

## Quality bar (recent examples)

- **Respondra** — conversion lessons in the reference (hero outcome, proof up top, single CTA, form next to logos)
- **Noirline** — monochrome agency completeness (process, work, case, pricing, wordmark footer)
- **Ovara** — ultra-clean healthcare OS; widgets as HTML not baked text in images
- **Claybank** — identity system (palette, dual wordmark, pattern device) as well as marketing sections

Ship at that level of finish: not a thin hero-only stub.

## Checklist (done = all true)

- [ ] `library/websites/<id>/index.html` complete and on-brand (fictional)
- [ ] `noindex` / `nofollow` robots meta present in `<head>`
- [ ] `preview.jpg` present
- [ ] Entry in `data/catalog.json`
- [ ] Brand audit clean
- [ ] HTTP 200 for page + assets
- [ ] Brief summary for the user
