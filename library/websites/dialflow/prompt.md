# Rebuild prompt — Dialflow (`dialflow`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/dialflow/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
No-code AI voice telephony & workflow builder — interactive node studio canvas, live softphone simulator, multi-turn dialogue feed, bento grid, and ROI calculator.

## Title
Dialflow — No-Code AI Voice Agents & Telephony Workflow Automation

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  /* Surface Depths */
  --bg-page: #f8faf9;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #ffffff;
  --bg-surface-subtle: #f1f5f3;
  --bg-surface-dark: #071e16;
  --bg-surface-dark-card: #0c2d22;
  --bg-glass: rgba(255, 255, 255, 0.88);
  --bg-glass-dark: rgba(7, 30, 22, 0.92);
  /* Brand Accents */
  --emerald-primary: #00d26a;
  --emerald-hover: #00ba5e;
  --emerald-dark: #064e3b;
  --emerald-forest: #083b2d;
  --emerald-surface: #e8f9f0;
  --emerald-glow: rgba(0, 210, 106, 0.28);
  --mint-light: #d1fae5;
  --mint-badge: #a7f3d0;
  --lavender-tint: #f3e8ff;
  /* Borders & Dividers */
  --border-subtle: rgba(15, 23, 42, 0.06);
  --border-standard: rgba(15, 23, 42, 0.1);
  --border-card: rgba(0, 210, 106, 0.15);
  --border-accent: rgba(0, 210, 106, 0.4);
  --border-dark: rgba(255, 255, 255, 0.12);
  /* Typography & Colors */
  --text-heading: #0f172a;
  --text-primary: #1e293b;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --text-faint: #94a3b8;
  --text-on-dark: #ffffff;
  --text-on-dark-muted: #a7f3d0;
  --text-emerald: #059669;
  /* Semantic Status */
  --status-active: #10b981;
  --status-pending: #f59e0b;
  --status-alert: #ef4444;
  --status-info: #3b82f6;
  /* Typography */
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'SF Mono', monospace;
  /* Spacing Scale */
  --space-2xs: 0.25rem;
  --space-xs: 0.5rem;
  --space-sm: 0.75rem;
  --space-md: 1rem;
  --space-lg: 1.5rem;
  --space-xl: 2rem;
  --space-2xl: 3rem;
  --space-3xl: 4.5rem;
  --space-4xl: 6rem;
  /* Border Radii */
  --radius-xs: 6px;
  --radius-sm: 10px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
  /* Shadows */
  --shadow-subtle: 0 2px 8px rgba(15, 23, 42, 0.04);
  --shadow-card: 0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 10px -2px rgba(15, 23, 42, 0.02);
  --shadow-elevated: 0 25px 50px -12px rgba(15, 23, 42, 0.12), 0 8px 20px -4px rgba(15, 23, 42, 0.04);
  --shadow-glow: 0 12px 35px -5px rgba(0, 210, 106, 0.32);
  --shadow-dark: 0 25px 50px -12px rgba(0, 0, 0, 0.45);
  /* Layout */
  --container-max: 1240px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .header
  - a: Dialflow → #
  - ul .nav-links
    - li: Solution 📞 Inbound Call Routing Instant 24/7 lead capture ⚡ Outbound Lead Qualification Automated high-intent follow-up 🗓️ Appointment Scheduling Direct calendar synchronization
    - li: Workflow Builder
    - li: Integrations
    - li: Pricing
    - li: Resources
  - a: Login → #login
  - a: Free Trial → #builder
