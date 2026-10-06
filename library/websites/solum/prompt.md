# Rebuild prompt — Solum Reserve (`solum`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/solum/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Ultra-luxury horology single-origin coffee bean launch: obsidian void canvas, procedural 3D bean canvas with 5-beat scrollytelling (Origin Chronometer, Micro-Fissure Topography, Thermodynamic Inflection, Cellular Honeycomb Lattice, and Hermetic Capsule Seal), interactive thermal infrared hover scanner, Web Audio escapement clock ticks, SVG roasting telemetry curves, and limited edition capsule reservation drawer.

## Title
Solum Reserve — The 2,140m Single Bean Chronometer

## Description meta
Cultivated at 2,140 meters in the Colombian Andes. Roasted with chronometric horology precision. An ultra-luxury single-lot coffee bean launched as a precision instrument.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #060709;
  --bg-surface: #0c0e13;
  --bg-card: rgba(18, 20, 26, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.15);
  --border-gold: rgba(197, 160, 89, 0.35);
  --gold: #c5a059;
  --gold-bright: #e7c77e;
  --gold-dim: #7f6432;
  --gold-glow: rgba(197, 160, 89, 0.12);
  --text: #f5f4ef;
  --text-muted: #8e8f99;
  --text-dim: #555763;
  --text-gold: #d4b472;
  --thermal-cyan: #22d3ee;
  --thermal-amber: #f59e0b;
  --thermal-crimson: #ef4444;
  --font-display: 'Cinzel', serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --header-h: 72px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - button: MUTE
  - button: RESERVE LOT
- h1: The Monolith Bean.
- p: Cultivated above the cloud line at 2,140 meters in Huila, Colombia. Harvested at peak sugar brix and treated not as a consumable crop, but as an irreplaceable single-unit horology specimen.
- h2: Micro-Fissure Topography.
- p: Laser interferometry reveals the central crease depth of 1.42 millimeters. The silverskin chaff is vacuum-stripped at 60 millibar to expose pure caramelized lipid oils with zero scorch marks.
- h2: Thermodynamic Inflection.
- p: Roasted using convective laminar helium-gas heating. First crack occurs precisely at 204.2°C, halted with liquid nitrogen quenching within an 800-millisecond precision window.
- h2: Cellular Honeycomb.
- p: Sub-micron porous cellulose matrix preserves delicate jasmonic acid, bergamot esters, and crystalline sucrose without cellular collapse. An internal lattice built for optimal water extraction kinetics.
- h2: Hermetic Vault Allotment.
- p: Each individual bean is encapsulated inside a CNC-machined 6061-T6 aerospace aluminum cylindrical vault, backfilled with 99.99% pressurized medical-grade nitrogen under a sapphire crystal crystal optic port.
- section .section-telemetry
  - h2: The Chronometric Roasting Profile.
  - p: Culinary roasting relies on human smell and sound. Solum Reserve calculates heat transfer down to 10-millisecond telemetry cycles, balancing the rate of rise (RoR) to preserve rare floral monoterpenes.
  - h2: Acquire Edition 01.
  - p: A single certified Solum Gesha bean sealed inside the numbered 6061-T6 aluminum hermetic capsule, complete with precision optical calibration certificate and lot provenance dossier.
  - button: RESERVE CAPSULE
  - button: VIEW CERTIFICATE
- footer .site-footer
- button: ✕
- h3: Request Allocation
- form .reserve-form
  - label: Full Name / Collector Designation
  - label: Secure Dispatch Email
  - label: Preferred Serial Allocation
  - button: CONFIRM ALLOCATION REQUEST

## Images in the page
- `assets/hero-bean.jpg — Solum Reserve Bean Macro`
- `assets/vial-box.jpg — Solum CNC Capsule`

## Fields
Keep these controls, including ids and placeholders.
- input[text] placeholder='e.g. Marcus Vance'
- input[email] placeholder='collector@domain.com'
- input[text] placeholder='e.g. Serial #042 or Next Available'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-bean.jpg`
- `assets/vial-box.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
