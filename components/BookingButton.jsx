import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function BookingButton({ children = "Reserve Now", className = "", compact = false }) {
  return (
    <Link
      className={`button button-primary ${compact ? "button-compact" : ""} ${className}`}
      href={site.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" size={compact ? 16 : 18} />
    </Link>
  );
}

export function SecondaryLink({ href, children, className = "" }) {
  return (
    <Link className={`button button-secondary ${className}`} href={href}>
      {children}
    </Link>
  );
}
