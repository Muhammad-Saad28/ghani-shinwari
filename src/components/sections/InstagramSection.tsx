import React from "react";
import Image from "next/image";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ArrowUpRight, Flame, Heart, Camera } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function InstagramSection() {
  const reels = [
    {
      id: "ig-1",
      image: "/images/dishes/m-shinwari-karahi.webp",
      caption: "Volcanic heat and pure dumba tallow. The sizzle of authentic Shinwari Karahi.",
      tag: "Live Hearth Sizzle",
      likes: "2.4k",
    },
    {
      id: "ig-2",
      image: "/images/dishes/l-namkeen-tikka.webp",
      caption: "Himalayan rock salt on hardwood Acacia coals. Melt-in-the-mouth Namkeen Tikka.",
      tag: "Charcoal Smoke",
      likes: "1.9k",
    },
    {
      id: "ig-3",
      image: "/images/dishes/m-rosh-masala-yakhni.webp",
      caption: "4 hours in sealed earthenware. The legendary Peshawari Mutton Rosh broth.",
      tag: "Slow-Braised Degchi",
      likes: "3.1k",
    },
    {
      id: "ig-4",
      image: "/images/dishes/m-kabli-pulao.webp",
      caption: "Royal basmati simmered in bone marrow stock, crowned with sweet carrots & Afghan raisins.",
      tag: "Peshawari Royal Rice",
      likes: "1.7k",
    },
  ];

  return (
    <section className="py-28 md:py-36 bg-[#FAF6EF] text-[#292522] border-b border-[#DED2BE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8F1725]/10 text-[#8F1725] text-xs uppercase tracking-[0.25em] font-bold mb-4">
          <Camera className="w-3.5 h-3.5 text-[#8F1725]" />
          <span>Social Media Archive</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#292522] font-normal mb-4">
          Follow the Flavour
        </h2>

        <p className="text-sm sm:text-base text-[#5C554F] max-w-xl mx-auto mb-8 font-light leading-relaxed">
          Behind the scenes at our open flame pits, daily meat selection, and late-night Lahore feast tables. Connect with <span className="font-semibold text-[#8F1725]">@ghani_shinwari</span>.
        </p>

        {/* Action Button */}
        <div className="mb-16">
          <Button
            href={RESTAURANT_CONFIG.social.instagram}
            isExternal
            variant="crimson"
            size="lg"
            className="shadow-xl"
          >
            <InstagramIcon className="w-4 h-4 mr-2.5 text-[#E6B83F]" />
            <span>Follow @ghani_shinwari on Instagram</span>
            <ArrowUpRight className="w-4 h-4 ml-2 opacity-80" />
          </Button>
        </div>

        {/* 4 Interactive Reel Cards with Glass Overlay & Like Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <a
              key={reel.id}
              href={RESTAURANT_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-xs overflow-hidden bg-[#211C16] border border-[#DED2BE] hover:border-[#8F1725] shadow-sm hover:shadow-2xl transition-all duration-500 card-hover-lift block"
            >
              <Image
                src={reel.image}
                alt={reel.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              {/* Gradient dark overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Top Tag & Like Pill */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                <span className="text-[10px] uppercase tracking-wider text-[#E6B83F] font-bold px-2.5 py-1 rounded-full glass-panel-dark border border-[#E6B83F]/30">
                  {reel.tag}
                </span>

                <div className="flex items-center gap-1 text-[11px] text-white font-semibold glass-panel-dark px-2 py-0.5 rounded-full">
                  <Heart className="w-3 h-3 text-[#E6B83F] fill-[#E6B83F]" />
                  <span>{reel.likes}</span>
                </div>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10 text-left flex flex-col justify-end">
                <p className="text-xs text-[#F7F2E8] line-clamp-2 leading-relaxed mb-3 font-normal">
                  {reel.caption}
                </p>
                <div className="flex items-center justify-between pt-2.5 border-t border-white/20 text-[10px] text-[#E6B83F] font-bold uppercase tracking-wider">
                  <span>Watch on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
