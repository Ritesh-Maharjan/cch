"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#0c2438]/45 backdrop-blur-sm">
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
    </div>
  );
};

export default Header;
