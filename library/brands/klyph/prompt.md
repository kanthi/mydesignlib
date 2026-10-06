# Rebuild prompt — Klyph (`klyph`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/klyph/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Brutalist creative technology studio & algorithmic type foundry identity: modular S-glyph with 180° rotational C2 symmetry, interactive generative tessellation wave studio with mouse perturbation, 100x100 geometric blueprint, multi-scale stress tray, fluted walnut stationery card plinth, archival clamshell monograph case, reeded glass folio, and heavyweight boxy streetwear tee backprint.

## Title
Klyph — Brand Identity & Algorithmic Design System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-cobalt: #002BFF;
  --color-cobalt-glow: rgba(0, 43, 255, 0.25);
  --color-obsidian: #09090B;
  --color-surface: #121215;
  --color-surface-hover: #18181D;
  --color-border: #23232A;
  --color-text: #FFFFFF;
  --color-text-muted: #8E8E9F;
  --color-text-dim: #545463;
  --color-walnut: #231C18;
  --color-white: #FFFFFF;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-xl: 32px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: klyph ID: KLYPH-SYS-01 → #top
  - button: Obsidian
  - button: Cobalt
  - button: White
  - a: Export SVG → assets/mark.svg
- main .container
  - section #top .hero-stage
    - h1: klyph
    - p: Crafting symbols of connection at the intersection of design and technology.
    - button: Rotate Mark (45°)
    - button: Copy Vector XML
  - section #tessellation .section
    - h2: Generative Tessellation Studio
    - p: The Klyph S-monogram is engineered to tile continuously in two dimensions. Move your cursor over the canvas to perturb the wave field.
    - button: 0° Tile
    - button: 45° Iso
    - button: 90° S
    - button: Cobalt
    - button: White/Blue
    - button: Obsidian
  - section #geometry .section
    - h2: Geometric Grid & Anatomy
    - p: Plotted within a 100×100 normalized coordinate system, governed by strict 180° rotational $C_2$ invariance.
  - section #scalability .section
    - h2: Multi-Scale Stress Tray
    - p: Stress tested from 16px micro-favicon through 256px architectural masthead display.
  - section #touchpoints .section
    - h2: Material Touchpoints
    - p: Tactile manifestations spanning fluted timber stationery blocks, linen clamshell monograph cases, reeded glass folios, and heavyweight streetwear.
    - h3: Fluted Walnut & Dual Identity Cards
    - h3: Archival Monograph Clamshell Box
    - h3: Reeded Glass & Architectural Folio
    - h3: Heavyweight Boxy Streetwear Tee
  - section #tokens .section
    - h2: Chromatic Tokens
    - p: Click any card to copy its hexadecimal token code to clipboard.
  - section #typography .section
    - h2: Typographic Hierarchy & Tester
    - p: Set in Plus Jakarta Sans and JetBrains Mono. Type below to test character kerning and ink traps.
- footer

## Fields
Keep these controls, including ids and placeholders.
- input[range] #colSlider
- input[range] #rowSlider
- input[range] #scaleSlider
- textarea #liveTypeInput

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/mark.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