- main
  - section .hero-section
    - h1: Seamless, intelligent, and human-like AI calls Experience
    - p: Build a no-code AI phone call system with our autonomous voice agents: stop missing calls, automate qualifications, and connect directly to your CRM.
    - button: 🎙️ AI Assistant
    - button: 🔀 Automation
    - button: 🔗 Integrations
    - a: Get Started → #builder
    - a: Schedule a Demo → #demo-modal
    - button: Zoom: 100%
    - button: Test Run Flow
    - h4: Published Form Input (Web Form)
    - p: Captures inbound contact submissions from website landing page.
    - h4: Make Phone Call via AI Agent
    - p: Initiates ultra-low latency conversational voice qualification call.
    - h4: HubSpot & Calendar Booking
    - p: Updates deal status and invites calendar slot when interest is validated.
    - label: Selected Voice Persona
    - option: Sarah — Professional SDR (Warm / Fast)
    - option: Marcus — Real Estate Qualifier (Authoritative)
    - option: Elena — Dental Clinic Receptionist (Gentle)
    - label: Latency Optimization Mode
    - option: Turbo Stream (190ms - 240ms)
    - option: Balanced Fidelity (280ms)
    - label: Fallback Forwarding Phone
    - p: Route complex queries to human agents when sentiment or context demands it.
    - p: Workflow automation streamlines tasks, boosts efficiency, and eliminates busywork.
    - p: Create custom conversational AI voice agents effortlessly without code.
    - p: Launch in minutes with ready-made agent flows for sales, support, and booking.
  - section .social-proof-section
    - p: Trusted by 9,000+ high-growth businesses and modern teams worldwide
  - section #solutions .bento-section
    - h2: Powering teamwork simplify
    - p: Build a no-code AI phone call system with our AI voice agents: stop missing calls and start converting more leads with automated workflows.
    - h3: Automation
    - p: Workflow automation streamlines tasks, boosts efficiency, and triggers calls instantly on web form fills.
    - h3: Integrations
    - p: Third-party integrations streamline tasks, boosting workflow efficiency with zero custom code.
    - h3: Live Voice Agent
    - p: Deploy and test pre-trained voice agents directly from your browser in seconds.
    - button: Test Assistant
    - h3: Analytics Dashboard
    - p: Track performance, conversion rates, call durations, and conversational sentiment in real-time.
    - h3: Data in Palm of Hand
    - p: Keep your client data and pipeline stage progression organized automatically.
  - section .features-matrix-section
    - h2: Explore smart tools for your success
    - p: Explore smart tools designed to boost productivity, simplify tasks, and ensure seamless telephone automation.
    - h3: No-Code AI Voice
    - p: Create custom AI voice agents effortlessly without writing a single line of backend code.
    - h3: Real-Time Voice AI
    - p: Human-like conversational pacing with ultra-low latency sub-240ms speech synthesis.
    - h3: Inbound & Outbound
    - p: Automate support triage calls and run hyper-personalized outbound reactivation campaigns.
    - h3: CRM Integration
    - p: Sync conversations, sentiment scores, and customer data directly into HubSpot, Salesforce, or Zoho.
    - h3: Call Escalation
    - p: Route complex queries or agitated callers to human agents with full conversation summaries.
    - h3: Analytics Dashboard
    - p: Track performance, resolution rates, talk time, and agent sentiment scores on a single dashboard.
    - h3: Multilingual Support
    - p: Speak fluently with customers in 50+ languages with regional accents and localized idioms.
    - h3: Prebuilt Templates
    - p: Launch faster with ready-made agent workflows for appointment booking, real estate, and triage.
  - section .showcase-player-section
    - h2: Automate phone calls with the help of AI
    - p: Tailored voice playbooks designed for high-conversion industries. Listen to real conversational audio below.
    - button: Agencies
    - button: Real Estate
    - button: E-Commerce
    - button: Education
    - button: Finance
    - h3: Automate Client Discovery in seconds.
    - p: Experience natural turn-taking, interruption handling, and instant intent qualification without robotic delays.
    - p: Hi, I just submitted the form on your site. We need to handle around 10,000 qualification calls per month.
    - p: Hello! Thanks for reaching out. Yes, Dialflow easily scales to 10,000+ monthly calls with sub-250ms latency. Would you like to schedule a 15-minute technical demo tomorrow at 2 PM EST?
    - p: Tomorrow at 2 PM works great. Can you send the calendar invite to my email?
    - p: Done! I just synced your contact details to HubSpot and sent the Google Calendar invite. Have a wonderful day!
  - section .calculator-section
    - h2: Calculate your monthly voice savings
    - p: Traditional call centers charge $1.85 to $2.40 per minute. Dialflow delivers human-quality voice at just $0.09/min.
  - section #pricing .pricing-section
    - h2: Simple, predictable plans for every team
    - p: Start with a 14-day free trial. No credit card required.
    - h3: Starter
    - p: For small teams testing conversational voice automation.
    - ul .pricing-features-list
      - li: 500 call minutes / month
      - li: 2 concurrent lines
      - li: 3 custom voice personas
      - li: Web form & Zapier trigger
    - a: Start Free Trial → #builder
    - h3: Growth
    - p: For fast-scaling sales & customer service teams.
    - ul .pricing-features-list
      - li: 2,500 call minutes / month
      - li: 10 concurrent lines
      - li: Sub-240ms latency engine
      - li: HubSpot & Salesforce native sync
      - li: Human transfer escalation
    - a: Get Started with Growth → #builder
    - h3: Enterprise
    - p: For high-volume operations requiring dedicated telephony infrastructure.
    - ul .pricing-features-list
      - li: Unlimited minutes volume pool
      - li: Dedicated SIP Trunks & Custom Numbers
      - li: Custom Fine-Tuned Voice Models
      - li: SOC2 Type II & HIPAA Compliance
    - a: Contact Sales → #demo-modal
  - section #faq .faq-section
    - h2: Frequently Asked Questions
    - p: Everything you need to know about Dialflow AI voice agents.
    - button: How fast does the voice agent respond during a phone call?
    - button: Can the AI handle interruptions when a customer speaks over it?
    - button: Can I connect my existing phone numbers or Twilio SIP trunk?
    - button: How does Dialflow sync qualified lead data into my CRM?
  - section .cta-banner-section
    - h2: Start automating phone calls with AI today
    - p: Join 9,000+ businesses converting more leads, reducing call center costs, and delighting customers 24/7.
    - button: Get Started Free ↗
- footer .footer
  - a: Dialflow → #
  - p: No-code AI telephony and voice workflow automation platform for high-growth modern teams.
  - h4: Product
  - ul .footer-links
    - li: Workflow Studio
    - li: Voice Personas
    - li: SIP Trunking
    - li: Pricing
  - h4: Solutions
  - ul .footer-links
    - li: Lead Qualification
    - li: Support Triage
    - li: Appointment Booking
    - li: Survey Automation
  - h4: Company
  - ul .footer-links
    - li: Documentation
    - li: API Reference
    - li: Privacy Policy
    - li: Security & Trust

## Fields
Keep these controls, including ids and placeholders.
- select #inspectorVoiceSelect
- select
- input[text]
- input[range] #callVolumeSlider
- input[email] placeholder='Enter your work email...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
