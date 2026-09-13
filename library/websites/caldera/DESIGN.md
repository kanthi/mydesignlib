# CALDERA — Design System & Craft Specification

Modern enterprise tech execution and deployment engine combining deep obsidian surfaces with incandescent ember gradients and architectural precision typography.

## 1. Overview & Aesthetic Commitment

- **Aesthetic:** Dark-Mode High-Velocity Tech Architecture with Radiant Ember Thermals.
- **Emotion:** High-conviction engineering authority, molten momentum, surgical execution.
- **Rules:**
  - Obsidian foundations (`#080A0C` and `#0E1114`) preventing harsh pitch-black flat voids while enabling intense contrast for light and color.
  - Radiant Ember Thermal Gradient: A continuous, luminous transition from fiery cadmium red-orange (`#FF531D`) and warm ember coral (`#F05A28`) upward into rich molten dark tones (`#1B120E`), grounding key surfaces like the hero container and photo frames.
  - Subtle frosted glass and hairline border treatments (`1px` with `rgba(255, 255, 255, 0.08)` to `rgba(255, 83, 29, 0.25)`).
  - Floating pill navigation embedded within the hero canvas for unified spatial depth.
  - No purple/violet AI templates. No generic 3-box equal filler. Real workflow steps and concrete execution metrics.

## 2. Color Palette & Semantic Roles

| Token | Hex / Value | Role / Semantic Usage |
|---|---|---|
| `--color-bg-base` | `#080A0C` | Root page canvas, deepest obsidian void |
| `--color-surface-hero` | `#0D1013` | Hero card surface, hosting radiant ember glow |
| `--color-surface-card` | `#121519` | Elevated feature cards, blog containers |
| `--color-surface-subtle` | `#1A1E24` | Inset controls, button hover fills, pill badges |
| `--color-ember-glow` | `#FF531D` | Primary accent, incandescent gradient source, active step dot |
| `--color-ember-coral` | `#F05A28` | Button background, highlight tags, icon fills |
| `--color-ember-deep` | `#962800` | Gradient midpoint, border focus glow |
| `--color-ink-primary` | `#FFFFFF` | Primary headlines, bright high-contrast text |
| `--color-ink-secondary` | `#9BA3AF` | Body copy, section descriptions, inactive pill text |
| `--color-ink-muted` | `#606977` | Metadata, timeline connectors, subtle partner logos |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card outlines and dividers |
| `--color-border-glow` | `rgba(255, 83, 29, 0.35)` | Glowing rim on active showcase frames |

## 3. Typography Hierarchy

- **Display Face:** `Plus Jakarta Sans`, sans-serif. Tight tracking (`-0.035em`), bold geometric weights (`700`, `800`).
- **Body Face:** `Plus Jakarta Sans`, sans-serif. Balanced readability at `15px`–`17px`, line-height `1.55`.
- **Micro & Tags:** `Plus Jakarta Sans`, uppercase with letter-spacing `0.06em`, font-weight `600`, color `--color-ember-coral`.
- **Technical & Metric Identifiers:** `JetBrains Mono`, monospace for latency, throughput, and system status strings.

### Scale
- **Display 1 (Hero Title):** `clamp(2.75rem, 5.2vw, 4.3rem)` / Weight `800` / Line-height `1.08`
- **Section Heading:** `clamp(2rem, 3.5vw, 2.85rem)` / Weight `700` / Line-height `1.15`
- **Card Heading:** `1.25rem`–`1.45rem` / Weight `600` / Line-height `1.3`
- **Body Text:** `1rem` (16px) / Line-height `1.6` / Regular `400`
- **Badge / Eyebrow:** `0.75rem`–`0.8125rem` (12px–13px) / Weight `600` / Coral tint

## 4. Key Visual Devices & Spatial Structure

1. **Massive Hero Container with Radiant Ember Gradient:**
   - Radii: `32px` on desktop, `20px` on mobile.
   - Background: Deep obsidian gradient layered with an intense radiant bottom glow:
     `radial-gradient(120% 80% at 50% 100%, rgba(240, 90, 40, 0.45) 0%, rgba(150, 40, 0, 0.15) 50%, rgba(13, 16, 19, 0) 100%)`.
2. **Floating Pill Navigation:**
   - Inset within the hero container with frosted glass (`backdrop-filter: blur(16px)`).
   - Centered pill links with subtle hover glow.
3. **Showcase Cards with Glowing Ember Rims:**
   - Rounded squircle frames (`border-radius: 24px`) with a dual-layer border glow mimicking volcanic incandescent backlighting.
4. **Interactive Timeline / Step Process:**
   - Numbered circular badges (`01`, `02`, `03`) connected by a vertical track that dynamically illuminates as the active stage changes.

## 5. Responsive Behavior
- **Desktop (≥ 1024px):** Padded hero canvas with 32px margin, side-by-side process showcase with editorial image card, 3-column insights grid.
- **Tablet (768px–1023px):** Fluid hero padding, 2-column grids for features and blog cards.
- **Mobile (< 768px):** Navigation transitions to accessible mobile drawer, process stepper stacks vertically under the image card, hero container spans full bleed with 16px lateral padding.
