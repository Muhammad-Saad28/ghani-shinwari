import React from "react";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { MapPin, Phone, Clock, Navigation, ArrowUpRight } from "lucide-react";

export function LocationSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#F7F2E8] text-[#292522]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="Contact & Location"
          subtitle="Experience authentic Shinwari hospitality in person. For orders, reservations, or directions, connect with our team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Info Card (7 Cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#FAF6EF] border border-[#DED2BE] rounded-xs shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8F1725] font-semibold block mb-2">
                Authentic Pakistani Dining
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#292522] mb-6">
                Ghani Shinwari Restaurant
              </h3>

              <div className="space-y-6 text-sm text-[#292522]">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xs bg-[#8F1725] text-[#F7F2E8] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-[#E6B83F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8F1725] text-xs uppercase tracking-wider mb-0.5">
                      Location
                    </h4>
                    <p className="text-[#5C554F] leading-relaxed">
                      {RESTAURANT_CONFIG.placeholders.address}
                    </p>
                    <p className="text-xs text-[#5C554F]/80 italic mt-0.5">
                      {RESTAURANT_CONFIG.placeholders.locationNote}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xs bg-[#8F1725] text-[#F7F2E8] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-[#E6B83F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8F1725] text-xs uppercase tracking-wider mb-0.5">
                      Opening Hours
                    </h4>
                    <p className="text-[#5C554F]">
                      {RESTAURANT_CONFIG.placeholders.openingHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xs bg-[#8F1725] text-[#F7F2E8] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-[#E6B83F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8F1725] text-xs uppercase tracking-wider mb-0.5">
                      Direct Contact
                    </h4>
                    <p className="text-[#5C554F]">
                      {RESTAURANT_CONFIG.placeholders.phone}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#DED2BE] flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={`https://maps.google.com/?q=Ghani+Shinwari+Restaurant`}
                isExternal
                variant="crimson"
                size="md"
                className="w-full sm:w-auto"
              >
                <Navigation className="w-4 h-4 mr-2 text-[#E6B83F]" />
                <span>Get Directions (Google Maps)</span>
              </Button>
              <Button
                href={RESTAURANT_CONFIG.social.instagram}
                isExternal
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                <InstagramIcon className="w-4 h-4 mr-2" />
                <span>Instagram @ghani_shinwari</span>
              </Button>
            </div>
          </div>

          {/* Side Card: Authentic Welcome & Inquiries (5 Cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 bg-[#8F1725] text-[#F7F2E8] rounded-xs shadow-md border-t-4 border-[#E6B83F] flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#E6B83F] font-semibold block mb-2">
                Fresh Feast & Table Reservations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#F7F2E8] mb-4">
                Walk-ins & Family Tables
              </h3>
              <p className="text-xs sm:text-sm text-[#F7F2E8]/85 leading-relaxed mb-6 font-light">
                Whether you are organizing a celebratory family dastarkhwan, a business dinner, or an intimate gathering of food connoisseurs, we welcome you to the true taste of Shinwari.
              </p>

              <div className="p-4 bg-[#70111C] rounded-xs border border-[#E6B83F]/30 mb-6">
                <span className="text-xs text-[#E6B83F] font-semibold uppercase tracking-wider block mb-1">
                  Live Meat Cut Preparation
                </span>
                <p className="text-xs text-[#F7F2E8]/80 leading-relaxed">
                  Guests are invited to watch their meat cuts weighed and seared in fresh cast-iron woks over open flames.
                </p>
              </div>
            </div>

            <div>
              <Button
                href={RESTAURANT_CONFIG.social.instagram}
                isExternal
                variant="gold"
                size="md"
                className="w-full"
              >
                Message on Instagram
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
