# Rebuild prompt — Quire (`quire`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/quire/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Archival book discovery and rare literature platform: massive centered editorial serif headline, 3D perspective fan-out book carousel with mouse tilt, and category filter pill bar.

## Title
Quire — Curated Editions & Rare Literature

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #07080a;
  --surface: #0e1015;
  --card: #141720;
  --accent: #ff4d2e;
  --accent-warm: #f4a261;
  --text: #f5f4f0;
  --text-muted: #8c909d;
  --text-dim: #545766;
  --border: rgba(255, 255, 255, 0.09);
  --border-hover: rgba(255, 255, 255, 0.22);
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #header .header
  - a: Quire → #
  - ul .nav-links
    - li: Catalogs
    - li: Editions
    - li: Hub
    - li: Info
  - a: Join us → #join
  - a: Build Your List → #list
- section .hero
  - h1: Quire
  - h2: Shadows of Stone
  - h2: The Last Message
  - h2: Letters to Venice
  - h2: Silent Archways
  - h2: Echoes of a Haven
  - h2: The Lost Astral
  - h2: Tides of Winter
  - button: All
  - button: Romance
  - button: Short Story
  - button: Memoir
  - button: Classic
  - button: Fantasy
  - button: Architecture
- section #editions .section
  - h2: Printed with rag paper and linen binding.
  - h3: Letterpress Folios
  - p: Cast in lead type and impressioned into 180gsm cotton mould-made rag paper from Somerset mills.
  - h3: Smyth-Sewn Hardcovers
  - p: Bound in German bookcloth with blind debossed title blocks, headbands, and gilt ribbon markers.
  - h3: Monograph Boxsets
  - p: Quarter-bound slipcase editions containing annotated marginalia, original drafts, and facsimile plates.
- footer .footer
  - a: Index → #catalogs
  - a: Colophon → #editions
  - a: Inquiries → #info

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
