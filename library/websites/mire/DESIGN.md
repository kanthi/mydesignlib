# DESIGN — Mire

## Overview
- Audience: art directors and private clients commissioning a slow series of a working place.
- Single CTA: Commission a series (opens a short brief, then `mailto:studio@mire.example`).
- Emotion: a quiet darkroom, prints still on the sheet.
- Create this feeling through:
  - Page is darkroom wall `{surface-page}`, never a cream canvas.
  - Photographs sit on fiber mats `{surface-paper}` with a 2px radius, like prints, not edge-to-edge ads.
  - Safelight `{action-primary}` appears only on the primary button, the active roll tick, and keyboard focus.
  - Frame numbers and exposure lines use `{font-mono}` and tabular figures.
  - One lifted shadow, and only while a print is hovered.

## Source of truth
- This file + CSS `:root` in `index.html`. If they diverge, prefer the code and fix this file.

## Aesthetic commitment
- Name: Darkroom contact sheet.
- Signature element: numbered film carriers. The work is a sheet you filter by roll and open on a light table.

## Colors (semantic)
- surface-page: `#1C2422` — darkroom wall. Page background only.
- surface-paper: `#E4E0D4` — fiber mat behind a print, the invoice, and the brief. Never the page.
- surface-paper-deep: `#D5D0C2` — invoice header band and mat edge.
- text-on-dark: `#E6E2D8` — headings and body on the wall.
- text-on-paper: `#1A1E1C` — type on mats and the invoice.
- text-muted: `#8E9892` — secondary lines on the wall.
- text-muted-paper: `#5C615C` — secondary lines on paper.
- action-primary: `#E4572E` — safelight. Primary button fill, active roll tick, focus ring. Never a section background.
- action-ink: `#1A120E` — label on the safelight button.
- selenium: `#C4A574` — exposure captions and the sheet kicker only.
- status-danger: `#8E2E2A` — the “Rush · declined” mark and form errors, both on paper. Too dark to use as a fill.
- line-dark: `rgba(230, 226, 216, 0.16)` — rules on the wall.
- line-paper: `rgba(26, 30, 28, 0.16)` — rules on paper.
- Usage: four materials (wall, mat, safelight, selenium). Do not add a second accent.

## Typography
- Display: Newsreader — wordmark, hero name, section titles.
- Body: Figtree — sentences on the wall and on paper.
- Mono: IBM Plex Mono — frame numbers, exposure, invoice figures, kickers.
- Scale:
  - word: `clamp(4.25rem, 11vw, 8.5rem)` / 0.92 / -0.03em — hero name only
  - display: `clamp(2.4rem, 4.6vw, 3.6rem)` / 1.05 / -0.02em — section titles
  - xl: `clamp(1.5rem, 2vw, 1.85rem)` / 1.25 — roll names
  - lg: `1.25rem` / 1.45 — lead sentence
  - base: `1.0625rem` / 1.6 — body
  - sm: `0.875rem` / 1.45 — captions
  - xs: `0.75rem` / 1.3 / 0.14em — mono kickers, uppercase
- Measure: body blocks max 38rem. Balance display titles. Pretty body paragraphs.

## Space
- section-y: `clamp(4.5rem, 9vw, 7.25rem)`
- wrap: `min(1180px, calc(100% - 2.5rem))`
- stack: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 80
- Mats: 10px padding around a print on the sheet; 14px on the hero print.
- Gap inside the sheet: 10px.

## Layout and responsiveness
### Compact (< 720px)
- Single column. Hero print, then the margin note, then the button.
- Nav: wordmark, menu button, primary button. Menu covers the wall and lists the four sections.
- Contact sheet is one column of prints. Roll filter becomes a horizontal scroller.
- Invoice rows stack: item, receipt, fee.
### Medium (720–1023px)
- Hero stays stacked. Sheet is two columns. Sequence is two-by-two.
### Expanded (≥ 1024px)
- Sticky nav. Hero is print (7) + margin note (5).
- Sheet uses a 12-column irregular grid (wide, square, tall, wide) — never three equal cards.
- Sequence is one ruled row of four steps. Note is portrait + text.

