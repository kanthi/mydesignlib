# Rebuild prompt — Castalia (`castalia`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/castalia/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Classical monumental bronze and marble foundry and spatial digital archive featuring a Three.js classical 3D sculpture on stone pedestal with ACESFilmic PBR shading, 4-way material switcher (Bronze, Marble, Fluid Obsidian, Digital Lattice), floating museum gallery photo card, ambient golden dust particles, amber ribbon caustics, and scroll-driven chapter progression.

## Title
Castalia — Monumental Bronze Sculpture & Fine Art Digital Archive

## Description meta
Castalia is a digital sanctuary and fine art foundry archiving timeless monumental bronze and marble sculptures across ancient memory and digital space.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=JetBrains+Mono:wght@300;400;500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #0a0705;
  --bg-surface: #140f0c;
  --border-grid: rgba(212, 163, 89, 0.12);
  --border-focus: rgba(212, 163, 89, 0.45);
  --text-primary: #f5eedd;
  --text-secondary: #a39580;
  --text-muted: #6e6353;
  --accent-bronze: #d4a359;
  --accent-bronze-glow: rgba(212, 163, 89, 0.35);
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --container-max: 1360px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: CASTALIA → #bronze
  - nav .material-nav
    - button: Bronze
    - button: Marble
    - button: Fluid
    - button: Digital
  - button: Contact
- main
  - section #bronze .chapter-section.container
    - h1: Bronze and Time
    - p: A timeless metallurgical medium holding millennia of human drama. Fluid in molten flames, eternal in solid mass. Each curve captures a tense, heroic instant frozen in stillness.
    - p: Born of fire and classical intention, Castalia bridges ancestral memory and contemporary digital curation. A dynamic energy immortalized in heavyweight burnished bronze.
  - section #marble .chapter-section.container
    - h2: Marble Emotion
    - p: Carved from pure Carrara strata. The stone yields to anatomical tension, veins, and poetic vulnerability. A monument poised between earthly weight and sublime grace.
    - p: Subsurface light penetrates the crystalline quartz matrix, illuminating human perseverance at the precipice of ruthless fate.
  - section #fluid .chapter-section.container
    - h2: Fluid Obsidian
    - p: Viscous obsidian liquid chrome reflecting specular golden highlights. The sculpture dissolves into frictionless liquid surface tension before crystallizing anew.
    - p: An exploration of metamorphosis: where metallic density surrenders to fluid dynamics and reflective planetary caustics.
  - section #digital .chapter-section.container
    - h2: Digital Lattice
    - p: Spatial coordinates, wireframe polygons, and algorithmic tomography preserving the sculpture across eternal silicon memory.
    - p: Available for monumental architectural casting, physical foundry fabrication, and high-fidelity virtual museum installations.
- dialog #contact-dialog .curatorial-dialog
  - h3: Curatorial Inquiries
  - button: Close ×
  - form
    - label: Inquirer Name
    - label: Institution / Collection
    - label: Email Address
    - label: Medium of Interest
    - button: Transmit Curatorial Note ⭘

## Images in the page
- `assets/gallery.jpg — Castalia archival gallery hall with bronze monumental pedestal`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Countess de Vane'
- input[text] placeholder="Galleria Nazionale d'Arte"
- input[email] placeholder='inquiry@collection.example'
- input[text] placeholder='Bronze Casting / Carrara Marble / Spatial Digital'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/gallery.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
