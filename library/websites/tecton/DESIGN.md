# Tecton — Architectural & Spatial Studio

## 1. Brand Concept & Proposition
- **Brand Name**: **Tecton** (`tecton`)
- **Proposition**: *Architects with a different approach — shaping sustainable, sculptural, and enduring spaces.*
- **Industry & Category**: `Studio` / Architectural Design, Urban Planning & Spatial Engineering
- **Target Audience**: High-net-worth residential clients, commercial developers, institutional civic committees, and urban masterplanners.
- **Core Visual Metaphor**: Precision Tectonics — bold geometric angles, rhythmic structural grids, tactile material honesty (fair-faced concrete, weathered Corten steel, high-performance glazing, warm terracotta brickwork), anchored by an electric cobalt royal blue accent.

---

## 2. Color System & Design Tokens

| Token | Hex Value | Role & Usage |
|---|---|---|
| `--color-canvas` | `#FAFAF9` | Primary warm alabaster canvas background |
| `--color-surface` | `#FFFFFF` | Card surfaces, elevation panels, project cards |
| `--color-surface-muted`| `#F3F4F6` | Stat cards, filter tab backgrounds, spec chips |
| `--color-border` | `#E5E7EB` | Hairline dividers, subtle grid borders, card outlines |
| `--color-ink-primary` | `#0F172A` | Primary typography, headlines, high-impact titles |
| `--color-ink-secondary`| `#475569` | Body paragraphs, descriptive metadata, process copy |
| `--color-ink-muted` | `#94A3B8` | Caption notes, numbering, footnote specs |
| `--color-cobalt-primary`| `#1D4ED8` | Primary CTA buttons, rotating circular stamp badge |
| `--color-cobalt-hover` | `#2563EB` | Active states, hover glow, focal interactions |
| `--color-cobalt-soft` | `#EFF6FF` | Subtle focus rings, badge tints, active filter tabs |
| `--color-dark-surface` | `#0B0F19` | Footer background, moody architecture callout panels |

---

## 3. Typography Hierarchy

- **Primary Display & Body Font**: `Plus Jakarta Sans`
  - Hero Headline: $64\text{px} - 88\text{px}$ / Weight: 800 / Tracking: $-0.03\text{em}$ / Uppercase architectural impact
  - Section Headings: $36\text{px} - 44\text{px}$ / Weight: 700 / Tracking: $-0.02\text{em}$
  - Card & Service Titles: $20\text{px} - 24\text{px}$ / Weight: 700 / Tracking: $-0.01\text{em}$
  - Body Text: $16\text{px} - 17\text{px}$ / Weight: 400 / Line-height: 1.65
  - Eyebrow Tags: $12\text{px} - 13\text{px}$ / Weight: 600 / Tracking: $+0.08\text{em}$ / Uppercase
- **Technical & Metric Font**: `IBM Plex Mono`
  - Stat Counters: $48\text{px} - 56\text{px}$ / Weight: 700 / Tabular numbers
  - Dimension Badges & Coordinates: $11\text{px} - 12\text{px}$ / Weight: 500

---

## 4. Key Sections & Components

1. **Header / Sticky Navigation**:
   - Isometric Tecton hexagonal prism mark + brand wordmark.
   - Navigation links: Home, About, Services, Projects, Process, Team, Studio.
   - Royal blue pill CTA "Contact Us Now" triggering consultation drawer.
2. **Hero Architectural Showcase**:
   - Massive headline: "ARCHITECTS WITH DIFFERENT APPROACH" with subtle accent rulers.
   - Narrative subtext emphasizing sustainable adaptation and structural elegance.
   - Overlapping dynamic rotating circular stamp ("CONTACT US • CONTACT US •") with diagonal directional arrow.
   - Large hero architectural facade with smooth parallax scroll scale.
3. **About & Quantitative Proof**:
   - Studio manifesto: "We design and build your vision into reality."
   - 3 Stat counters with live GSAP number tick-up:
     - `25+` Years of Innovation
     - `500+` Projects Delivered
     - `94%` Repeat Client Engagements
4. **Curated Portfolio & Interactive Gallery**:
   - Category filter tabs: All, Residential, Civic & Cultural, Commercial, Masterplan.
   - Project cards with high-fidelity architectural imagery:
     - *The Sinuous Canopy* — Cultural Arts Pavilion (Fair-faced concrete)
     - *Kensington Brick Tower* — High-Density Residential (Terracotta masonry)
     - *The Monolith Cylinder* — Civic Assembly Pavilion (Curved bronze louvers)
     - *Vauxhall Glass Spire* — Corporate Headquarters (Low-E structural glazing)
   - Interactive hover zoom, cursor badge, and full-screen project modal drawer with specifications (Site, Year, Area, Structural System).
5. **A Comprehensive Set of Services**:
   - 6-card architectural disciplines matrix:
     1. Architectural Design
     2. Urban Planning and Design
     3. Sustainable Design
     4. Project Management
     5. Interior Design
     6. Landscape Architecture
   - Micro-interaction: subtle card elevation and cobalt border line animation on hover.
6. **Atmospheric Structural Banner**:
   - Full-bleed Corten steel curved archway photography with deep atmospheric lighting.
   - Compelling call-to-action: "Reach out for architectural solutions."
   - Royal blue button "Book A Consultation" with ripple effect.
7. **Expert Team Matrix**:
   - 4 Studio leaders in signature dark architect attire:
     - Robert Fox (Principal Architect • Founding Director)
     - Guy Hawkins (Principal Architect • Design Director)
     - Jacob Jones (Technical Director • Structural Lead)
     - Devon Lane (Senior Interior Architect • Sustainability Director)
   - Interactive bio hover overlay and social links.
8. **Work Process & Execution Methodology**:
   - 4-step sequential timeline:
     - 01. Contextual Site Synthesis & Feasibility
     - 02. Computational Modeling & Massing Studies
     - 03. Regulatory Permitting & Environmental Auditing
     - 04. Construction Administration & Spatial Handover
9. **Interactive Consultation Drawer & Architectural Footer**:
   - Slide-out consultation inquiry drawer with project type selector, budget range, and site location input.
   - Comprehensive footer with worldwide offices (London, Zurich, Tokyo, New York), legal, newsletter signup, and copyright.

---

## 5. Motion & Interaction Standards (Rule 11)
- **Lenis Smooth Scroll**: Inertial smooth scrolling for premium architectural weight.
- **ScrollTrigger Parallax**: Multi-speed parallax on hero facade and mid-page Corten banner.
- **Micro-interactions**: Infinite 360° rotating stamp, smooth tab switches, modal transitions, and interactive project drawer.
- **Accessibility**: Full `prefers-reduced-motion` compliance disabling inertial animations when requested by user agent.