## Shape & elevation
- Radius 2px on prints, buttons, inputs, dialogs. No pills.
- Resting prints are flat. Hover lifts 4px with one shadow: `0 14px 30px rgba(0,0,0,0.35)`.
- A 1px `rgba(255,255,255,0.12)` edge on photographs so they separate from the mat.

## Components
### Buttons
- Primary: fill `{action-primary}`, label `{action-ink}`, type `{font-body}` 600, padding 14px 18px, radius 2px. One primary visible in the nav; the hero repeats it.
- States: hover darkens to `#C9441E`; focus ring 2px `{action-primary}` offset 3px; active scale 0.98; disabled not used.
- Ghost: transparent, 1px `{line-dark}`, label `{text-on-dark}`. Hover fills `rgba(230,226,216,0.06)`.
- Text link: selenium underline on hover. Used for “Read the sheet”, not for the commission.
### Nav
- Height 64px. Solid `{surface-page}`, bottom rule `{line-dark}`. Wordmark left, section links center, primary right.
- Active section: selenium color, no pill.
- Compact: hide links; menu button ≥44px.
### Film carrier (print)
- Mat `{surface-paper}`, padding as above, radius 2px.
- Index chip: mono `{text-on-dark}` on `{surface-page}`, sitting on the top-left of the image.
- Hover: lift + 2px safelight bar on the left edge of the mat. Whole carrier is the hit target.
- A filtered-out carrier is `[hidden]` with `display: none`. The flex display on the carrier must not override that.
### Roll filter
- Three text buttons, not cards. Active: safelight 8px tick before the roll letter.
- Filters the sheet. Empty state: “This roll is on the sheet — reload the frames.” should not occur; every roll has frames.
### Light table (dialog)
- Native `<dialog>`. Dim the wall to 72% black. Print centered on a mat. Exposure line under it in mono.
- Prev / next are ghost buttons ≥44px. Esc and the close button dismiss. Focus returns to the carrier that opened it.
### Commission brief (dialog)
- Fields: place, dates, use (publication or private archive). Labels above inputs.
- Input height 48px, paper surface, 1px `{line-paper}`, focus ring safelight.
- Error: `{status-danger}` one line under the field — “Add the place.” / “Add the dates.”
- Submit label: “Write the brief”. It opens the mail draft. It does not claim the note was delivered.
### Invoice
- Paper surface. Header band `{surface-paper-deep}`. Figures `{font-mono}` tabular.
- Three rows, not three cards. A danger stamp “Rush · declined” sits in the header, not as a fourth tier.

## Motion
- Purpose: the sheet settling, then a print lifting into the hand.
- Load: hero mat opacity + 16px, then the margin lines stagger 80ms. 280ms, `{ease}`.
- Scroll: section titles opacity + 16px, once, 240ms. Nothing else reveals.
- Hover lift 4px. Press scale 0.98 on buttons.
- Lenis smooth scroll on expanded pointers. Pause it while a dialog is open.
- Reduced motion: no Lenis, no translate, opacity only if a fade is required. Dialogs still open.

## Iconography
- Inline SVG, 1.5px stroke, `currentColor`, 20px optical size.
- Set: menu, close, previous, next, arrow to the brief. No emoji. No second icon family.

## Content
- Sentence case. Buttons start with a verb: “Commission a series”, “Write the brief”, “View this frame”.
- Voice: short, specific, first person of the studio. Name places, counts, and days.
- No lorem. No “elevate”, “seamless”, “next-gen”. Fictional publications only (Keel Review, Margin Quarterly, Harbor Ledger).
- Email: `studio@mire.example`. City: Grayharbor (fictional).

## Ban list
- Inter, Roboto, system-ui as display.
- Purple or indigo gradients. Acid green. Cream page + terracotta.
- Three equal cards. Pill buttons. Emoji icons. Centered hero with two CTAs.
- Real magazines, real harbors’ trademarked names, designer credits, scraped photos.
- Marquees, custom cursors, sprocket holes repeated as decoration.
- `transition: all`.

## Accessibility
- Body text on the wall and on paper meets 4.5:1. Safelight button uses `{action-ink}`.
- Visible focus on every control. Touch targets ≥44px.
- Light table and brief are dialogs with labels. Carriers are buttons with an accessible name.
- Reduced motion honored.
