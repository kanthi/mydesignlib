# Rebuild prompt — Davos (`davos`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Developer
- Folder: `library/brands/davos/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cloud data infrastructure brand identity & systematic design process: 3-slide master case study from draftsman ideation desk with 20+ graphite sketches, to 4x5 stylistic variant matrix, and mathematically rigorous 6x6 tangent circle geometry blueprint.

## Title
Davos Systems — Brand Identity & Design Process Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas: #F1F4FD;
  --color-card-bg: #FFFFFF;
  --color-obsidian: #0F172A;
  --color-slate-600: #475569;
  --color-slate-500: #64748B;
  --color-slate-400: #94A3B8;
  --color-slate-300: #CBD5E1;
  --color-slate-200: #E2E8F0;
  --color-slate-100: #F8FAFC;
  --color-text-lockup: #88919E;
  --color-blue: #3B82F6;
  --color-border: rgba(148, 163, 184, 0.2);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --shadow-slide: 0 25px 60px -15px rgba(15, 23, 42, 0.12), 0 0 1px 1px rgba(15, 23, 42, 0.04);
  --shadow-hover: 0 35px 80px -20px rgba(15, 23, 42, 0.2);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-header
  - a: DAVOS Identity Specimen → #
  - nav .nav-tabs
    - a: 01. Ideation → #slide-1
    - a: 02. Matrix → #slide-2
    - a: 03. Blueprint → #slide-3
    - a: Studio → #studio
- main .container
  - section .hero-banner
    - h1: The Davos Design Process
    - p: A transparent journey through brand identity exploration: from rough graphite sketches across an isometric drafting table, to a systematic 4×5 variant matrix, and mathematical circular tangent geometry.
  - section .slides-section
    - article #slide-1 .slide-wrapper
    - article #slide-2 .slide-wrapper
    - article #slide-3 .slide-wrapper
  - section #studio .interactive-section
    - h2: Vector Specifications & Design Tokens
    - p: Production-ready scalable SVG marks, lockups, and design token values for Davos Systems.
    - h3: Primary Production Mark
    - p: 4-tier harmonic wave crest in calibrated slate shades.
    - h3: Studio Lockup Suite
    - p: Horizontal and vertical lockups with calibrated clearspace.
    - a: Download SVG → assets/davos-mark.svg
    - a: Download SVG → assets/davos-lockup.svg
    - a: Download SVG → assets/davos-lockup-vertical.svg

## Images in the page
- `assets/davos-mark.svg — Davos Logo`
- `assets/slide-1-ideation.jpg — Davos Slide 1: Ideation Desk`
- `assets/slide-2-matrix.jpg — Davos Slide 2: Variant Matrix`
- `assets/slide-3-construction.jpg — Davos Slide 3: Construction Blueprint`
- `assets/davos-mark.svg — Davos Mark`
- `assets/davos-lockup.svg — Davos Horizontal Lockup`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/concept-a.svg`
- `assets/concept-b.svg`
- `assets/concept-c.svg`
- `assets/davos-lockup-vertical.svg`
- `assets/davos-lockup.svg`
- `assets/davos-mark.svg`
- `assets/dovos-blueprint.svg`
- `assets/dovos-lockup-vertical.svg`
- `assets/dovos-lockup.svg`
- `assets/dovos-mark-line.svg`
- `assets/dovos-mark.svg`
- `assets/slide-1-ideation.jpg`
- `assets/slide-2-matrix.jpg`
- `assets/slide-3-construction.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
