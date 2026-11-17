export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  description: string;
  price?: number;
  priceHalf?: number;
  priceFull?: number;
  priceSmall?: number;
  priceLarge?: number;
  unitLabel?: string; // e.g. "Half (0.5kg) / Full (1kg)", "5 Pcs", "Full Bird", etc.
  isSignature?: boolean;
  image: string;
}

export type MenuCategory =
  | "mutton"
  | "lamb"
  | "bbq"
  | "chicken"
  | "beef"
  | "tandoori"
  | "drinks"
  | "raita-salad";

export interface CategoryTab {
  id: MenuCategory;
  name: string;
  urduName?: string;
  count?: number;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: "karahi" | "bbq" | "dining" | "heritage";
  image: string;
  alt: string;
  span?: string; // for masonry/editorial layout
}
