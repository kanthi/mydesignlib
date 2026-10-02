# Rowan Interactive — Brand Identity System & Mindful Palette No. 109 Specimen

> **Deliverable**: `library/brands/rowan/index.html` + `library/brands/rowan/preview.jpg`  
> **Archetype**: Creative Engineering & Interactive Digital Experience Studio  
> **Rebrand Source**: Fully fictional rebrand derived from Mindful Palettes No. 109 & sample studio identity explorations  

---

## 1. Brand Identity & Narrative

- **Brand Name**: **Rowan Interactive** (ROWAN / Ri™)
- **Folder / Identifier**: `library/brands/rowan/`
- **Category**: `Studio` / `Product` / `Services`
- **Core Philosophy**: *"Organic warmth meets mathematical digital precision."*  
  Rowan Interactive is a creative digital engineering studio building immersive digital experiences, high-performance web applications, and tactile brand systems. Named after the enduring rowan tree—symbolizing protection, resilience, and seasonal transformation—the identity balances grounded earthy pigmentation with rigorous mathematical geometry.
- **Brand Attributes**: Tactile, architectural, accessible, disciplined, organic yet computational.

---

## 2. Mindful Palette No. 109 — Color System & Tokens

The color system is calibrated for WCAG AAA accessibility, natural pigmentation warmth, and optical harmony across light and dark substrates:

| Token Name | Hex Value | RGB | Light Contrast (Angel Feather) | Dark Contrast (Scarab) | Role & Material Application |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `--color-angel-feather` | `#F4EFEE` | `244, 239, 238` | Base Substrate (1.00:1) | **11.47:1 (AAA)** | Primary light substrate, uncoated cotton cardstock |
| `--color-glad-yellow` | `#F5E1AC` | `245, 225, 172` | 1.13:1 | **10.15:1 (AAA)** | Luminous highlight, dark-mode typographic accents |
| `--color-bud` | `#A5A88F` | `165, 168, 143` | 2.14:1 | **5.36:1 (AA)** | Mid-tier botanical sage, secondary badges, dividers |
| `--color-orange-vermillion` | `#BC5339` | `188, 83, 57` | **3.89:1 (Large Text/UI)** | **2.95:1 (Graphic Mark)** | Primary kinetic accent, silkscreen mark hero color |
| `--color-scarab` | `#2C3D37` | `44, 61, 55` | **11.47:1 (AAA)** | Base Substrate (1.00:1) | Primary dark substrate, heavy typography, canvas goods |
| `--color-picholine` | `#566955` | `86, 105, 85` | **4.82:1 (AA)** | 2.38:1 | Forest olive tint, secondary UI surfaces |

### The Conical Gradient Spectrum
A signature metallic-sheen conical sweep radiating from Glad Yellow (`#F5E1AC`) through Picholine (`#566955`) into deep Scarab (`#2C3D37`) with Vermillion warmth:
```css
background: conic-gradient(
  from 0deg at 50% 50%,
  #F5E1AC 0deg,
  #566955 120deg,
  #2C3D37 240deg,
  #F5E1AC 360deg
);
```

---

## 3. Mathematical Geometry & Ri Monogram Blueprint

The Rowan monogram seamlessly weaves the capital letter **'R'** and lowercase **'i'** into a continuous ribbon mark engineered on a strict **5×5 modular grid** ($x \in [0, 5], y \in [0, 5]$):

```
Grid Unit: 1.0x (e.g. 20px in 100×100 coordinate space)
Overall Bounding Box: 5.0x × 5.0x (Perfect Square)
```

### Geometric Construction Breakdown
1. **Left Stem ('R' Pillar)**:
   - Width $1.0x$, running the full vertical height from $y = 0.0x$ to $y = 5.0x$.
2. **Upper Arch ('R' Counter)**:
   - Inner circular arc with radius $R_{\text{inner}} = 1.5x$, centered at $(1.0x, 2.5x)$, curving clockwise from $(1.0x, 1.0x)$ down to the center seam $(2.5x, 2.5x)$.
   - Outer circular arc with radius $R_{\text{outer}} = 2.5x$, centered at $(1.0x, 2.5x)$, curving clockwise from the top stem $(1.0x, 0.0x)$ down to $(3.5x, 2.5x)$.
3. **Horizontal Center Symmetry Seam**:
   - Lies precisely along $y = 2.5x$ (the geometric meridian of the 5×5 box).
4. **Lower Ribbon ('R' Leg & 'i' Base)**:
   - Inner circular arc with radius $R_{\text{inner}} = 1.5x$, centered at $(4.0x, 2.5x)$, curving clockwise from $(2.5x, 2.5x)$ down to $(4.0x, 4.0x)$.
   - Outer circular arc with radius $R_{\text{outer}} = 2.5x$, centered at $(4.0x, 2.5x)$, curving clockwise from $(1.5x, 2.5x)$ down to $(4.0x, 5.0x)$.
5. **Right Stem ('i' Column)**:
   - Width $1.0x$, spanning from $x = 4.0x$ to $5.0x$ and $y = 2.5x$ to $5.0x$.
6. **Floating Tittle ('i' Dot)**:
   - Modular square of $1.0x \times 1.0x$ located at $x \in [4.0x, 5.0x]$ and $y \in [0.0x, 1.0x]$.
   - Separated from the right column by an intentional $1.0x$ negative space air gap ($y \in [1.0x, 2.5x]$).

---

## 4. Typography & Lockup Rules

### Primary Typeface: Plus Jakarta Sans
- **Weights**: Bold (700) for primary wordmark, SemiBold (600) for subheaders, Regular (400) for system copy.
- **Letter Spacing**: `-0.03em` for optical cohesion and modern density.

### Lockup Alignment & Clearspace
- **Wordmark Height**: Exactly $0.5 \times \text{Mark Height}$ (aligns with the bottom half of the mark, $y \in [2.5x, 5.0x]$).
- **Baseline Alignment**: The baseline of "Interactive" sits flush with the baseline of the mark.
- **Inter-element Gap**: $0.22 \times \text{Mark Height}$ (approx. $1.1x$ grid units).
- **Safe Zone / Clearspace**: $1.0x$ minimum breathing room on all 4 quadrants.

---

## 5. Physical Brand Applications

1. **Studio Apparel**:
   - 280 GSM heavyweight combed cotton crewneck in deep Scarab (`#2C3D37`).
   - Chest silkscreen in high-density Orange Vermillion (`#BC5339`).
   - Woven hem label in Angel Feather with graphite monogram.
2. **Duck Canvas Tote**:
   - 16oz heavyweight organic cotton canvas tote in Scarab (`#2C3D37`).
   - Oversized silkscreen print of the Ri monogram.
   - Reinforced dual-strap cross-box stitching.
3. **Tactile Stationery & Ephemera**:
   - 600 GSM double-thick cotton business cards in Angel Feather (`#F4EFEE`).
   - Blind debossed Ri mark with edge gilding in Orange Vermillion.
