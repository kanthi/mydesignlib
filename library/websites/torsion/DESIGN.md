# DESIGN — Torsion (Physics-Driven Digital Experience Studio)

## Overview
- **Brand**: Torsion (`studio@torsion.example`, independent creative technology & digital studio)
- **Reference**: GetLayers "Gravity" WebGL landing page featuring real-time Three.js physics spheres, Verlet integrator, collision response, dynamic color shifting, frosted glass telemetry cards, and interactive cursor gravitation.
- **Value Proposition**: High-performance interactive 3D web experiences, digital flagships, and spatial interfaces engineered with mathematical precision and zero pre-baked compromises.
- **Target Audience**: Visionary founders, luxury brands, tech innovators, and design-led enterprises seeking award-winning web flagships.
- **Primary Action**: `Let's talk ↗` (opens interactive project inquiry sheet).

## Color System
- `bg-base`: `#f4f6fa` (Cool Porcelain Alabaster)
- `bg-surface`: `#ffffff` (Pure White Card / Modal Canvas)
- `bg-glass`: `rgba(255, 255, 255, 0.72)` (Heavy Frosted Glass with `backdrop-filter: blur(20px)`)
- `border-glass`: `rgba(255, 255, 255, 0.85)`
- `border-subtle`: `rgba(20, 24, 35, 0.08)`
- `text-primary`: `#0f131a` (Deep Carbon Obsidian)
- `text-secondary`: `#555d6e` (Slate Muted Titanium)
- `accent-cobalt`: `#1a44e8` (Electric Cobalt Blue)
- `accent-cobalt-glow`: `rgba(26, 68, 232, 0.35)`
- `accent-citron`: `#a2e022` (High-Energy Cyber Citron Lime)
- `accent-citron-dark`: `#2f4f05`
- `accent-glass-orb`: `rgba(180, 210, 255, 0.3)`

## Typography & Hierarchy
- **Primary Display**: `Plus Jakarta Sans`, 700 / 800 with tight optical tracking (`-0.035em`)
- **Accent Script / Serpentine Italic**: `Instrument Serif` / `Editorial Serif` italic for expressive wordmark emphasis ("More *torsion.*", "structure lets *go.*")
- **Monospace Telemetry**: `JetBrains Mono` for live solver metrics, frame counters, physics parameters, and index labels (`01`, `02`, `03`)
- **Body**: `Plus Jakarta Sans`, 400 / 500 (`line-height: 1.55`)

## Three.js Real-Time Physics System
- **Engine**: Three.js WebGL renderer + custom 3D Verlet / Impulse-based physics solver with spatial hash grid for real-time 60fps sphere-sphere and sphere-boundary collisions.
- **Sphere Geometries**: High-detail SphereGeometry with physical PBR materials:
  - Cobalt deep glossy lacquer (`roughness: 0.15, metalness: 0.2`)
  - Frosted optical glass (`transmission: 0.85, roughness: 0.2, thickness: 1.2`)
  - Matte porcelain chalk (`roughness: 0.85, metalness: 0.05`)
- **Kinematic States**:
  - Phase 1 (Hero): Toroidal orbital equilibrium — spheres follow a floating harmonic lemniscate / arch across the canvas with subtle breathing drift.
  - Phase 2 (Kinematics Scroll): Structure collapses; directional gravity switches on (`g = 9.8 m/s²`), spheres tumble down, collide with floor boundaries and interactive card bounding volumes with spring restitution (`0.65`).
  - Interactive Cursor: Mouse raycaster calculates screen-space to world-space pointer coordinate. Dragging exerts dynamic push/attract impulse field to fling spheres across the viewport.
  - Live Tuning Controls: User can adjust Gravity, Restitution, and Sphere Theme (Cobalt Blue, Electric Citron, Dark Chromatic) in real time.

## Layout & Architecture
1. **Header & Navigation**:
   - Left: Live pulsing status badge `• TORSION`.
   - Center/Right: Nav anchors (`Works`, `Services`, `Kinematics`, `Studio`, `Lab`).
   - Action: Pill button `Let's talk ↗` with animated arrow rotation.
2. **Hero Stage**:
   - Eyebrow: `• INDEPENDENT DIGITAL STUDIO`.
   - Massive lockup: `Less noise.` / `More torsion.`
   - Descriptive paragraph and studio metadata.
   - Interactive Three.js canvas underlaid across entire viewport.
3. **Kinematics & Telemetry Section**:
   - Headline: `When structure / lets go.`
   - Three floating frosted glass cards with live indicator dots (`01 SOLVER`, `02 RESTITUTION`, `03 BODIES`).
4. **Selected Works Grid**:
   - Filterable showcase of flagship interactive platforms.
5. **Interactive Physics Control Console**:
   - Real-time parameter sliders (Gravity scale, Restitution/bounciness, Turbulence).
   - Instant color palette switcher.
6. **Inquiry Modal Dialog**:
   - Native accessible `<dialog>` sheet with validation and feedback states.
7. **Footer**:
   - Coordinates, status telemetry, social nodes, and noindex compliance.
