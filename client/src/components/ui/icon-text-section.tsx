import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface IconTextSectionProps {
  icon: ReactNode;
  title: string | ReactNode;
  description?: string | ReactNode;
  iconBg?: string;
  iconColor?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  className?: string;
}

/**
 * Responsive icon + text section component
 *
 * Mobile (<768px): Icon centered above text, full width
 * Desktop (≥768px): Icon left, text right, side-by-side
 */
export function IconTextSection({
  icon,
  title,
  description,
  iconBg = "bg-primary/10",
  iconColor,
  titleClassName = "text-2xl font-bold text-foreground",
  descriptionClassName = "text-lg text-muted-foreground",
  className,
}: IconTextSectionProps) {
  return (
    <div className={cn("flex flex-col md:flex-row items-start gap-4", className)}>
      {/* Icon container - centered on mobile, left-aligned on desktop */}
      <div className={cn(
        "p-3 rounded-xl md:flex-shrink-0 mx-auto md:mx-0",
        iconBg,
        iconColor
      )}>
        {icon}
      </div>

      {/* Text content - full width on mobile */}
      <div className="flex-1 text-center md:text-left">
        {typeof title === 'string' ? (
          <h3 className={cn(titleClassName, "mb-2")}>{title}</h3>
        ) : (
          title
        )}
        {description && (
          typeof description === 'string' ? (
            <p className={descriptionClassName}>{description}</p>
          ) : (
            description
          )
        )}
      </div>
    </div>
  );
}
