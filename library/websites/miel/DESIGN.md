# Miel Bakery Atelier — Design Specification

**Type:** Website Template  
**Category:** Restaurant / Artisanal Food  
**Status:** Complete deliverable  
**Reference Origin:** Rebranded artisanal neighborhood bakery concept with organic warm tones, bold condensed display headers, whimsical hand-drawn doodles, and rich tactile paper/tape elements.

---

## 1. Brand Essence & Narrative
Miel is an artisanal neighborhood bakery and morning pastry atelier founded on the principles of 48-hour cold fermentation, heritage single-origin grains, and small-batch craftsmanship. The digital presence blends tactile warmth (flour textures, hand-taped cards, baker's ink stamps) with bold contemporary editorial typography.

---

## 2. Color Palette & Token Hierarchy

| Token | Hex / Value | Semantic Role |
|---|---|---|
| `--color-cream-base` | `#FBF6EE` | Primary warm bakery background |
| `--color-cream-card` | `#FFFDF9` | Elevated card surfaces, paper notes |
| `--color-crust` | `#C85A32` | Terracotta / baked crust accent & pill badges |
| `--color-crust-light`| `#F7EAE3` | Soft blush crust tint |
| `--color-butter` | `#F9D267` | Pastry butter / yolk warm yellow highlight |
| `--color-espresso` | `#261B14` | Primary high-contrast text |
| `--color-flour-mute`| `#7D716A` | Secondary description copy |
| `--color-scallop` | `#F3E8D7` | Organic wavy backdrop blob |

---

## 3. Typography Hierarchy

- **Display Headline:** `Bebas Neue` / `Oswald`, uppercase, bold condensed proportions (`letter-spacing: 0.5px`, line-height `1.02`).
- **Body & Structural:** `Plus Jakarta Sans`, weights 400, 500, 600, 700.
- **Editorial Notes / Script:** `Caveat`, cursive handwritten feeling for baker's sticky notes and side margin notes.

---

## 4. Key Interactive Components

1. **Floating Organic Scallop Hero**:
   - Asymmetric scallop-shaped SVG/CSS organic container.
   - Playful bread and croissant floating SVG doodles with mouse parallax & subtle idle wobble.
   - Rotated accent badge `about miel atelier` with warm butter background.
2. **Founder's Paper Note**:
   - Masking-tape corner anchors with shadow.
   - Subtle paper grain texture and warm ink stamp imprint.
   - Asymmetric 2-column split with portrait of master baker behind counter.
3. **Curated Daily Oven Highlights**:
   - 3-card signature showcase ("01 Made Fresh Daily", "02 Heritage Grains", "03 Shared With Care").
   - Micro-hover card lift and image expansion.
4. **Hero Loaf Showcase**:
   - Full-bleed rich braided challah / seeded sourdough visual anchor with linen cloth staging.
5. **Stats Counter Strip**:
   - Animated counter triggers on scroll (`12+ Years`, `40+ Daily Batches`, `30K+ Happy Neighbours`).
6. **Interactive Daily Board / Basket Drawer**:
   - Interactive filtering between Sourdough, Pastries, Morning Buns, and Coffee.
   - Real-time cart counter badge in header.
