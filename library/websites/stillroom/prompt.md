# Rebuild prompt — Stillroom (`stillroom`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · SaaS
- Folder: `library/websites/stillroom/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Studio work room on cool paper: a crimson bough wash, a charcoal card that swaps between reach, trail, and the October week, and a two-size price.

## Title
Stillroom — Why a studio keeps the room

## Description meta
Stillroom is a fictional work room for studios under thirty: who can touch a project, what changed, and how the week sits.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500..700;1,9..144,500..600&family=Outfit:wght@400;500;600&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Fraunces", serif;
  --font-body: "Outfit", sans-serif;
  --surface-page: #F7F6F4;
  --surface-active: #F3F0EC;
  --text-primary: #1C1917;
  --text-secondary: #6B6560;
  --border-default: #E6E2DC;
  --action-primary: #1C1917;
  --action-primary-hover: #000000;
  --on-action: #F7F6F4;
  --accent-lacquer: #B4232C;
  --surface-panel: #2C2A28;
  --surface-panel-raised: #3A3734;
  --text-on-panel: #F3EFEA;
  --text-on-panel-muted: #B7B0A8;
  --status-live: #8EAE6A;
  --status-danger: #8E2F2A;
  --text-display: clamp(3.1rem, 6.4vw, 5.35rem);
  --text-3xl: clamp(2.2rem, 4vw, 3.15rem);
  --text-xl: 1.35rem;
  --text-base: 1.0625rem;
  --text-sm: 0.9375rem;
  --text-xs: 0.8125rem;
  --leading-body: 1.6;
  --section-y: clamp(4.75rem, 10vw, 7.5rem);
  --wrap: min(1120px, calc(100% - 2.5rem));
  --radius-panel: 22px;
  --radius-card: 16px;
  --radius-chip: 8px;
  --radius-pill: 999px;
  --shadow-card: 0 28px 60px rgba(28, 25, 23, 0.18);
  --dur: 240ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --nav-h: 72px;
  }

  :root { --wrap: min(1120px, calc(100% - 2.5rem)); }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to the room → #main
- header #nav .site-nav
  - a: Stillroom → #main
  - nav .nav-links “Sections”
    - a: Room → #stage
    - a: Picture → #picture
    - a: Week → #week
    - a: Pricing → #pricing
  - button: Open a room
  - button: Menu
  - a: Room → #stage
  - a: Picture → #picture
  - a: Week → #week
  - a: Pricing → #pricing
  - button: Open a room
- main #main
  - section #stage .hero
    - h1: Why a studio keeps the room
    - article .panel.is-on
      - p: Work reach
      - button: Full access Edit
      - button: Limited access Edit
      - button: Full access Edit
    - article .panel
      - p: You opened a branch North glass — internal
      - p: Project log3 days ago
      - p: Assigned 2 site visits
      - p: Project log1 day ago
      - p: Assigned 4 drawings
      - p: Project log2 days ago
    - article .panel.panel-wide
      - button: Add a project
      - button: Filter
      - ul .week-list
        - li: North glass12–18 Oct · 6 drawings
        - li: Harbor type16–22 Oct
        - li: ReprintClient view
        - li: Sample lane14–17 Oct
    - button: Who can touch it Each person has a reach: full, limited, or view. Change it in the room, not in a chat.
    - button: What changed A branch, a schedule, a permission. The trail keeps the sentence and the day.
    - button: How the week sits Projects lie on the days they occupy. A visit and a due date stay on the bar.
  - section #picture .picture
    - h2: One picture of the work.
    - p: The room puts the week, the open visits, and the last change on a single board. No second login to see if North glass moved.
    - a: See the week → #week
    - p: North glass
    - p: 64%drawn
    - ul .board-rows
      - li: Open visits2
      - li: Last changeDoor schedule
      - li: Who issued itMarek Sol
  - section #week .october
    - h2: October on the wall
    - p: Three jobs in Drewe Atelier’s room. The dates are the ones already on the drawings.
    - article .job.reveal
      - p: 12–18 Oct
      - h3: North glass
      - p: Six drawings. The door schedule changed yesterday. Build can mark the sample; the lead still issues the set.
    - article .job.reveal
      - p: 16–22 Oct
      - h3: Harbor type
      - p: The sign face stays in limited hands until the 20th. Two people can see it. One can change the letterspacing.
    - article .job.reveal
      - p: 19–24 Oct
      - h3: Reprint
      - p: A client view is open. Edits are not. The trail notes who was given that view, and on which day.
  - section .steps
    - h2: How a room opens
    - p: The order is the work. Skip a step and the week has nothing to sit on.
    - ol
      - li: Name the room North glass, Harbor type, a reprint. One name, one board. The room does not invent a project you did not write.
      - li: Say who can touch it Full for the lead. Limited for build. View for the client who should see Friday and change nothing.
      - li: The week draws itself Dates you already keep become the bars. The trail starts the same afternoon, with the branch you opened.
  - section .quote
    - figure .reveal
      - blockquote: The permission list used to live in a thread. Now the week is on the wall, and the record sits under it.
      - figcaption: Amina Drewe · Drewe Atelier
  - section #pricing .pricing
    - h2: Two sizes of room
    - p: Close the room any month. The trail exports with you.
    - article .plan.reveal
      - h3: Room
      - p: $36 / month
      - ul
        - li: Up to 8 people
        - li: One board
        - li: Trail kept for 90 days
      - button: Open a room
    - article .plan.plan-house.reveal
      - h3: House
      - p: $96 / month
      - ul
        - li: Up to 30 people
        - li: Branches, and an export of the trail
        - li: Lanes for the way the studio already works
      - button: Open a room
    - p: A room for a studio under thirty. Not a seat for a company that needs a department.
  - section .faq
    - h2: Before you open one
    - button: Who is a room for?
    - p: Studios under thirty. A lead, a few makers, and sometimes a client who should only look.
    - button: What leaves when we close?
    - p: The trail file, the week, and the permission list. This sample does not store them. The note opens in your mail app.
    - button: Can a client see the week without editing it?
    - p: Yes. View keeps the board visible and the edits shut. Reprint in October is that kind of reach.
    - button: Do you use our files to train a model?
    - p: No. Stillroom keeps the room. It does not read the drawings to train anything.
  - section .close
    - h2: Open the room before the week gets ahead of you.
    - button: Open a room
- footer .site-footer
  - p: Stillroom
  - p: Sample template
  - h2: Visit
  - ul
    - li: Room
    - li: Picture
    - li: Week
    - li: Pricing
  - h2: Note
  - p: rooms@stillroom.example
  - p: Fictional studio room. Nothing here is a live account.
- dialog #room-dialog
  - form #room-form .sheet
    - p: Room
    - button: ×
    - h2: Open a room
    - p: Write a short note. It opens in your mail app. Nothing is stored on this sample.
    - label: Your name
    - label: Studio
    - label: People Up to 8 9 to 30
    - button: Write the note

## Images in the page
- `assets/canopy.jpg — Mist, a dark temple roof, and red blossoms on a pale wash.`
- `assets/ione.jpg`
- `assets/marek.jpg`
- `assets/nia.jpg`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #field-name name=name
- input[text] #field-studio name=studio
- select #field-people name=people

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/canopy.jpg`
- `assets/ione.jpg`
- `assets/marek.jpg`
- `assets/nia.jpg`
- `index.html`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
