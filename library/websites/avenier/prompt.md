# Rebuild prompt — Avenier (`avenier`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/avenier/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Luxury architecture and bespoke residential interior atelier featuring warm travertine minimalism, full-bleed alpine sanctuary hero canvas, architectural proof metrics, interactive project gallery (Villa Lumière, Villa Montclair, Maison Verre), tactile materiality laboratory, and private commission desk.

## Title
Avenier Studio — Architecture & Bespoke Interior Design

## Description meta
Avenier Studio is an international architectural atelier crafting timeless residences, alpine sanctuaries, and bespoke interior spaces rooted in monolithic materiality.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-sand: #F6F3ED;
  --bg-surface: #EFEBE3;
  --bg-card: #ECE6DC;
  --text-primary: #181716;
  --text-secondary: #5A564F;
  --text-muted: #959086;
  --accent-bronze: #C49257;
  --accent-bronze-dark: #986D39;
  --border-subtle: rgba(24, 23, 22, 0.12);
  --border-light: rgba(24, 23, 22, 0.06);
  --font-display: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --container-max: 1480px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- button: ✕
- a: 01 Featured Projects → #projects
- a: 02 Spatial Philosophy → #timeless
- a: 03 Materiality & Craft → #materials
- a: 04 Architectural Protocol → #protocol
- a: 05 Private Commissions → #inquiry
- header .site-nav
  - a: PROJECT 8 → #projects
  - a: ABOUT → #timeless
  - a: Avenier → #
  - a: +1 (212) 555-0198 → tel:+12125550198
- main
  - section .hero-section
    - h1: Avenier Studio
    - h4: Villa Engadina
    - p: St. Moritz, Switzerland
    - p: Creating refined spaces where architecture, natural materials, and timeless craftsmanship meet.
    - a: Explore Projects ↗ → #projects
  - section #timeless .timeless-section
    - h2: Designed For Timeless Living
    - p: We approach residential architecture as living sculpture. Every corridor, elevation, and aperture is meticulously calibrated to invite natural zenith daylight, frame dramatic landscapes, and foster an enduring sense of calm.
    - p: Crafting refined residential interiors and private sanctuaries since 2014.
    - p: Luxury homes, alpine retreats, and bespoke living spaces commissioned across 14 countries.
    - p: Trusted for exceptional craftsmanship, discrete client stewardship, and lasting relationships.
    - p: International architectural monographs published in Zurich, Milan, and New York.
  - section #projects .projects-section
    - h2: Featured Projects
    - p: Every project blends architecture, craftsmanship, and timeless interior design to enrich everyday living.
    - button: All Compositions (8)
    - button: Residential
    - button: Alpine & Coast
    - button: Penthouses
    - h3: Villa Lumière
    - p: A contemporary retreat where warm materials, natural light, and architectural simplicity create an atmosphere of effortless luxury.
    - h3: Villa Montclair
    - p: An intimate home inspired by Mediterranean textures, handcrafted details, fluted timber millwork, and timeless living experiences.
    - h3: Maison Verre
    - p: Urban aerial sanctuary perched above the skyline, fusing fluted smoked oak, brushed brass luminaires, and floor-to-ceiling glass expanses.
    - h3: The Somerset Pavilion
    - p: Monolithic limestone and weathered timber barn estate set against rolling meadow hills, pairing geothermal sustainability with ancestral warmth.
  - section #materials .materials-section
    - h2: Materiality & Spatial Craft
    - p: We reject synthetic facsimiles. Our atelier sources authentic geological and botanical elements directly from heritage quarries and artisan workshops across Europe and Japan.
    - h3: Travertine Navona
    - p: Cross-cut porous Roman limestone with organic natural veining, honed to a velvety matte tactile finish.
    - h3: Fluted Smoked Oak
    - p: Slow-grown European oak fumed with natural ammonia vapors and hand-wirebrushed to accentuate grain depth.
    - h3: Hand-Poured Bronze
    - p: Living metallurgical bronze hardware and bespoke plinths with chemical sulfur patinas that age with grace.
    - h3: Belgian Bouclé & Linen
    - p: Unbleached natural flax fibers and dense wool loops woven on traditional heritage looms for effortless comfort.
    - h3: Honed Nero Marquina
    - p: Deep carbon black calcite marble streaked with crisp white fossilized veins, hand-buffed for subtle light refraction.
    - h3: Low-Iron OptiWhite
    - p: Ultra-clear architectural glazing eliminating green tint shifts, ensuring pristine natural outdoor landscape vistas.
  - section #protocol .protocol-section
    - h2: The Architectural Protocol
    - p: A rigorous, collaborative methodology refined over a decade of international residential commissions.
    - h3: Spatial Cartography
    - p: Site orientation analysis, solar path simulation, acoustic envelope mapping, and client lifestyle discovery.
    - h3: Monolithic Modeling
    - p: Volumetric massing studies, continuous line drawings, physical timber scale maquettes, and natural lighting tests.
    - h3: Artisanal Fabrication
    - p: Direct commission of bespoke joinery, stone mason sculpting, bronze pourings, and integrated architectural fixtures.
    - h3: Turnkey Handover
    - p: Curated art acquisition, fine linen styling, scene-based architectural lighting calibration, and private estate key delivery.
  - section #inquiry .inquiry-section
    - h2: Commission a Sanctuary
    - p: We accept a limited number of residential and private estate commissions annually to ensure our principals remain personally involved in every detail.
    - a: +1 (212) 555-0198 → tel:+12125550198
    - a: concierge@avenier.example → mailto:concierge@avenier.example
    - form .inquiry-form
      - label: Full Name
      - label: Email Address
      - label: Typology
      - option: Private Residence
      - option: Alpine Sanctuary
      - option: Coastal Villa
      - option: Skyline Penthouse
      - option: Country Estate
      - label: Location & Site
      - label: Spatial Scope & Vision
      - button: Submit Private Commission Request →
