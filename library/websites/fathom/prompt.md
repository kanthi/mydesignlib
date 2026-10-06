# Rebuild prompt — Fathom (`fathom`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Fintech
- Folder: `library/websites/fathom/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Electric-blue finance desk with a hanging notch nav, a question card, and glassy prompts along the fade.

## Title
Fathom — A calmer desk for the finance team

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font: "Urbanist", sans-serif;
  --surface-void: #0b0d12;
  --surface-electric: #1219f0;
  --surface-mid: #5257f4;
  --surface-lilac: #8a8ef7;
  --surface-page: #e9eafe;
  --surface-card: #ffffff;
  --surface-well: #f0f0f1;
  --surface-badge: #1a1c22;
  --line-badge: #2a2d35;
  --surface-inverse: #24262c;
  --text-on-dark: #ffffff;
  --text-muted: #c9ccd4;
  --text-ink: #0b0d12;
  --action-primary: #1a8cff;
  --action-primary-hover: #47a3ff;
  --line-rule: rgba(11, 13, 18, 0.16);
  --chip: #e4e5e8;
  --radius-cta: 6px;
  --radius-card: 16px;
  --radius-well: 12px;
  --radius-pill: 999px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 200ms;
  --shadow-card: 0 20px 50px rgba(18, 25, 240, 0.18), 0 2px 8px rgba(11, 13, 18, 0.06);
  --shadow-glow: 0 8px 28px rgba(26, 140, 255, 0.45);
  --text-display: clamp(2rem, 3.6vw, 3.5rem);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- header .hero
  - nav .nav “Primary”
    - a: Fathom → #desk
    - a: Books → #jobs
    - a: Notes → #week
    - a: Desk → #desk
    - a: Pricing → #close
    - button: Menu
  - p: Introducing Fathom 2
  - h1: A calmer desk for the finance team
  - p: Fathom reads the books you already keep and answers in the language of a careful analyst.
  - a: Sign in → mailto:desk@fathom.example
  - a: Open the desk → mailto:desk@fathom.example
  - label: Ask the desk
  - button: Draft the week
  - button: Find a line
  - button: Search the books
  - button: Send
  - button: Read the market
  - button: Sync the books
  - button: Compare the years
  - button: Write a rule
  - button: Look at spend
  - ul .marks “Fictional houses”
    - li: Harbeck
    - li: Lowell
    - li: Pindar
    - li: Brant
    - li: Moth
- main
  - section #jobs .jobs
    - h2: Three jobs on the desk
    - p: Fathom keeps three jobs on the desk. It does not open a second set of books.
    - ol .ledger
      - li: 01 The week letter A Monday note that names what moved in the shop books and what can wait.
      - li: 02 The forecast line One autumn line, held still until a single cost — flour or rent — is enough to move it.
      - li: 03 The spend question Where the money went, before anyone rewrites the whole book.
  - section #close .close
    - h2: When the week needs a note.
    - p: The books stay where they are.
    - a: Open the desk → mailto:desk@fathom.example
- footer .foot
  - p: Fathom · Sample template · desk@fathom.example

## Fields
Keep these controls, including ids and placeholders.
- textarea #ask placeholder='How are operating costs trending for the shop companies this quarter? Should the autumn forecast move?'

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
