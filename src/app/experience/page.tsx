import type { Metadata } from "next";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "The Dining Experience — Ghani Shinwari",
  description:
    "Experience traditional Shinwari hospitality, open fire cooking, authentic dastarkhwan, and ancestral culinary pillars.",
};

export default function ExperiencePage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F2E8] min-h-screen">
      {/* Editorial Header Banner */}
      <div className="bg-[#8F1725] text-[#F7F2E8] py-16 md:py-20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Atmosphere & Hospitality"
            title="The Shinwari Experience"
            subtitle="More than a meal — an authentic Pashtun gathering of fire, smoke, and hospitality."
            theme="crimson"
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceSection />
        
        <div className="my-16">
          <GallerySection />
        </div>

        <div className="p-8 bg-[#8F1725] text-[#F7F2E8] rounded-xs text-center border-t-4 border-[#E6B83F]">
          <h3 className="font-serif text-3xl mb-3">
            Join Us for an Unforgettable Meal
          </h3>
          <p className="text-sm text-[#F7F2E8]/85 max-w-xl mx-auto mb-6">
            We welcome families, corporate gatherings, and food lovers to dine around traditional dastarkhwans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="gold" size="md">
              Find Location & Contact
            </Button>
            <Button href="/menu" variant="alabaster" size="md">
              Browse Menu
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
