/** @type {import('next').NextConfig} */
const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  ...(staticExport ? { output: "export" } : {}),
  images: {
    ...(staticExport ? { unoptimized: true } : {}),
    formats: ["image/avif", "image/webp"]
  }
};

module.exports = nextConfig;
