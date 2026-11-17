import type { Metadata } from "next";
import { LocationSection } from "@/components/sections/LocationSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export const metadata: Metadata = {
  title: "Contact & Locations — Ghani Shinwari Lahore",
  description:
    "Find opening hours, contact details, directions to all 4 Lahore branches, and WhatsApp dispatch for Ghani Shinwari Restaurant.",
};

export default function ContactPage() {
  const stats = [
    { label: "Lahore Branches", value: "04 Locations" },
    { label: "Opening Hours", value: "12 PM – 3 AM" },
    { label: "Direct WhatsApp", value: "+92 305 4449151" },
    { label: "Dine-In", value: "Family Dastarkhwan" },
  ];

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Editorial Page Hero Banner */}
      <PageHeroBanner
        eyebrow="Reach Our Team"
        title="Visit Our Hearths Across Lahore"
        subtitle="From our Ravi Road open-air flagship to our family dining pavilions in DHA and Bahria Town, we welcome you to dine with genuine Pashtun warmth."
        stats={stats}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <LocationSection />
        <div className="mt-20">
          <InstagramSection />
        </div>
      </div>
    </div>
  );
}
