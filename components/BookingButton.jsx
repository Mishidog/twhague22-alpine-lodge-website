"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { ArrowUpRight } from "lucide-react";

export function BookingButton({ children = "Reserve Now", className = "", compact = false }) {
  return (
    <Link
      className={`button button-primary ${compact ? "button-compact" : ""} ${className}`}
      href="/book"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("Booking Link Clicked")}
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
