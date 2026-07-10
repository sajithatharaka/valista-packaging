# Brand Color Palette

Color palette — pulled straight from your logo.

| Role | Color name | Hex | Use |
| --- | --- | ---: | --- |
| Primary accent | Valista Green | `#00A550` | Trust / sustainability — CTAs, icons |
| Primary (AA-safe) | Deep Green | `#007A3D` | Buttons, links, text on light bg |
| Secondary accent | Valista Orange | `#F5811F` | Energy — capped to ~10% coverage, highlights only |
| Ink | Warm Near-Black | `#221F1C` | Headlines, body text |
| Muted text | Warm Gray | `#64625E` | Secondary copy (AA compliant) |
| Base | Paper White | `#FAF7F1` | Page background |
| Section tint | Kraft Tan | `#EFE6D6` | Alternating section backgrounds — nods to actual cardboard |

## Accessibility notes
- Deep Green `#007A3D` is chosen as an AA-safe primary for text/buttons on light backgrounds.  
- Warm Gray `#64625E` is intended for secondary copy and should meet AA contrast for typical UI sizes on `#FAF7F1`.  
- Use Valista Orange `#F5811F` sparingly (≈10% coverage) for emphasis and highlights to preserve readability.

## CSS variables (example)
Use these in your project root stylesheet:

```css
:root {
  --valista-green: #00A550;
  --deep-green:   #007A3D;
  --valista-orange:#F5811F;
  --ink:          #221F1C;
  --warm-gray:    #64625E;
  --paper-white:  #FAF7F1;
  --kraft-tan:    #EFE6D6;
}
```

## Simple usage examples
- Primary CTA: background `--valista-green`, text `--paper-white`.  
- Secondary CTA / links on light bg: background `--deep-green`, text `--paper-white`.  
- Headlines: color `--ink`. Body text: `--ink` with muted inline/supporting text `--warm-gray`.  
- Page background: `--paper-white`. Alternate section backgrounds: `--kraft-tan`.  
- Sparing highlights / badges: `--valista-orange` (keep ≤10% visual coverage).

## Token suggestions for design systems
- color-primary (accent) → `--valista-green`  
- color-primary-strong → `--deep-green`  
- color-accent → `--valista-orange`  
- color-text-default → `--ink`  
- color-text-muted → `--warm-gray`  
- color-bg → `--paper-white`  
- color-bg-muted → `--kraft-tan`
