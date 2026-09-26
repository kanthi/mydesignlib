# Rebuild prompt — Praxis (`praxis`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/praxis/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Unified clinical communications and patient inbox platform. Features an interactive 3-column patient triage inbox, custom IVR healthcare phone tree simulator, AI voicemail audio waveform player, EHR 3D perspective grid, dark midnight doctor testimonial showcase, and transparent 3-tier pricing switcher.

## Title
Praxis — Run Your Practice From One Calm Inbox

## Description meta
Phone, text, fax, video visits, and patient communication unified in one HIPAA-compliant platform. Launch your clinical practice in minutes. No sales calls, BAA included automatically.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --bg-page: #FAFBF9;
  --bg-surface: #FFFFFF;
  --bg-subtle: #F3F5F2;
  --bg-inset: #EAEDE8;
  --ink-primary: #111827;
  --ink-secondary: #4B5563;
  --ink-muted: #6B7280;
  --ink-light: #9CA3AF;
  --border-subtle: #E5E7EB;
  --border-medium: #D1D5DB;
  --cobalt: #0066FF;
  --cobalt-dark: #0052CC;
  --cobalt-light: #EBF3FF;
  --cobalt-glow: rgba(0, 102, 255, 0.25);
  --mint: #059669;
  --mint-light: #ECFDF5;
  --mint-border: #A7F3D0;
  --amber: #D97706;
  --amber-light: #FEF3C7;
  --dark-navy: #0B131F;
  --dark-navy-surface: #131E2E;
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-pill: 9999px;
  --shadow-sm: 0 1px 3px rgba(17, 24, 39, 0.05);
  --shadow-md: 0 8px 24px rgba(17, 24, 39, 0.06);
  --shadow-lg: 0 16px 40px rgba(17, 24, 39, 0.08);
  --shadow-glow: 0 12px 36px rgba(0, 102, 255, 0.22);
  --transition-smooth: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: See plans → → #pricing
- nav .site-nav
  - a: praxis → #
  - ul .nav-links
    - li: Product
    - li: Integrations
    - li: Clinics
    - li: Pricing
    - li: FAQ
  - a: Log in → #pricing
  - a: Start Free → #pricing
- header .hero-section
  - h1: Run your practice from one calm inbox.
  - p: Phone, text, fax, video visits, and patient communication unified in one platform. Set it up yourself in 15 minutes. No sales call, no separate BAA to chase.
  - form .hero-signup-box
    - button: Start for Free
  - ul .sidebar-nav-list
    - li: All Inboxes 7
    - li: Triage Queue 3
    - li: Voicemails 2
    - li: e-Fax Direct 0
    - li: Scheduled 12
- section .trust-section
- section .quote-spotlight
  - p: “Our staff couldn’t support our call volume. Praxis has given us the ability to communicate more efficiently with patients, even with a lean team and heavy triage surges.”
- section #features .features-section
  - h2: Everything your clinic phone used to miss, in one place.
  - p: One inbox for every patient call, text, and voicemail. Calls route where they need to go, and nothing sits unanswered on a sticky note.
  - a: Explore All Capabilities → #pricing
  - h3: One inbox, every channel
  - p: Calls, two-way texts, faxes, video visits, and secure messaging all thread into one clean patient timeline. Never piece together a history across four siloed apps again.
  - h3: A phone system built for healthcare
  - p: Smart routing trees, professional clinic lines, and automated on-call schedules. Protect your physicians' personal cell phone numbers forever.
  - button: Simulate Call
  - h3: Voicemail that transcribes itself
  - p: Every clinical voicemail is transcribed and summarized automatically. Skip tedious dial-in menus. Get the urgent callback reason in 5 seconds.
  - button: Listen
- section #ehr .ehr-section
  - h2: Works alongside the tools you already rely on.
  - p: Unlike legacy suites that demand you abandon your existing practice software, Praxis integrates seamlessly beside your current EHR. No messy data migration, no staff retraining. Just one calm, unified communications layer.
  - ul
    - li: Bi-directional contact & chart sync
    - li: Automatic communication log export to patient file
    - li: Custom webhooks & FHIR REST API available
- section #testimonials .midnight-testimonial-section
  - blockquote: “Our clinicians used to spend two hours every night answering voicemails and piecing together SMS records. With Praxis, patient communication is resolved live during clinic hours. We reclaimed our evenings.”
- section #pricing .pricing-section
  - h2: A transparent plan for every practice stage.
  - p: From solo providers getting off personal cell phones to multi-location health networks. HIPAA compliance and BAA included on every plan. No sales friction.
  - button: Monthly Billing
  - button: Annual Billing -25%
  - h3: Solo Practice
  - p: For solo providers getting off personal cell numbers and Google Voice.
  - ul .pricing-feature-list
    - li: Automatic HIPAA BAA included
    - li: Dedicated clinic phone & fax line
    - li: Two-way patient SMS & MMS
    - li: AI voicemail transcription
  - a: Start 14-Day Free Trial → #
  - h3: Clinical Team
  - p: For growing practices that need call routing trees and automated staff handoffs.
  - ul .pricing-feature-list
    - li: Everything in Solo Practice, plus:
    - li: Custom multi-tier phone menus (IVR)
    - li: Automated after-hours triage escalation
    - li: EHR integration & webhook access
    - li: Internal clinician notes & mentions
  - a: Start 14-Day Free Trial → #
  - h3: Health Network
  - p: For multi-provider groups managing complex triage across geographic sites.
  - ul .pricing-feature-list
    - li: Everything in Clinical Team, plus:
    - li: Multi-location routing permissions
    - li: Dedicated onboarding specialist
    - li: Custom SLA & 24/7 priority clinical support
  - a: Contact Clinical Advisory → mailto:sales@praxis.example
- section #faq .faq-section
  - h2: Questions before you get started.
  - p: Answers to common questions about HIPAA compliance, number porting, and staff setup.
  - button: Is my HIPAA BAA really included automatically?
  - button: Can we keep our existing practice phone numbers?
  - button: Does this replace our EHR or integrate beside it?
  - button: How fast can our clinical staff be trained?
- section .cta-banner-section
  - h2: Ready to run your practice from one calm inbox?
  - p: Join thousands of clinics that eliminated phone queues, safeguarded clinician peace of mind, and modernized patient care.
  - form .cta-banner-form
    - button: Get Started Now
- footer .site-footer
  - p: Unified communications infrastructure engineered for modern clinical practices, physicians, and care teams.
  - ul .footer-col-links
    - li: Unified Inbox
    - li: Clinical Phone Tree
    - li: AI Voicemail
    - li: EHR Integrations
  - ul .footer-col-links
    - li: HIPAA Security
    - li: BAA Guarantee
    - li: SOC-2 Type II
    - li: Audit Trails
  - ul .footer-col-links
    - li: About Us
    - li: care@praxis.example
    - li: Careers
    - li: Privacy Policy

## Images in the page
- `assets/doctor-portrait.jpg — Dr. Althea Thorne, clinic director`

## Fields
Keep these controls, including ids and placeholders.
- input[email] placeholder='doctor@practice.example'
- input[text] placeholder='Reply via HIPAA Secure SMS...'
- input[email] placeholder='Enter your work email...'

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/doctor-portrait.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
