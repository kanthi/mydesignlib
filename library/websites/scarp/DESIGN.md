# Scarp

Order desk for rock and lime yards. One screen to read every open ticket before the week locks.

## Overview

A yard office after the last load: steep dark rock, warm stone, cream type, and one lime lamp on the tickets that still need a person.

Create this feeling through:

- First screen is exactly one viewport of `assets/rock.jpg`. Nothing else uses that photo.
- Cream type (`#F4EFE6`) sits on a left-weighted scrim. The rock stays visible toward the right.
- A white instrument card (week chart + six tickets) sits on the rock, not on a second panel.
- Lime is the primary action fill and the chart fill only. It is not a background, rule, wordmark, or decoration.
- Schibsted Grotesk does every role. No second family. No serif.

## Voice

Plain yard speech. Name the ticket, the material, the price, and Friday lock. Do not praise the product. Do not invent a second brand. Contact is `hello@scarp.example`. Footer line is exactly `Sample template`.

Partner row, text only, this order: Ione, Marek, Nia, Brant, Quill.

## Tokens

| Token | Value | Intent | Boundary |
|---|---|---|---|
| `--lime` | `#D6F34A` | Primary action fill and chart fill | Not large surfaces, not body type, not rules |
| `--lime-ink` | `#1a1a1a` | Type on `--lime` | Only on lime fills |
| `--ink` | `#161616` | Headlines and UI type on paper | Not on the photo |
| `--paper` | `#F6F5F2` | Page ground below the photo | Not the hero |
| `--muted` | `#5C584F` | Notes, table headers, chart labels | Not hero type |
| `--line` | `#E3E0D8` | Hairline borders and row rules | 1px only |
| `--cream` | `#F4EFE6` | Type, ghost borders, and wordmarks on the photo | Not on paper sections |
| `--rock-scrim` | `rgba(40,32,26,.45)` | Left readability veil over the rock | Do not flatten the whole photo |
| `--stone-bar` | `rgba(48,38,30,.48)` | Nav bar fill | Photo hero only |
| `--sheet` | `#ffffff` | Chart card and specimens | Not the page ground |
| `--stroke-lime` | `#3E4A12` | Darker stroke on the lime area | Chart line only |
| `--font` | Schibsted Grotesk | Display and UI | Weights 400, 500, 600, 700 only |

CSS `:root` in `index.html` is the runtime source. Do not add a second accent.

## Type

- Display and UI: `"Schibsted Grotesk", sans-serif`.
- Hero and section headlines: weight 600, `letter-spacing: -0.035em`, line-height 0.98.
- Hero size at 1600px: about 72px, two or three lines in the left column. Never one stretched line.
- Big desk figure `$186,400`: weight 600, tracking `-0.035em`, tabular numbers.
- Body: 17px / 1.5 / weight 400. UI chrome: 13–14px / weight 500–600.
- Kicker on the photo keeps the words `Orders, read close` in sentence case. The paper index `(01) GET CLOSER` stays that casing.
- No uppercase headlines. No italic. No serif fallback.

## Layout

Desktop first screen (1600×1000) is `100vh` / `100dvh` and does not scroll inside the hero.

1. Nav on a warm translucent stone bar, inset from the edges, radius pill.
2. Left column: kicker, headline `Read every order before the week turns.`, one sentence, lime `Book a demo`, ghost `Get started`. Both mail `hello@scarp.example`.
3. Right: white rounded sheet titled `Week against week`, figure `$186,400`, one note, lime area chart labeled `Week 1` and `Week 2`, six `ORD-1840`–`ORD-1845` rows on the sheet’s right edge, foot `Orion desk`.
4. Lower edge of the photo: cream wordmarks, text only.

Below, on `--paper`, in this order:

1. Split. Left `(01) GET CLOSER`. Right: one paragraph and a lime pill `Read more` to `#steps`.
2. Headline `Start in four steps and keep the book in sight.`
3. Three specimens in one row. They are product UI, not icon cards.
4. `#steps`: four numbered lines, hairline separated.
5. Close: the hero headline again and `Book a demo`.
6. Footer: mark + wordmark, the four links, the email, `Sample template`.

Page measure below the hero: `min(1320px, 100% - 64px)`, left aligned inside that measure. Hero is full bleed.

### Specimens

Shared: white sheet, radius 16px, 1px `--line`, no drop shadow, no icon.

- Orders: real table. Ticket, yard, material, amount. Same six IDs as the hero sheet.
- Area: small lime area, same week labels.
- Bars: title exactly `Average order $48,200`. Vertical bars at full target height.

### Steps

`01` Open the week’s book on one desk.
`02` Read material, yard, price, and any hold.
`03` Flag a short load or a price that moved.
`04` Leave what was read when the week turns.

Each step is one line: number, then sentence. Not a card.

## Components

**Mark.** Small solid ring, stroke about 5.5 on a 32 view, gap near the top (not an open right side). Cream on the photo, ink on paper. No word inside the ring.

**Nav.** Brand (mark + Scarp), links `Platform` `#platform`, `Capabilities` `#capabilities`, `Use` `#steps`, `Solution` `#solution`. `Sign in` is a text link with an arrow. `Get started` is an outline pill. Both mail the desk. Bar uses `--stone-bar` plus a 1px cream hairline at 18% opacity.

**Primary button.** Fill `--lime`, label `--lime-ink`, pill, weight 600. Hover `#c8ea3e`. Active `#bddf32`. Focus: 2px `#1a1a1a` ring, offset 3px.

**Ghost / outline.** Transparent, 1px cream border, cream type, pill. Hover fills cream at 12%. Focus: 2px `--lime` ring.

**Hero sheet.** Radius 18px, `--sheet`, shadow `0 18px 50px rgba(20,14,10,.28)`. Padding 16–18px. Right-edge list is 11px, tabular, hairline rows, no chips.

**Specimen bar chart.** Each bar’s box height is its final `--h`. Do not start at height 0.

**Footer brand.** Same ring, ink, plus the word Scarp.

## Motion

Content is visible on first paint. No fade-in, no hidden headlines, no `transition: all`.

Allowed: `background-color` and `border-color` at 160ms ease on controls.

Bars may animate `transform: scaleY` from 0 to 1 (origin bottom, ~700ms) only inside `prefers-reduced-motion: no-preference`. Outside that query, no bar animation. Default `scaleY` is 1 so a still capture shows full bars.

## Responsive

Under 900px:

- The four section links hide behind a `Menu` button. `Sign in` and `Get started` stay in the bar. Open panel is a stone list under the bar; `Close` collapses it. Choosing a link closes it.
- Chart sheet moves under the headline.
- If the stack fits in the viewport, the photo covers nav, copy, sheet, and wordmarks.
- If the viewport is shorter than 780px, the photo stops at `100dvh`. Copy and wordmarks stay on the rock. The sheet continues on `--paper`.
- Specimens become one column. The ticket list may wrap under the area chart below 560px.
- Headlines use `clamp` and do not overflow the screen.

At `min-width: 900px` and `min-height: 820px`, the hero band is locked to `100dvh` with `overflow: hidden`.

## Anchors

`#capabilities` split. `#platform` specimens. `#steps` four lines. `#solution` close. `#top` hero.

## Do not

- Second typeface, serif, or purple.
- Lime used outside buttons and chart fills.
- Marketing icon cards, stock people, or a second photograph.
- Real company names, accelerator credits, or partner names other than the five wordmarks.
- `transition: all`. Opacity-0 content. Bars that rest at empty height.
