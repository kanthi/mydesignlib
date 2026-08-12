# Source: make-interfaces-feel-better

**Repo:** https://github.com/jakubkrehel/make-interfaces-feel-better  
**Skill path (upstream):** `skills/make-interfaces-feel-better/`  
**Captured for mydesignlib:** 2026-08-12  

## Thesis

Interfaces feel expensive when many small design-engineering details compound: concentric radii, optical alignment, hit areas, icon stroke, tabular numbers, interruptible motion, press feedback. Upstream skill provides quick/full review modes with severity-ranked findings.

## What we absorbed

- Concentric border radius formula  
- Optical vs geometric alignment  
- Shadows for elevation vs borders for structure  
- Interruptible transitions; no `transition: all`  
- Stagger restraint; motion not sole feedback  
- Font smoothing, tabular-nums, text-wrap balance/pretty  
- Scale on press ~0.96  
- Minimum hit areas; icon stroke matched to type  
- `currentColor` icons; outline default / fill active  
- Review format: mode, coverage, findings table, rejected candidates, verdict  

## What we adapted

| Upstream | This repo |
|----------|-----------|
| Tailwind / React / Motion examples | Vanilla CSS + existing `:root` tokens |
| Framer Motion springs | CSS transitions / GSAP only if page already uses it |
| Generic app UI focus | Marketing templates under `library/` |
| Install via `npx skills add` | Distilled `.grok/skills/interface-craft/SKILL.md` |

## What we did not copy wholesale

- Full multi-file skill pack (`typography.md`, etc.) — principles collapsed into one SKILL.md  
- Framework-specific APIs  

## Related in this library

- Macro polish: `/premium-site` Part 4  
- Anti-generic aesthetics: `/anti-slop-frontend`  
- Tokens first: `/design-system-first`  
