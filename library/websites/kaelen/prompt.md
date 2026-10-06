# Rebuild prompt — Kaelen (`kaelen`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/kaelen/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Site-responsive architecture studio website template: massive Swiss grotesque display typography, interactive architectural photo hero with hotspot telemetry pins and orientation dial, passive solar section elevation blueprint viewer, material specimen gallery, filterable built works portfolio, critical essays, and studio booking inquiry modal.

## Title
Kaelen Architecture — Homes Shaped by Light & Land

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-page: #F6F5F2;
  --bg-surface: #FFFFFF;
  --bg-dark: #121415;
  --bg-dark-elevated: #1B1E21;
  --text-main: #121415;
  --text-muted: #646C74;
  --text-subtle: #98A1AA;
  --border-light: rgba(18, 20, 21, 0.08);
  --border-dark: rgba(255, 255, 255, 0.12);
  --accent-terracotta: #E55B32;
  --accent-ochre: #C88D4E;
  --accent-sage: #6B7C6E;
  --font-display: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteHeader .site-header
  - a: kaelen. → #hero
  - nav .nav-pill-wrapper “Main Navigation”
    - a: Home → #hero
    - a: Studio → #blueprint
    - a: Projects → #projects
    - a: Philosophy → #philosophy
    - a: Journal → #journal
  - button: Book a studio visit ↗
- main #mainContent
  - section #hero .hero-section
    - h1: Homes Shaped By Light & Land
    - p: Kaelen is an independent architecture studio designing low-energy homes that read their site first — orientation, wind, views and ground — and build everything else around it.
    - button: Start a project ↗
    - a: View work → #projects
    - h5: Solar Geometry Control
    - h5: Solar Exposure & Triple Glazing
    - h5: Passive Thermal Battery
    - a: Explore the house ↓ → #blueprint
  - section #blueprint .section-blueprint
    - h2: Reading the Site First
    - p: Every line begins with micro-climate telemetry. We analyze seasonal sun angles, katabatic canyon breezes, and geological bedrock formations before drawing a single wall.
    - button: Full Envelope
    - button: Solar Solstice (32°/68°)
    - button: Katabatic Ventilation
    - button: Rammed Earth Core
    - p: Sustainably harvested Alpine oak with zero-VOC biological bio-resins, offering high shear strength and negative carbon storage.
    - p: Compacted local gravel, clay, and mineral sand excavated directly from the building foundation footprint.
    - p: Direct mechanical bedrock anchors that eliminate deep concrete grade beams, preserving natural hydrology.
    - p: Ultra-clear low-iron acoustic glazing with soft-coat Low-E layers that reflect 92% of interior infrared thermal energy.
  - section #philosophy .section-philosophy
    - h2: The Four Vectors of Site-Responsive Architecture
    - p: Standard architecture imposes form onto the land. We do the inverse: we let the geographic, solar, and atmospheric forces of the parcel sculpt the envelope.
    - h3: Orientation
    - p: Every roof pitch, overhang depth, and window placement is mathematically tuned to the solar zenith of the site's latitude, yielding free seasonal warmth and shade.
    - h3: Wind & Climate
    - p: We leverage prevailing katabatic ridge currents to drive natural displacement ventilation, eliminating noisy, energy-intensive mechanical air conditioning.
    - h3: Ground & Terrain
    - p: Rather than bulldozing terraces, we step structures down natural contours. Foundations are pin-mortised directly into bedrock, leaving subterranean aquifers undisturbed.
    - h3: Embodied Carbon
    - p: We prioritize mass timber, unreinforced stone, and unfired earthen blocks that store atmospheric carbon for centuries and return harmlessly to earth at end of life.
  - section #projects .section-projects
    - h2: Built Specimens
    - button: All Projects
    - button: Alpine & Mountain
    - button: Coastal & Fjord
    - button: Arid & Canyon
    - article .project-card
      - h3: Casa Lúmen
    - article .project-card
      - h3: Fjordhus Strand
    - article .project-card
      - h3: Engadin Sanctuary
    - article .project-card
      - h3: Atacama Compound
  - section #journal .section-journal
    - h2: Critical Practice
    - p: We document our failures, field measurements, and thermal imaging data openly to advance low-energy building craft.
    - article .journal-card
      - h3: Why Orientation Outperforms Insulation
      - p: Adding inches of synthetic insulation offers diminishing thermodynamic returns. How micro-positioning along solar azimuth curves solves 70% of heat retention before insulation begins.
      - a: Read Study Paper ↗ → javascript:void(0)
    - article .journal-card
      - h3: The Sensory Acoustics of Heavy Timber
      - p: Investigating the psychoacoustic calming effect of solid end-grain glulam ceilings in alpine residences during high-velocity wind storms.
      - a: Read Study Paper ↗ → javascript:void(0)
    - article .journal-card
      - h3: Zero-Cut Topography & Glacial Bedrock
      - p: Eliminating continuous concrete footing trenches through pneumatic diamond core drilling and stainless expansion rods anchored directly in gneiss bedrock.
      - a: Read Study Paper ↗ → javascript:void(0)
