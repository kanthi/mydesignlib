# Klyph — Brand Identity & Design System Specification

**Klyph** (`klyph`) is a brutalist creative technology studio and algorithmic type foundry specializing in generative identity systems, computational brand architecture, and modular typography. 

> *“Crafting symbols of connection at the intersection of design, code, and material culture.”*

---

## 1. Brand Core & Rationale

- **Concept**: Modular connection and infinite mathematical continuity.
- **The S-Glyph**: Built on rotational $C_2$ symmetry (180° invariance), the Klyph mark serves two simultaneous roles:
  1. A standalone typographic monogram (the letter "S" or stepped ligature).
  2. A tileable geometric tessellation unit capable of interlocking seamlessly in 2D space to produce textiles, security guilloché, architectural cladding, and reactive generative patterns.
- **Tone**: Brutalist, high-contrast, technical, tactile, editorial.
- **Target Touchpoints**: Hardbound monograph box sets, fluted walnut stationery displays, architectural wayfinding, and heavyweight industrial streetwear.

---

## 2. Chromatic System & Color Tokens

The Klyph palette anchors on pure Yves Klein International Cobalt (`#002BFF`), balanced against deep Obsidian Void (`#0C0C0E`) and stark editorial white.

| Token Name | Hex Code | Role | Contrast on White | Contrast on Black |
| :--- | :--- | :--- | :--- | :--- |
| `color-primary-cobalt` | `#002BFF` | Signature brand electric accent, screenprints, foil | 8.2:1 (dark text) / 2.6:1 (bg) | 8.1:1 (AAA large) |
| `color-surface-obsidian` | `#0C0C0E` | Foundational background, uncoated cardstock, dark mode | 18.9:1 (AAA) | 1:1 |
| `color-surface-card` | `#16161A` | Secondary surface, elevated containers, trays | 16.2:1 (AAA) | 1.15:1 |
| `color-text-high` | `#FFFFFF` | Stark typography, illuminated emblems, letterhead base | 1:1 | 21:1 (AAA) |
| `color-text-muted` | `#94A3B8` | Subtitles, technical metadata, grid labels | 3.1:1 | 6.8:1 (AA) |
| `color-reeded-glass` | `#E2E8F0` | Architectural accents, translucent stationery sheets | 1.2:1 | 17.5:1 (AAA) |
| `color-timber-walnut` | `#2D231E` | Fluted wood plinths, desk accessories, packaging accents | 13.8:1 (AAA) | 1.5:1 |

---

## 3. Typographic System

- **Primary Headings & Wordmark**: `Plus Jakarta Sans` / `Inter` (geometric neo-grotesk with crisp ink traps and tight tracking `-0.035em`). Lowercase lockup `klyph` communicates mathematical precision and contemporary brutalism.
- **Body & Editorial**: `Inter` (400 / 500, line-height 1.6, tracking `-0.01em`).
- **Technical & Coordinates**: `JetBrains Mono` / monospace (tabular figures, uppercase, tracking `+0.05em`) for blueprint callouts, ISO specifications, and modular ratios.

---

## 4. Geometric Construction & Grid Blueprint

The mark is plotted inside a standard $100 \times 100$ coordinate system:

1. **Center of Invariance**: $(50, 50)$.
2. **Rotational Symmetry**: Upper half transforms into lower half via $(x, y) \mapsto (100 - x, 100 - y)$.
3. **Upper Segment Anatomy**:
   - Central stem vertical right edge at $x = 54$, left edge at $x = 36$ (Stem width = $18$).
   - Top horizontal boundary at $y = 18$.
   - Outer quadrant arc: Center at $(58, 44)$, outer radius $R = 26$, terminating at $x = 84, y = 44$.
   - Horizontal tab extension: Protrudes horizontally from $x = 84$ to $x = 96$, height $16$ ($y = 44$ to $y = 60$).
   - Inner quadrant cut: Center at $(54, 40)$, inner radius $r = 14$, returning to the central vertical stem.
4. **Interlocking Tessellation Vector**:
   - Horizontal pitch: $\Delta X = 78$ units.
   - Vertical pitch: $\Delta Y = 64$ units.
   - When arrayed with these offsets, adjacent horizontal tabs dock flush into opposing notches, and vertical quadrant arches cradle adjacent units to form continuous, gapless kinetic waves.

---

## 5. Physical & Digital Touchpoints

1. **Fluted Walnut Card Tray**:
   - Heavyweight 600gsm cotton black cardstock with blind deboss and Klein cobalt foil stamping.
   - Complementary 600gsm stark white correspondence card with crisp black typography.
2. **Monograph Clamshell Box**:
   - Two-piece rigid board case wrapped in matte black buckram with electric blue interior drop-in tray.
   - Hardbound archival project monograph with silver/cobalt hot foil on black bookcloth.
3. **Reeded Glass Stationery Clipboard**:
   - 6mm fluted architectural glass backer with anodized cobalt blue spring clip.
   - Grid-aligned technical typographic letterhead on 120gsm translucent vellum.
4. **Streetwear Oversized Boxy Tee**:
   - 300gsm heavyweight combed cotton in washed pitch black.
   - Back print: Bold vertical `klyph` wordmark adjacent to a 4-column × 5-row interlocking tessellation graphic in high-density cobalt screenprint ink.

---

## 6. Logo Stress Test Verification

- **16px Favicon**: Quadrant curves and central vertical stem retain identifiable silhouette; no stroke smearing.
- **32px App / Menu**: Clear negative space separation between upper and lower hooked lobes.
- **Monochrome Inversion**: 100% silhouette integrity on pure black, pure white, and pure cobalt backgrounds.
- **Rotational Stability**: Functions at 0° (modular grid), 45° (stationery angle / dynamic isometric), and 90° (vertical S configuration).
