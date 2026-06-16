import { TripPlanner } from "@/components/TripPlanner";
import { BookingButton } from "@/components/BookingButton";

export const metadata = {
  title: "Davis WV Trip Planner",
  description:
    "Plan a Davis, WV trip with Alpine Lodge as the room for Blackwater Falls, Canaan Valley, Timberline Mountain, Thomas, hiking, skiing, food, and music."
};

export default function TripPlannerPage() {
  return (
    <>
      <section className="simple-page planner-hero">
        <p className="eyebrow">Alpine trip planner</p>
        <h1>Ask for a Davis-area trip plan.</h1>
        <p>
          Build a weekend around your dates, group, budget, pets, ski plans,
          waterfalls, food, music, or rainy weather.
        </p>
        <BookingButton>Reserve Your Basecamp</BookingButton>
      </section>
      <section className="section section-muted">
        <div className="container">
          <TripPlanner />
        </div>
      </section>
    </>
  );
}
