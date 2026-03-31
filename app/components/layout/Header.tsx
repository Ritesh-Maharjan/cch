import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-8 z-50 flex items-center justify-between w-full max-w-312.5 px-4 left-0 right-0">
      <div>
        <Image
          className="hidden w-40 lg:w-56 md:block "
          src="/logo.svg"
          alt="CCH-Investment Logo"
          width={250}
          height={41}
        />
        <Image
          className="md:hidden"
          src="/mobile-logo.svg"
          alt="CCH-Investment Logo"
          width={41}
          height={41}
        />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
