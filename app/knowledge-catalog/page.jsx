import Link from "next/link";
import { BookingButton, SecondaryLink } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import {
  catalogUpdated,
  knowledgeCatalog,
  lodgingCatalogJsonLd,
  lodgingServices,
  policyKnowledge,
  rateKnowledge
} from "@/data/knowledgeCatalog.mjs";

export const metadata = {
  title: "Knowledge Catalog",
  description:
    "Structured Alpine Lodge lodging, rate, amenity, policy, FAQ, and Davis WV trip-planning knowledge for guests, search engines, and AI tools."
};

export default function KnowledgeCatalogPage() {
  return (
    <>
      <JsonLd data={lodgingCatalogJsonLd()} />
      <PageHero
        eyebrow="Agent-readable lodge knowledge"
        title="Alpine Lodge Knowledge Catalog"
        copy="A structured source of truth for rooms, rate guidance, amenities, nearby attractions, pet-friendly lodging, policies, FAQs, and Davis trip planning."
        image="/images/alpine-lodge-exterior.jpg"
        alt="Alpine Lodge exterior in Davis, West Virginia"
        secondaryHref="/rates"
        secondary="View Rate Guidance"
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">What this catalog does</p>
            <h2>It helps people and AI systems understand the lodge without guessing.</h2>
          </div>
          <div className="prose">
            <p>{knowledgeCatalog.organization.positioning}</p>
            <p>
              The catalog does not replace the website design. It gives the site a clearer structured layer
              for search, AI answer engines, trip planners, and future content updates.
            </p>
            <p className="fine-print">Catalog last updated: {catalogUpdated}.</p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Catalog sections"
            title="The core lodging facts are now grouped into machine-readable categories."
            copy="These are the facts guests tend to ask for before they book: room basics, rate guidance, activities, policies, and current-source guardrails."
          />
          <div className="card-grid">
            {lodgingServices.map((service) => (
              <article key={service.id} className="amenity-proof-card">
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  <Link className="text-link" href={service.url}>
                    Related page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Rate guidance"
            title="Rates are explained clearly, but live pricing stays in the booking engine."
            copy="The catalog keeps the public price signal clear while preventing stale or invented rate details."
          />
          <div className="card-grid">
            {rateKnowledge.map((item) => (
              <article key={item.id} className="amenity-proof-card">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.answer}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Policy facts"
            title="Guest policies are grouped where answer engines can find them."
            copy="This helps keep answers grounded in the site instead of letting outside tools infer details."
          />
          <div className="faq-list">
            {policyKnowledge.map((policy) => (
              <details key={policy.id} open>
                <summary>{policy.name}</summary>
                <p>{policy.summary}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container booking-note">
          <div>
            <p className="eyebrow">Machine-readable files</p>
            <h2>Static files are available for crawlers and future workflows.</h2>
            <p>
              The catalog is also published as JSON and Markdown files so non-Google AI tools can parse it
              without relying on visual page rendering.
            </p>
            <div className="hero-actions">
              <SecondaryLink href="/catalog/knowledge-catalog.json">Catalog JSON</SecondaryLink>
              <SecondaryLink href="/lodging.md">Lodging Markdown</SecondaryLink>
            </div>
          </div>
          <BookingButton>Check Live Rates</BookingButton>
        </div>
      </section>
    </>
  );
}
