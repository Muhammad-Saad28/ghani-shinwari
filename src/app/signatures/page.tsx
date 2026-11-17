import type { Metadata } from "next";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Signature Dishes — Ghani Shinwari",
  description:
    "Explore the hallmark authentic signature dishes of Ghani Shinwari: Shinwari Karahi, Sulemani Karahi, Namkeen Tikka, Rosh, and Kabli Pulao.",
};

export default function SignaturesPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F2E8] min-h-screen">
      {/* Editorial Header Banner */}
      <div className="bg-[#8F1725] text-[#F7F2E8] py-16 md:py-20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Culinary Masterpieces"
            title="The Hallmark Signatures"
            subtitle="The definitive creations that define Ghani Shinwari Restaurant. Handcrafted with prime cuts and ancestral fire technique."
            theme="crimson"
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SignatureDishes />

        <div className="mt-16 p-8 bg-[#FAF6EF] border border-[#DED2BE] rounded-xs text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-[#292522] mb-3">
            Want to browse our complete selection?
          </h3>
          <p className="text-xs sm:text-sm text-[#5C554F] mb-6">
            From sizzling BBQ platters and authentic Rosh to tandoori naans and Peshawari qahwa, explore the full menu.
          </p>
          <Button href="/menu" variant="crimson" size="md">
            View All Dishes & Prices
          </Button>
        </div>
      </div>
    </div>
  );
}
