# Task: Implement Multi-Language Routing and i18n Structure

**Epic:** Project Setup & Infrastructure
**Estimated Duration:** 2 days
**Type:** Frontend / Internationalization

## Overview
Set up Next.js internationalization with `next-intl` library, configure locale detection, implement routing middleware, and create translation file structure for English, Spanish, and French support.

## Acceptance Criteria

- [ ] `next-intl` library installed and configured
- [ ] Middleware.ts configured for locale detection and redirection
- [ ] Accept-Language header detection working
- [ ] URL structure follows pattern: `/{locale}/{slug}...`
- [ ] Three locales working: `en`, `es`, `fr`
- [ ] Default locale set to `en` (English)
- [ ] Locale cookie/session persistence working (optional)
- [ ] Translation file structure created:
  - `public/locales/en/common.json`
  - `public/locales/es/common.json`
  - `public/locales/fr/common.json`
- [ ] Basic UI translations in all three languages
- [ ] Locale switcher component created but not yet integrated
- [ ] hreflang tags can be generated (implementation deferred to SEO phase)
- [ ] TypeScript support for translations (type-safe keys)
- [ ] No console warnings about missing translations

## Technical Details

### Directory Structure
```
theorem-calc/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx        # Locale-specific layout
│   │   ├── page.tsx          # Tool listing page
│   │   ├── [tool]/
│   │   │   ├── input/
│   │   │   │   └── page.tsx
│   │   │   └── results/
│   │   │       └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Root redirect
│
├── middleware.ts             # Locale detection & routing
├── public/
│   └── locales/
│       ├── en/
│       │   └── common.json
│       ├── es/
│       │   └── common.json
│       └── fr/
│           └── common.json
│
└── lib/
    └── i18n/
        ├── config.ts         # i18n configuration
        └── utils.ts          # Helper functions
```

### Translation File Structure (common.json)
```json
{
  "navigation": {
    "tools": "Tools",
    "about": "About",
    "privacy": "Privacy Policy",
    "terms": "Terms of Service",
    "language": "Language"
  },
  "common": {
    "calculate": "Calculate",
    "results": "Results",
    "steps": "Step-by-Step Solution",
    "copy": "Copy to Clipboard",
    "share": "Share",
    "print": "Print",
    "newCalculation": "New Calculation",
    "back": "Back"
  },
  "errors": {
    "required": "This field is required",
    "invalidNumber": "Please enter a valid number",
    "invalidInput": "Invalid input"
  }
}
```

### Middleware Implementation Pattern
```typescript
// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'es', 'fr']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if locale already in pathname
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // Detect from Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  const userLocale = acceptLanguage
    ?.split(',')[0]
    .split('-')[0]
    .toLowerCase() || defaultLocale

  const locale = locales.includes(userLocale) ? userLocale : defaultLocale

  // Redirect with locale prefix
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url))
}

export const config = {
  matcher: ['/((?!api|_next|public|favicon|robots|sitemap).*)']
}
```

## Dependencies
- Task: `01-nextjs-typescript-setup` (must complete first)
- Task: `02-tailwind-shadcn-setup` (UI components needed)

## Notes
- `next-intl` provides TypeScript support for translation keys
- Translations loaded from JSON files for static generation
- Locale is passed as a parameter through entire app
- Language switching will need URL navigation (deferred to later tasks)
- German, Portuguese, Japanese, Chinese, Russian, Arabic, Hindi support planned for future phases
- Missing translations should error in development mode

## Testing Approach
- Manual verification: Navigate to `/en/` - works
- Manual verification: Navigate to `/es/` - works
- Manual verification: Navigate to `/fr/` - works
- Manual verification: Navigate to `/` - redirects based on Accept-Language header
- Manual test: All translation keys accessible in components
- TypeScript: Verify translation key types prevent typos
- Verify: Locale parameter passed correctly through nested routes
