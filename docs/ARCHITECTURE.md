# Agent Shift Architecture Documentation

**Version:** 1.0.0  
**Last Updated:** November 2025
**Audience:** Developers, technical architects, and contributors

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Frontend Architecture](#frontend-architecture)
3. [Data Architecture](#data-architecture)
4. [Styling Architecture](#styling-architecture)
5. [Build & Deployment Architecture](#build--deployment-architecture)
6. [Technology Decisions](#technology-decisions)
7. [Design Patterns](#design-patterns)
8. [Performance Considerations](#performance-considerations)
9. [Future Architecture](#future-architecture)
10. [Related Documentation](#related-documentation)

---

## System Overview

Agent Shift is a React-based single-page application (SPA) that demonstrates AI agent capabilities through a comprehensive catalog of 190+ vetted AI tools and agentic AI educational content.

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    USER BROWSER                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │         React SPA (Vite-Compiled)                    │   │
│  │  ┌────────────────────────────────────────────────┐  │   │
│  │  │ App Root                                       │  │   │
│  │  │ ├─ ThemeProvider (Light Theme)                 │  │   │
│  │  │ ├─ TooltipProvider                             │  │   │
│  │  │ ├─ ErrorBoundary                               │  │   │
│  │  │ └─ Router (Wouter - Client-Side)               │  │   │
│  │  │    ├─ Navigation Component                      │  │   │
│  │  │    ├─ Route Pages (Index, Home, Learn, etc.)   │  │   │
│  │  │    └─ Footer Component                          │  │   │
│  │  └────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
         │
         │ HTTPS Fetch API
         │
┌────────▼─────────────────────────────────────────────────────┐
│                   PRODUCTION SERVER                           │
│          (Express.js Static File Server)                      │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Express Server (server/index.ts)                     │   │
│  │ ├─ Static File Serving: /dist/public/               │   │
│  │ ├─ SPA Fallback: index.html for all routes          │   │
│  │ └─ CORS Headers (if needed)                         │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                                │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ Public Assets (Static JSON & Media)                 │   │
│  │ ├─ catalog_data_v2.json (190+ tools)               │   │
│  │ ├─ learn-*.json (Educational content)              │   │
│  │ ├─ tool-strategy-data.json                         │   │
│  │ └─ images/ (Logos, diagrams)                       │   │
│  └──────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

### Key Components

- **Frontend**: React 18 + TypeScript SPA compiled by Vite
- **Routing**: Wouter (lightweight client-side router)
- **Server**: Express.js minimal server for static file serving
- **Data**: JSON files served statically (no database)
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animations**: Framer Motion + custom particle engines

---

## Frontend Architecture

### Component Structure

The frontend is organized into a clear hierarchy:

```
client/src/
├── App.tsx                 # Root component with routing
├── main.tsx                # Entry point
├── index.css               # Global styles (Tailwind CSS)
├── const.ts                # Shared constants
│
├── components/             # Reusable UI components
│   ├── ui/                # shadcn/ui components (40+)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   │
│   ├── advanced-particles/ # Custom particle engines
│   │   ├── ParticleEngine.ts
│   │   ├── Particle.ts
│   │   ├── FlockingBehavior.ts
│   │   └── ...
│   │
│   ├── flowing-streams/   # Perlin noise flow field
│   ├── money-particles/   # Currency animation engine
│   ├── guidance/          # Guidance page components
│   ├── applications/      # Application workflow demos
│   ├── tool-strategy/     # Tool selection UI
│   │
│   ├── Navigation.tsx     # Main navigation bar
│   ├── Footer.tsx         # Footer component
│   ├── ErrorBoundary.tsx  # Error handling wrapper
│   ├── Particles.tsx      # Sparkle particle effect
│   ├── MoneyParticles.tsx # Money particle animation
│   ├── Sparkles.tsx       # Sparkle effects
│   └── ...other components
│
├── pages/                 # Route-level page components
│   ├── Index.tsx          # Landing page (/)
│   ├── Home.tsx           # Catalog page (/catalog)
│   ├── Learn.tsx          # Learning hub (/learn)
│   ├── Workflows.tsx      # Workflow library (/workflows)
│   ├── Guidance.tsx       # ROI Calculator (/guidance)
│   ├── UseCases.tsx       # Industry use cases
│   ├── GettingStarted.tsx # Onboarding guide
│   ├── Compare.tsx        # Tool comparison
│   ├── ToolStrategy.tsx   # Tool selection guide
│   ├── AgenticAIBusinessCase.tsx # Business case
│   ├── Resources.tsx      # Resource collection
│   ├── CaseStudy.tsx      # Success stories
│   ├── MakingOf.tsx       # Behind-the-scenes
│   └── NotFound.tsx       # 404 page
│
├── hooks/                 # Custom React hooks
│   ├── useComposition.ts  # Composition utilities
│   ├── useMobile.tsx      # Mobile detection
│   ├── useParticleBurst.ts # Particle animations
│   ├── usePersistFn.ts    # Persist function refs
│   └── useComplementaryColors.ts
│
├── contexts/              # React context providers
│   └── ThemeContext.tsx   # Theme management (light/dark)
│
└── lib/                   # Utility functions
    ├── animations.ts      # Animation constants & utilities
    ├── utils.ts           # General utilities (classnames, etc.)
    └── ...other utilities
```

### Routing Architecture

**Router Technology**: Wouter (lightweight alternative to React Router)

```typescript
// App.tsx routing structure
<Switch>
  <Route path="/" component={Index} />
  <Route path="/catalog" component={Home} />
  <Route path="/getting-started" component={GettingStarted} />
  <Route path="/learn" component={Learn} />
  <Route path="/workflows" component={Workflows} />
  <Route path="/guidance" component={Guidance} />
  <Route path="/resources" component={Resources} />
  <Route path="/business-case" component={AgenticAIBusinessCase} />
  <Route path="/use-cases" component={UseCases} />
  <Route path="/tool-strategy" component={ToolStrategy} />
  <Route path="/compare" component={Compare} />
  <Route path="/case-study" component={CaseStudy} />
  <Route path="/making-of" component={MakingOf} />
  <Route path="/404" component={NotFound} />
  <Route component={NotFound} /> {/* Catch-all for unknown routes */}
</Switch>
```

**Why Wouter?**
- Lightweight: ~2.5KB gzipped vs 40KB+ for React Router
- Zero dependencies beyond React
- Perfect for SPA without nested route complexity
- Custom patch applied via `pnpm.patchedDependencies` for specific fixes

### Component Hierarchy

```
App
└─ ThemeProvider (light theme, non-switchable currently)
   └─ TooltipProvider
      └─ ErrorBoundary
         └─ Router (Wouter)
            ├─ Navigation (persistent header)
            ├─ Route-specific Page component
            │  └─ Page uses UI components, custom components
            │     └─ shadcn/ui components (Button, Card, Dialog, etc.)
            └─ Footer (persistent footer)

Toaster (sonner) - rendered at app level for notifications
```

### State Management Strategy

Agent Shift uses **React hooks only** (no Redux, Zustand, or Jotai):

1. **Local Component State**: `useState` for UI-specific state
2. **Context API**: `ThemeContext` for theme state (light/dark)
3. **URL State**: Wouter routing for navigation state
4. **Derived State**: Data computed from static JSON files

This approach works well because:
- No real-time data updates needed (static JSON)
- Limited cross-component state sharing
- Minimal complexity for the app's scope
- Easy to reason about data flow

### Data Loading Pattern

```typescript
// Typical pattern in page components
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('/catalog_data_v2.json')
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
}, []);
```

---

## Data Architecture

### Data Structure

All data is served as **static JSON files** from `/client/public/`:

#### Catalog Data (`catalog_data_v2.json`)
- **Size**: ~140KB (190+ tools)
- **Structure**:
  ```json
  {
    "metadata": {
      "title": "AI Agent Catalog",
      "version": "2.0",
      "total_tools": 190,
      "total_categories": 18,
      "research_sources": 150
    },
    "categories": [
      {
        "id": "conversational-ai",
        "name": "Conversational AI",
        "description": "...",
        "icon": "message-circle",
        "government_relevance": "High",
        "adoption_maturity": "Mature",
        "subcategories": [],
        "tools": [
          {
            "name": "ChatGPT",
            "description": "...",
            "category": "conversational-ai",
            "capabilities": ["..."],
            "pricing": "Freemium",
            "website": "https://...",
            "compliance": ["SOC 2"],
            "use_cases": ["Customer support"],
            "government_fit": "High"
          }
        ]
      }
    ],
    "statistics": {
      "by_government_relevance": { "High": 120, "Medium": 50, "Low": 20 },
      "by_adoption_maturity": { "Mature": 150, "Growing": 30, "Early": 10 }
    }
  }
  ```

#### Learning Content Files
- `learn-mindset.json` - Agentic AI mindset education
- `learn-setup.json` - Implementation setup guides
- `learn-voice-basics.json` - Voice interaction fundamentals
- `learn-advanced-voice.json` - Advanced voice techniques
- `learn-applications.json` - Workflow applications
- `learn-chaining.json` - Agent chaining patterns
- `learn-ai-to-ai.json` - AI-to-AI collaboration

#### Tool Strategy Data
- `tool-strategy-data.json` - Tool selection decision trees and frameworks

### Data Flow

```
Static JSON Files (client/public/)
         ↓
Browser Fetch API (ES6 fetch)
         ↓
useState → local state
         ↓
Component render
         ↓
Filter/Search (in-memory client-side)
         ↓
Display to user
```

### Filtering & Search Implementation

**Location**: Primarily in page components like `Home.tsx`

**Strategy**: Client-side filtering (all data already in browser)

**Operations**:
- Search by tool name / description
- Filter by category
- Filter by compliance (FedRAMP, HIPAA, SOC 2, etc.)
- Filter by pricing model (Free, Subscription, Enterprise)
- Filter by government relevance

**Performance**: Sub-millisecond searches on 190 tools (negligible)

### Data Consistency

- **No real-time sync** between files and app state
- **Version control**: JSON files version-controlled in Git
- **Updates**: Manual updates to JSON files, rebuild, redeploy
- **Future**: API endpoint planned for dynamic updates (see Architecture Roadmap)

---

## Styling Architecture

### Styling Stack

```
Tailwind CSS v4
    ↓
Tailwind Vite Plugin (@tailwindcss/vite)
    ↓
CSS Variables (custom color palette)
    ↓
Component Styling
```

### Tailwind CSS v4 Features Used

1. **CSS-in-Config**: Color palette defined in `/client/src/index.css`
2. **Built-in Animations**: `animate-fade`, `animate-in`, `animate-out`
3. **Glass Morphism**: `.glass` custom utility
4. **Card Lift Effect**: `.card-lift` custom utility
5. **Animated Gradient Text**: `.animated-gradient` class

### Color Palette

Configured in `index.css` with CSS variables:
- **Primary**: Orange/amber gradients (brand colors)
- **Foreground**: Slate text colors
- **Background**: Light neutral backgrounds
- **Accent**: Orange highlights for CTAs

### Component Library Pattern

Uses **shadcn/ui** methodology:
- Components are **copy-paste** (not npm packages)
- All UI components in `client/src/components/ui/`
- 40+ pre-built components:
  - Layout: Card, Tabs, Accordion, Dialog, Drawer
  - Input: Button, Input, Select, Checkbox, RadioGroup
  - Display: Badge, Alert, Progress, Spinner
  - Navigation: Breadcrumb, Pagination, Menu
  - And more...

**Benefits**:
- Full control over component source
- No version lock-in
- Easy customization
- Small bundle (only include what you use)

### Theme System

Located in `client/src/contexts/ThemeContext.tsx`:

```typescript
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;  // 'light' | 'dark'
  switchable?: boolean;  // Toggle theme switching on/off
}
```

**Current Setup**:
- Default: Light theme
- Switchable: Disabled (can be enabled by uncommenting props)
- Storage: localStorage for persistence

**Theme Application**:
```typescript
// Adds/removes 'dark' class on document root
<html class="light">  // or class="dark"
  <body>...</body>
</html>
```

### Custom Animations

Location: `client/src/lib/animations.ts`

Includes:
- Fade in/out animations
- Slide animations
- Scale animations
- Custom particle system animations
- Framer Motion variants

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- `useMediaQuery` and `useMobile()` hooks for responsive behavior
- Sidebar drawer on mobile (instead of left nav)
- Responsive grid layouts (1 col mobile → 3+ cols desktop)

---

## Build & Deployment Architecture

### Build Process (pnpm build)

```
┌──────────────────────────────────┐
│  Source Code                     │
│  - TypeScript (client/src/)      │
│  - React Components              │
│  - CSS (Tailwind)                │
│  - Express Server (server/)      │
└──────────────────────────────────┘
         │
         ├─── Vite Build Pipeline
         │    ├─ TypeScript → JavaScript
         │    ├─ Tailwind CSS compilation
         │    ├─ Asset optimization
         │    └─ Code splitting
         │
         ├─── Output: dist/public/
         │    ├─ index.html (SPA root)
         │    ├─ assets/ (JS bundles)
         │    ├─ style*.css (compiled CSS)
         │    └─ public/* (static assets)
         │
         └─── esbuild Bundle Server
              ├─ Input: server/index.ts
              ├─ Output: dist/index.js (executable)
              └─ Format: ESM, Node platform
```

### Build Configuration

**Vite Config** (`vite.config.ts`):
```typescript
export default defineConfig({
  plugins: [
    react(),              // React JSX transform
    tailwindcss(),        // Tailwind CSS compilation
    jsxLocPlugin(),       // Debug location info
    vitePluginManusRuntime() // Manus platform support
  ],
  resolve: {
    alias: {
      "@": "client/src",
      "@shared": "shared",
      "@assets": "attached_assets"
    }
  },
  build: {
    outDir: "dist/public",  // Client output
    emptyOutDir: true
  },
  server: {
    port: 3000,
    strictPort: false
  }
});
```

### Production Server Setup

**Express Server** (`server/index.ts`):
```typescript
app.use(express.static(staticPath));  // Serve built files
app.get("*", (req, res) => {
  res.sendFile(path.join(staticPath, "index.html")); // SPA fallback
});
```

**Key Points**:
- Single entry point: `index.html`
- All routes return `index.html` (SPA pattern)
- Wouter handles routing in browser
- Static file serving with gzip compression

### Deployment Targets

1. **Manus Platform** (primary):
   - Uses `vite-plugin-manus-runtime`
   - Configured `allowedHosts` for Manus domains
   - Custom runtime support

2. **Standard Node.js Hosting**:
   - Vercel: `pnpm build && npm start`
   - AWS: Node 18+ required
   - GitHub Pages: Requires static hosting (no server)
   - Docker: Node 18+ base image

3. **Environment Variables**:
   - `NODE_ENV`: Set to 'production' on deploy
   - `PORT`: Configurable via environment

### Development Server (pnpm dev)

```
Vite Dev Server (port 3000)
├─ Hot Module Replacement (HMR)
├─ Fast TypeScript transpilation
├─ Tailwind JIT compilation
└─ Instant feedback loop
```

---

## Technology Decisions

### Why React 18?

- Industry standard for SPA development
- Excellent ecosystem and community support
- Strong TypeScript integration
- Performance optimizations (concurrent features)

### Why Vite?

**vs Webpack**:
- 10-100x faster dev server startup
- Native ES modules support
- Pre-configured for modern tooling
- Faster build times (esbuild powered)

**vs Parcel**:
- Better TypeScript support
- More configurable
- Larger ecosystem
- Production-proven

### Why Wouter?

**vs React Router v6**:
- 96% smaller bundle size
- Simpler API for non-nested routes
- Zero external dependencies
- Faster navigation

**vs Next.js**:
- No need for file-system routing
- Full SPA benefits (offline capable)
- Simpler deployment

### Why Tailwind CSS v4?

**vs CSS Modules**:
- Faster development (no naming conventions)
- Consistent design system
- Smaller bundle (unused styles removed)
- Better maintainability

**vs styled-components**:
- Much smaller runtime
- Better performance
- Native browser DevTools support
- Easier static analysis

### Why shadcn/ui?

**vs Material-UI**:
- Smaller bundle (copy-paste, not npm)
- Better customization control
- No bloated dependencies
- Radix UI primitives (battle-tested)

**vs Headless UI**:
- More pre-built components
- Better documentation
- Active community
- Tailwind integration

### Why No Database?

**Current Stage**:
- Small, curated dataset (190 tools)
- No user-generated content
- No real-time collaboration
- Static content works perfectly

**Benefits**:
- Zero backend infrastructure
- Fast data delivery (cached, CDN-able)
- No authentication/authorization complexity
- Simple deployment

**When to Add Database**:
- User accounts needed
- Dynamic tool submissions
- Real-time collaborative features
- Analytics/usage tracking

---

## Design Patterns

### 1. Component Composition

```typescript
// Functional components with TypeScript
interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function MyCard({ title, description, children }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
```

### 2. Custom Hooks for Logic Reuse

```typescript
// Extract reusable logic into hooks
function useCatalogData() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading };
}
```

### 3. Context for Global State

```typescript
// Theme context for light/dark mode
const { theme, toggleTheme } = useTheme();

// Can be extended for: user preferences, language, etc.
```

### 4. Error Boundaries

```typescript
// Graceful error handling at component level
<ErrorBoundary>
  <Router />
</ErrorBoundary>
```

### 5. Lazy Loading with React.lazy()

```typescript
const LearnPage = lazy(() => import('./pages/Learn'));

// Used with Suspense:
<Suspense fallback={<LoadingSpinner />}>
  <LearnPage />
</Suspense>
```

### 6. Compound Components (shadcn/ui pattern)

```typescript
// Components work together semantically
<Card>
  <CardHeader>
    <CardTitle>...</CardTitle>
  </CardHeader>
  <CardContent>...</CardContent>
</Card>
```

### 7. Render Props & Children Pattern

```typescript
// Maximum flexibility for composition
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogTitle>Title</DialogTitle>
    <DialogDescription>Content</DialogDescription>
  </DialogContent>
</Dialog>
```

---

## Performance Considerations

### Current Optimizations

1. **Code Splitting**:
   - Vite automatic route-level splitting
   - Lazy-loaded page components

2. **Tree Shaking**:
   - Only imported UI components bundled
   - Unused shadcn components excluded
   - Dead code eliminated by esbuild

3. **CSS Optimization**:
   - Tailwind JIT (just-in-time) compilation
   - Unused styles removed
   - CSS minification in production

4. **Asset Optimization**:
   - Image compression (SVG optimized)
   - Favicon inline caching
   - Static assets with far-future expires

5. **Bundle Analysis**:
   ```bash
   vite build --analyze  # (with vite-plugin-bundle-analyzer)
   ```

### Performance Metrics Targets

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **Bundle Size**: < 500KB gzipped (client + server)

### Potential Bottlenecks & Mitigations

| Bottleneck | Impact | Mitigation |
|------------|--------|-----------|
| Large JSON files | Initial load time | Split by category, lazy load |
| Particle effects | GPU/CPU usage | Disable on mobile, reduce count |
| Images in carousel | Memory usage | Use WebP format, responsive images |
| Search/filter on 190 tools | CPU spike | Implement debounce, Web Workers |
| Complex animations | Frame drops | Use `will-change`, reduce motion |

### Disabled Features for Performance

- **CursorGlow Component**: Visual artifacts, too expensive
- **Advanced animations on mobile**: Battery drain, jank
- **High particle counts**: Mobile device limitation

### Future Optimizations

- Service Worker for offline support
- HTTP/2 push for critical assets
- Redis caching for computed data
- CDN for static assets
- Database for better data querying

---

## Future Architecture

### Phase 1: Data Management (Q2 2025)

```
Current:              Future:
Static JSON    →      Database (PostgreSQL)
Client-side    →      REST/GraphQL API
filtering      →      Server-side queries
```

**Changes**:
- Add backend API (Node.js + Express)
- PostgreSQL database for tools
- Server-side filtering and search
- Pagination for large datasets
- Caching layer (Redis)

### Phase 2: User Features (Q3 2025)

```
Addition of:
├─ User accounts (Auth0 / Supabase)
├─ Save/bookmark tools
├─ Custom workflows
├─ User ratings & reviews
└─ Export capabilities (PDF, CSV)
```

### Phase 3: Real-Time Collaboration (Q4 2025)

```
├─ WebSocket server for live updates
├─ Real-time notifications
├─ Collaborative workflow building
└─ Live chat support
```

### Phase 4: Mobile Apps (2026)

```
├─ React Native iOS/Android
├─ Offline-first architecture
├─ Voice interface
└─ Push notifications
```

### Architectural Evolution Path

```
Today:                    Near Future:              Mature:
┌──────────────┐         ┌──────────────┐         ┌──────────────┐
│ React SPA    │         │ React + API  │         │ Microservices│
│ Static JSON  │   →     │ PostgreSQL   │   →     │ Services:    │
│ Wouter       │         │ GraphQL      │         │ - Auth       │
│ Tailwind     │         │ Caching      │         │ - Catalog    │
│ Express      │         │ WebSocket    │         │ - Analytics  │
└──────────────┘         └──────────────┘         │ - Collab     │
                                                   └──────────────┘
```

### Database Schema Preview

```sql
-- Tools table
CREATE TABLE tools (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  category_id UUID REFERENCES categories(id),
  pricing VARCHAR(100),
  website VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Compliance table
CREATE TABLE compliance (
  id UUID PRIMARY KEY,
  tool_id UUID REFERENCES tools(id),
  certification VARCHAR(100), -- FedRAMP, HIPAA, SOC 2, etc.
  verified_at TIMESTAMP
);

-- User workflows (future)
CREATE TABLE user_workflows (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  name VARCHAR(255),
  workflow_config JSONB,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints Preview

```typescript
// REST API structure
GET  /api/v1/tools              // List all tools
GET  /api/v1/tools/:id          // Single tool
GET  /api/v1/categories         // List categories
GET  /api/v1/categories/:id     // Tools in category
GET  /api/v1/search?q=query     // Full-text search
GET  /api/v1/compliance/fedRamp // Tools with FedRAMP
POST /api/v1/workflows          // Create workflow (authenticated)
GET  /api/v1/users/:id/workflows // User workflows
```

### Frontend Integration Points

```typescript
// Current: fetch from static files
const response = await fetch('/catalog_data_v2.json');

// Future: fetch from API
const response = await fetch('/api/v1/tools?category=conversational-ai');
```

---

## Related Documentation

### Core Documentation
- **[README.md](../README.md)** - Project overview, mission, features
- **[QUICKSTART.md](./quickstart.md)** - Developer setup and first steps
- **[CONTRIBUTING.md](../CONTRIBUTING.md)** - How to contribute code

### Technical Documentation
- **[COMPONENT_LIBRARY.md](./COMPONENT_LIBRARY.md)** - UI components reference
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment guide
- **[API_REFERENCE.md](./API_REFERENCE.md)** - (Future) REST/GraphQL API docs

### User & Domain Documentation
- **[USER_GUIDE.md](./user-guide.md)** - Non-technical user walkthrough
- **[USE_CASES.md](./USE_CASES.md)** - Real-world applications
- **[FAQ.md](./FAQ.md)** - Frequently asked questions
- **[GOVERNMENT_GUIDE.md](./government-guide.md)** - Government deployment
- **[COMPLIANCE.md](./COMPLIANCE.md)** - Security and regulatory

### Research & Methodology
- **[ROADMAP.md](./ROADMAP.md)** - Future features and releases
- **[methodology/AI_AGENT_METHODOLOGY.md](./methodology/AI_AGENT_METHODOLOGY.md)** - How Agent Shift was built
- **[methodology/AI_EVALUATION_FRAMEWORK.md](./methodology/AI_EVALUATION_FRAMEWORK.md)** - Tool evaluation criteria
- **[research/GOVERNMENT_AI_RESEARCH.md](./research/GOVERNMENT_AI_RESEARCH.md)** - Government AI adoption

---

## Key Files Reference

### Entry Points
- `client/src/main.tsx` - React app bootstrap
- `client/src/App.tsx` - Root component and routing
- `server/index.ts` - Express server

### Configuration
- `vite.config.ts` - Build and dev server configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Dependencies and scripts

### Styling
- `client/src/index.css` - Global styles and Tailwind config
- `client/src/components/ui/` - shadcn/ui components (40+)

### Data
- `client/public/catalog_data_v2.json` - Main tool catalog
- `client/public/learn-*.json` - Educational content
- `client/public/tool-strategy-data.json` - Decision frameworks

### Development Commands
```bash
pnpm dev      # Start Vite dev server (port 3000)
pnpm build    # Build for production
pnpm start    # Run production server
pnpm check    # Type checking (no build)
pnpm format   # Format code with Prettier
```

---

## Related Documentation

**Developer Documentation**:
- [Component Library](./COMPONENT_LIBRARY.md) - UI components reference and usage
- [Deployment Guide](./DEPLOYMENT.md) - Production deployment instructions
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute to the project
- [Project Setup](../CLAUDE.md) - Development environment and commands

**User & Implementation Guides**:
- [Quickstart Guide](./quickstart.md) - Get started in 15 minutes
- [User Guide](./user-guide.md) - Comprehensive user documentation
- [Government Guide](./government-guide.md) - Government deployment guidance

**Phase 2 Methodology**:
- [AI Agent Methodology](./methodology/AI_AGENT_METHODOLOGY.md) - How Agent Shift was built with AI
- [Brand Story](./brand/BRAND_STORY.md) - Mission, values, and vision
- [AI Evaluation Framework](./methodology/AI_EVALUATION_FRAMEWORK.md) - Tool assessment criteria

**Phase 3 Resources**:
- [Use Cases](./USE_CASES.md) - Real-world applications by sector
- [FAQ](./FAQ.md) - Common questions answered
- [Roadmap](./ROADMAP.md) - Future development plans

---

## Conclusion

Agent Shift's architecture balances **simplicity** with **scalability**:

- **Today**: Lightweight, fast-loading SPA with static data
- **Tomorrow**: Database-backed with collaborative features
- **Future**: Microservices supporting mobile apps and real-time collaboration

The foundation is built to evolve without major rewrites, using industry-standard technologies and proven patterns.

**For questions or architecture discussions**, open an issue on GitHub or contact the maintainers.

---

**Document Version**: 1.0.0
**Last Updated**: November 2025
**Status**: Complete and Production-Ready

