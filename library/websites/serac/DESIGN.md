# SERAC — Design System & Specimen Guide

High-altitude cryosphere research, meteorological telemetry, and alpine piste engineering website template featuring the Fog Reveal alpine transition.

---

## 1. Brand Identity & Rationale

- **Brand Name**: `SERAC`
- **Etymology**: A serac is a towering pinnacle or block of glacial ice formed by crisscrossing crevasses on a glacier. In mountaineering, seracs represent both extreme high-alpine beauty and calculated objective hazard.
- **Location**: Matterhorn Glacier Paradise / Valais, Switzerland (45°58′37″N, 7°42′48″E, 3,883 m).
- **Core Philosophy**: Quiet Swiss brutalism meets sub-zero technical instrumentation. Minimal, high-contrast, atmospheric, and telemetry-rich.

---

## 2. The Signature Interaction: Fog Reveal

The hero section recreates the volumetric fog transition:
- **State 01 (Descent)**: Skier carving at speed through billowing snow mist and cloud inversion on the Matterhorn ridge (3,883 m).
- **State 02 (Groomed)**: Dawn corduroy snow on Piste 7 (06:40) with the signature curved alpine blue piste marker line.
- **The Atmospheric Transition**:
  - Dragging the vertical scrubber rail on the right edge rolls a dense fog bank across the frame.
  - The scene loses color saturation and fine detail, swallowed into pure alpine whiteout.
  - The headline text is consumed by the fog and emerges into the alternate state.
  - Live telemetry displays real-time fog density index (15% to 97%), elevation, wind velocity, and ambient sub-zero temperatures.
  - Canvas mist particle trail follows cursor movement to create real-time aerodynamic wind wake.

---

## 3. Design System Tokens

### Palette
- **Glacial Void (Background)**: `#05070a`
- **Sub-Zero Slate (Surface)**: `#0a0e14`
- **Summit Elevation (Card Surface)**: `#101620`
- **Frost White (Primary Text)**: `#f5f7fa`
- **Ridge Grey (Secondary Text)**: `#9aa5b5`
- **Telemetry Muted**: `#576273`
- **Alpine Blue (Accent & Guide Line)**: `#0066ff`
- **Glacial Cyan (Glow & Highlights)**: `#38bdf8`
- **Telemetry Green (Active Sensor)**: `#10b981`

### Typography
- **Primary Interface**: `Inter` (Weights 300, 400, 500, 600, 700)
- **Technical Telemetry**: `JetBrains Mono` / `Space Mono` (Weights 400, 500, 600)
- **Hierarchy**:
  - Display Hero Headline: `clamp(3rem, 7vw, 6.5rem)`
  - Section Headings: `clamp(2rem, 4vw, 3.25rem)`
  - Telemetry Readouts: `1.25rem` monospace
  - Badges & Coordinates: `0.72rem` uppercase tracked monospace

---

## 4. Architectural Sections

1. **Station Header**: Fixed glassmorphic navigation bar with coordinates, altitude readout, live pulsing status beacon, and fast anchor links.
2. **Hero Viewport**: Full-bleed 100vh WebGL shader canvas with procedural FBM noise, interactive vertical scrubber handle, auto-cycle toggle, and dynamic HUD telemetry bar.
3. **Station Network Telemetry**: Live interactive elevation sweep slider (1,620m to 3,883m) recalculating lapse temperatures, barometric pressure, and oxygen availability in real time; multi-hour barometer histogram; snowpack shear stability metrics.
4. **Piste Engineering (06:40 Corduroy)**: Technical SVG breakdown showing 18mm wave amplitude, 60mm pitch, blue guidance stripe, and sintering thermal dynamics.
5. **Field Equipment Collection**: Three high-altitude technical specimens (Alpinist Summit Shell, Piste 7 Carver, and Cryosphere Beacon X1) with custom technical line-art diagrams.
6. **High-Mountain Dispatch Passes**: Dawn Patrol, Glacier Traverse, and Cryosphere Fellowship passes with tiered feature matrices.
7. **Footer**: Swiss brutalist coordinates, local Valais time, noindex privacy declarations, and GA analytics.
