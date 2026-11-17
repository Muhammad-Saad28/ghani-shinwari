import { MenuItem, CategoryInfo } from "@/types";

export const MENU_CATEGORIES: CategoryInfo[] = [
  {
    id: "karahi",
    name: "Shinwari Karahi",
    description:
      "Cooked fresh upon order with organic lamb or dumba fat, fresh red vine tomatoes, salt, and green chilies. Minimal spices to let the pure meat flavor shine.",
  },
  {
    id: "rosh",
    name: "Peshawari Rosh & Soups",
    description:
      "Tender cuts of mutton and beef slow-cooked in natural bone broth, whole potatoes, and black pepper. The royal feast of Khyber.",
  },
  {
    id: "bbq",
    name: "Charcoal Barbecue & Namkeen Tikka",
    description:
      "Marinated solely with Himalayan rock salt and grilled over smoking coal braziers. Crisp exterior, melt-in-mouth fat marbling.",
  },
  {
    id: "pulao",
    name: "Kabuli Pulao & Rice",
    description:
      "Long-grain sella basmati rice steamed with fragrant bone stock, garnished with caramelized carrots and sweet Afghan black raisins.",
  },
  {
    id: "breads",
    name: "Tandoori Breads & Naan",
    description:
      "Freshly baked in wood and clay tandoors: sesame Roghani Naan, whole wheat Kandahari Naan, and garlic naan.",
  },
  {
    id: "beverages-desserts",
    name: "Kehwa, Drinks & Desserts",
    description:
      "Traditional Peshawari green kehwa with green cardamom and saffron, fresh lassi, and authentic desserts.",
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // Karahi
  {
    id: "dumba-shinwari-karahi",
    name: "Shinwari Dumba Karahi (Special)",
    nativeName: "شنواری دنبہ کڑاہی",
    category: "karahi",
    description:
      "The undisputed crown jewel of Pashtun culinary craft. Fresh lamb cuts cooked in rendered tail fat (dumba charbi), red tomatoes, green chilies, and pink salt. No onions, no powdered spices.",
    unitWeight: "1 KG",
    price: 4400,
    isSignature: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mutton-shinwari-karahi",
    name: "Shinwari Mutton Karahi",
    nativeName: "شنواری مٹن کڑاہی",
    category: "karahi",
    description:
      "Tender prime mutton sautéed over high heat in a traditional cast-iron wok with fresh garlic water, tomatoes, ginger slivers, and split green chilies.",
    unitWeight: "1 KG",
    price: 3900,
    isSignature: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1545247181-516773cae7be?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "desi-chicken-karahi",
    name: "Desi Chicken Shinwari Karahi",
    nativeName: "شنواری دیسی مرغ کڑاہی",
    category: "karahi",
    description:
      "Free-range desi chicken slow-cooked until juicy and golden, enriched with natural juices, fresh ginger, and diced tomatoes.",
    unitWeight: "1 KG",
    price: 2800,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "broiler-chicken-karahi",
    name: "Chicken Shinwari White Karahi",
    nativeName: "شنواری چکن وائٹ کڑاہی",
    category: "karahi",
    description:
      "Chicken breast and thigh cuts seared with yogurt, black pepper, green cardamom, and ginger. Smooth, delicate, and deeply savory.",
    unitWeight: "1 KG",
    price: 1950,
    image:
      "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=1200&q=80",
  },

  // Rosh
  {
    id: "peshawari-mutton-rosh",
    name: "Authentic Peshawari Mutton Rosh",
    nativeName: "روایتی مٹن روش",
    category: "rosh",
    description:
      "Huge prime shanks of mutton slow-cooked sealed inside a degchi with bone-marrow broth, whole potatoes, whole garlic pods, and sea salt for 4+ hours.",
    unitWeight: "Per Joint / Shank",
    price: 1650,
    isSignature: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "beef-nalli-rosh",
    name: "Beef Nalli Shank Rosh",
    nativeName: "بیف نلی روش",
    category: "rosh",
    description:
      "Succulent beef shank and marrow bone braised in aromatic light broth until the meat falls gently from the bone.",
    unitWeight: "Per Shank",
    price: 1450,
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=1200&q=80",
  },

  // BBQ
  {
    id: "shinwari-namkeen-tikka",
    name: "Shinwari Namkeen Dumba Tikka",
    nativeName: "شنواری نمکین دنبہ تکہ",
    category: "bbq",
    description:
      "Cubes of tender lamb fat and meat skewered sequentially on iron rods, seasoned only with rock salt, and slowly charred over glowing Acacia coals.",
    unitWeight: "Half KG",
    price: 2100,
    isSignature: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "mutton-chops-bbq",
    name: "Charcoal Grilled Mutton Chops (Chaamp)",
    nativeName: "مٹن چانپ گرل",
    category: "bbq",
    description:
      "Juicy rib chops lightly seasoned with garlic and cracked coriander, grilled to crisp perfection on open coals.",
    unitWeight: "6 Pcs",
    price: 2400,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "shinwari-patta-tikka",
    name: "Special Patta Tikka (Liver & Heart Wrap)",
    nativeName: "شنواری پٹہ تکہ",
    category: "bbq",
    description:
      "Spiced lamb liver and heart wrapped gently in thin sheep belly fat (pardah), skewered and sizzled until crackling and rich.",
    unitWeight: "Per Skewer",
    price: 850,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "chicken-malai-boti",
    name: "Smoky Chicken Malai Boti",
    nativeName: "چکن ملائی بوٹی",
    category: "bbq",
    description:
      "Boneless chicken cubes steeped in thick cream, green cardamom, and white pepper, char-grilled with a velvety crust.",
    unitWeight: "1 Plate (8 Pcs)",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1200&q=80",
  },

  // Rice
  {
    id: "special-kabuli-pulao",
    name: "Royal Peshawari Kabuli Pulao",
    nativeName: "شاہی کابلی پلاؤ",
    category: "pulao",
    description:
      "Delicate sella rice simmered in lamb broth, layered with a massive fall-apart mutton shank, and topped with shredded sweet carrots and plump raisins.",
    unitWeight: "Single Platter",
    price: 1550,
    isSignature: true,
    isPopular: true,
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=80",
  },

  // Breads
  {
    id: "kandahari-naan",
    name: "Kandahari Khameeri Naan",
    nativeName: "قندھاری خمیری نان",
    category: "breads",
    description:
      "Traditional extra-large crusty naan with decorative finger dimples, baked on red-hot clay tandoor walls.",
    unitWeight: "Per Piece",
    price: 100,
    image:
      "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "roghani-naan",
    name: "Butter Roghani Naan",
    nativeName: "روغنی نان",
    category: "breads",
    description:
      "Rich dough brushed with pure desi ghee and sprinkled liberally with white sesame and nigella seeds.",
    unitWeight: "Per Piece",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },

  // Beverages & Desserts
  {
    id: "peshawari-kehwa",
    name: "Authentic Peshawari Kehwa",
    nativeName: "پشاوری قہوہ",
    category: "beverages-desserts",
    description:
      "Brewed with green tea leaves, green cardamom pods, and saffron strands, served hot with crystal candy (nabat). The classic digestive finish to Shinwari red meats.",
    unitWeight: "Pot (Serves 2-3)",
    price: 250,
    isSignature: true,
    image:
      "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "punjabi-sweet-lassi",
    name: "Clay Pot Sweet Lassi",
    nativeName: "میٹھی لسی مٹکہ",
    category: "beverages-desserts",
    description:
      "Chilled churned whole-milk yogurt crowned with a rich layer of fresh malai and crushed pistachios.",
    unitWeight: "Per Glass",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80",
  },
];
