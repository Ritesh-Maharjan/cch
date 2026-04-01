"use client";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";

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
        {!isMenuActive && (
          <button
            onClick={() => setIsMenuActive(true)}
            className="absolute group flex flex-col gap-2 cursor-pointer tracking-wider top-0 right-0 md:hidden"
          >
            <span className="w-14 h-1 block bg-white transition-all ease-out-expo duration-100 group-hover:w-16 group-hover:ml-2"></span>
            <span className="w-12 h-1 block bg-white transition-all ease-(--transition-timing-function-ease-out-expo) delay-100 group-hover:w-14 group-hover:-ml-2"></span>
          </button>
        )}

        {isMenuActive && (
          <div className="fixed inset-0 bg-black p-4 flex justify-between md:hidden">
            <button
              onClick={() => setIsMenuActive(false)}
              className="text-5xl absolute cursor-pointer right-10"
            >
              &times;
            </button>
            <ul className="flex flex-col justify-center relative h-screen text-3xl">
              <li className="text-xl opacity-40">MENU</li>
              {linkArr.map((el) => (
                <Link
                  className={`transition-all duration-200 ease-in hover:text-[#00eca6] hover:text-4xl hover:ml-2.5 hover:scale-105`}
                  key={el.text}
                  href={el.link}
                  onClick={handleLinkClick}
                >
                  {el.text}
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
