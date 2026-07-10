import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { lodgingJsonLd, site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Alpine Lodge | Davis WV Basecamp Lodging",
    template: "%s | Alpine Lodge"
  },
  description:
    "Davis, WV rooms from $99 on select dates near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, hiking, skiing, food, and music.",
  openGraph: {
    title: "Alpine Lodge | Davis, WV Basecamp Lodging",
    description:
      "Book the Davis room, then spend the trip outside near waterfalls, trails, skiing, food, and music.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpine Lodge | Davis, WV Basecamp Lodging",
    description:
      "Rooms from $99 on select dates near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, and Thomas.",
    images: ["/images/alpine-lodge-exterior.jpg"]
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
