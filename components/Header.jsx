"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { MapPin, Menu, Phone, X } from "lucide-react";
import { formattedAddress, nav, rateSignal, site } from "@/data/site";
import { BookingButton } from "./BookingButton";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const phoneHref = `tel:${site.phone.replace(/[^+\d]/g, "")}`;

  return (
    <header className="site-header">
      <div className="top-strip">
        <span>
          <MapPin aria-hidden="true" size={15} />
          {formattedAddress()}
        </span>
        <a href={phoneHref}>{site.phone}</a>
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
        <nav
          id="primary-navigation"
          className={`main-nav ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            href="/rates"
            className="rate-badge hdr-rates-btn"
            aria-label="View rooms from 99 dollars on select dates and current rate guidance"
          >
            <strong>{rateSignal.eyebrow}</strong>
            <em>{rateSignal.headerNote}</em>
          </Link>
          <BookingButton compact variant="primary" />
          <a className="hdr-call" href={phoneHref} aria-label="Call Alpine Lodge">
            <Phone aria-hidden="true" size={18} />
          </a>
          <button
            className="mobile-menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </div>
    </header>
  );
}
