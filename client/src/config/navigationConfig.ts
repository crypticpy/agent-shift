/**
 * Navigation Configuration
 * Centralized configuration for all navigation items
 * Eliminates duplication between desktop and mobile navigation
 */

import {
  HomeIcon,
  BookOpen,
  GraduationCap,
  Sparkles,
  HelpCircle,
  Zap,
  Wrench,
  GitCompare,
  Target,
  Briefcase,
  FileCheck,
  MessageSquare,
  FileText,
  type LucideIcon,
} from "lucide-react";

/**
 * Navigation item interface
 */
export interface NavigationItem {
  href: string;
  label: string;
  description?: string;
  icon: LucideIcon;
}

/**
 * Dropdown section configuration
 */
export interface NavigationDropdownConfig {
  label: string;
  icon: LucideIcon;
  items: NavigationItem[];
}

/**
 * Learn section dropdown items
 */
export const learnDropdownItems: NavigationItem[] = [
  {
    href: "/getting-started",
    label: "Getting Started",
    description: "First-time tutorial for beginners",
    icon: BookOpen,
  },
  {
    href: "/learn",
    label: "Core Concepts",
    description: "Comprehensive learning with 7 topics",
    icon: GraduationCap,
  },
  {
    href: "/use-cases",
    label: "Use Cases",
    description: "Advanced real-world examples",
    icon: Sparkles,
  },
  {
    href: "/faq",
    label: "FAQ",
    description: "Frequently asked questions",
    icon: HelpCircle,
  },
];

/**
 * Tools section dropdown items
 */
export const toolsDropdownItems: NavigationItem[] = [
  {
    href: "/catalog",
    label: "Browse Catalog",
    description: "Search 190+ AI tools by category",
    icon: Wrench,
  },
  {
    href: "/compare",
    label: "Compare Tools",
    description: "Side-by-side tool comparison",
    icon: GitCompare,
  },
  {
    href: "/tool-strategy",
    label: "Selection Guide",
    description: "Platform vs best-of-breed strategy",
    icon: Target,
  },
];

/**
 * Business section dropdown items
 */
export const businessDropdownItems: NavigationItem[] = [
  {
    href: "/business-case",
    label: "Build Your Case",
    description: "Research-backed business justification",
    icon: FileCheck,
  },
  {
    href: "/guidance",
    label: "ROI & Templates",
    description: "Calculator and conversation guides",
    icon: MessageSquare,
  },
];

/**
 * Main navigation configuration
 * All top-level and dropdown items in one place
 */
export const navigationConfig = {
  home: {
    href: "/",
    label: "Home",
    icon: HomeIcon,
  },
  learn: {
    label: "Learn",
    icon: GraduationCap,
    items: learnDropdownItems,
  },
  workflows: {
    href: "/workflows",
    label: "Workflows",
    icon: Zap,
  },
  tools: {
    label: "Tools",
    icon: Wrench,
    items: toolsDropdownItems,
  },
  business: {
    label: "Business",
    icon: Briefcase,
    items: businessDropdownItems,
  },
  resources: {
    href: "/resources",
    label: "Resources",
    icon: FileText,
  },
} as const;

/**
 * Helper function to check if any items in a dropdown are active
 */
export function isDropdownActive(
  items: NavigationItem[],
  currentPath: string
): boolean {
  return items.some((item) => {
    if (item.href === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(item.href);
  });
}

/**
 * Helper function to check if a specific path is active
 */
export function isPathActive(href: string, currentPath: string): boolean {
  if (href === "/") {
    return currentPath === "/";
  }
  return currentPath.startsWith(href);
}
