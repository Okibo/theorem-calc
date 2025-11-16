# Task: Integrate MathJax 3 for Mathematical Notation Rendering

**Epic:** Integration & SEO
**Estimated Duration:** 1 day
**Type:** Frontend Integration

## Overview
Integrate MathJax 3 library to render mathematical notation including superscripts, subscripts, fractions, Greek letters, and mathematical symbols. This enhances educational value and readability of calculator results.

## Acceptance Criteria

- [ ] MathJax 3 installed via CDN or npm package
- [ ] MathJax configuration set up for LaTeX input format
- [ ] MathDisplay component created:
  - Accepts LaTeX formula strings
  - Renders properly on all screen sizes
  - No horizontal scrolling on mobile
  - Fallback text for accessibility
- [ ] Mathematical elements render correctly:
  - Superscripts (x², x³)
  - Subscripts (x₁, x₂, aₙ)
  - Fractions (proper display, not just a/b)
  - Greek letters (Σ, Δ, θ, π, α, β, etc.)
  - Mathematical operators (+, -, ×, ÷, =, √, etc.)
  - Absolute value bars (|x|)
- [ ] Integration with solution steps:
  - Formulas display inline and block
  - Performance: < 1s render time for all formulas on a page
- [ ] Accessibility features:
  - Alternate text descriptions for formulas
  - Screen reader friendly (ARIA labels)
  - Mathematical notation accessibility
- [ ] Test coverage: 85%+
- [ ] All calculators tested with MathJax

## Technical Details

### MathJax Configuration
```typescript
// app/layout.tsx or appropriate location
<Script
  src="https://polyfill.io/v3/polyfill.min.js?features=es6"
  strategy="beforeInteractive"
/>
<Script
  id="mathjax-script"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
  strategy="beforeInteractive"
  onLoad={() => {
    window.MathJax?.typesetPromise?.([document.body])
  }}
/>
```

### MathDisplay Component
```typescript
interface MathDisplayProps {
  formula: string // LaTeX format
  display?: 'block' | 'inline'
  description?: string // Accessibility fallback
}

export function MathDisplay({ formula, display = 'block', description }: MathDisplayProps) {
  // Render LaTeX with fallback text
  // Handle accessibility
}
```

### LaTeX Format Examples
```
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
\Delta = b^2 - 4ac
\sigma = \sqrt{\frac{\sum(x - \mu)^2}{N}}
m = \frac{y_2 - y_1}{x_2 - x_1}
```

## Dependencies
- Task: `03-result-display-components` (must integrate with formula display)
- All calculator implementations (need formula rendering)

## Notes
- MathJax 3 is latest, lighter than MathJax 2
- CDN loading vs npm bundle trade-off: consider loading strategy
- Performance impact: monitor bundle size
- Fallback behavior: graceful degradation if MathJax fails
- Testing: visually verify formula rendering

## Testing Approach
- Unit test: Component renders LaTeX correctly
- Visual test: Compare formula output against reference
- Accessibility test: ARIA labels, screen reader friendly
- Performance test: Render time, bundle size impact
- Mobile test: No horizontal scroll, appropriate sizing
