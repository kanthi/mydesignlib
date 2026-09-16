# Operon Design System

Design tokens, component states, isometric illustration rules, and visual architecture for **Operon** (`library/websites/operon/`), an autonomous AI agent workforce orchestration landing page.

---

## 1. System Intent & Emotion

Operon projects calm architectural mastery, deterministic precision, and effortless enterprise throughput.
- **Tone**: Clean, architectural, mathematical, serene, authoritative.
- **Visual Thesis**: Light paper plane with structural gridlines, soft periwinkle accents, and precision axonometric 3D diagrams showcasing complex multi-layered autonomous systems made intelligible.

---

## 2. Core Tokens

### Color Tokens

```css
:root {
  /* Surface & Field */
  --bg-canvas: #ffffff;
  --bg-surface: #f9fafb;
  --bg-subtle: #f3f4f6;
  --bg-card: #ffffff;
  --bg-card-hover: #fcfdfe;

  /* Line & Structure */
  --border-light: #f1f3f7;
  --border-default: #e5e7eb;
  --border-strong: #d1d5db;
  --border-active: #8ba2fe;

  /* Text & Ink */
  --ink-primary: #0f172a;
  --ink-secondary: #475569;
  --ink-muted: #64748b;
  --ink-faint: #94a3b8;

  /* Accent (Periwinkle Tech) */
  --accent-primary: #6b8afd;
  --accent-hover: #5879fc;
  --accent-active: #4869fa;
  --accent-soft: rgba(107, 138, 253, 0.10);
  --accent-subtle: rgba(107, 138, 253, 0.05);
  --accent-glow: rgba(107, 138, 253, 0.25);
  --accent-border: rgba(107, 138, 253, 0.35);

  /* Functional */
  --success: #10b981;
  --warning: #f59e0b;
  --star-gold: #fbc02d;

  /* Elevation Shadows */
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02);
  --shadow-md: 0 4px 14px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.03);
  --shadow-lg: 0 12px 36px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.03);
  --shadow-isometric: 0 20px 48px -10px rgba(107, 138, 253, 0.18), 0 8px 20px -6px rgba(15, 23, 42, 0.06);

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;

  /* Typography */
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "IBM Plex Mono", "SF Mono", Menlo, Consolas, monospace;
}
```

### Type Scale

| Role | Font | Size | Weight | Tracking | Line Height |
|---|---|---|---|---|---|
| Display H1 | Plus Jakarta Sans | `clamp(2.75rem, 5vw, 4.25rem)` | 600 / SemiBold | `-0.035em` | `1.08` |
| Section H2 | Plus Jakarta Sans | `clamp(2rem, 3.5vw, 2.85rem)` | 600 / SemiBold | `-0.025em` | `1.15` |
| Feature H3 | Plus Jakarta Sans | `1.25rem` (20px) | 600 / SemiBold | `-0.015em` | `1.3` |
| Stat Display | Plus Jakarta Sans | `clamp(2.25rem, 4vw, 3.25rem)` | 700 / Bold | `-0.03em` | `1.0` |
| Body Lead | Plus Jakarta Sans | `1.125rem` (18px) | 400 / Regular | `-0.01em` | `1.6` |
| Body Text | Plus Jakarta Sans | `0.9375rem` (15px) | 400 / Regular | `0` | `1.55` |
| Small / Label | Plus Jakarta Sans | `0.8125rem` (13px) | 500 / Medium | `+0.01em` | `1.4` |
| Badge / Monospace | IBM Plex Mono | `0.75rem` (12px) | 500 / Medium | `+0.03em` | `1.3` |

---

## 3. Spatial System & Section Spine

1. **Top Announcement & Quiet Navigation**: Fixed/sticky frosted glass navbar with symbol mark, primary category links, and soft pill action button.
2. **Hero Stage (Split 50/50)**:
   - Left: Execution badge, two-line punchy value thesis, enterprise subhead, dual pill CTAs, social avatar trust cluster + rating stars.
   - Right: Interactive 4-tier isometric architecture stack (`AI Agents`, `Workflow & Logic`, `Data & Integrations`, `Security & Compliance`) with axonometric projection lines and pulsing active states.
3. **Partner Grid Bar**: Architectural border-framed strip with subtle slate logos (`Vanguard`, `Kinetix`, `Aetheris`, `Caelum`, `Hyperion`).
4. **Proof & Metrics Quartet**:
   - `14.8M+` Automated Tasks (Isometric stacked workflow tabs)
   - `54K+` Hours Reclaimed (Isometric circular sundial clock)
   - `99.2%` Execution Rate (Isometric stepped architectural graph)
   - `24/7` Dynamic Availability (Isometric infinity orbital ring with sun/moon)
5. **Feature Bento ("Everything you need to move faster")**:
   - Smart Automation (Isometric conveyor packet chamber)
   - Always On (Isometric 3D 24/7 numerals platform)
   - Secure by Design (Isometric vault cube with isolation lock)
   - Seamless Integrations (Isometric 10-node radial network)
   - Scales With You (Isometric 3D coordinate world grid)
6. **How It Works (3-Step Pipeline)**:
   - 01 Connect (Isometric data cylinder & API bridges)
   - 02 Configure (Isometric floating tablet with rule toggles)
   - 03 Automate (Isometric energy emission chamber)
7. **Interactive Value Deck ("Why choose us?")**:
   - Floating isometric multi-layer card stack with expandable value pillars: Scale, Fast Setup, Deterministic Automation, Enterprise Ready.
8. **Interactive FAQ Accordion**:
   - Left: Multi-slice isometric 3D question mark glyph.
   - Right: Smooth expand/collapse drawers with clear operational answers.
9. **Resonator CTA Stage ("Ready to work Faster & smarter?")**:
   - Concentric elliptical periwinkle wave lines radiating outward like an acoustic field.
   - Centered action thesis and dual CTAs.
10. **Enterprise Footer & Perspective Wordmark**:
    - Newsletter capture with instant feedback.
    - Category directory navigation columns.
    - Massive 3D perspective shadow typography of `OPERON` spanning the bottom viewport with radiant periwinkle horizon light.

---

## 4. Components & Interaction States

### Buttons
- **Primary Pill**: Background `var(--accent-primary)`, color `#ffffff`, border none, shadow `0 4px 14px rgba(107, 138, 253, 0.35)`. Hover: `var(--accent-hover)`, transform `translateY(-1px)`.
- **Secondary Pill**: Background `#ffffff`, color `var(--ink-primary)`, border `1px solid var(--border-default)`. Hover: background `var(--bg-subtle)`, border-color `var(--border-strong)`.

### Isometric Diagram Rules
- All isometric elements use true axonometric projection angles (30° / 30° grid).
- Stroke: Slate dark `#1e293b` at 1.2px to 1.5px with rounded joins.
- Surfaces: White with soft periwinkle gradient fills (`linear-gradient(135deg, rgba(255,255,255,0.9), rgba(238,242,255,0.85))`).
- Shadows: Soft diffuse periwinkle cast shadows (`rgba(107, 138, 253, 0.15)`).

---

## 5. Concrete Bans & Anti-Slop Safeguards

- ❌ NO generic purple gradients or AI-slop neon meshes.
- ❌ NO dark mode inversion without purpose.
- ❌ NO non-functional decorative emojis.
- ❌ NO lorem ipsum copy anywhere.
- ❌ NO external CDN dependencies that fail offline or on private networks.
- ❌ NO unstyled states or jagged layout jumps.
- ❌ NO reference trademarks or designer personal handles.
