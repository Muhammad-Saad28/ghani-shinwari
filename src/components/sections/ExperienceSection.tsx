import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { Button } from "@/components/ui/Button";
import { EXPERIENCE_POINTS } from "@/lib/content-data";
import { Flame, UtensilsCrossed, Sparkles, ShieldCheck, ArrowRight, Award } from "lucide-react";

export function ExperienceSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Flame: <Flame className="w-6 h-6 text-[#E6B83F]" />,
    UtensilsCrossed: <UtensilsCrossed className="w-6 h-6 text-[#E6B83F]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#E6B83F]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#E6B83F]" />,
  };

  const imagesMap = [
    "/images/dishes/m-shinwari-karahi.webp",
    "/images/dishes/bbq-peshawari-sajji.webp",
    "/images/dishes/m-kabli-pulao.webp",
    "/images/dishes/m-rosh-masala-yakhni.webp",
  ];

  return (
    <section id="experience" className="py-28 md:py-36 bg-[#8F1725] text-[#F7F2E8] border-b border-[#E6B83F]/30 relative overflow-hidden">
      {/* Background radial gradient & ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#660E18] via-[#8F1725] to-[#47080F] z-0" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#E6B83F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="The Shinwari Standard"
          title="Why Choose Ghani Shinwari"
          subtitle="Our cooking philosophy is built on ancestral craft, culinary purism, and genuine Pakistani hospitality."
          theme="crimson"
        />

        {/* 4 Feature Pillars with Hover Image Peek and Glass Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {EXPERIENCE_POINTS.map((point, index) => (
            <ScrollFade key={index} delay={0.12 * index} distance={24}>
              <div
                className="group p-8 rounded-2xl glass-panel-dark border border-[#E6B83F]/30 hover:border-[#E6B83F] transition-all duration-500 flex flex-col justify-between card-hover-lift shadow-xl hover:shadow-2xl h-full"
              >
                <div>
                  {/* Header Icon + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-[#23120B] border border-[#E6B83F]/40 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-[#E6B83F] transition-all duration-300">
                      {iconMap[point.icon]}
                    </div>
                    <span className="font-serif text-3xl font-light text-[#E6B83F]/40 group-hover:text-[#E6B83F] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-[#F7F2E8] font-normal mb-3 leading-snug group-hover:text-[#E6B83F] transition-colors">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#F7F2E8]/80 leading-relaxed font-light mb-6">
                    {point.description}
                  </p>
                </div>

                {/* Bottom Peek Image preview thumbnail */}
                <div className="pt-4 border-t border-[#F7F2E8]/15 flex items-center justify-between">
                  <div className="relative w-12 h-12 rounded-xs overflow-hidden border border-[#E6B83F]/40 shrink-0">
                    <Image
                      src={imagesMap[index]}
                      alt={point.title}
                      fill
                      sizes="48px"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <Link
                    href="/experience"
                    className="text-[11px] uppercase tracking-wider text-[#E6B83F] hover:text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>Discover</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>

        {/* Experience Trust Banner */}
        <div className="mt-16 p-8 rounded-xs glass-panel-dark border border-[#E6B83F]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="p-3 bg-[#E6B83F] text-[#292522] rounded-xs shrink-0 shadow-md">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#F7F2E8]">
                Authentic Dastarkhwan Guarantee
              </h4>
              <p className="text-xs text-[#F7F2E8]/80 max-w-xl mt-0.5">
                Every karahi is seared live to order. No precooked batches, no microwave reheats — hot iron wok directly to your feast table.
              </p>
            </div>
          </div>

          <Button href="/experience" variant="gold" size="md" className="shrink-0">
            <span>Explore The Experience</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
