# Runix — GPUI Component Library & Kinetic Showcase Design System

## 1. Brand Identity & Overview
- **Brand Name**: Runix (`runix_`)
- **Category**: Developer Tool / Rust GUI Ecosystem / Component Library
- **Tagline**: *Components for GPUI, in light and dark.*
- **Mission**: An open-source, hardware-accelerated component library for GPUI compiled from Rust to native desktop and WebAssembly. Features 1,272 components across 43 chapters, running with sub-millisecond latency.

---

## 2. Typographic Tokens
- **Display & Monolith Typography**: `Plus Jakarta Sans`, 700 / 800 weight, tight geometric tracking (`-0.04em`).
- **Body & Editorial**: `Inter`, 400 / 500 weight, high-clarity technical legibility.
- **Code, Telemetry & Keybindings**: `JetBrains Mono`, 500 / 600 weight, tabular numbers for animation telemetry bars.

---

## 3. Color Tokens
Dual-theme system with identical mathematical contrast ratios:
### Light Mode (Warm Stone / Oat Parchment)
- **Background Page**: `#F4F0E4` (Warm travertine parchment)
- **Background Surface**: `#EDE7D7`
- **Background Elevated**: `#E4DDD0`
- **Text Main**: `#181816`
- **Text Muted**: `#6E6D64`
- **Accent Rust / Amber**: `#D97706`
- **Border Subtle**: `rgba(24, 24, 22, 0.12)`

### Dark Mode (Obsidian & Carbon)
- **Background Page**: `#0F0E0B` (Deep basalt)
- **Background Surface**: `#161511`
- **Background Elevated**: `#1E1D17`
- **Text Main**: `#F4F0E4`
- **Text Muted**: `#9E9B8F`
- **Accent Gold / Amber**: `#F59E0B`
- **Border Subtle**: `rgba(244, 240, 228, 0.12)`

---

## 4. The 4-Act Kinetic Animation Choreography
The website features the exact interactive animation sequence from the reference:
1. **Act 1: `1 SEED`**:
   - Single cell generation in 3D canvas.
   - Smooth rotation, vertex glow, procedural edge expansion.
   - Telemetry: `BAR 01 / = 120` · *"Start with one cell."*
2. **Act 2: `2 GROW`**:
   - Rapid procedural subdivision into complex crystal polyhedron.
   - Live counter scrubbing up: `0 → 119 → 358 → 640 → 914 → 1,272 COMPONENTS`.
   - Rapid component telemetry cycling (`COLORPICKER`, `VIDEOPLAYER`, `SANKEYCHART`).
   - Telemetry: *"Grow a whole library."*
3. **Act 3: `3 STACK`**:
   - Polyhedral vertices fold into an axonometric 3D layered desktop application stack.
   - Step labels animate in: `01 TitleBar - StatusBar`, `02 FileTree`, `03 CodeEditor`, `04 Terminal & Diagnostics`.
   - Interactive 3D mouse tilt and layer separation.
   - Telemetry: *"Compose real apps."*
4. **Act 4: `4 FLIP`**:
   - Theme flip across entire page from warm parchment light to obsidian dark mode.
   - Canvas wireframes invert with glowing neon traces.
   - Telemetry: *"In light. And in dark."*
5. **Interactive Controls**:
   - Stage scrubber pills (1 SEED, 2 GROW, 3 STACK, 4 FLIP) allow the user to jump to any stage or scrub the timeline in real-time.
   - Play / Pause / Replay toggle.
   - Theme toggle button.

---

## 5. Live Component Catalog & Rust Code Explorer
- 43 Component Categories with live interactive specimens (Buttons, Sliders, Toggle Switches, Color Pickers, TreeViews, Code Editors, Data Tables, Audio Visualizers).
- Rust GPUI source code drawer with syntax highlighting and instant `cargo add runix-gpui` terminal snippet.
