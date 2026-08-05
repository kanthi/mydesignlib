# monokern — design system handoff

Source: https://x.com/monokern/status/2083610099549954330  
Author: @monokern  

## Fix for generic AI sites

First try = flat template, default fonts, boring layouts.

### Workflow

1. Create a **custom Design System** (Claude Design or equivalent) by uploading visual references / brand assets  
2. Extract into a reusable system:  
   - typography  
   - color palettes  
   - wordmarks  
   - border radii  
   - elevation rules  
3. Apply across site layout, components, brand assets  
4. **Export the complete spec** into the coding agent so the live site keeps visual fidelity  

Example portfolio claim: mason-harrison(.vercel.app)

## Repo adaptation

Without Claude Design product:

1. Write `DESIGN.md` or CSS `:root` tokens in the template folder **before** large layout work  
2. Or run `/design-system-first` to produce tokens + short DESIGN.md snippet  
3. Only then run build / polish skills  
