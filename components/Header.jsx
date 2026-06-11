import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { nav, site } from "@/data/site";
import { BookingButton } from "./BookingButton";

export function Header() {
  return (
    <header className="site-header">
      <div className="top-strip">
        <span>
          <MapPin aria-hidden="true" size={15} />
          850 Sawmill Lane, Davis, WV
        </span>
        <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a>
      </div>
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="Alpine Lodge home">
          <Image
            src="/images/alpine-lodge-logo.png"
            alt="Alpine Lodge"
            width={210}
            height={96}
            priority
          />
        </Link>
        <nav className="main-nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <BookingButton compact />
      </div>
    </header>
  );
}
