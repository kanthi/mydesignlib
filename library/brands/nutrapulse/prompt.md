# Rebuild prompt — NutraPulse (`nutrapulse`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Wellness
- Folder: `library/brands/nutrapulse/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
AI-assisted metabolic nutrition brand identity & design system: rotational 180° double-leaf helix vector mark, Dark Spruce and Celery Light chromatic tokens, 100x100 architectural grid blueprint with clearspace exclusion ring, multi-scale stress testing suite (16px to 128px), interactive live typography tester, illuminated double-sided cantilever blade sign, and iOS lockscreen nutrient telemetry scanner.

## Title
NutraPulse — Brand Identity & Visual System

## Description meta
NutraPulse is an AI metabolic nutrition and wellness identity system pairing bio-computational precision with organic vitality.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-spruce: #0C1811;
  --color-spruce-surface: #14241B;
  --color-spruce-light: #1D3327;
  --color-lime: #8EE620;
  --color-lime-glow: rgba(142, 230, 32, 0.35);
  --color-azure: #2F80ED;
  --color-celery: #E4F7C8;
  --color-linen: #F4F8EE;
  --color-white: #FFFFFF;
  --color-muted: #7E9385;
  --color-border: rgba(142, 230, 32, 0.16);
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .brand-nav
  - button: Dark Spruce
  - button: Celery Light
  - button: Export SVG >
- main .container
  - section .hero-stage
    - h1: NutraPulse Design System
    - p: The definitive brand system for AI-assisted metabolic nutrition. Engineered around a 180-degree rotational double-leaf helix symbol that bridges whole-food organic nutrition with algorithmic precision.
  - section .sec-block
    - h2: Logo Geometry & Clearspace
    - p: Constructed from two complementary organic arcs rotated at 180 degrees. The internal negative space creates an optical infinity loop symbolizing metabolic feedback loops.
    - h3: Construction Rules
    - ul
      - li: 1. Proportion: Aspect ratio must remain fixed at 1:1. Never stretch or horizontally scale.
      - li: 2. Clearspace: Maintain minimum padding equal to 1.5X where X is the stroke terminal radius.
      - li: 3. Alignment: When paired with the wordmark, the vertical center of the mark aligns with the cap-height of NutraPulse.
      - li: 4. Minimum Scale: 16px digital canvas (verified legible as favicon).
  - section .sec-block
    - h2: Multi-Scale Stress Test
    - p: Verification of mark silhouette integrity from ultra-low density micro-favicons up to large-scale architectural super-graphics.
  - section .sec-block
    - h2: Chromatic Tokens
    - p: Click any swatch to copy value. Designed for clinical contrast ratios across both deep forest and light linen applications.
  - section .sec-block
    - h2: Typography Hierarchy
    - p: Primary brand display utilizes Plus Jakarta Sans for its geometric precision, paired with Inter for clinical reading clarity and JetBrains Mono for nutritional telemetry.
  - section .sec-block
    - h2: Spatial & Digital Applications
    - p: High-fidelity representations of NutraPulse across physical architectural signage and mobile user interfaces.
    - h4: Illuminated Blade Signage
    - p: Double-sided diffuse acrylic lightbox mounted on external brick facade.
    - h4: iOS Home Screen & Live Island
    - p: High-contrast white squircle on dark backdrop with live telemetry indicator.
  - section .sec-block
    - h2: Design System Button Hierarchy
    - p: Standardized interactive action states matching the core chromatic brand palette.
    - button: Primary Action
    - button: Secondary Action
    - button: Ghost Action
- footer .brand-footer
  - a: Return to Design Library > → ../../../

## Fields
Keep these controls, including ids and placeholders.
- input[text] #typeInput

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
