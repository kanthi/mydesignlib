# Solvane Atelier — Brand Identity System & Specimen Specification

> **Deliverable**: `library/brands/solvane/index.html` + `library/brands/solvane/preview.jpg`
> **Archetype**: Botanical Dermatological Skincare, Wellness & Architectural Beauty Atelier

---

## 1. Brand Identity & Narrative

- **Brand Name**: **Solvane** (Solvane Atelier / Solvane Botanicals)
- **Category**: Studio / Wellness / Luxury Product
- **Core Philosophy**: *Solvane* derives from *sol* (sun, radiance) and *vane* (orientation, directional poise). The brand embodies the harmony between clinical botanical skincare and clean architectural minimalism—where light, pure mineral water, and natural botanicals meet uncompromising aesthetic discipline.
- **Brand Attributes**: Luminous, architectural, serene, mathematically balanced, tactile, high-purity.

---

## 2. Color Palette & Materiality

| Token | Hex / Value | Material Equivalent | Application |
|-------|-------------|---------------------|-------------|
| `--color-steel-blue` | `#467489` | Glacial slate stone, pharmaceutical glass | Primary brand backdrop, stationery envelope, luxury packaging |
| `--color-champagne` | `#E1DAD1` | Alabaster stone, raw silk, limestone aggregate | Primary wordmark, card paper, light substrate, logo mark |
| `--color-warm-grey` | `#C7C3B8` | Honed travertine, dry mineral earth | Secondary structural panels, subtle borders, tactile stationery |
| `--color-charcoal` | `#333333` | Obsidian, basalt, deep ink | High-contrast typography, technical specifications, dark accents |
| `--color-silver` | `#D8E2E6` | Hot-stamped metallic foil | Embossed wordmarks, foil seals, reflective trims |

---

## 3. Logo Architecture & Iconography

### The Radial Scalloped Octagram & Central Astroid Star
The Solvane mark is an 8-fold radial mandala constructed on a 200×200 unit Cartesian grid with 100% mathematical symmetry:

1. **8 Radial Scalloped Petals**:
   - **Angular Alignment**: 8 petals centered at $22.5° + k \times 45°$ for $k \in \{0, 1, \dots, 7\}$.
   - **Parallel Gap Channels**: 4 continuous orthogonal and diagonal cutting bands of uniform width $2 \times 8.6\text{mm} = 17.2\text{mm}$ aligned with $0°, 90°, 45°, 135°$.
   - **Concentric Inner Void**: Circular boundary of radius $R_{\text{in}} = 42.0\text{mm}$.
   - **Scalloped Concave Outer Boundary**: Each petal's outer edge is a concave circular arc of radius $R_{\text{bite}} = 66.0\text{mm}$ originating from an external center at distance $D = 146.0\text{mm}$ along the petal's radial axis.

2. **Central 4-Pointed Astroid Star (Brilliance Spark)**:
   - Cardinal tips at radius $R_{\text{star}} = 28.5\text{mm}$ along the $x$ and $y$ axes.
   - 4 concave sweeping circular arcs of radius $R_{\text{arc}} = 32.5\text{mm}$ meeting at sharp cardinal cusps, floating weightlessly within the $42\text{mm}$ central circular aperture.

3. **SVG Vector Specification**:
   - `viewBox="0 0 200 200"`
   - Pure vector paths without raster dependencies.

---

## 4. Physical Applications Specimen Suite

1. **Stationery & Packaging Flatlay**:
   - Deep Steel Blue envelope (`#467489`) with silver foil hot-stamped `SOLVANE` wordmark.
   - High-grade textured linen A4 letterhead with embossed header seal.
   - Luxury cosmetic packaging box staged on a circular concrete pedestal with fresh botanical citrus leaves and natural quartz.

2. **Apparel / Crew Workwear**:
   - Heavyweight 360gsm organic cotton crew t-shirt in washed steel blue, featuring a minimalist silver-white chest wordmark and an oversized semi-translucent torso wrap graphic.

3. **Architectural Signage**:
   - Minimalist exterior blade cube sign in matte chalk white with warm champagne star mark, mounted on natural vertical oak timber slats.

4. **Business Cards**:
   - Dual-card 3D perspective display:
     - Top Card: Steel Blue 600gsm cotton card with silver hot foil stamping.
     - Bottom Card: Champagne textured card with bespoke vector QR code and studio contact details.

5. **Design Token Bar & Blueprint Exporter**:
   - Architectural wireframe construction diagram with live dimension tags.
   - 1-click exporter for CSS design tokens and raw SVG vector marks.
