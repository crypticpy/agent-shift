# Component Library Reference

**Agent Shift** uses a modern component-driven architecture built on **shadcn/ui** patterns with **Tailwind CSS v4** and **Radix UI** primitives. This document provides comprehensive guidance for developers building and extending the Agent Shift application.

## Table of Contents

1. [Overview](#overview)
2. [UI Components (shadcn/ui)](#ui-components-shadcnui)
3. [Custom Components](#custom-components)
4. [Layout Components](#layout-components)
5. [Visual Effects & Animations](#visual-effects--animations)
6. [Design Tokens](#design-tokens)
7. [Usage Guidelines](#usage-guidelines)
8. [Adding New Components](#adding-new-components)
9. [Related Documentation](#related-documentation)

---

## Overview

### Component Strategy

Agent Shift uses a **copy-paste component pattern** from shadcn/ui instead of installing as a package. This provides:

- **Full control**: Customize components without waiting for upstream updates
- **Tree-shaking**: Only included components increase bundle size
- **Type safety**: Full TypeScript support with proper type inference
- **Maintainability**: Clear visibility into what components are in the codebase

All UI components use **Radix UI** primitives for accessibility (ARIA, keyboard navigation, focus management).

### Styling Approach

- **Tailwind CSS v4**: Utility-first CSS with custom theme configuration
- **class-variance-authority (CVA)**: Type-safe variant definitions for complex component styles
- **Data attributes**: Semantic slot-based styling (e.g., `data-slot="card"`)
- **CSS variables**: Theme colors defined in `:root` and `.dark` for easy customization

### Directory Structure

```
client/src/components/
├── ui/                          # shadcn/ui components (50+ files)
│   ├── button.tsx              # Primary button component
│   ├── card.tsx                # Card layout component
│   ├── dialog.tsx              # Modal dialogs
│   ├── alert.tsx               # Alert notifications
│   ├── badge.tsx               # Badge labels
│   ├── tabs.tsx                # Tab navigation
│   ├── input.tsx               # Text input with IME support
│   ├── textarea.tsx            # Multi-line text input
│   ├── select.tsx              # Dropdown selection
│   ├── checkbox.tsx            # Checkbox control
│   ├── switch.tsx              # Toggle switch
│   ├── slider.tsx              # Range slider
│   ├── tooltip.tsx             # Hover tooltips
│   ├── dropdown-menu.tsx       # Context/dropdown menus
│   ├── popover.tsx             # Floating popovers
│   ├── sheet.tsx               # Side sheets/drawers
│   ├── accordion.tsx           # Collapsible sections
│   ├── pagination.tsx          # Page navigation
│   ├── progress.tsx            # Progress bars
│   ├── empty.tsx               # Empty state template
│   ├── spinner.tsx             # Loading spinner
│   ├── calendar.tsx            # Date picker
│   ├── table.tsx               # Data tables
│   ├── chart.tsx               # Recharts wrapper
│   ├── breadcrumb.tsx          # Breadcrumb navigation
│   ├── avatar.tsx              # User avatars
│   ├── skeleton.tsx            # Loading skeleton
│   ├── separator.tsx           # Divider line
│   ├── kbd.tsx                 # Keyboard key indicator
│   ├── label.tsx               # Form labels
│   ├── form.tsx                # Form wrapper (react-hook-form)
│   ├── field.tsx               # Field container
│   ├── input-group.tsx         # Input with prefix/suffix
│   ├── input-otp.tsx           # OTP input
│   ├── button-group.tsx        # Grouped buttons
│   ├── toggle.tsx              # Toggle buttons
│   ├── toggle-group.tsx        # Radio-like toggle group
│   ├── navigation-menu.tsx     # Navigation structure
│   ├── menubar.tsx             # Menu bar
│   ├── drawer.tsx              # Drawer sheets
│   ├── alert-dialog.tsx        # Confirmation dialogs
│   ├── hover-card.tsx          # Hover information cards
│   ├── collapsible.tsx         # Collapsible sections
│   ├── command.tsx             # Command palette/menu
│   ├── resizable.tsx           # Resizable panels
│   ├── scroll-area.tsx         # Custom scrollbar
│   ├── sidebar.tsx             # Sidebar layout
│   ├── context-menu.tsx        # Right-click menu
│   ├── carousel.tsx            # Image carousel
│   ├── aspect-ratio.tsx        # Aspect ratio container
│   ├── sonner.tsx              # Toast notifications
│   ├── icon-text-section.tsx   # Icon + text layout
│   └── responsive-button-group.tsx
├── Navigation.tsx              # App navigation bar
├── NavigationDropdown.tsx       # Dropdown menu items
├── Footer.tsx                  # App footer
├── ErrorBoundary.tsx           # Error handling
├── Particles.tsx               # Floating particles effect
├── Sparkles.tsx                # Sparkle animation
├── CursorGlow.tsx              # Cursor glow effect
├── FloatingOrbs.tsx            # Floating orb effects
├── FractalField.tsx            # Fractal background
├── MorphingBlobs.tsx           # Morphing blob shapes
├── WatercolorDrops.tsx         # Watercolor effect
├── MoneyParticles.tsx          # Money/coin particles
├── CardMagicDust.tsx           # Card magic dust effect
├── ManusDialog.tsx             # Manus platform dialog
├── Map.tsx                     # Google Maps component
└── [advanced-particles,        # Advanced particle systems
    flowing-streams,
    money-particles,
    tool-strategy]

```

---

## UI Components (shadcn/ui)

### Core Components

#### Button

The foundational interactive component used throughout the application.

```tsx
import { Button } from "@/components/ui/button";

// Basic variants
<Button>Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link button</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// With icons
<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'outline' \| 'secondary' \| 'destructive' \| 'ghost' \| 'link'` | `'default'` | Button style variant |
| size | `'sm' \| 'default' \| 'lg' \| 'icon'` | `'default'` | Button size |
| asChild | `boolean` | `false` | Render as child element (Slot pattern) |
| disabled | `boolean` | `false` | Disable button interaction |

#### Card

Container component for grouped content with consistent padding and border styling.

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
    <CardAction>Action button</CardAction>
  </CardHeader>
  <CardContent>
    Main card content
  </CardContent>
  <CardFooter>
    Footer content with action buttons
  </CardFooter>
</Card>
```

**Usage Notes:**
- `CardHeader` uses CSS Grid for responsive layout
- `CardAction` automatically positions in top-right when present
- Container queries enable responsive behavior within cards
- Use with `border-b` and `border-t` utilities to add section dividers

#### Dialog

Modal dialog component for focused user interactions.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog description</DialogDescription>
    </DialogHeader>
    <div>Content goes here</div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

**Features:**
- Backdrop overlay with semi-transparent dark background
- Animated entrance/exit with Tailwind CSS animations
- Focus trap and keyboard navigation handled by Radix UI
- Close button automatically positioned in top-right

#### Badge

Small label component for status, tags, or metadata display.

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Outline</Badge>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'secondary' \| 'destructive' \| 'outline'` | `'default'` | Badge style |

#### Alert

Notification or important information display component.

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

<Alert variant="default">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    Your account has been created successfully.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTriangle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong</AlertDescription>
</Alert>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | `'default' \| 'destructive'` | `'default'` | Alert style |

#### Input

Single-line text input field with IME (Input Method Editor) support for CJK languages.

```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Enter text..." />
<Input type="email" placeholder="your@email.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="0" />
<Input disabled placeholder="Disabled input" />
```

**Features:**
- Composition event handling for IME support (Chinese, Japanese, Korean)
- Focus ring styling with CVA variants
- Dark mode specific styling for input backgrounds
- File input styling support

#### Select

Dropdown selection component using Radix UI Select primitive.

```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<Select defaultValue="option1">
  <SelectTrigger>
    <SelectValue placeholder="Select an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
    <SelectItem value="option3">Option 3</SelectItem>
  </SelectContent>
</Select>
```

#### Tabs

Tab navigation component for switching between content sections.

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for tab 1</TabsContent>
  <TabsContent value="tab2">Content for tab 2</TabsContent>
</Tabs>
```

#### Accordion

Collapsible section component for organizing content hierarchy.

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

<Accordion type="single" collapsible>
  <AccordionItem value="item1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item2">
    <AccordionTrigger>Section 2</AccordionTrigger>
    <AccordionContent>Content for section 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

#### Checkbox & Switch

Input controls for boolean values.

```tsx
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

<div className="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">I agree to the terms</Label>
</div>

<div className="flex items-center gap-2">
  <Switch id="notifications" />
  <Label htmlFor="notifications">Enable notifications</Label>
</div>
```

#### Slider

Range input component for numeric value selection.

```tsx
import { Slider } from "@/components/ui/slider";

<Slider defaultValue={[50]} max={100} step={1} />
<Slider defaultValue={[20, 80]} max={100} step={1} />
```

#### Tooltip

Hover-based information display using Radix UI Tooltip.

```tsx
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="ghost" size="icon">
      <HelpCircle className="h-4 w-4" />
    </Button>
  </TooltipTrigger>
  <TooltipContent>
    This is helpful information
  </TooltipContent>
</Tooltip>
```

#### Dropdown Menu

Context menu with multiple actions using Radix UI DropdownMenu.

```tsx
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" size="icon">
      <MoreVertical className="h-4 w-4" />
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align="end">
    <DropdownMenuItem>Edit</DropdownMenuItem>
    <DropdownMenuItem>Delete</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

#### Progress & Spinner

Progress indicators for loading states.

```tsx
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/spinner";

<Progress value={75} max={100} />
<Spinner />
```

#### Empty State

Composable empty state component for no-data scenarios.

```tsx
import { Empty, EmptyHeader, EmptyMedia, EmptyTitle, EmptyDescription, EmptyContent } from "@/components/ui/empty";
import { InboxIcon } from "lucide-react";

<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <InboxIcon className="h-6 w-6" />
    </EmptyMedia>
    <EmptyTitle>No items found</EmptyTitle>
  </EmptyHeader>
  <EmptyDescription>
    You haven't created any items yet. <a href="/create">Create one now</a>.
  </EmptyDescription>
</Empty>
```

---

## Custom Components

### Navigation

#### Navigation Component

Main application navigation bar with responsive mobile menu and nested dropdowns.

**Location:** `client/src/components/Navigation.tsx`

**Features:**
- Sticky top navigation with gradient logo
- Desktop dropdown menus (Learn, Tools, Business)
- Mobile hamburger menu with collapsible sections
- Active route highlighting
- Logo with multi-color gradient text

```tsx
import Navigation from "@/components/Navigation";

// Used as wrapper in App.tsx
<Navigation />
```

#### NavigationDropdown

Reusable dropdown menu for navigation with icons and descriptions.

**Location:** `client/src/components/NavigationDropdown.tsx`

```tsx
interface NavigationDropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}
```

### Visual Effects

#### Particles

CSS-based floating particles for hero backgrounds with configurable count and colors.

**Location:** `client/src/components/Particles.tsx`

```tsx
import { Particles } from "@/components/Particles";

<Particles count={30} className="absolute inset-0" />
```

**Features:**
- Lightweight, no JavaScript animation required
- Configurable count, size, and animation duration
- Ambient lighting with 3-color gradient (Amber, Coral, Green)
- Dark mode brightness adjustment

#### Sparkles

Animated sparkle effect for text and UI elements.

**Location:** `client/src/components/Sparkles.tsx`

#### CardMagicDust

Particle effect applied specifically to card elements.

**Location:** `client/src/components/CardMagicDust.tsx`

#### FloatingOrbs

Animated floating orbs in the background.

**Location:** `client/src/components/FloatingOrbs.tsx`

#### MorphingBlobs

Morphing SVG blob shapes for dynamic visual effects.

**Location:** `client/src/components/MorphingBlobs.tsx`

#### WatercolorDrops

Watercolor paint drop effect for creative visual treatment.

**Location:** `client/src/components/WatercolorDrops.tsx`

#### FractalField

Fractal pattern background for immersive visuals.

**Location:** `client/src/components/FractalField.tsx`

#### MoneyParticles

Animated money/coin particle effects for financial visualizations.

**Location:** `client/src/components/MoneyParticles.tsx`

### Layout Components

#### Footer

Application footer with voice attribution, links, and branding.

**Location:** `client/src/components/Footer.tsx`

**Features:**
- Voice-built attribution banner with gradient background
- Multi-column layout for links
- Responsive grid design
- Animated gradient background

#### ErrorBoundary

React error boundary for graceful error handling.

**Location:** `client/src/components/ErrorBoundary.tsx`

```tsx
import ErrorBoundary from "@/components/ErrorBoundary";

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

**Features:**
- Catches React render errors
- Displays error stack trace in development
- Reload button for user recovery
- Centered error UI with proper spacing

---

## Design Tokens

### Color Palette

Agent Shift uses a warm color scheme with coral, amber, and green accents.

**Light Mode (Default):**
```css
--primary: oklch(0.65 0.18 35)           /* Deep Coral */
--secondary: oklch(0.97 0.02 75)         /* Warm Amber */
--accent: oklch(0.65 0.24 155)           /* Vibrant Green */
--background: oklch(1 0 0)                /* Pure White */
--foreground: oklch(0.235 0.015 65)      /* Dark Slate */
--muted: oklch(0.96 0.01 65)             /* Light Gray */
--muted-foreground: oklch(0.55 0.015 65) /* Medium Gray */
--destructive: oklch(0.577 0.245 27.325) /* Red */
--border: oklch(0.92 0.004 65)           /* Light Border */
```

**Dark Mode:**
```css
--primary: oklch(0.72 0.24 38)           /* Bright Vibrant Coral */
--secondary: oklch(0.32 0.08 60)         /* Warm Glowing Amber */
--accent: oklch(0.75 0.28 155)           /* Neon Green */
--background: oklch(0.12 0.015 280)      /* Deep Purple-tinted Black */
--foreground: oklch(0.95 0.008 65)       /* Bright White */
--card: oklch(0.18 0.02 280)             /* Dark Card Background */
--border: oklch(0.30 0.03 65)            /* Visible Dark Border */
```

### Spacing

Tailwind's default spacing scale with 0.5rem (8px) base unit:
- `gap-2` = 0.5rem (8px)
- `gap-4` = 1rem (16px)
- `gap-6` = 1.5rem (24px)
- `p-6` = 1.5rem padding
- `px-4 py-2` = 1rem horizontal, 0.5rem vertical

### Border Radius

```css
--radius: 0.75rem        /* Default rounded-xl (12px) */
--radius-md: 0.5rem      /* rounded-md (8px) */
--radius-lg: 0.75rem     /* rounded-lg (12px) */
--radius-xl: 1rem        /* rounded-xl+ (16px) */
```

### Typography

- **Body:** `line-height: 1.7` with `font-feature-settings` for professional typography
- **Headings:** Use Tailwind's font-weight utilities (semibold, bold)
- **Monospace:** Used in code blocks and technical content

### Glass Morphism

Special `.glass` utility class for frosted glass effects:

```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

---

## Usage Guidelines

### Best Practices

1. **Use Data Attributes**: Reference components by `data-slot` attribute for styling consistency:
   ```tsx
   <Card>
     <CardHeader>...</CardHeader>
   </Card>
   // Styles via data-slot="card", data-slot="card-header"
   ```

2. **Composition Over Inheritance**: Build complex components by composing simpler ones:
   ```tsx
   <Card>
     <CardHeader>
       <CardTitle>Title</CardTitle>
       <CardAction><Button>Action</Button></CardAction>
     </CardHeader>
     <CardContent>Content</CardContent>
   </Card>
   ```

3. **Use CVA for Complex Variants**: Use `class-variance-authority` for type-safe variant combinations:
   ```tsx
   const componentVariants = cva(
     "base-styles",
     { variants: { size: { sm: "...", lg: "..." } } }
   );
   ```

4. **IME Support for Inputs**: The `<Input>` component handles CJK language composition events automatically.

5. **Accessibility**: All Radix UI components include proper ARIA attributes and keyboard navigation.

### Anti-Patterns

- Don't create inline styles; use Tailwind utilities instead
- Don't override component styles via `!important`; use composition and CVA variants
- Don't nest interactive elements (buttons inside buttons)
- Don't use `<div>` when semantic HTML applies (`<button>`, `<header>`, etc.)

### Form Patterns

Use the `<Field>` and `<InputGroup>` components for consistent form layouts:

```tsx
import { Field } from "@/components/ui/field";
import { InputGroup } from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

<Field>
  <Label htmlFor="email">Email</Label>
  <InputGroup>
    <Input id="email" type="email" placeholder="user@example.com" />
  </InputGroup>
</Field>
```

### Animation Patterns

- Use Framer Motion for complex animations
- Use Tailwind CSS animations (`animate-spin`, `animate-pulse`) for simple cases
- Particle effects use CSS keyframe animations (no JavaScript overhead)

---

## Adding New Components

### When to Create a New Component

Create a new component when:
- A UI pattern repeats 3+ times in the codebase
- A complex interaction requires encapsulation
- A visual effect needs to be reusable across pages
- You're composing existing components for a specific use case

### Steps to Add a Component

1. **From shadcn/ui**:
   ```bash
   # Use the shadcn/ui CLI (if available)
   npx shadcn-ui@latest add [component-name]
   # Manually copy component files from shadcn/ui documentation
   # Files go in client/src/components/ui/
   ```

2. **Custom Component**:
   - Create file in `client/src/components/` with `.tsx` extension
   - Export component as default or named export
   - Add TypeScript interfaces for props
   - Include JSDoc comments for IDE support

3. **Example Custom Component**:

```tsx
// client/src/components/FeatureCard.tsx
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const featureCardVariants = cva(
  "rounded-lg border p-6 transition-all",
  {
    variants: {
      variant: {
        default: "bg-card border-border hover:shadow-lg",
        featured: "bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface FeatureCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof featureCardVariants> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

/**
 * Feature card component for displaying feature information
 * with optional icon and variants.
 *
 * @example
 * <FeatureCard
 *   title="Fast"
 *   description="Lightning quick performance"
 *   icon={<Zap />}
 *   variant="featured"
 * />
 */
export function FeatureCard({
  className,
  variant,
  title,
  description,
  icon,
  ...props
}: FeatureCardProps) {
  return (
    <div
      data-slot="feature-card"
      className={cn(featureCardVariants({ variant, className }))}
      {...props}
    >
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
```

4. **Export from components barrel file** (if using index.ts):
```tsx
export { FeatureCard } from "./FeatureCard";
```

5. **Use in pages**:
```tsx
import { FeatureCard } from "@/components/FeatureCard";

<FeatureCard
  title="Feature"
  description="Description"
  variant="featured"
/>
```

### Component Documentation Template

```tsx
/**
 * ComponentName - Brief description
 *
 * Long description explaining the component's purpose,
 * when to use it, and any special considerations.
 *
 * @component
 * @example
 * // Basic usage
 * <ComponentName prop="value" />
 *
 * @example
 * // Advanced usage with all props
 * <ComponentName prop1="value1" prop2="value2" />
 */
export function ComponentName(props) {
  // Implementation
}
```

---

## Related Documentation

**Developer Documentation**:
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Overall project structure and routing
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment guide
- [CLAUDE.md](../CLAUDE.md) - Project setup and development commands
- [CONTRIBUTING.md](../CONTRIBUTING.md) - How to contribute to the project

**External Resources**:
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [class-variance-authority](https://cva.style/)
- [Framer Motion](https://www.framer.com/motion/) - Animation library

**User & Implementation Guides**:
- [Quickstart Guide](../QUICKSTART.md) - Get started in 15 minutes
- [User Guide](../USER_GUIDE.md) - Comprehensive user documentation

**Phase 2 Methodology**:
- [AI Agent Methodology](./methodology/AI_AGENT_METHODOLOGY.md) - How Agent Shift was built
- [Brand Story](./brand/BRAND_STORY.md) - Mission and values

---

## Component Inventory

**UI Components (54 total):**
accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, icon-text-section, input, input-group, input-otp, item, kbd, label, menubar, navigation-menu, pagination, popover, progress, radio-group, resizable, responsive-button-group, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip

**Custom Components (20+ major):**
Navigation, NavigationDropdown, Footer, ErrorBoundary, Particles, Sparkles, CardMagicDust, FloatingOrbs, MorphingBlobs, WatercolorDrops, FractalField, MoneyParticles, CursorGlow, ManusDialog, Map

**Advanced Particle Systems:**
- advanced-particles/
- flowing-streams/
- money-particles/
- tool-strategy/

---

**Last Updated:** November 2024
**Framework Version:** React 18 + Tailwind CSS v4
**UI Library:** shadcn/ui with Radix UI primitives

