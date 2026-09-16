# Somna — Design System & Architecture Specification

**Brand:** Somna (`somna`)  
**Type:** Website Template  
**Category:** Wellness / Product  
**Status:** Production-grade deliverable  
**Reference Origin:** Rebranded Nordic pediatric sleep technology online store & marketing platform. Characterized by serene Scandinavian minimalism, warm linen and ash wood tones, high-contrast editorial serif typography, nocturnal deep slate contrast sections, interactive e-commerce product configuration, and clinical biosignal telemetry mockups.

---

## 1. Brand Essence & Strategic Voice

- **Core Vision:** Pediatric nocturnal biosignal intelligence without cameras, wearables, or bedtime disruption.
- **Tagline:** *"Better sleep for growing minds."*
- **Tone of Voice:** Authoritative, clinical yet deeply empathetic, calming, Scandinavian restrained elegance.
- **Audience:** Health-conscious parents, pediatricians, and families seeking objective insights into children's rest, mood, and cognitive vitality.

---

## 2. Color Palette & Semantic Tokens

| Token | Hex / HSL | Semantic Role | Application |
|---|---|---|---|
| `--color-canvas` | `#FBFBFA` | Primary Substrate | Main page background, soft linen feel |
| `--color-card` | `#FFFFFF` | Elevated Surface | Clean cards, product showcase container |
| `--color-subtle` | `#F3F2EE` | Secondary Substrate | Feature panels, table rows, neutral chips |
| `--color-ink-primary` | `#171B1E` | High Contrast Text | Main headlines, dark buttons, primary labels |
| `--color-ink-secondary` | `#5A6672` | Editorial Body | Paragraph text, secondary descriptions |
| `--color-ink-muted` | `#8C97A4` | Meta & Tabular | Footers, captions, minor specs |
| `--color-sage` | `#2D6A4F` | Pediatric Wellness Accent | Status indicators, active health scores |
| `--color-sage-light` | `#E8F5EE` | Soft Badge Fill | Founder's series badge, success tags |
| `--color-amber` | `#D97706` | Ambient Glow | Nocturnal telemetry indicators, warm accents |
| `--color-night-canvas` | `#111518` | Nocturnal Substrate | Dark nighttime inspection section |
| `--color-night-card` | `#1A2024` | Night Surface | Dark cards, nocturnal telemetry displays |
| `--color-border` | `#E8E7E2` | Hairline Dividers | Clean borders, input outlines, table rules |

---

## 3. Typography Hierarchy

- **Editorial Display Serif:** `Newsreader` / `Fraunces` / `Instrument Serif` (Google Fonts), Roman & Italic, weights 400, 600.
  - Used for large hero headlines, emotional section hooks, and pull quotes.
  - Characteristics: Elegant optical sizing, warm literary Scandinavian editorial feel, tight tracking (`-0.025em`).
- **Operational Interface Sans:** `Plus Jakarta Sans` / `Inter`, weights 400, 500, 600, 700.
  - Used for body copy, micro-labels, pricing, navigation, specs, and button actions.
- **Telemetry Monospace:** `Space Mono` / `JetBrains Mono`.
  - Used for numerical biosignal metrics, sleep duration timestamps, and hardware specifications.

---

## 4. Key Interactive Components

1. **Sticky Navigation Bar:**
   - Wordmark with glowing biosignal indicator dot.
   - Smooth anchor navigation links.
   - Live Currency Switcher (EUR, USD, GBP) updating pricing globally.
   - Primary CTA with badge counter and direct drawer trigger.
2. **Dynamic Product Viewer & Purchase Block:**
   - 4-thumbnail gallery with active zoom and image switching.
   - Dynamic price conversion (`€299` / `$329` / `£269`).
   - Feature check matrix with custom SVG icons.
   - Interactive accordion disclosure for hardware specs, box contents, shipping, and privacy.
3. **Interactive Cart Slide-over Drawer:**
   - Full slide-in modal with item breakdown, free lifetime app access badge, order total, and checkout simulation.
4. **App Telemetry UI Mockup:**
   - Pure CSS/HTML interactive mobile interface showing sleep score rings, overnight wake-up timeline, and pediatric clinical insights.
5. **Nocturnal Deep-Dive Section:**
   - High-contrast night mode aesthetic highlighting ballistocardiography under-mattress sensing.
6. **Scientific Rigor & Advisory Section:**
   - Multi-disciplinary pediatric and biosignal advisory profiles.

---

## 5. Compliance, Privacy & Analytics

- `robots.txt`: Disallow: /
- `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />`
- Google Analytics gtag: `G-Z97ZD3EVSF`
- Local assets only; zero external proprietary dependencies.
