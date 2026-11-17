import type { Metadata } from "next";
import { MenuSection } from "@/components/sections/MenuSection";
import { PageHeroBanner } from "@/components/ui/PageHeroBanner";

export const metadata: Metadata = {
  title: "Complete Menu & Verified Prices — Ghani Shinwari",
  description:
    "Explore all 36+ verified Shinwari karahis, BBQ skewers, Rosh degchis, and tandoori breads with verified pricing in PKR.",
};

export default function MenuPage() {
  const stats = [
    { label: "Verified Dishes", value: "36+ Cuts" },
    { label: "Cooking Fat", value: "100% Pure Tallow" },
    { label: "Portions", value: "Half / Full (Kg)" },
    { label: "Order Dispatch", value: "Direct WhatsApp" },
  ];

  return (
    <div className="bg-[#FAF6EF] min-h-screen">
      {/* Editorial Page Hero Banner */}
      <PageHeroBanner
        eyebrow="Authentic Khyber Hearth"
        title="The Grand Shinwari Menu & Pricing"
        subtitle="Every mutton, lamb, and chicken cut is seared live to order with fresh tomatoes, coarse rock salt, and whole green chilies. Select your dish to add directly to your order."
        stats={stats}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <MenuSection showCategoryFilter={true} isHomeView={false} />
      </div>
    </div>
  );
}
