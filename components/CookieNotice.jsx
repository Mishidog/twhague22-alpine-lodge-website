"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "al-cookie-consent";

export function getCookieConsent() {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getCookieConsent()) {
      setVisible(true);
    }
  }, []);

  const choose = (value) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Storage unavailable; the notice will show again next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-notice" role="region" aria-label="Cookie notice">
      <p>
        Alpine Lodge does not use tracking cookies. Your choice here is saved in
        your browser so future site features can respect it. Booking runs on
        Cloudbeds, which has its own policy.{" "}
        <Link href="/privacy">Privacy &amp; Cookies</Link>
      </p>
      <div className="cookie-notice-actions">
        <button type="button" className="button button-secondary" onClick={() => choose("declined")}>
          Decline
        </button>
        <button type="button" className="button button-primary" onClick={() => choose("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
