import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { rateKnowledge } from "@/data/knowledgeCatalog.mjs";
import { site } from "@/data/site";

export const metadata = {
  title: "Rates & Booking",
  description:
    "Alpine Lodge rooms from $99 on select dates in Davis, WV. Check current room rates, availability, pet-friendly options, and booking details through direct Cloudbeds reservations."
};

export default function RatesPage() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I check current Alpine Lodge rates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Use the direct Cloudbeds booking link to see current Alpine Lodge room rates, room types, and availability for your selected dates."
        }
      },
      {
        "@type": "Question",
        name: "Are Alpine Lodge rooms available from $99?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Alpine Lodge advertises rooms from $99 on select dates. Rates vary by date, availability, season, room type, and booking details, so guests should confirm current pricing through the booking page."
        }
      },
      {
        "@type": "Question",
        name: "How do I check pet-friendly room availability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guests should book the correct pet-friendly room type or contact Alpine Lodge before arrival because designated pet-friendly rooms can be limited."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={faqJson} />
      <PageHero
        eyebrow="Rates and direct booking"
        title="Rooms from $99 on select dates, with live rates before you reserve."
        copy="Rates change by date, availability, room type, season, and local demand. Use the direct booking page for current Alpine Lodge rates."
        image="/images/alpine-lodge-king-room.jpg"
        alt="King guest room at Alpine Lodge in Davis, West Virginia"
        primary="Check Live Rates"
        secondaryHref="/rooms"
        secondary="View Rooms"
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Short answer</p>
            <h2>The booking engine is the current source for room price and availability.</h2>
          </div>
          <div className="prose">
            <p>
              Alpine Lodge can be a fair-priced Davis basecamp, with rooms from $99 on select dates.
              The current rate depends on the dates, room type, availability, season, and local demand.
            </p>
            <p>
              For accurate pricing, guests should use the direct Cloudbeds reservation page rather than
              old search snippets or third-party summaries.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="What changes the rate"
            title="The same room can price differently depending on the trip."
            copy="These are the main factors guests should expect when comparing dates."
          />
          <div className="amenity-grid">
            {rateKnowledge[0].drivers.map((driver) => (
              <div key={driver} className="amenity-item">
                <span>{driver}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container booking-note">
          <div>
            <p className="eyebrow">Direct reservations</p>
            <h2>Check the live room options before you commit.</h2>
            <p>
              The booking page shows current Alpine Lodge availability and rates for the selected dates.
              For pet-friendly rooms, group questions, or arrival questions, contact the lodge directly.
            </p>
            <p>
              Phone: <a className="text-link" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
              {" "} Email: <a className="text-link" href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <BookingButton>Open Booking Site</BookingButton>
        </div>
      </section>
    </>
  );
}
