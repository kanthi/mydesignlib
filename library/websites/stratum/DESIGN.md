# STRATUM — Design System & Craft Specification

Institutional tokenized capital markets infrastructure linking fund originators, distribution routing engines, and qualified institutional allocators.

## 1. Overview & Aesthetic Commitment

- **Aesthetic:** High-Precision Swiss-Architectural Fintech with Isometric Engineering Linework.
- **Emotion:** Absolute institutional reliability, cryptographic precision, modern sovereign liquidity.
- **Rules:**
  - Crisp ink linework (`1.5px`–`2px`) with deliberate architectural drafting cues (alignment pins, dashed rail axes, subtle isometric offsets).
  - High-contrast warm eggshell background (`#FAF9F5`), preventing stark clinical glare while maintaining editorial authority.
  - Single energetic accent: High-frequency Emerald Green (`#00C368`), paired with deep obsidian ink (`#0F1412`).
  - No purple gradients, no fuzzy generic blobs, no 3-card repetitive filler. Every metric, diagram, and code block reflects real institutional mechanics.

## 2. Color Palette & Semantic Roles

| Token | Hex | Role / Semantic Usage |
|---|---|---|
| `--color-bg` | `#FAF9F5` | Primary canvas, warm architectural paper |
| `--color-surface` | `#FFFFFF` | Elevated cards, dialogs, platform tiers |
| `--color-surface-subtle` | `#F2F0E8` | Secondary containers, inset badges, code blocks |
| `--color-ink-primary` | `#0F1412` | Headings, primary titles, high-emphasis text |
| `--color-ink-secondary` | `#4B534E` | Explanatory copy, subtitles, field labels |
| `--color-ink-muted` | `#7D8781` | Metadata, captions, deactivated indicators |
| `--color-border` | `#E3DFD3` | Card borders, dividers, subtle gridlines |
| `--color-border-strong` | `#111614` | Technical linework, isometric outlines, badge borders |
| `--color-emerald` | `#00C368` | Primary CTA, active protocol stage, success telemetry |
| `--color-emerald-deep` | `#009E52` | Button hover, dark accent contrast |
| `--color-emerald-tint` | `#E8F8F0` | Pill badge backgrounds, token highlights, active indicator fills |
| `--color-emerald-glow` | `rgba(0, 195, 104, 0.35)` | Glowing halo on the active token layer |

## 3. Typography Hierarchy

- **Display & Headings:** `Plus Jakarta Sans`, `-apple-system`, sans-serif. Letter-spacing `-0.035em` for display, `-0.02em` for section titles. Crisp geometric terminals.
- **Body & Data:** `Plus Jakarta Sans`, sans-serif. Balanced x-height, high readability at `15px`–`17px`, line-height `1.55`.
- **Technical & Cryptographic Identifiers:** `JetBrains Mono`, `SF Mono`, monospace. Used for contract addresses, latency benchmarks, JSON payload fields.

### Scale
- **Display 1 (Hero Title):** `clamp(2.75rem, 5vw, 4.25rem)` / Weight `800` / Line-height `1.08`
- **Section Heading:** `clamp(2rem, 3.5vw, 2.75rem)` / Weight `700` / Line-height `1.15`
- **Card Heading:** `1.25rem`–`1.5rem` / Weight `600` / Line-height `1.3`
- **Body Large:** `1.125rem` (18px) / Line-height `1.55` / Regular `400`
- **Body Regular:** `0.9375rem` (15px) / Line-height `1.5` / Regular `400`
- **Micro / Badge:** `0.75rem`–`0.8125rem` (12px–13px) / Weight `600` / Letter-spacing `0.04em` uppercase

## 4. Spacing, Elevation & Radii

- **Grid Base:** 8pt modular system (`8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
- **Container Max-Width:** `1280px` with fluid `24px`–`40px` gutter padding.
- **Radii:**
  - Buttons & Badges: `8px`–`10px` for structured feel, `9999px` for status pills.
  - Cards & Platform Containers: `16px`–`20px`.
  - Isometric Platforms: Corner chamfer / rounded squircle radius matching the reference technical rendering.
- **Shadows & Elevation:**
  - `shadow-sm`: `0 2px 4px rgba(15, 20, 18, 0.04)`
  - `shadow-md`: `0 8px 24px rgba(15, 20, 18, 0.06), 0 1px 2px rgba(15, 20, 18, 0.04)`
  - `shadow-emerald`: `0 8px 24px rgba(0, 195, 104, 0.28)`

## 5. Signature Feature: Interactive 3-Tier Isometric Architecture

The right side of the hero features an interactive technical isometric stack modeled directly on the design reference:
1. **Tier 1 (Top):** `MONEY MARKET & CREDIT FUNDS` — Ingestion, asset valuation, token minting.
2. **Tier 2 (Middle):** `STRATUM PROTOCOL ENGINE` — Compliance validation, smart custody, routing.
3. **Tier 3 (Bottom):** `QUALIFIED INVESTORS` — Settlement, wallet custody, automated yield distribution.

### Motion Choreography
- **Token Wafer:** Emerald rounded chip with white Stratum logo mark.
- **Sequence:** Descends from Tier 1 to Tier 2 to Tier 3 along corner guide-posts with dashed trajectory lines.
- **Tier State Reactivity:** As the token reaches each tier, the tier's indicator badge illuminates green, the platform surface pulses with a subtle emerald glow, and real-time telemetry metrics update synchronously.
- **Interactivity:** User can click any tier button to jump the token, or click pause/play, or scrub through the distribution stages.

## 6. Responsive Behavior
- **Desktop (≥ 1024px):** Split hero layout (52% left copy + stats, 48% right isometric visualization). Sticky navigation with CTA.
- **Tablet (768px–1023px):** Stacked hero with isometric diagram centered at full scale. Multi-column grids collapse to 2 columns.
- **Mobile (< 768px):** Isometric diagram scales proportionally via SVG viewBox. Navigation switches to high-contrast slide menu. Metric cards stack cleanly.
