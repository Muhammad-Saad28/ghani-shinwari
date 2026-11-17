import type { Metadata } from "next";
import { MenuSection } from "@/components/sections/MenuSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Menu & Verified Pricing",
  description:
    "Explore the complete authentic menu of Ghani Shinwari Restaurant. All dishes and verified prices in PKR.",
};

export default function MenuPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F2E8] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#8F1725] text-[#F7F2E8] py-16 md:py-20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Authentic Khyber Hearth"
            title="The Grand Shinwari Menu"
            subtitle="Every cut is weighed and seared live to order with ripe tomatoes, salt, and green chilies. Prices listed in Pakistani Rupees (PKR)."
            theme="crimson"
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MenuSection />
      </div>
    </div>
  );
}
