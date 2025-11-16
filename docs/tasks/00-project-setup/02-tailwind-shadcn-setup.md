# Task: Set Up Tailwind CSS and shadcn/ui Component Library

**Epic:** Project Setup & Infrastructure
**Estimated Duration:** 1 day
**Type:** Frontend / Design System

## Overview
Configure Tailwind CSS for mobile-first responsive styling and integrate shadcn/ui to provide a foundation of accessible, customizable UI components. This establishes the design system for all calculator components.

## Acceptance Criteria

- [ ] Tailwind CSS installed and configured in Next.js
- [ ] Tailwind config includes custom color palette per PRD specs
- [ ] Custom breakpoints configured: sm (640px), md (768px), lg (1024px), xl (1280px)
- [ ] shadcn/ui CLI initialized and configured
- [ ] Base shadcn/ui components installed:
  - Button
  - Input
  - Select
  - Toggle
  - Card
  - Label
- [ ] Dark mode support configured (if applicable)
- [ ] PostCSS configured for Tailwind processing
- [ ] CSS output file generated and working
- [ ] All Tailwind utilities available in components
- [ ] No build warnings related to CSS

## Technical Details

### Color Palette Implementation
```typescript
// tailwind.config.ts
colors: {
  primary: '#2563eb',      // Blue
  secondary: '#64748b',    // Slate
  success: '#16a34a',      // Green
  warning: '#f97316',      // Orange
  error: '#dc2626',        // Red
  background: '#ffffff',
  surface: '#f8fafc',
  border: '#e2e8f0',
  'text-primary': '#1e293b',
  'text-secondary': '#64748b',
  'text-tertiary': '#94a3b8'
}
```

### Typography Scale
```typescript
// tailwind.config.ts
fontSize: {
  xs: ['0.75rem', { lineHeight: '1rem' }],           // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }],       // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],          // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }],       // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],        // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],         // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],    // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }]       // 36px
}
```

### Spacing Scale
```typescript
// tailwind.config.ts
spacing: {
  '0.5': '2px',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '6': '24px',
  '8': '32px',
  '12': '48px',
  '16': '64px'
}
```

### shadcn/ui Component Setup
- Run `npx shadcn-ui@latest init` to scaffold component structure
- Components will be installed in `/components/ui/`
- Configure component aliases for cleaner imports
- Install with Tailwind as styling engine

## Dependencies
- Task: `01-nextjs-typescript-setup` (must complete first)

## Notes
- Mobile-first approach: design for 320px minimum width
- All components must be touch-friendly (48px+ targets)
- Tailwind utilities should be preferred over custom CSS
- Keep custom CSS minimal - leverage component composition
- Monitor bundle size: CSS should stay under 50KB gzipped

## Testing Approach
- Visual verification: Design system components render correctly
- Responsive testing: Breakpoints work on mobile (320px), tablet (768px), desktop (1024px)
- Manual test: All Tailwind utility classes available
- Check: shadcn/ui components can be imported without errors
- Verify: Color palette matches PRD specifications
