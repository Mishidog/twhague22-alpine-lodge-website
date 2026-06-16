import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { tripGuides } from "@/data/site";

export const metadata = {
  title: "Davis WV Trip Guides",
  description:
    "Davis, WV trip guides for Alpine Lodge guests, including ski weekends, rainy days, pet-friendly travel, Blackwater Falls, Thomas, Canaan Valley, and local food."
};

export default function TripGuidesPage() {
  return (
    <>
      <PageHero
        eyebrow="Practical trip guides"
        title="A better mountain weekend starts before you pack the car."
        copy="Use these guides to plan what to do, where to go, what to check, and how to use Alpine Lodge as the Davis room for the trip."
        image="/images/alpine-lodge-local-view.jpg"
        alt="Mountain scenery near Davis, West Virginia"
        secondaryHref="/trip-planner"
        secondary="Use Planner"
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Choose a guide"
            title="Built for travelers who want the area more than the lobby."
            copy="These are not luxury itineraries. They are clear plans for people who want waterfalls, ski days, food, music, and a sensible room in Davis."
          />
          <div className="guide-list">
            {tripGuides.map((guide) => (
              <Link href={`/trip-guides/${guide.slug}`} key={guide.slug} className="guide-list-card">
                <div className="guide-list-image">
                  <Image src={guide.image} alt="" fill sizes="(max-width: 760px) 100vw, 24vw" />
                </div>
                <div>
                  <p className="eyebrow">Trip guide</p>
                  <h2>{guide.title}</h2>
                  <p>{guide.description}</p>
                  <span className="text-link">
                    Open guide <ArrowRight aria-hidden="true" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
