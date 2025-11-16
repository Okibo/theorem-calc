# TheoremCalc Documentation

Welcome to the TheoremCalc project documentation. This directory contains all guides, specifications, and implementation details for the educational calculator portal.

## Quick Navigation

### Tailwind CSS Setup (Recently Completed)
1. **[TAILWIND_CONFIGURATION.md](./TAILWIND_CONFIGURATION.md)** - Complete configuration reference
   - Color palette and semantic naming
   - Typography scale and spacing system
   - Responsive breakpoints and mobile-first approach
   - Component utilities and base styles
   - Configuration details and best practices

2. **[TAILWIND_QUICK_REFERENCE.md](./TAILWIND_QUICK_REFERENCE.md)** - Developer quick reference
   - Most used utility classes
   - Custom component classes
   - Responsive breakpoint examples
   - Common patterns and examples
   - Color reference guide

3. **[TAILWIND_BEST_PRACTICES.md](./TAILWIND_BEST_PRACTICES.md)** - Development patterns
   - Core principles (composition, mobile-first, semantics)
   - Calculator-specific patterns (inputs, results, errors, warnings)
   - Responsive layout patterns
   - Accessibility patterns
   - Performance considerations
   - Common patterns reference table

4. **[CALCULATOR_UI_PATTERNS.md](./CALCULATOR_UI_PATTERNS.md)** - Ready-to-use components
   - Page structure pattern
   - Input form pattern
   - Results display pattern
   - Validation messages
   - Step progress indicators
   - Calculator grid/menu
   - Alert boxes
   - Two-page flow layout
   - Responsive layouts

5. **[TAILWIND_SETUP_COMPLETE.md](./TAILWIND_SETUP_COMPLETE.md)** - Setup completion report
   - Configuration summary
   - Verification results
   - Design system specifications
   - Usage guidelines
   - File locations and structure
   - Next steps and roadmap
   - Performance notes

## Project Structure

```
theorem-calc/
├── app/
│   ├── globals.css              # Global Tailwind styles with @layers
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Home page
├── components/
│   ├── ui/                      # shadcn/ui components (future)
│   ├── calculators/             # Calculator-specific components
│   └── shared/                  # Shared components
├── lib/
│   ├── calculations/            # Math/science logic
│   ├── validators/              # Input validation
│   ├── utils/                   # Utility functions
│   └── hooks/                   # Custom React hooks
├── public/
│   └── locales/                 # i18n translation files
├── supabase/
│   ├── migrations/              # Database migrations
│   └── functions/               # Edge Functions
├── tests/
│   ├── unit/                    # Unit tests
│   └── integration/             # Integration tests
├── docs/
│   ├── TAILWIND_CONFIGURATION.md
│   ├── TAILWIND_BEST_PRACTICES.md
│   ├── TAILWIND_QUICK_REFERENCE.md
│   ├── CALCULATOR_UI_PATTERNS.md
│   ├── TAILWIND_SETUP_COMPLETE.md
│   ├── design/                  # UI/UX designs
│   ├── architecture/            # Architecture docs
│   └── database/                # Database schema
├── tailwind.config.ts           # Tailwind configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── next.config.ts               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── CLAUDE.md                    # AI assistant guidelines
└── README.md                    # Project overview
```

## Technology Stack

- **Frontend**: Next.js 16 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (to be configured)
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Testing**: Jest
- **Quality**: ESLint + Prettier
- **Localization**: Next.js i18n routing

## Design System

