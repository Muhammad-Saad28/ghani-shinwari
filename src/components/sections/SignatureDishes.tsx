import React from "react";
import Image from "next/image";
import { SIGNATURE_DISHES_LIST } from "@/lib/content-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight } from "lucide-react";

export function SignatureDishes() {
  return (
    <section id="signatures" className="py-24 md:py-32 bg-[#FAF6EF] text-[#292522] border-b border-[#DED2BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Culinary Masterpieces"
          title="Signature Dishes"
          subtitle="Discover the six authentic creations that define the taste of Ghani Shinwari. Each dish is prepared fresh upon every single order."
        />

        {/* Varied Grid: 2 Large Featured + 4 Supporting Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES_LIST.map((dish, index) => {
            const isLarge = dish.isFeaturedLarge;
            return (
              <div
                key={dish.id}
                className={`group flex flex-col bg-[#F7F2E8] border border-[#DED2BE] hover:border-[#8F1725] transition-all duration-300 rounded-xs overflow-hidden shadow-sm hover:shadow-xl ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`relative w-full overflow-hidden bg-[#FAF6EF] ${
                    isLarge ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-[#8F1725] text-[#F7F2E8] px-3 py-1 rounded-xs flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-[#E6B83F]" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold">
                      Signature 0{index + 1}
                    </span>
                  </div>

                  {/* Price overlay on mobile/desktop */}
                  <div className="absolute bottom-3 right-3 bg-[#292522]/90 backdrop-blur-sm px-2.5 py-1 text-xs text-[#E6B83F] font-semibold border border-[#E6B83F]/30">
                    {dish.priceInfo}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#8F1725] font-semibold block mb-1">
                      {dish.category}
                    </span>
                    <h3 className="font-serif text-2xl text-[#292522] font-normal group-hover:text-[#8F1725] transition-colors leading-snug mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C554F] leading-relaxed mb-6 font-normal">
                      {dish.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DED2BE] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#8F1725]">
                      {dish.priceInfo}
                    </span>
                    <a
                      href="#menu"
                      className="inline-flex items-center gap-1 text-xs uppercase tracking-wider text-[#292522] hover:text-[#8F1725] font-semibold transition-colors"
                    >
                      <span>Explore Menu</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8F1725]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="#menu" variant="crimson" size="lg">
            View Complete Interactive Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
