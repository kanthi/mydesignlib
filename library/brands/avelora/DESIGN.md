# Avelora Studios — Brand Identity System & Specimen Specification

> **Deliverable**: `library/brands/avelora/index.html` + `library/brands/avelora/preview.jpg`  
> **Archetype**: Next-Gen Brand Identity, Editorial Design & Monolithic Visual Systems  
> **Rebrand Source**: Fully fictional rebrand derived from Chromatic Dither Brand Guideline System  

---

## 1. Brand Identity & Narrative

- **Brand Name**: **Avelora Studios** (Avelora™)
- **Folder / Identifier**: `library/brands/avelora/`
- **Category**: `Studio` / `Agency`
- **Core Philosophy**: *"Design That Builds Brands That Last."*  
  Avelora embodies the convergence of high-contrast editorial typography, architectural geometry, and chromatic silk-screened dither palettes. The atelier builds cohesive, uncompromising brand worlds that balance clinical digital precision with visceral kinetic warmth.
- **Brand Attributes**: Architectural, chromatic, editorial, razor-sharp, tactile, monolithic.

---

## 2. Color Palette & Materiality

| Token | Hex Value | Material Equivalent | Application Role |
| :--- | :--- | :--- | :--- |
| `--color-cobalt` | `#2B50EC` | Electric cobalt pigment, optical glass | Primary chromatic glow, digital focal accent, gradient anchor |
| `--color-orange` | `#FF5722` | Fiery sunset ink, neon acrylic | Warm kinetic highlight, hero dither transition |
| `--color-amber` | `#FEC735` | Luminous amber resin, cadmium yellow | Atmospheric warmth, chromatic fringe |
| `--color-magenta` | `#9C34F2` | Electric purple, deep magenta dye | Deep gradient midtone, tertiary accent |
| `--color-obsidian` | `#161618` | Basalt, honed carbon slate, deep soot | Primary dark substrate, dark cards, dense typographic ink |
| `--color-alabaster` | `#FAF9F6` | Archival cotton paper, limestone | Editorial white cards, light mode substrate, contrast badges |
| `--color-border` | `rgba(255,255,255,0.12)` | Wireframe laser scribing | Blueprint bounding guides, structural dividers |

---

## 3. Typography Architecture

- **Display Headline**: **Instrument Serif** (Google Fonts)
  - Characterized by high-contrast vertical stems, sharp triangular serifs, and sweeping expressive italics.
  - Used for hero slide titles, poster statements, and primary brand titles.
- **Grotesque Sans-Serif**: **Plus Jakarta Sans** (Google Fonts)
  - Geometric clarity, open apertures, wide optical tracking on uppercase subheadings.
  - Used for interface labels, typographic scale hierarchy, metadata, and body copy.
- **Technical Monospace**: **JetBrains Mono** (Google Fonts)
  - Precise tabular glyphs for dimension annotations, color token values, and geometric coordinates.

---

## 4. Logo Architecture & Geometric Construction

### The 8-Pointed Octagram Lattice Mark
The Avelora emblem is an exact dihedral group ($D_4$) symmetrical construction engineered on a 300×300 unit coordinate grid:

1. **4 Cardinal Paired Petal Arms**:
   - 8 outer pointed tips arranged in 4 cardinal pairs pointing North ($0^\circ$), South ($180^\circ$), East ($90^\circ$), and West ($270^\circ$).
   - Outer tip radius $R_{\text{tip}} = 125.5\text{px}$ from origin.
   - Central V-notch between paired tips dipping inward with acute vertex angles.
2. **Central Cushion-Square Aperture**:
   - 4 concave circular curves meeting at 4 corner vertices ($R_{\text{corner}} \approx 46.5\text{px}$, $R_{\text{waist}} \approx 38.5\text{px}$).
   - Creates a weightless floating diamond aperture through which backdrops illuminate the mark.
3. **8 Internal Teardrop Voids**:
   - Exactly identical under 90° rotation and orthogonal reflection.
   - Symmetrically placed at $(\pm 43.2, \pm 79.6)$ and $(\pm 79.6, \pm 43.2)$, providing uniform stroke weight throughout all ribbons.
4. **Production SVG Deliverables**:
   - `assets/avelora-mark.svg`: Standalone vector mark (`fill-rule="evenodd"`, `fill="currentColor"`).
   - `assets/avelora-lockup.svg`: Horizontal mark + editorial wordmark on dark.
   - `assets/avelora-lockup-white.svg`: Clean inverted monochrome lockup.

---

## 5. The 6-Slide Specimen Architecture

The deliverable reproduces the complete 6-slide brand guideline system with interactive controls:

1. **Slide 01 — Cover Presentation Deck**:
   - Full-bleed chromatic dither background with grain texture.
   - Serif display title: *"Brand Guidelines"*, subtitle *"Avelora Studios — Vol. 01 / Monolithic Brand System"*.
2. **Slide 02 — Primary Logo Architecture**:
   - Interactive dimension bounding box with laser-dashed guides.
   - Structural callouts: *"Icon — 8-Pointed Octagram Lattice"* and *"Typeface — Instrument Serif"*.
   - 4 Colorway Swatch Tiles: Chromatic Dither, Obsidian Slate, Alabaster Pure, Electric Ultraviolet.
3. **Slide 03 — Icon System**:
   - Scaled emblem specimen with live clearance margins and coordinate grid.
   - 4 Application Badge Tiles displaying multi-substrate executions.
4. **Slide 04 — Typography Specimen**:
   - Chromatic dither filled glyph specimen (`Aa`).
   - Comprehensive uppercase, lowercase, and numeric glyph tables.
   - Typographic scale hierarchy and responsive line-height ratios.
5. **Slide 05 — Brand Visuals Divider**:
   - High-impact editorial full-bleed poster with ghosted watermark mark.
   - Manifesto: *"Form Meets Digital Precision — Building Living Systems Across Physical and Screen Realities"*.
6. **Slide 06 — Layout & Poster Styles (2×2 Specimen Grid)**:
   - **Card A (Alabaster Editorial)**: *"Design That Builds Brands That Last"* with structured typography.
   - **Card B (Chromatic Dither)**: Full dither card with prominent ghosted emblem.
   - **Card C (Sunset Quote)**: Warm amber gradient card: *"Providing everything needed to launch confidently"*.
   - **Card D (Obsidian Manifesto)**: Matte carbon typography card with studio metadata.
