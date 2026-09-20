# DESIGN — Volar (TXR Electric Enduro)

## Overview
- **Audience**: Enduro competitors, cross-country trailblazers, and technical motorsports enthusiasts seeking instantaneous torque, zero engine noise, and modular battery swapping.
- **Single CTA**: `Configure TXR` (with secondary `Explore the bike` anchor).
- **Emotion**: High-voltage adrenaline balanced with surgical Scandinavian industrial precision and mechanical silence.
- **Create this feeling through**:
  - Deep carbon obsidian (`#0c0f0d`) contrasted against bright Swedish granite ecru (`#f5f3ef`).
  - Piercing electric voltage yellow (`#F4E500`) reserved strictly for interactive actions, primary telemetry badges, and the GPS tracking reticle.
  - Generous asymmetric vertical pacing (`clamp(5rem, 10vw, 8.5rem)`).
  - Heavy geometric display typography (`Outfit` / `Plus Jakarta Sans`) paired with technical monospace instrumentation (`JetBrains Mono`).

## Source of truth
- This file + CSS `:root` in `index.html`.

## Aesthetic commitment
- **Name**: Scandinavian High-Voltage Industrial
- **Signature element**: High-contrast dual-theme sectional shifts with interactive sticky USP engineering scrubber and real-time SVG trail GPS route tracer.

## Colors (semantic)
- `surface-dark`: `#0c0f0d` — Primary dark section background
- `surface-dark-elevated`: `#141916` — Dark cards, HUD containers, modal backdrops
- `surface-light`: `#f5f3ef` — High-contrast daylight sections
- `surface-light-elevated`: `#ffffff` — Crisp white cards on light surfaces
- `text-dark-primary`: `#f5f7fa` — Primary text on dark surfaces
- `text-dark-secondary`: `#8a968f` — Secondary and telemetry text on dark surfaces
- `text-light-primary`: `#0f1411` — Primary text on light surfaces
- `text-light-secondary`: `#5c6760` — Secondary text on light surfaces
- `action-primary`: `#F4E500` — High-voltage electric yellow (primary CTA, active pills, GPS beacon)
- `action-primary-hover`: `#dfd200` — Hover state for electric yellow
- `border-dark`: `rgba(255, 255, 255, 0.08)` — Structural borders on dark
- `border-light`: `rgba(0, 0, 0, 0.08)` — Structural borders on light

## Typography
- **Display**: `Outfit`, sans-serif (Weights: 600, 700, 800) — Hero headings, section titles, wordmark
- **Body**: `Inter`, sans-serif (Weights: 300, 400, 500) — Editorial copy, explanations
- **Telemetry / Mono**: `JetBrains Mono`, monospace (Weights: 400, 500) — GPS coordinates, specs, odometer index
- **Scale**:
  - Hero display: `clamp(3.0rem, 7vw, 6.25rem)` (leading: 1.02, tracking: -0.035em)
  - Section title: `clamp(2.25rem, 4.5vw, 3.75rem)` (leading: 1.08, tracking: -0.025em)
  - Subsection / Card: `clamp(1.25rem, 2vw, 1.85rem)` (leading: 1.25)
  - Body: `1.05rem` (leading: 1.65)
  - Mono / Label: `0.75rem` (tracking: 0.08em, uppercase)

## Layout & Structure
1. **Station Header**:
   - Fixed frosted navigation bar with live section odometer counter (`01 / 07 OVERVIEW` with interactive jump menu), bold geometric `VOLAR` wordmark, and electric-yellow "Configure TXR" pill.
2. **Hero Viewport**:
   - Full-bleed cinematic hero background stage featuring the Volar TXR with subtle atmospheric float.
   - Left-aligned bold typography lockup and dual CTAs with animated button masks.
   - Floating interactive Mini Showreel card with progress timer and video modal trigger.
3. **Interactive USP / Engineering Stage (Sticky Feature Scrubber)**:
   - 7 core USPs (OmniPack 30s swap, Instant 1,080 Nm, Smart Storage, Acoustic Stealth, Zero Maintenance, App Tuning, Monocoque Chassis).
   - Left: Clickable/scroll-synced USP title list with active progress indicators.
   - Right: Sticky visual stage displaying high-res engineering renders with contextual telemetry captions.
4. **Full-Screen Manifesto Interlude**:
   - High-contrast quote: *"Some wait for change. Others engineer it."*
   - Parallax woodland trail photography backdrop.
5. **Interactive Topographic GPS Trail & Route Tracer**:
   - Live topographic map with an interactive scroll-drawn SVG route spline and moving GPS waypoint telemetry marker (`68.3582° N, 14.6134° E · ELEV: 1,420M · GRADE: +28%`).
   - Side-by-side racing proof: "Built for Enduro", "Ready for Extreme Rally".
6. **Draggable Action Photography Gallery**:
   - High-speed roost shots, rock ascents, and single-tracks.
7. **Technical Telemetry & Spec Sheet**:
   - Deep-dive technical specifications (72 hp / 54 kW, 1,080 Nm torque, 30s swap, 104 kg curb weight, 140 km range, WP XACT PRO suspension).
8. **Pre-Order & Pricing Reservation Stage**:
   - "Be the first on the line." €99 refundable reservation deposit, transparent delivery timelines.
9. **Brutalist Footer**:
   - "Explore beyond limits." with dispatch subscription, navigation matrix, and required legal/privacy metadata.

## Motion & Micro-interactions
- Header scroll transitions and odometer step updates.
- Interactive USP switcher with smooth cross-dissolve between technical engineering views.
- Scroll-driven SVG path drawing for the trail route.
- Interactive showreel lightbox with play/pause controls.
- Micro-interactions on buttons with arrow/plus slide animations.
- `prefers-reduced-motion` compliance.

## Ban list
- No real trademarks (`Radian`, `InfiniPack`, `KTM`, etc.).
- No placeholder or broken asset links.
- No third-party video host dependencies (clean local fallbacks & modals).
- No search indexing markup.
