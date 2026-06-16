import { notFound } from "next/navigation";
import Image from "next/image";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { tripGuides, site } from "@/data/site";

export function generateStaticParams() {
  return tripGuides.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = tripGuides.find((item) => item.slug === slug);
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.description,
    openGraph: {
      title: guide.seoTitle,
      description: guide.description,
      images: [{ url: guide.image }]
    }
  };
}

export default async function TripGuideDetailPage({ params }) {
  const { slug } = await params;
  const guide = tripGuides.find((item) => item.slug === slug);
  if (!guide) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: `${site.url}${guide.image}`,
    author: {
      "@type": "Organization",
      name: site.name
    },
    publisher: {
      "@type": "Organization",
      name: site.name
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <section className="guide-hero">
        <div className="guide-hero-image">
          <Image src={guide.image} alt="" fill sizes="100vw" priority />
        </div>
        <div className="guide-hero-content">
          <p className="eyebrow">Trip guide</p>
          <h1>{guide.title}</h1>
          <p>{guide.description}</p>
          <BookingButton>Reserve Alpine Lodge</BookingButton>
        </div>
      </section>
      <section className="section">
        <div className="container guide-detail">
          <aside>
            <p className="eyebrow">Best for</p>
            <h2>{guide.audience}</h2>
          </aside>
          <article>
            {guide.days.map((day) => (
              <section key={day.label} className="day-block">
                <h2>{day.label}</h2>
                <ol>
                  {day.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            ))}
            <div className="inline-cta">
              <h2>Make Alpine Lodge the Davis room.</h2>
              <p>
                Book the room in Davis, then use the rest of the budget for the
                trip itself.
              </p>
              <BookingButton>Check Availability</BookingButton>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
