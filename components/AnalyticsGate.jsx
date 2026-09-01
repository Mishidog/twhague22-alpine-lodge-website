"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { getCookieConsent } from "./CookieNotice";

export function AnalyticsGate() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getCookieConsent() !== "declined");
  }, []);

  return enabled ? <Analytics /> : null;
}
