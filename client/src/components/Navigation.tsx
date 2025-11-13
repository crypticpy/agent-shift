import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Lightbulb,
  Wrench,
  Zap,
  FileText,
  Menu,
  X,
  Sparkles,
  MessageSquare,
  Home as HomeIcon,
  GraduationCap,
  BarChart3,
  Briefcase,
  GitCompare,
  Target,
  FileCheck,
  Presentation,
  Map,
  HelpCircle,
  Book
} from "lucide-react";
import { useState } from "react";
import { APP_LOGO } from "@/const";
import { NavigationDropdown, NavigationDropdownItem } from "./NavigationDropdown";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  // Define dropdown menu items
  const learnDropdown: NavigationDropdownItem[] = [
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

  const toolsDropdown: NavigationDropdownItem[] = [
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

  const businessDropdown: NavigationDropdownItem[] = [
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

  const resourcesDropdown: NavigationDropdownItem[] = [
    {
      href: "/resources",
      label: "Resources Hub",
      description: "Guides, articles, and external links",
      icon: FileText,
    },
    {
      href: "/glossary",
      label: "Glossary",
      description: "AI & compliance terms defined",
      icon: Book,
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isDropdownActive = (items: NavigationDropdownItem[]) => {
    return items.some((item) => isActive(item.href));
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-all group">
              {APP_LOGO && (
                <img src={APP_LOGO} alt="Logo" className="h-8 w-8 group-hover:scale-110 transition-transform" />
              )}
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(to right, #FF6B35 0%, #FFC107 33%, #10B981 66%, #14B8A6 100%)' }}>
                  Agent Shift
                </span>
                <span className="text-[10px] text-slate-500 tracking-wide uppercase font-medium -mt-0.5">
                  Stop Doing. Start Talking.
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Home */}
            <Link href="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  isActive("/")
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-accent/50"
                }`}
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Button>
            </Link>

            {/* Learn Dropdown */}
            <NavigationDropdown
              label="Learn"
              items={learnDropdown}
              isActive={isDropdownActive(learnDropdown)}
            />

            {/* Workflows */}
            <Link href="/workflows">
              <Button
                variant={isActive("/workflows") ? "default" : "ghost"}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  isActive("/workflows")
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "hover:bg-accent/50"
                }`}
              >
                <Zap className="h-4 w-4" />
                Workflows
              </Button>
            </Link>

            {/* Tools Dropdown */}
            <NavigationDropdown
              label="Tools"
              items={toolsDropdown}
              isActive={isDropdownActive(toolsDropdown)}
            />

            {/* Business Dropdown */}
            <NavigationDropdown
              label="Business"
              items={businessDropdown}
              isActive={isDropdownActive(businessDropdown)}
            />

            {/* Resources Dropdown */}
            <NavigationDropdown
              label="Resources"
              items={resourcesDropdown}
              isActive={isDropdownActive(resourcesDropdown)}
            />
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            className="lg:hidden py-4 border-t border-border backdrop-blur-xl"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {/* Home */}
              <Link href="/">
                <Button
                  variant={isActive("/") ? "default" : "ghost"}
                  className={`w-full justify-start flex items-center gap-2 transition-all duration-300 ${
                    isActive("/")
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-accent/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Button>
              </Link>

              {/* Learn Section */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between flex items-center gap-2"
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === "learn" ? null : "learn"
                    )
                  }
                  aria-expanded={mobileDropdownOpen === "learn"}
                  aria-label="Toggle Learn menu"
                >
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4" aria-hidden="true" />
                    Learn
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      mobileDropdownOpen === "learn" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
                {mobileDropdownOpen === "learn" && (
                  <div className="ml-6 mt-2 space-y-1">
                    {learnDropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant={isActive(item.href) ? "default" : "ghost"}
                            size="sm"
                            className={`w-full justify-start flex items-center gap-2 ${
                              isActive(item.href)
                                ? "bg-primary text-primary-foreground"
                                : ""
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className="h-3 w-3" />
                            {item.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Workflows */}
              <Link href="/workflows">
                <Button
                  variant={isActive("/workflows") ? "default" : "ghost"}
                  className={`w-full justify-start flex items-center gap-2 transition-all duration-300 ${
                    isActive("/workflows")
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "hover:bg-accent/50"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Zap className="h-4 w-4" />
                  Workflows
                </Button>
              </Link>

              {/* Tools Section */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between flex items-center gap-2"
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === "tools" ? null : "tools"
                    )
                  }
                >
                  <div className="flex items-center gap-2">
                    <Wrench className="h-4 w-4" />
                    Tools
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      mobileDropdownOpen === "tools" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
                {mobileDropdownOpen === "tools" && (
                  <div className="ml-6 mt-2 space-y-1">
                    {toolsDropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant={isActive(item.href) ? "default" : "ghost"}
                            size="sm"
                            className={`w-full justify-start flex items-center gap-2 ${
                              isActive(item.href)
                                ? "bg-primary text-primary-foreground"
                                : ""
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className="h-3 w-3" />
                            {item.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Business Section */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between flex items-center gap-2"
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === "business" ? null : "business"
                    )
                  }
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    Business
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      mobileDropdownOpen === "business" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
                {mobileDropdownOpen === "business" && (
                  <div className="ml-6 mt-2 space-y-1">
                    {businessDropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant={isActive(item.href) ? "default" : "ghost"}
                            size="sm"
                            className={`w-full justify-start flex items-center gap-2 ${
                              isActive(item.href)
                                ? "bg-primary text-primary-foreground"
                                : ""
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className="h-3 w-3" />
                            {item.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Resources Section */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between flex items-center gap-2"
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === "resources" ? null : "resources"
                    )
                  }
                >
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Resources
                  </div>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      mobileDropdownOpen === "resources" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Button>
                {mobileDropdownOpen === "resources" && (
                  <div className="ml-6 mt-2 space-y-1">
                    {resourcesDropdown.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link key={item.href} href={item.href}>
                          <Button
                            variant={isActive(item.href) ? "default" : "ghost"}
                            size="sm"
                            className={`w-full justify-start flex items-center gap-2 ${
                              isActive(item.href)
                                ? "bg-primary text-primary-foreground"
                                : ""
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon className="h-3 w-3" />
                            {item.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </nav>
  );
}