- footer .site-footer
  - h3: Avenier Studio
  - p: International architectural atelier specializing in monolithic residential spaces, alpine retreats, and bespoke interior craft.
  - h5: Compositions
  - ul
    - li: Villa Lumière
    - li: Villa Montclair
    - li: Maison Verre
    - li: The Somerset Pavilion
    - li: Villa Engadina
  - h5: Atelier
  - ul
    - li: Spatial Philosophy
    - li: Materiality Lab
    - li: Design Protocol
    - li: Private Commissions
    - li: Monographs & Press
  - h5: Coordinates
  - ul
    - li: Zürich • Schweiz
    - li: Paris • France
    - li: New York • USA
    - li: Kyoto • Japan
- button: ✕
- h3: Villa Lumière
- h5: Location
- p: Provence, France
- h5: Area
- p: 820 m² / 8,825 sq ft
- h5: Materials
- p: Travertine, Bronze, Smoked Oak
- h5: Handover
- p: Autumn 2025
- p: Conceived as a dialogue between daylight and nocturnal serenity, Villa Lumière integrates sweeping curved ceiling coves with recessed warm lumen emitters. The polished concrete gallery floor reflects twilight skies while floor-to-ceiling glass expanses dissolve the boundary between the interior living salon and the hillside infinity terrace.
- button: Inquire About Similar Typologies →

## Images in the page
- `assets/hero-residence.jpg — Avenier Studio Alpine Villa Living Room Sanctuary`
- `assets/hero-residence.jpg — Villa Engadina Preview`
- `assets/sculptural-staircase.jpg — Monumental Travertine Sculptural Spiral Staircase by Avenier Atelier`
- `assets/project-lumiere.jpg — Villa Lumière Architectural Gallery by Avenier Studio`
- `assets/project-montclair.jpg — Villa Montclair Country Residence by Avenier Studio`
- `assets/project-verre.webp — Maison Verre Penthouse Master Suite by Avenier Studio`
- `assets/project-somerset.jpg — The Somerset Pavilion Estate by Avenier Studio`
- `assets/project-lumiere.jpg — Project detail photo`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #clientName placeholder='Eleanor Vance'
- input[email] #clientEmail placeholder='vance@residence.example'
- select #projectType
- input[text] #projectLocation placeholder='Geneva / Engadine / Manhattan'
- textarea #projectScope placeholder='Briefly describe your property, spatial requirements, and desired timeline...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/detail-terracotta.jpg`
- `assets/hero-residence.jpg`
- `assets/project-lumiere.jpg`
- `assets/project-montclair.jpg`
- `assets/project-somerset.jpg`
- `assets/project-verre.webp`
- `assets/sculptural-staircase.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
