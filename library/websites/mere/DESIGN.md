# DESIGN — Mere

## Overview
- Audience: small desks (bakehouse, mill, studio) who ask their own numbers a plain question.
- Single CTA: Sign in (`mailto:hello@mere.example`). Secondary jump: View the desks → `#desks`.
- Emotion: a clear day, then a straight answer.
- Create this feeling through:
  - Sky first: the valley fills the top ~70% of the first screen; type sits on it in `text-on-sky`.
  - The page then goes solid `surface-night` and stays there. No second theme.
  - One white question card, one black proof pill overlapping its foot, then type rows — not cards.
  - `action-accent` only on the Ask chip, the send control, and the “View the desks” link.

## Source of truth
- This file + CSS `:root` in `index.html`. If they diverge, prefer the code and fix the file.

## Aesthetic commitment
- Name: Daylight ledger.
- Signature: a painted river valley with a white question card and a black proof pill tucked under it.
- Uniqueness: the product is one question, not a dashboard. Proof is three named desks as rows.

## Colors (semantic)
- surface-night: `#07080A` — page after the valley, desks, note, footer. Never a gray page.
- text-on-sky: `#FFFFFF` — nav, headline, subline on the valley. Needs the sky scrim.
- text-on-night: `#F4F2EC` — headlines and row names on night.
- text-muted: `#A7A59C` — subtext, questions, footer meta, “Mere 2.1”.
- surface-card: `#FFFFFF` — question card only.
- text-on-card: `#16181C` — input, toolbar labels, chip label.
- surface-pill: `#07080A` — Sign in on the sky, and the proof pill. White label.
- action-accent: `#F26B1D` — Ask chip fill, send fill, one text link. Ink label on the fills (white fails contrast).
- line-night: `rgba(244,242,236,0.16)` — row rules only.
- Usage: accent is never a band, never a nav, never the deep-read toggle. No purple. No second accent.

## Typography
- Display: Instrument Serif, italic, weight 400 — wordmark, H1, desks H2.
- Body: Figtree 400/500/600 — subline, UI, rows, note.
- Scale: H1 `clamp(2.65rem, 5.4vw, 4.7rem)` / leading 0.96; H2 `clamp(2rem, 4vw, 3.15rem)` / leading 1.05; subline `1rem` / leading 1.45; row `1rem`; meta `0.8125rem`.
- Rules: H1 is two lines, centered, no tracking tighter than `-0.02em`. Subline stays ~16px, not a second headline. Measure of the note ≤ 38rem.

## Space
- Page inset: 20px compact; 28px from 720px.
- Card max-width 560px. Card inset 16px compact, 18px expanded.
- Stack gap inside the ask cluster: 14px. Row padding-block: 18px.
- Section gap under the hero: 72px before the desks headline; 28px after the lede.

## Layout and responsiveness
### Compact (< 720px)
- Nav wraps: mark + links on one line if they fit; “Watch the note” and Sign in drop to the next line, left-aligned. No horizontal scroll.
- H1 uses the clamp; do not let it overflow.
- Card width `calc(100% - 20px)`, centered. Toolbar wraps; send stays reachable (≥44px).
### Medium (720–1023px)
- Nav on one line. Card 560px. Desks rows stack name, then question, then answer.
### Expanded (≥ 1024px)
- Same single column. Desks become one line each: name / question / answer, aligned on three tracks. Still not cards.

## Shape & elevation
- Card radius 16px. Sign in and proof pill radius 999px. Send radius 10px (square-ish, not a pill). Ask chip radius 999px.
- One shadow, on the card only: `0 16px 40px rgba(7,8,10,0.22)`. No shadow on rows, note, or footer.

## Components
### Nav
- Left: 16px eight-point asterisk svg + italic wordmark “Mere”. Then text links Pricing (`#pricing`) and Desks (`#desks`).
- Right: text “Watch the note” (`#note`), then Sign in pill (`surface-pill`, `text-on-sky`, mailto).
- States: link hover opacity 0.72; pill hover lifts to `#1C1E22`; focus-visible 2px `text-on-sky` outline, offset 3px. No underline bar.

### Question card
- White surface, one input, placeholder “Which desk shipped the Thursday note?”. Ink caret. Autofocus so the caret shows.
- Toolbar, left to right: Ask chip (spark svg + “Ask” + “Desk”, fill `action-accent`, label `text-on-card`); “Mere 2.1” in `text-muted`; Deep read toggle; “Workspace” label; send button.
- Deep read is a `button` with `aria-pressed`. Off: hollow track. On: filled ink track, label “Deep read on”. Not orange.
- Send: `action-accent` fill, ink arrow svg, radius 10px, 36×36. Hover darkens the orange slightly (`#D85A12`).
- Submit (Ask, send, or Enter) writes under the cluster, in `aria-live="polite"`: “Thursday's note went to 1,180 readers. The loaf page was the second stop.” Sample only. No “searching”, no server.
- Proof pill overlaps the card foot (`margin-top: -16px`): medal svg + “4.9 average · Loved by desks that ship on Thursday”.

### Hero foot
- Sits in the night band at the bottom of the first screen. One link: “View the desks”, color `action-accent`, href `#desks`. Hover underline. This is the only accent text link.

### Desk rows
- Anchor `#desks`. Italic H2 “Built by the desks”. Lede “Three rooms that asked Mere a question.”
- Three rows, hairline `line-night`, no fill: Hollis Bakehouse / Pell Mill / Calder Studio with the given question and answer. Name in `text-on-night` 600; question italic muted; answer `text-on-night`.

### Note and footer
- `#note`: one short paragraph, then Sign in as an inverse pill (white fill, ink label, mailto). Not orange.
- `#pricing` is one quiet line between the rows and the note so the nav link lands. Not a price grid.
- Footer: “Mere · Sample template · hello@mere.example”. Muted, on night.

## Motion
- Purpose: state only. Deep-read knob and answer reveal, 180ms, ease `cubic-bezier(0.22, 1, 0.36, 1)`.
- No `transition: all`. No scroll theater.
- `prefers-reduced-motion: reduce`: transitions and the scrim are instant; answer appears with no translate.

## Iconography
- Inline SVG only, 16px (spark, medal, asterisk) or 18px (send). Stroke or fill, one weight per icon. No emoji.

## Content
- Sentence case. Buttons are verbs: Sign in, Ask, View the desks.
- Fictional and modest. Do not claim team counts, real clients, or a live model.
- Do not use the reference product name, its partner wordmarks, or a designer handle.

## Ban list
- Inter, Roboto, purple `#6366F1`, emoji icons, three equal cards, orange fields, gradient text, scraped art, words in the valley image, `transition: all`.

## Accessibility
- Sky scrim keeps white nav and H1 readable on the painting. Accent fills use ink labels.
- Focus visible on every control. Tap targets ≥44px on compact. `aria-pressed` on Deep read. `aria-live` on the answer.
- Reduced motion honored. Input has a visible label (visually hidden if the placeholder carries the prompt).
