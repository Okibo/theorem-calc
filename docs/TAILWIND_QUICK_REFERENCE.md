# Tailwind CSS Quick Reference - TheoremCalc

## Most Used Classes

### Colors
```
Text: text-text-primary, text-text-secondary, text-text-tertiary
Background: bg-white, bg-surface
Borders: border-border
Primary: bg-blue-600, text-blue-600
Success: bg-green-600, text-green-600
Error: bg-red-600, text-red-600
Warning: bg-orange-500, text-orange-500
```

### Spacing (px notation: 2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
```
Padding: p-2, p-3, p-4, p-6, p-8
Padding X: px-3, px-4, px-6
Padding Y: py-2, py-3, py-4
Margin: m-2, m-3, m-4, m-6
Margin X: mx-2, mx-3, mx-4
Margin Y: my-2, my-3, my-4
Gap: gap-2, gap-3, gap-4, gap-6
```

### Typography
```
Size: text-xs, text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl
Weight: font-normal, font-medium, font-semibold, font-bold
Line Height: leading-tight, leading-normal, leading-relaxed
Letter Spacing: tracking-tight, tracking-normal, tracking-wide
```

### Layout
```
Display: block, inline-block, inline, flex, grid, hidden
Flex: flex-row, flex-col, items-center, justify-center, justify-between
Grid: grid-cols-1, grid-cols-2, grid-cols-3
Justify: justify-start, justify-center, justify-between, justify-end
Align: items-start, items-center, items-end
```

### Borders & Shadows
```
Border: border, border-2, border-l-4
Rounded: rounded-md, rounded-lg
Shadow: shadow-sm, shadow-md, shadow-lg
Ring: ring-1, ring-2
```

## Custom Component Classes

### Forms
```html
<input class="input-base" />
```

### Buttons
```html
<button class="btn-primary">Primary</button>
<button class="btn-secondary">Secondary</button>
```

### Cards
```html
<div class="card-base">Content</div>
<div class="result-card">Success</div>
<div class="error-card">Error</div>
<div class="warning-card">Warning</div>
```

### Layout Helpers
```html
<div class="flex-center">Centered</div>
<div class="flex-between">Space between</div>
<div class="grid-auto-fit">Responsive grid</div>
<div class="container-padding">Responsive padding</div>
```

## Responsive Breakpoints (Mobile-First)

```
Mobile:   (default)      320px+
sm:       small           640px+
md:       tablet/medium   768px+
lg:       desktop/large   1024px+
xl:       extra large     1280px+
2xl:      2x large        1536px+
```

### Examples
```html
<!-- Text size increases on larger screens -->
<h1 class="text-2xl md:text-3xl lg:text-4xl">Title</h1>

<!-- Grid layout changes at breakpoints -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">Items</div>

<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">Desktop only</div>
<div class="md:hidden">Mobile only</div>

<!-- Padding changes with screen size -->
<div class="px-4 sm:px-6 md:px-8">Content</div>
```

## Hover, Focus, and States

```
Hover:     hover:bg-blue-700, hover:text-white
Focus:     focus:ring-2, focus:outline-none
Active:    active:scale-95
Disabled:  disabled:opacity-50, disabled:cursor-not-allowed
Group:     group-hover:text-blue-600
Dark:      dark:bg-slate-900 (when enabled)
```

## Common Patterns

### Button with full width
```html
<button class="btn-primary w-full py-3">Click me</button>
```

### Input group
```html
<div class="space-y-4">
  <label class="block text-sm font-medium">Label</label>
  <input class="input-base" />
</div>
```

### Card with heading
```html
<div class="card-base space-y-3">
  <h3 class="text-lg font-semibold">Title</h3>
  <p class="text-text-secondary">Content</p>
</div>
```

### Two-column layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Center content
```html
<div class="flex-center h-screen">
  <div>Centered content</div>
</div>
```

### List with gaps
```html
<ul class="space-y-3">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Accessibility

```html
<!-- Focus visible (keyboard navigation) -->
<button class="focus-visible:outline-2 outline-blue-600">Button</button>

<!-- Or use custom focus-ring class -->
<button class="focus-ring">Button</button>

<!-- Screen reader only text -->
<span class="sr-only">Screen reader only</span>
```

## State Cards

### Success
```html
<div class="result-card">✓ Calculation successful</div>
```

### Error
```html
<div class="error-card">✗ Invalid input</div>
```

### Warning
```html
<div class="warning-card">⚠ Check your values</div>
```

## Color Reference

### Blue (Primary)
- bg-blue-50, bg-blue-100, bg-blue-200, bg-blue-300, bg-blue-400, bg-blue-500, bg-blue-600, bg-blue-700, bg-blue-800, bg-blue-900

### Slate (Secondary)
- bg-slate-50, bg-slate-100, bg-slate-200, bg-slate-300, bg-slate-400, bg-slate-500, bg-slate-600, bg-slate-700, bg-slate-800, bg-slate-900

### Green (Success)
- bg-green-50, bg-green-100, bg-green-200, ..., bg-green-600

### Red (Error)
- bg-red-50, bg-red-100, bg-red-200, ..., bg-red-600

### Orange (Warning)
- bg-orange-50, bg-orange-100, bg-orange-200, ..., bg-orange-500

## Dev Tips

1. **Mobile-first**: Write base styles, add breakpoints for larger screens
2. **Spacing scale**: Use 4px increments (4, 8, 12, 16, 24, 32...)
3. **No arbitrary values**: Use the design system spacing/sizes
4. **Component classes**: Use `.btn-primary` instead of repeating utilities
5. **Color consistency**: Use semantic naming (success, error, warning)
6. **Focus states**: Always add focus rings for accessibility
7. **Responsive text**: Use text size breakpoints for hierarchy
8. **Avoid repetition**: Extract components when reusing same utility combinations

## Documentation Links

- **Full Configuration**: docs/TAILWIND_CONFIGURATION.md
- **Best Practices**: docs/TAILWIND_BEST_PRACTICES.md
- **Setup Complete**: docs/TAILWIND_SETUP_COMPLETE.md
- **Official Docs**: https://tailwindcss.com/docs

## Build Commands

```bash
npm run dev      # Dev server with hot reload
npm run build    # Production build
npm start        # Start prod server
npm run lint     # ESLint check
npx tsc --noEmit # TypeScript check
```
