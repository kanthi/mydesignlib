# Rebuild prompt — Portico (`portico`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/portico/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
ISO 27001 as a sales door: ice-wash hero, ARR-stage trigger rail from $1M to enterprise, without/with impact split, and a live compliance ROI calculator.

## Title
Portico — ISO 27001 as the door to enterprise deals

## Description meta
The ISO 27001 program that gets B2B teams through Fortune-class RFPs and European market gates — with a live ROI model on the page.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Sora:wght@500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #F5F8FC;
  --surface-paper: #FFFFFF;
  --surface-wash-a: #E4F1FF;
  --surface-wash-b: #F7FBFF;
  --text-primary: #0E1520;
  --text-secondary: #5C6673;
  --text-faint: #8B95A3;
  --text-on-action: #FFFFFF;
  --border-default: #E3EAF2;
  --action-primary: #1B5CFF;
  --action-primary-hover: #154EDB;
  --action-soft: #E8F0FF;
  --status-good: #1B8A5C;
  --status-danger: #C63B3B;
  --font-display: "Sora", "Helvetica Neue", sans-serif;
  --font-body: "IBM Plex Sans", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.35rem, 5.4vw, 3.65rem);
  --text-3xl: clamp(1.65rem, 3vw, 2.25rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.72rem;
  --leading-display: 1.08;
  --leading-body: 1.55;
  --tracking-display: -0.038em;
  --section-y: clamp(4.25rem, 9vw, 6.75rem);
  --wrap: min(1120px, 100% - 2.5rem);
  --radius-card: 20px;
  --radius-well: 14px;
  --radius-input: 12px;
  --radius-chip: 12px;
  --radius-pill: 999px;
  --shadow-card: 0 18px 50px rgba(14, 21, 32, 0.08);
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-header
  - a: Portico → #top
  - nav #nav-links .nav-links “Primary”
    - a: Home → #top
    - a: Product → #product
    - a: Resources → #roi
    - a: Cases → #impact
    - a: Company → #company
  - button: Sign in
- main #main
  - section #top .hero
    - h1: ISO 27001: your passport to global enterprise deals
    - p: The control program that opens Fortune-class RFPs and European market gates — without a twelve-month fire drill.
    - a: Calculate your ROI → #roi
    - article .stat
      - p: of EU enterprises require ISO 27001 on the RFP
    - article .stat
      - p: average deal size once the certificate is in the pack
    - article .stat
      - p: time with Portico, from scope to issued certificate
  - section #product
    - header .sec-head
      - h2: When the certificate becomes the deal
      - p: Put the trigger on every stage — not a PDF after the first lost RFP.
    - p: Start the ISO 27001 program at $3M ARR to sit audit by $5M, before enterprise conversations intensify.
    - article .stage
    - article .stage
    - article .stage
    - article .stage
    - article .stage
    - article .stage
  - section #impact
    - header .sec-head
      - h2: What the certificate actually changes
      - p: Same sales team. Different answers in the security appendix.
    - article .impact-card
      - ul
        - li: Locked out of 40% of enterprise RFPs at the first filter
        - li: Six-month security reviews on every late-stage deal
        - li: Limited to regional markets that will take a SOC letter
    - article .impact-card.with
      - ul
        - li: Automatic RFP qualification where the certificate is required
        - li: Two-week cycles with evidence already mapped to controls
        - li: EU and Fortune procurement without a new binder each time
    - blockquote: “We were losing the last two weeks of every enterprise cycle to a questionnaire. The certificate did not make us more secure overnight — it made the deal movable.” Nia Calder, VP Sales, Northfold
  - section #roi
    - header .sec-head
      - h2: Calculate your compliance ROI
      - p: Model the pipeline you cannot enter until the certificate is in the pack.
    - form #roi-form .calc-form
      - h3: Company metrics
      - label: Team size 140
      - label: Average closed deal $85,000
      - label: Sales cycle length 6 months
      - label: Target markets
      - label: US
      - label: EU
      - label: Healthcare
      - label: Financial
      - button: Calculate ROI
  - section
    - header .sec-head
      - h2: How the program actually runs
      - p: Four steps, in order. We do not skip evidence to “look ready.”
    - ol .steps
      - li: 01 Scope the ISMS Name the systems in the certificate, the people who own them, and the markets you are trying to enter.
      - li: 02 Map the controls Annex A against what you already do. Gaps get an owner and a date, not a slide.
      - li: 03 Collect evidence Tickets, configs, and access reviews land in the binder as the work happens — not the week before audit.
      - li: 04 Sit the audit Stage 1 and Stage 2 with a named auditor. You keep the workspace after the certificate is issued.
  - section #faq
    - header .sec-head
      - h2: Frequently asked questions
    - summary: How long does ISO 27001 actually take?
    - p: Teams that already have basic access control and vendor tracking typically sit Stage 2 in four to six months. Greenfield programs run closer to eight. The calculator uses your cycle length to show review time you get back, not a guarantee on the certificate date.
    - summary: Do we still need SOC 2 if we hold ISO 27001?
    - p: US enterprise buyers often want both. Portico maps overlapping evidence once. ISO 27001 is the gate for EU and many Fortune RFPs; SOC 2 remains the letter US security teams recognize on sight.
    - summary: Who owns the work inside our company?
    - p: A named internal owner — usually operations or a founding engineer — plus one hour a week from each control owner. We run the binder, the reminders, and the auditor thread. You do not hire a full-time GRC lead to start.
    - summary: What does the 14-day workspace include?
    - p: Scope worksheet, control map against Annex A, and a first evidence request list. No credit card. If you book a consult we will load your current ARR stage into the same rail you see above.
    - summary: Can we start before $3M ARR?
    - p: Yes, if you are already selling into EU enterprises or handling health/financial data. The rail is a pattern, not a lock. Starting earlier costs less than losing the first €10M RFP.
  - section #company .close
    - h2: Join 400+ teams who stopped stalling deals for a questionnaire
    - a: See your roadmap → #roi
    - button: Book a consult
    - button: Start 14-day trial
    - p: No credit card. Sample template — hello@portico.example
- footer
  - a: Portico → #top
  - p: ISO 27001 programs for teams that need the certificate to enter the room — not a binder for the shelf.
  - h3: Frameworks
  - a: ISO 27001 → #product
  - a: GDPR evidence → #product
  - a: SOC 2 overlap → #product
  - a: HIPAA mapping → #product
  - h3: Product
  - a: ROI calculator → #roi
  - a: Deal impact → #impact
  - a: Program FAQ → #faq
  - a: 14-day workspace → #company
  - h3: Company
  - a: About → #company
  - a: Guide → #faq
  - a: Cases → #impact
  - a: hello@portico.example → mailto:hello@portico.example
- dialog #consult
  - h2: Book a consult
  - p: Tell us the ARR gate you are hitting. We will load it onto the rail.
  - form #consult-form .stack
    - label: Name
    - label: Work email
    - label: Current stage $1M ARR $2M ARR $3M ARR $4M ARR $5M ARR Enterprise deals
    - label: What is stalling deals?
    - button: Cancel
    - button: Send request

## Fields
Keep these controls, including ids and placeholders.
- input[range] #size
- input[range] #deal
- input[range] #cycle
- input[checkbox] name=m
- input[text] name=name
- input[email] name=email placeholder='you@company.example'
- select name=stage
- textarea name=note

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
