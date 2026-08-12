---
name: interface-craft
description: >
  Post-build design-engineering audit for micro polish: concentric radii, optical alignment,
  hit areas, icons, tabular numbers, motion restraint, hover/focus/press states. Use when the
  user says make it feel better, craft audit, optical alignment, interface polish, micro
  interactions review, UI feel, or /interface-craft. Run after premium-site polish (or a solid
  first ship); does not replace design-system-first, anti-slop, or brand rules. Complements
  premium-site macro passes (type/space/motion/mobile).
---

# Interface craft (micro feel audit)

Synthesized from:

- [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (craft principles + quick/full review format)  
- Skill routing notes: design-review / craft passes after direction is set  
- Full notes: `references/src-make-interfaces-feel-better.md`

**Core rule:** Premium macro layout can still *feel* off. Small, compounding details (radii, hit targets, icon weight, press feedback) make interfaces feel intentional. This skill **reviews and fixes craft** against the item’s existing design system — it does **not** invent a new palette or aesthetic.

Always respect root `AGENTS.md` (fictional brands, original assets, vanilla static).

## When to use

| Intent | Action |
|--------|--------|
| After `/premium-site` polish | Run **quick** or **full** craft review on `library/<type>/<id>/` |
| “Feels slightly off / cheap / unfinished” | Full review → fix HIGH then MEDIUM |
| Building interactive chrome (nav, buttons, forms) | Apply principles while coding; optional quick review after |
| Multi-skill stack already loaded | Use this **last** before brand audit — not in parallel with five design skills |

## Modes

| Mode | Cap | Coverage |
|------|-----|----------|
| **quick** (default if user is hurried) | ≤5 findings (HIGH + MEDIUM only) | Primary path: hero, nav, primary CTA, one content band |
| **full** (default) | ≤15 findings | Typography, surfaces, animations, icons, interaction states |

State mode + scope at the start of the report.

## Hard constraints (this repo)

1. **Express fixes in the item’s system** — existing CSS `:root` tokens, classes in `index.html` / linked CSS. Do not introduce Tailwind, React, Framer Motion, or a second styling approach.  
2. **Do not rename design tokens** mid-craft unless fixing a clear bug (e.g. wrong radius var). Prefer additive CSS.  
3. **Read** `library/.../DESIGN.md` if present; honor ban list and radius philosophy.  
4. **Respect** `prefers-reduced-motion` — craft motion must degrade.

## Principles (apply when building or reviewing)

### Surfaces

1. **Concentric border radius** — nested corners: outer ≈ inner + padding gap (when gap is small). Equal nested radii look pinched.  
2. **Optical over geometric alignment** — icons in buttons, play triangles, asymmetric marks often need 1–2px nudge.  
3. **Shadows for elevation, borders for structure** — don’t use heavy borders only to fake depth; keep borders for dividers/selection/focus.  
4. **Image edge** — optional 1px low-opacity outline (black @ ~10% light mode / white @ ~10% dark) so photos don’t dissolve into the surface. Prefer pure black/white alpha, not tinted neutrals.  
5. **Hit areas** — interactive controls ≥44×44px on touch/mobile; ≥40×40px dense desktop. Expand with padding or `::before` hit-box; don’t overlap hit areas.

### Typography

6. **Font smoothing** — `-webkit-font-smoothing: antialiased` on root when using web fonts on dark/light UI.  
7. **Tabular numbers** — `font-variant-numeric: tabular-nums` on counters, prices, timers, live stats.  
8. **Text wrap** — `text-wrap: balance` on display headings; `text-wrap: pretty` on body when supported.

### Motion & interaction

9. **Interruptible state changes** — CSS transitions for hover/focus/active; keyframes for one-shot staged entrances only.  
10. **Specify properties** — never `transition: all`; list `transform, opacity, color, box-shadow` as needed.  
11. **Scale on press** — `active { transform: scale(0.96) }` (not below ~0.95).  
12. **Motion restraint** — no custom animation on high-frequency interactions (every keystroke/hover thrash). Motion is never the only feedback; also change color, border, or label.  
13. **Stagger sparingly** — ~80–100ms stagger for infrequent entrance hierarchy; not for routine UI.  
14. **Reduced motion** — opacity-only or off under `prefers-reduced-motion: reduce`.

### Icons

15. **One set, one stroke language** — match stroke weight to nearby text (~1.5px regular, ~2px semibold).  
16. **`currentColor`** — recolor via CSS; outline default, fill for active/selected.  
17. **No emoji as icons** (also anti-slop).

## Review output format

### 1. Scope header

```
Mode: full | quick
Scope: library/websites/<id>/ (or component list)
System: vanilla CSS + :root tokens (list key files)
```

### 2. Coverage table

| Category | Evidence | Result |
|----------|----------|--------|
| Typography | files / selectors checked | N findings / Clear / Not reviewed |
| Surfaces | … | … |
| Animations | … | … |
| Icons | … | … |
| Interaction / hit areas | … | … |

### 3. Findings (by principle)

| Severity | Location | Before | After | Why |
|----------|----------|--------|-------|-----|
| HIGH / MEDIUM / LOW | `path:line` or component | current | proposed fix | principle + user impact |

- **HIGH** — accessibility or repeatedly broken interaction  
- **MEDIUM** — noticeable consistency / usability issue  
- **LOW** — pure polish (full mode only)

### 4. Considered but rejected (1–3 quick / 2–5 full)

| Location | Candidate | Rejected because |
|----------|-----------|------------------|
| … | … | consistency with DESIGN.md / token system |

### 5. Verification + verdict

- What was checked (hover, focus, 375px, reduced-motion if relevant)  
- **Verdict:** `Block` (any HIGH left) · `Needs changes` (MEDIUM/LOW left) · `Approve` (none actionable)

## Implementation pass

After findings, **apply** fixes for HIGH and MEDIUM (unless user asked review-only). Keep diffs small and local. Re-read DESIGN.md if a fix would fight the system (e.g. rounding philosophy).

Then hand off to ship-template finish: brand audit + HTTP verify if the item is shipping.

## Quality checklist (craft gate)

- [ ] Nested radii look concentric where nested  
- [ ] Primary buttons/nav have adequate hit areas  
- [ ] Focus rings visible; press feedback present on primary CTAs  
- [ ] Icons weight-matched; no emoji icons  
- [ ] Dynamic numbers use tabular-nums if present  
- [ ] No `transition: all` on animated chrome  
- [ ] Reduced-motion path exists if motion is non-trivial  
- [ ] Tokens / aesthetic from DESIGN.md unchanged  

## Anti-patterns

- Using this skill **instead of** design-system-first on a greenfield page  
- Introducing Tailwind/React “because the source skill uses them”  
- Renaming the whole type scale during a craft pass  
- Stacking with five other design skills in one turn  
- Padding findings with LOW noise when user asked quick mode  

## Done

- [ ] Mode + scope stated  
- [ ] Findings table (or “no actionable findings”)  
- [ ] HIGH/MEDIUM fixed if implementing  
- [ ] Verdict  
- [ ] Next step: brand audit / HTTP verify if shipping  
