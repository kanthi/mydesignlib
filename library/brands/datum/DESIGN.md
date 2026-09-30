# Datum Hardscapes — Brand Identity System & Specimen Specification

> **Deliverable**: `library/brands/datum/index.html` + `library/brands/datum/preview.jpg`
> **Archetype**: Precision Architectural Masonry & Hardscape Identity Specimen

---

## 1. Brand Identity & Narrative

- **Brand Name**: **Datum Hardscapes** (Shortmark: **DATUM**)
- **Category**: Architectural Hardscaping, Masonry & Structural Outdoor Living
- **Core Philosophy**: In surveying, civil engineering, and landscape architecture, a **datum** is the immutable horizontal reference elevation from which every retaining wall, terraced patio, flagstone walk, and grade transition is measured and leveled.
- **Brand Attributes**: Monolithic, structural, mathematically true, tactile, permanent, uncompromisingly precise.

---

## 2. Color Palette & Materiality

| Token | Hex / Value | Material Equivalent | Application |
|-------|-------------|---------------------|-------------|
| `--color-basalt` | `#13171a` | Dark volcanic basalt paver | Primary dark background, stationery core, hoodie base |
| `--color-chartreuse` | `#d8ff00` | High-vis laser level / builder's line | High-visibility accent card, seal badges, focus accents |
| `--color-slate` | `#8faab7` | Pennsylvania bluestone / honed slate | Wordmark typography, structural line work |
| `--color-concrete` | `#5e666d` | Cast reinforced concrete | Secondary neutral, stone block backgrounds |
| `--color-mortar` | `#dce7ec` | Fine silica mortar wash | Light canvas backing, specimen container |
| `--color-pure-white` | `#ffffff` | Calcite marble aggregate | Crisp text contrast, reverse glyphs |

---

## 3. Logo Architecture & Iconography

1. **The Monolithic Wordmark (`DATUM`)**:
   - 5 equal-proportioned rectangular glyph blocks (`D - A - T - U - M`) sharing identical vertical proportions (72px × 120px) with tight 4px joint gaps mimicking mortar lines between dressed stone ashlar blocks.
   - Solid stone presence where negative spaces act as carved relief channels.

2. **The Benchmark Mark (`Stepped Elevation Matrix`)**:
   - Constructed on a 128×128 unit modular surveyor grid with 100% mathematical fidelity.
   - **Outer Foundation Tier**: `M0 0H35V93H128V128H0Z` (35-unit continuous flange spanning base and vertical plumb axis).
   - **Middle Stepped Terrace**: `M46 0H81V47H128V82H46Z` (35-unit continuous flange starting flush at top line $y=0$ and extending flush to right edge $x=128$).
   - **Keystone Cornerstone**: `rect x="92" y="0" width="36" height="36"` (Solid anchor block in upper-right quadrant flush with top and right edges).
   - **Relief Channels**: Constant 11-unit architectural joint relief separating all tiers ($35 + 11 + 35 + 11 + 36 = 128$).

3. **Colorway Triad**:
   - Slate on Basalt (Architectural & enduring)
   - Basalt on Concrete (Heavy industrial)
   - Chartreuse on Slate (High-visibility precision)

---

## 4. Physical Applications Specimen

1. **Concrete-Paver Stationery Suite**:
   - **Front Card (Basalt Matte)**: Slate blue monolithic wordmark, hairline divider, founder details, high-vis neon chartreuse circular seal with nested benchmark icon, and domain URL.
   - **Back Card (Chartreuse Accent)**: Giant oversized hairline outline of the `DATUM` block wordmark spanning the card, flanked by vertical slate edge typography.
   - **Physical Staging**: Resting across heavy rough-cast concrete masonry steps with realistic cast drop shadows and surface aggregate.

2. **Apparel / Site Crew Gear**:
   - Heavyweight 480gsm fleece hoodie in washed black basalt, featuring the slate blue monolithic `DATUM` wordmark screenprinted across the chest, and a neon chartreuse silicon sleeve badge.

3. **Material Swatch Palette**:
   - Tactical specimens of real hardscape materials: Honed Bluestone, Thermal Granite, Basalt, Crushed Dolomite Base, and Silica Joint Sand.

4. **Interactive Features**:
   - Real-time 3D card tilt & hover mechanics.
   - Interactive Colorway Matrix Switcher.
   - Blueprint Construction Grid Overlay.
   - 1-Click SVG Asset and Design Token exporter.
