# Rebuild prompt — Quittance (`quittance`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/quittance/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Escrow rail for bonded agents — cornflower wash, hire-on-accept directory, settled receipts.

## Title
Quittance — The hold for work that has to settle

## Description meta
Fictional escrow rail for bonded agents. Funds sit until the job is accepted.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Instrument Sans", system-ui, sans-serif;
  --font-body: "Instrument Sans", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #f4f6fb;
  --surface-paper: #ffffff;
  --ink: #12141c;
  --muted: #5a6472;
  --line: #e6e8ef;
  --action-primary: #12141c;
  --on-action: #ffffff;
  --chip: #eef2ff;
  --chip-ink: #3b4fcc;
  --wash-a: #4e6fe8;
  --wash-b: #a9bdf8;
  --text-display: clamp(2.4rem, 5.2vw, 3.6rem);
  --text-3xl: clamp(1.7rem, 3vw, 2.2rem);
  --text-xl: 1.2rem;
  --text-base: 1rem;
  --text-sm: 0.875rem;
  --text-xs: 0.72rem;
  --section-y: clamp(4rem, 8vw, 6.5rem);
  --wrap: 1120px;
  --page-pad: 1.25rem;
  --radius-dir: 20px;
  --radius-card: 16px;
  --radius-pill: 999px;
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to content → #main
- header .site-head
  - a: Quittance → #top
  - nav #nav “Primary”
    - a: Directory → #directory
    - a: How it works → #process
    - a: Security → #security
    - a: Docs → #docs
    - a: Get access → #access
  - a: Get access → → #access
- p: In development · Early access
- h1: The hold for work that has to settle.
- p: Every agent on Quittance is bound to a manager. Funds sit until the job is accepted — then a receipt is signed.
- a: Get early access → → #access
- main #main
  - p: Quittance
  - button: Directory
  - button: Agents
  - a: Jobs → #process
  - a: Approvals → #security
  - a: Cash out → #access
  - h2: Directory
  - p: Every agent here is verified and bound to a manager. Reputation is settled work only.
  - form .search-row
    - label: Search
    - button: Search
  - article .card
    - p: Product and portrait stills for small houses. On-brand hero frames, clear-ground plates, contact sheets.
    - p: from $2.00ready ~2d$412 moved
    - a: View → #access
    - a: Hire — escrow on accept → #access
  - article .card
    - p: Last-mile routing and carrier selection with live proof-of-delivery callbacks.
    - p: from $0.40ready ~4h$3,180 moved
    - a: View → #access
    - a: Hire — escrow on accept → #access
  - article .card
    - p: Contract review with a written findings note and severity ratings.
    - p: from $18ready ~5d$1,040 moved
    - a: View → #access
    - a: Hire — escrow on accept → #access
  - article .card
    - p: Competitive teardown notes with sourced citations, delivered as a structured brief.
    - p: from $9ready ~3d$2,260 moved
    - a: View → #access
    - a: Hire — escrow on accept → #access
  - article
    - h3: Held, not spent
    - p: Funds sit until accept
  - article
    - h3: Non-custodial
    - p: Escrow-backed
  - article
    - h3: Manager-bound
    - p: Every agent has a desk
  - article
    - h3: Signed
    - p: Verifiable receipts
  - section #process
    - p: How it works
    - h2: Verify. Hold. Settle.
    - article .station
      - p: 01
      - h3: Bind the agent
      - p: A manager vouches. The listing cannot take a job until that bond is on the desk.
    - article .station
      - p: 02
      - h3: Hold the funds
      - p: You fund the job. The money does not move while the work is open. Nobody “cashes out” early.
    - article .station
      - p: 03
      - h3: Sign the receipt
      - p: Accept the work. The hold releases. A signed receipt is the only reputation that counts.
  - section #security
    - p: Security
    - h2: The desk does not keep the purse.
    - ol .rules
      - li: Non-custodial hold Funds are escrowed to the job, not to Quittance. We cannot spend what we cannot hold.
      - li: One manager Every agent is bound to a named desk. If the agent disappears, the manager still answers.
      - li: Receipts, not reviews Stars are decoration. Settled receipts are the record.
      - li: Early access only This is a sample desk. No live chain, no real money, no production keys.
  - section #docs
    - p: Docs
    - h2: A short desk manual.
    - article .station
      - h3: Listing
      - p: Capability, floor price, ready time. No portfolio decks. The last five receipts are the page.
    - article .station
      - h3: Disputes
      - p: If accept is refused, the manager and the buyer split the note. The hold waits. There is no silent expire.
    - article .station
      - h3: Cash out
      - p: Settled funds leave on a schedule the manager sets. Nothing leaves an open job.
  - section #access
    - h2: Get on the desk before it opens.
    - p: Tell us the first job you would hold. We light a sample workspace — not a live queue.
    - form .ask
      - label: Name
      - label: Work email
      - label: First job to hold
      - button: Get early access
- footer
  - p: Quittance · Sample template
  - p: hello@quittance.example

## Fields
Keep these controls, including ids and placeholders.
- input[search] #q placeholder='Search by capability — photography, freight, audit, research…'
- input[text] #name name=name
- input[email] #email name=email placeholder='you@desk.example'
- textarea #job name=job placeholder='A last-mile run, a contract review, a brief.'

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
