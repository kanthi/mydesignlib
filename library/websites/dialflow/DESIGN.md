# Dialflow — Design System & Technical Specification

Design system specification for **Dialflow**, a modern no-code AI voice agent and telephony workflow automation platform. Designed for marketing teams, sales development, customer support operations, and modern tech organizations needing low-latency, human-like voice agents connected to their software stack.

---

## 1. Product & Aesthetic Intent

- **Core Identity**: High-fidelity conversational AI telephony builder with visual node-based workflow orchestration and sub-300ms real-time voice latency.
- **Visual Emotion**: Ethereal yet grounded, crisp, ultra-clean modern SaaS. Soft luminous ambient mint and lavender backdrops paired with deep forest green authority accents, pristine elevated card surfaces, and precise vector micro-craft.
- **Anti-Slop Directives**: No generic amorphous floating blobs without purpose. Every UI card, waveform, node connector, audio level bar, and metric badge reflects functional telephony and workflow orchestration logic.

---

## 2. Color Palette & Semantic Tokens

```css
:root {
  /* Surface Depths */
  --bg-page: #f8faf9;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #ffffff;
  --bg-surface-subtle: #f1f5f3;
  --bg-surface-dark: #071e16;
  --bg-glass: rgba(255, 255, 255, 0.85);
  --bg-glass-dark: rgba(7, 30, 22, 0.9);

  /* Brand Primary & Accents */
  --emerald-primary: #00d26a;
  --emerald-hover: #00ba5e;
  --emerald-dark: #064e3b;
  --emerald-forest: #083b2d;
  --emerald-surface: #e8f9f0;
  --emerald-glow: rgba(0, 210, 106, 0.22);
  --mint-light: #d1fae5;
  --mint-badge: #a7f3d0;

  /* Ambient Glow Gradients */
  --glow-mint: radial-gradient(circle at 15% 15%, rgba(0, 210, 106, 0.14) 0%, rgba(209, 250, 229, 0.04) 50%, transparent 75%);
  --glow-lavender: radial-gradient(circle at 85% 20%, rgba(216, 180, 254, 0.18) 0%, rgba(243, 232, 255, 0.05) 50%, transparent 75%);
  --glow-subtle-mesh: radial-gradient(at 50% 0%, rgba(0, 210, 106, 0.08) 0%, transparent 60%);

  /* Border & Dividers */
  --border-subtle: rgba(15, 23, 42, 0.07);
  --border-standard: rgba(15, 23, 42, 0.11);
  --border-card: rgba(0, 210, 106, 0.12);
  --border-accent: rgba(0, 210, 106, 0.35);
  --border-dark: rgba(255, 255, 255, 0.12);

  /* Typography & Ink */
  --text-heading: #0f172a;
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --text-faint: #94a3b8;
  --text-on-dark: #ffffff;
  --text-on-dark-muted: #a7f3d0;
  --text-emerald: #059669;

  /* Semantic Status Colors */
  --status-active: #10b981;
  --status-pending: #f59e0b;
  --status-alert: #ef4444;
  --status-info: #3b82f6;

  /* Typography Scales */
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "SF Mono", "Fira Code", monospace;

  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.84375rem; /* 13.5px */
  --text-base: 0.9375rem;/* 15px */
  --text-md: 1.0625rem;  /* 17px */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.5rem;     /* 24px */
  --text-2xl: 1.875rem;  /* 30px */
  --text-3xl: clamp(2.125rem, 3.5vw, 2.75rem); /* 34px - 44px */
  --text-hero: clamp(2.625rem, 5vw, 4.25rem);   /* 42px - 68px */

  /* Spacing Scale */
  --space-3xs: 0.1875rem;
  --space-2xs: 0.375rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6.5rem;

  /* Border Radii */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-2xl: 32px;
  --radius-full: 9999px;

  /* Elevation & Shadows */
  --shadow-subtle: 0 2px 8px rgba(15, 23, 42, 0.04);
  --shadow-card: 0 10px 25px -5px rgba(15, 23, 42, 0.05), 0 4px 10px -2px rgba(15, 23, 42, 0.02);
  --shadow-elevated: 0 20px 40px -10px rgba(15, 23, 42, 0.09), 0 8px 16px -4px rgba(15, 23, 42, 0.03);
  --shadow-glow: 0 12px 30px -5px rgba(0, 210, 106, 0.28);
  --shadow-dark: 0 25px 50px -12px rgba(0, 0, 0, 0.35);

  /* Layout Container */
  --container-max: 1240px;
  --gutter: clamp(1rem, 4vw, 2.5rem);
}
```

