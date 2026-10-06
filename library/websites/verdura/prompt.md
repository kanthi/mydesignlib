# Rebuild prompt — Verdura (`verdura`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/verdura/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Living stone, alpine flora & botanical architecture experience: monumental serif hero typography, 3D interactive botanical rock monolith with pointer perspective physics & blooming floral cluster, Lenis momentum scrolling, 3D perspective tilt specimen cards, sticky greenhouse grading scrubber with holographic HUD scanline, real-time live spore canvas habitat engine, architectural installations carousel, and bespoke monolith commission studio.

## Title
Verdura — Living Stone, Alpine Flora & Botanical Architecture

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,600;1,9..144,700;1,9..144,800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@1,700;1,800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-linen: #F5F6EE;
  --bg-linen-light: #FAFBF5;
  --bg-panel: #FFFFFF;
  --color-moss: #446E0D;
  --color-moss-light: #5B8E14;
  --color-moss-dark: #2D4A08;
  --color-moss-glow: rgba(68, 110, 13, 0.22);
  --color-charcoal: #1C2216;
  --color-muted: #647059;
  --color-sage: #8F9E83;
  --color-lichen: #DE4B26;
  --border-subtle: rgba(68, 110, 13, 0.12);
  --border-card: rgba(68, 110, 13, 0.18);
  --font-serif: 'Fraunces', serif;
  --font-script: 'Playfair Display', serif;
  --font-sans: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #topNav .top-nav
  - a: Verdura → #
  - nav
    - ul .nav-links
      - li: Specimens
      - li: Methodology
      - li: Habitat Engine
      - li: Installations
  - a: Let's Talk > → #commission
- section #heroStage .hero-stage
  - p: Verdura is based in Pacific Palisades, California. We have over 28 years of experience cultivating living botanical monoliths, micro-climate terrariums, and botanical architecture.
  - a: Scroll to Discover → #collection
- main .content-container
  - section #collection
    - h2: Living Monolith Collection
    - button: All Specimens
    - button: Alpine Granite
    - button: Volcanic Basalt
    - h3: Alpine Saxifrage Monolith
    - p: High-altitude granite matrix inoculated with endemic sub-alpine saxifrage and cushion bryophytes. Self-sustaining capillary moisture retention.
    - button: Inquire Lot
    - h3: Velvet Bryophyte Sanctuary
    - p: Cultivated inside pressurized architectural glass cloches. Layered volcanic tuff stone support with micro-fern sporangia and living lichens.
    - button: Inquire Lot
    - h3: Crustose Lichen Pillar
    - p: Slow-growth crustose lichen colony on metamorphic quartzite. Features vivid ochre and coral spore fruiting bodies with micro-irrigation channels.
    - button: Inquire Lot
  - section #grading .grading-section.reveal-item
    - h2: Greenhouse Grading Protocol
    - h4: Geological Core Sourcing
    - p: Non-invasive harvesting of mineral-dense granite and volcanic basalt boulders selected for balanced capillary porosity.
    - h4: Controlled Bio-Inoculation
    - p: Sterile laboratory inoculation of cold-tolerant alpine bryophytes and lichen colonies under circadian spectral illumination.
    - h4: Architectural Climate Stabilization
    - p: Specimens undergo 18 months of rigorous micro-climate acclimatization before certification for residential and public spaces.
  - section #simPanel .sim-panel.reveal-item
    - h2: Habitat Vitality Simulator
    - p: Sub-alpine moss spore colonies maintain optimal photosynthetic chlorophyll density. Zero fungal pathogens detected across granite capillary pathways.
  - section #installations .installations-section.reveal-item
    - h2: Architectural Installations
    - h3: Alpine Zen Glass Pavilion
    - p: Central 2.8-ton living metamorphic granite stone integrated into custom tempered glass atrium with circadian misting.
    - h3: Engadin Monolith Gallery
    - p: Multi-pillar botanical sanctuary colonized with sub-zero dormant lichens and alpine saxifrage colonies.
    - h3: Karesansui Micro-Ecology
    - p: Dry stone garden architectural installation inoculated with velvety bryophytes and micro-climate humidification.
  - section #commission .commission-section.reveal-item
    - h2: Commission a Living Monolith
    - button: Alpine Granite
    - button: Volcanic Basalt
    - button: Metamorphic Quartzite
    - button: Sub-Alpine Saxifrage
    - button: Velvet Bryophytes
    - button: Coral Crustose Lichens
    - button: Pedestal Monolith (1.2m)
    - button: Atrium Monument (2.4m)
    - button: Estate Centerpiece (4.0m)
    - h3: Alpine Granite • Saxifrage
    - p: Hand-quarried high-porosity matrix with 18-month laboratory bio-inoculation. Delivered with integrated capillary irrigation foundation.
    - button: Submit Private Commission >
- button: ×
- h2: Alpine Saxifrage Monolith
- table .modal-specs-table
  - td: GEOLOGICAL MATRIX
  - td: Alpine Granite
  - td: HABITAT ELEVATION
  - td: 3,200m
  - td: CAPILLARY FLUX
  - td: 98.8%
  - td: CLIMATE TOLERANCE
  - td: -15°C to +35°C
- button: Reserve This Specimen >
- footer .site-footer
  - a: Design Library → ../../../
  - a: Specimens → #collection
  - a: Methodology → #grading
  - a: Simulator → #simulator
  - a: Installations → #installations

## Images in the page
- `assets/rock-monolith.png — Verdura botanical living stone monolith`
- `assets/shard-left.png — Alpine stone shard`
- `assets/shard-right.png — Botanical stone shard`
- `assets/greenhouse-thumb.jpg — Verdura greenhouse specimen`
- `assets/rock-monolith.jpg — Alpine Saxifrage specimen`
- `assets/greenhouse-thumb.jpg — Botanical terrarium specimen`
- `assets/rock-monolith.jpg — Coral Lichen formation`
- `assets/greenhouse-thumb.jpg — Greenhouse grading lab`
- `assets/installation-atrium.jpg — Controlled bio inoculation chamber`
- `assets/installation-residence.jpg — Architectural climate stabilization`
- `assets/installation-residence.jpg — Pacific Palisades Glasshouse installation`
- `assets/installation-atrium.jpg — Engadin Alpine Chalet atrium`
- `assets/installation-gallery.jpg — Kyoto Zen Botanical Study`
- `assets/rock-monolith.jpg — Inspected specimen`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #humRange
- input[range] #kelRange
- input[range] #cycRange

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/greenhouse-thumb.jpg`
- `assets/installation-atrium.jpg`
- `assets/installation-gallery.jpg`
- `assets/installation-residence.jpg`
- `assets/rock-monolith.jpg`
- `assets/rock-monolith.png`
- `assets/shard-left.png`
- `assets/shard-right.png`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
