# Rebuild prompt — Rowan Interactive (`rowan`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/rowan/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Mindful studio brand identity system and interlocking Ri ribbon monogram: built on a 5x5 modular grid with accessibility-calibrated earthy Mindful Palette No. 109 tokens, tri-colorway substrates, and studio goods collateral.

## Title
Rowan Interactive — Brand Identity System & Mindful Palette 109 Specimen

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Mindful Palette No. 109 Tokens */
  --color-angel-feather: #F4EFEE;
  --color-glad-yellow: #F5E1AC;
  --color-bud: #A5A88F;
  --color-orange-vermillion: #BC5339;
  --color-scarab: #2C3D37;
  --color-picholine: #566955;
  /* UI & Layout Support */
  --color-bg: #EAE5E3;
  --color-card-bg: #FFFFFF;
  --color-card-border: rgba(44, 61, 55, 0.08);
  --color-text-primary: #2C3D37;
  --color-text-secondary: #566955;
  --color-text-muted: #839088;
  --color-accent: #BC5339;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --shadow-sm: 0 2px 8px rgba(44, 61, 55, 0.04);
  --shadow-md: 0 12px 32px -8px rgba(44, 61, 55, 0.08), 0 4px 12px -2px rgba(44, 61, 55, 0.03);
  --shadow-lg: 0 24px 60px -12px rgba(44, 61, 55, 0.12), 0 8px 24px -4px rgba(44, 61, 55, 0.06);
  --shadow-float: 0 32px 80px -16px rgba(44, 61, 55, 0.18);
  }

  :root {
  --color-angel-feather: #F4EFEE;
  --color-glad-yellow: #F5E1AC;
  --color-bud: #A5A88F;
  --color-orange-vermillion: #BC5339;
  --color-scarab: #2C3D37;
  --color-picholine: #566955;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .top-nav
  - a: Rowan Interactive MP109 → #
  - ul .nav-links
    - li: Palette 109
    - li: Tri-Colorway
    - li: 5×5 Geometry
    - li: Goods
    - li: Exporter
  - button: Copy CSS Tokens
- main .container
  - header .hero-header
    - h1: Rowan Interactive
    - p: An earthy, accessibility-calibrated brand identity system engineered on a continuous 5×5 modular ribbon monogram.
    - button: All Specimens
    - button: 01 Palette 109
    - button: 02 Tri-Colorway
    - button: 03 5×5 Geometry
    - button: 04 Goods
  - section #palette .specimen-section
    - h2: Mindful Palette No. 109
    - p: Optical contrast ratios measured against Scarab (#2C3D37) and Angel Feather (#F4EFEE). Click any swatch to copy its hexadecimal token.
    - h4: Angel Feather
    - h4: Glad Yellow
    - h4: Bud
    - h4: Metallic Sheen
    - h4: Orange Vermillion
    - h4: Picholine
    - h4: Scarab
    - option: Orange Vermillion (#BC5339)
    - option: Scarab (#2C3D37)
    - option: Glad Yellow (#F5E1AC)
    - option: Angel Feather (#F4EFEE)
    - option: Bud (#A5A88F)
    - option: Picholine (#566955)
    - option: Angel Feather (#F4EFEE)
    - option: Scarab (#2C3D37)
    - option: Glad Yellow (#F5E1AC)
    - option: Bud (#A5A88F)
    - option: Picholine (#566955)
  - section #lockups .specimen-section
    - h2: Substrate & Lockup System
    - p: Tri-colorway deployment across primary light uncoated stock, deep scarab substrate, and glad yellow accent surface.
  - section #blueprint .specimen-section
    - h2: 5×5 Modular Ribbon Construction
    - p: Mathematical anatomy of the interlocking Ri monogram, built on dual circular centers C1 (1x, 2.5x) and C2 (4x, 2.5x) with concentric radii R=1.5x and R=2.5x.
    - h3: 2-Fold Rotational Equilibrium
    - p: The Rowan mark resolves the inherent tension between glyph 'R' and glyph 'i' by rotating the upper shoulder arc 180° around the center node (2.5x, 2.5x) to construct the lower leg and foundation of the lowercase letterform.
    - table .geometry-specs-table
      - th: Component
      - th: Grid Range
      - th: Mathematical Rule
      - td: Stem 'R'
      - td: x: [0..1], y: [0..5]
      - td: Full-height vertical pillar (1.0x width)
      - td: Upper Arch
      - td: C1 = (1x, 2.5x)
      - td: Concentric circular arcs (R=1.5x & R=2.5x)
      - td: Lower Ribbon
      - td: C2 = (4x, 2.5x)
      - td: 180° point reflection of upper arch
      - td: Floating Tittle
      - td: x: [4..5], y: [0..1]
      - td: Exact 1x × 1x modular square dot
    - button: Toggle Grid
    - button: Construction Arcs
    - button: Dimensions
    - button: Mark Fill
  - section #collateral .specimen-section
    - h2: Studio Goods & Merchandise
    - p: Physical touchpoints for Rowan Interactive studio members and collaborators, highlighting silkscreen execution on dark textiles.
    - h3: 280 GSM Cotton Studio Crewneck
    - p: Custom milled organic cotton dyed in deep Scarab (#2C3D37) with chest silkscreen print in Orange Vermillion (#BC5339) and woven studio hem label.
    - h3: 16oz Duck Canvas Heavyweight Tote
    - p: Unbleached heavy duck canvas dyed in Scarab with reinforced dual cross-box stitched handles and high-density silkscreen printed Ri monogram.
  - section #exporter .specimen-section
    - h2: Vector Asset Exporter
    - p: Download or copy clean, standards-compliant SVG code for integration into production digital applications.
    - button: Mark SVG
    - button: Light Lockup
    - button: Dark Lockup
    - button: CSS Tokens
    - button: Copy Code
    - button: Download SVG
  - footer
    - p: Rowan Interactive Brand Identity & Specimen Archive · Designed with Mindful Palette No. 109

## Images in the page
- `assets/rowan-tshirt.svg — Rowan Heavyweight Crewneck T-shirt Specimen`
- `assets/rowan-tote.svg — Rowan 16oz Canvas Tote Bag Specimen`

## Fields
Keep these controls, including ids and placeholders.
- select #accFg
- select #accBg
- textarea #exportTextarea

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/rowan-grid.svg`
- `assets/rowan-lockup-dark.svg`
- `assets/rowan-lockup-light.svg`
- `assets/rowan-lockup-yellow.svg`
- `assets/rowan-mark.svg`
- `assets/rowan-tote.svg`
- `assets/rowan-tshirt.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
