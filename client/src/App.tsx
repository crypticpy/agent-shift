import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import { CursorGlow } from "./components/CursorGlow";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Compare from "./pages/Compare";
import GettingStarted from "./pages/GettingStarted";
import Learn from "./pages/Learn";
import Workflows from "./pages/Workflows";
import Guidance from "./pages/Guidance";
import Resources from "./pages/Resources";
import UseCases from "./pages/UseCases";
import AgenticAIBusinessCase from "./pages/AgenticAIBusinessCase";
import ToolStrategy from "./pages/ToolStrategy";

function Router() {
  return (
    <>
      {/* Cursor glow disabled - caused visual artifacts */}
      {/* <CursorGlow /> */}

      <Navigation />
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/catalog" component={Home} />
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/learn" component={Learn} />
        <Route path="/workflows" component={Workflows} />
        <Route path="/calculator">
          <Redirect to="/guidance" />
        </Route>
        <Route path="/guidance" component={Guidance} />
        <Route path="/resources" component={Resources} />
        <Route path="/business-case" component={AgenticAIBusinessCase} />
      <Route path="/use-cases" component={UseCases} />
        <Route path="/tool-strategy" component={ToolStrategy} />
       <Route path={"/compare"} component={Compare} />
      <Route path={"/404"} component={NotFound} />        <Route component={NotFound} />
      </Switch>
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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
