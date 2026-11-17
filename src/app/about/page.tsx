import type { Metadata } from "next";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us — Where Tradition Meets Taste",
  description:
    "Discover the ancestral heritage of Shinwari cuisine and how Ghani Shinwari preserves traditional fire cooking.",
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-[#F7F2E8] min-h-screen">
      {/* Editorial Header Banner */}
      <div className="bg-[#8F1725] text-[#F7F2E8] py-16 md:py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            eyebrow="Our Heritage & Roots"
            title="Where Tradition Meets Taste"
            subtitle="The Shinwari tribe hails from the rugged frontier valleys of Khyber. For generations, our masters have honored the elemental alchemy of fire, salt, and prime cuts."
            theme="crimson"
            className="mb-0"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutSection />
        
        {/* Additional Heritage Story Block */}
        <div className="my-20 p-8 sm:p-12 bg-[#FAF6EF] border border-[#DED2BE] rounded-xs shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8F1725] font-semibold block mb-2">
                Ancestral Craft
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#292522] mb-4">
                The Principle of Purity
              </h3>
              <p className="text-sm text-[#5C554F] leading-relaxed mb-4">
                Unlike mainstream commercial curries loaded with heavy onions, garlic pastes, and overwhelming spice mixtures, genuine Shinwari food relies entirely on the natural sweetness of fresh vine-ripened tomatoes and the rendered fat of the fat-tailed dumba lamb.
              </p>
              <p className="text-sm text-[#5C554F] leading-relaxed mb-6">
                When cooked in high-carbon cast-iron woks over volcanic flame, the natural marrow and juices caramelize into an authentic wok-hei glaze that is rich yet digestible, celebrating the honest flavor of the meat.
              </p>
              <Button href="/menu" variant="crimson">
                Explore The Menu
              </Button>
            </div>

            <div className="relative aspect-[4/3] rounded-xs overflow-hidden border border-[#DED2BE]">
              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80"
                alt="Shinwari fire pit and mutton preparation"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <ExperienceSection />
      </div>
    </div>
  );
}
