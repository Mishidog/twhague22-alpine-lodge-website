import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { lodgingJsonLd, site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alpine Lodge | Affordable Lodging in Davis, West Virginia",
    template: "%s | Alpine Lodge"
  },
  description:
    "Budget-friendly lodging in Davis, WV near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, hiking, skiing, food, and music.",
  openGraph: {
    title: "Alpine Lodge | Davis, WV Basecamp Lodging",
    description:
      "Stay simple, spend the trip outside. Affordable Davis lodging near waterfalls, trails, skiing, food, and music.",
    url: site.url,
    siteName: "Alpine Lodge",
    images: [
      {
        url: "/images/alpine-lodge-exterior.jpg",
        width: 1200,
        height: 780,
        alt: "Alpine Lodge in Davis, West Virginia"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={lodgingJsonLd()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
