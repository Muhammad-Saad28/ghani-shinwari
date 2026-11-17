import { GalleryPhoto } from "@/types";

export const SIGNATURE_DISHES_LIST = [
  {
    id: "sig-shinwari-karahi",
    name: "Shinwari Karahi",
    category: "Mutton & Lamb Speciality",
    description: "The undisputed signature of Pashtun culinary heritage. Fresh prime meat sautéed over volcanic heat with ripe vine tomatoes, coarse rock salt, and split green chilies in pure lamb fat.",
    priceInfo: "Half: PKR 2,000 | Full: PKR 3,800",
    image: "/images/dishes/m-shinwari-karahi.webp",
    isFeaturedLarge: true,
  },
  {
    id: "sig-sulemani-karahi",
    name: "Sulemani Karahi",
    category: "Delicate White Pepper Sauté",
    description: "A velvety, subtly spiced white karahi cooked with whole yogurt, crushed black peppercorns, and roasted cumin to preserve delicate meat juices.",
    priceInfo: "Half: PKR 2,000 | Full: PKR 3,800",
    image: "/images/dishes/m-sulemani-karahi.webp",
    isFeaturedLarge: false,
  },
  {
    id: "sig-namkeen-tikka",
    name: "Namkeen Tikka",
    category: "Hardwood Charcoal BBQ",
    description: "Succulent cubes of prime mutton and natural lamb tail fat skewered sequentially, roasted over glowing coals seasoned only with mountain salt.",
    priceInfo: "Half: PKR 2,000 | Full: PKR 3,800",
    image: "/images/dishes/m-namkeen-tikka.webp",
    isFeaturedLarge: false,
  },
  {
    id: "sig-rosh-masala-yakhni",
    name: "Rosh Masala & Yakhni",
    category: "Slow-Steamed Bone Broth",
    description: "Prime mutton shank braised sealed in heavy earthenware with whole potatoes and whole black peppercorns until the meat slides off the bone.",
    priceInfo: "Half: PKR 2,100 | Full: PKR 4,000",
    image: "/images/dishes/m-rosh-masala-yakhni.webp",
    isFeaturedLarge: false,
  },
  {
    id: "sig-mutton-kabli-pulao",
    name: "Mutton Kabli Pulao",
    category: "Traditional Afghan Rice",
    description: "Aromatic aged long-grain basmati rice simmered in mutton bone stock, crowned with fall-apart tender mutton, sweet glazed carrots, and dark raisins.",
    priceInfo: "Half: PKR 800 | Full: PKR 1,600",
    image: "/images/dishes/m-kabli-pulao.webp",
    isFeaturedLarge: false,
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gp-1",
    title: "Fresh Sizzling Mutton Karahi in Iron Wok",
    category: "karahi",
    image: "/images/dishes/m-shinwari-karahi.webp",
    alt: "Shinwari Mutton Karahi simmering with fresh tomatoes and green chilies",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: "gp-2",
    title: "Namkeen Tikka on Glowing Charcoal Skewers",
    category: "bbq",
    image: "/images/dishes/m-namkeen-tikka.webp",
    alt: "Charcoal roasted namkeen mutton skewers over hot braziers",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-3",
    title: "Slow-Braised Peshawari Rosh with Bone Marrow",
    category: "karahi",
    image: "/images/dishes/m-rosh-masala-yakhni.webp",
    alt: "Mutton Rosh shank served in rich natural broth with whole potato",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-4",
    title: "Peshawari Sajji Roasted over Embers",
    category: "bbq",
    image: "/images/dishes/bbq-peshawari-sajji.webp",
    alt: "Whole crisp roast sajji served with aromatic basmati rice",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-5",
    title: "Authentic Peshawari Chapli Kababs",
    category: "bbq",
    image: "/images/dishes/bbq-chapli-kabab.webp",
    alt: "Pan-fried Peshawari Chapli Kababs with crisp edges",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: "gp-6",
    title: "Royal Afghani Kabli Pulao Platter",
    category: "karahi",
    image: "/images/dishes/m-kabli-pulao.webp",
    alt: "Long grain sella basmati with tender shank and glazed carrots",
    span: "md:col-span-1 md:row-span-1",
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
    image: "/images/dishes/m-shinwari-karahi.webp",
    caption: "The unmistakable sizzle of our authentic Shinwari Karahi.",
  },
  {
    id: "ig-2",
    image: "/images/dishes/m-namkeen-tikka.webp",
    caption: "Salt, fire and coal — Namkeen Tikka perfection.",
  },
  {
    id: "ig-3",
    image: "/images/dishes/m-rosh-masala-yakhni.webp",
    caption: "Slow-cooked Peshawari Rosh simmered in rich bone broth.",
  },
  {
    id: "ig-4",
    image: "/images/dishes/m-kabli-pulao.webp",
    caption: "Steaming aromatic Kabli Pulao with sweet glazed carrots and raisins.",
  },
];
