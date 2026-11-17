import { RestaurantBranch } from "@/types";

export const RESTAURANT_CONFIG = {
  brand: {
    name: "Ghani Shinwari",
    nativeName: "غنی شنواری",
    tagline: "The Soul of Shinwari. The Taste of Tradition.",
    subheadline: "Where Tradition Meets Fire",
    description:
      "Authentic Peshawari & Shinwari culinary heritage. Handcrafted mutton karahi cooked in pure animal fat, slow-braised Rosh, charcoal-kissed namkeen tikka, and fragrant Kabuli pulao.",
    heritageYear: "2010", // Verified established heritage placeholder
  },
  social: {
    instagram: "https://www.instagram.com/ghani_shinwari/",
    instagramHandle: "@ghani_shinwari",
    facebook: "https://facebook.com/ghanishinwari",
    email: "Info.GhaniShinwari@gmail.com",
    whatsappDefault: "+923000000000", // Standard Pakistani contact placeholder to be confirmed by owner
  },
  branches: [
    {
      id: "ravi-road-flagship",
      name: "Ravi Road Flagship (General Truck Stand)",
      tagline: "The Legendary Original Atmosphere",
      address: "General Truck Stand, Ravi Road, Data Ganj Bakhsh Town",
      city: "Lahore, Pakistan",
      phone: "+92 300 0000000", // Clearly marked placeholder pending owner verification
      whatsapp: "+92 300 0000000",
      openingHours: "12:00 PM – 03:00 AM Daily",
      isFlagship: true,
      mapQuery: "Ghani+Shinwari+Ravi+Road+Lahore",
    },
    {
      id: "dha-phase-6",
      name: "DHA Phase 6 / Bedian Road",
      tagline: "Contemporary Dining & Family Pavilions",
      address: "Bedian Road, Near DHA Phase 6",
      city: "Lahore, Pakistan",
      phone: "+92 300 0000000",
      whatsapp: "+92 300 0000000",
      openingHours: "01:00 PM – 02:00 AM Daily",
      isFlagship: false,
      mapQuery: "Ghani+Shinwari+DHA+Phase+6+Lahore",
    },
    {
      id: "bahria-town",
      name: "Bahria Town (Sector C)",
      tagline: "Warm Open-Air Chaharbagh & Dastarkhwan",
      address: "Commercial Zone, Sector C / Jasmine Block, Bahria Town",
      city: "Lahore, Pakistan",
      phone: "+92 300 0000000",
      whatsapp: "+92 300 0000000",
      openingHours: "01:00 PM – 02:00 AM Daily",
      isFlagship: false,
      mapQuery: "Ghani+Shinwari+Bahria+Town+Lahore",
    },
    {
      id: "johar-town",
      name: "Johar Town Outlet",
      tagline: "Express & Family Feast Hub",
      address: "Main Boulevard, Phase 1, Johar Town",
      city: "Lahore, Pakistan",
      phone: "+92 300 0000000",
      whatsapp: "+92 300 0000000",
      openingHours: "12:30 PM – 02:00 AM Daily",
      isFlagship: false,
      mapQuery: "Ghani+Shinwari+Johar+Town+Lahore",
    },
  ] as RestaurantBranch[],
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Our Story", href: "/about" },
    { label: "Atmosphere & Gallery", href: "/gallery" },
    { label: "Contact & Locations", href: "/contact" },
  ],
  meta: {
    siteUrl: "https://ghanishinwari.pk", // Target production domain
    ogImage: "/images/hero/shinwari-karahi-hero.jpg",
  },
};
