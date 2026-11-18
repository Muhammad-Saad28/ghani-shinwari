import type { Metadata } from "next";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";
import { Button } from "@/components/ui/Button";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { Sparkles, Flame, ArrowRight, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Signature Dishes — Ghani Shinwari",
  description:
    "Explore the hallmark authentic signature dishes of Ghani Shinwari: Shinwari Karahi, Sulemani Karahi, Namkeen Tikka, Rosh, and Kabli Pulao.",
};

export default function SignaturesPage() {
  const stats = [
    { label: "Hallmark Dishes", value: "05 Masterpieces" },
    { label: "Preparation", value: "Fresh Live Cut" },
    { label: "Cooking Oil", value: "100% Lamb Tallow" },
    { label: "Heritage Guarantee", value: "Khyber Tribal" },
  ];

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Editorial Page Hero Banner */}
      <PageHeroBanner
        eyebrow="Culinary Masterpieces"
        title="The Crown Jewels of Shinwari Gastronomy"
        subtitle="Five legendary dishes that represent the peak of authentic Pashtun culinary craft. Weighed live before your eyes and prepared upon order."
        stats={stats}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <SignatureDishes />

        {/* Bottom Editorial Callout */}
        <ScrollFade distance={24}>
          <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-[#8F1725] text-[#F7F2E8] border border-[#E6B83F]/30 relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#70111C] via-[#8F1725] to-[#47080F] pointer-events-none" />
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-bold block mb-3">
                Full Culinary Repertoire
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F7F2E8] mb-4 font-normal">
                Looking for our complete selection?
              </h3>
              <p className="text-sm text-[#F7F2E8]/85 font-light mb-8 leading-relaxed max-w-xl mx-auto">
                Explore our full 36+ dish catalog including charcoal BBQ skewers, succulent Sajji, tender chops, clay tandoori breads, and fragrant Peshawari Kahwa.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/menu" variant="gold" size="lg">
                  <span>Explore Complete 36+ Menu</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button href="/contact" variant="glass" size="lg">
                  Find Nearest Branch
                </Button>
              </div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </div>
  );
}
