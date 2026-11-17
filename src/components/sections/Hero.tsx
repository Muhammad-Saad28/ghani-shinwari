"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { MENU_ITEMS } from "@/lib/menu-data";
import {
  Flame,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Plus,
  Compass,
  ChevronDown,
} from "lucide-react";

export function Hero() {
  const { addToCart } = useCart();
  const [activeDishIndex, setActiveDishIndex] = useState(0);

  const curatedCuts = [
    {
      id: "m-shinwari-karahi",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-shinwari-karahi")!,
      title: "Shinwari Mutton Karahi",
      urdu: "شنواری مٹن کڑاہی",
      tagline: "Live Cast-Iron Flame Sauté",
      priceHalf: 2000,
      priceFull: 3800,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
      badge: "Ancestral Recipe",
      cookMethod: "Seared over high-carbon iron woks in natural dumba tail tallow with vine-ripened tomatoes & coarse rock salt.",
      rating: "5.0",
      origin: "Khyber Heritage",
    },
    {
      id: "m-namkeen-tikka",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-namkeen-tikka")!,
      title: "Namkeen Dumba Tikka",
      urdu: "نمکین دنبہ تکہ",
      tagline: "Acacia Hardwood Charcoal",
      priceHalf: 2000,
      priceFull: 3800,
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85",
      badge: "Charcoal Kissed",
      cookMethod: "Skewered alternating cuts of lamb fat & tender lean meat, roasted slowly over glowing coals seasoned only with rock salt.",
      rating: "4.9",
      origin: "Frontier Skewers",
    },
    {
      id: "m-rosh-masala-yakhni",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-rosh-masala-yakhni")!,
      title: "Peshawari Mutton Rosh",
      urdu: "روایتی مٹن روش و یخنی",
      tagline: "Sealed Clay Degchi Steam",
      priceHalf: 2100,
      priceFull: 4000,
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1600&q=85",
      badge: "Slow-Braised Marrow",
      cookMethod: "Prime shanks slow-steamed for 4+ hours with whole potatoes & black pepper into a gold, nourishing broth.",
      rating: "5.0",
      origin: "Peshawar Dastarkhwan",
    },
  ];

  const activeDish = curatedCuts[activeDishIndex];

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] lg:min-h-screen flex flex-col justify-between bg-[#15130F] text-[#F7F2E8] overflow-hidden pt-28 pb-8 lg:pt-32 lg:pb-12 border-b border-[#E6B83F]/20"
    >
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND WITH PARALLAX & VIGNETTE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeDish.image}
          alt={activeDish.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 duration-1000 ease-out transition-all"
        />
        {/* Layered cinematic grading: dark obsidian base with deep burgundy & warm amber vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#15130F] via-[#15130F]/85 to-black/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15130F] via-[#15130F]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,_rgba(230,184,63,0.12),_transparent_60%)] z-10" />
        
        {/* Fine luxury film grain overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.035] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: `radial-gradient(#F7F2E8 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* 2. MAIN HERO EDITORIAL CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT 7 COLS: EDITORIAL TYPOGRAPHY */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Heritage Monogram Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#211C16]/90 border border-[#E6B83F]/40 shadow-xl mb-6 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6B83F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6B83F]" />
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-bold">
                Khyber Tribal Craft • Est. 2010
              </span>
            </div>

            {/* Main Headline — Editorial Luxury */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight leading-[1.03] text-[#F7F2E8] mb-6">
              Where Fire Meets <br className="hidden sm:inline" />
              <span className="italic font-light text-[#E6B83F] relative inline-block gold-glow-text">
                Ancestral Flavor.
                {/* Underline Flourish */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#E6B83F]/70"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.5C80 3 220 2 297.5 9.5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-base sm:text-lg text-[#F7F2E8]/85 font-light leading-relaxed max-w-xl mb-9">
              No commercial onions. No powdered masalas. Just mountain salt, vine-ripened tomatoes, and fresh meat seared in rendered lamb tail fat over volcanic iron flame.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="/menu"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto px-8 py-4 shadow-2xl glow-gold-sm"
              >
                <span>Explore Full Menu & Prices</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href="/signatures"
                variant="crimson"
                size="lg"
                className="w-full sm:w-auto px-7 py-4 glass-panel-dark text-white hover:text-white border border-[#E6B83F]/50 shadow-xl"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#E6B83F]" />
                <span className="text-white font-bold tracking-wider">View Signatures</span>
              </Button>
            </div>

            {/* Minimalist Micro Bar */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#F7F2E8]/15 w-full max-w-lg">
              <div>
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#E6B83F] leading-none mb-1">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F7F2E8]/80 font-medium">
                  Natural Tallow
                </span>
              </div>
              <div className="border-l border-[#F7F2E8]/15 pl-6">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#E6B83F] leading-none mb-1">
                  Live
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F7F2E8]/80 font-medium">
                  Weighed & Seared
                </span>
              </div>
              <div className="border-l border-[#F7F2E8]/15 pl-6">
                <span className="block font-serif text-xl sm:text-2xl font-bold text-[#E6B83F] leading-none mb-1">
                  3:00 AM
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F7F2E8]/80 font-medium">
                  Nightly in Lahore
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT 5 COLS: TACTILE GLASS DISH SPOTLIGHT */}
          <div className="lg:col-span-5 relative">
            <div className="relative p-6 sm:p-8 rounded-xs bg-[#211C16]/85 backdrop-blur-xl border border-[#E6B83F]/35 shadow-2xl card-hover-lift">
              
              {/* Dish Header Meta */}
              <div className="flex items-center justify-between pb-4 border-b border-[#F7F2E8]/15 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E6B83F] font-bold block">
                    Featured Cut 0{activeDishIndex + 1} / 03
                  </span>
                  <span className="font-serif text-xs text-[#F7F2E8]/70 italic">
                    {activeDish.origin}
                  </span>
                </div>
                
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#15130F]/80 border border-[#E6B83F]/30 text-xs font-bold text-[#E6B83F]">
                  <Star className="w-3.5 h-3.5 fill-[#E6B83F]" />
                  <span>{activeDish.rating}</span>
                </div>
              </div>

              {/* Title & Native Script */}
              <div className="mb-4">
                <span className="text-xs text-[#E6B83F] font-serif block mb-1">
                  {activeDish.urdu}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F2E8] font-normal leading-tight">
                  {activeDish.title}
                </h3>
              </div>

              {/* Culinary Cooking Method */}
              <p className="text-xs sm:text-sm text-[#F7F2E8]/80 leading-relaxed font-light mb-6">
                {activeDish.cookMethod}
              </p>

              {/* Pricing & Quick Add Row */}
              <div className="p-4 rounded-xs bg-[#15130F]/90 border border-[#E6B83F]/25 flex items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#F7F2E8]/60 block">
                    Half (0.5kg) / Full (1kg)
                  </span>
                  <div className="flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#E6B83F]">
                    <span>PKR {activeDish.priceHalf.toLocaleString()}</span>
                    <span className="text-[#F7F2E8]/40 font-light">|</span>
                    <span>PKR {activeDish.priceFull.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => addToCart(activeDish.menuItem, "Full", activeDish.priceFull)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 glass-btn-crimson text-white text-xs uppercase tracking-wider font-bold rounded-xs shadow-lg border border-[#E6B83F]/60 transition-all active:translate-y-0.5 cursor-pointer"
                  title={`Add Full ${activeDish.title} to cart`}
                >
                  <Plus className="w-3.5 h-3.5 text-[#E6B83F]" />
                  <span className="text-white">Add to Cart</span>
                </button>
              </div>

              {/* Switch Showcase Selector */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[10px] uppercase tracking-wider text-[#E6B83F] font-semibold flex items-center gap-1">
                  <Compass className="w-3 h-3" />
                  <span>Switch Cut:</span>
                </span>

                <div className="flex items-center gap-1.5">
                  {curatedCuts.map((dish, idx) => (
                    <button
                      key={dish.id}
                      onClick={() => setActiveDishIndex(idx)}
                      className={`px-3 py-1.5 rounded-xs text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                        activeDishIndex === idx
                          ? "bg-[#E6B83F] text-[#15130F] shadow-md"
                          : "bg-[#15130F] text-[#F7F2E8]/70 hover:text-white border border-[#E6B83F]/25"
                      }`}
                    >
                      0{idx + 1}. {dish.title.split(" ")[1] || dish.title.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle floating badge below */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#F7F2E8]/70 px-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E6B83F]" />
                Direct WhatsApp Dispatch
              </span>
              <span className="font-bold text-[#E6B83F]">
                +92 305 4449151
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. UNDERSTATED LUXURY BOTTOM BAR */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 mt-auto border-t border-[#F7F2E8]/10 flex flex-col sm:flex-row items-center justify-between text-xs tracking-widest text-[#F7F2E8]/60 gap-4">
        <a
          href="#signatures"
          className="hover:text-[#E6B83F] transition-colors inline-flex items-center gap-2"
        >
          <span>[ SCROLL TO DISCOVER ]</span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </a>

        <div className="flex items-center gap-6">
          <span>INSTAGRAM: @GHANI_SHINWARI</span>
          <span>•</span>
          <span>DAILY: 12:00 PM – 3:00 AM</span>
        </div>
      </div>
    </section>
  );
}
