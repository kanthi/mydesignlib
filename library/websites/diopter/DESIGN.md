# DESIGN — Diopter (Cybernetic Optics & Spatial Hardware Atelier)

## Overview
- **Brand**: Diopter (`atelier@diopter-spatial.internal`, independent spatial computing, optical interface, and hardware studio)
- **Reference**: GetLayers "Lumora" WebGL template featuring high-tech cybernetic dark aesthetic, floating conversion card (`CONVERSION DESIGN / Crafted to convert.`), partner marquee rail, live local time HUD, interactive 3D optical lens assembly, and selected case studies.
- **Value Proposition**: Transcendent spatial hardware interfaces, high-conversion digital flagships, and photonic computing experiences engineered with quiet mathematical precision.
- **Target Audience**: Hardware founders, spatial computing labs, optics researchers, and enterprise ventures creating next-generation human-computer interfaces.
- **Primary Action**: `Calibrate Your Flagship →` (initiates calibration handshake terminal).

## Color System
- `bg-dark`: `#070709` (Deep Obsidian Void)
- `bg-surface`: `#0f1015` (Stealth Carbon Matte)
- `bg-card`: `rgba(18, 19, 26, 0.65)` with `backdrop-filter: blur(24px)`
- `border-subtle`: `rgba(255, 255, 255, 0.08)` (Hairline Precision Grid Border)
- `border-focus`: `rgba(255, 96, 28, 0.45)`
- `accent-amber`: `#ff601c` (Photonic Amber Laser Glow)
- `accent-amber-glow`: `rgba(255, 96, 28, 0.28)`
- `accent-gold`: `#ffb84d` (Warm Optical Refraction Gold)
- `accent-cyan`: `#00e5ff` (Micro-Reticle Laser Cyan)
- `text-main`: `#f5f6f9` (Crisp Optical White)
- `text-muted`: `#8b8f9e` (Neutral Telemetry Grey)
- `text-dim`: `#545766` (Subtle HUD Coordinate Grey)

## Typography & Hierarchy
- **Primary Display**: `Syne`, 700 / 800 with tight letter-spacing (`-0.035em`)
- **Body & Interface**: `Plus Jakarta Sans`, 400 / 500 / 600
- **Telemetry HUD & Monospace**: `JetBrains Mono` for live world clocks (`Tokyo`, `SFO`, `Zürich`), optical parameters (FOV, dispersion, wavelengths), and terminal console readout.

## Three.js 3D Optical Lens Assembly
- **Engine**: Three.js WebGL with PBR `MeshPhysicalMaterial` transmission and refraction.
- **Lens Geometry**: Custom bi-convex optical lens mesh with smoothed sagittal curve deformation, simulating physical glass curvature.
- **Material Specs**:
  - `transmission: 0.96`
  - `roughness: 0.05`
  - `ior: 1.54` (Crown glass index)
  - `thickness: 1.4`
  - `clearcoat: 1.0`
- **Optical Reticle Rings**: Concentric dashed orbital rings with counter-rotating velocities simulating laser telemetry and focal depth rings.
- **Interactive Controls**:
  - Drag / Hover: Cursor tilt and interactive raycasting angle adjustments.
  - Optical Lab Sliders: Real-time focal length adjustment (`20mm - 120mm`), chromatic dispersion index, and spectral polarization filters (Amber 589nm, Photon Cyan 450nm, Emerald 532nm, Polarized Obsidian).

## Page Layout & Component Flow
1. **Global Header**:
   - Animated aperture icon lockup: `DIOPTER`
   - Real-time live multi-city world clock capsules (`TYO`, `SFO`, `ZRH`).
   - Availability pill: `CALIBRATED Q4/26`.
   - Navigation anchors & primary CTA button.
2. **Hero Section**:
   - Eyebrow: `• INDEPENDENT OPTICAL & SPATIAL INTERFACE ATELIER`
   - Main headline: `Bold ideas, engineered with quiet optical precision.`
   - Social proof rating: `★★★★★ 4.99 / 5.0 from 180+ venture executives`.
   - Dual actions: `Calibrate Your Flagship →` and `Simulate Lens Lab ↓`.
   - Floating Conversion Design Card with interactive tab selector (01 Optics, 02 Haptics, 03 Latency) and dynamic telemetry bar.
3. **Partner Logo Rail**:
   - Infinite smooth marquee with pause on hover (Kaido Dynamics, North Optics, Vellum Spatial, Orbit Aerospace, Bright Labs, Cobalt Robotics, Mesa Hardware).
4. **Engineered Specimens (Selected Works Grid)**:
   - 01: `Aster Telemetry` (Spatial HUD · Retinal Micro-OLED)
   - 02: `Nova Kinetics` (Biometrics · Haptic Waveform Console)
   - 03: `Helio Photonics` (Solar Concentrator · Series B Flagship)
   - 04: `Pulse Synapse` (BCI Companion & Industrial ID)
5. **Interactive Optical Lab**:
   - Real-time shader parameter sliders (Focal curvature, Chromatic dispersion, Spectral polarization selector) linked to the Three.js viewport.
6. **Telemetry Stats Strip**:
   - Four impact metrics (`99.8% Optical Transmission`, `4.6x Median Conversion Lift`, `14ms Frame Time`, `18+ Design Laurels`).
7. **Calibrator & Terminal Contact**:
   - Interactive inquiry form with budget tier selector and simulated command-line output.
8. **Footer**:
   - Geolocation coordinates, copyright, back-to-top anchor, and noindex robots compliance.
