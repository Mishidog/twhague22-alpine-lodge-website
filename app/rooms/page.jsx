import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { amenities, rooms } from "@/data/site";

const roomGallery = [
  {
    src: "/images/alpine-lodge-king-room.jpg",
    alt: "King guest room at Alpine Lodge with a window and seating area"
  },
  {
    src: "/images/alpine-lodge-king-room-2.jpg",
    alt: "King guest room at Alpine Lodge with bedside lamps"
  },
  {
    src: "/images/alpine-lodge-two-queen-room.jpg",
    alt: "Two-bed guest room at Alpine Lodge with a table and chairs"
  },
  {
    src: "/images/alpine-lodge-queen-room.jpg",
    alt: "Guest room at Alpine Lodge with a bed and work table"
  },
  {
    src: "/images/alpine-lodge-three-bed-room.jpg",
    alt: "Spacious Alpine Lodge guest room with three beds"
  },
  {
    src: "/images/alpine-lodge-three-bed-room-2.jpg",
    alt: "Three-bed Alpine Lodge guest room with flat-screen television"
  }
];

export const metadata = {
  title: "Davis WV Hotel Rooms & Amenities",
  description:
    "Book Davis, WV rooms at Alpine Lodge with private bathroom, refrigerator, flat-screen TV, Wi-Fi, DirecTV, and designated pet-friendly options."
};

export default function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms at Alpine Lodge"
        title="A Davis room for people who came to explore."
        copy="Private bathroom, refrigerator, flat-screen TV, Wi-Fi, DirecTV, and designated pet-friendly rooms give travelers the essentials between mountain days."
        image="/images/alpine-lodge-king-room.jpg"
        alt="King guest room at Alpine Lodge in Davis, West Virginia"
        secondaryHref="/faq"
        secondary="Read FAQs"
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="What to expect"
            title="The room details travelers check first."
            copy="Alpine Lodge keeps the stay focused on the basics visitors use before and after waterfalls, ski days, trail time, and evenings in Davis or Thomas."
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
      <section className="section room-gallery-section">
        <div className="container">
          <SectionIntro
            eyebrow="A closer look"
            title="Rooms for a quick overnight or a whole mountain weekend."
            copy="Room layouts and bedding vary. Check the live booking page for the available room type and current details for your dates."
          />
          <div className="room-gallery">
            {roomGallery.map((image, index) => (
              <figure key={image.src} className={`room-gallery-image room-gallery-image-${index + 1}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container booking-note">
          <div>
            <p className="eyebrow">Direct booking</p>
            <h2>Check current rates and availability through Alpine Lodge reservations.</h2>
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
