# Rebuild prompt — Vektor (`vektor`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Developer
- Folder: `library/brands/vektor/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Constructivist kinetic brand identity system for robotics and deep computing with dynamic 45-degree monogram geometry, multi-surface tactile mockups, and color token specimens.

## Title
Vektor Systems — Brand Identity System & Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-lime: #B6FF1A;
  --color-lime-glow: rgba(182, 255, 26, 0.25);
  --color-slate-black: #0A1916;
  --color-card-bg: #11221E;
  --color-graphite: #121414;
  --color-forest: #17302B;
  --color-pine-muted: #7E968D;
  --color-border: rgba(182, 255, 26, 0.15);
  --color-white: #FFFFFF;
  --font-display: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  --font-body: 'Plus Jakarta Sans', system-ui, sans-serif;
  --font-mono: 'Space Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .specimen-header
  - button: Copy Vector SVG
- main
  - section .hero-specimen
    - h1: Precision Geometry Built For Infinite Scale.
    - p: Vektor combines dynamic 45-degree parallel planes, modular forward chevrons, and hyper-luminous electric lime accents for next-generation cybernetic hardware.
    - button: Neon Lime
    - button: Stark White
    - button: Deep Slate
  - section .mockups-section
    - h2: Multi-Surface Tactile Reproduction
    - p: Tested across architectural signage, luxury stationery, technical apparel, and canvas textiles.
  - section .palette-section
    - h2: Color Tokens & Hierarchy
    - p: Click any swatch to copy value to clipboard.
- footer .specimen-footer

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/logo-lockup-white.svg`
- `assets/logo-lockup.svg`
- `assets/logo-mark.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
