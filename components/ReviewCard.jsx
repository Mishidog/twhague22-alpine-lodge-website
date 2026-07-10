import { Star } from "lucide-react";

export function ReviewCard({ quote }) {
  return (
    <figure className="review-card">
      <div className="review-rating" aria-label={`${quote.rating} out of 5 stars`}>
        {Array.from({ length: quote.rating }, (_, index) => (
          <Star aria-hidden="true" fill="currentColor" key={index} size={16} />
        ))}
        <span>{quote.rating}/5</span>
      </div>
      <blockquote>&ldquo;{quote.text}&rdquo;</blockquote>
      {quote.context && <p className="review-context">{quote.context}</p>}
      <figcaption>
        <strong>{quote.name}</strong>
        <a href={quote.sourceUrl} target="_blank" rel="noopener noreferrer">
          {quote.source}
        </a>
      </figcaption>
    </figure>
  );
}
