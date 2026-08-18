# Orthon — Design System & Technical Blueprint Specification

Design system for **Orthon**, an industrial telemetry and manufacturing intelligence platform. Derived from high-precision architectural drafting, Swiss typography, and clean circuit/conduit schematic engineering.

---

## 1. Design Principles & Aesthetic Identity

- **Architectural Drafting & Technical Telemetry**: Precision hairlines, crosshairs (`+`, `•`), coordinate labels, bracketed bounding boxes (`[ ... ]`), and diagonal-hatched margin rulers.
- **High Information Density with Serene Whitespace**: Clean off-white technical drafting sheets (`#F7F8FA` / `#FFFFFF`) paired with deep graphite and carbon typography (`#0E1116`, `#1B212D`).
- **Dynamic Conduit Schematics**: Interactive SVG & Canvas flow trees representing assembly line data routing, live harmonic signals, and edge telemetry packets.
- **Zero AI-Slop**: No generic rounded purple cards, no meaningless glowing blobs, no floating stock cards. Every visual element functions as an authentic representation of industrial operational telemetry.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Surfaces */
  --bg-sheet: #f6f7f9;
  --bg-surface: #ffffff;
  --bg-surface-subtle: #f0f2f5;
  --bg-surface-hover: #e8ebf0;
  --bg-dark: #0e1116;
  --bg-dark-surface: #161b22;
  
  /* Ink & Typography */
  --ink-primary: #0e1116;
  --ink-secondary: #4a5568;
  --ink-muted: #718096;
  --ink-faint: #a0aec0;
  --ink-inverse: #ffffff;
  
  /* Technical Hairlines & Borders */
  --line-grid: #e2e6eb;
  --line-bold: #cbd2dc;
  --line-dark: #272f3d;
  --line-bracket: #0e1116;
  
  /* Telemetry Status Signals */
  --signal-live: #10b981;      /* Operational Normal / Green */
  --signal-live-glow: rgba(16, 185, 129, 0.25);
  --signal-warn: #f59e0b;      /* Micro-Drift Warning / Amber */
  --signal-alert: #ef4444;     /* Critical Stoppage / Red */
  --signal-bus: #2563eb;       /* High-Speed Signal / Blue */
  --signal-conduit: #1e293b;   /* Circuit Trace / Graphite */

  /* Typography Scale */
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", "Fira Code", monospace;
  
  --text-xs: 0.6875rem;   /* 11px */
  --text-sm: 0.8125rem;   /* 13px */
  --text-base: 0.9375rem; /* 15px */
  --text-md: 1.0625rem;   /* 17px */
  --text-lg: 1.25rem;     /* 20px */
  --text-xl: 1.5rem;      /* 24px */
  --text-2xl: 2rem;       /* 32px */
  --text-3xl: clamp(2.25rem, 4.5vw, 3.5rem);  /* 36px - 56px */
  --text-hero: clamp(2.75rem, 5.8vw, 4.75rem); /* 44px - 76px */

  /* Spacing */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6rem;

  /* Layout */
  --container-max: 1280px;
  --gutter: clamp(1rem, 3vw, 2.5rem);
  --radius-none: 0px;
  --radius-sm: 2px;
  --radius-md: 4px;
}
```

---

## 3. Core Component Patterns

### 3.1 Technical Corner Brackets (`.btn-bracket`, `.card-bracket`)
Buttons and cards feature precise technical CAD corner ticks:
- Primary CTA: Solid black fill with corner tick markings `[ GET IN TOUCH ]` that subtly expand on hover.
- Secondary CTA: Crisp 1px outline with matching CAD tick corners `[ CASE STUDIES ]`.

### 3.2 Live Operations Beacon (`.badge-telemetry`)
Pill badge with a pulsing green SVG dot, monospace frequency spec `[ ◉ LIVE OPERATIONS · 100Hz EDGE BUS ]`, and hairline dashed border.

### 3.3 Dynamic Conduit Schematic (`.hero-conduit-tree`)
Pure SVG vector branching tree with 45°/90° routing, multi-channel inputs, central telemetry trunk, and live animated pulse packets gliding down to interactive collector nodes.

### 3.4 Interactive Digital Twin Line Explorer (`.plant-simulator`)
Tabbed line switcher (Automotive EV Cell, CNC Aerospace Milling, Cleanroom Wafer Packaging) featuring live Canvas harmonic vibration waveforms, temperature gradients, and interactive micro-drift simulation.

### 3.5 Protocol Compatibility Matrix (`.protocol-grid`)
Engineered grid of industrial interfaces (Siemens S7, Rockwell, Fanuc, Beckhoff TwinCAT, MQTT Sparkplug B, OPC-UA) with live latency indicators and status telemetry.

---

## 4. Anti-Slop Safeguards
- ❌ No floating blurry purple/violet orbs.
- ❌ No generic "AI that automates everything" copy — only authentic manufacturing metrics (OEE, MTTR, FFT vibration, PLC writeback, cycle-time variance).
- ❌ No generic stock photos with watermarks.
- ❌ No fake placeholder lorem ipsum — complete, technically rigorous industrial engineering copy.
