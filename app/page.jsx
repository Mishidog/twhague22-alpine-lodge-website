import Image from "next/image";
import Link from "next/link";
import {
  Bath,
  Bike,
  Car,
  CheckCircle2,
  Dog,
  MapPinned,
  Mountain,
  Music,
  PawPrint,
  Refrigerator,
  Snowflake,
  Trees,
  Tv,
  Wifi
} from "lucide-react";
import { BookingButton, SecondaryLink } from "@/components/BookingButton";
import { ExperienceCard } from "@/components/ExperienceCard";
import { JsonLd } from "@/components/JsonLd";
import { SectionIntro } from "@/components/SectionIntro";
import {
  amenityHighlights,
  distances,
  experiences,
  faqs,
  guestQuotes,
  highlights,
  rateSignal,
  rooms,
  tripGuides
} from "@/data/site";

export const metadata = {
  title: "Davis WV Lodging Near Blackwater Falls & Canaan Valley",
  description:
    "Alpine Lodge offers Davis, WV rooms from $99 on select dates near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, trails, skiing, food, and music."
};

const activityIcons = [
  { label: "Waterfalls", icon: Trees },
  { label: "Skiing", icon: Snowflake },
  { label: "Hiking", icon: Mountain },
  { label: "Biking", icon: Bike },
  { label: "Food & music", icon: Music },
  { label: "Pet-friendly rooms", icon: Dog }
];

const amenityIcons = {
  bath: Bath,
  booking: CheckCircle2,
  paw: PawPrint,
  refrigerator: Refrigerator,
  tv: Tv,
  wifi: Wifi
};

