import { MetadataRoute } from "next";
import { RESTAURANT_CONFIG } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = RESTAURANT_CONFIG.meta.siteUrl;

  const routes = ["", "/about", "/menu", "/signatures", "/experience", "/contact"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
