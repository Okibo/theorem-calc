# Tailwind CSS Configuration Guide

## Overview

TheoremCalc uses **Tailwind CSS v4** with a comprehensive design system configured for an educational calculator portal. The configuration is mobile-first, responsive, and optimized for educational content.

## Configuration Files

### Core Files
- **tailwind.config.ts** - Main Tailwind configuration with custom theme extensions
- **app/globals.css** - Global styles with @layer directives for base, components, and utilities
- **postcss.config.mjs** - PostCSS configuration (automatically configured by create-next-app)

## Custom Color Palette

The design system uses semantic color tokens mapped to utility classes:

### Primary Colors (Blue)
- `bg-blue-50` through `bg-blue-950` - Primary blue scale
- Primary color for actions, links, and CTAs
- **Hex Reference**: `#2563eb` (blue-600 - primary brand color)

### Semantic Colors
- **Success** (Green): `bg-green-50` to `bg-green-600` - Success messages, valid inputs
- **Warning** (Orange): `bg-orange-50` to `bg-orange-500` - Warnings, cautions
- **Error** (Red): `bg-red-50` to `bg-red-600` - Errors, invalid states

### Neutral Colors (Custom Theme)
Custom colors defined in `@theme` directive in globals.css:
- `--color-background: #ffffff` - Page background
- `--color-surface: #f8fafc` - Card/container background
- `--color-border: #e2e8f0` - Border color
- `--color-text-primary: #1e293b` - Primary text
- `--color-text-secondary: #64748b` - Secondary text
- `--color-text-tertiary: #94a3b8` - Tertiary/hint text

**Note**: Tailwind v4 uses native CSS custom properties, so custom colors use standard Tailwind classes (blue, slate, etc.) with semantic naming in utility classes.

## Typography Scale

All font sizes include optimized line heights for readability:

```
xs:   12px / 1rem line-height
sm:   14px / 1.25rem line-height
base: 16px (default) / 1.5rem line-height
lg:   18px / 1.75rem line-height
xl:   20px / 1.75rem line-height
2xl:  24px / 2rem line-height
3xl:  30px / 2.25rem line-height
4xl:  36px / 2.5rem line-height
```

### Usage
```html
<!-- Heading hierarchy -->
<h1 class="text-4xl font-bold">Main Title</h1>
<h2 class="text-3xl font-bold">Section Title</h2>
<h3 class="text-2xl font-semibold">Subsection</h3>
<p class="text-base">Body text</p>
<span class="text-sm text-text-secondary">Secondary text</span>
<code class="text-xs">Code snippet</code>
```

## Spacing Scale

Custom spacing scale optimized for calculator layouts:

```
0.5:  2px   (minimal spacing)
1:    4px   (tight)
2:    8px   (compact)
3:    12px  (small)
4:    16px  (default)
6:    24px  (medium)
8:    32px  (large)
12:   48px  (xl)
16:   64px  (2xl)
```

### Usage
```html
<div class="p-4 gap-6 mx-2">
  <button class="px-4 py-3">Action</button>
</div>
```

## Responsive Breakpoints (Mobile-First)

The design system follows mobile-first methodology. Base styles apply to all screen sizes; breakpoints add changes for larger screens.

```
(mobile):  320px+        (no prefix, base styles)
sm:        640px (up)    (small devices, landscape phone)
md:        768px (up)    (tablets)
lg:        1024px (up)   (desktop)
xl:        1280px (up)   (large desktop)
2xl:       1536px (up)   (extra large)
```

### Usage Examples

**Mobile-first layout:**
```html
<!-- Single column on mobile, 2 columns on tablets, 3 on desktop -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

**Responsive text:**
```html
<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">
  Quadratic Formula Solver
</h1>
```

**Responsive padding:**
```html
<div class="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
  Calculator content
</div>
```

**Responsive columns:**
```html
<div class="block sm:hidden">Mobile Layout</div>
<div class="hidden sm:block">Desktop Layout</div>
```

## Component Utilities

Custom component classes defined in `@layer components` in globals.css for calculator-specific UI:

### Form Elements

**.input-base** - Standard input field styling
```html
<input type="number" class="input-base" placeholder="Enter value">
```

Features:
- Full-width responsive
- Blue focus ring with proper contrast
- Disabled state styling
- Placeholder text color

### Button Variants

**.btn-base** - Base button styles
**.btn-primary** - Primary action buttons (blue)
**.btn-secondary** - Secondary action buttons (slate)

```html
<!-- Primary button -->
<button class="btn-primary px-6 py-3">Calculate</button>

<!-- Secondary button -->
<button class="btn-secondary px-6 py-3">Cancel</button>
```

### Card Components

**.card-base** - Standard card with border and shadow
```html
<div class="card-base">
  Calculator input form
</div>
```

**.result-card** - Success/result display (green accent)
```html
<div class="result-card">
  <h3>Result: 5.23</h3>
</div>
```

**.error-card** - Error message display (red accent)
```html
<div class="error-card">
  <p>Invalid input: Please enter a valid number</p>
</div>
```

**.warning-card** - Warning message display (orange accent)
```html
<div class="warning-card">
  <p>Caution: This value exceeds expected range</p>
</div>
```

## Utility Classes

Custom utility classes for common patterns:

### Accessibility
- `.sr-only` - Screen reader only content (hidden visually)
- `.focus-ring` - Consistent focus indicator outline

### Flexbox
- `.flex-center` - Flex with centered content
- `.flex-between` - Flex with space-between alignment

### Grid
- `.grid-auto-fit` - Responsive grid with auto-fit columns (250px minimum)

### Spacing
- `.container-padding` - Responsive container padding (4px mobile, 6px sm, 8px md+)

### Text
- `.truncate-line` - Single line text truncation with ellipsis
- `.truncate-lines-2` - Two-line text truncation with ellipsis

### Usage
```html
<!-- Centered flex layout -->
<div class="flex-center h-screen">
  <div>Loading...</div>
