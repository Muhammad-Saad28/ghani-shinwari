import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AboutSection() {
  const values = [
    "Prepared solely with fresh meat, vine-ripened tomatoes, salt, and green chilies.",
    "Cooked live in cast-iron woks over roaring flames in natural animal tallow.",
    "No commercial powders, onions, or artificial food thickeners.",
    "Rooted in genuine Pashtun and Peshawari hospitality and family dastarkhwan traditions.",
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#F7F2E8] text-[#292522] border-b border-[#DED2BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Split Screen 1: Dining Experience Imagery */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xs overflow-hidden border border-[#DED2BE] shadow-xl bg-[#FAF6EF]">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Traditional Shinwari dining experience with live fire cooking"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Overlay quote box */}
              <div className="absolute bottom-5 left-5 right-5 p-5 bg-[#FAF6EF]/95 backdrop-blur-sm border-l-4 border-[#8F1725]">
                <p className="font-serif text-base sm:text-lg text-[#292522] italic leading-snug">
                  &ldquo;Authentic Shinwari cooking honours simplicity. When the meat is prime, flame and salt create the masterpiece.&rdquo;
                </p>
              </div>
            </div>

            {/* Accent frame details */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-[#8F1725] pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-[#E6B83F] pointer-events-none" />
          </div>

          {/* Split Screen 2: Text / Introduction */}
          <div className="flex flex-col items-start order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Our Story & Philosophy"
              title="Where Tradition Meets Taste"
              subtitle="At Ghani Shinwari, we are committed to keeping authentic Shinwari and Peshawari culinary craft alive and uncompromised."
              className="mb-6"
            />

            <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed mb-4">
              Originating from the rugged frontier valleys of Khyber, Shinwari cuisine is celebrated for its elemental purity. Unlike conventional recipes dominated by heavy fried onion pastes and complex spice powders, true Shinwari cooking relies entirely on natural fats, high volcanic heat, and raw ingredients of uncompromising quality.
            </p>

            <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed mb-8">
              Every karahi at Ghani Shinwari is seared fresh to order in front of guests, capturing a rich, smoky wok-hei flavor. From slow-steamed mutton Rosh to charcoal-kissed namkeen tikkas, every dish invites you to a memorable feast with friends and family.
            </p>

            {/* Core Values / Checklist */}
            <ul className="space-y-3 mb-8 w-full">
              {values.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8F1725] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#292522] font-medium leading-snug">{v}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Button href="#menu" variant="crimson">
                Explore Full Menu
              </Button>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8F1725] hover:text-[#70111C] font-semibold transition-colors"
              >
                <span>Visit Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
