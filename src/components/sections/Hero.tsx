"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { MENU_ITEMS } from "@/lib/menu-data";
import {
  Flame,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
  const { addToCart } = useCart();
  const [activeIndex, setActiveIndex] = useState(0);

  // 6 Signature Dishes for the Carousel
  const carouselDishes = [
    {
      id: "m-shinwari-karahi",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-shinwari-karahi")!,
      title: "Shinwari Mutton Karahi",
      urdu: "شنواری مٹن کڑاہی",
      tag: "Live Cast-Iron Flame",
      priceHalf: 2000,
      priceFull: 3800,
      image: "/images/dishes/m-shinwari-karahi.webp",
      badge: "HOT DEALS",
      rating: "5.0",
      category: "Mutton",
    },
    {
      id: "m-namkeen-tikka",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-namkeen-tikka")!,
      title: "Namkeen Mutton Tikka",
      urdu: "نمکین مٹن تکہ",
      tag: "Hardwood Charcoal",
      priceHalf: 2000,
      priceFull: 3800,
      image: "/images/dishes/m-namkeen-tikka.webp",
      badge: "POPULAR",
      rating: "4.9",
      category: "Charcoal BBQ",
    },
    {
      id: "l-dumba-karahi",
      menuItem: MENU_ITEMS.find((i) => i.id === "l-shinwari-karahi")!,
      title: "Dumba Lamb Karahi",
      urdu: "اصلی دنبہ کڑاہی",
      tag: "100% Pure Tallow",
      priceHalf: 1900,
      priceFull: 3700,
      image: "/images/dishes/l-dumba-karahi.webp",
      badge: "HOT DEALS",
      rating: "5.0",
      category: "Lamb Special",
    },
    {
      id: "m-kabli-pulao",
      menuItem: MENU_ITEMS.find((i) => i.id === "m-kabli-pulao")!,
      title: "Mutton Kabli Pulao",
      urdu: "افغانی کابلی پلاؤ",
      tag: "Bone Stock Rice",
      priceHalf: 800,
      priceFull: 1600,
      image: "/images/dishes/m-kabli-pulao.webp",
      badge: "SIGNATURE",
      rating: "5.0",
      category: "Royal Rice",
    },
    {
      id: "bbq-chapli-kabab",
      menuItem: MENU_ITEMS.find((i) => i.id === "b-chapli-kabab")!,
      title: "Peshawari Chapli Kabab",
      urdu: "پشاوری چپلی کباب",
      tag: "Tallow Crisp Fry",
      priceHalf: 900,
      priceFull: 1800,
      image: "/images/dishes/bbq-chapli-kabab.webp",
      badge: "AUTHENTIC",
      rating: "5.0",
      category: "Peshawari Cut",
    },
    {
      id: "bbq-peshawari-sajji",
      menuItem: MENU_ITEMS.find((i) => i.id === "bbq-peshawari-sajji")!,
      title: "Peshawari Sajji",
      urdu: "پشاوری روایتی سجی",
      tag: "Crisp Charcoal Roast",
      priceFull: 2490,
      image: "/images/dishes/bbq-peshawari-sajji.webp",
      badge: "CHEF CHOICE",
      rating: "4.9",
      category: "Whole Roast",
    },
  ];

  const total = carouselDishes.length; // 6 items

  // Moving forward changes to the next image on the right (slides Right -> Left)
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Continuous smooth auto-carousel loop moving right to left
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(timer);
  }, [total]);

  // Position calculator relative to activeIndex (handles circular 6 dishes cleanly)
  const getSlotProps = (index: number) => {
    // Relative distance: -1 is left, 0 is center, 1 is right, 2 is entering right, etc.
    let diff = (index - activeIndex + total) % total;
    if (diff > total / 2) {
      diff -= total; // normalize into [-2, -1, 0, 1, 2, 3]
    }

    if (diff === 0) {
      // Center (Upright, zero degrees, scale 1.1)
      return {
        x: 0,
        rotate: 0,
        scale: 1.1,
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto" as const,
      };
    } else if (diff === -1) {
      // Left item (Tilted -30° towards left)
      return {
        x: -280,
        rotate: -30,
        scale: 0.86,
        opacity: 0.65,
        zIndex: 15,
        pointerEvents: "auto" as const,
      };
    } else if (diff === 1) {
      // Right item (Tilted +30° towards right)
      return {
        x: 280,
        rotate: 30,
        scale: 0.86,
        opacity: 0.65,
        zIndex: 15,
        pointerEvents: "auto" as const,
      };
    } else if (diff > 1) {
      // Offscreen right (waiting to slide into right slot)
      return {
        x: 520,
        rotate: 45,
        scale: 0.7,
        opacity: 0,
        zIndex: 5,
        pointerEvents: "none" as const,
      };
    } else {
      // Offscreen left (exited left slot)
      return {
        x: -520,
        rotate: -45,
        scale: 0.7,
        opacity: 0,
        zIndex: 5,
        pointerEvents: "none" as const,
      };
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center items-center bg-[#0D0B09] text-[#F7F2E8] overflow-hidden pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#E6B83F]/20"
    >
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18080A] via-[#0D0B09] to-[#0A0807] z-0 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-[#E6B83F]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#8F1725]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full text-center relative z-10 flex flex-col items-center">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#70111C]/80 border border-[#E6B83F]/40 text-[#E6B83F] text-xs uppercase tracking-[0.25em] font-bold mb-6 shadow-md backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-[#E6B83F] animate-pulse" />
          <span>Authentic Shinwari & Peshawari Hearth</span>
        </div>

        {/* TOP MAIN HEADING (Requested) */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl leading-[1.12]">
          Where Fire Meets <span className="text-[#E6B83F]">Ancestral Flavor.</span>
        </h1>

        {/* SMOOTH CONTINUOUS 6-DISH CAROUSEL STAGE */}
        <div className="relative w-full max-w-4xl h-[340px] sm:h-[390px] md:h-[420px] my-2 flex items-center justify-center">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            aria-label="Previous Dish"
            className="absolute left-2 sm:left-4 z-40 w-11 h-11 rounded-full bg-black/75 hover:bg-[#8F1725] text-white border border-[#E6B83F]/40 flex items-center justify-center transition-all shadow-xl backdrop-blur-md active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-[#E6B83F]" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Dish"
            className="absolute right-2 sm:right-4 z-40 w-11 h-11 rounded-full bg-black/75 hover:bg-[#8F1725] text-white border border-[#E6B83F]/40 flex items-center justify-center transition-all shadow-xl backdrop-blur-md active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-[#E6B83F]" />
          </button>

          {/* All 6 Dishes smoothly animated with Framer Motion Layout Tracking */}
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {carouselDishes.map((dish, index) => {
              const slot = getSlotProps(index);
              const isCenter = slot.zIndex === 30;

              return (
                <motion.div
                  key={dish.id}
                  animate={{
                    x: slot.x,
                    rotate: slot.rotate,
                    scale: slot.scale,
                    opacity: slot.opacity,
                    zIndex: slot.zIndex,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1], // Smooth luxury glide
                  }}
                  onClick={() => {
                    if (slot.x < 0) handlePrev();
                    if (slot.x > 0) handleNext();
                  }}
                  className={cn(
                    "absolute aspect-square w-48 sm:w-60 md:w-72 rounded-[28px] overflow-hidden select-none shadow-2xl transition-shadow cursor-pointer",
                    isCenter
                      ? "ring-2 ring-[#E6B83F] shadow-[0_20px_60px_rgba(230,184,63,0.35)]"
                      : "ring-1 ring-white/20 hover:opacity-90"
                  )}
                  style={{ pointerEvents: slot.pointerEvents }}
                >
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    sizes="(max-width: 640px) 190px, 280px"
                    className="object-cover object-center"
                    priority={isCenter}
                  />

                  {/* Dark Vignette Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15 transition-opacity",
                      isCenter ? "opacity-75" : "opacity-85"
                    )}
                  />

                  {/* Centered Dish "HOT DEALS" Badge */}
                  {isCenter && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="inline-block px-3 py-1 bg-[#8F1725] text-[#E6B83F] font-bold text-[10px] tracking-wider uppercase rounded-md border border-[#E6B83F]/60 shadow-lg -rotate-3">
                        {dish.badge}
                      </span>
                    </div>
                  )}

                  {/* Rating Badge */}
                  {isCenter && (
                    <div className="absolute top-4 right-4 z-20 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/70 border border-[#E6B83F]/40 text-xs font-bold text-[#E6B83F] backdrop-blur-md">
                      <Star className="w-3 h-3 fill-[#E6B83F]" />
                      <span>{dish.rating}</span>
                    </div>
                  )}

                  {/* Bottom Dish Info on Active Center Card */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-20 text-left">
                    <span className="text-[10px] uppercase tracking-wider text-[#E6B83F] font-bold block mb-0.5">
                      {dish.tag}
                    </span>
                    <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                      {dish.title}
                    </h3>
                    
                    {isCenter && (
                      <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between">
                        <span className="text-xs sm:text-sm font-extrabold text-[#E6B83F]">
                          {dish.priceHalf ? `PKR ${dish.priceHalf.toLocaleString()}` : `PKR ${dish.priceFull.toLocaleString()}`}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(dish.menuItem, dish.priceHalf ? "Half" : "Full", dish.priceHalf || dish.priceFull);
                          }}
                          className="inline-flex items-center gap-1 px-3 py-1.5 glass-btn-crimson text-white rounded-xs text-[11px] font-bold cursor-pointer hover:scale-105 transition-all shadow-md"
                        >
                          <Plus className="w-3 h-3 text-[#E6B83F]" />
                          <span>Quick Add</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Indicator Dots for all 6 dishes */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {carouselDishes.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === i
                    ? "w-7 bg-[#E6B83F] shadow-[0_0_8px_rgba(230,184,63,0.8)]"
                    : "w-2 bg-white/30 hover:bg-white/60"
                )}
              />
            ))}
          </div>
        </div>

        {/* BOTTOM SUBTITLE PHILOSOPHY TEXT (Requested) */}
        <p className="text-sm sm:text-base md:text-lg text-[#F7F2E8]/90 font-normal leading-relaxed max-w-2xl mx-auto mt-10 mb-8 px-2">
          &ldquo;No commercial onions. No powdered masalas. Just mountain salt, vine-ripened tomatoes, and fresh meat seared in rendered lamb tail fat over volcanic iron flame.&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button href="/menu" variant="gold" size="lg" className="px-8 py-3.5 shadow-2xl">
            <span>Explore Full Menu & Prices</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button href="/signatures" variant="crimson" size="lg" className="px-7 py-3.5 glass-panel-dark text-white border border-[#E6B83F]/50">
            <Sparkles className="w-4 h-4 mr-2 text-[#E6B83F]" />
            <span>View 5 Signatures</span>
          </Button>
        </div>

        {/* Bottom Trust Meta Bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pt-6 border-t border-white/10 text-xs text-[#F7F2E8]/75">
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#E6B83F] font-bold">100%</span> Natural Lamb Tallow
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#E6B83F] font-bold">Live</span> Weighed & Seared Cut
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <span className="text-[#E6B83F] font-bold">Nightly</span> Open Daily till 3:00 AM
          </span>
          <span className="flex items-center gap-1.5 font-medium">
            <ShieldCheck className="w-4 h-4 text-[#E6B83F]" />
            WhatsApp Orders: <span className="text-[#E6B83F] font-bold">+92 305 4449151</span>
          </span>
        </div>

      </div>
    </section>
  );
}
