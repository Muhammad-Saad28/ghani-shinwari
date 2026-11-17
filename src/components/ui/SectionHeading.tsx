import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  theme?: "light" | "crimson";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  theme = "light",
}: SectionHeadingProps) {
  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const isCrimson = theme === "crimson";

  return (
    <div className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignmentClass, className)}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-3">
          <span
            className={cn(
              "w-6 h-[1.5px] inline-block",
              isCrimson ? "bg-[#E6B83F]" : "bg-[#8F1725]"
            )}
          />
          <span
            className={cn(
              "text-xs uppercase tracking-[0.25em] font-semibold",
              isCrimson ? "text-[#E6B83F]" : "text-[#8F1725]"
            )}
          >
            {eyebrow}
          </span>
          <span
            className={cn(
              "w-6 h-[1.5px] inline-block",
              isCrimson ? "bg-[#E6B83F]" : "bg-[#8F1725]"
            )}
          />
        </div>
      )}
      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-tight tracking-tight",
          isCrimson ? "text-[#F7F2E8]" : "text-[#292522]"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl",
            isCrimson ? "text-[#F7F2E8]/85" : "text-[#5C554F]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
