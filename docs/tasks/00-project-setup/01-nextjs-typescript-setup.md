# Task: Initialize Next.js Project with TypeScript Configuration

**Epic:** Project Setup & Infrastructure
**Estimated Duration:** 1 day
**Type:** DevOps / Infrastructure

## Overview
Set up a production-ready Next.js 14+ project with TypeScript, ESLint, Prettier, and all essential development tooling. This foundational task enables all subsequent feature development.

## Acceptance Criteria

- [ ] Next.js 14+ project initialized with `create-next-app`
- [ ] TypeScript configured with strict mode enabled
- [ ] ESLint configured with Next.js recommended rules
- [ ] Prettier configured and integrated with ESLint
- [ ] `npm run dev`, `npm run build`, `npm start` commands working
- [ ] `npm run lint`, `npm run format` commands operational
- [ ] `npx tsc --noEmit` runs without errors
- [ ] `.gitignore` configured properly
- [ ] No console errors or warnings on fresh `npm run dev`
- [ ] Project structure matches documented directory layout
- [ ] README.md updated with development command instructions

## Technical Details

### File Structure
```
theorem-calc/
├── app/                    # Next.js 14 App Router
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Root page (redirect)
├── components/             # React components
│   └── .gitkeep
├── lib/                    # Utilities and logic
│   └── .gitkeep
├── public/                 # Static assets
│   └── .gitkeep
├── tests/                  # Test files
│   └── .gitkeep
├── .eslintrc.json          # ESLint configuration
├── .prettierrc.json        # Prettier configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

### Key Dependencies to Install
- `next@14.x`
- `react@18.x`
- `react-dom@18.x`
- `typescript@latest`
- `@types/node@latest`
- `@types/react@latest`
- `eslint@latest`
- `eslint-config-next`
- `prettier@latest`

### Configuration Notes
- Enable TypeScript strict mode: `"strict": true` in tsconfig.json
- Configure path aliases for cleaner imports (e.g., `@/*` → `./`)
- Set up proper environment file structure (.env.local, .env.example)
- Enable SWC minification for production builds

## Dependencies
- None (foundation task)

## Notes
- This is the critical path start - all other tasks depend on this
- Use the latest stable Next.js version available
- Repository is configured with Git (email: pkalkun@gmail.com, name: Okibo)
- Consider using npx create-next-app with recommended settings

## Testing Approach
- Manual verification: `npm run dev` starts server at http://localhost:3000
- Manual verification: `npm run build` completes without errors
- Manual verification: `npm run lint` passes with no warnings
- Manual verification: TypeScript compilation check passes
