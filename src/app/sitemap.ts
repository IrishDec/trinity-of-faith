import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trinityoffaith.ie";

  const routes = [
    "",
    "/about",
    "/contact",
    "/cookie-policy",
    "/donate",
    "/fr-joe",
    "/news",
    "/parish-centres",
    "/parish-history",
    "/parish-schools",
    "/privacy-policy",
    "/sacraments",
    "/sacraments/baptism",
    "/sacraments/marriage",
    "/sacraments/pastoral-support",
    "/safeguarding",
    "/volunteer",
    "/webcam",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}