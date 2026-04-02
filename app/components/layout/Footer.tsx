"use client";
import Image from "next/image";

const Footer = () => {

  return (
    <footer className="w-full bg-[#0C2438]">
      <section className="flex flex-col gap-4 md:flex-row md:items-center justify-between max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col gap-4">
          <Image
            src="./logo.svg"
            alt="cch Investment logo"
            height={20}
            width={175}
          />
          <p className="w-75 font-extralight text-[15px]">
            CCH Investments is a Canadian family office that invests in private
            companies with a focus on building lasting value.
          </p>
          <span className="text-[10px] font-extralight">
            CCH INVE STMENTS &copy; COPYRIGHT 2026. ALL RIGHTS RESERVED.
          </span>
        </div>

        <address className="font-extralight">
          Floor 15 - 543 Granville Street <br />
          Vancouver, British Columbia
          <br />
          Canada V6C 1X6
        </address>
      </section>
    </footer>
  );
};

export default Footer;
