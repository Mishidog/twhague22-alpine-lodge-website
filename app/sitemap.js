import { experiences, site, tripGuides } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap() {
  const routes = [
    "",
    "/rooms",
    "/rates",
    "/location",
    "/experiences",
    "/trip-guides",
    "/trip-planner",
    "/knowledge-catalog",
    "/faq",
    "/contact",
    "/catalog/knowledge-catalog.json",
    "/catalog/lodging.json",
    "/catalog/rates.json",
    "/catalog/policies.json",
    "/catalog/faqs.json",
    "/lodging.md",
    "/rates.md",
    "/policies.md",
    "/faq.md",
    ...experiences.map((item) => `/experiences/${item.slug}`),
    ...tripGuides.map((item) => `/trip-guides/${item.slug}`)
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
