import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "crimson" | "gold" | "outline" | "ghost" | "alabaster" | "glass";
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
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E6B83F]/50 disabled:opacity-50 disabled:pointer-events-none cursor-pointer rounded-xs shimmer-btn select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3.5 text-xs sm:text-sm uppercase tracking-widest font-semibold",
    lg: "px-8 py-4 text-sm sm:text-base uppercase tracking-widest font-semibold",
  };

  const variantStyles = {
    crimson:
      "bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] shadow-lg shadow-[#8F1725]/30 hover:shadow-xl hover:shadow-[#8F1725]/45 hover:-translate-y-0.5 active:translate-y-0 border border-[#8F1725]",
    gold:
      "bg-[#E6B83F] hover:bg-[#F3C44E] text-[#292522] font-bold shadow-lg shadow-[#E6B83F]/25 hover:shadow-xl hover:shadow-[#E6B83F]/40 hover:-translate-y-0.5 active:translate-y-0 border border-[#E6B83F]",
    outline:
      "bg-transparent border-2 border-[#8F1725] text-[#8F1725] hover:bg-[#8F1725] hover:text-[#F7F2E8] hover:-translate-y-0.5 active:translate-y-0",
    alabaster:
      "bg-[#F7F2E8] hover:bg-white text-[#8F1725] font-semibold border border-[#DED2BE] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0",
    glass:
      "glass-panel-dark text-[#F7F2E8] hover:bg-[#70111C]/90 border border-[#E6B83F]/50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0",
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
