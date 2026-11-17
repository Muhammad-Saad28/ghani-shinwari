import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Flame, Scale, Clock, HeartHandshake } from "lucide-react";

export function AboutSection() {
  const craftFeatures = [
    {
      icon: <Flame className="w-5 h-5 text-[#E6B83F]" />,
      title: "Pure Animal Tallow",
      desc: "Cooked exclusively in the rendered fat of dumba sheep. Zero commercial oils or butter substitutes.",
    },
    {
      icon: <Scale className="w-5 h-5 text-[#E6B83F]" />,
      title: "Weighed Live In Front of You",
      desc: "Select your cut on physical brass scales. We cook strictly what you inspect.",
    },
    {
      icon: <Clock className="w-5 h-5 text-[#E6B83F]" />,
      title: "4-Hour Rosh Degchi Steam",
      desc: "Shanks simmered in sealed earthenware with natural bone marrow and coarse sea salt.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#E6B83F]" />,
      title: "Peshawari Dastarkhwan",
      desc: "Traditional communal dining where giant naans and platters are broken together with kin.",
    },
  ];

  return (
    <section id="about" className="py-28 md:py-36 bg-[#F7F2E8] text-[#292522] border-b border-[#DED2BE] relative overflow-hidden">
      {/* Decorative background watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[180px] lg:text-[260px] text-[#292522]/[0.025] select-none pointer-events-none font-bold tracking-tight">
        SHINWARI
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT 6 COLS: EDITORIAL NARRATIVE & CRAFT PILLARS */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8F1725]/10 text-[#8F1725] text-xs uppercase tracking-[0.25em] font-bold mb-4">
              <span>Ancestral Pashtun Hearth</span>
            </div>

            <SectionHeading
              align="left"
              title="Where Tradition Meets Taste"
              subtitle="The Shinwari tribe hails from the rugged frontier valleys of Khyber. For centuries, our shepherds mastered the pure alchemy of fire, coarse mountain salt, and mountain-grazed sheep."
              className="mb-6 max-w-xl"
            />

            <p className="text-sm sm:text-base text-[#5C554F] leading-relaxed mb-8 font-light">
              While conventional city eateries rely on fried onion pastes and heavy garam masalas to disguise meat quality, Ghani Shinwari honors tribal purism: fresh cuts seared at volcanic heat in cast-iron woks, sealing in rich juices with natural wok-hei smoke.
            </p>

            {/* 2x2 Craft Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-10">
              {craftFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xs bg-[#FAF6EF] border border-[#DED2BE] hover:border-[#8F1725]/50 transition-all card-hover-lift"
                >
                  <div className="w-9 h-9 rounded-xs bg-[#8F1725] flex items-center justify-center mb-3 shadow-sm">
                    {feat.icon}
                  </div>
                  <h4 className="font-serif text-base text-[#292522] font-semibold mb-1">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-[#5C554F] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button href="/about" variant="crimson" size="md">
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Link
                href="/menu"
                className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8F1725] hover:text-[#70111C] font-bold transition-all hover:translate-x-1"
              >
                <span>Browse The Cuts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT 6 COLS: ASYMMETRIC DUAL-IMAGE COMPOSITION */}
          <div className="lg:col-span-6 relative mt-8 lg:mt-0">
            {/* Primary Large Image */}
            <div className="relative aspect-[4/5] sm:aspect-[4/4.5] w-full rounded-xs overflow-hidden border-2 border-[#DED2BE] shadow-2xl bg-[#FAF6EF] group">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=80"
                alt="Traditional Shinwari hearth and open flame cooking"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Quote */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xs glass-panel-dark text-[#F7F2E8] border border-[#E6B83F]/35 shadow-xl">
                <span className="text-[10px] uppercase tracking-widest text-[#E6B83F] font-bold block mb-1">
                  The Principle of Simplicity
                </span>
                <p className="font-serif text-base sm:text-lg italic leading-snug">
                  &ldquo;When meat is truly prime, heavy spices only conceal what nature perfected.&rdquo;
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Floating Card */}
            <div className="absolute -top-6 -left-6 w-44 sm:w-56 aspect-square rounded-xs overflow-hidden border-2 border-[#E6B83F] shadow-2xl bg-[#70111C] hidden sm:block animate-soft-float">
              <Image
                src="/images/dishes/m-namkeen-tikka.webp"
                alt="Namkeen Tikka charcoal roasting"
                fill
                sizes="220px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-[9px] uppercase tracking-wider text-[#E6B83F] font-bold block">
                  Signature Roast
                </span>
                <span className="font-serif text-xs text-white">
                  Namkeen Dumba Tikka
                </span>
              </div>
            </div>

            {/* Corner flourishes */}
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#8F1725] pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
