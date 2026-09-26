# Rebuild prompt — Avocet (`avocet`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · SaaS
- Folder: `library/brands/avocet/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Enterprise support orchestration identity system — ascending chevron wing mark, interactive vector construction grid, tactile NFC stationery suite, 3D cantilevered blade sign, and 3-step logo stress test suite.

## Title
Avocet — Brand Identity System & Guidelines

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-cerulean-primary: #0072CE;
  --color-cerulean-deep: #005BA6;
  --color-cerulean-soft: #E0F2FE;
  --color-paper-cream: #F5F1EA;
  --color-paper-subtle: #FAF8F5;
  --color-paper-white: #FFFFFF;
  --color-ink-charcoal: #101828;
  --color-ink-secondary: #344054;
  --color-ink-muted: #64748B;
  --color-border-subtle: #E2E8F0;
  --font-display: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-pill: 9999px;
  --shadow-sm: 0 2px 4px rgba(16, 24, 40, 0.04);
  --shadow-md: 0 12px 24px -4px rgba(16, 24, 40, 0.08);
  --shadow-lg: 0 24px 48px -12px rgba(16, 24, 40, 0.14);
  --transition-smooth: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: avocet → #
  - ul .nav-links
    - li: Identity Board
    - li: Blueprint
    - li: Stress Test
    - li: Tokens
    - li: Vectors
  - button: Download Mark SVG
- section .hero-overview
  - h1: Avocet — Autonomous Resolution Infrastructure
  - p: A precision brand identity system engineered for high-volume enterprise customer experience: ascending chevron wing mark, Cerulean & warm parchment palette, tactile NFC stationery, and physical environmental touchpoints.
- section #showcase .showcase-board-section
  - button: Cerulean
  - button: Charcoal
  - button: Cream
  - button: White
  - button: Guides Toggle
- section #stress-test .stress-test-section
  - h2: The 3-Step Logo Stress Test Suite
  - p: Evaluated against the industry standard stress criteria: sub-pixel micro-scale legibility, high-contrast monochrome inversion, and substrate versatility.
  - h3: 16px Favicon & Micro-Scale
  - p: Verification that geometry remains distinctly identifiable without merging strokes at micro dimensions.
  - h3: Stark Monochrome Inversion
  - p: Mark performance in strict binary single-color applications (laser engraving, foil stamping, thermal receipts).
  - h3: Substrate Versatility
  - p: Physical material rendering across tactile architectural textures and industrial finishes.
- section #colors .color-section
  - h2: Harmonized Palette Tokens
  - p: Calibrated values optimized for high digital accessibility (WCAG AAA contrast) and precise physical spot color fidelity.
  - button: Copy
  - button: Copy
  - button: Copy
  - button: Copy
- section #exporter .exporter-section
  - h2: Vector Code Exporter
  - p: Ready-to-use clean inline SVG paths optimized for modern web, iOS, and Android applications.
  - button: Copy SVG Markup
  - button: Save .SVG File
- footer .site-footer

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
