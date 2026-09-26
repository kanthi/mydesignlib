# Rebuild prompt — Obelisk (`obelisk`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/obelisk/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Spatial architectural portfolio featuring a Cartesian crosshair grid, monumental serif typography, surveillance monospace notes, and an expanding kinetic aperture slit transition revealing full-bleed monochrome photography.

## Title
Obelisk — Monolithic Architecture & Spatial Design

## Description meta
A spatial architectural study exploring Cartesian precision, monumental serif typography, and kinetic aperture transitions.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-bg: #ECECE7;
  --color-bg-subtle: #E4E4DF;
  --color-grid: rgba(0, 0, 0, 0.08);
  --color-grid-dark: rgba(0, 0, 0, 0.15);
  --color-crosshair: rgba(0, 0, 0, 0.35);
  --color-ink: #111315;
  --color-ink-muted: #55575A;
  --color-ink-light: #888A8D;
  --color-white: #FFFFFF;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-mono: 'Space Mono', monospace;
  --ease-aperture: cubic-bezier(0.19, 1, 0.22, 1);
  --ease-standard: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #stickyHud .sticky-hud “Persistent Header”
  - a: OBELISK [41.8955°N 12.4674°E] → #hero
  - nav .hud-nav “Quick Section Navigation”
    - a: SERVICES → #services
    - a: SHOP → #shop
    - a: ABOUT US → #about
    - a: CONTACT US → #contact
  - button: APERTURE [01/04]
  - a: BAG (0) → #shop
- section #hero .hero-viewport “Monumental Aperture Viewport”
  - header .header-bar
    - nav .nav-links-block “Main Navigation”
      - a: SERVICES → #services
      - a: SHOP → #shop
      - a: ABOUT US → #about
      - a: CONTACT US → #contact
    - h1: OBELISK
  - button: BREAK FREE
  - a: ARCHIVE & COMMISSIONS → #services
- section #services .content-section “Selected Commissions and Architectural Works”
  - h2: SPATIAL COMMISSIONS
  - article .commission-card.featured
    - h3: SUNRISE DAWN — TRAVERTINE COLONNADE
    - p: A monumental colonnade constructed from monolithic blocks of Roman porous travertine. The axial spacing of the piers is engineered to align with raking solstice light, casting elongated rhythmic shadows across the polished aggregate floor.
    - button: VIEW IN APERTURE [02]
  - article .commission-card
    - h3: MONOLITH I — ALPINE REFLECTOR
    - p: Twin granite monoliths rising from an alpine reflection basin. Designed to anchor zero-turbulence sound reflection and endure glacial temperature swings without expansion joints.
    - button: VIEW IN APERTURE [01]
  - article .commission-card
    - h3: PRISM GEOMETRY — SKYWAY SYSTEM
    - p: Precision structural glazing suspended on stainless steel tension cables. Low-iron optical panels calibrated with microscopic ceramic fritting for zero-distortion interior daylighting.
    - button: VIEW IN APERTURE [03]
  - article .commission-card
    - h3: CATHEDRAL LIGHT — STEEL CLERESTORY
    - p: Subtractive volume chamber sculpted beneath towering industrial steel window trusses. A single cast-bronze counterweight fixture balances raking northern sky illumination.
    - button: VIEW IN APERTURE [04]
  - article .commission-card
    - h3: TITANIC ARCH — GEOMETRIC ASCENT
    - p: Board-formed monolithic concrete stairs leading through a dual-cantilever portal. Designed as an astronomical sundial measuring solar zenith throughout the Nordic winter solstice.
    - button: VIEW IN APERTURE [02]
  - h4: MONUMENTAL INFRASTRUCTURE
  - p: Public squares, museum pavilions, and civic observatories built to weather geological weathering cycles without maintenance overhead.
  - h4: SUBTERRANEAN CHAMBERS
  - p: Acoustically isolated archival vaults and quiet reliquaries bored directly into bedrock with micro-calibrated clerestory light shafts.
  - h4: PRECISION FACADES
  - p: High-performance low-iron optical curtain walls utilizing bespoke bronze mullions and seismic stainless steel tension anchors.
  - h4: SOLAR ALIGNMENT
  - p: Astronomical architecture calculating seasonal declination to produce sharp chiaroscuro apertures at equinoxes and solstices.
- section #shop .content-section “Limited Physical Editions and Architectural Casts”
  - h2: MINERAL EDITIONS & CASTS
  - article .edition-card
    - h3: TRAVERTINE HORIZON BLOCK
    - p: Honed Roman porous travertine block. Precision CNC milled to 1:100 scale of the Colonnade pier with laser-etched Cartesian grid crosshairs.
    - button: ACQUIRE [01]
  - article .edition-card
    - h3: MONOLITH SHADOW LITHOGRAPH
    - p: 70×100 cm dual-pass silver-halide photogravure printed on 320 gsm Hahnemühle cotton rag. Numbered, stamped, and blind-debossed.
    - button: ACQUIRE [02]
  - article .edition-card
    - h3: OBELISK MONOGRAPH (I—III)
    - p: Three-volume clothbound trilogy bound in Belgian linen and housed in an anodized aluminum slipcase. 540 pages with duotone blueprints.
    - button: ACQUIRE [03]
  - article .edition-card
    - h3: KINETIC APERTURE WEIGHT
    - p: 1.8 kg solid lost-wax patinated bronze paperweight recreating the 6mm kinetic aperture slit with micro-milled index markers.
    - button: ACQUIRE [04]
