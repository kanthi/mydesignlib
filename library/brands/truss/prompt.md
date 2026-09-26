# Rebuild prompt — Truss (`truss`)

Build this template again so the finished page matches the shipped one. Use the copy, tokens, landmarks, and files below verbatim. Do not add sections, controls, brands, or sentences that are not listed. Do not drop a listed landmark or line of copy.

## Deliverable
- Kind: brand · Studio
- Folder: `library/brands/truss/`
- Ship `index.html` plus every local file listed under Files, at the same relative paths.
- Vanilla HTML, CSS, and small JS. No bundler and no new framework.
- Relative paths only. The site is served from a subpath.
- Head must include the exact `<title>`, the description meta when one is listed, both robots metas (`noindex, nofollow, noarchive, nosnippet, noimageindex` on `robots` and `googlebot`), and the gtag snippet for `G-Z97ZD3EVSF`.
- Honor `prefers-reduced-motion` on anything that moves.

## What it is
Studio identity as a printed 21-card guideline: overlapping A-truss mark, Outfit wordmark, black/white/grey/charcoal, CSS stationery.

## Title
Truss — Brand guideline

## Description meta
Fictional studio identity: overlapping A-truss mark, black/white/charcoal palette, Outfit wordmark, 21-card printed guideline.

## Fonts
Load only these Google Fonts stylesheets:
- `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Outfit:wght@400;500;600;700&display=swap`

## Tokens
Put this `:root` block in the page CSS and use the variables. Do not swap the palette or the typefaces.

```css
  :root {
  --surface-page: #C9C9C9;
  --surface-paper: #FFFFFF;
  --surface-ink: #000000;
  --surface-grey: #E5E5E5;
  --surface-charcoal: #3A3A3A;
  --text-primary: #111111;
  --text-on-ink: #FFFFFF;
  --text-secondary: #5A5A5A;
  --action-primary: #000000;
  --font-ui: "Outfit", "Avenir Next", sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
  --text-display: clamp(2.4rem, 5vw, 3.5rem);
  --section-y: clamp(3rem, 6vw, 4.75rem);
  --wrap: min(1120px, 100% - 2.4rem);
  --board: min(1180px, 100% - 1.4rem);
  --radius: 6px;
  --dur: 220ms;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  }
```

## Page outline
Reading order. Text after the colon is exact copy.
- a: Skip to guideline → #board
- header .site-header
  - a: truss → #top
  - nav .nav-links
    - a: Guideline → #board
    - a: Type → #type
    - a: Color → #color
    - a: Print → #print
    - a: Contact → #contact
  - a: hello@truss.example → #contact
  - button: Request the kit
- main #top
  - section .intro.wrap
    - p: Identity system · v1.0
    - h1: Brand guideline
    - p: A studio mark that reads as a load path. Two legs, one word, four colors. Built to hold on a card, a site, and a loading dock.
  - article .slide.ink
    - p: Brand guideline
    - p: Building brands that hold under load.
  - article .slide
    - h2: Table of contents
    - ul .toc
      - li: 01. Brand story
      - li: 06. Typography
      - li: 02. Primary logo
      - li: 07. Brand color
      - li: 03. Secondary logo
      - li: 08. Brand elements
      - li: 04. Logo icons
      - li: 09. Business card
      - li: 05. Structure
      - li: 10. Thank you
  - article .slide
    - h2: Brand message
    - p: Clear. Load-bearing. Reusable.
    - p: We build identities that stay upright when the brief gets heavier — names, marks, and systems that can be specified, not just admired.
    - p: Truss is a studio for founders who already know what they make. We give that work a structure other people can hold.
    - p: truss
  - article .slide
    - h2: Brand story
    - h3: Ideas into impact
    - p: We started with a simple belief: a mark is a joint. If the joint is true, the rest of the building can move.
    - h3: Our vision
    - p: To be the studio brands call when they need a system that still reads at 12px and at 12 metres.
    - h3: Our mission
    - p: Deliver design that is functional, named, and built for long-term use.
  - article .slide.ink
    - p: Brand guideline / Version 1.0
  - article .slide
    - h2: Structure
    - p: Clear structure. Better results.
    - p: Our mark sits on a clear grid so it stays consistent from a favicon to a truck door.
  - article .slide
    - h2: Primary logo
    - p: The main logo for all platforms. Use the stacked lockup wherever there is air.
  - article .slide
    - h2: Secondary logo
    - p: A compact version for small spaces — nav bars, avatars, app headers.
  - article .slide
    - h2: Logo icons
    - p: Icon variations for different uses. The mark works as a standalone glyph.
  - article .slide.ink
    - p: typo.
    - p: Outfit carries the voice. It is geometric, quiet, and readable at caption size.
  - article .slide
    - h2: Brand typeface
    - p: Modern and clean. Primary typeface Outfit.
    - p: Aa
    - p: Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
  - article .slide
    - h2: Typography
    - p: Hierarchy and balance. Font: Outfit.
    - p: Aa
  - article .slide.ink
    - p: color.
    - p: Four values. No accent. Recognition comes from the mark, not a second hue.
  - article .slide
    - h2: Brand color
    - p: These colors hold our values: contrast, honesty, reuse.
  - article .slide
    - h2: Color palette
    - p: Primary and secondary.
  - article .slide.ink
    - p: prints.
    - p: High-contrast print keeps the mark true on paper, board, and vinyl.
  - article .slide
    - h2: Brand envelope
    - p: Clean and professional. Keep the lockup on-brand, one color per face.
  - article .slide
    - h2: Business card
    - p: A clean card leaves a lasting impression.
  - article .slide
    - h2: Iconography
    - p: Small details. Big impact. One stroke, 1.6.
  - article #contact .slide
    - h2: Get in touch
    - p: Let’s specify something that lasts.
  - article .slide.ink
    - p: For being part of this kit.
    - h3: Thank you
    - p: truss
  - section #type .spec.wrap
    - h2: Type in use
    - p: Outfit at four weights. Never mix a second display face. Captions and hex stay in IBM Plex Mono.
    - h3: Wordmark
    - p: truss
    - p: Lowercase only. Tracking −0.04em. Do not outline, do not add a tagline under the mark.
    - h3: Clear space
    - p: Keep a gap equal to the width of one truss leg around the lockup. Minimum digital size: 16px for the mark, 14px for the word.
  - section #color .spec.wrap
    - h2: Color tokens
    - p: Four fields. Buttons are black. Grey is a surface, never a fill for the mark.
  - section #print .spec.wrap
    - h2: Print rules
    - p: One color per face. If the field is black, the mark is white. Never grey on charcoal.
    - p: truss
    - p: truss
- footer .wrap
- h3: Request the kit
- p: A PDF of this board plus SVG mark files. This sample parks the request in the browser.
- form #kit-form
  - label: Work name
  - label: Work email
  - button: Send the request
- p: Parked. An operator would write hello@truss.example.
- button: Close

## Fields
Keep these controls, including ids and placeholders.
- input[text] name=name
- input[email] name=email

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
