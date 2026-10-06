# Rebuild prompt — Foundry (`foundry`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Developer
- Folder: `library/brands/foundry/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI infrastructure developer brand identity system: chiseled geometric anvil and F monogram, master lockups, Space Grotesk typography specimen, color tokens (Canvas, Ink, Ultramarine Cobalt, Electric Indigo, Cyan), app icon squircles, circular emblem badges, and interactive presentation board.

## Title
Foundry — Brand Identity & System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --brand-primary: #6366F1;
  --brand-accent: #22D3EE;
  --brand-canvas: #FFFFFF;
  --brand-ink: #111111;
  --brand-navy: #00045A;
  --brand-sand: #E6E4DE;
  --font-brand: 'Space Grotesk', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Download Mark SVG → assets/foundry-mark.svg
  - a: ← Library → ../../index.html
- main .brand-canvas-wrap
  - section .panel-1
    - h1: Foundry
  - section .panel-4
    - h2: Ship AI features without the infra headache.
  - section .panel-2
  - section .panel-5
  - section .panel-3
  - section .panel-6
- footer .specs-tray
  - h3: Geometric Construction
  - p: Two interlocking point-symmetric chevrons constructed on an 18-unit orthographic grid, forming an abstract chiseled F monogram.
  - a: foundry-mark.svg → → assets/foundry-mark.svg
  - h3: Primary Palette
  - p: Cobalt Navy (#00045A), Indigo (#6366F1), Electric Cyan (#22D3EE), Canvas (#FFFFFF), and Deep Ink (#111111).
  - h3: Typography Stack
  - p: Display & headlines: Space Grotesk (700 bold). Monospace & telemetry: JetBrains Mono. UI & body: Inter.

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/foundry-app-icon.svg`
- `assets/foundry-icon-circle.svg`
- `assets/foundry-lockup.svg`
- `assets/foundry-mark.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
