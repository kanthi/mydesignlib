# Rebuild prompt — Kerf (`kerf`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Sales
- Folder: `library/websites/kerf/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Night manifesto for revenue judgment — editorial serif, live agent notes, stacked share chart, giant fading wordmark.

## Title
Share of account work by month

## Description meta
Kerf Yield keeps how your revenue team decides, then runs that judgment on every account. The model stays yours.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Sora:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Newsreader", "Iowan Old Style", Georgia, serif;
  --font-body: "Sora", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", ui-monospace, monospace;
  --surface-page: #121110;
  --surface-raised: #1c1b19;
  --surface-ink: #0b0b0a;
  --text-primary: #f2ede4;
  --text-secondary: #a39e94;
  --text-faint: #6e6a62;
  --border-default: rgba(242, 237, 228, 0.12);
  --action-primary: #f2ede4;
  --action-ink: #161513;
  --signal-live: #c4a574;
  --status-danger: #c45a3a;
  --text-display: clamp(2.75rem, 8vw, 5rem);
  --text-3xl: clamp(2rem, 4vw, 3rem);
  --text-xl: 1.25rem;
  --text-lg: 1.0625rem;
  --text-base: 1rem;
  --text-sm: 0.8125rem;
  --text-xs: 0.6875rem;
  --leading-body: 1.7;
  --section-y: clamp(5rem, 12vw, 8.5rem);
  --wrap: min(1080px, 100% - 2.5rem);
  --wrap-essay: min(720px, 100% - 2.5rem);
  --radius-card: 22px;
  --radius-well: 18px;
  --radius-pill: 999px;
  --shadow-island: 0 12px 40px rgba(0, 0, 0, 0.35);
  --dur: 220ms;
  --dur-hero: 760ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.32, 1.15, 0.42, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .island
  - a: Kerf → #top
  - nav .island-links “Primary”
    - a: Manifesto → #manifesto
    - a: In practice → #practice
    - a: FAQ → #faq
    - a: Walkthrough → #walkthrough
  - a: Log in → #walkthrough
  - a: Book a walkthrough → #walkthrough
  - button: Menu
- a: Manifesto → #manifesto
- a: In practice → #practice
- a: FAQ → #faq
- a: Log in → #walkthrough
- a: Book a walkthrough → #walkthrough
- main #top
  - section #hero-canvas .hero.hero-canvas
    - h1: The cut that stays
    - p: Systems that keep how your team decides, then run that judgment on every account.
    - a: Book a walkthrough → #walkthrough
    - a: Read the thesis → #manifesto
  - section #manifesto .manifesto-band
    - p: Companies are good at keeping what happened. Stages move. Rooms are logged. Notes are filed. The part that almost never survives is the reasoning — why this account, why this exception, why the team turned.
    - p: Outcomes get archived. Judgment walks out.
    - p: That is a strange loss. The best people on a revenue team are not valuable because they type faster. They are valuable because they can feel a stall two weeks early, or refuse a discount that would have closed a bad book. When they leave, the spreadsheet stays. The cut they made does not.
    - p: A system can learn from more than documents. It can learn from decisions, if those decisions happen every day, if the result can be measured, and if someone is willing to correct the next move. Revenue is one of the few rooms that already has all three.
    - p: Kerf Yield is the first product. It sits on every account, proposes the next cut, and waits. Approve it, edit it, or send it back. Each of those calls is a kerf — a groove left in the model. The model lives in your tenant. It is trained on your team, for your team, and it does not leave with anyone.
    - p: We do not think judgment becomes useful by making a larger model. We think it becomes useful when the best calls a company already makes are allowed to remain, and then to run while people sleep.
    - p: The world’s best judgment should not be limited to the people who hold it today.
    - p: Ready to see the groove?
    - a: Book a walkthrough → mailto:walkthrough@kerf.example
  - section #practice .practice
    - h2: Measured work. Sealed tenant.
    - p: See how Kerf Yield takes on account work over a year — and how the judgment that trains it never leaves the building.
    - article .plate
      - h3: Agents now carry more than half the account work.
      - ul .facts
        - li: 3.8M actions completed
        - li: $540M pipeline watched
        - li: 53% of work handled by agents
      - a: Book a walkthrough → #walkthrough
    - article .plate
      - h3: Your judgment trains your agents. Your data stays put.
      - ul .facts
        - li: Zero shared-model training
        - li: Audit line on every action
        - li: Sealed in the tenant, end to end
      - a: Book a walkthrough → #walkthrough
      - ul
        - li: Tenant-local modelHeld
        - li: Decision tracesYours
        - li: Action logComplete
        - li: Export on exitIntact
  - section #faq .faq
    - h2: Questions we hear before the first cut.
    - p: Ownership, coverage, and how the system learns without pooling anyone else’s book.
    - button: How can it learn from us without training on our data?
    - button: What does an agent on every account actually do?
    - button: Is this just another outbound sender?
    - button: Does this replace the desk?
    - button: What happens when a great rep leaves?
    - button: How fast does it show a mark?
    - button: Who owns the model?
    - button: How is this different from a general assistant?
- footer .foot
  - h2: The best judgment should keep cutting.
  - p: Kerf turns the calls your team already makes into intelligence that can be kept, shared, and recut.
  - a: Book a walkthrough → mailto:walkthrough@kerf.example
  - a: hello@kerf.example → mailto:hello@kerf.example
  - a: Terms → #faq
  - a: Privacy → #faq

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
