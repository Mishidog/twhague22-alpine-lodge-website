import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { faqs } from "@/data/site";

export const metadata = {
  title: "FAQ",
  description:
    "Answers about booking Alpine Lodge in Davis, WV, including pets, Wi-Fi, room amenities, check-in, ski access, Blackwater Falls, group bookings, and local planning."
};

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer }
          }))
        }}
      />
      <PageHero
        eyebrow="Alpine Lodge FAQ"
        title="Answers before you book the Davis room."
        copy="Use these answers to plan the room, the drive, the pets, the ski weekend, and the local activities."
        image="/images/alpine-lodge-office.jpg"
        alt="Alpine Lodge office in Davis, West Virginia"
        secondaryHref="/contact"
        secondary="Contact The Lodge"
      />
      <section className="section">
        <div className="container faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
