# Rebuild prompt — Arkona (`arkona`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/arkona/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Monolithic architectural brand identity & spatial system: 8-tile specimen board, 3D cantilever corner signage, dual-tone squircle app icons, 4-swatch chromatic matrix, debossed tactile stationery, editorial merchandise, and 3-step logo stress test suite.

## Title
Arkona™ — Architectural Brand Identity & Monolithic Systems

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-crimson: #C70024;
  --color-crimson-hover: #b00020;
  --color-black: #000000;
  --color-charcoal: #333333;
  --color-white: #FFFFFF;
  --color-offwhite: #F9F9F8;
  --color-bone: #EFECE6;
  --color-border: rgba(255, 255, 255, 0.08);
  --color-border-light: rgba(0, 0, 0, 0.08);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-bar
  - a: arkona™ Visual Identity Specimen → #
  - a: Download SVG → assets/arkona-lockup.svg
  - a: Stress Test Suite → #stress-test
- main .container
  - section .header-section
    - h1: ARKONA Architectural Identity
    - p: A monolithic brand architecture built on high-contrast brutalist geometry, structural tension, and spatial presence. 8-tile specimen board, responsive 4-tier logo stack, and complete 3-step diagnostic stress test suite.
  - article .board-tile
  - article .board-tile
  - article .board-tile
  - article .board-tile
    - h3: Absolute Black
    - h3: Crimson or Lust
    - h3: Charcoal
    - h3: Absolute White
  - article .board-tile
  - article .board-tile
  - article .board-tile
  - article .board-tile
  - section #stress-test .stress-suite-card
    - h2: The 3-Step Logo Diagnostic Stress Test Suite
    - p: Industry-standard brand verification verifying geometric silhouette dominance, micro-scalability down to 16px, and instant 5-second cognitive recall.
    - h3: Test 1: Multi-Scale Responsive Matrix (The 16-Pixel Rule)
    - p: Verifying that the monolithic aperture maintains crisp distinction at browser favicon, smartwatch, and mobile notification dimensions.
    - h3: Test 2: Silhouette Dominance (The Gaussian Blur Test)
    - p: Simulate rapid peripheral vision and distance viewing. An iconic silhouette remains unmistakable even under heavy optical distortion.
    - h3: Test 3: Contrast Inversion & Monochromatic Rigor
    - p: "Color enhances, never rescues." The mark must communicate with complete fidelity across all extreme substrates.
  - h2: Vector Delivery Package
  - p: Production-grade SVG vector files ready for web, mobile, and architectural fabrication.
  - h4: arkona-lockup.svg
  - p: Primary horizontal master lockup with wordmark.
  - a: Download SVG → assets/arkona-lockup.svg
  - h4: arkona-mark.svg
  - p: Standalone crimson monolithic portal glyph.
  - a: Download SVG → assets/arkona-mark.svg
  - h4: arkona-mark-white.svg
  - p: Inverted white mark for dark mode & signage.
  - a: Download SVG → assets/arkona-mark-white.svg

## Images in the page
- `assets/tile2-signage.jpg — Arkona 3D architectural facade corner signage`
- `assets/tile5-tote.jpg — Arkona canvas tote bag on architectural slatted bench`
- `assets/tile6-cards.jpg — Arkona luxury business cards and digital QR coordinates`
- `assets/tile7-stationery.jpg — Arkona architectural letterhead and crimson envelope on fluted surface`
- `assets/tile8-phone.jpg — Arkona edge-to-edge crimson mobile application`
- `assets/arkona-lockup.svg — Arkona primary lockup`
- `assets/arkona-mark.svg — Arkona mark`
- `assets/arkona-mark-white.svg — Arkona white mark`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #blurSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/arkona-lockup.svg`
- `assets/arkona-mark-white.svg`
- `assets/arkona-mark.svg`
- `assets/tile2-signage.jpg`
- `assets/tile5-tote.jpg`
- `assets/tile6-cards.jpg`
- `assets/tile7-stationery.jpg`
- `assets/tile8-phone.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
