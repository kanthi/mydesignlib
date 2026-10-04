# Alveor — Design System Specification

## Brand Overview
**Alveor** is an AI-powered organizational memory system and second brain platform designed to turn thoughts, notes, and scattered documents into connected knowledge and decisive execution.

## Visual Tone & Principles
- **Modern Minimalist SaaS:** Pristine white canvas (`#FFFFFF` / `#FAFAFA`) accented by warm textured coral/terracotta gradients (`#F9AE84` to `#EE7A47`).
- **High-Clarity Typography:** Clean sans-serif hierarchy (`Plus Jakarta Sans` / `Inter`) with distinctive two-tone headlines pairing bold dark charcoal (`#111827`) with soft muted slate (`#94A3B8`).
- **Product-as-Proof:** The hero features a full, authentic macOS-style productivity interface mockup showcasing rich-text document editing, live AI-assisted tags, directory navigation, and contextual comments.
- **Bento Knowledge Architecture:** Multi-scale feature cards illustrating context-aware records, node connections, cross-app tool syncing (Notion, Slack, Docs), and conversational semantic search.

---

## Design Tokens

### Color Palette
```css
:root {
  /* Canvas & Surfaces */
  --color-canvas: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-border: #E5E7EB;
  --color-border-subtle: #F3F4F6;

  /* Typography & Ink */
  --color-text-primary: #111827;
  --color-text-secondary: #4B5563;
  --color-text-muted: #94A3B8;

  /* Brand Accents */
  --color-coral: #F9AE84;
  --color-coral-deep: #EE7A47;
  --color-coral-glow: rgba(249, 174, 132, 0.25);
  --color-badge-popular: #E0F2FE;
  --color-badge-popular-text: #0284C7;

  /* Interactive & Controls */
  --color-btn-dark: #1E2024;
  --color-btn-dark-hover: #0F1114;

  /* Radii */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;
  --radius-pill: 9999px;

  /* Elevation */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03);
  --shadow-xl: 0 20px 35px -10px rgba(0, 0, 0, 0.08);
}
```

### Typography Scale
- **Display Headlines:** `Plus Jakarta Sans`, -apple-system, sans-serif
  - Hero H1: `clamp(40px, 5.2vw, 68px)`, `font-weight: 700`, `letter-spacing: -0.025em`, `line-height: 1.15`
  - Section H2: `clamp(32px, 3.8vw, 46px)`, `font-weight: 700`, `letter-spacing: -0.02em`, `line-height: 1.2`
  - Card Titles: `20px`–`24px`, `font-weight: 600`, `letter-spacing: -0.01em`
- **Body & Captions:**
  - Body Large: `17px`–`18px`, `line-height: 1.6`, `color: #4B5563`
  - Body Regular: `15px`, `line-height: 1.55`
  - Small / Metadata: `13px`–`14px`, `font-weight: 500`

---

## Component Architecture

1. **Global Header:**
   - Wordmark with geometric warm-coral 'A' icon.
   - Dropdown navigation links (`Product ▾`, `Features`, `Enterprise`, `Pricing`).
   - Action buttons: "Contact sales" and "Book demo" (black pill button).

2. **Hero Section:**
   - Pill badge: `● AI powered organizational memory system` with glowing amber pulse.
   - Two-tone display title: *"Second Brain for Everything / You Think, Build and Decide"*.
   - Dual action CTAs: *"Get started"* (dark pill) and *"Learn more"* (bordered pill).
   - Warm textured coral container housing the complete, high-fidelity Alveor SaaS desktop application interface.

3. **Social Proof & Dotted Dividers:**
   - "Trusted by leading teams worldwide" overline with 5 sponsor brand marks separated by subtle hairline vertical rules.
   - Matrix dot-grid dividers throughout the page separating major phases.

4. **Frictions Grid (4 Cards):**
   - Notes lose context
   - Ideas aren't connected
   - Information is scattered
   - Search takes too long

5. **Bento Feature Matrix:**
   - **Context aware records:** Interactive document editor with contextual sidebar preview.
   - **Connect ideas & information:** Knowledge graph tree node connecting launch strategy cards.
   - **One connected workspace:** Hub showing Notion, Slack, Google Docs integrated into Alveor.
   - **Conversational search:** Floating Ask Alveor bar with instant contextual results.
   - **AI-powered direction:** Real-time next-step recommendations drawer.

6. **Pricing Tiers (Monthly / Yearly Toggle):**
   - Free ($0), Pro ($42/mo), Enterprise ($120/mo) with full checklist breakdowns and interactive toggle.

7. **Interactive FAQs:**
   - Clean split accordion with smooth open/close toggles.

8. **Warm Coral CTA Banner & Giant Watermark:**
   - Deep coral gradient container with white typography and action button.
   - Giant translucent watermarked wordmark `Alveor` anchoring the footer layout.
