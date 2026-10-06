# Rebuild prompt — Datum Hardscapes (`datum`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Services
- Folder: `library/brands/datum/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Architectural hardscape, masonry & structural outdoor living identity system: monolithic stone block wordmark, nested right-angle benchmark square icon, concrete paver-staged stationery suite, 480gsm crew apparel hoodie, 3-way colorway triad, and tactile mineral swatch palette.

## Title
Datum Hardscapes — Brand Identity System & Architectural Specimen

## Description meta
Datum Hardscapes brand identity system: monolithic architectural stone typography, nested benchmark square mark, and tactile masonry materiality.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  /* Material Color System */
  --color-basalt: #13171a;
  --color-basalt-surface: #1a2024;
  --color-basalt-elevated: #222a30;
  --color-slate: #8faab7;
  --color-slate-dark: #688594;
  --color-slate-light: #b4c9d4;
  --color-chartreuse: #d8ff00;
  --color-chartreuse-glow: rgba(216, 255, 0, 0.35);
  --color-concrete: #5e666d;
  --color-concrete-light: #8a939b;
  --color-mortar: #dce7ec;
  --color-mortar-light: #eef4f7;
  --color-white: #ffffff;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --border-stone: rgba(255, 255, 255, 0.1);
  --border-hairline: rgba(255, 255, 255, 0.06);
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 18px;
  --radius-xl: 26px;
  --shadow-stone: 0 30px 60px -12px rgba(0, 0, 0, 0.65), 0 18px 36px -18px rgba(0, 0, 0, 0.5);
  --shadow-card: 0 24px 48px -8px rgba(0, 0, 0, 0.45);
  --transition: cubic-bezier(0.16, 1, 0.3, 1);
  }

  :root {
  --color-basalt: #13171a;
  --color-slate: #8faab7;
  --color-chartreuse: #d8ff00;
  --color-concrete: #5e666d;
  --color-mortar: #dce7ec;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .brand-nav
  - ul .nav-center
    - li: Stationery Suite
    - li: Iconography Matrix
    - li: Crew Workwear
    - li: Construction Grid
    - li: Stone Swatches
- section #stationery .hero-specimen
  - h1: Architectural Masonry & Hardscaping
  - p: Rooted in the surveyor's datum line: an unyielding horizontal benchmark from which every stone paver, retaining course, and outdoor terrace is leveled.
- section #matrix .matrix-section
  - h2: Colorway Triad & Monolithic Wordmark
  - p: High-contrast modular marks engineered to hold structural legibility whether debossed into wet concrete, stamped into steel, or embroidered onto crew uniforms.
  - h4: Heavyweight Crew Hoodie
  - p: 480gsm Washed Basalt Cotton · High-Density Slate Screenprint · High-Vis Silicon Sleeve Seal
- section #blueprint .blueprint-section
  - h2: The Benchmark Square Construction
  - p: Structured on a 128×128 modular surveyor grid. Three interlocking elevation tiers with 35mm structural stems, 11mm architectural joint relief channels, and an upper-right keystone block.
  - h5: 01 // Outer Foundation Tier
  - p: 35mm continuous flange along the ground base and vertical plumb axis with 128mm span.
  - h5: 02 // Stepped Terrace Tier
  - p: Parallel secondary run maintaining an exact 11mm architectural joint relief channel.
  - h5: 03 // The Keystone Block
  - p: Solid 36×36mm cornerstone block completing the optical square silhouette.
- section #materials .materials-section
  - h2: Tactile Substrates & Swatches
  - p: Calibrated to match the authentic mineral tones of quarry bluestone, thermal granite, deep basalt, and high-visibility laser levels.
  - h4: Export Design Tokens & SVG Marks
  - p: Copy CSS variables or embed clean standalone vector marks directly.
  - button: Copy CSS Tokens
- footer .brand-footer

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
