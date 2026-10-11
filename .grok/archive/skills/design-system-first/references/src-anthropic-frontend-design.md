# Source: Anthropic frontend-design skill

**Official skill:** https://github.com/anthropics/skills/tree/main/skills/frontend-design  
**Blog:** https://claude.com/blog/improving-frontend-design-through-skills  
**Captured:** 2026-08-12  

## Thesis

Without direction, models sample the high-probability center of training data → Inter, purple gradients, template layouts (**distributional convergence**). Skills load domain guidance on demand. Frontend improves when guidance maps to **implementable code axes**: type, color/theme, motion, backgrounds — at the right altitude (not only vibes, not only micro-hardcoded hex with no concept).

## What we absorbed into mydesignlib

### Plan before code (uniqueness gate)

1. Pin **subject**, **audience**, **single job** of the page  
2. Compact plan: 4–6 named colors · display + body (+ utility) · layout concept · **one signature element**  
3. Critique: *would this plan work unchanged for another startup?* If yes → revise that part  
4. Only then write HTML/CSS from the plan / DESIGN.md  

### Design principles

- Hero is a **thesis** from the subject’s world (materials, instruments, vernacular)  
- Typography carries personality; deliberate pairing and scale  
- Structure encodes meaning (don’t number non-sequences)  
- Spend boldness on **one** signature; keep surroundings quiet  
- **Chanel rule:** remove one accessory before ship  
- Copy is design material: active voice, specific controls, empty/error as direction  

### New AI-default clusters (avoid when brief leaves freedom)

1. Warm cream (~`#F4F1EA`) + high-contrast serif + terracotta accent  
2. Near-black + single acid-green or vermilion accent  
3. Pure broadsheet: hairline rules, zero radius, dense newspaper columns  

These are legitimate *when* the brief asks; they are not free “premium” defaults.

### Blog skill axes (compact)

- Distinctive fonts (not Inter/Roboto/Open Sans as display)  
- Cohesive theme; CSS variables; dominant + sharp accent  
- Orchestrated motion moments over scatter  
- Atmospheric backgrounds over flat default only when the aesthetic needs them  
- Avoid converging on the *same* “safe alternative” every time (e.g. always Space Grotesk)

## What we did not adopt

- Full ~400-token paste as permanent system prompt (skill already specialized)  
- `web-artifacts-builder` / React+Tailwind+shadcn path (conflicts with vanilla static library rule)  
- Pasting real company design systems as brand for catalog items  

## Maps to

| Repo skill | Use |
|------------|-----|
| `design-system-first` | Plan gate + DESIGN.md + tokens |
| `anti-slop-frontend` | Bans, thesis hero, copy craft, default clusters |
| `premium-site` | Multi-pass after plan |
| `interface-craft` | Micro details after macro polish |
