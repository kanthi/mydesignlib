# Terraq — Industrial Digital Twin & Spatial LiDAR Platform

## 1. Brand Identity & Overview
- **Brand Name**: Terraq (`TERRAQ.`)
- **Category**: Industrial Spatial Computing / Digital Twin / LiDAR Telemetry
- **Tagline**: *The ground truth for heavy industry.*
- **Mission**: Terraq turns LiDAR scans, IoT sensors, and machine telemetry into one live 3D spatial model of your operation — measured to the millimetre.

---

## 2. Typographic Tokens
- **Display & Section Headers**: `Plus Jakarta Sans`, 700 / 800 weight, all-caps industrial weight (`-0.03em`).
- **Body & Technical Specs**: `Inter`, 400 / 500 weight, balanced dark-mode readability.
- **HUD Telemetry & Monospace Coordinates**: `JetBrains Mono`, 500 / 600 weight, uppercase tabular figures for yaw, pitch, coordinates, and LiDAR points count.

---

## 3. Color Tokens
High-contrast military and aerospace dark cockpit palette:
- **Cockpit Base Black**: `#0A0D10`
- **Surface Elevation 1**: `#12161B`
- **Surface Elevation 2**: `#181E25`
- **Accent Laser Green / Cyan**: `#00FFA3` (LiDAR scan beam & active reticle)
- **Accent Warning Amber**: `#FFB800` (Telemetry alerts & flags)
- **Accent Elevation Rust**: `#FF5533` (Point cloud elevation thermal gradient)
- **Grid Wireframe**: `rgba(255, 255, 255, 0.08)`
- **Text Main**: `#FFFFFF`
- **Text Muted**: `#7C8B9E`

---

## 4. WebGL 3D Architectural Architecture
Full-screen interactive Three.js WebGL canvas rendering 4 distinct industrial sectors:
1. **Scene 01: `CAPTURE - PIT 07 - LIVE LIDAR`**
   - Stepped open-pit mining elevation contours with 12,000+ interactive particles.
   - Elevation color grading (rust red to cyan).
   - Autonomous drone UAV-02 waypoint marker with pulsating range circles.
   - Dynamic planar LiDAR sweep shader.
   - HUD: `FIG. 01 — PIT 07 / POINT CLOUD` · `406,556,000 PTS` · `5.47M M² AREA`.
2. **Scene 02: `ENERGY - TANK FARM 3 - ASSET TWIN`**
   - Industrial refinery tank farm with cylindrical storage vessels, cooling towers, and pipe racks.
   - Dynamic asset tag callouts: `FLANGE-02 OK`, `PRESSURE 4.2 BAR`.
   - HUD: `FIG. 02 — TANK FARM 3 / ASSET TWIN` · `INSPECTION PASS 99.8%`.
3. **Scene 03: `LOGISTICS - TERMINAL 2 - YARD MODEL`**
   - Intermodal shipping container terminal with stacked multi-colored container blocks and overhead gantry cranes.
   - Dwell hour metrics and quay tram tracking.
   - HUD: `FIG. 03 — TERMINAL 2 / YARD MODEL` · `18,460,310 TEU`.
4. **Scene 04: `ARCHIVE - INDEX 7F - COLD STORAGE`**
   - Monolithic data vault server racks with perspective laser query scan.
   - Sub-millisecond retrieval latency telemetry.
   - HUD: `FIG. 04 — INDEX 7F / ARCHIVE` · `2.3 PB` · `11 MS`.

---

## 5. Interactive HUD & Controls
- Smooth interactive orbit rotation on mouse drag with yaw and pitch coordinate tracking (`YAW 014° · PITCH 34°`).
- Live local time clock in header.
- Scene selector buttons `[01] CAPTURE`, `[02] ENERGY`, `[03] LOGISTICS`, `[04] ARCHIVE` trigger smooth camera and particle morphing.
- Model telemetry drawer and enterprise consultation booking modal.
