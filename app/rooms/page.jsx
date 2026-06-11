import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { amenities, rooms } from "@/data/site";

export const metadata = {
  title: "Rooms",
  description:
    "Book simple, budget-friendly rooms at Alpine Lodge in Davis, WV with private bathroom, refrigerator, flat-screen TV, Wi-Fi, DirecTV, and pet-friendly options."
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms at Alpine Lodge"
        title="Practical Davis lodging for people who came to explore."
        copy="Private bathroom, refrigerator, flat-screen TV, Wi-Fi, DirecTV, and designated pet-friendly rooms make Alpine Lodge a simple place to reset between mountain days."
        image="/images/alpine-lodge-room.jpg"
        alt="Guest room at Alpine Lodge in Davis, WV"
        secondaryHref="/faq"
        secondary="Read FAQs"
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What to expect"
            title="The essentials without the resort markup."
            copy="Alpine Lodge is built for travelers who want a clean, straightforward place near the area's activities."
          />
          <div className="amenity-grid">
            {amenities.map((item) => (
              <div key={item} className="amenity-item">
                <CheckCircle2 aria-hidden="true" size={19} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container room-detail-grid">
          {rooms.map((room) => (
            <article key={room.title} className="room-detail">
              <div className="room-detail-image">
                <Image src={room.image} alt={room.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
              </div>
              <div>
                <h2>{room.title}</h2>
                <p>{room.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container booking-note">
          <div>
            <p className="eyebrow">Direct booking</p>
            <h2>Check rates and availability through Alpine Lodge reservations.</h2>
            <p>
              For pet-friendly rooms, group questions, early check-in requests, and
              current policies, reserve directly or contact the lodge before arrival.
            </p>
          </div>
          <BookingButton>Check Availability</BookingButton>
        </div>
      </section>
    </>
  );
}
