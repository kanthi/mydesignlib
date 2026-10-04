# Solum Reserve — Design System (`solum`)

## Overview & Emotional Intent
Solum Reserve deconstructs and launches a single, micro-lot Gesha coffee bean cultivated at 2,140 meters in the Colombian Andes with the reverence, precision engineering, and visual language of an ultra-luxury Geneva horology manufacture.

Create this feeling through:
- Pure dark obsidian void (`#060709`) with surgical hairline brass calipers and warm champagne specular reflections.
- Real chronometric and thermodynamic telemetry: altitude, density, development time ratio, moisture loss, and pressure curves instead of vague culinary buzzwords.
- Interactive multi-beat scrollytelling: a central high-precision viewport where the bean rotates, reveals its macro topography, undergoes thermal cross-section analysis, and locks into a CNC-machined aerospace aluminum capsule.
- Web Audio API micro-chronometer ticks and atmospheric resonance toggles.

## Color Palette (Semantic Tokens)
```css
:root {
  --bg-primary: #060709;
  --bg-surface: #0e1015;
  --bg-elevated: #161820;
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-active: rgba(197, 160, 89, 0.4);
  --accent-gold: #c5a059;
  --accent-gold-bright: #e7c77e;
  --accent-gold-glow: rgba(197, 160, 89, 0.15);
  --thermal-hot: #f05a28;
  --thermal-mid: #e8a838;
  --thermal-cool: #28a7e9;
  --text-primary: #f5f4ef;
  --text-secondary: #8e8f99;
  --text-tertiary: #52545e;
  --text-gold: #d4b472;
}
```

## Typography Scale & Font Roles
- **Display**: `'Cinzel', serif` — for primary horology numerals, brand title, and chapter roman numbers.
- **Editorial / Headline**: `'Plus Jakarta Sans', sans-serif` — for section titles and high-impact ledes.
- **Telemetry / Monospace**: `'JetBrains Mono', monospace` — for coordinates, temperatures, batch metrics, and instrument dials.

```css
:root {
  --font-display: 'Cinzel', serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  
  --text-xs: 0.6875rem;    /* 11px */
  --text-sm: 0.8125rem;    /* 13px */
  --text-base: 0.9375rem;  /* 15px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.5rem;       /* 24px */
  --text-2xl: 2.25rem;     /* 36px */
  --text-3xl: 3.5rem;      /* 56px */
  --text-hero: clamp(2.75rem, 6vw, 5.5rem);
}
```

## Layout & Scrollytelling Architecture (5 Beats)
- **Beat 1: The Monolith Origin**: Pinned hero stage. Floating bean with orbital chronometer rings and live altitude coordinate readout (`2,140m AMSL`).
- **Beat 2: Macro Surface & Silverskin**: Zoom-in detailing the cellular fissure, caramelization gradient, and moisture percentage (10.4%).
- **Beat 3: Thermal Curve & First Crack**: Dynamic temperature curve overlay. Interactive thermal inspection lens that reveals interior core heating on pointer hover.
- **Beat 4: Cellular Cross-Section**: Mathematical grid analysis of porous lipid honeycomb and volatile aromatics distribution.
- **Beat 5: The Hermetic Capsule**: The single bean locks into an individually numbered CNC aerospace-grade titanium/sapphire capsule (`Edition 001/500`).

## Interactive Components
- **Telemetry HUD**: Floating micro-dials tracking scroll progression as chronometer seconds (0.00s → 60.00s).
- **Interactive Thermal Lens**: Hovering or dragging across the viewport triggers real-time infrared thermal false-color mapping.
- **Audio Synthesizer Engine**: Web Audio API synthesized mechanical escapement ticks and low-frequency resonance generator with ambient mute toggle.
- **Reserve Allocation Drawer**: Interactive drawer to inspect allocation certificate, batch testing curves, and reserve slot reservation.

## Bans & Anti-Patterns
- No generic coffee shop imagery (burlap sacks, steam swirls, brown wood tables).
- No stock clip-art coffee cups or generic serif italics.
- No bulky external libraries; pure vanilla JS + HTML5 Canvas + Web Audio API.
- Fully responsive across desktop (dual-column HUD + stage) and mobile (stacked instruments).
