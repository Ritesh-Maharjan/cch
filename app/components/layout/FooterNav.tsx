"use client";
import { LINK_ARR } from "@/lib/constants";
import Link from "next/link";
import { useHashNavigation } from "@/app/hooks/useHashNavigation";

const FooterNav = () => {
  const { handleLinkClick } = useHashNavigation();

  return (
    <nav aria-label="Footer Navigation">
      <ul className="flex gap-5 items-center">
        {LINK_ARR.map((el) => (
          <li key={el.text}>
            <Link
              className="text-xs md:text-sm"
              href={`/${el.link}`}
              onClick={handleLinkClick}
            >
              {el.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNav;
