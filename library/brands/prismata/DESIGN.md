# DESIGN — Prismata

## 1. Brand Essence & Positioning
- **Entity**: Prismata (`prismata`)
- **Category**: Studio / Creative Agency & Physical Stationery System
- **Origin Reference**: Stationery and physical identity cards reference with chromatic halftone rosette and fuchsia-amber mesh gradients
- **Positioning**: *A distinctive creative studio operating at the intersection of radiant digital experiences and tactile physical craft.*
- **Aesthetic Philosophy**: High-vibrancy chromatic dispersion meets disciplined editorial minimalism. The front face captures warmth, energy, and radiant light; the back face commands authority with matte obsidian density and iridescent halftone optical effects.

---

## 2. Geometric Anatomy: The 8-Petal Rosette Mark
- **Rotational Symmetry**: Strict 4-fold ($C_4$, $90^\circ$ interval) symmetry centered on Cartesian coordinate $(100, 100)$.
- **Pinched Core Squircle**:
  - Central concave astroid squircle core with parabolic inset curves:
    `M -22 -22 Q 0 -17 22 -22 Q 17 0 22 22 Q 0 17 -22 22 Q -17 0 -22 -22 Z`
- **Splayed Petal Pairs**:
  - Two pointed oval petals branch outward from each of the 4 square facets (8 petals total).
  - Outward splay angle directs the petal tips toward the diagonal corners, forming an evenly balanced octagonal envelope.
  - Optical stroke width: $8\text{px}$ on a $200\text{px}$ canvas, creating uniform visual weight across line and negative space.

---

## 3. Chromatic Halftone Dot-Matrix Screen
- **Halftone Frequency**: $4.2\text{px}$ Cartesian dot grid sampling distance.
- **Variable Dot Diameter**: Scaled dynamically ($1.4\text{px}$ to $2.5\text{px}$) to simulate variable mechanical ink deposit.
- **Color Dispersion Spectrum**:
  - Continuous angular gradient cycling through:
    - Fuchsia Pink (`#E83375`)
    - Royal Violet / Indigo (`#4865F4`)
    - Electric Cyan (`#24C6DB`)
    - Solar Amber (`#FFA827`)
- **Substrate Interaction**: Printed via high-build spot gloss UV directly over matte black board, creating a tactile holographic shift under direct light.

---

## 4. Spectrophotometric Color Tokens

| Token Name | Hex Code | RGB | Role & Application |
| :--- | :--- | :--- | :--- |
| **Fuchsia Magenta** | `#D93282` | `rgb(217, 50, 130)` | Core brand accent, front card mesh gradient anchor |
| **Solar Amber** | `#E96924` | `rgb(233, 105, 36)` | Secondary warm glow, logo accent, chromatic focal point |
| **Coral Glow** | `#F28D77` | `rgb(242, 141, 119)` | Soft highlight, ambient transition tint |
| **Matte Obsidian** | `#1D1D1F` | `rgb(29, 29, 31)` | Card reverse substrate, deep contrast anchor |
| **Plinth Grey** | `#ECECEF` | `rgb(236, 236, 239)` | Studio staging background, presentation canvas |
| **Crisp White** | `#FFFFFF` | `rgb(255, 255, 255)` | Master wordmark, typography on dark and gradient grounds |

---

## 5. Physical Print Specifications
- **Stock**: 450gsm Ultra-Heavyweight Cotton Duplex Board.
- **Dimensions**: $85\text{mm} \times 55\text{mm}$ European Standard with $3.5\text{mm}$ precision die-cut corner radiuses.
- **Front Face Treatment**: 4-color process + 1 fluorescent spot ink under a soft-touch velvet matte barrier lamination.
- **Back Face Treatment**: Pure black unbleached dyed pulp with chromatic 4-pass registered spot UV screen.
- **Edge Finish**: Burnished matte charcoal gilded edging.

---

## 6. Typographic System
- **Display Wordmark**: `Plus Jakarta Sans`, 700 Bold, tracking `-0.025em`.
- **Secondary Tagline**: `Plus Jakarta Sans`, 700 Bold, uppercase tracking `+0.18em`.
- **Contact & Micro-Data**: `Inter`, 500 Medium / 400 Regular.
- **Technical Specs**: `JetBrains Mono`, 500 Medium.

---

## 7. The 3-Step Logo Stress Test Suite
- **Blur Test**: Passed at $14\text{px}$ Gaussian blur; 4-lobe outer silhouette and pinched core remain distinct.
- **Monochrome Test**: Passed; 100% flat black-on-white and white-on-black rendering without tone reliance.
- **16px Favicon Test**: Passed; vector mark resolves clearly at $16\text{px} \times 16\text{px}$ without line muddiness.
