# Rebuild prompt — Terraq (`terraq`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/terraq/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Industrial digital twin and spatial LiDAR telemetry platform template featuring full-screen interactive WebGL 3D scenes: open-pit mine LiDAR point cloud, energy refinery tank farm, logistics container terminal, and cold storage server archive with live camera yaw/pitch angles, UAV drone reticles, and sub-millimetre volumetric analytics.

## Title
TERRAQ ® — The Ground Truth for Heavy Industry

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-cockpit: #0F0E0A;
  --bg-panel: #161410;
  --bg-panel-elevated: #1F1C16;
  --accent-orange: #E84A27;
  --accent-rust: #D04826;
  --accent-amber: #D97706;
  --text-cream: #F2EDE4;
  --text-dim: #7A756D;
  --border-hud: rgba(242, 237, 228, 0.08);
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --transition-hud: 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hud-header
  - a: TERRAQ ® → #
  - ul .nav-links
    - li: PLATFORM 01
    - li: FIELD REPORTS 02
    - li: SECTORS 03
    - li: COMPANY 04
  - button: CONTACT
- section #sectors .hero-viewport-container
  - h1: The ground truth for heavy industry.
  - p: Terraq turns LiDAR scans, sensors and machine telemetry into one live model of your operation — measured to the millimetre.
  - button: ENGAGE DATA OPS
  - a: EXPLORE A LIVE MODEL ↗ → #capabilities
  - button: 01 CAPTURE
  - button: 02 ENERGY
  - button: 03 LOGISTICS
  - button: 04 ARCHIVE
  - button: ←
  - button: →
- section #capabilities .section-capabilities
  - h2: Engineered for Millimetre Precision
  - h3: High-Density LiDAR
  - p: Stream point clouds directly from airborne UAVs, terrestrial laser scanners, and mobile surveying units. Ingest over 400M spatial points per second with zero decimation.
  - h3: Sub-Millimetre Registration
  - p: Automated sensor fusion registers multi-pass laser sweeps against previous ground surveys, correcting thermal drift and atmospheric distortion instantly.
  - h3: Live IoT & SCADA Sync
  - p: Overlay vibration sensors, pipeline flow rates, and haul truck GPS coordinates directly onto the physical 3D mesh for comprehensive situational awareness.
  - h3: Delta Heatmaps
  - p: Compare cut-and-fill volumes across historical scans with colorized deviation heatmaps, identifying structural subsidence and unapproved excavations in seconds.
- section #reports .section-reports
  - h2: Field Reports
  - article .report-card
    - h3: Pilbara Iron Ore: 0.2% Volumetric Delta Reconciliation
    - p: Replacing quarterly aerial photogrammetry with daily drone LiDAR automated stockpile reconciliation across 14 mining benches.
  - article .report-card
    - h3: Rotterdam Tank Farm: Automated Flange & Weld Tagging
    - p: Over 28,000 refinery valves and pipe connections scanned and indexed into an auditable spatial digital twin with zero shutdown time.
  - article .report-card
    - h3: Antwerp Gateway: Predictive Crane & Yard Optimization
    - p: Live spatial tracking of 45,000 container slots reduced crane idle moves by 18.4% and cut container dwell times across all shifts.
- button: ×
- h3: Request Live Sector Model
- p: Connect with our field engineering team to test Terraq on your site LiDAR point clouds.
- form
  - button: SCHEDULE PLATFORM DEMO →
- footer #footer .site-footer

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='FULL NAME'
- input[email] placeholder='ENTERPRISE EMAIL'
- input[text] placeholder='INDUSTRIAL SECTOR (MINING, ENERGY, MARITIME)'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/terraq-logo.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
