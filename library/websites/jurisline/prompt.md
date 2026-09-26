# Rebuild prompt — Jurisline (`jurisline`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/jurisline/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Autonomous AI client operations & voice intake for law firms: porcelain & forest slate split canvas, interactive browser dashboard, live audio visualizer simulator, and firm ROI model.

## Title
Jurisline — AI Client Operations Infrastructure for Law Firms

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --color-canvas-light: #FAF9F5;
  --color-surface-light: #FFFFFF;
  --color-surface-subtle: #F3F2EB;
  --color-canvas-dark: #16241E;
  --color-surface-dark: #1D2F27;
  --color-surface-dark-alt: #243B30;
  --color-card-dark: #192921;
  --color-ink-primary: #151C18;
  --color-ink-secondary: #5C645F;
  --color-ink-muted: #8E9892;
  --color-ink-light: #F3F5F2;
  --color-ink-light-muted: #9EB0A4;
  --color-accent-lime: #D2EB36;
  --color-accent-lime-hover: #E0F548;
  --color-accent-forest: #1D2D27;
  --color-accent-forest-hover: #273D35;
  --color-border-light: rgba(21, 28, 24, 0.08);
  --color-border-subtle: rgba(21, 28, 24, 0.05);
  --color-border-dark: rgba(255, 255, 255, 0.08);
  --color-border-dark-hover: rgba(255, 255, 255, 0.16);
  --color-badge-green: #E8F7EE;
  --color-badge-green-txt: #15803D;
  --color-badge-amber: #FEF9C3;
  --color-badge-amber-txt: #A16207;
  --color-badge-blue: #E0F2FE;
  --color-badge-blue-txt: #0369A1;
  --color-badge-red: #FEECEB;
  --color-badge-red-txt: #DC2626;
  --font-serif: 'Newsreader', Georgia, serif;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 6px;
  --radius-btn: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 12px 28px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 24px 60px rgba(0, 0, 0, 0.12);
  --shadow-dark: 0 24px 60px rgba(0, 0, 0, 0.35);
  --transition-fast: 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-smooth: 0.32s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .site-header
  - a: jurisline → #
  - ul .nav-links
    - li: Products
    - li: How it works
    - li: Voice Simulator
    - li: ROI Calculator
    - li: Integrations
    - li: Security
    - li: Pricing
  - button: Login
  - button: Book a demo
