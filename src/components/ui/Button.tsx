import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "crimson" | "gold" | "outline" | "ghost" | "alabaster";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
}

export function Button({
  children,
  className,
  variant = "crimson",
  size = "md",
  href,
  isExternal,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#8F1725]/40 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-xs";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-xs sm:text-sm uppercase tracking-widest font-semibold",
    lg: "px-8 py-4 text-sm sm:text-base uppercase tracking-widest font-semibold",
  };

  const variantStyles = {
    crimson:
      "bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] shadow-md shadow-[#8F1725]/20 hover:shadow-lg hover:shadow-[#8F1725]/30 active:translate-y-0.5 border border-[#8F1725]",
    gold:
      "bg-[#E6B83F] hover:bg-[#F0C655] text-[#292522] font-semibold shadow-md shadow-[#E6B83F]/20 hover:shadow-lg active:translate-y-0.5 border border-[#E6B83F]",
    outline:
      "bg-transparent border border-[#8F1725] text-[#8F1725] hover:bg-[#8F1725] hover:text-[#F7F2E8] active:translate-y-0.5",
    alabaster:
      "bg-[#F7F2E8] hover:bg-[#FAF6EF] text-[#8F1725] font-semibold border border-[#DED2BE] shadow-md active:translate-y-0.5",
    ghost:
      "bg-transparent text-[#292522] hover:text-[#8F1725] hover:bg-[#8F1725]/5",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
