# Strata AI — Design System & Architectural Intelligence Spec

Autonomous architectural intelligence agent operating natively within CAD & BIM environments (Revit, Rhino, Archicad, SketchUp). Inspired by brutalist architectural drawing conventions, technical drafting grids, and real-time generative code compliance.

---

## 1. Brand Identity & Strategy

- **Brand Name**: Strata AI (fictional rebrand of Heron AI / Bearplus).
- **Core Proposition**: "An AI agent that works natively inside your architectural design tools. Inspects geometries, identifies building code violations, and automatically synthesizes parametric fixes upon approval."
- **Tone**: Rigorous, technical, modernist, architectural, uncompromisingly precise.

---

## 2. Color Tokens

| Token | Hex / Value | Semantic Role |
|---|---|---|
| `--bg-drafting` | `#F4F3ED` | Primary drafting parchment / pale concrete canvas |
| `--bg-card` | `#EAE8DF` | Secondary card & container elevation |
| `--hairline` | `#D4D1C5` | 1px technical drafting grid & boundary lines |
| `--hairline-dark` | `#2A2926` | Dark border lines & frame accents |
| `--ink-primary` | `#141413` | Deep obsidian ink for display type & linework |
| `--ink-secondary` | `#6B685F` | Technical annotations & dimension callouts |
| `--cad-red` | `#FF3318` | Safety red / code violation bounding boxes |
| `--cad-red-dim` | `rgba(255, 51, 24, 0.08)` | Active inspection zone overlay highlight |

---

## 3. Typography

- **Display & Section Titles**: `Space Grotesk`, `sans-serif` (weight 700, uppercase, tracking `-0.03em`).
- **Body Text**: `Plus Jakarta Sans`, `sans-serif` (weight 400/500, tight line height 1.45).
- **Technical Readouts / Telemetry**: `JetBrains Mono`, `monospace` (weight 500, uppercase, `letter-spacing: 0.08em`, font sizes `10px - 12px`).

---

## 4. Key Interactive Modules & Motion Choreography

1. **Interactive Crosshair Tracking & Code Violation Scanner**:
   - Dynamic full-width and full-height hairline crosshair tracking the cursor coordinates (`X: [x]PX`, `Y: [y]PX`).
   - Click & drag interaction revealing active red inspection bounding boxes over architectural elevation drawings:
     - `IBC 1011.11 HANDRAILS REQUIRED`
     - `IBC 1015.3 GUARDRAIL REQUIRED FOR FALL PROTECTION`
     - `IBC 1005.1 EGRESS CLEARANCE 44.0" NOMINAL`
   - Fix preview overlay on click.

2. **Continuous Technical Drafting Marquee**:
   - Running ribbon at hero base: `FEWER MISTAKES ⊕ LESS BUSYWORK ⊕ FASTER ITERATIONS ⊕ NATIVE BIM SYNCHRONIZATION ⊕ ZERO EXPORT REQUIRED`.

3. **High-Rise Tower with Red Sun Horizon**:
   - Monolithic vertical brutalist skyscraper elevation framed against a crimson celestial disk (`#FF3318`).
   - Split layout explaining manual drafting automation vs autonomous agent synthesis.

4. **Live Architectural Floorplan Node Analysis**:
   - Interactive 2D floorplan blueprint with animated SVG scanning pulses and interconnected red node vertices.
   - Real-time diagnostic console displaying rule execution, layer structure validation, and automated fix prompts.

5. **Monumental Outlined Wireframe Brand Mark (Footer)**:
   - Architectural drafting wireframe typography for **STRATA AI** with crosshair corner markers.
   - Interactive liquid / flood-fill hover effect filling glyphs with solid ink and displaying parametric coordinate nodes.
