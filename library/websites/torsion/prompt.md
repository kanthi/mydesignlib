# Rebuild prompt — Torsion (`torsion`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/torsion/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Independent physics-driven digital experience studio featuring real-time Three.js Verlet physics engine with 48 rigid spheres, 4 sub-steps collision relaxation, toroidal equilibrium vs. gravity collapse on scroll, interactive cursor drag/gravity well, frosted glass telemetry cards, works grid, and live physics control deck.

## Title
Torsion — Independent Physics-Driven Digital Experience Studio

## Description meta
Torsion is an independent digital studio engineering high-performance interactive 3D web flagships and spatial digital products.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-base: #f4f6fa;
  --bg-surface: #ffffff;
  --bg-glass: rgba(255, 255, 255, 0.76);
  --border-glass: rgba(255, 255, 255, 0.9);
  --border-subtle: rgba(20, 24, 35, 0.08);
  --border-hover: rgba(26, 68, 232, 0.28);
  --text-primary: #0e121a;
  --text-secondary: #525a6b;
  --text-muted: #8890a2;
  --accent-cobalt: #1a44e8;
  --accent-cobalt-hover: #1034c4;
  --accent-cobalt-glow: rgba(26, 68, 232, 0.3);
  --accent-citron: #9dd81b;
  --accent-citron-dark: #274003;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 9999px;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-serif: 'Instrument Serif', Georgia, serif;
  --font-mono: 'JetBrains Mono', monospace;
  --container-max: 1280px;
  --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #site-header .site-header
  - a: Torsion → #top
  - nav .nav-menu
    - a: Kinematics → #kinematics
    - a: Works → #works
    - a: Services → #services
    - a: Physics Lab → #lab
  - button: Let's talk ↗
- main #top
  - section .hero-section.container
    - h1: Less noise. More torsion.
    - p: We craft spatial web experiences, digital flagships, and realtime physics simulations that strip away distraction and pull customer attention into orbit.
  - section #kinematics .kinematics-section.container
    - h2: When structure lets go.
    - p: Keep scrolling and the harmonic field surrenders to kinetic gravity. Every sphere obeys simulated Verlet physics — mass, momentum, and restitution — tumbling down and bouncing off the boundaries until the energy settles. Click and drag anywhere to fling or orbit bodies.
    - button: Cobalt
    - button: Citron
    - button: Onyx
    - article .glass-card.interactive
      - h4: SOLVER
      - h3: Verlet · 4 Sub-steps
      - p: Constraint relaxation and stable GPU stacking at 60 fps
    - article .glass-card.interactive
      - h4: RESTITUTION
      - h3: 0.65 Kinetic Bouncy
      - p: Dynamic impulse dissipation on floor & obstacle collisions
    - article .glass-card.interactive
      - h4: BODIES
      - h3: Real-time WebGL
      - p: Zero pre-baked video frames — 45 physical rigid bodies
  - section #works .works-section.container
    - h2: Built for momentum.
    - p: A collection of digital flagship platforms delivered for world-class founders.
    - article .work-card.interactive
      - h3: Aether Platform
      - p: High-throughput decentralized asset terminal with 3D volumetric token telemetry and instant sub-millisecond execution.
    - article .work-card.interactive
      - h3: Vectis Robotics
      - p: Interactive spatial configurator and kinematic sensor visualizer for next-generation automated warehousing fleets.
    - article .work-card.interactive
      - h3: Kanto Monoliths
      - p: Editorial digital monograph and archival spatial tour showcasing brutalist cantilever residences across Hokkaido.
    - article .work-card.interactive
      - h3: Synapse Mesh
      - p: Real-time GPU cluster visualization and network latency telemetry designed for enterprise cloud operations.
  - section #services .services-section.container
    - h2: Where engineering meets craft.
    - h3: Creative Technology
    - p: WebGL, Three.js, GLSL custom shaders, and interactive physics solvers engineered for fluid 60fps browser fidelity.
    - h3: Digital Flagships
    - p: Full-scale bespoke marketing sites and brand platforms that command premium positioning and convert top-tier customers.
    - h3: Motion Choreography
    - p: Sophisticated scroll kinematics, Lenis smooth velocity orchestration, and micro-interactions tuned to human perception.
    - h3: Spatial Design Systems
    - p: Comprehensive design token architectures, accessible typography scales, and modular UI component libraries.
- footer .site-footer
  - h2: Let's build something with momentum.
  - button: Start a project ↗
  - h4: Coordinates
  - p: Torsion Creative Lab
  - p: 420 Spadina Avenue
  - p: studio@torsion.example
  - h4: Index
  - a: Kinematics → #kinematics
  - a: Selected Works → #works
  - a: Capabilities → #services
  - a: Physics Lab → #lab
  - p: © 2026 TORSION STUDIO — ALL RIGHTS RESERVED.
  - p: BUILT WITH THREE.JS & GSAP · REALTIME KINEMATICS
- dialog #inquiry-modal .inquiry-modal
  - h3: Start a project
  - button: ×
  - form #inquiry-form
    - label: Your Name
    - label: Email Address
    - label: Project Scope
    - label: Estimated Timeline
    - button: Transmit Brief ↗

## Fields
Keep these controls, including ids and placeholders.
- input[range] #slider-gravity
- input[range] #slider-restitution
- input[text] placeholder='Alex Thorne'
- input[email] placeholder='alex@company.example'
- input[text] placeholder='3D Web Flagship, Rebrand, WebGL Experience'
- input[text] placeholder='Q4 2026 / 8-12 weeks'

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
