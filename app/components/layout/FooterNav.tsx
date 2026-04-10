"use client";
import { LINK_ARR } from "@/lib/constants";
import Link from "next/link";
import { useHashNavigation } from "@/app/hooks/useHashNavigation";

const FooterNav = () => {
  const { handleLinkClick } = useHashNavigation();

  return (
    <div className="">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        {LINK_ARR.map((el) => (
          <li key={el.text}>
            <Link
              className="text-sm md:text-base"
              href={`/#${el.link}`}
              onClick={handleLinkClick}
            >
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNav;
