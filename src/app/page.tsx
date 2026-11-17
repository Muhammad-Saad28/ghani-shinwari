import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { MenuSection } from "@/components/sections/MenuSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { LocationSection } from "@/components/sections/LocationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SignatureDishes />
      <MenuSection limit={8} isHomeView={true} showCategoryFilter={false} />
      <GallerySection />
      <ExperienceSection />
      <InstagramSection />
      <LocationSection />
    </>
  );
}
