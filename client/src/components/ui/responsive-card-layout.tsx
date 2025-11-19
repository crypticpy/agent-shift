import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveCardLayoutProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Breakpoint at which to switch from column to row layout
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
  const breakpointClass = `${breakpoint}:flex-row`;
  const gapClass = `gap-${gap}`;
  const mobileGapClass = gap;
  const desktopGapClass = `${breakpoint}:gap-${gap}`;

  const mobileAlignClass = `items-${mobileAlign}`;
  const desktopAlignClass = `${breakpoint}:items-${desktopAlign}`;

  const textClass = responsiveText
    ? `text-center ${breakpoint}:text-left`
    : "";

  const justifyClass = justify
    ? `${breakpoint}:justify-${justify}`
    : "";

  return (
    <div
      className={cn(
        "flex flex-col",
        breakpointClass,
        gapClass,
        mobileAlignClass,
        desktopAlignClass,
        textClass,
        justifyClass,
        className
      )}
    >
      {children}
    </div>
  );
}

interface ResponsiveButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Breakpoint at which to switch from column to row layout
   * @default "sm"
   */
  breakpoint?: "sm" | "md" | "lg";
  /**
   * Gap size between buttons
   * @default "4"
   */
  gap?: "2" | "3" | "4" | "5" | "6";
}

/**
 * ResponsiveButtonGroup - A specialized layout for button groups
 *
 * Handles the common pattern for CTA button groups:
 * - Column layout on mobile, row layout on small+ screens
 * - Centered horizontally
 *
 * Example usage:
 * ```tsx
 * <ResponsiveButtonGroup>
 *   <Button>Primary Action</Button>
 *   <Button variant="outline">Secondary Action</Button>
 * </ResponsiveButtonGroup>
 * ```
 */
export function ResponsiveButtonGroup({
  children,
  className,
  breakpoint = "sm",
  gap = "4",
}: ResponsiveButtonGroupProps) {
  const breakpointClass = `${breakpoint}:flex-row`;
  const gapClass = `gap-${gap}`;

  return (
    <div
      className={cn(
        "flex flex-col",
        breakpointClass,
        gapClass,
        "justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
