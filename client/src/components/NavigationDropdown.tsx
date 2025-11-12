import { Link } from "wouter";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

export interface NavigationDropdownItem {
  href: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

interface NavigationDropdownProps {
  label: string;
  items: NavigationDropdownItem[];
  isActive: boolean;
}

export function NavigationDropdown({ label, items, isActive }: NavigationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button */}
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ${
          isActive
            ? "bg-primary text-primary-foreground shadow-lg"
            : "hover:bg-accent/50"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <svg
          className={`h-4 w-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
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
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href}>
                <div
                  className="flex items-start gap-3 px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="h-10 w-10 bg-gradient-to-br from-primary/10 to-chart-1/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-xs text-slate-600">
                      {item.description}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
