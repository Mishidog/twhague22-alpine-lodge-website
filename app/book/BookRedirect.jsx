"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";
import { site } from "@/data/site";

// Brief stopover so the analytics pageview registers before leaving the site.
export function BookRedirect() {
  useEffect(() => {
    track("Booking Link Clicked");

    const timer = setTimeout(() => {
      window.location.replace(site.bookingUrl);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="section">
      <div className="container" style={{ textAlign: "center", padding: "6rem 0" }}>
        <p className="eyebrow">One moment</p>
        <h1>Taking you to our secure booking site&hellip;</h1>
        <p>
          If nothing happens, <a href={site.bookingUrl}>continue to booking</a>.
        </p>
      </div>
    </section>
  );
}
