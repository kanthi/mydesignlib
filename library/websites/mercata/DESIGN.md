# Mercata Design System & Architecture Specification

## Overview & Emotional Objective
Mercata is an autonomous AI commerce operations and multi-store intelligence platform engineered for modern B2B wholesale, manufacturing, and distribution brands.

The visual language communicates **high-velocity clarity, tactile intelligence, and operational mastery**:
- **Tone:** Pristine, authoritative, effortless, high-trust enterprise SaaS.
- **Palette:** Crisp gallery white surfaces paired with deep velvet obsidian contrast, illuminated by a signature high-energy fiery vermilion-orange (`#FF5024`) accent and soft warm amber glow.
- **Form:** Precision rounded corners (12px to 24px), layered frosted glass elevation (`backdrop-filter: blur(16px)`), delicate 1px hairline structural borders, and responsive 3D spatial depth.

---

## 1. Color System & Semantic Tokens

### Core Surfaces
- `--bg-canvas`: `#FFFFFF` (Primary page backdrop)
- `--bg-subtle`: `#F9FAFB` (Subtle off-white contrast sections)
- `--bg-card`: `rgba(255, 255, 255, 0.88)` (Frosted glass container fill)
- `--bg-dark`: `#0E0D0C` (Velvet obsidian for high-contrast Pain Point and Footer sections)
- `--bg-dark-card`: `rgba(28, 25, 23, 0.75)` (Dark interactive glass cards)

### Brand Accent
- `--brand-primary`: `#FF5024` (Fiery vermilion / electric coral)
- `--brand-hover`: `#E04015` (Deepened coral on hover/active)
- `--brand-light`: `rgba(255, 80, 36, 0.08)` (Subtle pill backgrounds and glow fills)
- `--brand-gradient`: `linear-gradient(135deg, #FF6B4A 0%, #FF5024 50%, #E03E15 100%)`
- `--glow-amber`: `radial-gradient(ellipse at center, rgba(255, 110, 40, 0.25) 0%, rgba(255, 80, 36, 0) 70%)`

### Semantic Feedback
- `--success`: `#10B981` (In-stock inventory, verified status)
- `--warning`: `#F59E0B` (Low inventory restock alert)
- `--danger`: `#EF4444` (Out of stock status)
- `--info`: `#3B82F6` (Active store indicators, system badges)

### Borders & Hairlines
- `--border-light`: `rgba(0, 0, 0, 0.07)`
- `--border-focus`: `rgba(255, 80, 36, 0.4)`
- `--border-dark`: `rgba(255, 255, 255, 0.1)`

---

## 2. Typography Hierarchy

Primary Typeface: `Plus Jakarta Sans` / `Inter`, system fallback sans-serif.
- **Display 1 (Hero Title):** 60px / Line-height 1.08 / Weight 700 / Letter-spacing -0.035em
- **Display 2 (Section Headings):** 40px / Line-height 1.15 / Weight 700 / Letter-spacing -0.025em
- **Section Eyebrow Badges:** 12px / Line-height 1 / Weight 600 / Text-transform uppercase / Letter-spacing 0.08em
- **Card Headings:** 20px / Line-height 1.3 / Weight 600 / Letter-spacing -0.015em
- **Body Large:** 17px / Line-height 1.55 / Weight 400 / Color `#4B5563`
- **Body Standard:** 14px / Line-height 1.5 / Weight 400 / Color `#6B7280`
- **Mono / Numeric Metrics:** Tabular numbers, font-feature-settings: "tnum"

---

## 3. Spatial System & Layout Rules

- **Container Max-Width:** 1240px (Hero & Content), 1360px (Accordion Grid)
- **Gutters:** 32px desktop, 20px mobile
- **Vertical Rhythm:** 120px section padding desktop, 72px mobile
- **Corner Radii:**
  - Pill buttons / badges: `9999px`
  - Cards & containers: `20px`
  - Inner tiles & inputs: `12px`
- **Shadow Scale:**
  - `shadow-sm`: `0 2px 8px rgba(0, 0, 0, 0.04)`
  - `shadow-md`: `0 12px 24px -6px rgba(0, 0, 0, 0.06)`
  - `shadow-lg`: `0 24px 48px -12px rgba(0, 0, 0, 0.08)`
  - `shadow-glow`: `0 16px 36px rgba(255, 80, 36, 0.28)`

---

## 4. Key Interactive Components

1. **Floating Pill Navigation:**
   - Translucent glass bar with dropdown menus (Features, Solutions, Resources, Pricing).
   - "See Demo" ghost pill + "Login" solid obsidian pill.
   - Responsive mobile sheet drawer.

2. **Hero Levitation Box:**
   - 3D perspective delivery container with floating glass store card.
   - Interactive store picker selection ("Elmwood", "Harborline Supply").
   - Restock alert badge + vermilion Mercata token with loopback trajectory.

3. **Pain-Point Multi-Tabbed Switcher:**
   - 3 interactive tabs: "Manual product descriptions", "Multi-store management", "SEO optimization".
   - Smooth synchronized transition between AI Agent chat, Multi-Store connector grid, and SEO scanner mockups.

4. **3-Stage Workflow Architecture:**
   - Connect Your Stores: Hub-and-spoke live pulse lines.
   - Sync & Organize Products: Real-time inventory table with status tags.
   - Sell & Track Performance: Smooth SVG Bézier retention chart with metric callouts.

5. **Key Features 4-Quadrant Bento:**
   - Interactive prompt generator, SEO marketplace auditor, multi-store registry, and live sales report.

6. **Horizontal Expanding Accordion Gallery:**
   - 5 full-height interactive panels ("Faster Listing", "Search Visibility", "Boosted Sales", "Fewer Inquiries", "Managed Seamlessly").
   - Hover and tap triggers accordion spring expansion, revealing full photography and dynamic metric callouts.
   - Interactive custom floating "You" pill cursor follower.

7. **Video Testimonial Modal:**
   - Interactive player modal triggered by Samantha R's testimonial thumbnail.

---

## 5. Compliance & Quality Checklist
- Fictional rebrand: Mercata (`https://mercata.co` / `@mercata.example`).
- Zero competitor trademarks in code or copy.
- Privacy & GA head snippet integration (`noindex` + `G-Z97ZD3EVSF`).
- Relative asset paths for GitHub Pages sub-path hosting.
- Full responsive breakpoints: 390px, 768px, 1024px, 1440px.
