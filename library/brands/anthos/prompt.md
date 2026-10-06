# Rebuild prompt — Anthos (`anthos`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/anthos/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Botanical deep-tech visual identity & brand system: 6-tile specimen board, glowing serif wordmark, 4-swatch chromatic palette (Coral, Cream, Cerulean, Navy), 6-fold harmonic ribbon clover mark, social ecosystem mockup, product landing screen, and 3-step logo stress test.

## Title
ANTHOS — Visual Identity & Creative Brand System

## Description meta
Anthos is an investor-grade brand identity system for deep tech and frontier creators, pairing botanical elegance with cryptographic precision.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-coral: #F89E78;
  --color-cream: #F4EEE0;
  --color-cerulean: #3173AD;
  --color-navy: #193857;
  --color-navy-dark: #12273D;
  --text-dark: #193857;
  --text-muted: #647B95;
  --border-subtle: rgba(25, 56, 87, 0.12);
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --shadow-sm: 0 4px 12px rgba(25, 56, 87, 0.05);
  --shadow-md: 0 16px 36px rgba(25, 56, 87, 0.08);
  --shadow-lg: 0 24px 60px rgba(25, 56, 87, 0.12);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-nav
  - a: ANTHOS → #
  - button: Copy Palette Tokens
  - a: Stress Test Suite → #stresstest
- main
  - section .board-intro-header
    - h1: Anthos Identity System
    - p: Pairing botanical growth aesthetics with cryptographic precision for deep tech and frontier software creators.
  - section .specimen-board-wrapper
    - h2: ANTHOS
    - button: Following
    - p: Designing investor-grade brand identities for deep tech and frontier software systems.
    - h3: Ideas That Find Their Blossom
    - p: A modern space for creators to design, share, and grow what they love.
    - button: Discover Now >
  - section #stresstest .stress-test-section
    - h3: 3-Step Logo Stress Test Suite
    - p: Verification of optical clarity, silhouette recognition, and geometric integrity across digital touchpoints.
- footer .site-footer

## Images in the page
- `assets/floral-reflection.jpg — Floral reflection under water`
- `assets/macro-eye.jpg — Art specimen preview`
- `assets/macro-eye.jpg — Surreal art photography: Eye with blue forget-me-not blossom`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/anthos-mark.svg`
- `assets/floral-reflection.jpg`
- `assets/macro-eye.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
