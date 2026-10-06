# Rebuild prompt — Fluxion (`fluxion`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/fluxion/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Living interface & continuous volumetric motion studio: pure OLED black void, GPU-accelerated cloud of 85,000 particles with custom GLSL shaders, 5-stage continuous topological morphing on scroll (Torus Ring, Dissolved Starfield, Logarithmic Spiral Galaxy, Singularity Telemetry Line, and 3D Synaptic Brain), real-time pointer repulsion and swirl physics, live 60fps frame delta telemetry, and studio manifesto with interactive topology sandbox.

## Title
Fluxion — A Living Interface in Continuous Motion

## Description meta
A motion studio architecture built around one idea: motion instead of chrome. 85,000 live GPU particles morphing continuously across presence and scroll.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #000000;
  --bg-surface: #07080b;
  --bg-panel: rgba(12, 14, 20, 0.7);
  --text: #ffffff;
  --text-muted: #8b8f9e;
  --text-dim: #444754;
  --teal: #00f5d4;
  --cyan: #00bbf9;
  --blue: #4361ee;
  --violet: #7209b7;
  --pink: #f72585;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(0, 245, 212, 0.25);
  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --font-serif: 'Instrument Serif', Georgia, serif;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .nav-bar
  - button: GET IN TOUCH
- h1: Motion instead of chrome.
- p: Traditional interfaces trap information in rectangular boxes. Fluxion breathes in 85,000 living GPU particles, reacting organically to your touch, scroll, and presence.
- h2: Reads presence, in motion.
- p: As you scroll, the gravitational boundary collapses. The ring dissolves into an infinite cosmic starfield, tracking pointer velocity in three-dimensional space.
- h2: The logarithmic spiral.
- p: Centripetal vectors draw the stars into an evolving galactic nucleus. No cuts, no slides, no video buffering—just continuous, mathematically pure topology.
- h2: Zero chrome, pure velocity.
- h2: Synaptic architecture.
- p: Particles reassemble into dual cerebral hemispheres with simulated neurotransmitter pulses firing across axonal pathways as you engage the page.
- section .section-manifesto
  - h2: Why build static rectangles when the GPU can breathe?
  - p: For fifteen years, web design has been imprisoned by the same formula: a hero banner, three cards, and a footer. We accepted this because 3D meant heavy load times and sluggish mobile performance.
  - p: That compromise is over. By synthesizing custom GLSL vertex shaders with GPU point buffers, Fluxion delivers cinematic spatial experiences running at 60–120 FPS that weigh less than a single high-resolution image asset.
  - h3: Spatial Choreography
  - p: Continuous multi-target morphing without layout shift, video artifacts, or geometry popping across viewports.
  - h3: Presence-Reactive
  - p: Real-time force fields that turn cursor and scroll momentum into hydrodynamic fluid turbulence.
  - h3: Zero Video Overhead
  - p: Pure mathematical code. Sub-second initial load with zero video buffer stalls or frame jitter.
  - h3: Topological Sandbox
  - p: Override the scroll engine to command the 85,000 particle cloud directly:
  - button: 01 TORUS
  - button: 02 STARFIELD
  - button: 03 GALAXY
  - button: 04 SINGULARITY
  - button: 05 SYNAPSE
- section .faq-section
  - h2: Frequently Asked Questions
- footer .site-footer

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
