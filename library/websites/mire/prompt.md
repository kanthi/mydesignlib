# Rebuild prompt — Mire (`mire`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: website · Studio
- Folder: `library/websites/mire/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Sheet-film photography portfolio on a darkroom wall — fiber-print mats, a numbered contact sheet filtered by roll, a light-table frame viewer, and a commission brief.

## Title
Mire — Sheet-film pictures of harbors, weather, and rooms

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --font-display: "Newsreader", "Iowan Old Style", Palatino, serif;
  --font-body: "Figtree", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --surface-page: #1C2422;
  --surface-paper: #E4E0D4;
  --surface-paper-deep: #D5D0C2;
  --text-on-dark: #E6E2D8;
  --text-on-paper: #1A1E1C;
  --text-muted: #8E9892;
  --text-muted-paper: #5C615C;
  --action-primary: #E4572E;
  --action-primary-hover: #C9441E;
  --action-ink: #1A120E;
  --selenium: #C4A574;
  --status-danger: #8E2E2A;
  --line-dark: rgba(230, 226, 216, 0.16);
  --line-paper: rgba(26, 30, 28, 0.16);
  --text-word: clamp(4.25rem, 9vw, 7.75rem);
  --text-display: clamp(2.4rem, 4.6vw, 3.6rem);
  --text-xl: clamp(1.5rem, 2vw, 1.85rem);
  --text-lg: 1.25rem;
  --text-base: 1.0625rem;
  --text-sm: 0.875rem;
  --text-xs: 0.75rem;
  --leading-word: 0.92;
  --leading-display: 1.05;
  --leading-body: 1.6;
  --tracking-word: -0.03em;
  --tracking-display: -0.02em;
  --tracking-label: 0.14em;
  --section-y: clamp(4.5rem, 9vw, 7.25rem);
  --wrap: min(1180px, calc(100% - 2.5rem));
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --radius: 2px;
  --shadow-lift: 0 14px 30px rgba(0, 0, 0, 0.35);
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --dur: 240ms;
  --dur-load: 280ms;
  --nav-h: 64px;
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to the sheet → #work
- header .nav
  - a: Mire → #top
  - nav .nav__links “Sections”
    - a: Work → #work
    - a: Sequence → #sequence
    - a: Rates → #rates
    - a: Note → #note
  - button: Menu
  - a: Commission a seriesCommission → mailto:studio@mire.example?subject=Commission%20a%20series
- main #top
  - section .hero
    - a: 04 North slip, last lightGrayharbor · 2025 → assets/frame-slip.jpg
    - p: Sheet 07 · Harbors
    - h1: Mire
    - p: Pictures of harbors, weather, and rooms that are still in use. Twelve finished prints from two days on site.
    - p: 4×5 · 150mm · f/16 · 1/8 · overcast
    - a: Commission a series → mailto:studio@mire.example?subject=Commission%20a%20series
    - a: Read the sheet → #work
  - section #work .section
    - p: The sheet
    - h2: Seven frames
    - p: I print fewer pictures than I take. These seven stayed. The rest of each roll is still in the file.
    - button: All frames 07
    - button: A · North slip 03
    - button: B · Occupied 03
    - button: C · Weather desk 01
    - p: 07 frames on the sheet.
    - a: 04 North slip, last light → assets/frame-slip.jpg
    - a: 11 Cleat and nets → assets/frame-nets.jpg
    - a: 07 Galley, breakfast left → assets/frame-room.jpg
    - a: 02 Headland hut → assets/frame-weather.jpg
    - a: 15 Ladders at low water → assets/frame-tide.jpg
    - a: 19 Shed at the end of the dock → assets/frame-door.jpg
    - a: 21 Slip under the lamp → assets/frame-lamp.jpg
  - section #sequence .section
    - p: The order
    - h2: Four steps, then the prints
    - p: The count is the schedule. Contacts in ten days. Finished prints in three weeks.
    - ol .steps
      - li: 01 Scout the place One visit, and no camera commitment. We walk the slips or the rooms and decide whether the light is worth two days.
      - li: 02 Two days on site Sheet film, available light, no assistant. I work the hours the place is actually in use.
      - li: 03 Mark the sheet Ten days later you receive the contact sheet and mark the frames you want held.
      - li: 04 Twelve prints Three weeks after that: fiber prints, signed, boxed. Twelve from the two days.
  - section #rates .section
    - article .invoice.reveal
      - p: Studio invoice · Grayharbor
      - h2: What a series costs
      - p: Rush · declined
      - table
        - caption: Series fees in US dollars
        - th: Line
        - th: What you receive
        - th: Fee, USD
        - th: Editorial day
        - td: One publication. Twelve selects, for the web and one print run.
        - td: 1,800
        - th: Place archive
        - td: Two days on site. Twelve finished fiber prints. Private use by one household.
        - td: 6,400
        - th: Print, 11×14
        - td: A signed fiber print from a frame already on the sheet.
        - td: 420
      - p: Travel past the coast range is a separate day. Use beyond the line above is quoted before the camera comes out.
      - a: Commission a series → mailto:studio@mire.example?subject=Commission%20a%20series
  - section #note .section
    - figure .portrait.reveal
      - figcaption: Ida Voss · Grayharbor
    - p: The printer
    - h2: Places still in use
    - p: I photograph slips, galleys, weather huts, and rooms with the lights left as found. The work is slow because the light is.
    - p: Prints are made on fiber, from 4×5 sheet film, in a room above a chandlery in Grayharbor. Commissions come from editors and from people who want a record of one place.
    - ul .pubs
      - li: Keel Review, no. 41 North slip, twelve plates
      - li: Margin Quarterly Occupied rooms
      - li: Harbor Ledger A private archive for the Pell family
- footer .foot
  - p: Mire
  - p: Grayharbor
  - a: studio@mire.example → mailto:studio@mire.example
  - a: Top → #top
  - p: Sample template · fictional studio
- dialog #table .table
  - p: 01 / 07
  - button: Close
  - button: Previous frame
  - button: Next frame
- dialog #brief .brief
  - p: Commission
  - h2: Tell me the place
  - p: Write the place, the dates, and whether the pictures are for publication or a private archive. This opens an email draft to studio@mire.example. The page does not store the note.
  - form #brief-form
    - label: Place
    - p: Add the place.
    - label: Dates
    - p: Add the dates.
    - legend: Use
    - label: Publication
    - label: Private archive
    - button: Write the brief
    - button: Close
- dialog #menu .menu “Sections”
  - p: Mire
  - button: Close
  - nav
    - a: Work → #work
    - a: Sequence → #sequence
    - a: Rates → #rates
    - a: Note → #note

## Images in the page
- `assets/frame-slip.jpg — Two working boats tied to a wet wooden dock at blue hour, ropes coiled in the foreground.`
- `assets/frame-slip.jpg — Working boats moored beside a wet dock under a blue-hour sky.`
- `assets/frame-nets.jpg — Coiled fishing nets and a rusted iron cleat on wet dock planks.`
- `assets/frame-room.jpg — A boat galley with an enamel kettle, a yellow oilskin, and breakfast dishes by a fogged port window.`
- `assets/frame-weather.jpg — A small green hut on a rocky headland as waves break along the shore.`
- `assets/frame-tide.jpg — Barnacled pilings and wooden ladders standing in harbor mud at low tide.`
- `assets/frame-door.jpg — A weathered wooden shed standing at the end of an empty dock.`
- `assets/frame-lamp.jpg — A skiff moored beside a wet dock under a single sodium lamp at night.`
- `assets/portrait.jpg — Ida Voss stands on a wooden dock in a weathered wool coat, looking out across still water.`

## Fields
Keep these controls, including ids and placeholders.
- input[text] #place name=place
- input[text] #dates name=dates
- input[radio] name=use

## Files
Keep every file below at the same relative path. Do not rename assets. Do not add stock images.
- `DESIGN.md`
- `assets/frame-door.jpg`
- `assets/frame-lamp.jpg`
- `assets/frame-nets.jpg`
- `assets/frame-room.jpg`
- `assets/frame-slip.jpg`
- `assets/frame-tide.jpg`
- `assets/frame-weather.jpg`
- `assets/portrait.jpg`
- `index.html`
- `mire.pdf`
- `preview.jpg`

## Done when
- The title, landmarks, and every quoted line match this prompt.
- The same images appear in the same places.
- No extra menu, section, price, or call to action has been invented.
- Opening the page feels like the original template, not a restyle.
