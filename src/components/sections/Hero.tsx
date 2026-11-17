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
  Check,
  Plus,
  Compass,
} from "lucide-react";

export function Hero() {
  const { addToCart } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  const showcaseDishes = [
    {
      id: "m-shinwari-karahi",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-shinwari-karahi")!,
      title: "Shinwari Mutton Karahi",
      urdu: "شنواری مٹن کڑاہی",
      tagline: "Live Cast-Iron Flame Sauté",
      priceHalf: 2000,
      priceFull: 3800,
      image:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1400&q=85",
      badge: "The Crown Jewel",
      cookMethod: "Sautéed in pure rendered dumba tail tallow, fresh vine tomatoes & split green chilies",
      rating: "5.0",
      orderCount: "1.2k+ orders this week",
    },
    {
      id: "m-namkeen-tikka",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-namkeen-tikka")!,
      title: "Namkeen Dumba Tikka",
      urdu: "نمکین دنبہ تکہ",
      tagline: "Acacia Charcoal Braziers",
      priceHalf: 2000,
      priceFull: 3800,
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1400&q=85",
      badge: "Charcoal Smoke",
      cookMethod: "Alternating lamb fat & lean cubes, seasoned exclusively with coarse rock salt",
      rating: "4.9",
      orderCount: "850+ orders this week",
    },
    {
      id: "m-rosh-masala-yakhni",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-rosh-masala-yakhni")!,
      title: "Peshawari Mutton Rosh",
      urdu: "روایتی مٹن روش و یخنی",
      tagline: "Sealed Clay Degchi Steam",
      priceHalf: 2100,
      priceFull: 4000,
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1400&q=85",
      badge: "Ancestral Broth",
      cookMethod: "Slow-steamed for 4+ hours with whole potatoes & marrow-rich joint bones",
      rating: "5.0",
      orderCount: "940+ orders this week",
    },
  ];

  const currentDish = showcaseDishes[activeSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center bg-[#8F1725] text-[#F7F2E8] overflow-hidden pt-28 pb-16 lg:py-28"
    >
      {/* 1. LAYERED CINEMATIC BACKGROUND WITH GLOWS & ORIENTAL GEOMETRY */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep rich crimson gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#47080F] via-[#70111C] to-[#8F1725] z-10 opacity-95" />
        
        {/* Radial ambient glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#E6B83F]/15 rounded-full blur-[120px] z-10 animate-pulse-glow" />
        <div className="absolute bottom-1/4 left-1/6 w-80 h-80 bg-[#A52030]/30 rounded-full blur-[100px] z-10 animate-pulse-glow" />

        {/* Subtle geometric dot grid overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#E6B83F 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: HERO TYPOGRAPHY & INTERACTIVE CTAS (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Pill with Glassmorphism & Pulse Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-pill shadow-sm mb-6 animate-soft-float">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6B83F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E6B83F]" />
              </span>
              <Flame className="w-4 h-4 text-[#E6B83F]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-bold">
                Authentic Peshawari & Shinwari Hearth
              </span>
            </div>

            {/* Main Hero Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[78px] font-normal tracking-tight leading-[1.03] text-[#F7F2E8] mb-5">
              Where Fire Meets <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E6B83F] relative inline-block gold-glow-text">
                Sacred Tradition.
                {/* SVG Golden Wave Underline Accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#E6B83F]"
                  viewBox="0 0 320 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10C85 3 235 2 317 10"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Editorial Narrative */}
            <p className="text-base sm:text-lg text-[#F7F2E8]/90 font-light leading-relaxed max-w-xl mb-8">
              Experience the untamed soul of genuine Shinwari cooking. Fresh lamb and mutton weighed live in front of you, seared at volcanic heat in cast-iron woks with ripe tomatoes, coarse mountain salt, and green chilies.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="/menu"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-8 py-4 shadow-xl glow-gold-sm hover:scale-[1.03] transition-transform duration-300"
              >
                <span>Explore Full Menu & Prices</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href="/signatures"
                variant="glass"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-7 py-4 hover:scale-[1.03] transition-transform duration-300"
              >
                <Sparkles className="w-4 h-4 mr-2 text-[#E6B83F]" />
                <span>View 6 Signatures</span>
              </Button>
            </div>

            {/* Glassmorphic Metrics / Trust Ribbon */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 p-4 sm:p-5 rounded-xs glass-panel-dark-subtle border border-[#E6B83F]/20 w-full max-w-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6B83F]">100%</span>
                  <Flame className="w-3.5 h-3.5 text-[#E6B83F]/80" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F7F2E8]">
                  Pure Tallow
                </span>
                <span className="text-[10px] text-[#F7F2E8]/70 hidden sm:inline">
                  Zero artificial oils
                </span>
              </div>

              <div className="flex flex-col border-l border-[#F7F2E8]/20 pl-4 sm:pl-6">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6B83F]">Live</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E6B83F]/80" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F7F2E8]">
                  Weight & Cut
                </span>
                <span className="text-[10px] text-[#F7F2E8]/70 hidden sm:inline">
                  Weighed before wok
                </span>
              </div>

              <div className="flex flex-col border-l border-[#F7F2E8]/20 pl-4 sm:pl-6">
                <div className="flex items-center gap-1">
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6B83F]">3:00 AM</span>
                  <Clock className="w-3.5 h-3.5 text-[#E6B83F]/80" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F7F2E8]">
                  Late Night
                </span>
                <span className="text-[10px] text-[#F7F2E8]/70 hidden sm:inline">
                  Open daily in Lahore
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SWIFTBITE-STYLE INTERACTIVE GLASS DISH SHOWCASE (5 Cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            
            {/* Ambient Backlight Glow behind card */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#E6B83F]/30 to-[#8F1725]/60 rounded-xs blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

            {/* Main Interactive Showcase Card with Glass and Lift Effect */}
            <div className="relative w-full rounded-xs overflow-hidden border-2 border-[#E6B83F] shadow-2xl bg-[#70111C] group card-hover-lift">
              
              {/* Image Frame with Zoom Effect */}
              <div className="relative aspect-[4/3] sm:aspect-square lg:aspect-[4/3.8] w-full overflow-hidden bg-black/40">
                <Image
                  key={currentDish.id}
                  src={currentDish.image}
                  alt={currentDish.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center scale-100 group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                
                {/* Layered cinematic vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#47080F] via-black/25 to-transparent pointer-events-none" />

                {/* Top Badge: Floating Glass Pill */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 glass-panel-dark px-3 py-1.5 rounded-full border border-[#E6B83F]/50 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-[#E6B83F]" />
                  <span className="text-[10px] uppercase tracking-widest text-[#F7F2E8] font-bold">
                    {currentDish.badge}
                  </span>
                </div>

                {/* Top Rating Badge */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 glass-panel-dark px-2.5 py-1.5 rounded-full border border-[#E6B83F]/40 shadow-md text-xs font-bold text-[#E6B83F]">
                  <Star className="w-3.5 h-3.5 fill-[#E6B83F]" />
                  <span>{currentDish.rating}</span>
                </div>

                {/* Instant Quick Add Cart Button Floating on Image */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button
                    onClick={() => addToCart(currentDish.menuItem, "Full", currentDish.priceFull)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#E6B83F] hover:bg-[#F3C44E] text-[#292522] text-xs font-bold uppercase tracking-wider rounded-xs shadow-xl glow-gold-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    title={`Add Full ${currentDish.title} to cart`}
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                    <span>Quick Add • PKR {currentDish.priceFull.toLocaleString()}</span>
                  </button>
                </div>
              </div>

              {/* Bottom Glassmorphic Card Details */}
              <div className="p-5 sm:p-6 bg-gradient-to-t from-[#47080F] via-[#5E0C15] to-[#70111C]/95 border-t border-[#E6B83F]/30 backdrop-blur-md">
                
                {/* Title and Prices */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <span className="text-[11px] text-[#E6B83F] font-serif tracking-wider block">
                      {currentDish.urdu}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F2E8] font-normal leading-tight">
                      {currentDish.title}
                    </h3>
                  </div>
                  
                  <div className="text-right shrink-0">
                    <span className="text-[10px] text-[#F7F2E8]/70 block uppercase tracking-wider">
                      Half / Full (1 Kg)
                    </span>
                    <div className="flex items-center gap-1 text-sm sm:text-base font-bold text-[#E6B83F]">
                      <span>PKR {currentDish.priceHalf.toLocaleString()}</span>
                      <span className="text-[#F7F2E8]/40">|</span>
                      <span>PKR {currentDish.priceFull.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Cooking Method Description */}
                <p className="text-xs text-[#F7F2E8]/85 leading-relaxed mb-4 line-clamp-2 font-light">
                  {currentDish.cookMethod}
                </p>

                {/* Interactive Carousel Dish Selectors */}
                <div className="flex items-center justify-between pt-3 border-t border-[#F7F2E8]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#E6B83F] font-semibold flex items-center gap-1">
                    <Compass className="w-3 h-3" />
                    <span>Switch Showcase:</span>
                  </span>

                  <div className="flex items-center gap-2">
                    {showcaseDishes.map((dish, idx) => (
                      <button
                        key={dish.id}
                        onClick={() => setActiveSlide(idx)}
                        className={`px-3 py-1.5 rounded-xs text-[10px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                          activeSlide === idx
                            ? "bg-[#E6B83F] text-[#292522] shadow-md scale-105"
                            : "glass-panel-dark text-[#F7F2E8]/70 hover:text-white border border-[#E6B83F]/30 hover:border-[#E6B83F]"
                        }`}
                      >
                        0{idx + 1}. {dish.title.split(" ")[1] || dish.title.split(" ")[0]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Corner Accent Ornaments */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#E6B83F] pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#E6B83F] pointer-events-none" />

            {/* Floating Live Dispatch Pill */}
            <div className="absolute -bottom-5 left-6 right-6 z-30 glass-panel-light text-[#292522] py-2.5 px-4 rounded-xs border-2 border-[#8F1725] shadow-xl flex items-center justify-between hidden sm:flex">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8F1725]" />
                <span className="text-xs font-bold text-[#8F1725]">
                  Instant WhatsApp Dispatch
                </span>
              </div>
              <span className="text-xs font-extrabold text-[#292522]">
                +92 305 4449151
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
