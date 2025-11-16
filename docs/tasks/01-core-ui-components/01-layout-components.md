# Task: Build Core Layout Components (Header, Footer, Navigation)

**Epic:** Core UI Components
**Estimated Duration:** 1 day
**Type:** Frontend / UI Components

## Overview
Create reusable layout components that form the scaffold of every page: Header, Footer, Navigation, and MainLayout wrapper. These components establish consistent branding, navigation patterns, and responsive behavior across the entire application.

## Acceptance Criteria

- [ ] Header component created with:
  - Logo/brand
  - Language switcher button (styling only, functionality in later task)
  - Responsive menu button (mobile only, hamburger icon)
  - Sticky positioning on scroll (optional, nice-to-have)
- [ ] Footer component with:
  - Copyright information
  - Links to Privacy Policy, Terms of Service
  - Social media links (placeholder)
  - Responsive layout (single column mobile, multi-column desktop)
- [ ] Navigation component with:
  - Links to all main sections
  - Active route highlighting
  - Mobile slide-out menu (works with Tailwind only)
  - Keyboard navigation support
- [ ] MainLayout wrapper component:
  - Incorporates Header, Footer, Navigation
  - Proper slot for page content
  - Responsive grid/flex layout
  - Mobile-safe area consideration (notches, home indicator)
- [ ] All components fully responsive (320px to 2560px)
- [ ] Components exported from `/components/shared/`
- [ ] Accessibility features implemented:
  - Semantic HTML (nav, header, footer elements)
  - ARIA labels where needed
  - Keyboard navigation support
  - Proper heading hierarchy
- [ ] No TypeScript errors
- [ ] Components tested with basic unit tests

## Technical Details

### Header Component Structure
```typescript
interface HeaderProps {
  locale: string
  onLanguageChange?: (locale: string) => void
}

export function Header({ locale, onLanguageChange }: HeaderProps) {
  // Logo, Language switcher, Mobile menu button
}
```

### Navigation Item Structure
```typescript
interface NavItem {
  label: string
  href: string
  icon?: ReactNode
}
```

### Responsive Behavior
- Mobile (320px): Single-column layout, hamburger menu
- Tablet (768px): Expanded header, sidebar navigation
- Desktop (1024px+): Full horizontal navigation, logo left, nav center, switcher right

## Dependencies
- Task: `02-tailwind-shadcn-setup` (styling and components)
- Task: `03-i18n-locale-routing` (locale information needed)

## Notes
- Use semantic HTML: `<header>`, `<nav>`, `<footer>` elements
- Header should remain sticky on scroll (performance consideration)
- Language switcher is placeholder - functionality added in i18n integration task
- Mobile hamburger menu can be pure CSS toggle or React state
- No external animation libraries - use CSS transitions only
- Footer should be sticky-bottom on short content pages

## Testing Approach
- Unit tests for component rendering
- Test responsive layout at multiple breakpoints
- Verify accessibility (keyboard nav, ARIA labels)
- Manual test: Header/Footer visible on all pages
- Visual regression: Compare screenshots across devices
