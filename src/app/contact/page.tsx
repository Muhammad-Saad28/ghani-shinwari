import type { Metadata } from "next";
import { LocationSection } from "@/components/sections/LocationSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact & Location — Ghani Shinwari",
  description:
    "Find opening hours, contact details, directions, and Instagram connection for Ghani Shinwari Restaurant.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F2E8] min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#8F1725] text-[#F7F2E8] py-16 md:py-20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Reach Our Team"
            title="Contact & Location"
            subtitle="Connect with us for inquiries, directions, table arrangements, and live updates."
            theme="crimson"
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LocationSection />
        <div className="mt-16">
          <InstagramSection />
        </div>
      </div>
    </div>
  );
}
