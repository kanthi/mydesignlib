# Cineflow — Cloud Cinema & Film Festival Operating System

## 1. Brand Essence & Positioning
- **Entity**: Cineflow (`CINEFLOW`)
- **Category**: Entertainment / Cloud Cinema Box Office & Independent Film Festival Ticketing
- **Origin Reference**: Rebranded deliverable inspired by Filmbot (`filmbot.com`)
- **Brand Positioning**: *The Modern Operating System for Independent Cinema. Cloud ticketing, reserved seating, concessions POS, and automated DCI compliance engineered for theaters.*
- **Tone**: Devoted cinematic advocate, architectural dark mode, warm theater halation, editorial gridlines, and precision typography.

---

## 2. Motion Design & Transitions (GSAP + Lenis)
- **Lenis Smooth Scroll**: Inertial momentum scroll with calibrated damping ($0.1$) for smooth editorial browsing.
- **GSAP ScrollTrigger**:
  - **Hero Spotlight Reveal**: Radial spotlight expanding smoothly from center stage with text stagger (`y: 40, opacity: 0, duration: 1.2`).
  - **Ticket Counter Ticker**: Animated rolling digit tweens from $0$ up to $8,421,950$ with periodic incremental live ticks.
  - **Interactive Seat Chart**: Live interactive cinema screen with curved SVG horizon, 8-row dynamic seat map with real-time selection, accessibility tags, and instant subtotal tally.
  - **Directional Tab Transitions**: Replicating Filmbot’s exact sliding tab physics with directional enter and exit keyframes.
  - **Horizontal Project Slider**: Smooth translate transitions with custom outline arrow buttons and card hover scale.

---

## 3. Color Tokens
- **Cinema Obsidian**: `#0D0D11` (Deep auditorium pitch)
- **Spotlight Cream**: `#F4EFE6` (Warm projection beam)
- **Amber Velvet**: `#D4A574` (Arthouse warmth & vintage 35mm tones)
- **Crimson Curtain**: `#B8283E` (Theater seat velvet & live indicators)
- **Projection Blue**: `#3B5998` / `#5072C4` (Digital screen fidelity)
- **Grid Hairline**: `rgba(255, 255, 255, 0.12)` (Technical drafting boundaries)

---

## 4. Typographic Hierarchy
- **Display Headlines**: `Space Grotesk` / `Plus Jakarta Sans` (700 Bold / 800 ExtraBold). Tight tracking (`-0.03em`) and uppercase superscript badges.
- **Editorial Subheads**: `Plus Jakarta Sans` (500 Medium / 600 SemiBold).
- **Technical Telemetry & Seat Codes**: `JetBrains Mono` (Seat designations, Comscore numbers, DCI key telemetry).
