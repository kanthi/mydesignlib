# DESIGN — PopZero (Unleash the Crisp Taste of Zero Sugar)

## Overview
- **Brand**: PopZero (`hello@popzero.internal`, zero-sugar sparkling soda & botanical beverage flagship)
- **Reference**: GetLayers "Soda" WebGL hero template featuring a floating 3D soda can that follows the cursor while berries scatter away from touch and the whole world dynamically shifts color when picking a flavor.
- **Value Proposition**: Premium zero-sugar refreshment with 100% natural fruit essences, zero artificial aftertaste, in infinitely recyclable aluminum.
- **Target Audience**: Modern lifestyle consumers, health-conscious soda enthusiasts, and design lovers.

## Color System (Dynamic Flavor Palettes)
- **Flavor 01: Zero Lime**
  - Background: `#0b120c` (Matte Lime Carbon)
  - Theme: `#22c55e` (Crisp Lime Green)
  - Glow: `rgba(34, 197, 94, 0.28)`
- **Flavor 02: Diet Classic**
  - Background: `#160b0b` (Deep Ruby Obsidian)
  - Theme: `#ef4444` (Vintage Crimson Red)
  - Glow: `rgba(239, 68, 68, 0.28)`
- **Flavor 03: Pure Berry**
  - Background: `#100b1a` (Dark Violet Void)
  - Theme: `#a855f7` (Electric Blackberry)
  - Glow: `rgba(168, 85, 247, 0.28)`

## 3D WebGL Engine & Repulsion Physics
- Three.js WebGL centered beverage can with procedural wrap texturing, brushed aluminum rims, and pull-tab geometry.
- Centered floating can tracks cursor tilt with damped inertia.
- Surrounding orbiting berries and carbonation bubbles scatter away from the cursor via radial distance repulsion vectors, smoothing back to orbital paths.
- Selecting flavors from the pill deck seamlessly morphs the can wrap, scene point lights, and ambient radial background.

## UI Layout (Exact Match to Reference)
1. **Header**: `@ PopZero` brand circle, navigation links (`Ingredients`, `Taste`, `Eco`, `Reviews`), and `Contact Us`.
2. **Hero Left**:
   - Headline: `Unleash the crisp taste of zero sugar.`
   - Subhead: `Refreshment redefined in every bubble — all in one sleek design.`
   - CTA: `Shop Now →`
3. **Hero Right**:
   - Stacked flavor selector pills with real-time price indicators (`Zero Lime / $2.99`, `Diet Classic / $2.99`, `Pure Berry / $2.99`).
4. **Footer**:
   - `★ DESIGN AWARDS / PREMIUM BEVERAGE 2025` badge.
