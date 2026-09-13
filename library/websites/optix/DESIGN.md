# OPTIX — Design System & Craft Specification

High-performance WebGPU shader infrastructure and real-time optical rendering engine for AI agents and generative spatial web.

## 1. Overview & Aesthetic Commitment

- **Aesthetic:** Minimalist Warm-White Architectural Studio with High-Precision Glass Optics, Node Graph Telemetry, and Chromatic Dispersion Beams.
- **Concept:** *Optix* (hardware-accelerated WebGPU rendering, raymarching, and glass caustics built for autonomous agents).
- **Core Narrative:** "The WebGPU library, designed for agents."
- **Rules:**
  - Clean studio foundation: Warm off-white (`#F5F5F3` / `#FAFAF8`) with subtle atmospheric depth and hairline architectural grid borders (`rgba(0,0,0,0.08)`).
  - Central Optical Glass Prism: Interactive 3D glass prism rendered with real-time mouse tracking, internal chromatic caustic reflections, and refracted light beams.
  - Floating Shader Node Graph: Dark slate floating inspection panels (`#18181B`) with live connected signal wires, input sliders, and pass preview textures.
  - Precision Editorial Typography: High-contrast serif display (`Newsreader` / `Playfair Display`) paired with clean technical grotesque sans (`Inter`) and monospace code (`JetBrains Mono`).
  - No generic corporate fluff. Real WGSL shaders, pipeline configs, and GPU frame latency metrics.

## 2. Color Palette & Semantic Tokens

- **Surface Studio:** `#F5F5F3`
- **Surface Pure White:** `#FFFFFF`
- **Surface Inspector Dark:** `#18181B` (Zinc 900)
- **Border Subtle:** `rgba(0, 0, 0, 0.08)`
- **Border Dark Panel:** `rgba(255, 255, 255, 0.12)`
- **Text Primary:** `#0A0A0B`
- **Text Muted:** `#71717A`
- **Spectrum Dispersion Accent:**
  - Red / Ruby: `#EF4444`
  - Emerald / Lime: `#10B981`
  - Cyan / Sapphire: `#06B6D4`
  - Violet / Prismatic: `#8B5CF6`

## 3. Typography Hierarchy

- **Hero Title:** `Newsreader` / Serif (48px–64px, italic/regular contrast)
- **UI Labels & Controls:** `Inter` (12px–14px, medium/semibold)
- **Code & Shaders:** `JetBrains Mono` (12px, tabular numbers, syntax-highlighted tokens)

## 4. Key Interactive Components

1. **Interactive Glass Prism Canvas (`#prismCanvas`):** Real-time interactive canvas with dynamic mouse-responsive refraction, caustic dispersion, and light beams.
2. **Interactive Shader Node Graph (`#shaderNodeGraph`):** Draggable/interactive nodes for Mesh Input, Material Spec, Dispersion Filter, and Output Composite.
3. **Real-Time Optics Control Panel:** Live sliders for Glass Roughness, Index of Refraction (IOR: 1.00–2.42), Chromatic Aberration, and Beam Angle.
4. **WGSL Live Shader Playground:** Editable shader code preview with syntax tokens and copy command.
5. **GPU Performance Telemetry Bar:** Live FPS meter, frame time (`0.4ms`), VRAM allocation counter, and WebGPU pipeline badge.
