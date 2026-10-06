# Rebuild prompt — Avelora (`avelora`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/avelora/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Next-generation brand identity & monolithic design system: 8-pointed octagram lattice emblem with D4 dihedral symmetry, high-contrast Instrument Serif editorial typography, chromatic silk-screened dither palettes, interactive 6-slide brand guidelines presentation deck, vector geometry laboratory, and multi-substrate poster suite.

## Title
Avelora Studios — Brand Guidelines & Identity Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-cobalt: #2B50EC;
  --color-orange: #FF5722;
  --color-amber: #FEC735;
  --color-magenta: #9C34F2;
  --color-obsidian: #161618;
  --color-card-dark: #1E1E22;
  --color-alabaster: #FAF9F6;
  --color-paper: #F3F1EC;
  --color-pure-white: #FFFFFF;
  --color-border-dark: rgba(255, 255, 255, 0.12);
  --color-border-light: rgba(0, 0, 0, 0.10);
  --color-text-dark: #161618;
  --color-text-light: #F4F4F5;
  --color-text-muted: #71717A;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --dither-bg: radial-gradient(circle at 80% 20%, #2B50EC 0%, rgba(43,80,236,0) 65%),
  radial-gradient(circle at 20% 80%, #FEC735 0%, rgba(254,199,53,0) 60%),
  radial-gradient(circle at 40% 50%, #FF5722 0%, rgba(255,87,34,0) 60%),
  linear-gradient(135deg, #9C34F2 0%, #FF5722 50%, #FEC735 100%);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: Avelora Identity Specimen → #
  - nav .header-nav
    - a: Overview (2×3) → #deck-view
    - a: Geometry Lab → #construction
    - a: Tokens → #palette
    - a: Assets → #assets
- main .main-container
  - section #deck-view .deck-hero
    - h1: Brand Guidelines
    - p: Avelora Studios — Vol. 01. Monolithic visual architecture, chromatic dither substrates, and 8-pointed octagram geometry designed for next-generation digital ateliers.
  - section .grid-view-container
    - article .slide-card.slide-cover
      - h2: Brand Guidelines
    - article .slide-card.slide-logo-spec
      - h3: Primary Logo
    - article .slide-card.slide-icon-sys
      - h3: Icon System
    - article .slide-card.slide-type-spec
      - h3: Typography
    - article .slide-card.slide-visuals
      - h3: Form Meets Digital Precision.
    - article .slide-card.slide-posters
      - h3: Layout & Poster Styles
  - section #construction .deep-dive-section
    - h2: Geometric Construction Lab
    - p: Interactive inspection of the 8-pointed D4 dihedral octagram lattice mark and coordinate system.
  - section #palette .deep-dive-section
    - h2: Colorway Matrix & Design Tokens
    - p: Click any token card to copy the hex code to your clipboard.
  - section #assets .deep-dive-section
    - h2: Vector Deliverables & Assets
    - p: Production-ready SVG marks, full horizontal lockups, and design token files.
    - h3: Avelora Octagram Mark
    - p: Standalone vector emblem with D4 symmetry.
    - a: Download SVG → assets/avelora-mark.svg
    - h3: Primary Studio Lockup
    - p: Horizontal combination lockup with Instrument Serif.
    - a: Download Lockup → assets/avelora-lockup.svg
    - h3: Chromatic Dither Canvas
    - p: High-resolution textured gradient wallpaper.
    - a: Download Texture → assets/dither-gradient.jpg

## Images in the page
- `assets/avelora-lockup-white.svg — Avelora Lockup`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #rotSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/avelora-lockup-white.svg`
- `assets/avelora-lockup.svg`
- `assets/avelora-mark-white.svg`
- `assets/avelora-mark.svg`
- `assets/dither-card.jpg`
- `assets/dither-gradient.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
