import React from "react";
import { cn } from "@/lib/utils";

interface ResponsiveButtonGroupProps {
  children: React.ReactNode;
  className?: string;
  /**
   * Breakpoint at which to switch from column to row layout.
   * Default is "sm" (earlier breakpoint than ResponsiveCardLayout) because
   * button groups typically need to stack on mobile and go horizontal sooner.
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
  return (
    <div
      className={cn(
        "flex flex-col",
        `${breakpoint}:flex-row`,
        `gap-${gap}`,
        "justify-center",
        className
      )}
    >
      {children}
    </div>
  );
}
