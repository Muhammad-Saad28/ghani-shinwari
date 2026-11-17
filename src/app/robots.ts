import { MetadataRoute } from "next";
import { RESTAURANT_CONFIG } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${RESTAURANT_CONFIG.meta.siteUrl}/sitemap.xml`,
  };
}