</div>

<!-- Responsive grid -->
<div class="grid-auto-fit">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Responsive padding -->
<div class="container-padding">
  Content with responsive padding
</div>
```

## Base Styles

Global base styles are applied automatically to all HTML elements:

### Headings
- Semantic heading hierarchy (h1-h6)
- Proper typography scale and weights
- Dark color for accessibility

### Links
- Blue color (`blue-600`)
- Underlined by default
- Hover state with darker blue
- Focus ring indicator for keyboard navigation

### Code
- Monospace font
- Light background
- Inline padding and rounding

### Paragraphs
- 1.5 line-height
- Automatic bottom margin (removed for last paragraph)

## Border Radius

Custom border radius scale:
```
none:  0
sm:    2px
base:  4px (default)
md:    6px
lg:    8px
xl:    12px
2xl:   16px
3xl:   24px
full:  9999px (fully rounded)
```

## Shadows

Five-level shadow system:
```
none: no shadow
sm:   Light shadow (1px offset)
base: Default shadow (3px offset)
md:   Medium shadow (6px offset)
lg:   Large shadow (15px offset)
xl:   Extra large shadow (25px offset)
2xl:  Double extra large (50px offset)
```

Usage: `shadow-sm`, `shadow-md`, `shadow-lg`, etc.

## Animation & Transitions

### Built-in Animations
- `animate-pulse` - Pulsing animation (e.g., loading states)
- `animate-fade-in` - Fade in animation (300ms)
- `animate-slide-in` - Slide up animation (300ms)

### Transition Utilities
Default transition duration: `200ms`
Custom durations: `duration-150`, `duration-300`, `duration-500`

```html
<button class="transition-colors duration-200 hover:bg-blue-700">
  Hover me
</button>
```

## Z-Index Layering

Semantic z-index scale for consistent layering:
```
hide:      -1
base:      0
dropdown:  1000
sticky:    1020
fixed:     1030
modal:     1040
popover:   1050
tooltip:   1060
```

## Dark Mode (Future Implementation)

The configuration is prepared for dark mode support. Use `dark:` prefix when dark mode is enabled:

```html
<div class="bg-white dark:bg-slate-900">
  Light/dark background
</div>
```

## Configuration Notes

### PostCSS
Tailwind v4 uses the `@tailwindcss/postcss` plugin configured in `postcss.config.mjs`:
```mjs
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Content Configuration
The `content` array in `tailwind.config.ts` tells Tailwind where to look for class names:
```ts
content: [
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./lib/**/*.{js,ts,jsx,tsx,mdx}",
]
```

### TypeScript Path Aliases
The project uses `@/*` path alias configured in `tsconfig.json`:
```json
"paths": {
  "@/*": ["./*"]
}
```

## Best Practices

### 1. Mobile-First Approach
Always start with mobile styles, then add breakpoint prefixes for larger screens:

```html
<!-- Good -->
<div class="text-sm md:text-base lg:text-lg">
  Responsive text
</div>

<!-- Avoid -->
<div class="lg:text-lg md:text-base text-sm">
  Confusing order
</div>
```

### 2. Semantic Colors
Use semantic naming in custom component classes:

```html
<!-- Good -->
<div class="result-card">Success!</div>

<!-- Less clear -->
<div class="bg-green-50 border-l-4 border-l-green-600">Success!</div>
```

### 3. Composition Over Inheritance
Compose utility classes rather than creating many custom component classes:

```html
<!-- Good: Compose from utilities -->
<button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
  Calculate
</button>

<!-- Less flexible: Too specific -->
<button class="btn-calculate">Calculate</button>
```

### 4. Responsive Containers
Use the `.container-padding` utility for consistent responsive padding:

```html
<!-- Good -->
<section class="container-padding">Content</section>

<!-- Manual -->
<section class="px-4 sm:px-6 md:px-8">Content</section>
```

### 5. Accessibility
Always ensure sufficient color contrast and keyboard navigation:

```html
<!-- Good: Has focus ring -->
<button class="focus-visible:outline-2 focus-visible:outline-offset-2 outline-blue-600">
  Accessible button
</button>

<!-- Bad: No focus indicator -->
<button>Not accessible</button>
```

## Testing Configuration

To verify the Tailwind setup:

```bash
# Type check
npx tsc --noEmit

# Build (includes CSS processing)
npm run build

# Development server (watch mode)
npm run dev
```

No warnings should appear for unknown utilities or missing classes.

## File Structure

```
theorem-calc/
├── app/
│   └── globals.css              # Global Tailwind styles
├── tailwind.config.ts           # Tailwind configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript config with path aliases
└── docs/
    └── TAILWIND_CONFIGURATION.md # This file
```

## Troubleshooting

### "Unknown utility class" Error
- Check spelling of utility class
- Verify class is in `content` array of `tailwind.config.ts`
- Ensure file is in watched directories

### Styles Not Applying
- Clear `.next` build cache: `rm -rf .next`
- Restart dev server: `npm run dev`
- Check class name matches Tailwind format

### Build Warnings
- Run `npm run build` to see full warnings
- Check for invalid Tailwind directives
- Verify custom colors are defined properly

## Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Tailwind CSS Configuration](https://tailwindcss.com/docs/configuration)
- [Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Customization Guide](https://tailwindcss.com/docs/adding-custom-styles)
