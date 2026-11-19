"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import {
  Flame,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  MapPin,
  Clock,
  PhoneCall,
  UtensilsCrossed,
} from "lucide-react";

export function BrandHero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#140608] text-[#F7F2E8] pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-24">
      {/* 1. Authentic Hearth Atmosphere Background with Rich Gradients & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hearth-hero-bg-dark.webp"
          alt="Traditional Shinwari Charcoal Hearth & Live Flame"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-95 contrast-105"
        />

        {/* Sophisticated editorial vignette & warm hearth lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#140608]/90 via-[#140608]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#140608] via-transparent to-[#140608]/70" />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-3 sm:gap-6 lg:gap-8 items-center">
          
          {/* Left: Text Content (Occupies 7 cols on mobile, 7 on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-7 sm:col-span-7 lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Authentic Heritage Badge */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#8F1725]/70 border border-[#E6B83F]/35 backdrop-blur-md mb-2.5 sm:mb-5 shadow-lg">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-[#E6B83F] animate-pulse shrink-0" />
              <span className="text-[9px] sm:text-xs font-semibold tracking-wider uppercase text-[#F7F2E8]/90 truncate">
                Shinwari Khyber Tradition
              </span>
            </div>

            {/* Main Brand Title & Tagline */}
            <h1 className="font-serif text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#F7F2E8] leading-[1.12] mb-2 sm:mb-5">
              Authentic Shinwari Taste.{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E6B83F] via-[#F3C44E] to-[#E6B83F]">
                A Tradition Worth Sharing.
              </span>
            </h1>

            {/* Urdu Heritage Name */}
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
              <span className="text-sm sm:text-2xl font-urdu text-[#E6B83F] font-bold tracking-normal drop-shadow-md" dir="rtl">
                غنی شنواری روایتی دسترخوان
              </span>
              <span className="h-3 sm:h-5 w-px bg-[#E6B83F]/30" />
              <span className="text-[9px] sm:text-xs uppercase tracking-widest text-[#DED2BE]/80">
                Lahore Flagship
              </span>
            </div>

            {/* Brand Description */}
            <p className="text-[11px] sm:text-base lg:text-lg text-[#DED2BE] leading-relaxed max-w-2xl mb-3.5 sm:mb-8 font-light line-clamp-3 sm:line-clamp-none">
              Experience the uncompromised richness of authentic Pashtun hearth cooking. Fresh prime mutton and dumba lamb seared live in rendered tail fat over volcanic iron flame — prepared with pure mountain rock salt, ripe vine tomatoes, and zero artificial masalas.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 w-full sm:w-auto mb-3 sm:mb-8">
              <Button
                href="/menu"
                variant="gold"
                size="sm"
                className="w-full sm:w-auto justify-center shadow-xl text-[10px] sm:text-sm uppercase tracking-wider font-bold py-2 sm:py-4 px-3 sm:px-8 rounded-xl sm:rounded-2xl"
              >
                <UtensilsCrossed className="w-3.5 h-3.5 mr-1.5 sm:mr-2" />
                <span>Explore Menu</span>
              </Button>

              <Button
                href={`https://wa.me/923330371414?text=${encodeURIComponent("Salam Ghani Shinwari, I would like to reserve a table / place an order.")}`}
                isExternal
                variant="outline"
                size="sm"
                className="w-full sm:w-auto justify-center border-[#E6B83F]/50 text-[#F7F2E8] hover:bg-[#8F1725] hover:border-[#8F1725] transition-all text-[10px] sm:text-sm uppercase tracking-wider font-semibold py-2 sm:py-4 px-3 sm:px-8 backdrop-blur-md rounded-xl sm:rounded-2xl"
              >
                <PhoneCall className="w-3.5 h-3.5 mr-1.5 sm:mr-2 text-[#E6B83F]" />
                <span>WhatsApp Order</span>
              </Button>
            </div>
          </motion.div>

          {/* Right: Featured Dish Showcase Vessel (Side-by-side with text: 5 cols on mobile & desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-5 sm:col-span-5 lg:col-span-5 relative flex flex-col items-center justify-center w-full"
          >
            {/* Ambient Dish Backlight Ring */}
            <div className="absolute -inset-2 sm:-inset-6 bg-gradient-to-tr from-[#8F1725]/50 via-[#E6B83F]/25 to-transparent rounded-full blur-2xl sm:blur-3xl opacity-75 -z-10" />

            {/* Circular Showcase Vessel */}
            <div className="relative w-full max-w-[155px] sm:max-w-[260px] md:max-w-[340px] lg:max-w-[420px] aspect-square rounded-full p-1.5 sm:p-2.5 md:p-3 border-2 border-[#E6B83F]/40 bg-gradient-to-b from-[#2a080d]/80 to-[#140608]/90 shadow-2xl backdrop-blur-md flex items-center justify-center group">
              
              {/* Inner Decorative Golden Orbit Ring */}
              <div className="absolute inset-0.5 sm:inset-1 rounded-full border border-dashed border-[#E6B83F]/30 animate-[spin_60s_linear_infinite]" />

              {/* Dish Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                <Image
                  src="/images/dishes/m-shinwari-karahi-hero-gold.webp"
                  alt="Authentic Ghani Shinwari Mutton Karahi cooked in lamb fat"
                  fill
                  priority
                  loading="eager"
                  sizes="(max-width: 640px) 160px, (max-width: 1024px) 340px, 420px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette on dish rim */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/40 pointer-events-none" />
              </div>

              {/* Floating Signature Dish Tag Badge */}
              <div className="absolute -top-2.5 sm:-top-4 left-1/2 -translate-x-1/2 px-2 sm:px-4 py-0.5 sm:py-1.5 rounded-full bg-[#8F1725] border border-[#E6B83F] text-[#F7F2E8] shadow-xl flex items-center gap-1 whitespace-nowrap z-20">
                <Flame className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 text-[#E6B83F] fill-[#E6B83F]" />
                <span className="text-[8px] sm:text-xs font-bold uppercase tracking-wider">
                  Shinwari Karahi
                </span>
              </div>

              {/* Floating Bottom Price & Authentic Pill */}
              <div className="absolute -bottom-3 sm:-bottom-5 left-1/2 -translate-x-1/2 px-2 sm:px-5 py-1 sm:py-2.5 rounded-xl sm:rounded-2xl bg-[#1C110A]/95 border border-[#E6B83F]/60 text-[#F7F2E8] shadow-xl flex items-center gap-1.5 sm:gap-3 backdrop-blur-md whitespace-nowrap z-20 max-w-[96%] justify-center">
                <div className="flex items-center gap-0.5 sm:gap-1 text-[#E6B83F]">
                  <Star className="w-2.5 sm:w-3.5 h-2.5 sm:h-3.5 fill-[#E6B83F]" />
                  <span className="text-[9px] sm:text-xs font-bold">5.0</span>
                </div>
                <span className="h-2.5 sm:h-3 w-px bg-white/20" />
                <span className="text-[8px] sm:text-xs font-semibold text-[#DED2BE] hidden xs:inline">
                  Tallow
                </span>
                <span className="h-2.5 sm:h-3 w-px bg-white/20 hidden xs:inline" />
                <span className="text-[9px] sm:text-xs font-bold text-[#E6B83F]">
                  PKR 2,000
                </span>
              </div>
            </div>

            {/* Quick Micro-Address Pill */}
            <div className="mt-5 sm:mt-8 hidden sm:inline-flex items-center gap-2 text-[10px] sm:text-xs text-[#DED2BE]/80 bg-black/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 backdrop-blur-sm text-center">
              <MapPin className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#E6B83F] shrink-0" />
              <span>General Truck Stand, 22/A Ravi Rd, Lahore</span>
            </div>
          </motion.div>

          {/* Value Pillars: Placed at the bottom across full 12 cols */}
          <div className="col-span-12 pt-3 sm:pt-6 border-t border-white/10 mt-2 sm:mt-4">
            <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-xl">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E6B83F] font-bold">100% Fresh</p>
                <p className="text-[9px] sm:text-xs text-[#DED2BE]/75 mt-0.5 leading-tight">Live Hand-Picked Meat</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E6B83F] font-bold">Zero Masalas</p>
                <p className="text-[9px] sm:text-xs text-[#DED2BE]/75 mt-0.5 leading-tight">Tallow & Rock Salt</p>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#E6B83F] font-bold">Till 3:00 AM</p>
                <p className="text-[9px] sm:text-xs text-[#DED2BE]/75 mt-0.5 leading-tight">Midnight Hearth Dining</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Decorative Bottom Transition Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0A0506] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
