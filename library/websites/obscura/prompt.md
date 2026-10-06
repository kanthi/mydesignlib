# Rebuild prompt — Obscura (`obscura`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/obscura/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Ultra-editorial fine art photography & cinematic direction portfolio template: live ticking London/UTC telemetry bar, monolithic brutalist masthead typography, 4-panel vertical filmstrip exhibition (Botanical Noir, Concrete Monolith, Chiaroscuro Portrait, Fluid Resonance), interactive cursor-tracking optical iris magnifier loupe (1.8x), curated photographic archive with technical lens/exposure metadata, darkroom manifesto, institutional exhibition history table, and limited edition baryta print acquisition suite.

## Title
Obscura — Fine Art Photography & Cinema Direction

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@700;800;900&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-void: #070709;
  --color-surface: #101014;
  --color-surface-hover: #17171C;
  --color-border: rgba(255, 255, 255, 0.12);
  --color-border-subtle: rgba(255, 255, 255, 0.06);
  --color-text: #F3F3F5;
  --color-text-muted: #8E8E9C;
  --color-text-dim: #545461;
  --color-scarlet: #E11D48;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 4px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: IG → #gallery
- a: X → #gallery
- a: IN → #gallery
- a: YT → #gallery
- header
  - a: Obscura → #top
  - ul .nav-menu
    - li: Exposition
    - li: Archive
    - li: Philosophy
    - li: Editions
  - button: Inquire
- main .container
  - section #top .hero-stage
    - h1: Obscura
  - section #gallery .section
    - h2: Selected Photographic Works
    - h3: Solitude at the Edge
    - p: Atmospheric maritime fog study captured along the remote North Atlantic coastline.
    - h3: Monolith Study 04
    - p: Sculptural mass and deep shadow gradients carved into raw dolomite stone.
    - h3: Interior Light Geometry
    - p: Curvilinear ceiling cove illumination balancing concrete reflections.
  - section #manifesto .section
    - blockquote: “Light is an architectural material. Shadow is its physical container. Through photographic reduction, we isolate the timeless essence of form.”
    - p: We operate at the intersection of classical darkroom chemistry and rigorous architectural composition. Every frame is stripped of decorative color to expose raw texture, spatial tension, and optical equilibrium.
    - p: Our monograph volumes and museum prints are hand-pulled on archival rag, ensuring preservation across centuries of continuous display.
  - section #archive .section
    - h2: Institutional Archive
    - table .archive-table
      - td: 2026
      - td: Chiaroscuro: The Brutalist Negative
      - td: Palais de Tokyo, Paris
      - td: 2025
      - td: Monolith & Tide: Coastal Studies
      - td: Mori Art Museum, Tokyo
      - td: 2025
      - td: Concrete Reverie: Modernist Geometry
      - td: Neue Nationalgalerie, Berlin
      - td: 2024
      - td: Solitude & Light: Inaugural Retrospective
      - td: Serpentine North, London
  - section #editions .section
    - h3: Concrete Spiral Study I
    - p: Hand-printed silver gelatin archival baryta print. Numbered, stamped, and signed by the artist. Includes embossed Certificate of Authenticity.
    - button: A2 Edition
    - button: A1 Large
    - button: Master Gallery
    - ul .print-meta-list
      - li: PAPER: Hahnemühle Photo Rag Baryta 315gsm
      - li: PROCESS: Archival Pigment Ink / Neutral Black
      - li: PRICE: $850 USD
    - button: Request Acquisition
- button: ×
- h3: Commission & Acquisition
- p: For archival print acquisitions, editorial assignments, and museum representation.
- form
  - button: Submit Inquiry
- footer

## Images in the page
- `assets/branches.jpg — Winter Branches`
- `assets/architecture.jpg — Brutalist Architecture`
- `assets/portrait.jpg — Editorial Portrait`
- `assets/water_splash.jpg — Water Droplet Ripple`
- `assets/solitude.jpg — Solitude at the Edge`
- `assets/monolith.jpg — Monolith Study`
- `assets/interiors.jpg — Lumiere Spatial Geometry`
- `assets/architecture.jpg — Print Preview`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Full Name'
- input[email] placeholder='Institutional / Private Email'
- textarea placeholder='Specific work, print dimensions, or exhibition proposal...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/architecture.jpg`
- `assets/branches.jpg`
- `assets/interiors.jpg`
- `assets/monolith.jpg`
- `assets/portrait.jpg`
- `assets/solitude.jpg`
- `assets/water_splash.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
