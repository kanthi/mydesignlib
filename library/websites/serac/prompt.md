# Rebuild prompt — Serac (`serac`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Travel
- Folder: `library/websites/serac/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
High-altitude cryosphere telemetry, corduroy piste engineering, and interactive fog reveal alpine transition from the Valais Glacier Lab at 3,883m.

## Title
SERAC — Alpine Telemetry & Piste Engineering

## Description meta
High-altitude cryosphere telemetry, corduroy piste mechanics, and sub-zero equipment from the Valais Glacier Lab.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-primary: #05070a;
  --bg-surface: #0a0e14;
  --bg-surface-elevated: #101620;
  --bg-surface-translucent: rgba(10, 14, 20, 0.72);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(255, 255, 255, 0.24);
  --border-accent: rgba(0, 102, 255, 0.4);
  --text-primary: #f5f7fa;
  --text-secondary: #9aa5b5;
  --text-muted: #576273;
  --text-inverse: #05070a;
  --accent-blue: #0066ff;
  --accent-cyan: #38bdf8;
  --accent-ice: #e0f2fe;
  --accent-green: #10b981;
  --accent-amber: #f59e0b;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Space Mono', SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --transition-fast: 0.15s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-normal: 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-slow: 0.7s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: SERAC → #
  - nav
    - ul .nav-links
      - li: Telemetry
      - li: Piste Science
      - li: Equipment
      - li: Dispatch Pass
- main
  - section #hero .hero-viewport
    - h1: Descent
    - p: Zermatt, 3,883 m
    - button: AUTO FOG CYCLE
    - button: MANUAL SCRUB
  - section #telemetry .content-section
    - h2: Cryosphere observation at the summit threshold.
    - p: Continuous atmospheric telemetry captured across the Matterhorn glacier chain. Continuous density scanning, acoustic snowpack analysis, and sub-surface thermal gradients.
    - h3: Dynamic Elevation & Lapse Rate Profile
    - p: Live Barometric Gradient across Valais Traverse
    - label: Elevation Sweep Slider
    - h3: Snowpack Matrix
    - p: Cross-Stratum Shear Stress
  - section #engineering .content-section
    - h2: The geometry of 06:40 corduroy snow.
    - p: Machine grooming transforms chaotic crystals into aligned, high-speed corduroy ridges. Engineered for frictionless edge engagement and micro-thermal re-bonding at dawn.
    - h3: Tiller Tooth Geometry
    - p: Precisely spaced 60mm ridges provide channels that vent frictional meltwater, preventing hydroplaning and ensuring instant ski edge capture on high-g carving turns.
    - h3: Sub-Zero Sintering Window
    - p: Snow crystals are compacted between 05:00 and 06:30 at -8°C. This allows sintered ice bridges to form between flakes before sunrise softens the crystal bonds.
    - h3: Perimeter Blue Visual Index
    - p: High-contrast organic blue dye sprayed along the piste margin maintains spatial visual orientation during dense whiteouts and high-altitude fog rolls.
    - h3: Acoustic Density Verification
    - p: Ultrasonic sensors verify uniform 420 kg/m³ density across 14 meters of working width, eliminating hidden pockets and soft moguls.
  - section #equipment .content-section
    - h2: Tested in Zermatt couloirs at 3,883 m.
    - p: Minimalist, high-performance equipment calibrated for extreme whiteout exposure, sub-zero descents, and cryosphere telemetry collection.
    - article .gear-card
      - h3: Alpinist Summit Shell
      - p: Engineered for gale-force ridges and whiteout insulation. Features internal RECCO avalanche reflectors and magnetic radio mic routing.
      - ul .gear-features
        - li: 28,000mm hydrostatic head
        - li: Integrated LoRa atmospheric beacon pocket
        - li: Storm-rated helmet hood
      - button: INSPECT SPEC
    - article .gear-card
      - h3: Piste 7 Precision Carver
      - p: Pre-impregnated carbon and dual Titanal laminate with 0.5° race-finish base bevel. Flawless tracking on hard-packed corduroy.
      - ul .gear-features
        - li: Ash-Poplar vibration-damping core
        - li: Graphite race base with nano-wax structure
        - li: 14.2m turn radius at 178cm
      - button: INSPECT SPEC
    - article .gear-card
      - h3: Cryosphere Beacon X1
      - p: Multispectral optical sensor measuring snow crystal diameter, surface temperature, and barometric elevation drift in real time.
      - ul .gear-features
        - li: Iridium satellite emergency telemetry
        - li: Sub-zero lithium cell rated to -40°C
        - li: 72-hour continuous mission life
      - button: INSPECT SPEC
  - section #expeditions .content-section
    - h2: Reserved access to the upper glacier corridor.
    - p: Strict daily capacity limits ensure untouched powder lines and freshly rolled corduroy before standard lifts open.
    - h3: Dawn Patrol
    - p: 06:00 early tram access to Piste 7 corduroy before resort opening.
    - ul .pass-list
      - li: First tracks access at 06:15
      - li: Station meteorological briefing
      - li: Heated locker at Trockener Steg
    - a: REQUEST PASS → #hero
    - h3: Glacier Traverse
    - p: Guided high-altitude descent from 3,883 m through the Breithorn plateau.
    - ul .pass-list
      - li: UIAGM mountain guide ratio 1:3
      - li: Crevasse safety gear & harness
      - li: Live satellite telemetry tracking
      - li: Alpine gourmet lunch at Gandegghütte
    - a: RESERVE ROSTER → #hero
    - h3: Cryosphere Fellow
    - p: Season-long research and piste access for technical alpinists.
    - ul .pass-list
      - li: Unlimited Matterhorn Glacier access
      - li: Access to private weather raw telemetry API
      - li: Annual SERAC field equipment package
    - a: APPLY FOR FELLOWSHIP → #hero
- footer .site-footer
  - p: High-altitude research outpost and alpine engineering collective based in Valais, Switzerland. Operating at the boundary of sub-zero performance.
  - h4: Telemetry
  - ul .footer-menu
    - li: Glacier Paradise Station
    - li: Snowpack Stratum
    - li: Wind Shear Vectors
    - li: Live Barometer
  - h4: Piste Lab
  - ul .footer-menu
    - li: Corduroy Tiller Dynamics
    - li: Thermal Sintering
    - li: Blue Marker Geometry
    - li: Field Collection
  - h4: Expeditions
  - ul .footer-menu
    - li: Dawn Patrol
    - li: Glacier Traverse
    - li: Cryosphere Fellowship
    - li: Safety Protocols

## Fields
Keep these controls, including ids and placeholders.
- input[range] #altitudeSlider

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/state_descent.jpg`
- `assets/state_groomed.jpg`
- `index.html`
- `preview.jpg`
- `script.js`
- `styles.css`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