- section #about .content-section “Studio Manifesto, Philosophy and Materials Matrix”
  - h2: THE DISCIPLINE OF PERMANENCE
  - p: “We do not design for temporary attention, quarterly lease cycles, or digital ephemera. We calculate the deflection of basalt, the crystallization of travertine, and the path of midday solstice light for the next five centuries.”
  - button: 01 / ROMAN TRAVERTINE
  - button: 02 / NORDIC BASALT
  - button: 03 / LOW-IRON OPTICAL GLASS
  - button: 04 / WEATHERING CORTEN
  - button: 05 / LOST-WAX BRONZE
  - h3: ROMAN TRAVERTINE
  - p: Sedimentary calcium carbonate extracted from deep quarries in Tivoli. Calibrated with open cellular pores that swallow specular acoustic flutter while allowing thermal mass stabilization through diurnal heat absorption.
  - table .mat-metrics-table
    - td: Bulk Density
    - td: 2,710 kg/m³
    - td: Compressive Strength
    - td: 112 MPa
    - td: Water Absorption / Porosity
    - td: 4.2% Volumetric
    - td: Projected Surface Epoch
    - td: 850+ Years
    - td: Sound Reflection Index
    - td: NRC 0.35 (Honed)
  - h4: VESPERA VANCE
  - p: Educated at ETH Zürich and the Accademia di Architettura Mendrisio. Directs structural geometry, Cartesian coordinate grids, and raw mineral sourcing.
  - h4: MARCUS LINDQVIST
  - p: Pioneered sub-zero thermal retention and seismic steel tension networks for extreme latitude civic infrastructure and vaulting.
  - h4: ELENA KAEL
  - p: Specializes in subtractive void modeling, acoustic dampening resonance, and precision solar angle apertures for civic monuments.
- section #contact .content-section “Commission Inquiries and Spatial Transmission Terminal”
  - h2: INITIATE COMMISSION
  - form #commissionForm .transmission-form
    - label: SELECT COMMISSION TYPOLOGY
    - button: CIVIC MONUMENT
    - button: SACRED SANCTUARY
    - button: CULTURAL PAVILION
    - button: SUBTERRANEAN ARCHIVE
    - button: PRIVATE RESIDENCE
    - label: COMMISSIONING BODY / REPRESENTATIVE
    - label: ENCRYPTED RETURN DISPATCH (EMAIL)
    - label: PROPOSED SITE COORDINATES OR MUNICIPALITY
    - label: ESTIMATED SPATIAL VOLUME / FOOTPRINT
    - button: TRANSMIT SPECIFICATION DOSSIER
  - h3: ROME ATELIER
  - p: Via Giulia 42, 00186 Roma, Italia Consultations by appointment only for institutional patrons.
  - h3: ZÜRICH WORKSHOP
  - p: Neugasse 29, 8005 Zürich, Schweiz Material stress-testing lab and stone fabrication yard.
  - p: For immediate curatorial, academic, or high-security inquiries:
  - button: COPY COMMISSIONS@OBELISK.STUDIO
- footer .site-footer
  - a: RETURN TO ZENITH → #hero
- button: [✕ ESC]
- p: SOMETHING ABOUT WHAT I WANT TO TELL BUT I CAN'T BECAUSE IT IS FORBIDDEN. YOU WILL NEVER FIND OUT TRUTH OF THIS SITUATION. FORGET ABOUT IT
- h2: SUNRISE DAWN
- h3: ACQUISITIONS
- button: [✕ CLOSE]
- p: YOUR ACQUISITION REGISTRY IS CURRENTLY EMPTY.
- button: REQUEST DISPATCH INVOICE

## Images in the page
- `assets/monolith-pillars.jpg — Aperture preview slit`
- `assets/colonnade-hall.jpg — Travertine Colonnade with Raking Solstice Sunlight`
- `assets/monolith-pillars.jpg — Monolith Pillars in Alpine Still Water`
- `assets/facade-geometry.jpg — Geometric Glass Facade and Structural Louvers`
- `assets/interior-lamp-structure.jpg — Steel Window Trusses and Pendant Lamp`
- `assets/brutalist-monument.jpg — Brutalist Arch & Stairs Monument`
- `assets/colonnade-hall.jpg — Travertine Horizon Block`
- `assets/monolith-pillars.jpg — Monolith I Shadow Lithograph`
- `assets/facade-geometry.jpg — The Obelisk Monograph Volumes I-III`
- `assets/interior-lamp-structure.jpg — Cast Bronze Kinetic Slit Weight`
- `assets/monolith-pillars.jpg — Monolithic architectural specimen`
- `assets/monolith-pillars.jpg — Monolith Pillars in Still Water`
- `assets/colonnade-hall.jpg — Travertine Colonnade Hall`
- `assets/facade-geometry.jpg — Geometric Glass Facade`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #clientName placeholder='e.g. Fondazione Civica di Roma / Dr. A. Sterling'
- input[email] #clientEmail placeholder='client@institution.org'
- input[text] #siteLocation placeholder='e.g. 46.2044° N, 6.1432° E (Lake Geneva basin)'
- input[text] #scaleVolume placeholder='e.g. 2,500 m² footprint / 18,000 m³ volume'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/brutalist-monument.jpg`
- `assets/colonnade-hall.jpg`
- `assets/facade-geometry.jpg`
- `assets/interior-lamp-structure.jpg`
- `assets/monolith-pillars.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
