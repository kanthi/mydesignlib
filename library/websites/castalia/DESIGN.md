# DESIGN — Castalia (Monumental Sculpture Foundry & Fine Art Digital Archive)

## Overview
- **Brand**: Castalia (`curator@castalia.example`, monumental bronze sculpture foundry, classical restoration collective & digital spatial archive)
- **Reference**: GetLayers "Laocoon" Three.js experience featuring an interactive rotating 3D classical sculpture, material switching (Bronze, Marble, Fluid, Digital), floating ambient light dust particles, warm amber cosmic lighting ribbons, and museum exhibition photography.
- **Value Proposition**: Preserving, digitizing, and casting timeless monumental sculptures with master metallurgical craft and high-fidelity real-time 3D spatial curation.
- **Target Audience**: Fine art collectors, museum curators, architectural patrons, and luxury gallerists.
- **Primary Action**: `Contact ⭘` (opens curatorial inquiry sheet).

## Color System
- `bg-base`: `#0c0907` (Deep Espresso Bronze Shadow)
- `bg-surface`: `#16120e` (Charred Umber Stone)
- `border-hairline`: `rgba(212, 163, 89, 0.12)` (Golden Filigree Grid)
- `text-primary`: `#f5eedd` (Polished Bone Ivory)
- `text-secondary`: `#a89b88` (Warm Roman Dust)
- `accent-bronze`: `#d4a359` (Cast Antique Bronze Gold)
- `accent-amber-glow`: `rgba(212, 163, 89, 0.25)`
- `accent-marble`: `#fcfbf7` (Carrara Vein)

## Typography & Hierarchy
- **Editorial Display**: `Cormorant Garamond` / `Instrument Serif` (Italic & Roman, 400/500/600), delivering timeless museum elegance and classical gravity.
- **Micro-labels & Meta**: `JetBrains Mono` / `Plus Jakarta Sans` uppercase (`letter-spacing: 0.2em`) for material tabs, museum room indicators, and coordinates.

## 3D WebGL System
- **Engine**: Three.js WebGL with custom PBR shader materials.
- **Lighting**: Three-point studio lighting with high-contrast golden key light, cool soft fill, and sharp warm rim light.
- **Atmosphere**: 500 volumetric dust particles drifting through the amber spotlight field.
- **Material Modes**:
  - `BRONZE`: High-metalness burnished antique gold-bronze with specular sheen.
  - `MARBLE`: Warm ivory stone with soft roughness.
  - `FLUID`: High-gloss liquid obsidian chrome with mirror reflection.
  - `DIGITAL`: Golden wireframe holographic lattice.
