# Rebuild prompt — Novastack (`novastack`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Services
- Folder: `library/websites/novastack/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Full-spectrum enterprise IT services, cloud architecture, and autonomous infrastructure platform. Features vibrant cobalt blue hero with circuit grid backdrop, interactive 10-domain IT services matrix (Cloud, DevOps, Cybersecurity, AI/ML, Data Lakehouse, Managed IT, Networking, vCIO), trusted partner collaboration showcase, deep slate cybersecurity FAQ consultation, interactive IT cost estimation calculator, and 24/7 SLA telemetry.

## Title
Novastack — Autonomous IT & Enterprise Cloud Solutions

## Description meta
Novastack delivers full-spectrum enterprise IT services: multi-cloud infrastructure, 24/7 Managed SOC, DevOps platform engineering, AI data systems, and IT operations.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --brand-blue: #1E40FF;
  --brand-blue-deep: #1434E8;
  --brand-blue-hover: #0D2EE0;
  --brand-blue-light: #EFF4FF;
  --brand-cyan: #00D2FF;
  --bg-dark: #0A0F1D;
  --bg-dark-card: #111827;
  --bg-canvas: #F8FAFC;
  --bg-white: #FFFFFF;
  --text-dark: #0A0F1D;
  --text-body: #475569;
  --text-muted: #64748B;
  --border-subtle: #E2E8F0;
  --border-dark: rgba(255, 255, 255, 0.12);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-pill: 999px;
  --shadow-sm: 0 2px 8px rgba(10, 15, 29, 0.04);
  --shadow-md: 0 8px 24px rgba(10, 15, 29, 0.08);
  --shadow-lg: 0 16px 40px rgba(10, 15, 29, 0.12);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header #topNav .top-nav
  - ul .nav-links
    - li: Services +
    - li: IT Domains +
    - li: About Us
    - li: Cost Calculator
    - li: Security FAQ
    - li: Insights
  - a: +1 (800) 555-NOVA → tel:+18005556682
  - button: + GET A QUOTE
- section #hero .hero-section
  - h1: IT & innovative tech solutions for startups & enterprise
  - p: Novastack provides full-spectrum IT architecture: multi-cloud migrations, 24/7 Managed SOC, automated Kubernetes platform engineering, and enterprise AI data systems engineered for scale.
  - a: + OUR SERVICES → #domains
  - button: + CONTACT US
- section #domains .services-matrix-section
  - h2: Company expertise across all IT domains
  - p: From multi-cloud infrastructure and automated DevOps pipelines to zero-trust cybersecurity and enterprise AI data lakehouses.
  - button: All 10 IT Domains
  - button: Cloud & DevOps
  - button: Cybersecurity & SOC
  - button: AI & Data Systems
  - button: Managed IT & Workplaces
  - h3: Cloud Architecture & Multi-Cloud
  - p: Full-lifecycle AWS, Microsoft Azure, and GCP multi-cloud deployment, hybrid architectures, serverless runtimes, and FinOps cost governance reducing cloud spend by 35%+.
  - a: + SCOPE CLOUD →
  - h3: Cybersecurity & 24/7 Managed SOC
  - p: Zero Trust Network Access (ZTNA), Endpoint Detection & Response (EDR), threat hunting, continuous penetration testing, and automated SOC 2 / ISO 27001 auditing.
  - a: + DEPLOY SOC →
  - h3: DevOps, Platform & Kubernetes
  - p: Production Kubernetes (EKS, AKS, OpenShift) clusters, automated GitOps CI/CD with ArgoCD and Terraform, and Datadog/Grafana site reliability telemetry.
  - a: + CONFIGURE PIPELINE →
  - h3: Enterprise AI, LLMs & MLOps
  - p: Private on-premises and hosted RAG pipelines, fine-tuned domain models, vector search databases (Pinecone, Qdrant), and secure model guardrails for enterprise IP.
  - a: + INTEGRATE AI →
  - h3: Data Lakehouse & Analytics
  - p: Modern data lakehouse deployment on Snowflake, Databricks, and BigQuery. High-throughput Kafka real-time event streaming and executive PowerBI / Tableau analytics.
  - a: + BUILD LAKEHOUSE →
  - h3: Software Modernization
  - p: Deconstructing legacy monoliths into resilient Go, Rust, and Node.js microservices with event-driven API gateways and sub-100ms transactional response times.
  - a: + MODERNIZE APPS →
  - h3: 24/7 Managed IT Operations
  - p: Tier 1-3 global ITIL service desk, proactive server and workstation health monitoring, automated ticketing, patch compliance, and sub-18 min resolution time.
  - a: + ENGAGE ITIL DESK →
  - h3: Digital Workplace & MDM
  - p: Zero-touch corporate hardware provisioning via Microsoft Intune and Jamf, Okta / Entra ID Single Sign-On (SSO), and automated employee lifecycle provisioning.
  - a: + MANAGE FLEET →
  - h3: SD-WAN & Enterprise Networks
  - p: Global software-defined WAN, high-density Wi-Fi 6E/7 campus infrastructure, low-latency cross-cloud interconnects, and SASE perimeter consolidation.
  - a: + ARCHITECT NETWORK →
  - h3: Virtual CIO & Tech Strategy
  - p: Executive technology roadmaps, M&A tech stack due diligence, vendor contract negotiations, and disaster recovery / business continuity planning (BCP).
  - a: + APPOINT vCIO →
- section #about .about-company-section
  - h2: Your trusted partner in IT solutions
  - p: We operate as an embedded extension of your technology team. Our senior architects and site reliability engineers eliminate operational bottlenecks so you can innovate without infrastructure friction.
  - ul .about-bullets
    - li: Get 30% discount on initial cloud infrastructure scoping
    - li: Grow and connect with dedicated certified engineering pods
    - li: Guaranteed 15-minute SLA on critical production incidents
  - a: + OUR SERVICES → #domains
- section #faq .security-faq-section
  - h2: Every solid answer about cybersecurity & IT solutions
  - p: Get clarity on our 24/7 security operations, migration risk mitigation, and co-managed engineering models.
  - button: What are common cyber threats Novastack detects and neutralizes?
  - button: How does Novastack ensure zero downtime during cloud migrations?
  - button: Can your engineers co-manage infrastructure with our existing internal IT team?
  - button: What are your response time commitments and SLA guarantees?
- section #calculator .calculator-section
  - h2: Estimate your custom IT solution in seconds
  - p: Adjust scale parameters below to preview transparent monthly infrastructure and managed support rates.
  - button: Single Cloud (AWS/Azure)
  - button: Multi-Cloud Hybrid
  - button: On-Premises High Security
  - button: Business EDR & Backup
  - button: Full 24/7 SOC & Zero Trust
  - button: Continuous Pen-Test + Compliance
  - button: Lock In Estimate →
- button: + LET'S TALK
- section #process .process-section
  - h2: A proven 3-step operational framework
  - p: Predictable delivery from preliminary discovery audit to production cutover.
  - h3: Give us data details
  - p: We execute an exhaustive architecture and security audit, reviewing cloud configs, vulnerability logs, and technical debt.
  - h3: Select your service
  - p: Receive a transparent technical blueprint specifying exact milestones, cloud cost guarantees, and formal SLA contractual terms.
  - h3: Get solid solution
  - p: Our certified engineering pods deploy your infrastructure with automated tests, transitioning into 24/7 proactive management.
- section #insights .insights-section
  - h2: Blog and technical insights
  - p: Deep-dives on cloud architecture, cybersecurity defense tactics, and modern DevOps from our senior engineering team.
  - h3: 10 Critical Zero Trust Milestones for Enterprise Cloud
  - a: READ MORE → → #hero
  - h3: Building Multi-Region Kubernetes Failover on AWS
  - a: READ MORE → → #hero
  - h3: Deploying Private Enterprise RAG Without Data Leakage
  - a: READ MORE → → #hero
- footer #contact .site-footer
  - a: info@Novastack.com → mailto:contact@novastack.example
  - p: Empowering global technology teams with autonomous cloud infrastructure, 24/7 SOC operations, and enterprise software engineering.
  - ul .footer-col-links
    - li: Cloud & DevOps
    - li: Cybersecurity SOC
    - li: AI & Data Lakehouse
    - li: Software Modernization
    - li: Managed IT Desk
    - li: SD-WAN Networks
  - ul .footer-col-links
    - li: About Us
    - li: Cost Calculator
    - li: Our Process
    - li: Security FAQ
    - li: Tech Blog
    - li: Privacy Policy
- button: ×
- h3: Request IT Solution Scope
- p: Connect directly with a Principal Cloud & Security Architect. We reply within 2 business hours.
- form #quoteForm
  - label: Full Name
  - label: Work Email
  - label: Primary IT Domain Required
  - option: Cloud Architecture & Multi-Cloud
  - option: Cybersecurity & 24/7 Managed SOC
  - option: DevOps, Platform & Kubernetes
  - option: AI, GenAI & Data Lakehouse
  - option: Enterprise Software Modernization
  - option: 24/7 Managed IT Operations
  - option: Virtual CIO & Strategy
  - button: Request Engineering Scope →
- h4: Request Dispatched!
- p: Thank you! A dedicated Principal IT Solutions Architect has been assigned to your inquiry and will reach out shortly.
- button: Return to Novastack

## Images in the page
- `./assets/novastack-logo.svg — Novastack`
- `./assets/hero-tech.jpg — Novastack technical engineering team`
- `./assets/team-collab.jpg — Novastack technical engineering team collaboration`
- `./assets/consultation-woman.jpg — Novastack Cybersecurity Lead Consultation`
- `./assets/devs-desk.jpg — Developer team analyzing zero trust architecture`
- `./assets/code-review.jpg — Engineers conducting Kubernetes cluster code review`
- `./assets/presenter-stage.jpg — Executive briefing on GenAI enterprise lakehouse`
- `./assets/novastack-logo-white.svg — Novastack`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #usersSlider
- input[text] #clientName placeholder='e.g. David Vance'
- input[email] #clientEmail placeholder='david@company.com'
- select #clientDomain

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/code-review.jpg`
- `assets/consultation-woman.jpg`
- `assets/devs-desk.jpg`
- `assets/hero-tech.jpg`
- `assets/novastack-logo-white.svg`
- `assets/novastack-logo.svg`
- `assets/presenter-stage.jpg`
- `assets/team-collab.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
