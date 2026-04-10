"use client";

export function useHashNavigation() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    const isHomeHash = href.startsWith("/#");

    if (window.location.pathname === "/" && isHomeHash) {
      e.preventDefault();
      const hash = "#" + href.split("#")[1];
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return { handleLinkClick };
}
