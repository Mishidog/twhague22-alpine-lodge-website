import { CheckCircle2, Phone } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionIntro } from "@/components/SectionIntro";
import { guestQuotes, site } from "@/data/site";

export const metadata = {
  title: "Crew & Extended-Stay Lodging in Davis WV",
  description:
    "Practical Davis, WV lodging for contractors, crews, and traveling workers, with Wi-Fi, refrigerators, laundry machines, ice, and group booking options."
};

const crewAmenities = [
  "Free Wi-Fi",
  "In-room refrigerator",
  "Private bathroom",
  "Laundry machines",
  "Ice machine",
  "Irons and ironing boards",
  "Flat-screen TV and DirecTV",
  "Group booking options by phone"
];

const crewFaqs = [
  {
    question: "Does Alpine Lodge accommodate contractors and work crews?",
    answer:
      "Yes. Contractors, crews, and traveling workers can call Alpine Lodge to discuss room availability and group booking options for work in the Davis and Tucker County area."
  },
  {
    question: "What room amenities are useful for a longer work stay?",
    answer:
      "Rooms include free Wi-Fi, a refrigerator, private bathroom, flat-screen TV, and DirecTV. The property also has laundry machines, an ice machine, and irons and ironing boards."
  },
  {
    question: "Are special group rates available for crews?",
    answer:
      "Group booking options are available. Call Alpine Lodge with the work dates, number of rooms, and expected length of stay to discuss current options."
  },
  {
    question: "How do I check current rates and availability?",
    answer:
      "Use the direct Cloudbeds booking page for live public rates and availability, or call Alpine Lodge to discuss a multi-room crew stay."
  }
];

export default function CrewLodgingPage() {
  const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;
  const workStayQuote = guestQuotes.find((quote) => quote.segment === "work");
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: crewFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <JsonLd data={faqJson} />
      <PageHero
        eyebrow="Crew lodging in Davis, West Virginia"
        title="Crew rooms without the housing headache."
        copy="A practical Davis base for contractors, project teams, and traveling workers who need the essentials handled between workdays."
        image="/images/alpine-lodge-two-queen-room.jpg"
        alt="Two-bed guest room at Alpine Lodge for crews working near Davis, West Virginia"
        primary="Check Live Availability"
        secondaryHref="/contact"
        secondary="Contact The Lodge"
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">The short answer</p>
            <h2>Working near Davis, Thomas, Canaan Valley, or Tucker County?</h2>
          </div>
          <div className="prose">
            <p>
              Alpine Lodge gives crews a straightforward place to stay between
              workdays. Rooms include the practical basics workers use, and the lodge
              can discuss group booking options by phone.
            </p>
            <p>
              Public room rates start at $99 on select dates. Current rates, room types,
              and availability depend on the dates and should be confirmed through
              direct booking or with the lodge.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Useful between shifts"
            title="The work-stay basics are already here."
            copy="A private room, a place to keep food and drinks cold, and simple property amenities for resetting after the workday."
          />
          <div className="amenity-grid">
            {crewAmenities.map((amenity) => (
              <div className="amenity-item" key={amenity}>
                <CheckCircle2 aria-hidden="true" size={19} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {workStayQuote && (
        <section className="section">
          <div className="container">
            <SectionIntro
              eyebrow="5/5 Google review from a business traveler"
              title="A work stay described as quiet and a great value."
              copy="The reviewer had planned a two-week stay for work before the job was cut short."
            />
            <div className="review-grid review-grid-single">
              <ReviewCard quote={workStayQuote} />
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container booking-note">
          <div>
            <p className="eyebrow">Booking several rooms?</p>
            <h2>Call with the dates, room count, and expected length of stay.</h2>
            <p>
              The lodge can confirm current availability and discuss group booking
              options. For a single room, the direct booking page is the fastest way
              to see live rates.
            </p>
            <p>
              <a className="text-link" href={phoneHref}>
                <Phone aria-hidden="true" size={17} />
                {site.phone}
              </a>
            </p>
          </div>
          <div className="hero-actions">
            <a className="button button-secondary" href={phoneHref}>Call The Lodge</a>
            <BookingButton>Check Live Rates</BookingButton>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container faq-teaser">
          <div>
            <p className="eyebrow">Crew stay FAQ</p>
            <h2>Clear answers for the person booking the rooms.</h2>
            <p>
              Confirm current dates, rates, policies, and room availability before
              committing a crew to the stay.
            </p>
          </div>
          <div className="faq-list compact-faq">
            {crewFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
