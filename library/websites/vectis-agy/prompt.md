# Rebuild prompt — Vectis (`vectis-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/vectis-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Operational AI infrastructure and autonomous agent orchestration. Features pure obsidian dark canvas with undulating white kinetic wave video, metallic liquid-gradient pill links, Instrument Serif italicized typography, and live telemetry stats.

## Title
Vectis — Operational AI Infrastructure

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900&family=Instrument+Serif:ital@1&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #000000;
  --text: #ffffff;
  --muted: #9a9a9a;
  --stat: #d8d8d8;
  --border: rgba(255, 255, 255, 0.16);
  --border-soft: rgba(255, 255, 255, 0.12);
  --logo: 15.5px;
  --logo-mark: 22px;
  --nav: 14px;
  --nav-h: 40px;
  --btn: 13.5px;
  --btn-h: 40px;
  --hero-btn-h: 42px;
  --h1: 52px;
  --lede: 15.5px;
  --badge: 12.5px;
  --stat-size: 13.5px;
  --header-y: 22px;
  --header-x: 40px;
  --stats-x: 72px;
  --stats-y: 36px;
  --hero-gap: 85px;
  --copy-max: 860px;
  --lede-max: 470px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: Vectis.ai → #top
  - nav .nav-pills
    - a: Benefits → #benefits
    - a: How It Works → #how-it-works
    - a: FAQs → #faqs
    - a: Pricing → #pricing
  - a: Start for Free → #start
- main #top .hero
  - h1: Deploy autonomous AI agents to orchestrate operational scale
  - p: Deploy adaptive AI agents that learn, execute, and scale mission-critical tasks across your enterprise business graph.
  - a: Start for Free → #start
  - a: See it in action → #demo
- footer .stats

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
