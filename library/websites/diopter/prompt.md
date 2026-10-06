# Rebuild prompt — Diopter (`diopter`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Product
- Folder: `library/websites/diopter/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Cybernetic optics and spatial hardware atelier featuring an interactive Three.js refractive optical lens assembly, titanium aperture casing with rotating reticle rings, floating conversion architecture card with 3-tab switcher, live multi-city world clock capsules, partner marquee rail, engineered specimens grid, and real-time shader lab.

## Title
Diopter — Cybernetic Optics & Spatial Hardware Atelier

## Description meta
Diopter is an independent spatial hardware, optical interface, and conversion architecture studio engineering transcendent computing flagships.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #070709;
  --bg-surface: #0f1015;
  --bg-card: rgba(18, 19, 26, 0.65);
  --bg-card-hover: rgba(26, 28, 38, 0.85);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-focus: rgba(255, 96, 28, 0.45);
  --border-cyan: rgba(0, 229, 255, 0.35);
  --accent-amber: #ff601c;
  --accent-amber-glow: rgba(255, 96, 28, 0.28);
  --accent-gold: #ffb84d;
  --accent-cyan: #00e5ff;
  --accent-cyan-glow: rgba(0, 229, 255, 0.22);
  --text-main: #f5f6f9;
  --text-muted: #8b8f9e;
  --text-dim: #545766;
  --font-display: 'Syne', sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header
  - a: DIOPTER → #
  - ul .nav-links
    - li: Specimens
    - li: Optical Lab
    - li: Architecture
    - li: Telemetry
  - a: Initiate Project → → #contact
- section .hero-section
  - h1: Bold ideas, engineered with quiet optical precision.
  - p: We design transcendent spatial hardware interfaces, high-conversion digital flagships, and photonic computing experiences for founders redefining the frontiers of reality.
  - a: Calibrate Your Flagship → → #contact
  - a: Simulate Lens Lab ↓ → #lab
  - h4: Crafted to convert.
  - button: 01 OPTICS
  - button: 02 HAPTICS
  - button: 03 LATENCY
  - p: Sub-second refractive shader pipelines coupled with micro-reticle feedback driving maximum user retention across spatial viewports.
- section .partner-section
- section #specimens .works-section
  - h2: Engineered Specimens
  - h3: Aster Telemetry
  - p: Next-generation spatial waveguide HUD architecture engineered for micro-OLED retinal viewports. Ultra-low latency chromatic dispersion compensation.
  - a: Case Study → → #contact
  - h3: Nova Kinetics
  - p: High-frequency sensory console and hardware brand flagship. Multi-layered tactile waveforms translating biometric pulse directly into responsive visual fields.
  - a: Case Study → → #contact
  - h3: Helio Photonics
  - p: Solar micro-concentrator telemetry interface and Series B institutional flagship. Transforming multi-spectral solar data into intuitive spatial graphs.
  - a: Case Study → → #contact
  - h3: Pulse Synapse
  - p: Consumer neural companion application and luxury industrial identity for non-invasive brain-computer telemetry. Sub-millivolt EEG noise filtering.
  - a: Case Study → → #contact
- section #lab .lab-section
  - h3: The Optical Lab Simulator
  - p: Experience the real-time mathematical physical shader driving our spatial viewports. Adjust focal curvature, chromatic dispersion, and light spectrums directly on the interactive WebGL lens above.
  - h4: // TELEMETRY LOGS
- section #metrics .stats-strip
- section #contact .contact-section
  - h2: Ready to calibrate your next venture?
  - p: We partner with a limited roster of visionary founders, hardware labs, and spatial computing studios per quarter.
  - form .calibrator-form
    - label: WORK EMAIL
    - label: ENGAGEMENT TIER
    - label: OBJECTIVE
    - button: Transmit Calibration Request →
- footer
  - a: Specimens → #specimens
  - a: Optical Lab → #lab
  - a: Architecture → #architecture
  - a: Calibrate → #contact
  - a: Top ↑ → #

## Fields
Keep these controls, including ids and placeholders.
- input[range] #sliderFocal
- input[range] #sliderDispersion
- input[email] #inquiryEmail placeholder='founder@quantum-optics.com'
- input[text] #inquiryObjective placeholder='Spatial HUD flagship & Series A conversion platform'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
