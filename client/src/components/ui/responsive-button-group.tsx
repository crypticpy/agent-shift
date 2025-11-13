import { ReactNode, Children, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

interface ResponsiveButtonGroupProps {
  children: ReactNode;
  className?: string;
}

/**
 * Responsive button group component
 *
 * Mobile (<768px): Buttons stack vertically, full width
 * Desktop (≥768px): Buttons align horizontally, auto width
 *
 * Automatically applies w-full md:w-auto to all button children
 */
export function ResponsiveButtonGroup({
  children,
  className,
}: ResponsiveButtonGroupProps) {
  // Clone children and add responsive width classes
  const responsiveChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      // Add responsive width classes to each button
      return cloneElement(child, {
        ...child.props,
        className: cn(
          child.props.className,
          "w-full md:w-auto"
        ),
      } as any);
    }
    return child;
  });

  return (
    <div className={cn("flex flex-col md:flex-row gap-3", className)}>
      {responsiveChildren}
    </div>
  );
}
