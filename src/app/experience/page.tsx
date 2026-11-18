import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Button } from "@/components/ui/Button";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { Flame, HeartHandshake, ShieldCheck, Clock, MapPin, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Dining Experience — Ghani Shinwari",
  description:
    "Experience traditional Shinwari hospitality, open fire cooking, authentic dastarkhwan, and ancestral culinary pillars.",
};

export default function ExperiencePage() {
  const stats = [
    { label: "Dining Ambience", value: "Dastarkhwan" },
    { label: "Wok Heat", value: "Volcanic Iron" },
    { label: "Night Feasting", value: "Till 3:00 AM" },
    { label: "Atmosphere", value: "Family Pavilions" },
  ];

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Editorial Page Hero Banner */}
      <PageHeroBanner
        eyebrow="Atmosphere & Hospitality"
        title="More Than A Meal. A Pashtun Tribal Gathering."
        subtitle="Step into open-air hearths where glowing acacia wood coals, sizzling cast-iron woks, and communal dastarkhwan rugs bring families and kin together."
        stats={stats}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Experience Section in Crimson */}
        <ExperienceSection />

        {/* Photographic Atmosphere Gallery */}
        <div className="my-20">
          <GallerySection />
        </div>

        {/* Invitation Callout */}
        <ScrollFade distance={24}>
          <div className="p-8 sm:p-14 bg-[#8F1725] text-[#F7F2E8] rounded-2xl border border-[#E6B83F]/30 relative overflow-hidden shadow-2xl text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#70111C] via-[#8F1725] to-[#47080F] pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-bold block mb-3">
                Live In Lahore
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F2E8] mb-4 font-normal">
                Join Us at the Dastarkhwan Tonight
              </h3>
              <p className="text-sm text-[#F7F2E8]/85 font-light mb-8 leading-relaxed">
                Whether you visit our Ravi Road open-air flagship or our family pavilions in DHA and Bahria Town, our flame pits burn brightly every day till late night.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="gold" size="lg">
                  <span>View All 4 Lahore Locations</span>
                  <MapPin className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/menu" variant="glass" size="lg">
                  Browse Menu & Order
                </Button>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </div>
  );
}
