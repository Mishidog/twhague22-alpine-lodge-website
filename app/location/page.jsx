import { Clock, ExternalLink, MapPinned } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { PageHero } from "@/components/PageHero";
import { SectionIntro } from "@/components/SectionIntro";
import { distances, partnerLinks, site } from "@/data/site";

export const metadata = {
  title: "Location",
  description:
    "Stay at Alpine Lodge in Davis, WV, about 5 minutes from Blackwater Falls, 15 minutes from Canaan Valley, and 20 minutes from Timberline and White Grass."
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Davis, WV location"
        title="Stay in Davis, then choose the day from there."
        copy="Alpine Lodge sits at 850 Sawmill Lane in Davis, West Virginia, close to waterfalls, ski areas, trails, food, music, and scenic drives."
        image="/images/downtown-davis-wv.jpeg"
        alt="Downtown Davis, West Virginia near Alpine Lodge"
        secondaryHref="/experiences"
        secondary="Plan Experiences"
      />
      <section className="section">
        <div className="container location-panel">
          <div>
            <p className="eyebrow">Address</p>
            <h2>{site.address.street}, {site.address.city}, {site.address.state} {site.address.postalCode}</h2>
            <p>
              Use Alpine Lodge as the Davis center point for Blackwater Falls,
              Canaan Valley, Timberline Mountain, White Grass, Thomas, and downtown Davis.
            </p>
            <div className="hero-actions">
              <a
                className="button button-secondary"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.postalCode}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Map
              </a>
              <BookingButton>Reserve Nearby</BookingButton>
            </div>
          </div>
          <div className="distance-list">
            {distances.map((item) => (
              <div key={item.place} className="distance-row distance-row-wide">
                <MapPinned aria-hidden="true" size={20} />
                <div>
                  <strong>{item.place}</strong>
                  <span>
                    <Clock aria-hidden="true" size={14} />
                    {item.time}
                  </span>
                  <p>{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Useful local links"
            title="Confirm hours, prices, tickets, and conditions with the official source."
            copy="Alpine Lodge helps frame the trip. Operators and official park resources provide the current day-of details."
          />
          <div className="link-grid">
            {partnerLinks.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                <span>{link.type}</span>
                <strong>{link.name}</strong>
                <ExternalLink aria-hidden="true" size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
