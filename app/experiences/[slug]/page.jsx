import { notFound } from "next/navigation";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { ExperienceCard } from "@/components/ExperienceCard";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { experiences, site } from "@/data/site";

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = experiences.find((experience) => experience.slug === slug);
  if (!item) return {};
  return {
    title: item.seoTitle,
    description: item.description,
    openGraph: {
      title: item.seoTitle,
      description: item.description,
      images: [{ url: item.image }]
    }
  };
}

export default async function ExperienceDetailPage({ params }) {
  const { slug } = await params;
  const item = experiences.find((experience) => experience.slug === slug);
  if (!item) notFound();

  const related = experiences.filter((experience) => experience.slug !== item.slug).slice(0, 3);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: item.title,
    description: item.description,
    touristType: item.bestFor,
    url: `${site.url}/experiences/${item.slug}`,
    image: `${site.url}${item.image}`
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PageHero
        eyebrow={item.eyebrow}
        title={`${item.title} from Alpine Lodge`}
        copy={item.description}
        image={item.image}
        alt={item.alt}
        secondaryHref="/trip-planner"
        secondary="Ask The Planner"
      />
      <section className="section">
        <div className="container detail-layout">
          <article className="detail-article">
            <p className="eyebrow">Why it works from Alpine Lodge</p>
            {item.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h2>Simple plan</h2>
            <ul className="check-list">
              {item.tips.map((tip) => (
                <li key={tip}>
                  <CheckCircle2 aria-hidden="true" size={18} />
                  {tip}
                </li>
              ))}
            </ul>
          </article>
          <aside className="detail-aside">
            <div className="fact-box">
              <span>Distance</span>
              <strong>{item.distance}</strong>
            </div>
            <div className="fact-box">
              <span>Cost level</span>
              <strong>{item.budget}</strong>
            </div>
            <div className="fact-box">
              <span>Best season</span>
              <strong>{item.season}</strong>
            </div>
            <div className="fact-box">
              <span>Good for</span>
              <strong>{item.bestFor.join(", ")}</strong>
            </div>
            <a className="button button-secondary" href={item.officialLink} target="_blank" rel="noopener noreferrer">
              Official Details
              <ExternalLink aria-hidden="true" size={16} />
            </a>
            <BookingButton>Stay Nearby</BookingButton>
          </aside>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">Keep planning</p>
            <h2>More ways to use Alpine Lodge as the home base.</h2>
          </div>
          <div className="card-grid three">
            {related.map((experience) => (
              <ExperienceCard key={experience.slug} item={experience} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
