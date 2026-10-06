# Rebuild prompt — Asterion (`asterion`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/asterion/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Fluid geometric emblem and modular lattice identity system: four-petal curvilinear squircle mark with acute negative-space starlight void, vibrant risograph halftone dot matrix poster specimen, continuous horizontal lattice ribbons, inverse cosmic starfield, interactive pattern modulator across substrates, and 3-step logo stress test suite.

## Title
Asterion — Fluid Geometric Emblem & Modular Lattice Identity System

## Description meta
Asterion is an avant-garde visual identity and logo system based on a four-petal squircle emblem, continuous interlocking lattice ribbons, and inverse starlight constellations.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #07080d;
  --bg-card: #0f1118;
  --surface-subtle: #171a24;
  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-strong: rgba(255, 255, 255, 0.2);
  --text-white: #ffffff;
  --text-dim: #94a3b8;
  --text-faint: #64748b;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-full: 9999px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Asterion → #
- section .hero-specimen-section
  - h1: Harmonic Curvilinear Geometry & Modular Lattice Ribbons
  - p: Constructed from four tangent circular quadrants converging around an acute negative-space starlight void. Designed to seamlessly tile into horizontal lattices and starfield tessellations.
- section .interactive-section
  - h2: Interactive Pattern Synthesis
  - p: Test modular ribbon tessellations and inverse cosmic fields across substrates in real time.
  - button: Single Emblem
  - button: Lattice Ribbon
  - button: 2D Frieze
  - button: Inverse Stars
  - button: Obsidian Carbon
  - button: Alabaster Paper
  - button: Chromatic Wash
- section .stress-suite-section
  - h2: 3-Step Logo Stress Test Suite
  - p: Rigorous operational stress-testing across extreme scales, contrast boundaries, and physical substrates.
  - h3: Micro-Scale Legibility
  - p: Preserves central star aperture down to 16px favicon.
  - h3: Monochrome Contrast
  - p: Negative polarity balance on black and white substrates.
  - h3: Physical Debossing & Foil
  - p: Tactile reproduction without thin-hairline breakdown.
- footer .site-footer
  - p: © 2026 Asterion Systems. Brand Architecture & Design Specimen. All rights reserved.

## Images in the page
- `assets/halftone-chroma.jpg — Chromatic Halftone Fluid Wave`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #scaleSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/halftone-chroma.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
