# Janua — Design Specification

## Overview
Janua is a high-craft career and company website for a frontier verifiable intelligence systems lab. The centerpiece is an illuminated isometric 3D threshold: a dark room where a door swings open inward into radiant, blinding white light, casting an expanding trapezoidal beam of illumination across the charcoal floor plane.

The aesthetic fuses stark, atmospheric darkness (`#12110C`) with delicate editorial serif typography (`Instrument Serif`), disciplined Swiss modernist interface geometry (`Plus Jakarta Sans`), and living real-time motion physics.

## Core Tokens (`:root`)
```css
:root {
  --bg-ground: #12110C;
  --bg-surface: #181712;
  --bg-surface-elevated: #1F1E18;
  --bg-surface-glass: rgba(24, 23, 18, 0.72);
  --border-dim: rgba(255, 255, 255, 0.07);
  --border-light: rgba(255, 255, 255, 0.14);
  --border-focus: rgba(255, 255, 255, 0.28);
  --text-primary: #F5F3ED;
  --text-secondary: #9E9B92;
  --text-tertiary: #68655E;
  --accent-white: #FFFFFF;
  --accent-amber: #E2B874;
  --font-serif: "Instrument Serif", Georgia, "Times New Roman", serif;
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.22, 1, 0.36, 1);
}
```

## Typography Hierarchy
- **Hero Title**: `Instrument Serif`, regular 400, `clamp(3.5rem, 7vw, 6.5rem)`, letter-spacing `-0.02em`, line-height `0.98`.
- **Editorial Subheads & Accents**: `Instrument Serif`, italic or regular, line-height `1.15`.
- **UI Headers / Section Titles**: `Plus Jakarta Sans`, 500–600 weight, `clamp(1.75rem, 3.5vw, 2.75rem)`, letter-spacing `-0.03em`.
- **UI Body & Metadata**: `Plus Jakarta Sans`, 400 weight, `1rem`, line-height `1.6`.
- **Technical Badges & Code**: `JetBrains Mono`, 400–500 weight, `0.78rem` to `0.85rem`, tracking `0.02em`.

## Hero 3D Doorway Specifications
- **Projection Model**: Isometric orthographic projection angled at 31° wall slope.
- **Door Frame**:
  - Left hinge jamb: Vertical line from `(378, 152)` down to `(378, 722)`.
  - Top header jamb: Angled line from `(378, 152)` to `(618, 298)`.
  - Right catch jamb: Vertical line from `(618, 298)` to `(618, 868)`.
  - Bottom threshold: Angled line from `(378, 722)` to `(618, 868)`.
  - Floor perspective guidelines: Baseboard line extending along floor `(378, 722)` down-left through `(-200, 1050)`.
- **Door Leaf**:
  - Rotates smoothly about the left hinge from $0^\circ$ (flush closed) to $75^\circ$ (receptive open).
  - Contains two recessed wireframe panels, door latch ring, and realistic slab edge extrusion (depth ~ 14px).
- **Light Spill Geometry**:
  - Inner void is pure white `#FFFFFF` with luminous glow.
  - Floor projection trapezoid expands from threshold `(door_bottom_x, door_bottom_y) -> (618, 868)` forward to screen bottom `(280, 1140) -> (540, 1140)`.
  - Dual-layer gradient: high-intensity threshold core + soft diffuse feathered dispersion.
- **Dust Particles**:
  - Interactive Canvas floating particles with gentle Brownian motion, constrained within the illumination cone.

## Page Structure
1. **Nav Bar**: Fixed/sticky glass header with custom Janua geometric doorway glyph, navigation links, and pill CTA.
2. **Hero Section**: Editorial headline, subhead, open roles trigger, location badge, and interactive doorway canvas/SVG with scrub controls.
3. **Pillars & Creed**: 3 core founding tenets (Verifiable by Construction, High Agency / Low Coordination Tax, Quiet Focus).
4. **Metrics Bar**: Live animated counters displaying headcount, mathematical proof precision, funding, and carbon-neutral compute.
5. **Open Roles Directory**: Department filter (All, Engineering, Research, Product & Design, Trust), instant keyword search, and rich interactive role cards with drawer expansion and application modal.
6. **Life at Janua / Craft Bento**: High-fidelity culture cards (Global Gatherings, $10,000 Craft Stipend, Sabbaticals, 10-Year Equity).
7. **Transparent Hiring Journey**: 5-step milestone roadmap with zero whiteboarding traps and a paid 1-day collaborative work trial.
8. **Compensation & Equity Principles**: Transparent salary bands, global parity, and 100% healthcare coverage.
9. **FAQ Accordion**: 6 collapsible inquiries addressing visa sponsorship, async rituals, and hub flexibility.
10. **Pitch Your Mission (Final CTA)**: Callout for unsolicited high-craft pitches.
11. **Site Footer**: Brand info, system status, legal, GA4 tracking, and `robots` compliance.