- main
  - section .hero-section
    - h1: From First Call To Closed Case
    - p: Every call answered. Every case moving. Every lead worked. Jurisline is the AI layer that runs your firm's client operations end to end.
    - button: Book a demo
    - button: Call a live agent
    - p: “Jurisline handled all our hassle and we were able to focus on the courtroom rather than the managerial part.”
    - ul .dash-nav-list
      - li: Overview
      - li: Conversations
      - li: Leads
    - ul .dash-subnav-list
      - li: ♡ Revive
    - ul .dash-nav-list
      - li: Cases
    - ul .dash-subnav-list
      - li: ⊞ Client health
      - li: ↗ Upload links
    - ul .dash-nav-list
      - li: Automations
    - h2: Overview
    - p: Calls, leads and case activity at a glance
    - button: Last 30 days
    - button: Export report
    - h3: Call activity
    - p: 70 Total calls +12%
    - button: 7 days
    - button: 30 days
    - button: 3 months
    - h4: Recent conversations
    - a: View all → → #how-it-works
    - table .activity-table
      - th: Caller
      - th: Channel
      - th: Outcome
      - th: Duration
      - th: Time
      - td: Estate-planning inquiry — newlywed couple
      - td: Inbound
      - td: Successful
      - td: 3:19
      - td: 5 hours ago
      - td: Wrong number — caller was trying to reach another firm
      - td: Inbound
      - td: Unsuccessful
      - td: 0:29
      - td: 15 hours ago
      - td: Commercial breach of contract — logistics provider
      - td: Inbound
      - td: Consultation Booked
      - td: 4:42
      - td: 1 day ago
  - section #how-it-works
    - h2: Where High-Value Retainers Disappear
    - p: Law firms spend thousands on client acquisition only to leak 40% of their pipeline through delayed callbacks, associate phone tag, and manual conflict checks.
    - h3: The 15-Minute Rule
    - p: 82% of prospective clients hire the first competent law firm that speaks with them. When calls roll over to voicemail or generic answering desks, they dial your closest competitor immediately.
    - h3: Associate Phone Tag
    - p: High-billing associates lose 12+ hours each week screening unqualified leads, chasing callback schedules, and repeating boilerplate firm disclosures before knowing if a case meets threshold.
    - h3: 4-Hour Database Lag
    - p: Manually cross-referencing party names against adverse client registries in Clio or Filevine slows down client retention. Jurisline performs instant live conflict clearance in 340 milliseconds.
  - section
    - h2: End-to-End Client Operations
    - p: From the instant a phone rings to executed engagement letter and retainer deposit, Jurisline coordinates your intake workflow with institutional precision.
    - h3: Empathetic Legal Voice Agent
    - p: Trained on legal procedure, jurisdictional statute limitations, and state bar ethical boundaries. Our conversational voice models speak with professional composure, triage urgency, and collect vital facts.
    - h3: Adverse Party Conflict Check
    - p: As the caller speaks, Jurisline queries your practice management system in real time. Adverse parties, co-defendants, and past representations are checked before any privileged facts are exchanged.
    - h3: Direct Retainer & Calendar Booking
    - p: Qualified prospects are immediately booked onto the appropriate partner's calendar. Jurisline auto-generates custom engagement letters, collects e-signatures, and captures consultation fees via LawPay.
  - section #voice-simulator .simulator-section
    - h3: Experience Jurisline Live
    - p: Listen to our autonomous voice agent handle high-stakes intake scenarios in real time.
    - button: Personal Injury
    - button: Commercial Dispute
    - button: Estate Planning
    - p: “Hi, I was involved in a serious commercial truck accident on I-90 yesterday. The other driver ran a red light, and I have neck injuries and extensive vehicle damage. I need immediate counsel.”
    - p: “I'm very sorry to hear that, Robert. First, please ensure you've received all necessary medical attention. I am noting the incident on I-90. Let me confirm the opposing carrier name so we can verify there are no representation conflicts with our partners.”
  - section #calculator .calculator-box
    - h3: Calculate Your Firm's Recoverable Retainers
    - p: Adjust your monthly intake metrics to see how much billable case revenue Jurisline prevents from leaking to competitors.
    - p: Based on a benchmark 24% increase in speed-to-lead retention across 200+ partner law practices.
    - button: Deploy Jurisline for Your Practice
  - section #integrations .integrations-wrap
    - h2: Seamless Integration with Your Legal Stack
    - p: Jurisline connects directly to your existing practice management software, calendar, adverse party databases, and billing processors in minutes.
    - h4: Clio Manage & Grow
    - p: Two-way matter & contact synchronization
    - h4: Filevine
    - p: Live project intake & phase triage
    - h4: MyCase
    - p: Instant lead creation & conflict logs
    - h4: Smokeball
    - p: Automatic billable activity recording
    - h4: DocuSign & PandaDoc
    - p: Instant e-retainer agreements
    - h4: LawPay
    - p: Compliant trust deposit processing
    - h4: Salesforce Legal
    - p: Enterprise multi-office CRM pipelines
    - h4: Custom Webhooks & API
    - p: Full REST API & Zapier endpoints
  - section #security
    - h2: Built for Legal Confidentiality
    - p: Engineered specifically to satisfy attorney-client privilege, state ethics opinions, and strict regulatory standards.
    - h3: ABA Model Rule 1.6 Compliant
    - p: Strict confidentiality safeguards ensure privileged client disclosures are isolated, encrypted, and never exposed to cross-tenant models.
    - h3: Zero Model Training
    - p: Your firm's audio recordings, client intake transcripts, and matter documents are never used to train public LLMs. Your data remains strictly firm property.
    - h3: SOC 2 Type II & HIPAA Ready
    - p: Continuous third-party security audits, custom Business Associate Agreements (BAAs), and end-to-end 256-bit encryption in transit and at rest.
  - section .comparison-section
    - h2: How Jurisline Compares
    - p: Why leading managing partners are replacing legacy call centers with autonomous legal intelligence.
    - table .comp-table
      - th: Capability
      - th: Jurisline AI Infrastructure
      - th: Legacy Answering Service
      - th: In-House Receptionist
      - td: Response Speed
      - td: Instant (Sub-second pickup)
      - td: 3 to 8 rings (frequent hold)
      - td: Limited by active line
      - td: Availability
      - td: 24/7/365 Unlimited concurrency
      - td: 24/7 (Surcharged after hours)
      - td: 8:30 AM - 5:00 PM weekdays
      - td: Conflict of Interest Clearance
      - td: Automated in 340ms via CRM API
      - td: Impossible (cannot access firm CRM)
      - td: Manual lookup (2-4 hours)
      - td: Direct Retainer Generation
      - td: Dispatches DocuSign & LawPay in-call
      - td: Takes paper message only
      - td: Requires partner review first
      - td: Legal Terminology & Statute Triage
      - td: Trained on state-specific legal nuances
      - td: Non-legal generalist operators
      - td: High variance / turnover risk
  - section
    - h2: Endorsed by Managing Partners
    - p: Hear from practices that scaled their retainer volume without expanding overhead.
    - p: “In personal injury, speed is everything. We recovered $480,000 in retainers our first quarter just by capturing weekend and late-night accident callers before they dialed another firm.”
    - p: “The automated conflict clearance is a masterpiece. It queries our Clio adverse party register before the caller even finishes explaining their dispute. Our associates are completely liberated from phone tag.”
    - p: “Our high-net-worth estate clients demand immediate, discreet responsiveness. Jurisline's voice demeanor is so composed and professional that our clients assume she is our senior director of intake.”
  - section #pricing
    - h2: Transparent Practice Tiers
    - p: Every plan includes unlimited conflict checks, custom voice personalization, and full CRM integration.
    - ul .tier-feature-list
      - li: Up to 150 voice intake minutes/mo
      - li: Clio / Filevine / MyCase sync
      - li: Automated adverse conflict checks
      - li: Calendar scheduling & SMS alerts
    - button: Select Boutique
    - ul .tier-feature-list
      - li: Up to 500 voice intake minutes/mo
      - li: Automatic DocuSign retainer generation
      - li: LawPay consultation fee capture
      - li: Dedicated legal prompt engineering
    - button: Select Growth
    - ul .tier-feature-list
      - li: Unlimited intake minutes & lines
      - li: Custom BAA & on-prem database sync
      - li: Multi-office branch routing rules
      - li: 24/7 SLA & dedicated solutions partner
    - button: Contact Enterprise
  - section .faq-wrap
    - h2: Frequently Asked Questions
    - p: Everything you need to know about compliance, implementation, and operations.
    - button: Does Jurisline provide legal advice to callers?
    - p: No. Jurisline operates strictly as an administrative intake layer and non-attorney legal representative under your firm's supervision, fully compliant with ABA Model Rule 5.3 (Responsibilities Regarding Nonlawyer Assistance). It asks screening questions, checks facts, and gathers signatures without forming unauthorized attorney-client relationships.
    - button: How long does onboarding and CRM integration take?
    - p: Standard setup takes less than 48 hours. Our legal engineering team connects your Clio, Filevine, or Smokeball instance, imports your conflict database, and maps your custom intake intake questions before conducting rigorous live test calls.
    - button: Can we customize the voice tone and persona?
    - p: Yes. You can select from dozens of executive voice models, modulate speaking pace, choose empathetic vs formal cadences, and dictate strict firm pronunciation guidelines for partner surnames and local court jurisdictions.
    - button: What happens if an adverse conflict of interest is found?
    - p: Jurisline politely halts the intake before receiving privileged fact patterns, states that the firm cannot represent the matter due to existing client commitments, and logs the inquiry as a conflict flag in your CRM.
  - section .cta-banner
    - h2: Never Lose Another High-Value Retainer to a Busy Signal
    - p: Deploy the autonomous intake layer that answers every call, clears conflicts instantly, and signs retainers while you litigate.
    - button: Book a 20-minute firm walkthrough
    - button: Listen to live voice samples
