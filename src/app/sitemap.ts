import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { areas } from "@/lib/areas";

const base = "https://vermontcustomexteriors.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/about-us", "/services", "/gallery", "/service-areas", "/contact-us"];
  return [
    ...staticPages.map((p) => ({
      url: `${base}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({
      url: `${base}/services/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...areas.map((a) => ({
      url: `${base}/service-areas/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
