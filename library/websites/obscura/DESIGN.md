# Obscura — Editorial Photography & Cinematic Arts Portfolio

**Obscura** (`obscura`) is an ultra-editorial photography, cinema direction, and visual arts portfolio template. Crafted for fine art photographers, fashion directors, and architectural image-makers, Obscura presents photographic imagery with darkroom intimacy and gallery restraint.

> *“Light is an architectural material. Shadow is its physical container.”*

---

## 1. Visual Language & Chromatic Tokens

Obscura operates on an uncompromising monochromatic scale inspired by silver halide darkroom chemistry and Kodak Tri-X 400 black-and-white film stock.

| Token | Hex / Value | Role |
| :--- | :--- | :--- |
| `--color-void` | `#080809` | Deepest darkroom black base |
| `--color-surface` | `#111114` | Subtle container background |
| `--color-surface-hover` | `#19191E` | Hover states, elevated panels |
| `--color-border` | `rgba(255, 255, 255, 0.12)` | Geometric architectural hairline rules |
| `--color-border-subtle` | `rgba(255, 255, 255, 0.05)` | Secondary divisions, grid tracks |
| `--color-text` | `#F4F4F6` | Stark high-contrast typography |
| `--color-text-muted` | `#9B9BA8` | Explanatory captions, ISO metadata |
| `--color-text-dim` | `#585864` | Timecodes, frame numbers, index markers |
| `--color-accent-scarlet` | `#E11D48` | Rare editorial color pops (shutter indicators, archival seals) |

---

## 2. Typographic Hierarchy

- **Primary Display Titles**: High-contrast geometric neo-grotesk with expansive proportions and subtle ink traps (`Plus Jakarta Sans` / `Syne`, 800 weight, tracking `-0.04em`).
- **Body & Captions**: `Inter` (300 / 400 weight, line-height 1.6, tracking `-0.01em`).
- **Camera Telemetry & Archival Data**: `JetBrains Mono` (400, uppercase, tracking `+0.08em`) for focal lengths, shutter speeds, f-stops, ISO ratings, and UTC world timestamps.

---

## 3. Core Architecture & Sections

1. **Top Telemetry Header**:
   - Live ticking London / UTC world clock (`London / 07:44:56`).
   - Social coordinates (`IG / X / IN / YT`), exhibition status tag, and archival menu trigger.
2. **Hero Stage**:
   - Monolithic display title: `Obscura`.
   - **4-Panel Interactive Filmstrip**:
     - Panel 1: Bare winter branches (`branches.jpg`)
     - Panel 2: Brutalist concrete spiral staircase (`architecture.jpg`)
     - Panel 3: High-contrast chiaroscuro portrait (`portrait.jpg`)
     - Panel 4: Concentric water drop impact ripple (`water_splash.jpg`)
   - **Interactive Optical Iris / Loupe**:
     - Interactive circular magnifying portal that follows pointer movement or stays anchored, rendering 1.8x optical zoom into the negative with embedded coordinate HUD.
3. **Curated Exhibition Gallery**:
   - Editorial grid showcasing curated series with technical photographic metadata (lens focal length, aperture, shutter timing, film stock).
4. **Artist Statement & Darkroom Philosophy**:
   - Deep black layout with tactile paper texture and silver foil signature block.
5. **Permanent Collections & Exhibition Archive**:
   - Interactive historical table (Paris, Tokyo, New York, Zurich) with live image hover thumbnails.
6. **Archival Print Acquisition**:
   - Edition selector (A2, A1, 120×80cm Master Edition), Hahnemühle Baryta paper certifications, and acquisition inquiry modal.
7. **Darkroom Negative Footer**:
   - Edge-frame timecode numbering, studio contact channel, and copyright notice.