- footer .site-footer
  - h3: jurisline
  - p: Autonomous client operations and AI voice infrastructure built exclusively for ambitious law practices.
  - h4: Platform
  - ul .footer-links
    - li: Voice Intake Agent
    - li: Conflict Screening
    - li: Retainer Dispatch
    - li: Clio & Filevine Sync
    - li: ROI Calculator
  - h4: Practice Areas
  - ul .footer-links
    - li: Personal Injury & Tort
    - li: Commercial Litigation
    - li: Estate & Wealth Planning
    - li: Corporate & Transactions
    - li: Family Law & Custody
  - h4: Offices & Contact
  - ul .footer-links
    - li: New York · 445 Park Ave, NY
    - li: San Francisco · 555 Mission St, CA
    - li: London · 100 Bishopsgate, EC2N
    - li: contact@jurisline.example
    - li: +1 (800) 555-0199
- button: ×
- h3: Schedule Your Firm Consultation
- p: See how Jurisline integrates with your current practice management software in a live 20-minute tailored demonstration.
- form .modal-form
  - label: Managing Attorney / Partner Name
  - label: Law Firm Name
  - label: Primary Practice Management CRM
  - option: Select your platform...
  - option: Clio Manage / Clio Grow
  - option: Filevine
  - option: MyCase
  - option: Smokeball
  - option: Salesforce Legal
  - option: Other / Custom Database
  - label: Work Email
  - button: Confirm Consultation Request

## Images in the page
- `assets/vance.jpg — Eleanor Vance`
- `assets/vance.jpg — Amy Lina`
- `assets/thorne.jpg — Marcus Thorne`
- `assets/patel.jpg — Priya Patel`

## Fields
Keep these controls, including ids and placeholders.
- input[range] #callsRange
- input[range] #retainerRange
- input[text] placeholder='e.g. Eleanor Vance, Esq.'
- input[text] placeholder='e.g. Vance & Sterling LLP'
- select
- input[email] placeholder='partner@firmname.com'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/patel.jpg`
- `assets/thorne.jpg`
- `assets/vance.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
