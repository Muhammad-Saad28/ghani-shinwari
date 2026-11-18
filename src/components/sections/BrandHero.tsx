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
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#140608] text-[#F7F2E8] pt-24 pb-16 lg:py-24">
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Eyebrow, Tagline, Story Description, and Direct CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Authentic Heritage Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#8F1725]/60 border border-[#E6B83F]/35 backdrop-blur-md mb-6 shadow-lg">
              <span className="flex h-2 w-2 rounded-full bg-[#E6B83F] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#F7F2E8]/90">
                Peshawari & Shinwari Khyber Culinary Tradition
              </span>
            </div>

            {/* Main Brand Title & Tagline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-[#F7F2E8] leading-[1.08] mb-6">
              Authentic Shinwari Taste.{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#E6B83F] via-[#F3C44E] to-[#E6B83F]">
                A Tradition Worth Sharing.
              </span>
            </h1>

            {/* Urdu Heritage Name */}
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xl sm:text-2xl font-serif text-[#E6B83F]/90 font-medium tracking-wide">
                غنی شنواری روایتی دسترخوان
              </span>
              <span className="h-4 w-px bg-[#E6B83F]/30" />
              <span className="text-xs uppercase tracking-widest text-[#DED2BE]/80">
                Lahore Flagship
              </span>
            </div>

            {/* Brand Description */}
            <p className="text-base sm:text-lg text-[#DED2BE] leading-relaxed max-w-2xl mb-8 font-light">
              Experience the uncompromised richness of authentic Pashtun hearth cooking. Fresh prime mutton and dumba lamb seared live in rendered tail fat over volcanic iron flame — prepared with pure mountain rock salt, ripe vine tomatoes, and zero artificial masalas.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="/menu"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto shadow-2xl hover:scale-[1.02] active:scale-95 transition-all text-sm uppercase tracking-wider font-bold py-4 px-8 rounded-2xl"
              >
                <UtensilsCrossed className="w-4 h-4 mr-2" />
                Explore Our Menu
              </Button>

              <Button
                href={`https://wa.me/923054449151?text=${encodeURIComponent("Salam Ghani Shinwari, I would like to reserve a table / place an order.")}`}
                isExternal
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-[#E6B83F]/50 text-[#F7F2E8] hover:bg-[#8F1725] hover:border-[#8F1725] transition-all text-sm uppercase tracking-wider font-semibold py-4 px-8 backdrop-blur-md rounded-2xl"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-[#E6B83F]" />
                WhatsApp Order & Booking
              </Button>
            </div>

            {/* Value Pillars */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-xl">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#E6B83F] font-bold">100% Fresh</p>
                <p className="text-xs text-[#DED2BE]/75 mt-0.5">Live Hand-Picked Meat</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#E6B83F] font-bold">Zero Masalas</p>
                <p className="text-xs text-[#DED2BE]/75 mt-0.5">Tallow & Rock Salt</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#E6B83F] font-bold">Till 3:00 AM</p>
                <p className="text-xs text-[#DED2BE]/75 mt-0.5">Midnight Hearth Dining</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Featured Dish Showcase Card with Luxury Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* Ambient Dish Backlight Ring */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#8F1725]/50 via-[#E6B83F]/25 to-transparent rounded-full blur-3xl opacity-75 -z-10" />

            {/* Circular Showcase Vessel */}
            <div className="relative w-72 sm:w-88 md:w-96 lg:w-[420px] aspect-square rounded-full p-2.5 sm:p-3 border-2 border-[#E6B83F]/40 bg-gradient-to-b from-[#2a080d]/80 to-[#140608]/90 shadow-2xl backdrop-blur-md flex items-center justify-center group">
              
              {/* Inner Decorative Golden Orbit Ring */}
              <div className="absolute inset-1 rounded-full border border-dashed border-[#E6B83F]/30 animate-[spin_60s_linear_infinite]" />

              {/* Dish Photo */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-inner">
                <Image
                  src="/images/dishes/m-shinwari-karahi.webp"
                  alt="Authentic Ghani Shinwari Mutton Karahi cooked in lamb fat"
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 450px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle vignette on dish rim */}
                <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/40 pointer-events-none" />
              </div>

              {/* Floating Signature Dish Tag Badge */}
              <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#8F1725] border border-[#E6B83F] text-[#F7F2E8] shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                <Flame className="w-3.5 h-3.5 text-[#E6B83F] fill-[#E6B83F]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                  Signature Dish • Shinwari Karahi
                </span>
              </div>

              {/* Floating Bottom Price & Authentic Pill */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-2xl bg-[#1C110A]/95 border border-[#E6B83F]/60 text-[#F7F2E8] shadow-[0_16px_36px_rgba(0,0,0,0.6)] flex items-center gap-3 backdrop-blur-md">
                <div className="flex items-center gap-1 text-[#E6B83F]">
                  <Star className="w-3.5 h-3.5 fill-[#E6B83F]" />
                  <span className="text-xs font-bold">5.0</span>
                </div>
                <span className="h-3 w-px bg-white/20" />
                <span className="text-xs font-semibold text-[#DED2BE]">
                  Cooked Live in Lamb Tallow
                </span>
                <span className="h-3 w-px bg-white/20" />
                <span className="text-xs font-bold text-[#E6B83F]">
                  PKR 2,000
                </span>
              </div>
            </div>

            {/* Quick Micro-Address Pill */}
            <div className="mt-10 inline-flex items-center gap-2 text-xs text-[#DED2BE]/80 bg-black/40 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-[#E6B83F] shrink-0" />
              <span>General Truck Stand, 22/A Ravi Rd, Lahore</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative Bottom Transition Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0A0506] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
