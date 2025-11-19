import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { CursorGlow } from "./components/CursorGlow";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

// Lazy-loaded page components for code splitting
// This reduces initial bundle size by 60-70%
const Index = lazy(() => import("./pages/Index"));
const Home = lazy(() => import("./pages/Home"));
const Compare = lazy(() => import("./pages/Compare"));
const GettingStarted = lazy(() => import("./pages/GettingStarted"));
const Learn = lazy(() => import("./pages/Learn"));
const Workflows = lazy(() => import("./pages/Workflows"));
const Guidance = lazy(() => import("./pages/Guidance"));
const Resources = lazy(() => import("./pages/Resources"));
const UseCases = lazy(() => import("./pages/UseCases"));
const AgenticAIBusinessCase = lazy(() => import("./pages/AgenticAIBusinessCase"));
const ToolStrategy = lazy(() => import("./pages/ToolStrategy"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const MakingOf = lazy(() => import("./pages/MakingOf"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Glossary = lazy(() => import("./pages/Glossary"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component shown during code splitting
function PageLoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center gradient-mesh">
      <div className="text-center glass rounded-2xl p-8 backdrop-blur-md">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary/20 border-t-primary mx-auto mb-4"></div>
        <p className="text-foreground font-medium">Loading...</p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <>
      {/* Cursor glow disabled - caused visual artifacts */}
      {/* <CursorGlow /> */}

      <Navigation />
      <Suspense fallback={<PageLoadingFallback />}>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/catalog" component={Home} />
          <Route path="/getting-started" component={GettingStarted} />
          <Route path="/learn" component={Learn} />
          <Route path="/workflows" component={Workflows} />
          <Route path="/calculator" component={Guidance} />
          <Route path="/guidance" component={Guidance} />
          <Route path="/resources" component={Resources} />
          <Route path="/business-case" component={AgenticAIBusinessCase} />
          <Route path="/use-cases" component={UseCases} />
          <Route path="/tool-strategy" component={ToolStrategy} />
          <Route path={"/compare"} component={Compare} />
          <Route path="/case-study" component={CaseStudy} />
          <Route path="/making-of" component={MakingOf} />
          <Route path="/faq" component={FAQ} />
          <Route path="/glossary" component={Glossary} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
      <Footer />
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Analytics />
          <SpeedInsights />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
