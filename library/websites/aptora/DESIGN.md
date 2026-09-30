# Aptora — Design System & Architecture Specification

> **Rebrand Source**: Derived from Attice Webflow SaaS Template by Flowcub (`maheshflowcub` on X / Twitter status `2104922245214982196`).
> **Target Deliverable**: `library/websites/aptora/index.html`

---

## 1. Brand Identity & Strategy

- **Brand Name**: **Aptora**
- **Domain Context**: `aptora.example` / Autonomous AI Talent Acquisition Platform
- **Value Proposition**: "Everything you need to hire in one place. Connected AI agents purpose-built to elevate hiring precision and efficiency."
- **Tone**: High-velocity modern SaaS, authoritative, clean, precision-engineered, enterprise-ready yet startup-friendly.

---

## 2. Color Palette & Lighting

| Role | Token | Hex / Value | Usage |
|------|-------|-------------|-------|
| Canvas Light | `--bg-canvas` | `#ffffff` | Primary background canvas |
| Sub-Canvas | `--bg-subtle` | `#f8fafc` | Alternating section backing |
| Surface Light | `--bg-surface` | `#ffffff` | Floating cards, dashboard containers |
| Accent Emerald | `--accent-mint` | `#00dc82` | Primary brand CTA buttons, active pills, badges |
| Accent Mint Glow | `--accent-glow` | `rgba(0, 220, 130, 0.22)` | Radial ambient hero backlights |
| Accent Forest | `--accent-dark` | `#065f46` | High-contrast text on mint |
| Text Primary | `--text-primary` | `#0f172a` | Headlines, primary text |
| Text Secondary | `--text-muted` | `#64748b` | Subheadings, metadata, captions |
| Border Hairline | `--border-subtle` | `rgba(15, 23, 42, 0.08)` | Card borders, dividers, chip outlines |
| Dark Section Canvas | `--dark-canvas` | `#090d16` | High-contrast testimonial backing |
| Dark Section Card | `--dark-surface` | `#111827` | Testimonial & video highlight containers |
| Dark Text Primary | `--dark-text` | `#f8fafc` | Light text inside dark container |

---

## 3. Typography & Hierarchy

- **Primary Font**: `Plus Jakarta Sans`, system-ui fallback (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif)
- **Code / Mono Font**: `JetBrains Mono`, ui-monospace, monospace (telemetry, AI tokens)
- **Hierarchy**:
  - Hero Display: `clamp(2.75rem, 5.5vw, 4.5rem)` / Line-height `1.08` / Font-weight `700`
  - Section Headlines: `clamp(2rem, 3.8vw, 3rem)` / Line-height `1.15` / Font-weight `700`
  - Subheads: `1.125rem` to `1.25rem` / Line-height `1.55` / Font-weight `400`
  - Body Text: `1rem` / Line-height `1.6` / Font-weight `400`
  - Microcopy / Eyebrows: `0.75rem` to `0.875rem` / Font-weight `600` / Uppercase or Title Case with subtle tracking

---

## 4. Key Interactive Components

1. **Floating Hero Composition**:
   - Central high-res candidate portrait (`assets/hero-candidate.jpg`) with rounded corners and glowing emerald aura.
   - Left floating card: "Aptora AI • Analyzing request..." with SVG circular progress ring (85% match), checklist badges, and "Explore breakdown →" action.
   - Right floating card: Candidate telemetry profile for "Sr. Data Scientist", question distribution bar chart across interview cycles.

2. **Social Proof Logo Marquee**:
   - Monochromatic vector logos of fictional scaleups: Hyperion, Synthetix, Monolith, NexaFlow, Veloce, Kernel.

3. **Metrics Bar**:
   - 3 large key figures: **4x** Faster Hiring, **30M+** Applications Processed, **01** Unified Platform.

4. **Deep Feature 1: Candidate Deep-Dive Intelligence**:
   - 4 modular capability pillars: Skill Intelligence, Fit & Impact Scoring, Communication Cues, Relevance Engine.
   - High-fidelity candidate evaluation card with photo, circular progress badge, tags, and AI consensus score.

5. **Deep Feature 2: Multi-Board One-Click Syndication**:
   - Interactive job distribution hub with connected nodes (LinkedIn, Indeed, GitHub, Glassdoor, Wellfound).

6. **Interactive Candidate Screener Workbench**:
   - Live recruiter workbench letting users toggle between candidate profiles (Mira Vance, Nola Chen, Owen Sterling) to view instant AI scoring, breakdown radars, and dynamically generated interview questions.

7. **Flexible 4-Tier Pricing Grid**:
   - Monthly / Annual toggle with "Save 20%" badge.
   - 4 distinct tiers: Free, Standard ($25/mo), Advance ($39/mo, tagged "MOST POPULAR"), Enterprise (Custom).

8. **High-Contrast Dark Testimonials & Video Card**:
   - Dark aesthetic section showcasing quantified client outcomes (47% reduction in interview fatigue), testimonial cards, and a video case highlight.

9. **Interactive ROI Calculator**:
   - Recruiter hiring volume & team size sliders showing estimated annual hours saved and cost reduction.

10. **FAQ Accordion & Final Conversion CTA**:
    - Clean accordion answering common enterprise questions.
    - Banner card with mint CTA and complete 4-column footer.
