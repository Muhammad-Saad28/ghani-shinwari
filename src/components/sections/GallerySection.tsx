"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS } from "@/lib/content-data";
import { GalleryPhoto } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X, ZoomIn } from "lucide-react";

export function GallerySection() {
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF6EF] text-[#292522] border-b border-[#DED2BE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Atmosphere & Food Experience"
          title="The Photographic Gallery"
          subtitle="A visual celebration of freshly prepared Mutton Karahi, sizzling charcoal BBQ skewers, clay tandoors, and the warm hospitality of Ghani Shinwari."
        />

        {/* Editorial Masonry/Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setActivePhoto(photo)}
              className={`group relative overflow-hidden rounded-2xl border border-[#DED2BE] bg-[#F7F2E8] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 min-h-[260px] sm:min-h-[300px] card-hover-lift ${
                photo.span || "md:col-span-1"
              }`}
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-2 rounded-xs bg-[#8F1725] text-[#F7F2E8]">
                    <ZoomIn className="w-4 h-4 text-[#E6B83F]" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#E6B83F] font-semibold block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#F7F2E8] font-normal leading-snug">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActivePhoto(null)}
        >
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer z-50"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] rounded overflow-hidden border border-[#E6B83F]/40">
              <Image
                src={activePhoto.image}
                alt={activePhoto.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F7F2E8]">
                {activePhoto.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#DED2BE] mt-1 max-w-2xl mx-auto">
                {activePhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
