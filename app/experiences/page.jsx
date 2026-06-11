import { ExperienceCard } from "@/components/ExperienceCard";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { experiences, partnerLinks } from "@/data/site";

export const metadata = {
  title: "Things To Do Near Davis WV",
  description:
    "Explore Blackwater Falls, Canaan Valley, Timberline Mountain, White Grass, Dolly Sods, Thomas, hiking, skiing, pet-friendly trips, and budget-friendly activities from Alpine Lodge."
};

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Explore from Alpine Lodge"
        title="Things to do near Davis, WV without turning lodging into the whole trip cost."
        copy="Use Alpine Lodge as the central base for waterfalls, ski areas, trails, food, music, scenic drives, and pet-friendly mountain weekends."
        image="/images/blackwater-falls.jpg"
        alt="Blackwater Falls near Alpine Lodge in Davis, WV"
        secondaryHref="/trip-guides"
        secondary="View Trip Guides"
      />
      <section className="section">
        <div className="container">
          <SectionIntro
            eyebrow="Experience pages"
            title="Choose the trip first. Book the room that keeps it practical."
            copy="Each page includes the details visitors need: distance, likely cost level, best season, official links, and why Alpine Lodge works as the home base."
          />
          <div className="card-grid">
            {experiences.map((item) => (
              <ExperienceCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Official planning links"
            title="Check changing details before you go."
            copy="Hours, prices, tickets, road access, trail conditions, and weather can change. Use these official sites for the current details."
          />
          <div className="partner-pill-grid">
            {partnerLinks.map((item) => (
              <a href={item.href} key={item.href} target="_blank" rel="noopener noreferrer">
                <strong>{item.name}</strong>
                <span>{item.type}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
