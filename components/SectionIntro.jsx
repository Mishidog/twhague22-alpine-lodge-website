export function SectionIntro({ eyebrow, title, copy, align = "left", heading = "h2" }) {
  const Heading = heading;

  return (
    <div className={`section-intro section-intro-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading>{title}</Heading>
      {copy && <p>{copy}</p>}
    </div>
  );
}
