import { site } from "@/data/site";

export const dynamic = "force-static";

const aiSearchBots = [
  "Amazonbot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ClaudeBot",
  "CloudflareBrowserRenderingCrawler",
  "Google-Extended",
  "GPTBot",
  "meta-externalagent"
];

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/"
      },
      ...aiSearchBots.map((userAgent) => ({
        userAgent,
        allow: "/"
      }))
    ],
    sitemap: `${site.url}/sitemap.xml`
  };
}
