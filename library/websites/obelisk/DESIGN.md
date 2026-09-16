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
| `--color-grid-canvas` | `#ECECE7` | Master Canvas | Pale architectural linen/concrete background |
| `--color-grid-line` | `rgba(0, 0, 0, 0.07)` | Cartesian Grid Rules | Hairline coordinate divisions |
| `--color-crosshair` | `rgba(0, 0, 0, 0.35)` | Intersection Markers | `+` crosshairs at each cell vertex |
| `--color-ink-primary` | `#111315` | Monumental Typography | Master wordmark `OBELISK`, headlines, slit borders |
| `--color-ink-muted` | `#63666A` | Surveillance Notes | Monospace coordinates and system memos |
| `--color-card-white` | `#FFFFFF` | Floating Specimen Surface | Central revealed card, `BREAK FREE` toggle |
| `--color-border-hairline`| `rgba(0, 0, 0, 0.12)` | Subtle Delimiters | Thumbnail frames, modal edges |

---

## 3. Typographic Hierarchy

- **Monumental Serif:** `Newsreader` / `Playfair Display` / `Instrument Serif`, Roman 400 & 500, tight optical tracking (`-0.035em`). Used for the towering `OBELISK` masthead and specimen titles (`SUNRISE DAWN`, `BASALT MONOLITH`).
- **Surveillance Monospace:** `Space Mono` / `Courier Prime`, 400 weight, uppercase with spaced tracking (`0.06em`). Used for navigation links (`SERVICES`, `SHOP`, `ABOUT US`, `CONTACT US`), coordinate counters (`[01]`, `[02]`), and cryptic architectural notes.

---

## 4. The Signature Aperture Motion & Transitions

1. **Rest State:**
   - Central grid module contains top corner indicators `[01]` and `[02]`.
   - Dark horizontal aperture line (height: 4px).
   - Crisp white button: `BREAK FREE`.
2. **Expansion Motion:**
   - Triggered on click or hover.
   - Central slit expands vertically with custom cubic-bezier easing (`cubic-bezier(0.16, 1, 0.3, 1)`).
   - Simultaneously spreads horizontally, wiping across the Cartesian grid until the entire viewport becomes the active architectural canvas.
   - Central white card rises with spring physics, revealing the 3-item thumbnail navigator and monumental title.
3. **Specimen Carousel Transition:**
   - Clicking thumbnail previews cross-fades the full-bleed background imagery and updates the title and index counter seamlessly.
4. **Collapse Motion:**
   - On close (`BREAK FREE` click, `ESC` key, or backdrop click), the aperture smoothly shrinks back into the single central grid cell with elastic precision.

---

## 5. Compliance, Privacy & Analytics

- `robots.txt`: Disallow: /
- `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
- Google Analytics gtag: `G-Z97ZD3EVSF`
- 100% vanilla static, relative paths, Caddy HTTP verified.
