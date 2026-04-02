"use client";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const linkArr = [
  { text: "ABOUT US", link: "/#about-us" },
  { text: "OUR EDGE", link: "/#our-edge" },
  { text: "OUR APPROACH", link: "/#our-approach" },
  { text: "PORTFOLIO", link: "/#portfolio" },
  { text: "CONTACT US", link: "/#contact-us" },
];

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href") || "";
    const isHomeHash = href.startsWith("/#");

    if (window.location.pathname === "/" && isHomeHash) {
      e.preventDefault();
      const hash = "#" + href.split("#")[1];
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    setIsMenuActive(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuActive(false);
    window.location.href = "/";
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav>
      <div className="hidden md:block">
        <ul className="flex gap-2 items-center lg:gap-6">
          {linkArr.map((el) => (
            <li key={el.text}>
              <Link
                className="text-xs lg:text-base"
                href={el.link}
                onClick={handleLinkClick}
              >
                {el.text}
              </Link>
            </li>
          ))}
          <Button variant="primary">Apply Now</Button>
        </ul>
      </div>

      <div className="relative">
        <motion.button
          onClick={() => setIsMenuActive(!isMenuActive)}
          className="absolute group flex flex-col gap-2 cursor-pointer tracking-wider top-0 right-0 md:hidden z-51"
        >
          <motion.span
            className="w-14 h-1 block bg-white"
            animate={
              isMenuActive
                ? { rotate: 45, y: 10, width: "56px" }
                : { rotate: 0, y: 0, width: "37px" }
            }
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-14 h-1 block bg-white"
            animate={
              isMenuActive
                ? { rotate: -45, y: -2 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {isMenuActive && (
          <>
            <div className="fixed inset-0 bg-[#0C2438] w-screen h-screen md:hidden z-50 animate-fadeIn" />
            <div className="fixed inset-0 flex flex-col justify-start pt-32 p-6 md:hidden z-50 animate-fadeIn">
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                <Link href="/" onClick={handleLogoClick} className="text-white text-2xl font-bold">
                  <Image
                    className="md:hidden cursor-pointer"
                    src="/mobile-logo.svg"
                    alt="CCH-Investment Logo"
                    width={41}
                    height={41}
                  />
                </Link>
              </div>

              <ul className="flex flex-col gap-8 text-3xl">
                <motion.li
                  className="text-xl opacity-60"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={menuVariants}
                >
                  MENU
                </motion.li>
                {linkArr.map((el, i) => (
                  <motion.li
                    key={el.text}
                    custom={i + 1}
                    initial="hidden"
                    animate="visible"
                    variants={menuVariants}
                  >
                    <Link
                      className={`text-white transition-all duration-200 ease-in hover:text-[#00eca6]`}
                      href={el.link}
                      onClick={handleLinkClick}
                    >
                      {el.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
