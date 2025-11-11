import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Lightbulb, 
  Wrench, 
  Zap, 
  Calculator, 
  FileText,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { APP_LOGO } from "@/const";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: null },
    { href: "/getting-started", label: "Getting Started", icon: BookOpen },
    { href: "/learn", label: "Learn", icon: Lightbulb },
    { href: "/use-cases", label: "Use Cases", icon: Sparkles },
    { href: "/catalog", label: "Tools", icon: Wrench },
    { href: "/workflows", label: "Workflows", icon: Zap },
    { href: "/calculator", label: "Calculator", icon: Calculator },
    { href: "/resources", label: "Resources", icon: FileText },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-lg border-b border-border sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-all group">
              {APP_LOGO && (
                <img src={APP_LOGO} alt="Logo" className="h-8 w-8 group-hover:scale-110 transition-transform" />
              )}
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-amber-500 to-emerald-600 bg-clip-text text-transparent">
                Agent Shift
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <Button
                    variant={isActive(item.href) ? "default" : "ghost"}
                    className={`flex items-center gap-2 transition-all duration-300 ${
                      isActive(item.href)
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-accent/50"
                    }`}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link key={item.href} href={item.href}>
                    <Button
                      variant={isActive(item.href) ? "default" : "ghost"}
                      className={`w-full justify-start flex items-center gap-2 transition-all duration-300 ${
                        isActive(item.href)
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "hover:bg-accent/50"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {Icon && <Icon className="h-4 w-4" />}
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
