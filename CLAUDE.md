# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**TheoremCalc** is an ad-supported educational calculator portal targeting students, educators, and professionals. The MVP launches with 15 calculators across three domains:

- **Math**: Quadratic Formula Solver, Standard Deviation, Slope, Percentage, Sig Figs
- **Chemistry**: Molar Mass, Chemical Equation Balancer, Molarity, Stoichiometry, Percent Error
- **Physics**: Kinematics, Ohm's Law, Force (F=ma), Kinetic Energy, Momentum

**Revenue Model**: Two-page flow (input page + results page) doubles ad impressions per user. Full multi-language support with SEO optimization for organic growth.

## Technology Stack

- **Frontend**: Next.js (SSR/SSG for performance and SEO)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Vercel
- **Testing**: Jest (TDD mandatory)
- **Quality**: ESLint + Prettier
- **Mobile**: Capacitor (iOS/Android wrappers)
- **Integrations**: Firebase (FCM for notifications), SendGrid (email), Google AdSense

## Development Commands

```bash
# Development
npm run dev              # Start Next.js dev server (localhost:3000)
npm run build            # Production build
npm start                # Start production server

# Testing & Quality
npm test                 # Run Jest tests
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run format:check     # Check formatting without changes

# Type Checking
npx tsc --noEmit         # TypeScript type checking
```

## Project Structure

```
app/                     # Next.js app directory
├── [locale]/            # i18n routing
├── auth/                # Authentication pages
├── api/                 # API routes
└── [tool-slug]/         # Calculator tool pages

components/
├── ui/                  # shadcn/ui components
├── calculators/         # Calculator-specific components
└── shared/              # Shared components

lib/
├── hooks/               # Custom React hooks
├── utils/               # Utility functions
├── validators/          # Input validation
└── calculations/        # Mathematical/scientific logic

supabase/
├── migrations/          # Database schema migrations
└── functions/           # Edge Functions

public/
└── locales/             # i18n translation files (en, es, fr, de, pl)

tests/
├── unit/                # Unit tests
└── integration/         # Integration tests

docs/
├── tasks/               # Implementation task breakdown (2-day max per task)
├── design/              # UI/UX designs (mobile-first)
├── architecture/        # Architecture documentation
└── database/            # Database schema docs
```

## Key Architectural Patterns

### Multi-Language Routing (i18n)
- URL structure: `/{locale}/{tool-slug}` (e.g., `/en/quadratic-solver`, `/es/calculadora-cuadratica`)
- Separate indexable pages for each language
- hreflang tags in page metadata for SEO
- Translation files in `public/locales/[locale]/`

### Two-Page Flow
- **Page 1**: Calculator input form with ads
- **Page 2**: Results page (`/[locale]/[tool-slug]/result`) with step-by-step solution and ads
- This doubles ad impressions per user session

### Calculator Architecture
Each calculator tool follows this pattern:
- Input validation and error handling
- Step-by-step calculation logic (business logic in `lib/calculations/`)
- Display component with "Show Your Work" sections
- Mobile-responsive layout
- Proper TypeScript typing for all inputs/outputs

### Database Schema
Supabase is used for:
- User authentication (Supabase Auth)
- User preferences and saved calculations
- Analytics tracking (page views, calculator usage)
- Edge Functions for server-side calculations (if needed)

## Development Workflow

### Task-Based Development
1. Tasks are created in `/docs/tasks/[epic-name]/[task-name]/task.md`
2. Each task has a maximum 2-day implementation window
3. Progress tracked in `/docs/tasks/PROGRESS.md`
4. Use `/implement-task` command to execute specific tasks

### Test-Driven Development (Mandatory)
1. Write Jest tests FIRST that demonstrate expected behavior
2. Tests document the expected API and edge cases
3. Implementation follows test specifications
4. All tests must pass before marking task complete

### UI/UX Design First (Frontend)
1. UI/UX designer creates mobile-first mockups in `/docs/design/[task-name]/`
2. React expert implements components based on design specs
3. shadcn/ui provides base components for consistency
4. Responsive design templates available in `/docs/sketches/`

### Git Workflow
- Feature branches: `feature/*` for new features
- Task branches: `task/*` for task-based work
- Bug fix branches: `fix/*` for bug fixes
- Commit message format: Clear, concise description of changes
- Repository configured to use: Email `pkalkun@gmail.com`, Name `Okibo`

## Testing Strategy

- **Unit Tests**: Test individual utility functions, validators, calculation logic
- **Component Tests**: Test React components with different props and states
- **Integration Tests**: Test multi-component interactions and API calls
- **Jest Configuration**: Standard Next.js Jest setup with TypeScript support
- **Coverage Target**: Aim for >80% coverage on critical paths

Location: `tests/` directory, mirroring source structure

## SEO & Internationalization

### SEO Optimization
- Each calculator gets its own dedicated, keyword-optimized page
- Metadata includes title, description, canonical URL
- hreflang tags point to alternate language versions
- Open Graph tags for social sharing
- Structured data (Schema.org) for search engines
- Sitemap generated for all locales and tools