---

## 3. Component Hierarchy & Anatomy

### 3.1 Badges & Pill Tags
- **Hero Pill Badge**: Height 32px, `border: 1px solid rgba(0, 210, 106, 0.25)`, `background: rgba(255, 255, 255, 0.8)`, backdrop filter blur 8px. Houses an animated pulsing mint status indicator dot and bold label.
- **Feature Filter Pills**: Rounded full, `border: 1px solid var(--border-standard)`, subtle shadow on hover, emerald tint when active.

### 3.2 Buttons
- **Primary Hero Button (`.btn-primary`)**: Deep forest green `#064E3B` / `#083B2D`, text `#ffffff`, border `1px solid rgba(255,255,255,0.15)`, shadow `var(--shadow-card)`, hover lift `translateY(-2px)` and subtle emerald glow.
- **Secondary Action Button (`.btn-secondary`)**: White surface `#ffffff`, text `#0F172A`, border `1px solid var(--border-standard)`, hover background `#F8FAF9`.
- **Accent Action Button (`.btn-accent`)**: Emerald `#00D26A`, text `#064E3B`, font weight 600, hover background `#00BA5E`.
- **Interactive Micro-Buttons**: Height 28px - 36px, rounded radius-md, crisp iconography with clear active/disabled states.

### 3.3 Interactive Workflow Node Studio Canvas
- Full visual orchestration sandbox with draggable/pan-ready viewport, grid pattern background, and active SVG bezier curve connectors.
- Nodes:
  1. Trigger Node (Published Form Input / CRM Webhook)
  2. Condition / Branching Node (Lead Score / Sentiment Filter)
  3. Action Node (Make Phone Call via AI Agent)
  4. Integration Node (HubSpot CRM sync / Calendar booking)
- Dynamic right-side node configuration drawer updating in real-time when selecting any canvas node.
- Live "Run Test Simulation" button triggering glowing signal pulses flowing through the connection wires.

### 3.4 Interactive Live Voice Call Simulator
- Realistic softphone widget displaying incoming/outgoing live call states.
- Real-time animated audio visualizer waveform canvas simulating voice frequencies.
- Real-time conversational dialogue transcript streaming with speaker labels and latency counter (`sub-260ms`).
- Direct switchable voice persona tabs ("Sarah - Lead Qualifier", "David - Tech Support", "Elena - Appointment Booker").

### 3.5 Bento Grid & Analytics Visuals
- High-craft cards with crisp typography hierarchy, subtle border accents, and dynamic UI elements:
  - Mini automation flow card with live step progress.
  - Integration hub card with active toggle switches and live sync pings.
  - Agent sandbox profile card with direct test call trigger.
  - Analytics card with smooth SVG spline chart and metric breakdown.
  - Lead management card with multi-state progress indicators.

---

## 4. Responsiveness & Adaptive Layouts

- **Compact (<640px)**: Single column stacked layout. Workflow canvas switches to an interactive horizontal scroll preview with step tabs. Softphone simulator docks cleanly.
- **Medium (640px - 1024px)**: 2-column bento grid, 2x2 feature matrix, condensed studio canvas.
- **Expanded (>1024px)**: Full multi-column layout, sticky floating widgets, side-by-side builder view and full visual studio.

---

## 5. Motion, Audio & Micro-Craft

- **CSS Transitions**: Standard `all 0.22s cubic-bezier(0.16, 1, 0.3, 1)` for button hovers and card elevations.
- **Audio Waveform Canvas**: Real-time sinusoidal audio frequency rendering using HTML5 Canvas API with variable amplitude response when speaking.
- **Reduced Motion**: Gracefully falls back to static indicators when `prefers-reduced-motion: reduce` is active.

---

## 6. Anti-Slop Ban List

- ❌ No generic gradient blobs covering unreadable text.
- ❌ No dummy lorem ipsum copy.
- ❌ No scraped brand assets or trademarked logos.
- ❌ No broken external scripts or slow uncontained CDN dependencies.
