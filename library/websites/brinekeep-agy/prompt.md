# Rebuild prompt — Brinekeep AGY (`brinekeep-agy`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/brinekeep-agy/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Charminar 3D architectural construction study — Three.js procedural clip-plane build, four soaring minarets, cardinal pointed arches, solar time-of-day, and Deccan prospectus.

## Title
Brinekeep AGY — The Charminar 3D Architectural Construction Study

## Description meta
A Three.js architectural construction study: four soaring minarets, cardinal pointed arches, dynamic clip-plane build, solar time-of-day, and monsoon weather engine.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Newsreader", "Times New Roman", Georgia, serif;
  --font-body: "Source Serif 4", Georgia, serif;
  --font-label: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #f6f3ea;
  --surface-paper: #faf8f2;
  --surface-ink: #0d1217;
  --text-primary: #181f26;
  --text-on-ink: #f4eee2;
  --text-secondary: #5a646e;
  --border-default: #d2cbb8;
  --action-primary: #e07a2a;
  --action-hover: #ef8b3c;
  --saffron: #d96b27;
  --gold: #d49b38;
  --verdigris: #1f6f68;
  --granite: #8a8476;
  --text-display: clamp(3.2rem, 7.5vw, 6.2rem);
  --text-3xl: clamp(2.1rem, 4vw, 3.1rem);
  --text-2xl: clamp(1.5rem, 2.5vw, 2.1rem);
  --text-xl: 1.35rem;
  --text-base: 1.05rem;
  --text-sm: 0.85rem;
  --text-xs: 0.6875rem;
  --leading-body: 1.62;
  --section-y: clamp(4rem, 8vw, 7rem);
  --wrap: min(1180px, 100% - 2.5rem);
  --radius-pill: 9999px;
  --dur: 220ms;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- section #study .study-stage
  - header .mast
    - nav .mast-nav
      - a: Prospectus → #prospectus
      - a: Kinetics → #kinetics
      - a: Materials → #materials
      - a: Berth → #inquiry
    - a: Request a berth → #inquiry
  - button: PAUSE
  - button: REBUILD
  - button: DAWN
  - button: NOON
  - button: SUNSET
  - button: NIGHT
  - button: CLEAR
  - button: HAZE
  - button: MONSOON
  - button: NOOR
- main #prospectus .prospectus-wrap
  - section .chapter
    - h2: The Four Soaring Minarets & Cardinal Arches
    - p: Commissioned in 1591 CE by Muhammad Quli Qutb Shah at the historic intersection of trans-Deccan trade routes, Charminar stands as a pinnacle of Indo-Islamic architectural geometry.
    - p: Four majestic pointed arches open to the four cardinal directions, flanked by four soaring 48-meter minarets. Each minaret features four distinct storeys ringed by delicately carved double-corbelled balconies, culminating in bulbous domes and gilded brass finials.
    - h3: Cardinal Ogee Arches
    - p: Four 11-meter wide soaring arches opening to the cardinal axes, with ornamental stucco medallions and relief spandrels.
    - h3: Arcaded Loggias
    - p: Double-tiered upper balconies featuring stone jali screens, projecting chhajja eaves, and shaded prayer corridors.
    - h3: Four Fluted Minarets
    - p: Octagonal bases transitioning into fluted cylindrical shafts with carved floral calyxes, crowned by gilded onion domes.
  - section #kinetics .chapter
    - h2: Procedural Construction & Teak Scaffold Kinetics
    - p: The 3D monument rises dynamically via WebGL clipping planes, with teak and bamboo scaffolding automatically erecting one course ahead.
    - p: As the build progress advances from 0% to 100%, the foundation granite gives way to the grand pointed arches, followed by the upper jharokha galleries and the four crowning minaret domes.
    - table .spec-table
      - th: STAGE
      - th: ELEVATION
      - th: STRUCTURAL SYSTEM
      - th: TOLERANCE
      - td: I. Bunyaad
      - td: 0.0m – 0.80m
      - td: Dressed Granite Plinth & Water Basin
      - td: ±2.0mm
      - td: II. Chaudisha
      - td: 0.80m – 4.80m
      - td: Four Cardinal Pointed Arches & Spandrels
      - td: ±1.5mm
      - td: III. Jharokha
      - td: 4.80m – 7.80m
      - td: Double Balcony Loggias & Chhajja Cornice
      - td: ±0.8mm
      - td: IV. Mehraab
      - td: 7.80m – 11.20m
      - td: Four Fluted Minaret Shafts & Balconies
      - td: ±0.5mm
      - td: V. Gumbad
      - td: 11.20m – 13.50m
      - td: Four Domes, Calyx Bands & Gilded Finials
      - td: ±0.2mm
  - section #materials .chapter
    - h2: Deccan Granite, Lime-Mortar Stucco & Cast Brass
    - p: Constructed using native geological materials engineered to withstand centuries of Deccan sun and monsoon deluge.
    - p: The foundation utilizes hard grey granite from the Deccan plateau, while the superstructure is sculpted from lime mortar, pulverized marble, and sand stucco that develops a golden amber warmth under evening solar angles.
  - section #inquiry .chapter
    - h3: Request a Study Berth
    - p: Architectural studies, physical brass castings, and seasonal research access to the Charminar construction folios.
    - form .inquiry-form
      - option: Charminar 3D Architectural Folio
      - option: Physical Brass Finial Specimen
      - option: On-Site Heritage Fellowship
      - button: Submit Inquiry
  - footer .colophon

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='Your Name or Studio'
- input[email] placeholder='Field Contact (Email)'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/adobe.svg`
- `assets/colonnade.svg`
- `assets/colosseum.svg`
- `assets/pyramid.svg`
- `index.html`
- `preview.jpg`
- `tex-copper.jpg`
- `tex-granite.jpg`
- `tex-pine.jpg`
- `three.module.js`
- `world.js`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
