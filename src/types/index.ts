export interface RestaurantBranch {
  id: string;
  name: string;
  tagline?: string;
  address: string;
  city: string;
  phone: string;
  whatsapp?: string;
  openingHours: string;
  isFlagship?: boolean;
  mapQuery?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  nativeName?: string;
  category: MenuCategory;
  description: string;
  unitWeight?: string; // e.g. "1 KG", "Half KG", "Per Skewer"
  price: number; // PKR
  isSignature?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  spicinessLevel?: 1 | 2 | 3;
  image: string;
}

export type MenuCategory =
  | "karahi"
  | "rosh"
  | "bbq"
  | "pulao"
  | "breads"
  | "beverages-desserts";

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  description: string;
  iconName?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  source: string;
  location: string;
  rating: number;
  text: string;
  date?: string;
}

export interface GalleryImage {
  id: string;
  title: string;
  category: "food" | "ambiance" | "kitchen" | "cultural";
  src: string;
  alt: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}
