import { LINK_ARR } from "@/lib/constants";
import Link from "next/link";

const FooterNav = () => {

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

  return (
    <div className="">
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
        {LINK_ARR.map((el) => (
          <li key={el.text}>
            <Link
              className="text-sm md:text-base"
              href={el.link}
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
