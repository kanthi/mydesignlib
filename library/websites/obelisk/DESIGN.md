# Obelisk — Design System & Architectural Specification

**Brand:** Obelisk (`obelisk`)  
**Type:** Website Template  
**Category:** Studio / Architecture & Spatial Design  
**Status:** Complete deliverable  
**Reference Origin:** Rebranded minimalist spatial and architectural kinetic portfolio (`MONUMENT` by Sebastien Design). Characterized by an expansive Cartesian crosshair grid, monumental serif typography, monospace surveillance annotations, and a signature expanding aperture slit transition that blossoms into a full-bleed architectural photographic immersion.

---

## 1. Brand Concept & Aesthetic Positioning

- **Proposition:** *Spatial architecture, monumental structures, and kinetic editorial curation.*
- **Visual Tension:** Extreme austerity (Cartesian crosshairs, microscopic monospace notes, pale linen canvas) contrasted with sudden cinematic scale (monumental editorial serif titles, full-bleed black-and-white photography, and elastic aperture reveal motion).
- **Core Mechanism:** **The Kinetic Grid Aperture** — A central grid module that unzips from a horizontal line into a full-screen photographic exhibition and interactive specimen card.

---

## 2. Color System & Semantic Tokens

| Token | Hex / Value | Semantic Role | Usage |
|---|---|---|---|
| `--color-bg` | `#ECECE7` | Master Canvas | Pale architectural linen/concrete background |
| `--color-bg-subtle` | `#E4E4DF` | Secondary Surface | Inset panels, transmission terminal box |
| `--color-grid` | `rgba(0, 0, 0, 0.08)` | Cartesian Grid Rules | Hairline coordinate divisions |
| `--color-grid-dark` | `rgba(0, 0, 0, 0.15)` | Section Hairlines | Delimiting structural borders |
| `--color-crosshair` | `rgba(0, 0, 0, 0.35)` | Intersection Markers | `+` crosshairs at each cell vertex |
| `--color-ink` | `#111315` | Monumental Typography | Master wordmark `OBELISK`, headlines, buttons |
| `--color-ink-muted` | `#55575A` | Surveillance Notes | Monospace coordinates, specs, and descriptions |
| `--color-white` | `#FFFFFF` | Floating Specimen Surface | Specimen card, shop edition surfaces |

---

## 3. Typographic Hierarchy

- **Monumental Serif:** `Newsreader`, Roman 400 & 500, tight optical tracking (`-0.035em`). Used for the towering `OBELISK` masthead, section titles (`SPATIAL COMMISSIONS`, `THE DISCIPLINE OF PERMANENCE`), and specimen titles (`SUNRISE DAWN`, `MONOLITH I`).
- **Surveillance Monospace:** `Space Mono`, 400 and 700 weight, uppercase with spaced tracking (`0.06em` to `0.12em`). Used for navigation links (`SERVICES`, `SHOP`, `ABOUT US`, `CONTACT US`), coordinate counters (`[01]`, `[04]`), Cartesian ticks, and cryptic architectural surveillance notes.

---

## 4. Multi-Section Information Architecture

The website deliverable features a continuous Cartesian framework across four major architectural zones:

### 1. Hero Viewport & Kinetic Aperture
- Cartesian crosshair grid canvas across 100vh with mathematical `+` intersection glyphs.
- Monumental serif `OBELISK` wordmark with asymmetric editorial surveillance notes.
- Central kinetic slit mechanism that expands into the full-bleed immersion stage upon interaction or `BREAK FREE`.

### 2. Selected Spatial Commissions Archive (`#services`)
- Featured Commission: *SUNRISE DAWN* (Roman Travertine Colonnade Pavilion, 3,800 m²).
- Specimen 01: *MONOLITH I* (Alpine Reflector Basin, Vals).
- Specimen 03: *PRISM GEOMETRY* (Skyway Glazing System, Tokyo).
- Specimen 04: *CATHEDRAL LIGHT* (Steel Clerestory Chamber, Berlin).
- Specimen 05: *TITANIC ARCH* (Geometric Ascent Monument, Oslo).
- Each commission features interactive elevation data, acoustic decay rates, and direct `VIEW IN APERTURE` triggers.
- Four Core Disciplines: Monumental Infrastructure, Subterranean Chambers, Precision Facades, and Solar Alignment.

### 3. Limited Mineral Editions & Casts (`#shop`)
- Edition 01: *Travertine Horizon Block* (1:100 Scale study block, edition of 25, $480).
- Edition 02: *Monolith Shadow Lithograph* (70×100 cm silver-halide photogravure, edition of 50, $340).
- Edition 03: *Obelisk Monograph I—III* (540-page clothbound trilogy in aluminum slipcase, $190).
- Edition 04: *Kinetic Aperture Weight* (1.8 kg lost-wax patinated bronze paperweight, $260).
- Interactive sliding Acquisitions Registry (Cart drawer) with live subtotal calculation, quantity management, and simulated invoice generation.

### 4. Studio Manifesto & Materials Matrix (`#about`)
- Editorial manifesto stating the 500-year architectural horizon.
- Interactive Tactile Matrix tab switcher displaying physical specifications (Bulk Density, Compressive Strength, Porosity, Surface Epoch, Sound Reflection) across 5 mineral media:
  1. Roman Travertine
  2. Nordic Basalt
  3. Low-Iron Optical Glass
  4. Weathering Corten Steel
  5. Lost-Wax Cast Bronze
- Leadership profiles: Vespera Vance, Marcus Lindqvist, Elena Kael.

### 5. Spatial Transmission Terminal (`#contact`)
- Interactive Commission Specification console with multi-state typology selectors (`CIVIC MONUMENT`, `SACRED SANCTUARY`, `CULTURAL PAVILION`, etc.).
- Site coordinate input and dynamic terminal feedback simulation.
- Studio addresses in Rome and Zurich, plus one-click copy email button for `commissions@obelisk.studio`.

---

## 5. Persistent HUD & Motion Details

1. **Sticky HUD Bar:**
   - Smoothly slides down when user scrolls past 160px from zenith.
   - Includes real-time studio coordinates, section jumps, quick `APERTURE [01/04]` modal button, and dynamic acquisitions counter `BAG (N)`.
2. **Keyboard Navigation:**
   - `ESC`: Collapses active aperture or cart drawer.
   - `Space`: Unzips aperture when resting at zenith.
   - `←` / `→`: Iterates through architectural specimens 01–04.

---

## 6. Compliance, Privacy & Analytics

- `robots.txt`: `Disallow: /`
- `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
- Google Analytics gtag: `G-Z97ZD3EVSF`
- 100% vanilla static, relative paths, Caddy HTTP verified.
