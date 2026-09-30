# Design System & Motion Specification: Gravitas

## 1. Brand Identity & Overview
- **Reference URL:** `https://x.com/csaba_kissi/status/2104261754624893300/video/1` / `https://kinetics.colorion.co`
- **Fictional Brand:** **GRAVITAS**
- **Positioning:** The definitive physics-first motion design system and interaction library. Replaces arbitrary CSS durations and rigid cubic beziers with continuous spring differential equations.
- **Core Axiom:** *"Motion That Has Weight."*
- **Category:** `Studio` / `Developer` (Type: `brand`)
- **Aesthetic:** Dark graphite (`#0E0E10`), energetic kinetic amber (`#FF8A00`), precision oscilloscope telemetry, Archivo / Inter typography, and modular micro-interaction cards.

## 2. Color Palette & Chromatic Identity
- **Graphite (`--graphite`):** `#0E0E10` — Primary page substrate.
- **Raised Graphite (`--graphite-2`):** `#141417` — Raised surfaces, navbar, and input wells.
- **Card Surface (`--card`):** `#1A1A1D` — Micro-interaction stage cards.
- **Card Inset (`--card-2`):** `#232326` — Inset tracks and interactive zones.
- **Hairline Line (`--line`):** `#2A2A2E` — Architectural grid lines and borders.
- **Text Bone (`--bone`):** `#EDE9E0` — Primary high-contrast display text.
- **Text Bone Dim (`--bone-dim`):** `#A8A6A0` — Secondary descriptive copy.
- **Text Bone Faint (`--bone-faint`):** `#6E6C68` — Monospace annotations.
- **Kinetic Amber (`--amber`):** `#FF8A00` — Signature energy accent and glowing focus indicators.

## 3. Typography & Hierarchy
- **Display Sans:** `'Archivo', system-ui, sans-serif` (Weights: 700, 800, 900) with tight tracking (`letter-spacing: -0.04em`).
- **Body:** `'Inter', system-ui, sans-serif` (Weights: 400, 500, 600) for UI controls, inputs, and descriptions.
- **Telemetry & Parameters:** `'JetBrains Mono', monospace` for damping values, stiffness constants, search shortcuts, and code panels.

## 4. Key Architectural Features
1. **Signature Header Oscilloscope:**
   - SVG dual-frequency sine waveform (`#wave-path` & `#wave-path-2`) animated in real-time with edge window attenuation.
   - Telemetry HUD readout: `damping 24`, `stiffness 320`, `mass 1.0`.
2. **Instant Micro-Interaction Search Engine:**
   - Real-time client-side search indexing across all 153 interactions with keyword matching, count pills, keyboard slash `/` shortcut, and clear controls.
3. **The 153-Effect Interactive Library:**
   - **Interaction & Input (51 effects):** Dynamic search expanders, magnetic buttons, liquid glass buttons, elastic prompt composers, reorderable drag lists, swipe-to-delete cards, etc.
   - **Feedback & State (51 effects):** Toast overshoot, hold-to-confirm radial timers, 3D perspective flip cards, bouncy switch toggles, reaction burst particles, etc.
   - **Surface & Motion (51 effects):** 3D parallax tilt, accordion spring collapse, sliding indicator tabs, modal spring popovers, etc.
4. **Interactive Code & AI Prompt Modal:**
   - Every single effect includes interactive tabbed code dialogs offering:
     - **CSS:** Native CSS transitions, spring keyframes, and timing curves.
     - **React:** Framer Motion / Spring physics hooks.
     - **AI Prompt:** Production-ready copy-paste natural language prompts for AI coding agents.
5. **Interactive Physics Laboratory:**
   - Deep mathematical exposition ("Two numbers, not a duration").
   - Interactive numerical spring solver with live `stiffness` and `damping` sliders, real-time particle track, and `Release` impulse trigger.
