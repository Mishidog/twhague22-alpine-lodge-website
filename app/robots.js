import { site } from "@/data/site";

export const dynamic = "force-static";

const aiSearchBots = [
  "anthropic-ai",
  "Amazonbot",
  "Applebot-Extended",
  "Bingbot",
  "Bytespider",
  "CCBot",
  "ChatGPT-User",
  "ClaudeBot",
  "CloudflareBrowserRenderingCrawler",
  "Google-Extended",
  "GPTBot",
  "meta-externalagent",
  "PerplexityBot"
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
