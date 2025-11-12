import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ToolStrategyNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);

      // Determine active section
      const sections = [
        "decision-framework",
        "platform-deep-dive",
        "best-of-breed",
        "hybrid-approach",
        "common-concerns",
        "action-plan"
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "decision-framework", label: "Decision Framework" },
    { id: "platform-deep-dive", label: "Platform Vendors" },
    { id: "best-of-breed", label: "Best-of-Breed" },
    { id: "hybrid-approach", label: "Hybrid" },
    { id: "common-concerns", label: "Concerns" },
    { id: "action-plan", label: "Action Plan" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isSticky
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          {/* Back to Guidance Link */}
          <Link href="/guidance">
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600 hover:text-slate-900"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Guidance
            </Button>
          </Link>

          {/* Section Navigation */}
          {isSticky && (
            <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-orange-100 text-orange-900 border border-orange-300"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

          {/* Mobile Dropdown */}
          {isSticky && (
            <div className="lg:hidden">
              <select
                value={activeSection}
                onChange={(e) => {
                  const section = e.target.value;
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-3 py-1.5 rounded-lg text-sm border border-slate-200 bg-white"
              >
                <option value="">Jump to section...</option>
                {navItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
