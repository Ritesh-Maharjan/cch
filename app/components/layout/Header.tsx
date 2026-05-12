"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./HeaderNav";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 w-full bg-navy-dark/45 backdrop-blur-sm"
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <header className="flex items-center justify-between max-w-7xl mx-auto px-4 py-4">
        <Link href="/" onClick={handleLogoClick}>
          <div>
            <Image
              className="hidden w-40 lg:w-56 md:block cursor-pointer"
              src="/logo.svg"
              alt="CCH-Investment Logo"
              width={250}
              height={41}
            />
            <Image
              className="md:hidden cursor-pointer"
              src="/mobile-logo.svg"
              alt="CCH-Investment Logo"
              width={41}
              height={41}
            />
          </div>
        </Link>
        <Nav />
      </header>
    </motion.div>
  );
};

export default Header;
