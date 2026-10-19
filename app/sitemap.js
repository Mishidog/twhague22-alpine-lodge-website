import { canonicalSiteUrl, experiences, tripGuides } from "@/data/site";

export const dynamic = "force-static";

const publicPages = [
  "",
  "/rooms",
  "/rates",
  "/crew-lodging-davis-wv",
  "/location",
  "/experiences",
  "/trip-guides",
  "/trip-planner",
  "/knowledge-catalog",
  "/faq",
  "/contact",
  "/photo-credits",
  "/privacy"
];

export default function sitemap() {
  const origin = canonicalSiteUrl();
  const routes = [
    ...publicPages,
    ...experiences.map((item) => `/experiences/${item.slug}`),
    ...tripGuides.map((item) => `/trip-guides/${item.slug}`)
  ];

  return routes.map((route) => ({
    url: `${origin}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
