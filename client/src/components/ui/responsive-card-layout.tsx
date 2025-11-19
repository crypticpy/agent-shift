import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveCardLayoutProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Breakpoint at which to switch from column to row layout.
   * Default is "md" (later breakpoint than ResponsiveButtonGroup) because
   * card layouts typically need more horizontal space before switching to row layout.
   * @default "md"
   */
  breakpoint?: "sm" | "md" | "lg";
  /**
   * Gap size between items
   * @default "4"
   */
  gap?: "2" | "3" | "4" | "5" | "6";
  /**
   * Whether to center text on mobile and left-align on desktop
   * @default true
   */
  responsiveText?: boolean;
  /**
   * Vertical alignment in column mode
   * @default "center"
   */
  mobileAlign?: "start" | "center" | "end";
  /**
   * Vertical alignment in row mode
   * @default "start"
   */
  desktopAlign?: "start" | "center" | "end" | "baseline";
  /**
   * Horizontal justification in row mode
   * @default undefined
   */
  justify?: "start" | "center" | "end" | "between";
}

/**
 * ResponsiveCardLayout - A reusable component for common responsive flex patterns
 *
 * Handles the common pattern of:
 * - Column layout on mobile, row layout on larger screens
 * - Center-aligned on mobile, left-aligned on desktop
 * - Responsive gap and alignment
 *
 * Example usage:
 * ```tsx
 * <ResponsiveCardLayout>
 *   <div>Icon</div>
 *   <div>Content</div>
 * </ResponsiveCardLayout>
 * ```
 */
export function ResponsiveCardLayout({
  children,
  className,
  breakpoint = "md",
  gap = "4",
  responsiveText = true,
  mobileAlign = "center",
  desktopAlign = "start",
  justify,
}: ResponsiveCardLayoutProps) {
  return (
    <div
      className={cn(
        "flex flex-col",
        `${breakpoint}:flex-row`,
        `gap-${gap}`,
        `items-${mobileAlign}`,
        `${breakpoint}:items-${desktopAlign}`,
        responsiveText && "text-center",
        responsiveText && `${breakpoint}:text-left`,
        justify && `${breakpoint}:justify-${justify}`,
        className
      )}
    >
      {children}
    </div>
  );
}
