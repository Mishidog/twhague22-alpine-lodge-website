import Image from "next/image";
import { BookingButton, SecondaryLink } from "./BookingButton";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  alt,
  primary = "Reserve Now",
  secondaryHref,
  secondary = "Explore"
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {copy && <p className="lead">{copy}</p>}
        <div className="hero-actions">
          <BookingButton>{primary}</BookingButton>
          {secondaryHref && <SecondaryLink href={secondaryHref}>{secondary}</SecondaryLink>}
        </div>
      </div>
      {image && (
        <div className="page-hero-image">
          <Image src={image} alt={alt} fill sizes="(max-width: 900px) 100vw, 44vw" priority />
        </div>
      )}
    </section>
  );
}