- button: ×
- h3: Book a Studio Visit
- p: We welcome clients, collaborators, and researchers to our physical workshops to examine material mockups, site models, and solar heliodon simulators.
- form
  - label: Studio Location
  - option: Zurich Studio — Dufourstrasse 42, 8008 Zürich
  - option: Mendoza Studio — Calle Belgrano 1140, Mendoza
  - option: Oslo Studio — Havnepromenaden 18, 0150 Oslo
  - label: Your Name
  - label: Email Address
  - label: Inquiry Type
  - option: New Low-Energy Residence (Site-First)
  - option: Alpine / Coastal Retreat Sanctuary
  - option: Civic Pavilion or Adaptive Reuse
  - option: Academic / Passive House Research
  - label: Site Parcel Details (Optional)
  - button: Confirm Studio Appointment ↗
- button: ×
- footer .site-footer
  - p: Homes shaped by light and land. Dedicated to low-energy residential and landscape architecture since 2018.
  - h4: Navigation
  - ul .footer-links
    - li: Home
    - li: Technical Analysis
    - li: Built Works
    - li: Manifesto
    - li: Critical Practice
  - h4: Studios
  - h4: Affiliations
  - ul .footer-links
    - li: Passive House Institute (PHI)
    - li: SIA Swiss Engineers & Architects
    - li: BREEAM Sustainable Fellow
    - li: Mass Timber Research Council

## Images in the page
- `assets/hero-mendoza.jpg — Casa Lúmen low-energy timber and glass residence in Mendoza landscape`
- `assets/blueprint-elevation.svg — Architectural cross section blueprint showing passive solar angles and ventilation airflow`
- `assets/specimen-oak.jpg — Glulam structural oak specimen`
- `assets/specimen-rammed-earth.jpg — Site-quarried rammed earth specimen`
- `assets/specimen-granite.jpg — Alpine bedrock granite specimen`
- `assets/specimen-acoustic-glass.jpg — Acoustic triple glazed glass specimen`
- `assets/hero-mendoza.jpg — Casa Lúmen modern architecture`
- `assets/project-fjordhus.jpg — Fjordhus Strand cantilevered residence in Norway`
- `assets/project-engadin.jpg — Engadin Stone Sanctuary in Swiss Alps`
- `assets/hero-mendoza.jpg — Atacama solar compound residence`

## Fields
Keep these controls, including ids and placeholders.
- select #studioLocation
- input[text] #clientName placeholder='E.g. Elena Rostova'
- input[email] #clientEmail placeholder='elena@example.com'
- select #projectType
- input[text] #projectSite placeholder='Location, approximate area, or terrain type'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/blueprint-elevation.svg`
- `assets/hero-mendoza.jpg`
- `assets/kaelen-logo.svg`
- `assets/project-engadin.jpg`
- `assets/project-fjordhus.jpg`
- `assets/specimen-acoustic-glass.jpg`
- `assets/specimen-granite.jpg`
- `assets/specimen-oak.jpg`
- `assets/specimen-rammed-earth.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
