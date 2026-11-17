import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { RESTAURANT_CONFIG } from "@/lib/config";
import { CartProvider } from "@/context/CartContext";
import { BottomRightCartToast } from "@/components/ui/BottomRightCartToast";

const fontSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#8F1725",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(RESTAURANT_CONFIG.meta.siteUrl),
  title: {
    default: `${RESTAURANT_CONFIG.brand.name} | Authentic Shinwari Taste. A Tradition Worth Sharing.`,
    template: `%s | ${RESTAURANT_CONFIG.brand.name}`,
  },
  description:
    "Experience the rich flavours of traditional Shinwari cuisine at Ghani Shinwari. Handcrafted Mutton Karahi, Lamb Karahi, Charcoal BBQ, Peshawari Rosh & Kabli Pulao.",
  keywords: [
    "Ghani Shinwari",
    "Ghani Shinwari Restaurant",
    "Shinwari Karahi",
    "Mutton Karahi",
    "Lamb Karahi",
    "Peshawari Rosh",
    "Namkeen Tikka",
    "Kabli Pulao",
    "Pakistani Restaurant",
  ],
  authors: [{ name: RESTAURANT_CONFIG.brand.name }],
  openGraph: {
    title: `${RESTAURANT_CONFIG.brand.name} — Authentic Shinwari Taste`,
    description: RESTAURANT_CONFIG.brand.subheadline,
    url: RESTAURANT_CONFIG.meta.siteUrl,
    siteName: RESTAURANT_CONFIG.brand.name,
    images: [
      {
        url: RESTAURANT_CONFIG.meta.ogImage,
        width: 1200,
        height: 630,
        alt: "Ghani Shinwari Authentic Mutton Karahi and Barbecue",
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT_CONFIG.brand.name} | Authentic Shinwari Taste`,
    description: RESTAURANT_CONFIG.brand.subheadline,
    images: [RESTAURANT_CONFIG.meta.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: RESTAURANT_CONFIG.brand.name,
    image: RESTAURANT_CONFIG.meta.ogImage,
    description: RESTAURANT_CONFIG.brand.subheadline,
    servesCuisine: ["Shinwari", "Pakistani", "Peshawari", "Barbecue", "Halal"],
    priceRange: "PKR 100 - PKR 4200",
    url: RESTAURANT_CONFIG.meta.siteUrl,
    sameAs: [RESTAURANT_CONFIG.social.instagram],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  };

  return (
    <html
      lang="en"
      className={`${fontSans.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F2E8] text-[#292522] font-sans selection:bg-[#8F1725] selection:text-[#F7F2E8]">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BottomRightCartToast />
        </CartProvider>
      </body>
    </html>
  );
}
