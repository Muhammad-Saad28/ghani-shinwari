import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Button } from "@/components/ui/Button";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { Flame, ShieldCheck, HeartHandshake, Award, Scale, Clock } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — Ancestral Hearth & Tradition",
  description:
    "Discover the ancestral heritage of Shinwari cuisine and how Ghani Shinwari preserves traditional fire cooking in pure tallow.",
};

export default function AboutPage() {
  const stats = [
    { label: "Tribal Fire Tradition", value: "Centuries" },
    { label: "Rendered Lamb Tallow", value: "100%" },
    { label: "Artificial Flavors", value: "Zero" },
    { label: "Meat Weighed Live", value: "Before Wok" },
  ];

  const philosophyPillars = [
    {
      title: "The Fire Pit Legacy",
      desc: "Shinwari cooking is rooted in the high-altitude shepherd pastures of the Khyber region, where natural rock salt and live hardwood coals unlocked deep flavors without disguising spices.",
      icon: <Flame className="w-5 h-5 text-[#E6B83F]" />,
    },
    {
      title: "Honest Scale Inspection",
      desc: "Every cut of goat or fat-tailed sheep is brought to you first. You inspect the marbling and weight on physical brass scales before the cleaver touches the block.",
      icon: <Scale className="w-5 h-5 text-[#E6B83F]" />,
    },
    {
      title: "Slow-Braised Rosh Degchi",
      desc: "For four uninterrupted hours, mutton joints steam in their own juices inside clay-sealed degchis with potatoes and garlic, producing a medicinal, mineral-rich golden broth.",
      icon: <Clock className="w-5 h-5 text-[#E6B83F]" />,
    },
  ];

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Editorial Page Hero Banner */}
      <PageHeroBanner
        eyebrow="Our Heritage & Roots"
        title="Where Fire Meets Sacred Ancestral Tradition"
        subtitle="For generations, the Shinwari masters of Khyber have honored one sacred philosophy: when prime meat is seared in its own natural tallow, heavy spices only conceal what nature perfected."
        stats={stats}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Core Narrative with Custom Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <ScrollFade distance={20}>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8F1725] font-bold block mb-2">
                The Shinwari Doctrine
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#292522] leading-tight font-normal">
                No Gimmicks. No Onion Pastes. Just Pure Meat & Salt.
              </h2>
            </ScrollFade>

            <ScrollFade delay={0.15} distance={20}>
              <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed font-light">
                Mainstream commercial restaurants often hide frozen or inferior cuts under layers of pungent onion gravies, garlic paste, and heavy garam masala mixes. At Ghani Shinwari, we reject modern commercial shortcuts.
              </p>
            </ScrollFade>

            <ScrollFade delay={0.25} distance={20}>
              <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed font-light">
                Our karahi woks are forged from heavy black cast-iron. Under volcanic flame, freshly rendered lamb fat caramelizes natural vine tomatoes and crisp green chilies, sealing in bone marrow juices within minutes.
              </p>
            </ScrollFade>

            <ScrollFade delay={0.35} distance={20}>
              <div className="pt-4 flex items-center gap-4">
                <Button href="/menu" variant="crimson" size="lg">
                  Explore Full Menu & Prices
                </Button>
                <Button href="/contact" variant="gold" size="lg">
                  Visit Our Hearth
                </Button>
              </div>
            </ScrollFade>
          </div>

          <div className="lg:col-span-6 relative">
            <ScrollFade delay={0.2} distance={30}>
              <div className="relative aspect-[4/3] rounded-xs overflow-hidden border-2 border-[#E6B83F]/40 shadow-2xl bg-[#70111C]">
                <Image
                  src="/images/dishes/m-shinwari-karahi.webp"
                  alt="Authentic Shinwari Karahi in cast-iron wok"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xs glass-panel-dark border border-[#E6B83F]/30 text-white">
                  <span className="text-[10px] uppercase tracking-wider text-[#E6B83F] font-bold block">
                    Daily Fresh Cut
                  </span>
                  <span className="font-serif text-sm">
                    Volcanic heat searing pure dumba tallow
                  </span>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>

        {/* 3 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {philosophyPillars.map((p, idx) => (
            <ScrollFade key={idx} delay={0.12 * idx} distance={24}>
              <div className="p-8 rounded-xs bg-[#FAF6EF] border border-[#DED2BE] hover:border-[#8F1725] transition-all card-hover-lift shadow-sm h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xs bg-[#8F1725] border border-[#E6B83F]/40 flex items-center justify-center mb-6 shadow-md">
                    {p.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-[#292522] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C554F] leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>

      {/* Embedded Experience Section in Crimson */}
      <ExperienceSection />
    </div>
  );
}
