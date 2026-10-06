# Rebuild prompt — Straton (`straton`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Developer
- Folder: `library/websites/straton/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Deterministic autonomous enterprise operations & AI workflow platform: panoramic misty alpine mountain backdrop with dual-card floating operations console (live 5-stage exception timeline with status bead pulses, and interactive AI agent chat with reactive prompt execution), 6-card capabilities bento grid (intelligent triage, isometric records, multi-app pipelines, document OCR extraction, anomaly finance reconciliation, qualified lead execution), and real-time operational hours ROI calculator.

## Title
Straton — Turn your company into a high-growth machine

## Description meta
Straton helps enterprise companies move critical work from manual bottlenecks into autonomous intelligent agent systems—from handling orders and documents to qualifying customers, following up, reconciling data, and managing operations.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg: #fdfdfd;
  --card-bg: #ffffff;
  --surface-subtle: #f8fafc;
  --surface-hover: #f1f5f9;
  --border-hairline: rgba(0, 0, 0, 0.08);
  --border-subtle: rgba(0, 0, 0, 0.12);
  --border-focus: #0f172a;
  --text-main: #090a0f;
  --text-muted: #52525b;
  --text-faint: #a1a1aa;
  --accent-black: #090a0f;
  --accent-emerald: #10b981;
  --accent-amber: #f59e0b;
  --accent-crimson: #ef4444;
  --accent-indigo: #6366f1;
  --accent-blue: #2563eb;
  --accent-teal: #0d9488;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
  --shadow-subtle: 0 4px 12px rgba(0, 0, 0, 0.03), 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-card: 0 16px 36px -10px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04);
  --shadow-float: 0 25px 50px -12px rgba(15, 23, 42, 0.22);
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: Straton → #
  - nav .nav-links
    - a: What We Build → #what-we-build
    - a: How We Work → #how-it-works
    - a: ROI Model → #roi-calculator
    - a: Enterprise → #security
    - a: Pricing → #pricing
  - button: Let's Talk
- section .hero-section
  - h1: Turn your company into a high-growth machine.
  - p: Straton helps companies move critical work from people to intelligent systems—from handling orders and documents to qualifying customers, following up, reconciling data, and managing operations.
  - button: Book a call
  - a: Explore Architecture → #how-it-works
  - h4: Order delay detected
  - p: Customer reported shipment delay
  - p: Checking order, inventory and logistics
  - p: Rerouted from nearest fulfillment centre
  - p: Updated ETA delivered via SMS & Email
  - p: Refund timeline adjusted automatically
  - h5: Resolution Completed
  - p: All 5 systems synchronized
  - h4: Straton Agent
  - p: Customer Support & Ops Orchestrator
  - form #agentInputForm .agent-input-bar
- section .proof-section
- section #what-we-build .bento-section
  - h2: Give every repetitive workflow a way to run itself.
  - p: Straton builds AI agents that take on complete business workflows—from the first input to the final action—inside the systems your team already uses.
  - h3: Resolve issues faster
  - p: Resolve issues faster with intelligent routing, automated responses for common queries, and AI assistants that empower your support team to deliver exceptional service.
  - h3: Personalize campaigns at scale
  - p: Create personalized campaigns at scale with AI that understands your audience, optimizes content performance, and turns data into actionable insight.
  - h3: Streamline every workflow
  - p: Streamline workflows and eliminate bottlenecks with process automation, intelligent document handling, and systems that adapt to your business needs.
  - h3: Operations Document extraction
  - p: Turn unstructured documents, PDFs, bills of lading, and purchase orders into structured, verified data your existing enterprise ERP can act on immediately.
  - h3: Close faster, forecast better
  - p: Automate reconciliation, detect anomalies, and generate insights that help finance teams close month-end books faster and make superior strategic decisions.
  - h3: Close deals faster with AI
  - p: Accelerate deal cycles with autonomous lead scoring, instant context briefing, automated calendar scheduling, and automated handoffs to sales reps.
- section #roi-calculator .calculator-section
  - h3: Calculate Your Operational Hours Saved
  - p: Estimate the immediate ROI of replacing repetitive human exception triage with Straton autonomous agents.
- section #security .security-section
  - h2: Architected for Zero-Compromise Security
  - p: Straton runs in isolated VPCs with cryptographic auditing, ensuring your customer and operational data never trains public models.
  - h4: SOC-2 Type II
  - p: Continuous compliance monitoring with real-time audit trails for every workflow step.
  - h4: Zero Data Retention
  - p: Zero retention LLM routing. Your internal data is processed in memory and never stored.
  - h4: VPC & On-Premises
  - p: Deploy directly inside your AWS, GCP, Azure or sovereign European private cloud.
  - h4: HIPAA & GDPR
  - p: Full regulatory compliance guarantee with granular role-based access control (RBAC).
- section #pricing .pricing-section
  - h2: Simple, Transparent Investment
  - p: Predictable pricing with unlimited team seats and clear execution metering.
  - h3: Starter Pilot
  - p: Ideal for teams proving out autonomous agents on their first 2 critical bottlenecks.
  - ul .tier-features
    - li: Up to 5 autonomous agents
    - li: 15,000 executed actions / mo
    - li: Core integrations (Slack, Salesforce, Email)
    - li: Standard 24/7 logging & SLA
  - button: Start Pilot
  - h3: Growth Fleet
  - p: Full autonomous pipeline coverage for high-growth mid-market and scaling operations.
  - ul .tier-features
    - li: Unlimited autonomous agents
    - li: 100,000 executed actions / mo
    - li: Custom document OCR & fine-tuned extractors
    - li: Dedicated solutions engineer
  - button: Deploy Fleet
  - h3: Enterprise Custom
  - p: Private cloud deployments, custom compliance isolation, and custom agent development.
  - ul .tier-features
    - li: Self-hosted VPC / on-premises
    - li: Custom SLA (99.99%) & disaster recovery
    - li: Enterprise security review & BAA
    - li: White-glove agent development team
  - button: Talk to Sales
- section #how-it-works .faq-section
  - h2: Frequently Asked Questions
  - p: How Straton integrates safely with existing infrastructure.
- section .cta-banner
  - h2: Ready to build your autonomous operations engine?
  - p: Book a technical deep dive with our solutions engineering team to review your workflow topology and test agent orchestration live.
  - button: Book Technical Call →
- footer .site-footer
  - a: Straton → #
  - p: Autonomous AI workflow machines and operational intelligence for modern enterprise teams.
  - h5: Platform
  - ul
    - li: Order Exceptions
    - li: Document OCR
    - li: Reconciliation
    - li: Lead Qualification
  - h5: Architecture
  - ul
    - li: Security & VPC
    - li: ROI Model
    - li: Pricing Plans
    - li: FAQ
  - h5: Company
  - ul
    - li: Schedule Demo
    - li: Security Whitepaper
    - li: Privacy Protocol
    - li: Terms of Service
- button: ×
- h3: Schedule Architecture Briefing
- p: Our engineering team will map your operational bottlenecks and demonstrate live agent orchestration.
- form
  - label: Work Email
  - label: Primary Workflow Bottleneck
  - option: Customer Support & Order Exceptions
  - option: Invoice & Document Extraction
  - option: Financial Ledger Reconciliation
  - option: Lead Routing & Outbound Action
  - option: Custom Internal Workflow
  - button: Confirm Architecture Session →

## Images in the page
- `assets/hero-alpine.jpg — Misty Alpine Mountain Lake Reflection`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #agentInput placeholder='Ask anything or simulate workflow command...'
- input[range] #volumeSlider
- input[range] #minsSlider
- input[range] #rateSlider
- input[email] placeholder='alex@company.com'
- select

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/hero-alpine.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
