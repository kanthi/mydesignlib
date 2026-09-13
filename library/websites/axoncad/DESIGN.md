# AxonCAD — Design System & Technical Specification

Design system specification for **AxonCAD**, a browser-native AI parametric CAD kernel and collaborative mechanical engineering platform. Inspired by precision CAD workbenches, aerospace telemetry, high-framerate WebGPU tooling, and dark technical instrumentation.

---

## 1. Product & Aesthetic Intent

- **Core Identity**: High-precision mechanical engineering workbench combined with instant AI intent modeling and WebGPU real-time parametric solving.
- **Visual Emotion**: Uncompromisingly technical, ultra-crisp, performant, and authoritative. Deep carbon obsidian surfaces paired with electric cyan laser highlights, blueprint cobalt structural grids, and emerald telemetry indicators.
- **Anti-Slop Directives**: No fuzzy generic purple gradients, no fake floating isometric cubes with meaningless text, no decorative non-functional fluff. All visual widgets (feature tree, viewport coordinate axes, parameter sliders, Git graph nodes, drafting dimension lines) represent actual engineering logic.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Surface Depths */
  --bg-canvas: #070709;
  --bg-workbench: #0d0e12;
  --bg-surface: #12141a;
  --bg-surface-elevated: #181b22;
  --bg-surface-hover: #1f232c;
  --bg-surface-active: #262b36;
  --bg-glass: rgba(18, 20, 26, 0.85);

  /* Border & Grid Hairlines */
  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-standard: rgba(255, 255, 255, 0.12);
  --border-focus: rgba(0, 240, 255, 0.5);
  --border-cyan: #00f0ff;
  --border-blue: #3b82f6;

  /* Typography & Ink */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-faint: #475569;
  --text-cyan: #00f0ff;
  --text-emerald: #10b981;
  --text-amber: #f59e0b;

  /* Engineering Accents */
  --cyan-primary: #00f0ff;
  --cyan-glow: rgba(0, 240, 255, 0.22);
  --blue-primary: #3b82f6;
  --blue-glow: rgba(59, 130, 246, 0.25);
  --emerald-status: #10b981;
  --emerald-glow: rgba(16, 185, 129, 0.2);
  --amber-warning: #f59e0b;
  --rose-alert: #f43f5e;

  /* Technical Grid Lines */
  --cad-grid-major: rgba(255, 255, 255, 0.08);
  --cad-grid-minor: rgba(255, 255, 255, 0.03);
  --blueprint-line: rgba(59, 130, 246, 0.35);

  /* Typography Scale */
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", "Fira Code", monospace;

  --text-xs: 0.6875rem;    /* 11px */
  --text-sm: 0.8125rem;    /* 13px */
  --text-base: 0.9375rem;  /* 15px */
  --text-md: 1.0625rem;    /* 17px */
  --text-lg: 1.25rem;      /* 20px */
  --text-xl: 1.5rem;       /* 24px */
  --text-2xl: 2rem;        /* 32px */
  --text-3xl: clamp(2.25rem, 4vw, 3.25rem); /* 36px - 52px */
  --text-hero: clamp(2.75rem, 5.5vw, 4.5rem); /* 44px - 72px */

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

  /* Radii */
  --radius-xs: 3px;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Layout */
  --container-max: 1280px;
  --gutter: clamp(1rem, 3.5vw, 2.5rem);
}
```

---

## 3. High-Frequency Component Specifications

### 3.1 Primary Action CTA
- **Background**: Gradient from `#00f0ff` to `#3b82f6` with soft glow `0 0 20px rgba(0,240,255,0.3)`.
- **Text**: Jet black `#070709`, font-weight `600`, letter-spacing `-0.01em`.
- **Hover State**: Transform `translateY(-1px)`, increased glow `0 0 28px rgba(0,240,255,0.5)`.

### 3.2 Secondary Technical Button
- **Background**: `rgba(255, 255, 255, 0.04)` with border `1px solid var(--border-standard)`.
- **Text**: `#f8fafc`, monospaced coordinate badges or technical icons.
- **Hover State**: Background `var(--bg-surface-hover)`, border `var(--border-cyan)`.

### 3.3 CAD Viewport Canvas
- **Frame**: Deep obsidian background with interactive Three.js solid rendering, isometric orientation cube, axis gizmo (X: Red, Y: Green, Z: Blue), status bar (`FPS: 144.0 | SOLVE: 0.38ms | WASM: RUNNING`).
- **Interactive Controls**: Orbit rotation, zoom scroll, pan drag, view mode buttons (Solid, Wireframe, X-Ray, Section Cut, Mesh).

### 3.4 Natural Language Prompt Engine
- **Input Bar**: Glass surface with glowing focus border, command shortcuts (`/fillet`, `/extrude`, `/hollow`, `/revolve`), sample mechanical prompt chips for immediate demonstration.
- **Live Output**: Live generation progress stepper, feature tree addition, real-time solid model update.

### 3.5 Auto-Dimensioned 2D Drawing Blueprint
- **Aesthetic**: Technical drafting blueprint with crisp SVG projection lines, ISO standard dimension extension lines, arrows, leader notes, tolerance callouts, and custom title block.

---

## 4. Responsive Behavior

- **Mobile (< 768px)**: Viewport collapses into touch-friendly interactive rotate view, navigation moves to slide-over drawer, feature grid collapses to single-column stacked telemetry cards.
- **Tablet (768px - 1024px)**: 2-column layout for features and dual-pane workbench with sticky parameter inspector.
- **Desktop (> 1024px)**: Full split-screen live CAD workbench simulation with interactive real-time parametric feedback.
