import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERIENCE_POINTS } from "@/lib/content-data";
import { Flame, UtensilsCrossed, Sparkles, ShieldCheck } from "lucide-react";

export function ExperienceSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Flame: <Flame className="w-6 h-6 text-[#E6B83F]" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#E6B83F]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#E6B83F]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E6B83F]" />,
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-[#F7F2E8] text-[#292522] border-b border-[#DED2BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Shinwari Standard"
          title="Why Choose Ghani Shinwari"
          subtitle="Our cooking philosophy is built on ancestral craft, culinary purism, and genuine Pakistani hospitality."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {EXPERIENCE_POINTS.map((point, index) => (
            <div
              key={index}
              className="p-8 bg-[#FAF6EF] border border-[#DED2BE] hover:border-[#8F1725] transition-all duration-300 rounded-xs flex flex-col justify-between shadow-xs hover:shadow-md group"
            >
              <div>
                <div className="w-12 h-12 rounded-xs bg-[#8F1725] flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                  {iconMap[point.icon]}
                </div>
                <h3 className="font-serif text-2xl text-[#292522] font-normal mb-3 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C554F] leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#DED2BE] flex items-center justify-between text-[11px] uppercase tracking-widest text-[#8F1725] font-semibold">
                <span>Pillar 0{index + 1}</span>
                <span className="w-6 h-[1.5px] bg-[#E6B83F]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
