"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/lib/menu-data";
import { MenuCategory, MenuItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useCart } from "@/context/CartContext";
import { Flame, Sparkles, Plus, ArrowRight } from "lucide-react";
import Link from "next/link";

interface MenuSectionProps {
  limit?: number;
  showCategoryFilter?: boolean;
  isHomeView?: boolean;
}

export function MenuSection({
  limit,
  showCategoryFilter = true,
  isHomeView = false,
}: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | "all">("all");
  const { addToCart } = useCart();

  const categoryFiltered =
    activeCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const displayedItems = limit ? categoryFiltered.slice(0, limit) : categoryFiltered;

  const renderAddButtons = (item: MenuItem) => {
    // Has Half and Full pricing
    if (item.priceHalf !== undefined && item.priceFull !== undefined) {
      return (
        <div className="flex items-center gap-2">
          <button
            onClick={() => addToCart(item, "Half", item.priceHalf)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#FAF6EF] hover:bg-[#8F1725] text-[#8F1725] hover:text-[#F7F2E8] border border-[#8F1725] rounded-xs text-xs font-semibold transition-all cursor-pointer shadow-xs active:translate-y-0.5"
            title={`Add Half ${item.name} (PKR ${item.priceHalf.toLocaleString()})`}
          >
            <Plus className="w-3 h-3" />
            <span>Half (PKR {item.priceHalf.toLocaleString()})</span>
          </button>
          <button
            onClick={() => addToCart(item, "Full", item.priceFull)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] rounded-xs text-xs font-semibold transition-all cursor-pointer shadow-xs active:translate-y-0.5"
            title={`Add Full ${item.name} (PKR ${item.priceFull.toLocaleString()})`}
          >
            <Plus className="w-3 h-3 text-[#E6B83F]" />
            <span>Full (PKR {item.priceFull.toLocaleString()})</span>
          </button>
        </div>
      );
    }

    // Has Small and Large drinks pricing
    if (item.priceSmall !== undefined && item.priceLarge !== undefined) {
      return (
        <div className="flex items-center gap-2">
          <button
            onClick={() => addToCart(item, "Small", item.priceSmall)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#FAF6EF] hover:bg-[#8F1725] text-[#8F1725] hover:text-[#F7F2E8] border border-[#8F1725] rounded-xs text-xs font-semibold transition-all cursor-pointer shadow-xs active:translate-y-0.5"
          >
            <Plus className="w-3 h-3" />
            <span>Sm (PKR {item.priceSmall.toLocaleString()})</span>
          </button>
          <button
            onClick={() => addToCart(item, "Large", item.priceLarge)}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] rounded-xs text-xs font-semibold transition-all cursor-pointer shadow-xs active:translate-y-0.5"
          >
            <Plus className="w-3 h-3 text-[#E6B83F]" />
            <span>Lg (PKR {item.priceLarge.toLocaleString()})</span>
          </button>
        </div>
      );
    }

    // Full price only
    if (item.priceFull !== undefined && item.priceHalf === undefined) {
      return (
        <button
          onClick={() => addToCart(item, "Full", item.priceFull)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] rounded-xs text-xs font-semibold transition-all cursor-pointer shadow-xs active:translate-y-0.5"
        >
          <Plus className="w-3.5 h-3.5 text-[#E6B83F]" />
          <span>Add • PKR {item.priceFull.toLocaleString()}</span>
        </button>
      );
    }

    // Standard fixed price
    const resolvedPrice = item.price || 0;
    return (
      <button
        onClick={() => addToCart(item, "Standard", resolvedPrice)}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] rounded-xs text-xs font-semibold transition-all cursor-pointer shadow-xs active:translate-y-0.5"
      >
        <Plus className="w-3.5 h-3.5 text-[#E6B83F]" />
        <span>Add • PKR {resolvedPrice.toLocaleString()}</span>
      </button>
    );
  };

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#F7F2E8] text-[#292522] border-b border-[#DED2BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <SectionHeading
          eyebrow={isHomeView ? "Taste Highlights" : "Authentic Menu & Pricing"}
          title={isHomeView ? "Featured Menu Selections" : "The Grand Restaurant Menu"}
          subtitle={
            isHomeView
              ? "A curated selection of our finest Shinwari karahis, Peshawari rosh, and charcoal-grilled specialties. Browse all 36+ verified dishes on our full menu."
              : "Select any dish to add directly to your order. Weighed and seared fresh upon every order."
          }
        />

        {/* Category Tabs Bar (hidden or optional in home view if preferred) */}
        {showCategoryFilter && (
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 sm:px-5 py-2.5 rounded-xs text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === "all"
                  ? "bg-[#8F1725] text-[#F7F2E8] shadow-md border border-[#8F1725]"
                  : "bg-[#FAF6EF] text-[#292522] hover:text-[#8F1725] border border-[#DED2BE]"
              }`}
            >
              All Items ({MENU_ITEMS.length})
            </button>
            {MENU_CATEGORIES.map((cat) => {
              const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-xs text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-[#8F1725] text-[#F7F2E8] shadow-md border border-[#8F1725]"
                      : "bg-[#FAF6EF] text-[#292522] hover:text-[#8F1725] border border-[#DED2BE]"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        )}

        {/* Responsive Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 bg-[#FAF6EF] border border-[#DED2BE] hover:border-[#8F1725]/60 transition-all duration-300 rounded-xs flex flex-col sm:flex-row gap-5 items-start shadow-xs hover:shadow-md"
            >
              {/* Dish Image */}
              <div className="relative w-full sm:w-32 h-32 rounded-xs overflow-hidden shrink-0 bg-[#F7F2E8] border border-[#DED2BE]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 130px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                {item.isSignature && (
                  <div className="absolute top-1.5 left-1.5 bg-[#8F1725] text-[#F7F2E8] text-[9px] uppercase tracking-wider font-bold px-1.5 py-0.5 rounded-xs flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-2.5 h-2.5 text-[#E6B83F]" />
                    <span>Popular</span>
                  </div>
                )}
              </div>

              {/* Details & Interactive Add Buttons */}
              <div className="flex-1 flex flex-col justify-between h-full w-full">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <h3 className="font-serif text-xl text-[#292522] font-medium leading-snug">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#5C554F] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DED2BE] flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-1 text-[11px] uppercase tracking-wider text-[#8F1725] font-semibold">
                    <Flame className="w-3.5 h-3.5 text-[#E6B83F]" />
                    {item.category}
                  </span>
                  <div>{renderAddButtons(item)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All Button on Homepage if items are truncated */}
        {isHomeView && (
          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#8F1725] hover:bg-[#70111C] text-[#F7F2E8] text-sm uppercase tracking-widest font-semibold rounded-xs shadow-lg hover:shadow-xl transition-all active:translate-y-0.5"
            >
              <span>Explore Complete 36+ Dish Menu</span>
              <ArrowRight className="w-4 h-4 text-[#E6B83F]" />
            </Link>
            <p className="text-xs text-[#5C554F] mt-3">
              Browse full categories: Mutton, Lamb, Charcoal BBQ, Rosh, Beef, Tandoori & Drinks
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
