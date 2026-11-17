import { GalleryPhoto } from "@/types";

export const SIGNATURE_DISHES_LIST = [
  {
    id: "sig-shinwari-karahi",
    name: "Shinwari Karahi",
    category: "Mutton & Lamb Speciality",
    description: "The undisputed signature of Pashtun culinary heritage. Fresh prime meat sautéed over volcanic heat with ripe vine tomatoes, coarse rock salt, and split green chilies in pure lamb fat.",
    priceInfo: "Half: PKR 2,000 | Full: PKR 3,800",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=85",
    isFeaturedLarge: true,
  },
  {
    id: "sig-sulemani-karahi",
    name: "Sulemani Karahi",
    category: "Delicate White Pepper Sauté",
    description: "A velvety, subtly spiced white karahi cooked with whole yogurt, crushed black peppercorns, and roasted cumin to preserve delicate meat juices.",
    priceInfo: "Half: PKR 2,000 | Full: PKR 3,800",
    image: "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=1000&q=85",
    isFeaturedLarge: false,
  },
  {
    id: "sig-namkeen-tikka",
    name: "Namkeen Tikka",
    category: "Hardwood Charcoal BBQ",
    description: "Succulent cubes of prime mutton and natural lamb tail fat skewered sequentially, roasted over glowing coals seasoned only with mountain salt.",
    priceInfo: "Half: PKR 2,000 | Full: PKR 3,800",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1000&q=85",
    isFeaturedLarge: false,
  },
  {
    id: "sig-rosh-masala-yakhni",
    name: "Rosh Masala & Yakhni",
    category: "Slow-Steamed Bone Broth",
    description: "Prime mutton shank braised sealed in heavy earthenware with whole potatoes and whole black peppercorns until the meat slides off the bone.",
    priceInfo: "Half: PKR 2,100 | Full: PKR 4,000",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=85",
    isFeaturedLarge: false,
  },
  {
    id: "sig-mutton-kabli-pulao",
    name: "Mutton Kabli Pulao",
    category: "Traditional Afghan Rice",
    description: "Aromatic aged long-grain basmati rice simmered in mutton bone stock, crowned with fall-apart tender mutton, sweet glazed carrots, and dark raisins.",
    priceInfo: "Half: PKR 800 | Full: PKR 1,600",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1000&q=85",
    isFeaturedLarge: false,
  },
  {
    id: "sig-peshawari-sajji",
    name: "Peshawari Sajji",
    category: "Open Ember Whole Roast",
    description: "Whole tender chicken seasoned with rock salt and slow-roasted on circular skewers around smoking open-flame hardwood embers.",
    priceInfo: "Full Bird: PKR 2,490",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=85",
    isFeaturedLarge: true,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gp-1",
    title: "Fresh Sizzling Mutton Karahi in Iron Wok",
    category: "karahi",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    alt: "Shinwari Mutton Karahi simmering with fresh tomatoes and green chilies",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "gp-2",
    title: "Namkeen Tikka on Glowing Charcoal Skewers",
    category: "bbq",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    alt: "Charcoal roasted namkeen mutton skewers over hot braziers",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-3",
    title: "Slow-Braised Peshawari Rosh with Bone Marrow",
    category: "karahi",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    alt: "Mutton Rosh shank served in rich natural broth with whole potato",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-4",
    title: "Traditional Tandoor & Kandahari Khameeri Naan",
    category: "heritage",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
    alt: "Artisan pulling hot dimpled Kandahari naan from the clay tandoor pit",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: "gp-5",
    title: "Peshawari Sajji Roasted over Embers",
    category: "bbq",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
    alt: "Whole chicken sajji rotating around hardwood coal braziers",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-6",
    title: "Peshawari Beef Chapli Kabab Sizzle",
    category: "bbq",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80",
    alt: "Crisp edged authentic Peshawari chapli kabab patties on cast-iron flat tawa",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-7",
    title: "Warm Dastarkhwan & Evening Dining Experience",
    category: "dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Warm ambient seating and authentic hospitality at Ghani Shinwari",
    span: "md:col-span-2 md:row-span-1",
  },
];

export const EXPERIENCE_POINTS = [
  {
    title: "Authentic Shinwari Cuisine",
    description: "Strictly prepared adhering to ancestral Pashtun culinary principles—no excessive powdered masalas or onions, allowing genuine meat flavours to shine.",
    icon: "Flame",
  },
  {
    title: "Traditional Live Cooking",
    description: "Every karahi is seared to order on hand-hammered cast-iron woks and skewers are grilled over natural hardwood Acacia coals.",
    icon: "UtensilsCrossed",
  },
  {
    title: "Freshly Prepared Food",
    description: "Nothing pre-made or frozen. Meat is inspected and prepared fresh daily to maintain melt-in-the-mouth tenderness and succulent juiciness.",
    icon: "Sparkles",
  },
  {
    title: "Rich Traditional Flavours",
    description: "Natural animal tallow, coarse rock salt, vine-ripened tomatoes, and green chilies combine into an unforgettable, full-bodied flavour profile.",
    icon: "ShieldCheck",
  },
];

export const INSTAGRAM_PREVIEWS = [
  {
    id: "ig-1",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80",
    caption: "The unmistakable sizzle of our authentic Shinwari Karahi.",
  },
  {
    id: "ig-2",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    caption: "Salt, fire and coal — Namkeen Tikka perfection.",
  },
  {
    id: "ig-3",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    caption: "Slow-cooked Peshawari Rosh simmered in rich bone broth.",
  },
  {
    id: "ig-4",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    caption: "Steaming aromatic Kabli Pulao with sweet glazed carrots and raisins.",
  },
];