### i18n Configuration
- Next.js i18n routing with `[locale]` dynamic segment
- Default locale: `en` (English)
- Supported locales: `en`, `es` (Spanish), `fr` (French), `de` (German), `pl` (Polish)
- Missing translations should raise an error during development
- All UI strings must be translatable

## Performance & Deployment

### Performance Targets
- Page load: <2 seconds (desktop), <3 seconds (mobile)
- Lighthouse scores: Performance 90+, SEO 100, Accessibility 90+
- Images: Optimized with Next.js Image component
- Code splitting: Automatic via Next.js dynamic imports

### Deployment
- Hosted on Vercel (seamless Next.js integration)
- Environment variables managed in Vercel dashboard
- Preview deployments for branches
- Production deployments from `master` branch
- Edge Functions via Supabase for server-side logic

## MCP Servers & AI Agents

### Available MCP Servers
- **context7**: Documentation lookup for libraries
- **playwright**: Browser automation for E2E testing
- **supabase**: Direct Supabase database operations

### Specialized Agents (Use `/implement-task` for coordination)
- **Software-Architect**: System design and major architectural decisions
- **Frontend-React-Expert**: React component development
- **UI-UX-Designer**: Design creation (mobile-first)
- **Shadcn-Expert**: shadcn/ui component guidance
- **Tailwindcss-Expert**: Styling and responsive design
- **Nextjs-Expert**: Next.js framework guidance
- **Postgres-Expert**: Database optimization and schema design
- **Supabase-Expert**: Supabase-specific architecture
- **Jest-Expert**: Testing strategy and implementation
- **TypeScript-Expert**: Type safety and patterns
- **ESLint-Expert**: Code quality and standards
- **Security-Expert**: Security best practices
- **Vercel-Expert**: Deployment and optimization
- **Firebase-Expert**: FCM push notifications
- **SendGrid-Expert**: Email integration
- **Prd-Task-Generator**: Break PRDs into implementation tasks

## Common Development Tasks

### Adding a New Calculator
1. Create calculator logic in `lib/calculations/[name].ts` with full TypeScript types
2. Write Jest tests for calculation logic first
3. Create calculator component in `components/calculators/[Name].tsx`
4. Add route in `app/[locale]/[tool-slug]/` with input and result pages
5. Add i18n translations for all supported locales
6. Optimize page metadata for SEO
7. Test across mobile and desktop breakpoints

### Adding a New Language
1. Create translation file: `public/locales/[locale]/common.json`
2. Update locale configuration
3. Test i18n routing generates correct URLs
4. Add hreflang tags to all calculator pages
5. Submit sitemap to search engines

### Database Schema Changes
1. Create migration file in `supabase/migrations/`
2. Write migration SQL with up/down scripts
3. Apply migration: Use Supabase dashboard or CLI
4. Generate TypeScript types: `npx supabase gen types typescript`
5. Update type definitions in codebase

### Deploying to Vercel
1. Push changes to `master` branch
2. Vercel automatically builds and deploys
3. Verify deployment preview in PR (if applicable)
4. Check performance metrics in Vercel dashboard

## Debugging & Troubleshooting

### Common Issues

**Type Errors**:
- Run `npx tsc --noEmit` to find all TypeScript errors
- Check `tsconfig.json` for strict mode settings

**Styling Issues**:
- Ensure Tailwind CSS is properly configured in `tailwind.config.js`
- Check breakpoint responsive classes: `sm:`, `md:`, `lg:`, `xl:`
- Use shadcn/ui components for consistent styling

**i18n Issues**:
- Ensure all keys exist in all locale files
- Check locale parameter is properly passed to components
- Verify hreflang tags on pages

**Database Issues**:
- Check Supabase connection string in environment variables
- Verify migrations have been applied: Check supabase/migrations/
- Use Supabase dashboard to inspect tables and data

**Performance Issues**:
- Use Lighthouse DevTools in browser
- Check Vercel Analytics dashboard
- Use Chrome DevTools Network tab for load time analysis
- Consider code splitting for large components

## Code Style & Standards

- **TypeScript**: Strict mode enabled, no `any` types without justification
- **Components**: Functional React components with hooks
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Exports**: Default exports for pages, named exports for utilities/components
- **CSS**: Tailwind utility classes preferred, shadcn/ui for complex components
- **Comments**: Document complex logic, not obvious code

## Performance Monitoring

- **Vercel Analytics**: Monitor real-world performance metrics
- **Lighthouse**: Run locally during development
- **Web Vitals**: Track Core Web Vitals (LCP, FID, CLS)
- **SEO**: Use Google Search Console for ranking and indexing data

## Resources

- Next.js Docs: https://nextjs.org/docs
- Supabase Docs: https://supabase.com/docs
- shadcn/ui: https://ui.shadcn.com
- Tailwind CSS: https://tailwindcss.com/docs
- Jest: https://jestjs.io/docs
- TypeScript: https://www.typescriptlang.org/docs
