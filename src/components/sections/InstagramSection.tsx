import React from "react";
import Image from "next/image";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { INSTAGRAM_PREVIEWS } from "@/lib/content-data";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function InstagramSection() {
  return (
    <section className="py-24 bg-[#FAF6EF] text-[#292522] border-b border-[#DED2BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow & Main Headings */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#8F1725]/10 text-[#8F1725] text-xs uppercase tracking-[0.25em] font-semibold mb-4">
          <InstagramIcon className="w-4 h-4 text-[#8F1725]" />
          <span>Social Hub</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#292522] font-normal mb-3">
          Follow the Flavour
        </h2>
        <p className="text-sm sm:text-base text-[#5C554F] max-w-xl mx-auto mb-8 font-light">
          Explore our food, flavours and dining experience. Connect with @ghani_shinwari on Instagram.
        </p>

        {/* Action Button */}
        <div className="mb-14">
          <Button
            href={RESTAURANT_CONFIG.social.instagram}
            isExternal
            variant="crimson"
            size="md"
          >
            <InstagramIcon className="w-4 h-4 mr-2 text-[#E6B83F]" />
            <span>Follow @ghani_shinwari</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 opacity-70" />
          </Button>
        </div>

        {/* Visual 4-Grid Preview Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_PREVIEWS.map((post) => (
            <a
              key={post.id}
              href={RESTAURANT_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xs overflow-hidden bg-[#F7F2E8] border border-[#DED2BE] shadow-xs hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={post.image}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-left">
                <p className="text-xs text-[#F7F2E8] line-clamp-3 leading-relaxed mb-2">
                  {post.caption}
                </p>
                <div className="flex items-center gap-1.5 text-[10px] text-[#E6B83F] font-semibold uppercase tracking-wider">
                  <span>View on Instagram</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
