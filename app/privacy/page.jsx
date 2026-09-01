import { SectionIntro } from "@/components/SectionIntro";
import { site } from "@/data/site";

export const metadata = {
  title: "Privacy & Cookies",
  description:
    "How the Alpine Lodge website in Davis, WV handles cookies, browser storage, and visitor privacy."
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container legal-copy">
        <SectionIntro
          eyebrow="Privacy & cookies"
          title="Short version: this site does not track you."
          copy="Here is exactly what this website does and does not do with your information."
        />
        <h3>Cookies</h3>
        <p>
          The Alpine Lodge website does not set tracking or advertising cookies.
          We do not use advertising pixels or third-party tracking scripts on
          this site.
        </p>
        <h3>Analytics</h3>
        <p>
          We use Vercel Web Analytics to count page visits so we know which
          pages help travelers most. It is cookieless and does not identify you
          personally or follow you across other websites. If you choose Decline
          in the cookie notice, analytics is turned off for your visits.
        </p>
        <h3>Your cookie choice</h3>
        <p>
          When you accept or decline cookies in the notice on this site, that
          choice is saved in your own browser&apos;s local storage, on your
          device. It is not sent to us. If we ever add optional features that
          use cookies, they will respect the choice you made.
        </p>
        <h3>Booking and outside links</h3>
        <p>
          Reservations are handled by Cloudbeds on their own website, which has
          its own privacy and cookie practices. Links to parks, outfitters, and
          other local businesses lead to sites we do not control; check their
          policies directly.
        </p>
        <h3>Information you send us</h3>
        <p>
          If you call, email, or book a room, we use that information to manage
          your stay and answer your questions, and for nothing else.
        </p>
        <h3>Questions</h3>
        <p>
          Contact us at <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>.
        </p>
      </div>
    </section>
  );
}
