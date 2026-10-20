import { Mail, MapPin, Phone } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { PageHero } from "@/components/PageHero";
import { formattedAddress, mapUrl, pageMetadata, phoneTelHref, site } from "@/data/site";

export const metadata = pageMetadata({
  title: "Contact Alpine Lodge, Davis WV | 304-259-5245 & Directions",
  description:
    "Contact Alpine Lodge in Davis, WV. Find the address, phone, email, direct booking link, and directions for lodging near Blackwater Falls and Canaan Valley.",
  path: "/contact"
});

export default function ContactPage() {
  const mapHref = mapUrl();

  return (
    <>
      <PageHero
        eyebrow="Contact Alpine Lodge"
        title="Book the room. Ask the question. Start from Davis."
        copy="Use direct reservations for availability, or contact Alpine Lodge for room, pet, group, and arrival questions."
        image="/images/alpine-lodge-exterior.jpg"
        alt="Exterior of Alpine Lodge in Davis, West Virginia"
        secondaryHref="/location"
        secondary="View Location"
      />
      <section className="section">
        <div className="container contact-grid">
          <a href={mapHref} target="_blank" rel="noopener noreferrer" className="contact-card">
            <MapPin aria-hidden="true" size={24} />
            <span>Address</span>
            <strong>{formattedAddress()}</strong>
          </a>
          <a href={phoneTelHref()} className="contact-card">
            <Phone aria-hidden="true" size={24} />
            <span>Phone</span>
            <strong>{site.phone}</strong>
          </a>
          <a href={`mailto:${site.email}`} className="contact-card">
            <Mail aria-hidden="true" size={24} />
            <span>Email</span>
            <strong>{site.email}</strong>
          </a>
        </div>
      </section>
      <section className="section section-muted">
        <div className="container booking-note">
          <div>
            <p className="eyebrow">Fastest path</p>
            <h2>For rates and availability, use the current Alpine Lodge booking site.</h2>
            <p>
              The Reserve Now button opens the active Cloudbeds reservation page in
              a new tab.
            </p>
          </div>
          <BookingButton>Open Booking Site</BookingButton>
        </div>
      </section>
    </>
  );
}
