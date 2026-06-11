import Link from "next/link";
import { BookingButton } from "@/components/BookingButton";

export default function NotFound() {
  return (
    <section className="simple-page">
      <p className="eyebrow">Page not found</p>
      <h1>This trail does not go where we thought.</h1>
      <p>
        Head back to Alpine Lodge planning pages or reserve a room for your Davis
        trip.
      </p>
      <div className="hero-actions">
        <Link className="button button-secondary" href="/">
          Back Home
        </Link>
        <BookingButton />
      </div>
    </section>
  );
}
