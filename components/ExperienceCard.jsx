import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, WalletCards } from "lucide-react";

export function ExperienceCard({ item, hrefPrefix = "/experiences" }) {
  return (
    <Link className="experience-card" href={`${hrefPrefix}/${item.slug}`}>
      <div className="card-image">
        <Image src={item.image} alt={item.alt || item.title} fill sizes="(max-width: 760px) 100vw, 33vw" />
      </div>
      <div className="card-body">
        <p className="eyebrow">{item.eyebrow || item.audience}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        {item.distance && (
          <div className="meta-row">
            <span>
              <Clock aria-hidden="true" size={15} />
              {item.distance}
            </span>
            <span>
              <WalletCards aria-hidden="true" size={15} />
              {item.budget}
            </span>
          </div>
        )}
        <span className="text-link">
          Plan this trip <ArrowRight aria-hidden="true" size={16} />
        </span>
      </div>
    </Link>
  );
}
