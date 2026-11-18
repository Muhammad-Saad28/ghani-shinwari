import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SIGNATURE_DISHES_LIST } from "@/lib/content-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, Flame } from "lucide-react";

export function SignatureDishes() {
  return (
    <section id="signatures" className="pt-8 pb-20 md:pt-12 md:pb-28 bg-[#FAF6EF] text-[#292522] border-b border-[#DED2BE] relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8F1725]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Culinary Masterpieces"
          title="Signature Dishes"
          subtitle="Discover the authentic hallmark creations that define the taste of Ghani Shinwari. Each dish is prepared fresh upon every single order."
        />

        {/* Varied Grid: Featured & Supporting Cards with Hover Elevation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SIGNATURE_DISHES_LIST.map((dish, index) => {
            const isLarge = index === 0;
            return (
              <ScrollFade
                key={dish.id}
                delay={0.12 * index}
                distance={28}
                className={isLarge ? "md:col-span-2 lg:col-span-2" : "md:col-span-1 lg:col-span-1"}
              >
                <div
                  className="group flex flex-col bg-[#1C110A] text-[#F7F2E8] border border-[#E6B83F]/35 hover:border-[#E6B83F] transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl hover:-translate-y-2 card-hover-lift h-full"
                >
                  {/* Image Section with Zoom Effect */}
                  <div
                    className={`relative w-full overflow-hidden bg-[#140C07] rounded-t-2xl ${
                      isLarge ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      sizes={isLarge ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                      className="object-cover object-center scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />

                    {/* Top Badge */}
                    <div className="absolute top-3.5 left-3.5 bg-[#8F1725] text-[#F7F2E8] px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-lg border border-[#E6B83F]/30 backdrop-blur-xs">
                      <Sparkles className="w-3.5 h-3.5 text-[#E6B83F]" />
                      <span className="text-[10px] uppercase tracking-wider font-bold">
                        Signature 0{index + 1}
                      </span>
                    </div>

                    {/* Price Tag with Glassmorphic styling */}
                    <div className="absolute bottom-3.5 right-3.5 glass-panel-dark px-3.5 py-1.5 text-xs text-[#E6B83F] font-bold border border-[#E6B83F]/40 rounded-xl shadow-md">
                      {dish.priceInfo}
                    </div>
                  </div>

                  {/* Details Section */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-[#1C110A]">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#E6B83F] font-semibold flex items-center gap-1.5 mb-1.5">
                        <Flame className="w-3.5 h-3.5 text-[#E6B83F]" />
                        <span>{dish.category}</span>
                      </span>
                      <h3 className="font-serif text-2xl text-[#F7F2E8] font-bold group-hover:text-[#E6B83F] transition-colors leading-snug mb-2.5">
                        {dish.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#EAE2D2] leading-relaxed mb-6 font-normal">
                        {dish.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#E6B83F]">
                        {dish.priceInfo}
                      </span>
                      <Link
                        href="/menu"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#8F1725] hover:bg-[#A52030] text-white text-xs uppercase tracking-wider font-bold shadow-md hover:shadow-lg transition-all active:translate-y-0.5"
                      >
                        <span className="text-white">Order on Menu</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#E6B83F]" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollFade>
            );
          })}
        </div>

        {/* Section Bottom CTA */}
        <div className="mt-16 text-center">
          <Button href="/menu" variant="crimson" size="lg">
            View Complete Interactive Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
