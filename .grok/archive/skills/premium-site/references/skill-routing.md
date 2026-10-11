# Skill routing — don’t average ten design skills

Source: https://x.com/typakon4/status/2082869749021565259  
Author: @typakon4  

## Problem

Coding agents ship the same AI SaaS page for two opposite reasons:

1. **No visual direction**  
2. **Too many “make it beautiful” skills** — model averages contradictions  

## Skills worth keeping (from post + links)

| Skill | Role |
|-------|------|
| impeccable | preserve / refine / redesign + render pass — https://github.com/pbakaus/impeccable |
| anthropic frontend-design | subject → visual thesis before code — https://github.com/anthropics/skills |
| gpt-taste / taste-skill | expressive landing / editorial — https://github.com/Leonxlnx/taste-skill |
| design-taste | quieter baseline for normal surfaces |
| redesign-existing-projects | brownfield |
| bagel anti-slop | screenshot QA, missing states — BagelSkills anti-slop-frontend |
| microsoft frontend-design-review | hierarchy, a11y |
| huey | composition + UX writing |
| stitch design-md | durable design spec |

## Recommended route

```
direction
  → choose ONE implementation mode
  → screenshot QA
  → release review
  → design-system memory
```

**Mistake:** call all of them at once.

## This repo route

```
design-system-first   # plan gate + semantic DESIGN.md + tokens; read before build
  → anti-slop-frontend (check + copy craft)
  → clean-interface (when soft clean SaaS / product-as-proof)
  → ship-template | premium-site build
  → premium-site polish (type → space → motion → mobile + optional role lenses)
  → interface-craft (micro feel: radii, hit areas, icons, states)
  → brand audit + HTTP verify
```

**Do not** load Anthropic frontend-design + ui-ux-pro-max + taste-skill + impeccable + anti-slop all at once — they are already distilled here.

DESIGN.md quality:  
- Mistakes: `design-system-first/references/method-design-md-7-ai-mistakes.md`  
- Tips: `design-system-first/references/method-design-md-7-ai-tips.md`  
- Human: `docs/method-design-md-for-ai.md`  

Craft micro-audit: `.grok/skills/interface-craft/SKILL.md`
