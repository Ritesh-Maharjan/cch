"use client";

import { useEffect } from "react";

export default function HashScroll() {
  useEffect(() => {
    if (!window.location.hash) return;

    const el = document.querySelector(window.location.hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return null;
}