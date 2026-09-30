# Design System & Specification: Avenier Studio

## 1. Brand Identity & Rebrand Blueprint
- **Original Reference:** Oréa Studio by Pixcut Studio (`https://x.com/pixcutstudiollc/status/2104199328541941930`)
- **New Fictional Brand:** **Avenier Studio** (Atelier Avenier / Avenier Architecture & Interior Design)
- **Positioning:** International luxury architectural sanctuary and bespoke residential interior atelier. Crafting serene, monolithic living environments where raw organic materials, panoramic landscape choreography, and quiet luxury converge.
- **Tone & Mood:** Warm architectural minimalism, quiet luxury, tactile materiality, museum-grade composition, Swiss-modernist balance, editorial confidence.

## 2. Color Palette & Spatial Materiality
- **Base Background (`--bg-sand`):** `#F6F3ED` — Warm unbleached travertine parchment, providing soft organic warmth without cold sterile whites.
- **Card / Surface Canvas (`--bg-surface`):** `#EFEAE0` — Subtle tonal layering for architectural cards and floating HUD elements.
- **Dark Neutral (`--text-primary`):** `#181716` — Deep warm carbon espresso, high legibility with softened contrast.
- **Secondary Neutral (`--text-secondary`):** `#635F57` — Weathered limestone slate for body paragraphs and architectural annotations.
- **Muted Editorial (`--text-muted`):** `#9C978D` — Subdued captioning and coordinate typography.
- **Warm Bronze Accent (`--accent-bronze`):** `#C49257` — Subtle warm patinated bronze highlight for active states and icons.
- **Structural Lines (`--border-subtle`):** `rgba(24, 23, 22, 0.10)` — Ultra-fine architectural drafting lines.

## 3. Typography System
- **Display Sans (`--font-display`):** `'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif`
  - Ultra-tight tracking (`letter-spacing: -0.04em`)
  - Confident geometric curves and editorial proportions matching the reference's bold display typography.
- **Editorial Body (`--font-body`):** `'Plus Jakarta Sans', sans-serif` with calibrated line height (1.6) and balanced weights (300, 400, 500).
- **Architectural Notation (`--font-mono`):** `'JetBrains Mono', monospace`
  - Used for project years, room dimensions, geographic coordinates, and material code callouts.

## 4. Architectural Layout Structure
1. **Header & Navigation Bar:**
   - Left: `PROJECT ⁸` counter, `PHILOSOPHY`, `ATELIER`
   - Center: `AVENIER ❋` logotype with 8-petal architectural floral asterisk mark
   - Right: Direct atelier concierge phone `+1 (212) 555-0198` and circular hamburger drawer menu button
2. **Hero Sanctuary Canvas:**
   - Large framed architectural photography of an alpine residence living room looking out to pine forests and mist-veiled peaks.
   - Large display typography `Avenier Studio` with horizontal architectural hairline and uppercase descriptor `LUXURY INTERIOR DESIGN STUDIO`.
   - Floating HUD with current composition badge (`Villa Engadina`, `St. Moritz`), carousel index (`01 — 04`), and `Explore Projects ↗` link.
3. **Monolithic Editorial Overview ("Designed For Timeless Living"):**
   - Left column: Massive statement typography and framed photograph of a monumental travertine spiral staircase.
   - Right column: High-impact editorial proof metrics (`12+`, `140+`, `98%`, `4`) with spatial descriptions.
4. **Featured Architectural Commissions (Interactive Grid & Cards):**
   - Filter pills: All, Alpine Retreats, Private Residences, Penthouses, Estates.
   - Stacked landscape cards featuring full-bleed photography, year/category markers, evocative narratives, and "Designed by Avenier Atelier" badges:
     - `Villa Lumière` (Curved cove lighting gallery corridor & dusk pool terrace)
     - `Villa Montclair` (Warm valley residence with fluted oak & open hearth)
     - `Maison Verre` (Skyline penthouse with brass fixtures & city vistas)
     - `The Somerset Pavilion` (Historic vernacular timber & limestone retreat)
   - Interactive Project Modal inspecting blueprints, square footage, spatial orientations, and curated materials.
5. **Materiality & Tactile Laboratory:**
   - Curated architectural materials: Travertine Navona, Fluted Smoked Oak, Hand-Poured Bronze, Belgian Bouclé Linen, Honed Nero Marquina.
   - Interactive detail inspect showing provenance, thermal properties, and texture previews.
6. **The Four-Stage Architectural Protocol:**
   - 01 Spatial Cartography
   - 02 Monolithic Modeling
   - 03 Artisanal Fabrication
   - 04 Turnkey Commissioning
7. **Monograph & Critical Recognition:**
   - Curated press excerpts from Architectural Digest, Wallpaper*, and Frame.
8. **Private Commission Inquiry Desk:**
   - Interactive architectural brief builder (Property typology, Location, Square footage, Project timeline).
9. **Monolithic Footer:**
   - Atelier global coordinates (New York, Paris, Zurich, Kyoto).
   - Massive geometric wordmark `AVENIER ATELIER`.
   - Contact, legal, and privacy metadata.

## 5. Motion Choreography
- Lenis smooth inertial scrolling.
- GSAP & ScrollTrigger scroll-driven reveals with stagger and smooth ease (`power3.out`).
- Micro-interactions on buttons, interactive project modals, and material spec cards.
- Respects `prefers-reduced-motion: reduce`.
