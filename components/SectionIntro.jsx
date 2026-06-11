export function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-intro section-intro-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
