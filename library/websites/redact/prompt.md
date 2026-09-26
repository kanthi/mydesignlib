# Rebuild prompt — Redact (`redact`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/redact/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Privacy operations for counsel — paper desk, ink-orange accent, live audit cards, donut risk.

## Title
Redact — Continuous privacy operations for counsel

## Description meta
The desk that keeps vendors, findings, and jurisdictions current — a named reviewer on the file, not a stale audit PDF.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Schibsted+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #F4F4F1;
  --surface-paper: #FFFFFF;
  --surface-soft: #F7F7F4;
  --surface-ink: #171614;
  --text-primary: #161513;
  --text-secondary: #6B6963;
  --text-faint: #9A978F;
  --text-on-ink: #F4F4F1;
  --border-default: #E4E2DA;
  --action-primary: #E04E16;
  --action-hover: #C94412;
  --action-soft: #FDE8DC;
  --status-good: #2F8A54;
  --status-warn: #C97816;
  --status-danger: #C43A22;
  --font-display: "Schibsted Grotesk", "Helvetica Neue", sans-serif;
  --font-body: "Schibsted Grotesk", "Helvetica Neue", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.35rem, 5.2vw, 3.55rem);
  --text-3xl: clamp(1.7rem, 3vw, 2.35rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 0.975rem;
  --text-sm: 0.8125rem;
  --text-xs: 0.6875rem;
  --leading-display: 1.08;
  --leading-body: 1.55;
  --tracking-display: -0.034em;
  --section-y: clamp(4.25rem, 8vw, 6.5rem);
  --wrap: min(1080px, 100% - 2.5rem);
  --radius-card: 18px;
  --radius-well: 12px;
  --radius-pill: 999px;
  --shadow-desk: 0 22px 50px rgba(22, 21, 19, 0.08);
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .nav
  - a: Redact → #top
  - nav .nav-links “Primary”
    - a: Features → #features
    - a: How it works → #desk
    - a: Notes → #notes
    - a: Desk → #proof
  - a: Sign in → #closer
  - a: Talk to counsel → #closer
- a: Features → #features
- a: How it works → #desk
- a: Notes → #notes
- a: Desk → #proof
- a: Talk to counsel → #closer
- main #main
  - section .hero.wrap
    - h1: Continuous privacy operations for counsel
    - p: The desk keeps vendors, findings, and jurisdictions current — a named reviewer on the file, not a stale audit PDF.
    - a: Talk to counsel → #closer
    - a: See the desk → #desk
    - article .desk-card.card-score
    - article .desk-card.card-chart
    - article .desk-card.card-feed
      - ul .feed-list
        - li: New supplier, Lantern Cloud, discovered
        - li: HR privacy checklist needs review
        - li: HR privacy checklist has been reviewed
        - li: 12 more events
  - section .trust.wrap “Teams on the desk”
    - p: Trusted by counsel at companies that keep a live file
  - section #features .band.wrap
    - p: Features
    - h2: Collaborate and run privacy at scale
    - p: Work across teams, markets, and jurisdictions with one file that centralizes the desk — questions, incidents, and reports in place.
    - article .plate
      - h3: Privacy management platform
      - p: Queue every access request, deletion, and DPIA on one file.
      - p: Generate questions
    - article .plate.plate-ink
      - h3: Risk & incident tracking
      - p: Monitor privacy. Open a finding, assign a reviewer, close it with a trail.
    - article .plate
      - h3: Reports & insights
      - p: Compliance reports counsel can send without rebuilding the deck.
  - section #proof .band.wrap
    - p: Features
    - h2: Pain-free global privacy management
    - p: Prove the risk is down, then keep the file current — structured tools for teams that cannot pause for another annual review.
    - article .proof-card
      - h3: Actually reduce risk — and prove it
      - ul .legend
        - li: High risk
        - li: Medium risk
        - li: Low risk
      - p: Recent issues
      - h4: Consent record outdated
      - p: Legal team
      - h4: Data retention policy review
      - p: In progress
      - h4: Third-party vendor audit
      - p: Security
    - article .proof-card
      - h3: Confidently and continuously comply
      - p: Automated compliance workflow
      - p: Estimated completion: 2 hours
  - section #notes .band.wrap
    - p: Notes
    - h2: Learn how counsel run a live file
    - p: Field notes from desks that retired the annual PDF.
    - a: Guide · 14 min The complete guide to jurisdiction maps → #closer
    - a: Report · 2026 State of privacy operations 2026 → #closer
    - a: Playbook · Desk How to scale a review desk → #closer
  - section #numbers .band.wrap
    - p: Proof
    - h2: Trust in numbers
    - article .stat
    - article .stat
    - article .stat
  - section #quotes .band.wrap
    - p: Trust
    - h2: Companies that keep the file current
    - figure .quote
      - blockquote: We retired the annual PDF. The desk is the file now — counsel and security read the same queue.
      - figcaption: PS Priya SenHead of privacy, Valebrook
    - figure .quote
      - blockquote: A named reviewer on every finding ended the status meeting. We spend the hour on the two files that matter.
      - figcaption: JH Jonas HartSecurity counsel, Northspan
    - figure .quote
      - blockquote: Vendor reviews used to sit in mail. They close in the same week, with a trail the DPO can stand on.
      - figcaption: MV Mara VeldDPO, Halden
  - h2: Ready to run the desk properly?
  - p: Bring the last audit. We open a live file with counsel and security on the same queue.
  - a: Talk to counsel → mailto:hello@redact.example
  - a: See the desk → #desk
- footer .foot
  - p: Sample template · hello@redact.example
  - a: Redact → #top

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
