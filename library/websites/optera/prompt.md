# Rebuild prompt — Optera (`optera`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Agency
- Folder: `library/websites/optera/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Intelligent business automation and AI operations agency: void black aesthetics with neon cyan-to-lime kinetic gradient accents, indexed bracket telemetry notation, interactive 5-stage automation pipeline HUD, video showreel lightbox, and transparent pricing sprints.

## Title
Optera — Turn Manual Work into Intelligent Systems

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-dark: #07080a;
  --surface-dark: #0e1014;
  --surface-card: #13161c;
  --surface-elevated: #1a1e26;
  --surface-border: rgba(255, 255, 255, 0.08);
  --surface-border-hover: rgba(255, 255, 255, 0.2);
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --accent-gradient: linear-gradient(90deg, #00d2ff 0%, #a6ff00 100%);
  --accent-cyan: #00d2ff;
  --accent-lime: #a6ff00;
  --font-display: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 0 1px var(--surface-border);
  --shadow-glow: 0 0 40px rgba(0, 210, 255, 0.2);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .navbar
  - a: Optera → #
  - ul .nav-links
    - li: About
    - li: Why Optera
    - li: Process
    - li: Pricing
  - a: Book a Strategy Call ↗ → #pricing
- section .hero-section
  - h1: Turn Manual Work into Intelligent Systems
  - p: We design intelligent automation systems that streamline workflows, reduce costs, and help your business scale faster.
  - a: Get Started ↗ → #pricing
  - a: Book a Demo ↗ → #why
- section .container.client-proof-wrap
- section #about .section-wrap
  - p: Optera builds intelligent automation systems that help modern businesses reduce operational friction and scale with clarity. We combine human strategy with AI precision to create systems that adapt, automate, and evolve.
- section #why .section-wrap
  - h2: Build Smarter Workflows with AI-Powered Systems
  - p: Unify teams, tasks, databases, and operational tools into one connected ecosystem that runs effortlessly.
  - button: Client Operations
  - button: Internal Systems
  - button: AI Support Systems
- section #process .section-wrap
  - h2: From Complexity to Clarity Through Intelligent Systems
  - p: We help businesses automate repetitive operations, connect workflows, and build scalable systems powered by intelligent automation.
  - h3: Discovery & Audit
  - p: We map every recurring operational friction point, manual bottleneck, and disconnected SaaS tool across your stack.
  - h3: Architecture & Design
  - p: Custom blueprint design of agentic orchestration pipelines, deterministic fallback trees, and zero-trust permissions.
  - h3: AI Engine Deployment
  - p: Rapid 2-week implementation sprint deploying automated triggers, webhook endpoints, and human-in-the-loop review guards.
  - h3: Monitoring & Scale
  - p: Continuous telemetry tracking, self-healing execution handlers, and regular capability expansions as your volume grows.
- section .section-wrap
  - h2: Value Clarity & Control
  - p: Optera helped us automate repetitive operational tasks that were slowing our entire engineering workflow down. Reporting, approvals, and follow-ups now run seamlessly without constant manual input.
  - p: We finally replaced scattered workflows with one unified automation system. The team now spends less time managing tasks and more time driving revenue growth.
  - p: Working with Optera eliminated so much repetitive manual work from our onboarding pipeline. Our customer handoffs are 4x faster and zero requests slip through the cracks.
- section #pricing .section-wrap
  - h2: Flexible Automation Plans
  - p: Predictable investment models calibrated for high-growth operations teams.
  - ul .price-features
    - li: Up to 2 core workflow automation pipelines
    - li: Integrates with Slack, HubSpot & Airtable
    - li: 2-week rapid delivery guarantee
    - li: 30 days post-launch hypercare
  - a: Select Starter ↗ → #cta
  - ul .price-features
    - li: Continuous workflow architecture & deployment
    - li: Custom LLM & agentic tooling integrations
    - li: Dedicated automation architect on Slack
    - li: Weekly optimization sprints & SLA monitoring
    - li: Priority 24/7 incident response
  - a: Start Growth Partner ↗ → #cta
  - ul .price-features
    - li: Air-gapped on-premise or VPC deployments
    - li: SOC 2, HIPAA & GDPR compliance controls
    - li: Custom multi-agent orchestration engines
    - li: Executive quarterly strategy reviews
  - a: Inquire Custom ↗ → #cta
- section .section-wrap
  - h2: Modern Perspectives on AI-Driven Operations
  - h3: Designing Intelligent Workflows That Scale Efficiently
  - p: Automation relies on structured systems, integrated tools, and designed workflows. Discover the framework modern organizations use to eliminate repetitive manual bottlenecks.
  - h4: Creating Workflow Systems for Faster Team Execution
  - p: OPERATIONAL STRATEGY • 5 MIN READ
  - h4: Building Autonomous Guardrails for Mission-Critical Tasks
  - p: AGENTIC TOOLS • 4 MIN READ
  - h4: Optimizing Internal Operations Through Multi-Agent Swarms
  - p: CASE STUDY • 6 MIN READ
- section #cta .container
  - h2: Ready to Turn Manual Work into Intelligent Systems?
  - p: Book a 30-minute operational strategy session with our automation architects to analyze your workflow bottlenecks.
  - a: Book a Strategy Call ↗ → #pricing
- footer .site-footer
  - ul .footer-links
    - li: About
    - li: Architecture
    - li: Methodology
    - li: Pricing
- button: ×

## Images in the page
- `assets/showreel.webp — Optera Systems Showreel`
- `assets/insight-main.webp — Designing Intelligent Workflows`
- `assets/insight-1.webp — Creating Workflow Systems`
- `assets/insight-2.webp — Building Automation Strategies`
- `assets/insight-3.webp — Optimizing Operations`
- `assets/dashboard.webp — Optera Systems Showreel Preview`

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/dashboard.webp`
- `assets/insight-1.webp`
- `assets/insight-2.webp`
- `assets/insight-3.webp`
- `assets/insight-main.webp`
- `assets/showreel.webp`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
