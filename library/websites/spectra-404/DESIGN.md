# Design System Specification: Spectra 404

## 1. Product Overview & Architecture
- **Origin Reference:** Chromatic glass refraction 3D interactive 404 page
- **Brand Identity:** **SPECTRA** (`spectra-404`)
- **Category:** `Product` (Type: `website`)
- **Positioning:** Spatial interactive error boundary & exploration gateway featuring hardware-accelerated 3D iridescent glass typography, inertial orbital drag physics, and dynamic floor caustics.
- **Tagline:** *"Lost in possibility? This direction doesn't exist yet."*

---

## 2. Chromatic System & Tokens
- **Midnight Cobalt Sky:** `#0C2162` (Deep atmospheric upper gradient)
- **Royal Azure Transition:** `#163CAE` (Middle atmospheric depth)
- **Incandescent Horizon Flame:** `#FF5A2A` (Lower horizon radiant energy)
- **Chromatic Magenta Caustic:** `#C81D63` (Refracted ground caustic dispersion)
- **Glass Specular White:** `#FFFFFF` (Edge fresnel highlights)
- **Pill CTA Cream:** `#FFF7EB` (Warm tactile button background)
- **Dark Ingot Text:** `#181824` (High contrast text on cream button)

---

## 3. 3D Scene & Shader Architecture
- **Rendering Engine:** WebGL via Three.js.
- **3D Glyph Composition:**
  1. **Left 4:** Slanted beveled triangular polyhedron with central aperture and refractive glass shader.
  2. **Middle 0:** Smooth torus ring with volumetric internal light gradient and radiant orange core.
  3. **Right 4:** Counter-slanted beveled triangular polyhedron completing the numerical triad.
  4. **Orbital Wireframe:** Thin elliptical trajectory ring encircling the central glyphs.
  5. **Ground Caustics:** 3 soft chromatic radial lighting discs with parallax displacement responding to drag physics.
- **Physics & Motion:**
  - Continuous subtle floating oscillation ($\sin(t \cdot 1.5)$).
  - Smooth 360-degree pointer drag with velocity accumulation and friction damping.
  - Interactive spectrum preset shift (Solar Flare, Deep Aurora, Hyper Violet).

---

## 4. Typography Hierarchy
- **Brand Wordmark:** `Inter` / `Plus Jakarta Sans`, 800 ExtraBold, letter-spacing `0.35em` uppercase.
- **Display Heading:** `Plus Jakarta Sans`, 700 Bold, fluid clamp `clamp(2.75rem, 6vw, 4.5rem)`.
- **Secondary Copy:** `Inter`, 400 Regular with balanced opacity.
- **Interaction Micro-Copy:** `Inter`, 500 Medium with hand cursor glyph.
