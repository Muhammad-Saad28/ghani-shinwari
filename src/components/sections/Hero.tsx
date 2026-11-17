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
  Play,
} from "lucide-react";

export function Hero() {
  const { addToCart } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  // Showcase 3 top signature highlights in the hero interactive switch
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
      cookMethod: "Cooked in prime tallow, vine-ripened tomatoes & green chilies",
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
      badge: "Charcoal Kissed",
      cookMethod: "Skewered alternating meat & fat, seasoned only with mountain salt",
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
      cookMethod: "Slow-steamed for 4+ hours with whole potatoes & marrow bones",
    },
  ];

  const currentDish = showcaseDishes[activeSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-[#8F1725] text-[#F7F2E8] overflow-hidden pt-28 pb-16 lg:py-28"
    >
      {/* 1. Subtle Animated Ambient Glow & Smoke Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep rich crimson vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#5E0C15] via-[#8F1725] to-[#5E0C15]/95 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,_rgba(230,184,63,0.18),_transparent_55%)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_65%,_rgba(112,17,28,0.6),_transparent_50%)] z-10" />
        
        {/* Subtle geometric oriental grid lines overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(#E6B83F 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* LEFT COLUMN: Editorial Typography & Brand Storytelling (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Heritage Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs bg-[#70111C]/90 border border-[#E6B83F]/50 shadow-sm mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6B83F] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6B83F]" />
              </span>
              <Flame className="w-4 h-4 text-[#E6B83F]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-bold">
                Authentic Peshawari & Shinwari Hearth
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight leading-[1.04] text-[#F7F2E8] mb-5">
              Where Fire Meets <br className="hidden sm:inline" />
              <span className="italic font-normal text-[#E6B83F] relative inline-block">
                Sacred Tradition.
                {/* Golden hand-drawn underline accent */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-[#E6B83F]/70"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 9.5C80 3 220 2 297.5 9.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Tagline & Supporting Narrative */}
            <p className="text-base sm:text-lg text-[#F7F2E8]/90 font-light leading-relaxed max-w-xl mb-8">
              Experience the untamed soul of genuine Shinwari cooking. Fresh lamb and mutton
              weighed before your eyes, cooked live in rendered animal fat with vine tomatoes, rock salt, and split green chilies.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-10">
              <Button
                href="/menu"
                variant="gold"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-8 py-4 shadow-xl shadow-black/20"
              >
                <span>Explore Full Menu & Prices</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                href="/signatures"
                variant="alabaster"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base px-7 py-4"
              >
                View 6 Signatures
              </Button>
            </div>

            {/* Feature Guarantee Pillars */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#F7F2E8]/20 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6B83F] leading-none mb-1">
                  100%
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F7F2E8]">
                  Pure Tallow
                </span>
                <span className="text-[10px] text-[#F7F2E8]/70 hidden sm:inline">
                  No artificial oils
                </span>
              </div>

              <div className="flex flex-col border-l border-[#F7F2E8]/20 pl-4 sm:pl-6">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6B83F] leading-none mb-1">
                  Fresh
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F7F2E8]">
                  Live Weight
                </span>
                <span className="text-[10px] text-[#F7F2E8]/70 hidden sm:inline">
                  Cut & cooked to order
                </span>
              </div>

              <div className="flex flex-col border-l border-[#F7F2E8]/20 pl-4 sm:pl-6">
                <span className="font-serif text-xl sm:text-2xl font-bold text-[#E6B83F] leading-none mb-1">
                  Late Night
                </span>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#F7F2E8]">
                  Until 3:00 AM
                </span>
                <span className="text-[10px] text-[#F7F2E8]/70 hidden sm:inline">
                  Open daily in Lahore
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Dish Spotlight Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Main Framed Hero Presentation Card */}
            <div className="relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-xs overflow-hidden border-2 border-[#E6B83F] shadow-2xl bg-[#70111C] group">
              <Image
                key={currentDish.id}
                src={currentDish.image}
                alt={currentDish.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#70111C]/90 border border-[#E6B83F]/50 px-3 py-1.5 rounded-xs backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#E6B83F]" />
                <span className="text-[10px] uppercase tracking-widest text-[#F7F2E8] font-bold">
                  {currentDish.badge}
                </span>
              </div>

              {/* Quick Add Button overlay top right */}
              <button
                onClick={() => addToCart(currentDish.menuItem, "Full", currentDish.priceFull)}
                className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#E6B83F] hover:bg-[#F0C655] text-[#292522] text-xs font-bold uppercase tracking-wider rounded-xs shadow-md transition-all active:translate-y-0.5 cursor-pointer"
                title={`Quick add ${currentDish.title} to cart`}
              >
                <span>Add to Cart</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Bottom Card Content Box */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-20 bg-gradient-to-t from-[#5E0C15] via-[#70111C]/90 to-transparent backdrop-blur-xs border-t border-[#E6B83F]/30">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <span className="text-[11px] text-[#E6B83F] font-serif tracking-wide block">
                      {currentDish.urdu}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F2E8] font-normal leading-tight">
                      {currentDish.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs text-[#F7F2E8]/75 block uppercase tracking-wider">
                      Full (1 Kg)
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#E6B83F]">
                      PKR {currentDish.priceFull.toLocaleString()}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-[#F7F2E8]/80 leading-relaxed mb-4 line-clamp-2">
                  {currentDish.cookMethod}
                </p>

                {/* Micro selector tabs to toggle between the 3 dishes */}
                <div className="flex items-center gap-2 pt-2 border-t border-[#F7F2E8]/15">
                  <span className="text-[10px] uppercase tracking-wider text-[#F7F2E8]/60 mr-1">
                    Featured:
                  </span>
                  {showcaseDishes.map((dish, idx) => (
                    <button
                      key={dish.id}
                      onClick={() => setActiveSlide(idx)}
                      className={`px-2.5 py-1 rounded-xs text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                        activeSlide === idx
                          ? "bg-[#E6B83F] text-[#292522] shadow-sm"
                          : "bg-[#70111C] text-[#F7F2E8]/70 hover:text-white border border-[#E6B83F]/30"
                      }`}
                    >
                      0{idx + 1}. {dish.title.split(" ")[1] || dish.title.split(" ")[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative Gold Corner Flairs */}
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-[#E6B83F] pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-[#E6B83F] pointer-events-none" />

            {/* Floating Live Indicator Badge */}
            <div className="absolute -bottom-5 right-6 z-30 bg-[#F7F2E8] text-[#292522] py-2 px-4 rounded-xs border-2 border-[#8F1725] shadow-xl flex items-center gap-2.5 hidden sm:flex">
              <ShieldCheck className="w-4 h-4 text-[#8F1725]" />
              <span className="text-xs font-bold tracking-wide">
                Direct WhatsApp Dispatch: +92 305 4449151
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
