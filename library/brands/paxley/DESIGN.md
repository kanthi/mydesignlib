# Paxley — Brand Identity System & Specification

Comprehensive brand identity specification for **Paxley**, a creative design studio and companion lifestyle brand founded on empathy, craft, and warmth. Represented by a minimalist continuous-line canine silhouette mark.

---

## 1. Brand Core & Aesthetic Philosophy

- **Name**: Paxley (Mark: Continuous-Line Canine Silhouette)
- **Category**: Creative Studio / Companion Lifestyle Brand
- **Tagline**: *Crafted with Heart & Instinct*
- **Visual Personality**: Warm, approachable, architectural, restrained luxury, tactile, grounded.
- **Palette Essence**: Deep eucalyptus / spruce forest green (`#2b3f36`) juxtaposed with warm unbleached linen sand (`#f4efe6`), soft terracotta earth (`#c86d51`), and crisp architectural white (`#ffffff`).

---

## 2. Color System & Semantic Tokens

```css
:root {
  /* Brand Primary Colors */
  --paxley-eucalyptus: #2b3f36;      /* Primary Deep Green Ground */
  --paxley-eucalyptus-dark: #1e2c25; /* Shadow / Nocturnal Tone */
  --paxley-eucalyptus-light: #3a5347;/* Hover / Active Green */
  --paxley-linen: #f4efe6;           /* Warm Sand Canvas */
  --paxley-linen-soft: #faf6f0;      /* Crisp Card Tint */
  --paxley-linen-dark: #e6dfd3;      /* Border / Neutral Shade */
  --paxley-terracotta: #c86d51;      /* Warm Earth Accent */
  --paxley-white: #ffffff;           /* Crisp White Contrast */
  --paxley-ink: #18221c;             /* High-contrast Typography */

  /* Semantic UI Tokens */
  --bg-page: var(--paxley-linen);
  --bg-card: var(--paxley-white);
  --bg-dark: var(--paxley-eucalyptus);
  --border-subtle: rgba(24, 34, 28, 0.08);
  --border-medium: rgba(24, 34, 28, 0.14);
  --border-dark-subtle: rgba(255, 255, 255, 0.12);

  /* Typography */
  --font-sans: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-pill: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(30, 44, 37, 0.04);
  --shadow-md: 0 12px 30px -4px rgba(30, 44, 37, 0.08);
  --shadow-lg: 0 24px 48px -8px rgba(30, 44, 37, 0.14);
  --shadow-cube: 0 20px 40px -10px rgba(0, 0, 0, 0.35);
}
```

---

## 3. Logo Mark Construction & Geometry

- **The Continuous-Line Canine Mark**: Crafted with unified 6px stroke-width curves. Formed by a continuous organic loop tracing the floppy ear, snout contour, and eye detail.
- **Clearspace**: Minimum isolation boundary equal to $1.2\times$ the mark's height.
- **Minimum Reproduction**: 18px digital display (app icon/favicon), 10mm print.
- **Permitted Variants**:
  1. `Primary Horizontal`: Continuous-line mark + Title/Lowercase wordmark `paxley`
  2. `Dark Monochrome`: Pure white mark & wordmark on Eucalyptus `#2B3F36`
  3. `Light Monochrome`: Eucalyptus mark & wordmark on Linen `#F4EFE6`
  4. `App Icon Tiles`: Rounded squircles in both Eucalyptus and Linen pairings

---

## 4. The 8 Specimen Touchpoints

1. **Hero Brand Lockup**: Large horizontal emblem & lowercase logotype on deep eucalyptus ground.
2. **Architectural Cube Wayfinding**: 3D interactive isometric cube with green emblem face and directional arrow `→`.
3. **Dual Squircle App Badges**: High-contrast dark and light iOS / Android app icons.
4. **Botanical Packaging Podium**: Top-down flat-lay luxury gift box on slate podium with organic foliage.
5. **Apparel Screenprint**: Deep green heavy-gauge organic cotton t-shirt with clean white chest print.
6. **Browser Address Bar UI**: Minimalist studio web specimen (`www.paxley.agency`).
7. **Duplex Tactile Business Cards**: Dual-sided heavy 600gsm cards with debossed mark and QR code.
8. **Mobile Application Interface**: Dark mode splash screen on handheld flagship device.

---

## 5. Anti-Slop & Craft Standards

- Pure SVG vector rendering with mathematically precise bezier curves.
- Fully interactive CSS 3D transforms on the cubic signage and card specimens.
- Responsive layout adapting from desktop grid to single-column mobile view.
- Real-time token inspector and SVG asset downloader.
