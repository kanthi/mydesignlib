# DESIGN — Caucus

## Overview
- Audience: someone reading a mediation identity on one board.
- The page is the board. Six cards, two columns, black ground. No site nav above it.
- Emotion: a deep purple field and one citron signal.
- Create this feeling through:
  - Tyrian purple as the ground. Citron once, as the signal.
  - The mark is two facing bowls with a constant gap. It is not a cut square.
  - Libre Franklin only. Headlines at 500, the wordmark at 700, tracked −3%.
  - The word “Caucus” is HTML. The gradient is CSS.

## Source of truth
- This file + `css/tokens.css`. Prefer the tokens if they diverge.

## Aesthetic commitment
- Name: Identity board
- Signature element: the two bowls, left of the uppercase word, on the purple field.

## Colors (semantic)
- tyrian: `#66023C` — ground, word on light, icon on citron and pith.
- citron: `#CAD1B3` — the signal. Once per view.
- mulberry: `#8E2A54` — secondary type on dark, the small italic line.
- pith: `#EFEEDA` — paper inside the website card.
- ink: `#2B0119` — titles on white, the only dark.
- white: `#FFFFFF` — card faces, type on tyrian.
- ground: `#000000` — the field behind the six cards.

No tints in the layouts. Mixes belong only in the colour chart.

## Typography
- Libre Franklin only.
- Card titles: 500, tracking −0.03em.
- Wordmark: 700, uppercase, tracking −0.03em.
- Notes: 400, about 11px, line-height 1.45.
- The italic line is mulberry: `caucus.law · figures always lining`.

## Layout
- Grid is 2 × 3. Each card uses aspect-ratio 968 / 544.
- Order: guidelines, icon system, typography, colours, primary logo, website.
- The same order when the columns stack below 860px.
- Hero gradient is inset on a white card. The other five cards are white.

## Components
### Bowls
- Two crescents from the same circle, face to face, gap equal to the inner radius difference.
- They never touch. Nothing is outlined.
- Clear space before the word is three tenths of the mark.
- Minimum size 18px. Below that the bowls thicken and the gap holds.

### Website
- A window on pith. Chrome reads `caucus.law`.
- Headline, three figures, three steps. No second page.

## Bans
- Do not use the reference studio name, its domain, or a square cut into two stepped halves.
- Do not add a designer handle or a footer credit.
- Contact, if a mail link is ever added, is `desk@caucus.example`.
