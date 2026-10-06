# Rebuild prompt — Nivora (`nivora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Services
- Folder: `library/brands/nivora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Computational software & cloud systems brand identity: asymmetric 7-tile specimen board, architectural vertical totem signage, iOS dock icon specimen, in-situ hardware smartphone display, duplex edge-painted tactile stationery, and 3-step logo stress test suite.

## Title
Nivora™ — Brand Identity & Design System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-abyssal: #042627;
  --bg-card: #083234;
  --bg-card-hover: #0c3e40;
  --color-lime: #D8F84C;
  --color-lime-hover: #e5ff6c;
  --color-text-dark: #062C2D;
  --color-white: #F5F8F5;
  --color-muted: #7E9F94;
  --border-subtle: rgba(216, 248, 76, 0.16);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- nav .top-nav
  - a: Design Library → ../../../
- header .header
  - h1: Nivora ™
  - p: Computational software engineering, distributed cloud infrastructure, and spatial system intelligence. Asymmetric 7-tile identity specimen with dual-arc aperture portal.
- p: Intelligent Software & Distributed Systems
- button: Copy SVG Mark
- a: Master Lockup → assets/nivora-lockup.svg
- section .stress-suite
  - h2: Logo Stress Test Suite
  - p: Optical durability and retention audit under extreme rendering constraints.
  - p: Validates immediate shape recognition when vision is blurred or defocussed.
  - p: Counter-space legibility from 128px master display down to 16px favicon.
  - p: Contrast luminance and tonal balance across polarity reversals.

## Images in the page
- `assets/tile1-signage.jpg — Nivora architectural vertical totem pillar`
- `assets/tile2-dock.jpg — Nivora iOS dock app icon`
- `assets/tile3-phone.jpg — Nivora smartphone device mockup`
- `assets/tile5-portrait.jpg — Nivora executive portrait on geometric grid`
- `assets/tile6-cards.jpg — Nivora edge-painted tactile business cards`
- `assets/tile7-editorial.jpg — Nivora applied engineering editorial specimen`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #blurRange

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/nivora-lockup.svg`
- `assets/nivora-mark.svg`
- `assets/tile1-signage.jpg`
- `assets/tile2-dock.jpg`
- `assets/tile3-phone.jpg`
- `assets/tile5-portrait.jpg`
- `assets/tile6-cards.jpg`
- `assets/tile7-editorial.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
