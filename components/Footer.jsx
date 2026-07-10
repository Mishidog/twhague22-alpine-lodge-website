import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { nav, partnerLinks, site } from "@/data/site";
import { BookingButton } from "./BookingButton";

const iconMap = {
  Instagram,
  Facebook,
  YouTube: Youtube,
  TikTok: Instagram
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <div>
          <p className="eyebrow">Ready for Davis?</p>
          <h2>Book the Davis room. Spend the trip outside.</h2>
          <p>
            Use Alpine Lodge for Blackwater Falls, Canaan Valley, Timberline,
            Thomas, and nearby Tucker County stops.
          </p>
        </div>
        <BookingButton>Check Availability</BookingButton>
      </div>
      <div className="footer-grid">
        <div>
          <h3>Alpine Lodge</h3>
          <p>
            Rooms from $99 on select dates in Davis, West Virginia for travelers
            who came for waterfalls, trails, skiing, food, music, and mountain air.
          </p>
          <div className="contact-stack">
            <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
              <Phone aria-hidden="true" size={17} />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail aria-hidden="true" size={17} />
              {site.email}
            </a>
            <a href="/contact">
              <MapPin aria-hidden="true" size={17} />
              {site.address.street}, {site.address.city}, {site.address.state}
            </a>
          </div>
        </div>
        <div>
          <h3>Site</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/crew-lodging-davis-wv">Crew Lodging</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/photo-credits">Photo Credits</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Local Links</h3>
          <ul>
            {partnerLinks.slice(0, 5).map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <div className="social-links">
            {site.socials.map((social) => {
              const Icon = iconMap[social.label] || Instagram;
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon aria-hidden="true" size={20} />
                </a>
              );
            })}
          </div>
          <p className="fine-print">
            Experience links are provided for planning. Confirm hours, prices,
            conditions, and policies with each operator.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Alpine Lodge.</span>
        <span>Davis, West Virginia lodging near Blackwater Falls.</span>
      </div>
    </footer>
  );
}
