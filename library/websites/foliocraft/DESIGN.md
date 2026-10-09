# DESIGN — FolioCraft

## Overview
- Audience: High-growth professionals, engineers, designers, executives, and job seekers aiming for high-signal interview conversion.
- Single CTA: "Get started free ↗"
- Emotion: Crisp confidence, luminous clarity, effortless competence, modern tech warmth.
- Create this feeling through:
  - Clean paper-first canvas (`#FFFFFF` / `#FCFAF8`) paired with subtle vertical column grid guides
  - Radiant solar coral-to-tangerine accent system (`#FF5B1B` -> `#FF7A33`) with diffused warm glow elevation
  - Layered multi-card product proof hero (concentric acoustic aura arcs, browser builder window with pastel controls, floating 12 Interviews analytics bar chart, interactive AI prompt pill)
  - Geometric sans display typography (Plus Jakarta Sans) with tight tracking and balanced measure
  - Tactile micro-interactions (magnetic pill buttons, hover state glows, interactive template switcher, live ATS score simulator)

## Aesthetic Commitment
- Name: Clean Radiant SaaS (Warm Career-Tech)
- Signature element: Concentric radiant peach aura rings around circular avatar focal point, anchoring an overlapping modern document builder interface.

## Color Tokens
- **Canvas Base**: `#FFFFFF` (Pure white)
- **Canvas Warm Substrate**: `#FAF8F5` / `#F8F6F2`
- **Primary Accent / Solar Coral**: `#FF5B1B`
- **Accent Light / Peach Radiant**: `#FF7A33`
- **Accent Glow Soft**: `rgba(255, 91, 27, 0.35)`
- **Peach Skeleton Tint**: `#FFEFE7` / `#FFF5EE`
- **Aura Ring Stroke**: `rgba(255, 122, 51, 0.22)`
- **Deep Ink**: `#111417` (High-contrast charcoal black)
- **Ink Secondary**: `#454E59` (Subtle muted body text)
- **Ink Faint**: `#7E8B9B` (Captions, labels, timestamps)
- **Card Border**: `rgba(0, 0, 0, 0.07)`
- **Card Shadow**: `0 20px 48px -12px rgba(17, 20, 23, 0.08)`

## Typography
- **Display & Headings**: `Plus Jakarta Sans` (Weights: 600, 700, 800)
- **Interface & Body**: `Inter` (Weights: 400, 500, 600)
- **Code & Telemetry**: `JetBrains Mono` (Weights: 400, 500)

## Layout & Architecture
1. **Top Announcement Bar**: Minimal sticky announcement banner with `LIVE` tag and dismiss trigger.
2. **Glassmorphic Floating Nav**: Translucent pill navbar with blur filter, product navigation, and radiant orange Sign-Up button.
3. **Product-as-Proof Hero**:
   - Left: `NEW` badge, thesis headline ("Craft Resumes That Land Interviews"), crisp subhead, dual CTAs ("Get started free ↗", "Watch Demo ▶").
   - Right: Multi-layered hero staging:
     - Concentric glowing peach arcs
     - Circular avatar with professional portrait
     - Document builder browser frame (pastel window controls, active dot sidebar, peach template skeleton blocks)
     - Overlapping bottom-right "Applied Resumes" stat card (12 Interviews + animated bar chart)
     - Overlapping bottom AI prompt pill ("Build Resume for Graphic Designer" + send button)
4. **Partner Logo Strip**: Clean monochrome partner lockups (Synergy™, Horizon™, Catalyst™, Phoenix™, Pulse™, Solaris™, Aurora™).
5. **Interactive Template Showcase**: Live switchable design systems (Executive, Minimal Swiss, Product Craft, Modern Mono).
6. **Bento Intelligence Grid**:
   - ATS Signal Scoring Engine (real-time keyword density meter)
   - One-Click Role Tailoring (JD diff parser)
   - Executive Bullet Phraser (weak → high-impact phrasing transformer)
   - Multi-Format Export (Pixel-perfect PDF, ATS Plaintext, Web Dossier)
7. **Interactive ATS Score Optimizer Widget**: Live test playground where visitors can see instant keyword match scoring jump from 62% to 98%.
8. **Placement Proof & Metrics**: Social proof testimonials from real-world career transitions (Stripe, Figma, Linear, OpenAI).
9. **Transparent Pricing**: Free Starter vs Pro Careerist vs Executive Studio with monthly/annual discount toggle.
10. **Final High-Impact CTA**: Radiant glow container with quick-start input and immediate onboarding trigger.
11. **Comprehensive Footer**: Full navigation, legal notices, privacy commitments, and status indicator.

## Motion & Micro-Interactions
- Smooth Lenis or native smooth scrolling with CSS scroll-behavior.
- CSS keyframe pulse on radiant glow rings.
- Hover lift on floating product cards with soft shadow dispersion.
- Staggered entrance animations on page load.
- Strict `prefers-reduced-motion: reduce` overrides disabling all animations for accessibility.
