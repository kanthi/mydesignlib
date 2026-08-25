# Arcopolis — Design System & Technical Specification

Design system specification for **Arcopolis**, an immersive 3D WebGL architectural masterplanning and futuristic real estate experience. Inspired by monolithic architecture, topological terrain data visualization, and neon bioluminescent light trails in nocturnal landscapes.

---

## 1. Product & Aesthetic Intent

- **Core Identity**: Cinematic, high-tech architectural masterplanning firm delivering next-generation mega-structures, autonomous living systems, and carbon-negative urban ecosystems.
- **Visual Emotion**: Hypnotic, authoritative, ultra-luxurious, futuristic. Deep midnight obsidian canvas accented by laser-sharp cyan and electric sapphire light trails, procedural terrain topographies, and luminous glowing monolithic volumes.
- **Anti-Slop Directives**: No generic decorative particles without physics. Every WebGL shader, light ribbon spline, particle flow, and topological contour directly visualizes architectural energy grids, pedestrian flow paths, and structural telemetry.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Surface & Canvas Depths */
  --bg-canvas: #02040a;
  --bg-surface-glass: rgba(6, 11, 25, 0.75);
  --bg-surface-elevated: rgba(10, 18, 38, 0.88);
  --bg-hud: rgba(2, 4, 10, 0.82);
  --bg-menu: rgba(4, 8, 20, 0.95);

  /* Bioluminescent & Laser Accents */
  --cyan-laser: #00f0ff;
  --cyan-glow: rgba(0, 240, 255, 0.35);
  --cyan-faint: rgba(0, 240, 255, 0.12);
  --blue-electric: #38bdf8;
  --blue-sapphire: #2563eb;
  --blue-deep: #1d4ed8;
  --blue-fog: #0f172a;

  /* Ambient Glow Gradients */
  --glow-cyan-radial: radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15) 0%, rgba(37, 99, 235, 0.05) 50%, transparent 80%);
  --glow-monolith: radial-gradient(circle at 50% 30%, rgba(0, 240, 255, 0.25) 0%, transparent 65%);

  /* Border & Hairlines */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-standard: rgba(255, 255, 255, 0.14);
  --border-cyan: rgba(0, 240, 255, 0.45);
  --border-active: #00f0ff;

  /* Typography & Ink */
  --text-heading: #f8fafc;
  --text-primary: #e2e8f0;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-cyan: #00f0ff;
  --text-on-dark: #ffffff;

  /* Typography Scale */
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", "Fira Code", monospace;

  --text-xs: 0.6875rem;    /* 11px */
  --text-sm: 0.8125rem;    /* 13px */
  --text-base: 0.9375rem;  /* 15px */
  --text-md: 1.0625rem;    /* 17px */
  --text-lg: 1.25rem;      /* 20px */
  --text-xl: 1.5rem;       /* 24px */
  --text-2xl: 2rem;        /* 32px */
  --text-3xl: clamp(2.25rem, 4.5vw, 3.5rem); /* 36px - 56px */
  --text-hero: clamp(2.5rem, 5.5vw, 4.5rem);  /* 40px - 72px */

  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;

  /* Border Radii */
  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Elevation */
  --shadow-hud: 0 10px 30px -5px rgba(0, 0, 0, 0.8), 0 0 1px rgba(0, 240, 255, 0.3);
  --shadow-cyan-glow: 0 0 25px rgba(0, 240, 255, 0.45);
  --shadow-card: 0 20px 40px -10px rgba(0, 0, 0, 0.7);

  /* Layout Container */
  --container-max: 1320px;
  --gutter: clamp(1rem, 4vw, 2.5rem);
}
```

---

## 3. WebGL Scene & Shader Architecture

### 3.1 Procedural Terrain & Topography
- Three.js custom `PlaneGeometry` with layered Perlin noise displacement creating rolling nocturnal mountains and valleys.
- Wireframe grid layer with depth-dependent opacity and cyan contour lines.

### 3.2 Dynamic Bioluminescent Light Ribbons
- `CatmullRomCurve3` splines extruded into ribbon tubes / geometry.
- Custom GLSL Fragment Shader:
  - Scrolling UV animated pulses mimicking high-velocity photon streams.
  - Multi-octave glow bloom, fading softly towards ribbon edges.

### 3.3 The Central Architectural Monolith
- Translucent volumetric prism with refractive shader properties.
- Internal glowing core with pulsing point light, casting cast shadows across the terrain mesh.

### 3.4 Cosmic Particle Dust Field
- Instanced point cloud with 1,500+ floating stardust particles.
- Dynamic mouse-repulsion physics and gravitational orbital swirling.

### 3.5 Masterplan Network Nodes
- Connected graph network of 60+ architectural node coordinates with pulsing beacon rings and inter-node data conduits.

---

## 4. Interaction & Narrative Chapters

1. **Chapter 1: FUTURE** — The Monolith Core (Camera elevated, looking at glowing prism).
2. **Chapter 2: INNOVATION** — The Valley of Light (Camera plunges low into the canyon tracing the glowing ribbon).
3. **Chapter 3: COLLABORATION** — Stratospheric Strands (Camera tilts upwards as dual ribbon helix rises).
4. **Chapter 4: EXCELLENCE & PURPOSE** — The Architecture of Arcs (Camera orbits around structural light arcs).
5. **Chapter 5: LEGACY** — Masterplan Network (Camera pulls back into high-altitude overview revealing the connected metropolis nodes).

---

## 5. Audio Synthesizer Engine (Web Audio API)

- Ambient 432Hz harmonic drone synthesizer using OscillatorNodes and BiquadFilterNode.
- Resonant harmonic chime sweep triggered on narrative chapter switches.
- Direct mute/unmute control in the bottom HUD bar.

---

## 6. Anti-Slop Ban List

- ❌ No sluggish frame rates: maintain 60 FPS with efficient instancing and shader math.
- ❌ No jarring camera snaps: all transitions use smooth damped lerp / slerp easing.
- ❌ No missing mobile fallbacks: automatic touch swipe gestures and responsive HUD layout.
