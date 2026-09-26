# Rebuild prompt — Operon (`operon`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/operon/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous AI agent workforce platform — precision axonometric architectural stack diagram, proof & metrics quartet, conveyor & vault bento feature grid, interactive 3D value deck, and perspective wordmark.

## Title
Operon — Autonomous AI Agent Workforce & Orchestration

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-canvas: #ffffff;
  --bg-surface: #f9fafb;
  --bg-subtle: #f3f4f6;
  --bg-card: #ffffff;
  --bg-card-hover: #fcfdfe;
  --border-light: #f1f3f7;
  --border-default: #e5e7eb;
  --border-strong: #d1d5db;
  --border-accent: rgba(107, 138, 253, 0.4);
  --ink-primary: #0f172a;
  --ink-secondary: #475569;
  --ink-muted: #64748b;
  --ink-faint: #94a3b8;
  --accent-primary: #6b8afd;
  --accent-hover: #5879fc;
  --accent-active: #4869fa;
  --accent-soft: rgba(107, 138, 253, 0.10);
  --accent-subtle: rgba(107, 138, 253, 0.05);
  --accent-glow: rgba(107, 138, 253, 0.22);
  --star-gold: #fbbf24;
  --success: #10b981;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
  --font-sans: "Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "IBM Plex Mono", monospace;
  --shadow-sm: 0 1px 3px rgba(15, 23, 42, 0.04), 0 1px 2px rgba(15, 23, 42, 0.02);
  --shadow-md: 0 4px 14px rgba(15, 23, 42, 0.05), 0 1px 3px rgba(15, 23, 42, 0.03);
  --shadow-lg: 0 16px 36px rgba(15, 23, 42, 0.08), 0 4px 12px rgba(15, 23, 42, 0.03);
  --container-max: 1200px;
  --transition-base: all 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: OPERON → #hero
  - nav
    - ul .nav-links
      - li: Product
      - li: Features
      - li: How it works
      - li: Why Operon
      - li: Pricing
      - li: Resources
  - a: Get started → #cta-stage
- section #hero .hero-section
  - h1: Your team has work to do, Your AI agents can do it
  - p: Autonomous AI agents that research, decide, and execute across your enterprise infrastructure, without adding headcount.
  - a: Get Started → #cta-stage
  - a: Book a call → #how-it-works
- section .partners-section
- section .proof-section
  - h2: Built to do the work, Proven to deliver
  - p: See what AI agents are actually achieving across tasks, time saved, and reliability.
  - button: Verify numbers
  - p: Routine work handled automatically, so your team can focus on valuable work.
  - p: Thousands of hours saved by letting AI agents handle repetitive workflows.
  - p: Reliable execution across workflows, with agents completing tasks consistently.
  - p: Your AI agents work around the clock, whenever your business needs them.
- section #features .features-section
  - h2: Everything you need to move faster.
  - p: See what AI agents are actually achieving across tasks, time saved, and reliability.
  - h3: Smart Automation
  - p: Automate repetitive work and keep everyday workflows moving.
  - h3: Always On
  - p: Your agents keep working around the clock, whenever you need them.
  - h3: Secure by Design
  - p: Built with security and controls to keep your business protected.
  - h3: Seamless Integrations
  - p: Connect the tools your team already uses, all in one workflow.
  - h3: Scales With You
  - p: Add agents and workflows as your team and business grow.
- section #how-it-works .how-section
  - h2: How it works?
  - h3: Connect
  - p: Connect your tools, data or workflow.
  - h3: Configure
  - p: Set your preferences, goals and rules.
  - h3: Automate
  - p: Let the platform handle the rest.
- section #why-operon .why-section
  - h2: Why choose us?
- section #faq .faq-section
  - h2: Frequently asked Questions
  - button: What is Operon? +
  - button: How quickly can I get started? +
  - button: Do I need any technical knowledge? +
  - button: Can I connect my existing tools? +
  - button: Is my data secure? +
  - button: Can I change or upgrade my plan? +
  - button: What kind of tasks can I automate? +
- section #cta-stage .cta-stage-section
  - h2: Ready to work Faster & smarter?
  - p: Turn your workflow into something faster, simpler and more powerful.
  - a: Get Started → #hero
  - a: Book a call → #how-it-works
- footer .footer
  - p: Automate today, for a smarter tomorrow.
  - a: Get Started → #hero
  - a: Book a call → #how-it-works
  - h4: Stay in touch
  - form .footer-newsletter-form
  - p: No spam. Just good stuff.
  - h4: Product
  - ul .footer-links-list
    - li: Features
    - li: Integrations
    - li: Pricings
    - li: Changelog
    - li: Roadmap
  - h4: Resources
  - ul .footer-links-list
    - li: Documentation
    - li: Help Center
    - li: Blog
    - li: Guides
    - li: Community
  - h4: Company
  - ul .footer-links-list
    - li: About
    - li: Careers
    - li: Contact
    - li: Press
    - li: Legal
  - a: Privacy policy → #faq
  - a: Terms of Service → #faq
  - a: Cookie settings → #faq

## Images in the page
- `assets/hero_stack.svg — Operon 4-Tier Isometric Architecture Stack`
- `assets/metric_tasks.svg — 12.4M+ Tasks automated`
- `assets/metric_hours.svg — 48K+ Hours saved`
- `assets/metric_success.svg — 98.7% Task success rate`
- `assets/metric_uptime.svg — 24/7 Agent availability`
- `assets/bento_automation.svg — Smart Automation Conveyor`
- `assets/bento_always_on.svg — Always On 24/7 Platform`
- `assets/bento_security.svg — Secure by Design Vault Safe`
- `assets/bento_integrations.svg — Seamless Integrations Circuit Network`
- `assets/bento_scale.svg — Scales With You Global Network Map`
- `assets/step_connect.svg — Step 1: Connect Data & Tools`
- `assets/step_configure.svg — Step 2: Configure Policies & Rules`
- `assets/step_automate.svg — Step 3: Automate Workflows`
- `assets/why_slab.svg — Why Choose Us 3-Layer Document Slab`
- `assets/faq_qmark.svg — 3D Isometric Question Mark`
- `assets/resonator.svg — Resonator Lens Aura`
- `assets/footer_wordmark.svg — Operon Horizon Wordmark`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='Enter your email'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/bento_always_on.svg`
- `assets/bento_automation.svg`
- `assets/bento_integrations.svg`
- `assets/bento_scale.svg`
- `assets/bento_security.svg`
- `assets/faq_qmark.svg`
- `assets/footer_wordmark.svg`
- `assets/hero_stack.svg`
- `assets/metric_hours.svg`
- `assets/metric_success.svg`
- `assets/metric_tasks.svg`
- `assets/metric_uptime.svg`
- `assets/resonator.svg`
- `assets/step_automate.svg`
- `assets/step_configure.svg`
- `assets/step_connect.svg`
- `assets/why_slab.svg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
