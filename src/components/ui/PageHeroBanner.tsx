import React from "react";
import { cn } from "@/lib/utils";

interface PageHeroBannerProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  badge?: string;
  accentText?: string;
  stats?: { label: string; value: string }[];
  className?: string;
}

export function PageHeroBanner({
  eyebrow,
  title,
  subtitle,
  badge,
  accentText,
  stats,
  className,
}: PageHeroBannerProps) {
  return (
    <div
      className={cn(
        "relative bg-[#8F1725] text-[#F7F2E8] pt-32 pb-20 md:pt-40 md:pb-24 border-b border-[#E6B83F]/30 overflow-hidden",
        className
      )}
    >
      {/* Background Gradients & Ambient Lights */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#590B13] via-[#8F1725] to-[#40060C] z-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#E6B83F]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#B58A2B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Tribal Watermark */}
      <div className="absolute -right-12 bottom-0 font-serif text-[130px] md:text-[200px] text-white/[0.03] select-none pointer-events-none font-bold tracking-tight z-0 leading-none">
        SHINWARI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#70111C] border border-[#E6B83F]/40 text-[#E6B83F] text-xs uppercase tracking-[0.25em] font-bold mb-5 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E6B83F] animate-pulse" />
          <span>{eyebrow}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F7F2E8] font-normal tracking-tight leading-[1.15] mb-5 max-w-4xl mx-auto">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-[#F7F2E8]/85 max-w-2xl mx-auto font-light leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* Optional Stats Counter Bar */}
        {stats && stats.length > 0 && (
          <div className="inline-flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-4 pt-6 border-t border-[#E6B83F]/20">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#E6B83F]">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-[#F7F2E8]/75 font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
