"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.3, once: true });

  const alignmentClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  }[align];

  const isCrimson = theme === "crimson";

  return (
    <div
      ref={ref}
      className={cn("flex flex-col max-w-3xl mb-12 md:mb-16", alignmentClass, className)}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-3"
        >
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
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal leading-tight tracking-tight",
          isCrimson ? "text-[#F7F2E8]" : "text-[#292522]"
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-2xl",
            isCrimson ? "text-[#F7F2E8]/85" : "text-[#5C554F]"
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
