# Rebuild prompt — Vaelork (`vaelork`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/vaelork/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Architectural infrastructure & institutional systems brand identity — deep celestial navy and antique ivory palette, isometric monogram construction matrix, 8-tile physical & digital specimen board, app icons, and 3-pillar brand story system.

## Title
Vaelork — Brand Identity & Design System

## Description meta
Official brand identity system and architectural visual language for Vaelork. Monolithic deep navy, warm ivory stationery, isometric mark construction, and digital collateral.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Semantic Palette */
  --surface-navy: #0A3366;
  --surface-navy-deep: #061F3E;
  --surface-navy-dark: #04142B;
  --surface-ivory: #F8F3E6;
  --surface-ivory-light: #FDFBF7;
  --surface-page: #F2ECE1;
  --surface-card: #FFFFFF;
  --hairline-grid: #5B82A6;
  --hairline-slate: rgba(91, 130, 166, 0.35);
  --border-subtle: rgba(10, 51, 102, 0.1);
  --border-on-dark: rgba(255, 255, 255, 0.12);
  --text-primary: #0A1C30;
  --text-secondary: #4A5E75;
  --text-muted: #7E92A8;
  --text-on-navy: #FFFFFF;
  --text-on-navy-muted: #A8C4E0;
  --action-primary: #0A3366;
  --action-primary-hover: #061F3E;
  --font-main: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-app: 22%;
  --radius-pill: 9999px;
  --container-max: 1240px;
  --container-pad: clamp(1.25rem, 3.5vw, 2.5rem);
  --section-pad: clamp(3.5rem, 6vw, 6rem);
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Vaelork → #board
  - ul .nav-links
    - li: Identity Board
    - li: Monogram
    - li: Color Palette
    - li: Typography
    - li: Brand Pillars
  - button: Download Kit
- main
  - section .intro-section
    - h1: Engineered for monolithic scale and precision.
    - p: Vaelork is an identity system designed for sovereign infrastructure and institutional systems. Built on deep celestial navy, tactile warm ivory stationery, and an interlocking geometric monogram.
  - section #board .board-section
    - p: Architect frictionless scale through monolithic smart systems.
    - p: Challenge convention. Build boldly with mathematical rigor.
    - p: Connect effortlessly. Integrate intelligence across networks.
  - section #geometry .specimen-section
    - h2: Isometric Mark Anatomy
    - p: The Vaelork monogram is generated from interlocking isometric planes. The mark combines a diagonal primary stroke with a faceted diamond facet, creating dimensional authority without relying on faux-3D gradients.
    - h3: Matrix Specifications
    - table .specs-table
      - td: Base Aspect Ratio
      - td: 1 : 1 (Square Enclosure)
      - td: Primary Stroke Angle
      - td: 60.0° (Isometric Normal)
      - td: Facet Return Angle
      - td: 120.0° Counter-Plane
      - td: Minimum Clear Space
      - td: 1X Cap-Height Unit
      - td: Digital Minimum Size
      - td: 16px × 16px (Favicon Scale)
      - td: Print Minimum Size
      - td: 6.0mm Width
    - h3: Clear Space & Protection Zone
    - p: No graphical elements, typographic locks, or boundary rules may enter the perimeter defined by the X-height dimension surrounding the monogram.
  - section #colors .specimen-section
    - h2: Color Tokens & Values
    - p: A restrained palette anchored by deep architectural navy and warm antique ivory paper.
  - section #typography .specimen-section
    - h2: Type Hierarchy & Wordmark
    - p: Display titles use Plus Jakarta Sans with refined kerning and structural boldness, while technical documentation utilizes IBM Plex Mono.
    - p: Uppercase Plus Jakarta Sans 700 with wide letter-spacing (+0.28em). Used strictly for master lockups, stationery headers, and signages.
    - p: IBM Plex Mono for specifications, telemetry parameters, numeric indices, and architectural blueprints.
  - section #pillars .specimen-section
    - h2: Brand Principles
    - p: The three guiding tenets that govern every physical and digital artifact produced under the Vaelork marque.
    - h3: Scale Infinitely
    - p: Architect frictionless scale through modular smart systems. Build infrastructure designed to outlive ephemeral trends.
    - h3: Innovate Permissionlessly
    - p: Challenge convention with rigorous mathematics and unyielding aesthetic integrity. Build with conviction.
    - h3: Interoperate Seamlessly
    - p: Connect effortlessly across distributed networks. Create universal bridges between sovereign computational layers.
- footer .site-footer
  - p: Monolithic brand identity & architectural design system.
  - button: Download Guidelines (PDF)
- button: ✕
- h3: Download Vaelork Identity Kit
- p: Includes master vector SVGs, construction grid blueprints, print color swatches, and typographical specimen guides.
- button: Download Complete Package (.ZIP)

## Images in the page
- `images/portrait_sunglasses.jpg — Architect Leader`
- `images/phone_in_hand.jpg — Mobile App in Hand`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `images/cards_mockup.jpg`
- `images/hangtags.jpg`
- `images/phone_in_hand.jpg`
- `images/portrait_sunglasses.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
