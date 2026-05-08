# Base Frontend - Project Context

## Overview

**baseFrontend** is a modern, monorepo-based frontend project using npm workspaces. It's structured to support multiple applications while sharing a common UI component library.

**Current Status**: Recently initialized with Storybook setup (commit `1bcf705`)

## Project Structure

```
baseFrontend/
├── apps/                      # Application packages
│   └── default-app/          # Next.js 14 application
├── libs/                      # Shared library packages
│   └── ui/                    # Shared UI component library
├── package.json              # Root workspace configuration
├── package-lock.json         # Dependency lock file
└── node_modules/
```

## Technology Stack

### Core Technologies
- **Node.js**: 22.22.2 (managed via Volta)
- **Package Manager**: npm (workspaces)
- **TypeScript**: ^5.x (strict mode enabled)
- **React**: ^18.x
- **React DOM**: ^18.x

### Applications
- **default-app**: Next.js 14.2.35 with App Router
  - Built with TypeScript
  - Tailwind CSS for styling
  - ESLint configured via `eslint-config-next`

### UI Library (@repo/ui)
- **Storybook**: ^10.3.6 for component documentation
- **Tailwind CSS**: ^3.4.19 for utility-first styling
- **clsx**: ^2.1.1 for class name utilities
- **tailwind-merge**: ^2.6.1 for merging Tailwind classes
- **PostCSS**: ^8.5.14 for CSS processing
- **Autoprefixer**: ^10.5.0 for vendor prefixes

### Dev Tools
- **TypeScript**: ^5.7.3
- **Storybook Addons**:
  - `@storybook/addon-a11y` - Accessibility testing
  - `@storybook/addon-themes` - Theme switching
  - `@storybook/nextjs-vite` - Next.js integration
- **Vite**: ^8.0.11 (used by Storybook)
- **ts-node**: ^10.9.2 for running TypeScript scripts

## Key Directories

### apps/default-app/
- `src/app/` - Next.js App Router pages
- `src/app/layout.tsx` - Root layout
- `src/app/page.tsx` - Home page (currently shows Next.js boilerplate)
- `next.config.mjs` - Next.js configuration with `@repo/ui` transpilation
- `tsconfig.json` - Path alias: `@/*` → `./src/*`

### libs/ui/
- `src/components/` - Reusable React components
  - `button/Button.tsx` - Example button component with variants
  - `button/Button.stories.tsx` - Storybook stories
- `src/providers/` - React context providers (ThemeProvider)
- `src/tokens/` - Design tokens (themes configuration)
- `src/utils/` - Utility functions (e.g., `cn()` for class merging)
- `src/styles/` - CSS/styling files

## Component Architecture

### Button Component Example
**File**: `libs/ui/src/components/button/Button.tsx`

```typescript
// Variants: primary | secondary | ghost | danger | success
// Sizes: sm | md | lg
// Props include loading state, disabled, children
```

Features:
- Fully typed with TypeScript interfaces
- Multiple visual variants
- Size customization
- Loading state with spinner animation
- Accessible focus styles
- Disabled state handling

### Theme System
- **ThemeProvider**: Context-based theme management
- **Tokens**: Centralized theme definitions
- Exported from main UI package for app-wide use

## Scripts

### Root Level (baseFrontend/)
```bash
npm run storybook       # Start Storybook dev server on port 6006
npm run build-storybook # Build static Storybook
```

### default-app/
```bash
npm run dev    # Start Next.js dev server (port 3000)
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

### UI Library (@repo/ui)
- Storybook commands (run from workspace root)

## Configuration Files

### tsconfig.json (default-app)
- **Target**: ES2017
- **Strict**: true (strict null checks, strict function types, etc.)
- **JSX**: preserve (for Next.js)
- **Module Resolution**: bundler
- **Path Aliases**: `@/*` points to `src/*`

### next.config.mjs
- Transpiles `@repo/ui` package for use in Next.js

### Tailwind CSS
- Configured in `libs/ui/` for component styling
- Used in `default-app/` for page styling

## Development Workflow

1. **Component Development**: Create/modify components in `libs/ui/src/components/`
2. **Component Stories**: Add/update stories in `libs/ui/src/components/*/Component.stories.tsx`
3. **Preview in Storybook**: Run `npm run storybook` to visualize
4. **Export from Library**: Add exports to `libs/ui/src/index.ts` or component `index.ts`
5. **Use in Apps**: Import from `@repo/ui` in `apps/default-app/`

## Current State

- **Main App**: Fresh Next.js boilerplate (default page)
- **UI Library**: Initialized with theme system and Button component example
- **Storybook**: Recently set up (commit `1bcf705`)
- **No Custom Pages/Routes**: Only default Next.js home page

## Design System

- **Theme Provider**: Top-level context for theme management
- **Tailwind CSS**: Primary styling approach (utility-first)
- **Design Tokens**: Centralized in `tokens/themes.ts`
- **Class Utilities**: `clsx` and `tailwind-merge` for dynamic styling

## Workspace Configuration

- **Type**: npm workspaces
- **Volta Lock**: Node.js 22.22.2
- **Main Packages**:
  - `apps/default-app` - Application
  - `libs/ui` - Component library (`@repo/ui`)

## Notes

- There's a typo in `libs/ui/src/index,ts` (comma instead of dot) - should be `index.ts`
- The UI library is set to transpile in Next.js for compatibility
- All packages are marked `private: true` (internal monorepo use only)
