# Kaelen Architecture — Design System & Technical Spec

## 1. Brand Identity & Overview
- **Brand Name**: Kaelen Architecture (`kaelen.`)
- **Category**: Architecture Studio / Sustainable High-End Residential
- **Tagline**: *Homes shaped by light and land.*
- **Mission**: Kaelen is an independent architecture studio designing low-energy homes that read their site first — orientation, wind, views, and ground — and build everything else around it.
- **Studios**: Zurich (CH), Mendoza (AR), Oslo (NO)

---

## 2. Typographic System
Clean Swiss modernist grotesque typography paired with a high-precision monospace for technical telemetry:
- **Display / Headings**: `Plus Jakarta Sans`, 700 / 800 weight, tight negative letter-spacing (`-0.035em` to `-0.05em`), all-caps architectural headlines.
- **Body / Editorial**: `Inter`, 400 / 450 / 500 weight, balanced line-height `1.65`, comfortable reading rhythm.
- **Technical / Telemetry**: `JetBrains Mono`, 400 / 500 weight, uppercase tabular figures for elevation coordinates, square meters, U-values, and orientations.

### Type Scale
| Level | Font | Size / Line Height | Tracking | Weight |
|---|---|---|---|---|
| Monumental Hero | Plus Jakarta Sans | 4.8rem – 7.2rem / 0.95 | -0.05em | 800 |
| Section Title | Plus Jakarta Sans | 2.5rem – 3.8rem / 1.1 | -0.04em | 700 |
| Subsection Title | Plus Jakarta Sans | 1.5rem – 2.0rem / 1.25 | -0.025em | 600 |
| Body Lead | Inter | 1.15rem – 1.35rem / 1.55 | -0.01em | 400 |
| Body Standard | Inter | 0.95rem – 1.05rem / 1.65 | 0 | 400 |
| Telemetry / Tag | JetBrains Mono | 0.75rem – 0.85rem / 1.4 | +0.08em | 500 |

---

## 3. Color Tokens
Warm tactile architectural palette grounded in unvarnished natural materials:
- **Canvas / Primary Light**: `#F6F5F2` (Warm travertine plaster)
- **Canvas Alt / Card Surface**: `#FFFFFF` (Crisp studio white)
- **Charcoal / Primary Dark**: `#121415` (Deep charred cedar & basalt)
- **Charcoal Soft / Surface 2**: `#1E2225` (Carbon steel & slate)
- **Border / Hairline Grid**: `rgba(18, 20, 21, 0.08)` (Light) / `rgba(255, 255, 255, 0.12)` (Dark)
- **Accent Terracotta**: `#E55B32` (Sun-baked clay, solar azimuth line)
- **Accent Timber Ochre**: `#C88D4E` (Glulam oak, western warm grain)
- **Muted Sage / Flora**: `#7F8D7E` (Site lichen & olive brush)
- **Text Primary**: `#121415`
- **Text Secondary**: `#636B73`
- **Text Tertiary**: `#959EA7`

---

## 4. Layout Architecture & Sections
1. **Header & Floating Island Nav**:
   - `kaelen.` wordmark with terracotta period mark.
   - Pill navigation (`Studio`, `Projects`, `Philosophy`, `Blueprint`, `Journal`).
   - Sticky frosted glass effect (`backdrop-filter: blur(16px)`).
   - Direct CTA: `Book a studio visit ↗` opening the interactive studio selector.
2. **Hero Section (Reference Faithful)**:
   - Split layout: Massive multi-line grotesque title (`HOMES SHAPED BY LIGHT & LAND`) on left.
   - Studio manifesto paragraph and dual action pills (`Start a project ↗` and `View work`) on right.
   - Monumental architectural imagery of `Casa Lúmen` with interactive pulse pins:
     - *Cantilevered oak canopy*
     - *North-facing solar terrace*
     - *Rammed earth thermal battery*
   - Floating frosted project telemetry card (`FEATURED PROJECT`, `Mendoza, AR`, `320 m²`, `Passive House`, `2025`).
   - Bottom-right solar azimuth indicator and smooth scroll button (`Explore the house ↓`).
3. **Interactive Project Deep Dive**:
   - Technical blueprint section elevation study with interactive layers (Summer 68° vs Winter 32° solar gain paths, natural katabatic cross-ventilation flow, U-values).
   - Material specimens tactile gallery (glulam oak, rammed earth, triple-glazed acoustic glass, rough alpine granite).
4. **Site-Responsive Philosophy / The 4 Site Vectors**:
   - Orientation (Solar Geometry)
   - Wind & Microclimate (Passive Stack Ventilation)
   - Ground & Topography (Zero-Cut Glacial Bedrock Pinning)
   - Embodied Carbon (Negative Net Carbon Mass Timber)
   - Real-time studio efficiency statistics.
5. **Featured Projects Portfolio**:
   - Filterable catalog (Residential, Alpine, Desert, Coastal).
   - Rich project cards with area, year, energy certification badge, and detail expanders.
6. **Journal & Research**:
   - Architectural essays on biophilic thermal envelopes and heavy timber acoustic dampening.
7. **Studio Inquiries & Interactive Consultation Drawer**:
   - Project location & scale estimator, studio visit booking for Zurich, Mendoza, and Oslo.
8. **Monolithic Architecture Footer**:
   - Huge display typography, studio coordinates, certifications, and legal/privacy links.

---

## 5. Motion & Interaction Model
- **Scroll Behavior**: Smooth scroll interpolation with native fallback.
- **Hotspot Micro-Interactions**: Hovering/clicking on pins expands frosted glass callouts with thermal engineering notes.
- **Blueprint Layering**: Toggle between "Solar Path", "Thermal Mass", and "Airflow Dynamic" overlays.
- **Accessible Design**: Full `prefers-reduced-motion: reduce` overrides disabling transform shifts and pulsing animations.
