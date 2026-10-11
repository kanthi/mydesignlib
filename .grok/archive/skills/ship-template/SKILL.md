---
name: ship-template
description: >
  End-to-end workflow to turn a design reference (X post, video, image, Framer/Webflow/case study)
  into a fictional-rebrand vanilla HTML/CSS/JS template in this repo, register it in
  data/catalog.json, brand-audit, and HTTP-verify. Use when the user pastes an X/Twitter URL,
  design screenshot, Framer link, or says ship template, new template, implement this design,
  rebrand this site, or /ship-template. Prefer design-system-first on cold starts; optional
  conversion intake when the brief is weak.
---

# Ship template from design reference

Implement **one complete template per reference** unless asked otherwise. Follow project rules in root `AGENTS.md`.

**Route:** design-system-first (cold) → anti-slop check → build → premium-site polish (optional) → interface-craft (optional) → register + audit + verify.

## 0. Optional conversion intake (when reference is weak / goal is conversion)

From [Elaya landing-page-design](https://github.com/elayadesign/ai-design-skills) Part A — strategy only. Skip if the reference already defines structure.

Gather or assume (state assumptions in one line):

| Field | Prompt |
|-------|--------|
| **One action** | Primary CTA (trial, demo, book, waitlist) |
| **Offer** | Exactly what they get |
| **Audience** | ICP + problem |
| **Objections** | Top 1–3 reasons they don’t convert |
| **Proof** | Metrics, testimonials, process (fictional OK) |
| **Risk reversal** | Trial / cancel anytime / guarantee (fictional OK) |

**Page spine** (marketing defaults — adapt to the reference; don’t force if art-direction rebrand needs different order):

1. Hero — outcome hook, subhead, **one** primary CTA, one proof signal, visual  
2. Problem → solution  
3. Benefits / differentiators (not three equal AI cards unless the ref uses that)  
4. How it works / process (number only if sequence is real)  
5. Social proof / case  
6. FAQ or objection handling (if conversion-heavy)  
7. Final CTA (same verb as hero) + footer  

**Copy rules:** benefit-first; specific numbers over “streamline”; CTAs = verb + outcome; no lorem; fictional brands only.

**Repo SEO override:** always **noindex** + root `robots.txt` Disallow — never “optimize for discovery SEO” on library items.

Cold start without a strong visual system → run `/design-system-first` (plan gate + DESIGN.md) before HTML.

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
rg -i '<candidate>' data/catalog.json library/ || echo "name free"
```

Prefer short, memorable, non-colliding names. Dual wordmarks (e.g. Clay / Bank) are fine when the identity needs them.

## 3. Assets

Create `library/websites/<id>/` (or `library/<type>/<id>/` for non-website items).

Generate with `image_gen` (see **imagine** skill):

- `preview.jpg` — catalog thumbnail (16:9 mockup or hero crop)
- Hero / section photos as needed
- Patterns only if CSS/SVG cannot match the look

Prefer **HTML/CSS for UI chrome** (dashboards, pricing cards, stats, file lists) so text stays accurate. Use images for photography, texture, and abstract art.

Copy generated files from the session `images/` folder into `library/websites/<id>/`.

## 4. Build `index.html`

Single-page (unless multi-page is clearly required). Self-contained: relative asset paths, embedded or linked free fonts/libs.

**Required in `<head>` (no search indexing + analytics):**

```html
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Z97ZD3EVSF"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Z97ZD3EVSF');
</script>
```

Do not add SEO discovery markup (sitemap, canonical to a public marketing domain, Open Graph for indexing). Keep root `robots.txt` as `Disallow: /`.

Match the reference’s **structure and craft**, not its trademarks:

- Section order and hierarchy
- Distinctive devices (glass cards, brick-wave, liquid frame, pill nav, etc.) — reimplemented, not copied as proprietary source
- Responsive layout + simple mobile nav when needed
- One clear primary CTA pattern when the reference is conversion-focused
- `prefers-reduced-motion` when using animation

Footer may say `Sample template` and use `@brand.example` contact.

## 5. Register in `data/catalog.json`

Append (do not reorder the whole file casually):

```json
{
  "id": "<id>",
  "type": "website",
  "name": "<Display Name>",
  "description": "Short punchy summary — key visual beats.",
  "tags": ["tag1", "tag2", "tag3"],
  "category": "<ExistingCategory>",
  "thumbnail": "library/websites/<id>/preview.jpg",
  "path": "library/websites/<id>/",
  "featured": true,
  "date": "YYYY-MM-DD"
}
```

Use today’s date. Pick tags that help filtering (e.g. `saas`, `agency`, `monochrome`, `healthcare`). Category must already exist in the catalog (or add carefully if a new vertical is intentional).

## 6. Brand audit

```bash
rg -i 'ORIGINAL_BRAND|designerhandle|framer\.com|webflow\.io|realclient' library/websites/<id>/ || echo "brand audit: clean"
```

Also scan for:

- Real sports/fashion/research conglomerate logos named in copy
- Unchanged case-study client names from the reference
- Comments that still say “Framer remake of X”

Fix any hits before calling done.

## 7. Optional polish before finish

- `/premium-site` Part 4 — type → space → motion → mobile  
- `/interface-craft` — micro feel (radii, hit areas, icons, states)  

## 8. HTTP verify

Local site is served by **Caddy** (machine portal). Do **not** start `python3 -m http.server`.

```bash
BASE="$(~/.config/mydesignlib-portal/serve.sh --url | tr -d '[:space:]')"
# if Caddy is down: ~/.config/mydesignlib-portal/serve.sh --bg
curl -s -o /dev/null -w '%{http_code}\n' "${BASE}library/websites/<id>/"
curl -s -o /dev/null -w '%{http_code}\n' "${BASE}library/websites/<id>/preview.jpg"
python3 -c "import json; d=json.load(open('data/catalog.json')); print(len(d.get('items', d.get('templates', []))))"
```

All critical paths must return **200**. JSON must parse; new id present. See `docs/OPERATIONS.md` § Local preview.

## 9. User summary

Keep it short:

- **Brand** (original → fictional)
- **What shipped** (section list)
- **Catalog** / category
- **Preview URL** — Caddy base from `serve.sh --url` + `library/websites/<id>/`

## Free library policy

| Original | Prefer |
|----------|--------|
| Framer / Webflow interactions | CSS, GSAP + ScrollTrigger, Lenis |
| Proprietary 3D embeds | Three.js |
| Closed component kits | Hand-built HTML/CSS |
| Paid fonts | Google Fonts / SIL / OFL equivalents |

Do not introduce a bundler or npm app for a single landing page.

## Quality bar (recent examples)

- **Noirline** — monochrome agency completeness (process, work, case, pricing, wordmark footer)
- **Claybank** — identity system (palette, dual wordmark, pattern device) as well as marketing sections
- **Claret** — editorial commerce with a committed red system, not a generic product grid

Do **not** cite culled AI-slop items (Respondra, Ovara, Nordwerk, Quietly, Fieldnote, Brevant v1/v2, …) as the bar — see `docs/removed-ai-slop-templates.md`.

Ship at that level of finish: not a thin hero-only stub.

## Checklist (done = all true)

- [ ] `library/websites/<id>/index.html` complete and on-brand (fictional)
- [ ] `noindex` / `nofollow` robots meta present in `<head>`
- [ ] `preview.jpg` present
- [ ] Entry in `data/catalog.json`
- [ ] Brand audit clean
- [ ] HTTP 200 for page + assets
- [ ] Brief summary for the user
