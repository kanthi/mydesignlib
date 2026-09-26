# Rebuild prompt — Pharos (`pharos`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Product
- Folder: `library/brands/pharos/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Spatial computing and ambient hardware identity system: slit square mark, cadmium orange panel on true black, interactive visor telemetry HUD, and tactile packaging.

## Title
Pharos — Spatial Computing & Retinal Waveguide Hardware

## Description meta
Pharos One: ambient spatial computing hardware projecting 8K micro-LED photons directly through a razor diffractive optical aperture. Experience reality without glass.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Primary Obsidian & Cadmium Theme */
  --bg-page: #060606;
  --bg-elevated: #0c0c0c;
  --bg-card: #121212;
  --bg-card-hover: #181818;
  --bg-glass: rgba(14, 14, 14, 0.78);
  --signal-cadmium: #f24a12;
  --signal-cadmium-deep: #cc3908;
  --signal-cadmium-glow: rgba(242, 74, 18, 0.28);
  --signal-cadmium-subtle: rgba(242, 74, 18, 0.08);
  --text-snow: #fbf9f6;
  --text-muted: #8d8982;
  --text-faint: #524f4a;
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-medium: rgba(255, 255, 255, 0.14);
  --border-bright: rgba(255, 255, 255, 0.3);
  --border-signal: rgba(242, 74, 18, 0.45);
  --font-display: "Space Grotesk", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-body: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", monospace;
  --wrap: min(1260px, 100% - 3rem);
  --wrap-wide: min(1380px, 100% - 1.5rem);
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --dur: 240ms;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #siteNav .site-nav
  - a: pharos → #top
  - nav #primaryMenu .nav-menu “Primary Navigation”
    - a: Hardware → #hardware
    - a: Retinal Optics → #optics
    - a: Spatial OS → #spatial-os
    - a: Physical Craft → #craft
    - a: Architecture → #blueprint
    - a: Specifications → #specs
  - a: Archive → ../../#/brand/pharos
  - a: Pre-Order → #reserve
- main #top
  - section .hero
    - h1: Light through the slit. Reality without glass.
    - p: A quantum leap in ambient spatial computing. Direct 8K retinal micro-projection channeled through an optical slit aperture. Zero bulky goggles. Zero chromatic aberration. Pure atmospheric intelligence.
    - a: Reserve Founder Kit → #reserve
    - a: Explore Optical Engine → #optics
    - p: Micro-milled optical waveguide sensor operating at 848nm infrared carrier frequency for sub-millimeter tracking.
    - p: Precision die-cast magnesium-lithium alloy frame with ceramic micro-arc oxidation finish.
    - p: Diffractive optical element beaming infinite-depth focus directly into human ocular cones.
  - section .metrics-band
    - p: Ten times thinner than traditional refractive glass pancake lenses. Total optical transparency.
    - p: Real-time binocular alignment at 144 FPS peak rendering to eliminate vestibular motion sickness.
    - p: Ergonomically balanced across the temporal arch for uninterrupted 12-hour continuous wear.
    - p: True obsidian dark field projection. Pixels turn completely off, merging digital graphics into physical light.
  - section #optics .optics-section
    - h2: Why Glass Displays Are Obsolete
    - p: Conventional VR traps heavy glass panels 3 inches from your cornea. Pharos projects photons directly through a micro-aperture slit onto your retina.
    - h3: Heavy Glass & Chromatic Blur
    - ul .panel-specs
      - li: ✕ 500g–650g heavy glass strain on the cervical spine
      - li: ✕ Fixed focal plane causing vergence-accommodation conflict
      - li: ✕ Chromatic aberration and lens glare at peripheral angles
      - li: ✕ Social isolation behind opaque outward facing shells
    - h3: Direct Aperture Waveguide
    - ul .panel-specs
      - li: ✓ 142g ultra-lightweight magnesium-lithium unibody
      - li: ✓ Dynamic multi-plane focal depth that shifts naturally with human pupil gaze
      - li: ✓ 848nm diffractive aperture with zero edge fringing or glare
      - li: ✓ 92% ambient light pass-through for organic eye contact
  - section #spatial-os .spatial-os-section
    - h2: Ambient Intelligence Floating in Space
    - p: Pharos OS replaces flat screens with contextual light volumes anchored directly to physical surfaces with millimeter precision.
  - section #craft .artifacts-section
    - h2: Designed for the Physical Realm
    - p: Hardware that commands reverence before it ever powers on. Matte carbon fiber, precision debossing, and hot cadmium foils.
    - h3: The Monolith Packaging Suite
    - p: Crafted from 1200gsm compressed carbon-black paperboard, coated with tactile soft-touch polymer, and accented by a hot-stamped cadmium orange inner bevel.
    - h3: Laser-Debossed Cotton Stationery
    - p: 600gsm duplexed cotton stock blind-debossed with the signature slit aperture mark and precision micro-printed with calibration coordinates in JetBrains Mono.
  - section #blueprint .blueprint-section
    - h3: The Slit Square Mark
    - p: A 100-unit square enclosing an optical beam-slit aperture. It represents the light passing through a diffraction barrier—the mathematical threshold where photons transform into images.
    - button: Copy Vector Code
    - a: Download Media Kit → preview.jpg
  - section #specs .specs-section
    - h2: Hardware & Optical Specifications
    - p: Comprehensive telemetry sheet for hardware developers, optical researchers, and systems founders.
    - table .specs-table “Pharos One specifications”
      - th: Subsystem
      - th: Engineering Specification
      - td: Display Engine
      - td: Dual RGB micro-LED optical engines with 8K aggregate resolution (42 PPD retinal density)
      - td: Waveguide Architecture
      - td: 0.4mm diffractive surface-relief grating with 848nm infrared carrier modulation
      - td: Field of View
      - td: 110° diagonal instantaneous field with infinite focal convergence
      - td: Spatial Tracking
      - td: Inside-out 6DoF optical visual odometry + dual 240Hz sub-millimeter gaze cameras
      - td: Compute Module
      - td: Custom Pharos Silicon P1 neural processor delivering 18 TOPS dedicated optical inference
      - td: Chassis & Materials
      - td: Magnesium-lithium cast unibody, titanium headband hinges, breathable 3D spacer mesh
      - td: Acoustics
      - td: Spatial beamforming bone-conduction transducers with custom ambient noise dampening
      - td: Battery & Thermal
      - td: Hot-swappable magnetic power rail; 4.5 hours continuous heavy compute, 18 hours standby
  - section #reserve .cta-section
    - h2: Build on the Optical Horizon.
    - p: Reserve the Pharos One Developer Edition. Includes the complete headset, magnetic power rail, neural wrist peripheral, and full low-level waveguide SDK access.
    - form #reserveForm .cta-form
      - button: Request Access
- footer .site-footer
  - a: pharos → #top
  - p: A premier ambient spatial computing platform. Hot signal on obsidian — diffractive optical waveguides delivering reality without glass.
  - a: Hardware Unibody → #hardware
  - a: Waveguide Physics → #optics
  - a: Pharos Spatial OS → #spatial-os
  - a: Technical Telemetry → #specs
  - a: Slit Blueprint → #blueprint
  - a: Physical Packaging → #craft
  - a: Design Library → ../../index.html
  - a: Catalog JSON → ../../data/catalog.json
  - a: Design System Spec → DESIGN.md
  - a: Visual Preview → preview.jpg
  - a: Hardware Mockup → visor.jpg

## Images in the page
- `visor.jpg — Pharos One Spatial Computing Headset with glowing cadmium light aperture resting on obsidian pedestal`
- `preview.jpg — Pharos Unboxing Experience with Rigid Matte Charcoal Packaging and Cadmium reveal card`
- `stationery.jpg — Pharos High-Density Cotton Paper and Embossed Cadmium Foil Developer Pass`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #fluxSlider
- input[range] #depthSlider
- input[range] #angleSlider
- input[range] #apertureSlider
- input[email] placeholder='Enter work email for dev allocation...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`
- `stationery.jpg`
- `visor.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
