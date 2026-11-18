import React from "react";
import Image from "next/image";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { MapPin, Phone, Clock, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C110A] text-[#F7F2E8] border-t-4 border-[#E6B83F] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#F7F2E8]/15">
          {/* Brand Info with Logo */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#E6B83F] shadow-md shrink-0 bg-[#2A1810]">
                <Image
                  src="/logo.jpg"
                  alt="Ghani Shinwari Logo"
                  fill
                  sizes="56px"
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-normal tracking-tight text-[#F7F2E8] leading-none">
                  GHANI <span className="font-semibold text-[#E6B83F]">SHINWARI</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#E6B83F] font-semibold mt-1">
                  {RESTAURANT_CONFIG.brand.urduName}
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F2E8]/85 leading-relaxed">
              Authentic Shinwari taste. A tradition worth sharing. Experience the rich flavours of traditional Shinwari cuisine, freshly prepared with authentic ingredients and passion.
            </p>
            <a
              href={RESTAURANT_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#F7F2E8] hover:text-[#E6B83F] transition-colors p-2 rounded-xl bg-[#2A1810] border border-[#E6B83F]/30"
            >
              <InstagramIcon className="w-4 h-4 text-[#E6B83F]" />
              <span>Follow {RESTAURANT_CONFIG.social.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-semibold mb-5 pb-2 border-b border-[#F7F2E8]/20 inline-block">
              Quick Navigation
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              {RESTAURANT_CONFIG.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#E6B83F] transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-[1.5px] bg-[#E6B83F]" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-semibold mb-5 pb-2 border-b border-[#F7F2E8]/20 inline-block">
              Location & Hours
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-[#F7F2E8]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E6B83F] shrink-0 mt-0.5" />
                <span>{RESTAURANT_CONFIG.placeholders.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E6B83F] shrink-0" />
                <span>{RESTAURANT_CONFIG.placeholders.openingHours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E6B83F] shrink-0" />
                <span>Phone: {RESTAURANT_CONFIG.placeholders.phone}</span>
              </div>
              <p className="text-[11px] text-[#F7F2E8]/70 italic mt-2">
                * Contact directly via phone or Instagram for specific branch queries.
              </p>
            </div>
          </div>

          {/* Authenticity Guarantee Card */}
          <div className="bg-[#2A1810] p-6 rounded-2xl border border-[#E6B83F]/35 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 text-[#E6B83F] mb-2.5">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-xs uppercase tracking-wider font-semibold">
                  Authentic Shinwari Guarantee
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#F7F2E8]/85">
                Prepared with prime cuts in natural tallow and Himalayan salt. Pure flavors without artificial thickeners or unnecessary powdered spices.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#F7F2E8]/15 text-[11px] text-[#E6B83F]">
              Freshly Cooked Live Upon Every Order
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F2E8]/75 gap-4">
          <p>© {currentYear} {RESTAURANT_CONFIG.brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[#E6B83F]">Traditional Shinwari Heritage</span>
            <span>•</span>
            <a
              href={RESTAURANT_CONFIG.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E6B83F] transition-colors"
            >
              Instagram @ghani_shinwari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
