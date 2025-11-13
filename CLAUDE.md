# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Agent Shift** is a React-based single-page application that serves as a comprehensive catalog and learning platform for AI agents and agentic AI tools. The project helps users transition from being "doers" to "orchestrators" by showcasing AI tools, workflows, and educational content about agentic AI.

## Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Routing**: Wouter (lightweight SPA router)
- **Styling**: Tailwind CSS v4 + shadcn/ui components (Radix UI primitives)
- **Backend**: Express.js (minimal static file server)
- **Animations**: Framer Motion + custom particle systems
- **Package Manager**: pnpm (required)
- **Build Tool**: Vite + esbuild

## Common Commands

### Development
```bash
# Install dependencies (use pnpm only)
pnpm install

# Start dev server (uses Vite dev server on port 3000)
pnpm dev

# Type checking (does not emit files)
pnpm check

# Format code with Prettier
pnpm format
```

### Build & Deploy
```bash
# Build both client and server for production
pnpm build

# Start production server
pnpm start

# Preview production build locally
pnpm preview
```

## Project Structure

```
ai-agents-catalog/
├── client/              # React frontend application
│   ├── src/
│   │   ├── components/  # UI components (shadcn/ui + custom)
│   │   ├── pages/       # Route components (Index, Home, Learn, etc.)
│   │   ├── hooks/       # Custom React hooks
│   │   ├── contexts/    # React contexts (ThemeContext)
│   │   ├── lib/         # Utilities (utils.ts, animations.ts)
│   │   └── App.tsx      # Main app component with routing
│   └── public/          # Static assets & JSON data files
├── server/              # Express.js production server
│   └── index.ts         # Static file server + SPA fallback
├── shared/              # Code shared between client and server
│   └── const.ts         # Shared constants
└── vite.config.ts       # Vite configuration
```

## Architecture

### Routing System
- Uses **Wouter** (lightweight alternative to React Router)
- All routes defined in `client/src/App.tsx`
- Server handles SPA routing by serving `index.html` for all paths
- Custom patch applied to Wouter via pnpm patches

### Data Management
- **No backend API** - all data served as static JSON files from `/client/public/`
- Catalog data loaded from `catalog_data_v2.json` (190+ AI tools across 18 categories)
- Learn content loaded from multiple JSON files (`learn-*.json`)
- Data fetched client-side using native `fetch()`

### Component Library
- Built on **shadcn/ui** pattern (copy-paste components, not npm package)
- All UI components in `client/src/components/ui/`
- Components use Radix UI primitives with Tailwind CSS styling
- Custom components include particle systems, animations, and visual effects

### Theme System
- Light theme by default (configured in `App.tsx`)
- `ThemeProvider` wrapper supports theme switching (currently disabled)
- Tailwind CSS v4 with custom color palette defined in CSS
- Theme can be made switchable by uncommenting `switchable` prop in ThemeProvider

### Path Aliases
TypeScript path aliases configured in both `tsconfig.json` and `vite.config.ts`:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Build Process
1. **Client build**: Vite builds React app → `dist/public/`
2. **Server build**: esbuild bundles Express server → `dist/index.js`
3. **Production**: Node runs Express server serving static files from `dist/public/`

## Important Development Notes

### Styling Guidelines
- Use Tailwind CSS classes exclusively (avoid CSS modules or styled-components)
- Follow existing color palette: orange/amber gradients with slate text
- Glass morphism effects use `.glass` utility class
- Card lift animations use `.card-lift` utility class
- Gradient text uses `.animated-gradient` class

### Component Patterns
- Functional components with TypeScript
- Use hooks for state management (no Redux/Zustand)
- Error boundaries wrap the entire app
- Tooltip provider wraps all routes for consistent tooltips

### Performance Considerations
- Particle systems use `requestAnimationFrame` for smooth animations
- Some visual effects (like CursorGlow) are commented out due to performance
- Images and assets should be optimized before adding

### Data Structure
When adding new tools to the catalog:
- Follow the schema in existing `catalog_data_v2.json`
- Include: name, description, category, capabilities, pricing, website, compliance, use_cases
- Government relevance and adoption maturity are tracked per category

### Deployment Targets
- Configured for Manus platform deployment (see `allowedHosts` in vite.config.ts)
- Uses vite-plugin-manus-runtime for Manus-specific features
- Also works on standard Node.js hosting

## Planning Guidelines

When outlining development plans and feature roadmaps, focus on **feature sequencing and dependencies** rather than temporal markers. Omit date-based phases (e.g., "Week 1," "Month 2") and instead structure plans by:

- Feature name and description
- Logical execution order
- Dependencies and prerequisites
- Relative priority

This keeps plans flexible and focused on what needs to be built and in what sequence, independent of timeline estimates.

## Key Pages

- `/` (Index) - Landing page with hero section and stats
- `/catalog` (Home) - Full catalog of AI tools with filtering
- `/getting-started` - Onboarding guide
- `/learn` - Educational content on agentic AI
- `/workflows` - Pre-built workflow examples
- `/calculator` - ROI calculator tool
- `/business-case` - Business case for agentic AI
- `/use-cases` - Industry-specific use cases
- `/compare` - Tool comparison feature

## Adding New Routes

1. Create page component in `client/src/pages/`
2. Import in `client/src/App.tsx`
3. Add `<Route>` in the `Router` component
4. Update Navigation component if needed

## TypeScript Configuration

- Strict mode enabled
- No emitted output (type checking only via `pnpm check`)
- JSX preserved (handled by Vite)
- Module resolution: `bundler` (Vite-specific)
- Import TypeScript extensions allowed

## External Dependencies Note

- Uses patched version of Wouter (see `pnpm.patchedDependencies`)
- Overrides nanoid version for Tailwind CSS compatibility
- Google Maps types included but not actively used
