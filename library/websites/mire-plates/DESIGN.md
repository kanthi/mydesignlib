# DESIGN — Mire Plates

Presentation form of Mire. Same studio, same prints, read as bound plates.

## Overview
- Audience: someone paging through the work, as they would a PDF.
- Single job: move from plate to plate. There is no commission action on these plates.
- Emotion: a quiet darkroom, one plate at a time.
- Create this feeling through:
  - Page is darkroom wall `{surface-page}`.
  - Each plate is one viewport on a tall screen, snapped like a page.
  - Photographs sit on fiber mats `{surface-paper}`, radius 2px.
  - Safelight `{action-primary}` is only the 8px tick beside the plate number.
  - No navigation, no buttons, no filters, no dialogs, no form.

## Source of truth
- This file + CSS `:root` in `index.html`. If they diverge, prefer the code and fix this file.
- Sister site: `library/websites/mire/`. Do not restyle that site from here.

## Aesthetic commitment
- Name: Darkroom plates.
- Signature element: a numbered plate (01–04) with the safelight tick, and prints that carry no type.

## Colors (semantic)
- surface-page: `#1C2422` — wall. Every plate background.
- surface-paper: `#E4E0D4` — fiber mat and the invoice.
- surface-paper-deep: `#D5D0C2` — invoice header band.
- text-on-dark: `#E6E2D8`
- text-on-paper: `#1A1E1C`
- text-muted: `#8E9892`
- text-muted-paper: `#5C615C`
- action-primary: `#E4572E` — the 8px folio tick only. Never a fill behind type, never a control.
- selenium: `#C4A574` — kickers, plate numbers, publication names.
- status-danger: `#8E2E2A` — the “Rush · declined” stamp on the invoice only.
- line-dark: `rgba(230, 226, 216, 0.16)`
- line-paper: `rgba(26, 30, 28, 0.16)`

## Typography
- Display: Newsreader — plate titles and the name Mire.
- Body: Figtree.
- Mono: IBM Plex Mono — plate numbers, frame chips, exposure, fees.
- Scale:
  - word: `clamp(3.6rem, 7vw, 6.4rem)` / 0.92 / -0.03em — cover and closing name
  - display: `clamp(2.2rem, 4vw, 3.3rem)` / 1.05 / -0.02em — plate titles
  - xl: `clamp(1.35rem, 2vw, 1.7rem)` / 1.25
  - lg: `1.2rem` / 1.45
  - base: `1.0625rem` / 1.6
  - sm: `0.875rem`
  - xs: `0.75rem` / 0.14em — kickers and the folio
- Measure: 38rem. Balance titles.

## Space
- Plate padding: 28px 0 56px, so the folio sits in the bottom margin.
- Wrap: `min(1180px, calc(100% - 3rem))`
- Spread gap: 12px. Mat padding: 10px. Cover mat padding: 14px.

## Layout and responsiveness
### Compact (< 800px)
- Plates stack. A plate is at least one screen and may grow so a print is not cropped away.
- Scroll snaps to the start of a plate, proximity rather than a lock.
- Spreads become one column. The three-print plate stays one column.
- Invoice rows stack: line, receipt, fee.
### Expanded (≥ 800px, and viewport at least 720px tall)
- Each plate is exactly one screen. Scroll snap is mandatory.
- Cover is print (7) + margin note (5), aligned to the bottom of the print.
- Two-print plates are a side-by-side spread. The third photo plate is three columns.
- Sequence is one ruled row of four steps.
- Note is portrait + text.

## Shape & elevation
- Radius 2px. No pills, no hover lift. These prints are not controls.
- No shadow. A 1px white edge at 12% on each photograph.

## Components
### Folio
- Cover only: 8px `{action-primary}` square, then “01 / 04” in `{font-mono}`, bottom-left, outside the print.
- Plates 02–04 have no folio.
### Print
- Mat `{surface-paper}` around the photograph only. No frame number, no caption, no type on the mat or on the image.
- The figure is not an anchor.
- Plate titles and the cover sentence sit outside the mat.

## Motion
- Snap between plates. That is the page turn.
- No entrance animation on the prints.
- Reduced motion: `scroll-behavior: auto`. Snap may remain; nothing translates.

## Iconography
- None. The folio tick is a square, not an icon. No emoji.

## Content
- Only the cover carries type: Ida Voss, a short note on how she works, the studio line, and plate 01.
- Plates 02–04 are photographs alone. No folio, no title, no caption.

## Ban list
- Menus, buttons, links styled as controls, filters, dialogs, light-table controls.
- Inter as display, purple, pills, three equal cards, emoji.
- Hover lift. `transition: all`.

## Accessibility
- Plates are sections with labels. Plate number is text.
- Contrast matches the Mire site.
- Touch users scroll. Nothing depends on a hover caption.
