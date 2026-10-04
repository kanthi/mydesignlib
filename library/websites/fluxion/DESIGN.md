# Fluxion — Design System (`fluxion`)

## Overview & Emotional Intent
Fluxion is a digital motion and living interface studio template engineered around generative particle architectures. It abandons traditional boxed UI chrome in favor of continuous, GPU-accelerated volumetric motion. The entire site is orchestrated around a single persistent cloud of 85,000 live particles that never cut or reload, but continuously morph across 5 distinct topological states driven by presence, pointer physics, and scroll depth.

Create this feeling through:
- Pure OLED black void (`#000000`) with no borders, cards, or unnecessary container chrome.
- Fluid WebGL/GLSL additive particle blending shifting across a calibrated spectral arc (Teal `#00f5d4` → Electric Cyan `#00bbf9` → Royal Blue `#4361ee` → Ultraviolet `#7209b7`).
- Live hardware telemetry metrics (live particle count, 60fps frame rate counter calculating RAF deltas, 8.3ms frame budget, and presence duration).
- Direct pointer force-fields: cursor movement exerts real-time 3D fluid repulsion and swirl vortexes across the particle cloud.

## Color Tokens
```css
:root {
  --bg: #000000;
  --bg-surface: #07080b;
  --text: #ffffff;
  --text-muted: #8b8f9e;
  --text-dim: #444754;

  --color-teal: #00f5d4;
  --color-cyan: #00bbf9;
  --color-blue: #4361ee;
  --color-violet: #7209b7;
  --color-pink: #f72585;

  --border-subtle: rgba(255, 255, 255, 0.1);
  --border-glow: rgba(0, 245, 212, 0.3);
}
```

## Typography & Hierarchy
- **Primary Sans**: `'Plus Jakarta Sans', system-ui, sans-serif` — ultra-clean, high legibility.
- **Monospace Telemetry**: `'JetBrains Mono', monospace` — precise real-time performance readouts.
- **Serif Accent**: `'Instrument Serif', Georgia, serif` (italic) — subtle editorial contrast in headers.

## 5 Topological Particle Morph Beats
1. **Beat I — The Torus Ring ("Motion instead of chrome")**: 85,000 particles locked into a rotating 3D torus, undulating with gentle harmonic waves and tracking the mouse.
2. **Beat II — The Dissolved Starfield ("Reads presence, in motion")**: The ring explodes outwards into a deep cosmic 3D volume with z-depth parallax.
3. **Beat III — The Logarithmic Spiral Galaxy**: Particles concentrate into a brilliant galactic nucleus and 4 logarithmic spiral arms.
4. **Beat IV — The Singularity Telemetry Line**: All particles compress into a razor-sharp glowing horizon above the real-time stats telemetry bar (`85k live particles · 8.3ms frame budget · 60 fps`).
5. **Beat V — The 3D Neural Brain**: Particles assemble into dual cerebral hemispheres with synaptic pulse waves firing through folds.
6. **Beat VI — The Living Interface Studio & FAQ**: The experience opens into the studio philosophy, interactive FAQ, and consultation inquiries.

## Technical Rules
- Three.js r128 with custom GLSL vertex and fragment shaders.
- `THREE.AdditiveBlending` with pre-computed particle geometries stored in GPU BufferAttributes.
- Full viewport resize adaptation and responsive camera FOV.
- Respect `prefers-reduced-motion` by reducing swirl velocities and easing animations.
