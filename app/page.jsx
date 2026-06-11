import Image from "next/image";
import Link from "next/link";
import {
  Bike,
  Car,
  CheckCircle2,
  Dog,
  MapPinned,
  Mountain,
  Music,
  Snowflake,
  Trees
} from "lucide-react";
import { BookingButton, SecondaryLink } from "@/components/BookingButton";
import { ExperienceCard } from "@/components/ExperienceCard";
import { JsonLd } from "@/components/JsonLd";
import { SectionIntro } from "@/components/SectionIntro";
import { distances, experiences, faqs, highlights, rooms, site, tripGuides } from "@/data/site";

export const metadata = {
  title: "Affordable Davis WV Lodging Near Blackwater Falls & Canaan Valley",
  description:
    "Alpine Lodge is a budget-friendly hotel in Davis, WV near Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Thomas, trails, skiing, food, and music."
};

const activityIcons = [
  { label: "Waterfalls", icon: Trees },
  { label: "Skiing", icon: Snowflake },
  { label: "Hiking", icon: Mountain },
  { label: "Biking", icon: Bike },
  { label: "Food & music", icon: Music },
  { label: "Pet-friendly rooms", icon: Dog }
];

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
          <p className="eyebrow">Budget-friendly lodging in Davis, West Virginia</p>
          <h1>Your affordable basecamp for Blackwater Falls, Canaan Valley, Timberline & Thomas.</h1>
          <p>
            Alpine Lodge keeps the stay simple, central, and practical so you can
            spend the trip on waterfalls, trails, skiing, food, music, and mountain days.
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
              The best reason to stay here is not a lobby you never use. It is the
              location. Alpine Lodge puts budget-conscious travelers close to the
              Davis and Canaan Valley experiences they came for.
            </p>
            <p>
              Sleep comfortably, keep the plan flexible, and use the rest of the
              travel budget for lift tickets, local food, gear, music, gas, and one
              more stop before heading home.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Explore from Alpine Lodge"
            title="One room. A whole weekend of options."
            copy="Plan around the season, your budget, and the kind of trip you want: waterfalls, ski days, hiking, biking, music, food, pets, or a little of everything."
          />
          <div className="card-grid">
            {experiences.slice(0, 6).map((item) => (
              <ExperienceCard key={item.slug} item={item} />
            ))}
          </div>
          <div className="section-actions">
            <SecondaryLink href="/experiences">See All Experiences</SecondaryLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container location-panel">
          <div>
            <p className="eyebrow">Central Davis location</p>
            <h2>Close to the places people search for before they book.</h2>
            <p>
              Alpine Lodge makes the area easier to understand: Davis for the room,
              Blackwater Falls for the classic view, Canaan Valley and Timberline for
              mountain recreation, Thomas for music and food.
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

      <section className="section section-dark">
        <div className="container rooms-strip">
          <div>
            <p className="eyebrow">Rooms that keep the trip practical</p>
            <h2>Clean basics, direct booking, and no resort pretense.</h2>
            <p>
              Rooms include the essentials travelers use after a long day outside:
              private bathroom, refrigerator, flat-screen TV, Wi-Fi, and DirecTV.
            </p>
            <BookingButton>Check Availability</BookingButton>
          </div>
          <div className="room-preview-grid">
            {rooms.map((room) => (
              <div key={room.title} className="room-preview">
                <Image src={room.image} alt={room.alt} fill sizes="(max-width: 900px) 100vw, 20vw" />
                <span>{room.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Budget trip guides"
            title="Plans visitors can use before they ever call."
            copy="These guides are written for the likely Alpine guest: someone who wants the mountains, a fair room, and a weekend that feels worth the drive."
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

      <section className="section section-muted">
        <div className="container faq-teaser">
          <div>
            <p className="eyebrow">Good answers build confidence</p>
            <h2>Know what to expect before you arrive.</h2>
            <p>
              Clear details about pets, check-in, Wi-Fi, ski access, local food,
              and booking help budget travelers feel safe choosing Alpine Lodge.
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
