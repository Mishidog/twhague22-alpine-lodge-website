import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Photo Credits",
  description:
    "Photo sources and Creative Commons attribution for destination images used on the Alpine Lodge website."
};

const credits = [
  {
    title: "Dolly Sods autumn road",
    creator: "Bold Frontiers",
    source: "https://www.flickr.com/photos/82955120@N05/22936253412",
    license: "Creative Commons Attribution 3.0 Unported",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    title: "East Avenue in Thomas, West Virginia",
    creator: "Tim Kiser",
    source:
      "https://commons.wikimedia.org/wiki/File:Thomas_West_Virginia_East_Avenue.jpg",
    license: "Creative Commons Attribution-ShareAlike 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/2.5/"
  },
  {
    title: "White Grass Ski Touring Center",
    creator: "White Grass Ski Touring Center",
    source: "https://whitegrass.com/",
    license: "Used from the official experience provider website",
    licenseUrl: "https://whitegrass.com/"
  }
];

export default function PhotoCreditsPage() {
  return (
    <>
      <PageHero
        eyebrow="Image sources"
        title="Photo credits"
        copy="Destination images help visitors see the real places around Alpine Lodge. External photographs are credited here with their original source and license where available."
        image="/images/dolly-sods-autumn-road.jpg"
        alt="Misty autumn road in Dolly Sods Wilderness"
        secondaryHref="/experiences"
        secondary="View Experiences"
      />
      <section className="section">
        <div className="container link-grid">
          {credits.map((credit) => (
            <article className="amenity-proof-card photo-credit-card" key={credit.title}>
              <div>
                <h2>{credit.title}</h2>
                <p>Photo by {credit.creator}.</p>
                <p>
                  <a className="text-link" href={credit.source} target="_blank" rel="noopener noreferrer">
                    Original Source <ExternalLink aria-hidden="true" size={16} />
                  </a>
                </p>
                <p>
                  <a className="text-link" href={credit.licenseUrl} target="_blank" rel="noopener noreferrer">
                    {credit.license} <ExternalLink aria-hidden="true" size={16} />
                  </a>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
