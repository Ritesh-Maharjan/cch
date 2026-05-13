"use client";
import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 0) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sectionIds = ids
      .filter((id) => id.startsWith("#"))
      .map((id) => id.slice(1));

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const intersectingIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingIds.add(entry.target.id);
          } else {
            intersectingIds.delete(entry.target.id);
          }
          const newActiveId =
            [...sectionIds].reverse().find((id) => intersectingIds.has(id)) || "";

          setActiveId(newActiveId);
        });
      },
      {
        rootMargin: `-${offset}px 0px -60% 0px`,
        threshold: 0.1,
      },
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [ids, offset]);

  return activeId;
}
