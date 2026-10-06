# Rebuild prompt — Syncline (`syncline`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · SaaS
- Folder: `library/brands/syncline/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Unified workflow & continuous team alignment brand identity system: C2 180° rotationally symmetric dual-lobe fluid S mark, interactive CAD bezier anchor & tangent drafting blueprint, exact periwinkle lilac to midnight navy color tokens, 3D frosted acrylic squircle tile, and iOS Dynamic Island app ecosystem.

## Title
Syncline — Brand Identity Guidelines & System

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --c-canvas: #9292EC;
  --c-iris: #5D5CFA;
  --c-iris-dark: #4746DE;
  --c-lavender: #BCBCFC;
  --c-lavender-tint: #E5E5FF;
  --c-navy: #0E2541;
  --c-navy-deep: #09192C;
  --c-white: #FFFFFF;
  --c-porcelain: #F6F6F7;
  --c-slate: #7B84B6;
  --c-slate-light: #A4AFC3;
  --c-card-shadow: 0 16px 40px rgba(14, 37, 65, 0.15);
  --f-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --f-body: 'Inter', -apple-system, sans-serif;
  --f-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-card: 28px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-bar
  - a: syncline SYSTEM // V2.4 → #overview
  - nav .top-nav
    - a: Showcase → #overview
    - a: CAD Blueprint → #geometry
    - a: Colors → #colors
    - a: Typography → #typography
    - a: Stress Test → #stress
    - a: Export → #export
  - a: ← Design Library → ../../index.html
- main .container
  - section #overview .section-block
    - h1: Syncline Visual Identity System
    - p: Unified workflow operating system branding. Constructed with organic bezier fillets, frosted acrylic substrate, and calibrated periwinkle-to-navy chromatic hierarchy.
    - p: Tasks, Data, and Teams stay aligned within one uninterrupted flow
    - h2: Flow your work. Stay in sync.
  - section #geometry .section-block
    - h2: Geometric Blueprint & Bezier Flow
    - p: Engineered on a 2-fold rotational symmetry axis ($C_2$). Anchor points align with circular compass tangents, ensuring seamless visual balance at all device resolutions.
    - button: Tangent Guides
    - button: Anchor Nodes
    - button: X-Ray Wireframe
  - section #colors .section-block
    - h2: Exact Color Palette Architecture
    - p: Extracted with spectrophotometric precision from the reference artwork. Click any token to copy the HEX code to your clipboard.
    - p: Primary kinetic brand accent, active workflow status, and core gradient origin.
    - p: Gradient termination point, soft tactile UI elements, and badge surfaces.
    - p: Primary dark container cards, app icon chassis, and contrast baseline.
    - p: Atmospheric outer stage substrate and marketing hero background.
    - p: CAD vector drafting cards and technical telemetry backgrounds.
    - p: Alignment wedge highlights, master wordmark paths, and palette cards.
  - section #typography .section-block
    - h2: Typographic Hierarchy & Specimen
    - p: Geometric neo-grotesque type pairing with monospaced telemetry.
    - h4: Plus Jakarta Sans
    - h4: JetBrains Mono
  - section #stress .section-block
    - h2: The 3-Step Logo Stress Test Suite
    - p: Guaranteeing optical clarity across extreme scale reduction and monochrome contrast.
  - section #export .section-block
    - h2: Production Vector Export Kit
    - p: Download clean SVG vectors or copy XML markup directly.
    - h4: Syncline Vector Mark
    - a: Download SVG → assets/syncline-mark.svg
    - button: Copy XML
    - h4: Master Brand Lockup
    - a: Download SVG → assets/syncline-lockup.svg
    - button: Copy XML
    - h4: CAD Blueprint Vector
    - a: Download SVG → assets/syncline-mark-blueprint.svg
    - button: Copy XML
- footer
  - p: Rebranded fictional design specimen archive for mydesignlib. All brand assets, geometry, and mockups original.

## Fields
Keep these controls, including ids and placeholders.
- input[text]

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/syncline-app-icon.svg`
- `assets/syncline-banner.svg`
- `assets/syncline-flow-card.svg`
- `assets/syncline-glass-tile.svg`
- `assets/syncline-lockup.svg`
- `assets/syncline-mark-blueprint.svg`
- `assets/syncline-mark.svg`
- `assets/syncline-palette-card.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