### Colors
- **Primary**: Blue (#2563eb)
- **Secondary**: Slate (#64748b)
- **Success**: Green (#16a34a)
- **Warning**: Orange (#f97316)
- **Error**: Red (#dc2626)

### Typography
- Heading scales: xs (12px) to 4xl (36px)
- Font weights: normal, medium, semibold, bold
- Line heights optimized for readability

### Spacing Scale
2px, 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px

### Responsive Breakpoints
- Mobile: 320px+ (default)
- sm: 640px (small devices)
- md: 768px (tablets)
- lg: 1024px (desktop)
- xl: 1280px (large desktop)
- 2xl: 1536px (extra large)

## Getting Started

### Development
```bash
npm install                 # Install dependencies
npm run dev                 # Start dev server (localhost:3000)
```

### Building
```bash
npm run build               # Production build
npm start                   # Start production server
npm run lint                # Run ESLint
npm run format              # Format code with Prettier
```

### Type Checking
```bash
npx tsc --noEmit            # Check TypeScript types
```

## Key Features

### Mobile-First Design
All components are designed for mobile first, then enhanced with breakpoint prefixes for larger screens.

### Component Utilities
Pre-built Tailwind component classes for calculator UI:
- `.input-base` - Standard input fields
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.card-base` - Standard cards
- `.result-card` - Success/result cards
- `.error-card` - Error message cards
- `.warning-card` - Warning message cards

### Responsive Utilities
- `.container-padding` - Responsive horizontal padding
- `.grid-auto-fit` - Responsive grid with auto-fit columns
- `.flex-center` - Centered flex container
- `.flex-between` - Space-between flex layout

### Accessibility
- Focus ring utilities for keyboard navigation
- Semantic HTML with Tailwind utilities
- Color contrast compliant
- Screen reader support

## Performance Targets

- **CSS Bundle**: 39KB (uncompressed, excellent for Tailwind v4)
- **Build Time**: ~1s (Tailwind v4 engine-based compilation)
- **Page Load**: <2s desktop, <3s mobile
- **Lighthouse**: Performance 90+, SEO 100, Accessibility 90+

## Development Workflow

### Adding a New Calculator
1. Create calculation logic in `lib/calculations/[name].ts`
2. Write Jest tests for the calculation
3. Create calculator component in `components/calculators/[Name].tsx`
4. Add routes in `app/[locale]/[tool-slug]/`
5. Add i18n translations
6. Test responsiveness across breakpoints

### Creating Components
1. Follow mobile-first approach (design for small screens first)
2. Use custom component classes (`.card-base`, `.btn-primary`, etc.)
3. Compose with utility classes for flexibility
4. Ensure keyboard navigation with focus indicators
5. Test color contrast for accessibility

### Using Tailwind Classes
```html
<!-- Mobile-first responsive text -->
<h1 class="text-2xl sm:text-3xl md:text-4xl font-bold">Title</h1>

<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Custom component classes -->
<div class="result-card">✓ Success</div>

<!-- Interactive with focus -->
<button class="btn-primary focus-visible:outline-2 outline-offset-2 outline-blue-600">
  Click me
</button>
```

## Git Workflow

- **Branch naming**: 
  - Features: `feature/*`
  - Tasks: `task/*`
  - Fixes: `fix/*`
- **Current branch**: `task/tailwind-shadcn-setup`
- **Main branch**: `master`

## Environment Setup

### Required
- Node.js 18+
- npm 8+ (or yarn/pnpm)
- Git

### Optional
- VS Code with ESLint and Prettier extensions
- Browser with DevTools

## Common Commands

```bash
# Development
npm run dev                 # Hot-reload dev server

# Production
npm run build              # Optimize for production
npm start                  # Run production server

# Quality
npm run lint               # Check code quality
npm run format             # Auto-format code
npm run format:check       # Check formatting

# Type Safety
npx tsc --noEmit           # Type checking
```

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **shadcn/ui**: https://ui.shadcn.com
- **TypeScript**: https://www.typescriptlang.org/docs
- **Supabase**: https://supabase.com/docs

## Next Steps

1. **shadcn/ui Setup** - Install and configure shadcn/ui components
2. **Component Library** - Build reusable calculator components
3. **Calculator Implementation** - Start with MVP calculators
4. **Internationalization** - Set up multi-language support
5. **Database Schema** - Create Supabase tables for user data
6. **Authentication** - Implement Supabase Auth

## Support & Questions

For questions about:
- **Tailwind CSS**: See `TAILWIND_BEST_PRACTICES.md` or `TAILWIND_QUICK_REFERENCE.md`
- **Component Patterns**: See `CALCULATOR_UI_PATTERNS.md`
- **Configuration**: See `TAILWIND_CONFIGURATION.md`
- **Project Structure**: See `CLAUDE.md`

---

**Last Updated**: 2025-11-16
**Status**: Ready for Development
**Next Milestone**: shadcn/ui Integration
