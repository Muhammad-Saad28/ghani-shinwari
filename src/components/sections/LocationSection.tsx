import React from "react";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollFade } from "@/components/ui/ScrollFade";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { MapPin, Phone, Clock, Navigation, ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";

export function LocationSection() {
  const branches = [
    {
      name: "Ravi Road Flagship",
      address: "General Truck Stand, 22/A Ravi Rd, Qila Lachman Singh, Lahore",
      tag: "Original Open-Air Hearth",
      timings: "12:00 PM – 3:00 AM",
    },
    {
      name: "DHA Phase 6 / Bedian",
      address: "Main Bedian Road, Near DHA Phase 6, Lahore",
      tag: "Family Pavilions & Dastarkhwan",
      timings: "1:00 PM – 2:00 AM",
    },
    {
      name: "Bahria Town Hub",
      address: "Commercial Zone, Sector C / Jasmine Block, Bahria Town",
      tag: "Open-Air Courtyard",
      timings: "1:00 PM – 2:00 AM",
    },
    {
      name: "Johar Town Outlet",
      address: "Main Boulevard, Phase 1, Johar Town, Lahore",
      tag: "Express Karahi & BBQ",
      timings: "12:30 PM – 2:00 AM",
    },
  ];

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#F7F2E8] text-[#292522] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Visit & Connect"
          title="Contact & Location"
          subtitle="Experience authentic Shinwari hospitality in person across Lahore, or connect with our dispatch team directly on WhatsApp."
        />

        {/* 4 Lahore Branches Spotlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {branches.map((b, idx) => (
            <ScrollFade key={idx} delay={0.1 * idx} distance={20}>
              <div
                className="p-6 rounded-2xl glass-card-light hover:border-[#8F1725] transition-all card-hover-lift flex flex-col justify-between shadow-lg hover:shadow-2xl h-full"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8F1725] font-bold block mb-1">
                    {b.tag}
                  </span>
                  <h4 className="font-serif text-xl text-[#292522] font-semibold mb-2">
                    {b.name}
                  </h4>
                  <p className="text-xs text-[#5C554F] leading-relaxed mb-4">
                    {b.address}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DED2BE] flex items-center justify-between text-[11px] text-[#5C554F]">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#8F1725]" />
                    {b.timings}
                  </span>
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>

        {/* Main Connect Hub Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Direct Booking & Inquiries (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 glass-card-light rounded-2xl shadow-xl flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#8F1725] font-bold block mb-2">
                Lahore Culinary Headquarters
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#292522] mb-6">
                Ghani Shinwari Traditional Restaurant
              </h3>

              <div className="space-y-6 text-sm text-[#292522]">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-[#23120B] text-[#F7F2E8] shrink-0 mt-0.5 shadow-md border border-[#E6B83F]/30">
                    <MapPin className="w-5 h-5 text-[#E6B83F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8F1725] text-xs uppercase tracking-wider mb-0.5">
                      Main Flagship Address
                    </h4>
                    <p className="text-[#5C554F] leading-relaxed font-medium">
                      General Truck Stand, 22/A Ravi Rd, Qila Lachman Singh, Lahore
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-[#23120B] text-[#F7F2E8] shrink-0 mt-0.5 shadow-md border border-[#E6B83F]/30">
                    <Clock className="w-5 h-5 text-[#E6B83F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8F1725] text-xs uppercase tracking-wider mb-0.5">
                      Daily Dining Hours
                    </h4>
                    <p className="text-[#5C554F]">
                      Open daily from 12:00 PM until 3:00 AM midnight.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-xl bg-[#23120B] text-[#F7F2E8] shrink-0 mt-0.5 shadow-md border border-[#E6B83F]/30">
                    <MessageCircle className="w-5 h-5 text-[#E6B83F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8F1725] text-xs uppercase tracking-wider mb-0.5">
                      Direct WhatsApp Helpline
                    </h4>
                    <p className="text-[#5C554F] font-bold">
                      +92 305 4449151
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#DED2BE] flex flex-col sm:flex-row items-center gap-4">
              <Button
                href={`https://maps.google.com/?q=${encodeURIComponent("Ghani Shinwari Restaurant, General Truck Stand, 22/A Ravi Rd, Qila Lachman Singh, Lahore")}`}
                isExternal
                variant="crimson"
                size="md"
                className="w-full sm:w-auto"
              >
                <Navigation className="w-4 h-4 mr-2 text-[#E6B83F]" />
                <span>Open in Google Maps</span>
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

          {/* Right WhatsApp Dispatch Card (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 glass-panel-dark text-[#F7F2E8] rounded-xs shadow-2xl border-t-4 border-[#E6B83F] flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#70111C] border border-[#E6B83F]/30 text-xs text-[#E6B83F] font-bold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Direct Kitchen Dispatch</span>
              </div>

              <h3 className="font-serif text-3xl text-[#F7F2E8] mb-4">
                Family Tables & Fast Delivery
              </h3>

              <p className="text-xs sm:text-sm text-[#F7F2E8]/85 leading-relaxed mb-6 font-light">
                Planning a large family gathering or craving hot mutton karahi at your doorstep? Our dedicated dispatch line connects you straight to kitchen supervisors.
              </p>

              <div className="p-4 rounded-xs bg-[#70111C] border border-[#E6B83F]/30 mb-8 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#F7F2E8]/70">Average Prep Time:</span>
                  <span className="font-bold text-[#E6B83F]">30–45 Mins</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#F7F2E8]/70">Meat Selection:</span>
                  <span className="font-bold text-[#E6B83F]">Live Cut-to-Order</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#F7F2E8]/70">WhatsApp Support:</span>
                  <span className="font-bold text-white">+92 305 4449151</span>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <a
                href="https://wa.me/923054449151"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-widest rounded-xs shadow-xl transition-all active:translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp (+92 305 4449151)</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