export default function HomePage() {
  const faqJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 6).map((faq) => ({
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
      <section className="home-hero">
        <Image
          src="/images/alpine-lodge-exterior.jpg"
          alt="Alpine Lodge exterior in Davis, West Virginia"
          fill
          priority
          sizes="100vw"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Rooms from $99 on select dates in Davis, West Virginia</p>
          <h1>Your Davis basecamp for Blackwater Falls, Canaan Valley, Timberline & Thomas.</h1>
          <p>
            Check in on Sawmill Lane, then point the day toward waterfalls, trails,
            skiing, food, music, and mountain air.
          </p>
          <div className="hero-actions">
            <BookingButton>Reserve Your Room</BookingButton>
            <SecondaryLink href="/experiences">Explore The Area</SecondaryLink>
          </div>
          <div className="hero-facts" aria-label="Alpine Lodge highlights">
            {highlights.slice(0, 4).map((item) => (
              <span key={item}>
                <CheckCircle2 aria-hidden="true" size={16} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="quick-plan band">
        <div className="container quick-plan-grid">
          {activityIcons.map(({ label, icon: Icon }) => (
            <Link key={label} href="/experiences" className="quick-item">
              <Icon aria-hidden="true" size={22} />
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">The Alpine Lodge lane</p>
            <h2>Not a luxury resort. A smarter place to start the trip.</h2>
          </div>
          <div className="prose">
            <p>
              You are booking a room in Davis, not a resort itinerary. That is the
              point. Alpine Lodge puts value-minded travelers close to the Tucker
              County places they already searched for.
            </p>
            <p>
              Sleep here, keep the plan flexible, and use the rest of the trip
              spend for lift tickets, local food, gear, music, gas, and one more
              stop before heading home.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Essentials at a glance"
            title="Check the room basics in ten seconds."
            copy="Private bath, Wi-Fi, refrigerator, TV, direct booking, and designated pet-friendly rooms when the right room is available."
          />
          <div className="amenity-proof-grid">
            {amenityHighlights.map((item) => {
              const Icon = amenityIcons[item.icon] || CheckCircle2;

              return (
                <div key={item.title} className="amenity-proof-card">
                  <Icon aria-hidden="true" size={24} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Explore from Alpine Lodge"
            title="One room. A whole weekend of options."
            copy="Pick the trip first: waterfall morning, ski day, bike ride, Thomas show, rainy-day food loop, dog-friendly drive, or a little of everything."
          />
          <div className="card-grid">
            {experiences.slice(0, 6).map((item) => (
              <ExperienceCard key={item.slug} item={item} compact />
            ))}
          </div>
          <div className="section-actions">
            <SecondaryLink href="/experiences">See All Experiences</SecondaryLink>
          </div>
        </div>
      </section>

      <section className="section section-muted pet-friendly-callout">
        <div className="container pet-callout">
          <PawPrint aria-hidden="true" size={38} />
          <div>
            <p className="eyebrow">Pet-friendly rooms</p>
            <h2>Bring the dog, but book the right room.</h2>
            <p>
              Designated pet-friendly rooms are available for mountain weekends and
              road trips through Davis. Because policies and room availability can
              change, confirm the current pet details before you arrive.
            </p>
          </div>
          <BookingButton>Check Pet-Friendly Availability</BookingButton>
        </div>
      </section>

      <section className="section">
        <div className="container location-panel">
          <div>
            <p className="eyebrow">Central Davis location</p>
            <h2>About 5 to 20 minutes from the area's big reasons to visit.</h2>
            <p>
              Davis works as the center point: Blackwater Falls for the classic
              view, Canaan Valley and Timberline for mountain recreation, Thomas
              for music and food, and Alpine Lodge for the room.
            </p>
            <div className="hero-actions">
              <SecondaryLink href="/location">View Location Details</SecondaryLink>
              <BookingButton>Book The Basecamp</BookingButton>
            </div>
          </div>
          <div className="distance-list">
            {distances.map((item) => (
              <div key={item.place} className="distance-row">
                <MapPinned aria-hidden="true" size={20} />
                <div>
                  <strong>{item.place}</strong>
                  <span>{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container hub-map-section">
          <div>
            <p className="eyebrow">The center-point advantage</p>
            <h2>Alpine Lodge sits in the middle of the trip, not off to the side.</h2>
            <p>
              Davis works because the weekend can go in several directions without
              changing hotels: waterfall morning, valley afternoon, dinner in town,
              or a ski day when the snow is right.
            </p>
          </div>
          <div className="hub-map" aria-label="Alpine Lodge hub map">
            <span className="hub-center">Alpine Lodge<br />Davis, WV</span>
            <span className="hub-node node-one">Blackwater Falls<br /><em>~5 min</em></span>
            <span className="hub-node node-two">Thomas<br /><em>~10 min</em></span>
            <span className="hub-node node-three">Canaan Valley<br /><em>~15 min</em></span>
            <span className="hub-node node-four">Timberline<br /><em>~20 min</em></span>
            <span className="hub-node node-five">White Grass<br /><em>~20 min</em></span>
            <span className="hub-node node-six">Dolly Sods<br /><em>Plan ahead</em></span>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container rooms-strip">
          <div>
            <p className="eyebrow">Rooms for after the day outside</p>
            <h2>Shower, fridge, Wi-Fi, TV, sleep. Then go again.</h2>
            <p>
              The room is not the destination. It is where you drop the bags,
              cool the drinks, charge the phone, and reset for tomorrow.
            </p>
            <BookingButton>Check Availability</BookingButton>
          </div>
          <div className="room-preview-grid">
            {rooms.map((room) => (
              <div key={room.title} className="room-preview">
                <Image src={room.image} alt={room.alt} fill sizes="(max-width: 900px) 100vw, 20vw" />
                <span>{room.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container rate-panel">
          <div>
            <p className="eyebrow">{rateSignal.eyebrow}</p>
            <h2>{rateSignal.headline}</h2>
            <p>{rateSignal.body}</p>
          </div>
          <BookingButton>{rateSignal.cta}</BookingButton>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Practical trip guides"
            title="Plans visitors can use before they call."
            copy="These guides are written for the likely Alpine guest: someone who wants the mountains, a fair room, and a weekend worth the drive."
          />
          <div className="guide-grid">
            {tripGuides.map((guide) => (
              <Link href={`/trip-guides/${guide.slug}`} key={guide.slug} className="guide-card">
                <Image src={guide.image} alt="" fill sizes="(max-width: 760px) 100vw, 25vw" />
                <div>
                  <p className="eyebrow">Trip guide</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {guestQuotes.length > 0 && (
        <section className="section section-muted">
          <div className="container">
            <SectionIntro
              eyebrow="What guests say"
              title="Proof from people who used Alpine Lodge as their basecamp."
              copy="Short verified reviews help future guests understand what the stay is really like."
            />
            <div className="review-grid">
              {guestQuotes.map((quote) => (
                <figure key={`${quote.source}-${quote.text}`} className="review-card">
                  <blockquote>{quote.text}</blockquote>
                  <figcaption>
                    <strong>{quote.name}</strong>
                    <span>{quote.source}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section-muted">
        <div className="container faq-teaser">
          <div>
            <p className="eyebrow">Good answers build confidence</p>
            <h2>Know what to expect before you arrive.</h2>
            <p>
              Clear details about pets, check-in, Wi-Fi, ski access, local food,
              and booking help travelers decide without hunting across three tabs.
            </p>
          </div>
          <div className="faq-list compact-faq">
            {faqs.slice(0, 4).map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
            <Link className="text-link" href="/faq">
              Read all FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="section final-booking">
        <div className="container final-booking-inner">
          <Car aria-hidden="true" size={34} />
          <h2>Make Davis your launch point.</h2>
          <p>
            Reserve Alpine Lodge, then build the trip around waterfalls, ski areas,
            trails, music, food, and the people you came with.
          </p>
          <BookingButton>Reserve Now</BookingButton>
        </div>
      </section>
    </>
  );
}
