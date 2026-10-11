# Orchestrix Design System & Specification

## Brand Identity & Architecture
- **Fictional Brand:** Orchestrix (derived from *orchestration* + *matrix* / *vortex*).
- **Tagline:** Your whole stack, running on autopilot.
- **Mission:** Next-generation autonomous AI orchestration platform that connects enterprise data fabrics, foundation models, and multi-agent swarms into self-running, deterministic workflows.
- **Reference Inspiration:** High-conversion developer-centric landing page reference with 3-tier isometric architectural stack and autonomous execution workflows.
- **Category:** SaaS / Developer / Product

## Color System
- **Canvas / Background:**
  - Background Light: `#f6f8fb` / `#f3f5f9` (clean modern architectural SaaS backdrop)
  - Surface Pure White: `#ffffff`
  - Subtle Grid Lines / Coordinates: `rgba(59, 130, 246, 0.12)`
  - Border Primary: `#e2e8f0`
  - Border Subtle: `#eaecf0`
- **Typography Ink:**
  - Ink 950 (Display Title): `#0d1120` (deep ink navy, high contrast)
  - Ink 800 (Headings): `#1e293b`
  - Ink 600 (Body copy): `#475569`
  - Ink 400 (Muted / Captions): `#94a3b8`
- **Primary Electric Brand Color (Royal Blue):**
  - Blue 600 (Primary Accent): `#2b41f7` (vibrant electric ultramarine blue)
  - Blue 700 (Hover / Active): `#1d33d8`
  - Blue 500 (Glow / Particle): `#3b82f6`
  - Blue 50 (Soft surface): `#eff6ff`
  - Blue 100 (Border active): `#dbeafe`
- **Isometric 3D Stack Tiers:**
  - **Tier 1 — AGENTS (Top):** Solid high-density cobalt blue (`#2b41f7` to `#1e3a8a`), beveled isometric facets, glowing center white aperture core, floating vertical quantum particle stream.
  - **Tier 2 — MODELS (Middle):** Translucent frosted glass slab (`rgba(224, 235, 255, 0.75)` with `#3b82f6` borders), isometric wireframe neural octahedron with pulsating vertices and connecting edges.
  - **Tier 3 — DATA (Base):** Solid architectural slab foundation (`#edf1fe`), dual-rail peripheral data bus with animated moving light pulses, corner interface cubes with directional chevrons.
- **Accents & Status:**
  - Success / Active: `#10b981` (emerald green)
  - Warning / In-flight: `#f59e0b` (amber)
  - Latency / Metric: `#6366f1` (indigo)

## Typography Hierarchy
- **Font Family:** Plus Jakarta Sans, Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif.
- **Monospace Family:** JetBrains Mono, "Fira Code", monospace (for telemetry and live execution logs).
- **Scale:**
  - Display Hero H1: `clamp(40px, 5.4vw, 68px)`, line-height: `1.08`, weight: `800`, letter-spacing: `-0.04em`.
  - Section Title H2: `clamp(30px, 3.8vw, 44px)`, line-height: `1.15`, weight: `750`, letter-spacing: `-0.03em`.
  - Subheadings H3: `20px` - `24px`, line-height: `1.3`, weight: `650`, letter-spacing: `-0.02em`.
  - Body Large: `18px`, line-height: `1.6`, weight: `400`.
  - Body Regular: `15px`, line-height: `1.55`, weight: `400`.
  - Pill / Badges: `12px` - `13px`, line-height: `1`, weight: `600`.

## Elevation, Radii & Grid
- **Border Radii:**
  - Full Pill (Nav, Badges, CTAs): `9999px`
  - Container / Bento Cards: `20px` - `24px`
  - Buttons / Controls: `12px` - `14px`
- **Shadows:**
  - Nav Bar Elevation: `0 12px 36px -8px rgba(15, 23, 42, 0.08), 0 2px 6px rgba(0, 0, 0, 0.02)`
  - Blue Button Glow: `0 12px 28px -4px rgba(43, 65, 247, 0.42)`
  - Card Subtle: `0 1px 3px rgba(15, 23, 42, 0.04), 0 10px 25px -5px rgba(15, 23, 42, 0.05)`
  - Active Layer Glow: `0 0 35px rgba(43, 65, 247, 0.28)`

## Signature Visuals & Motion
1. **Interactive 3D Isometric Architectural Stack**:
   - 30-degree isometric projection computed with SVG vector paths and CSS 3D matrix.
   - Smooth levitation / sine-wave oscillation on top and middle layers.
   - Continuous orbital satellite particles running along tilted dashed elliptical path.
   - Dual bus traveling light-pulse animations along the DATA foundation rim.
   - Mouse-movement 3D parallax tilt response.
   - Layer inspection toggle: clicking/hovering any tier reveals live telemetry HUD.
2. **Interactive Live Pipeline Simulator**:
   - Step-by-step autonomous execution runner showing real-time token streaming, model selection, and zero-hallucination verification.
3. **Bento Grid Architecture**:
   - High-contrast interactive cards showcasing Agent Swarms, Multi-Model Router, Vector Data Fabric, and SOC 2 Sandboxing.
4. **Interactive Pricing Calculator**:
   - Monthly / Annual switcher with instant cost breakdown.
5. **Interactive Accordion FAQ & Micro-Interactions**:
   - Fluid spring animations with full `prefers-reduced-motion` compliance.
