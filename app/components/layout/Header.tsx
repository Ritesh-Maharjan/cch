import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="z-50 flex items-center justify-between mt-8 w-full max-w-312.5 mx-auto">
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
