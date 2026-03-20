import Image from "next/image";
import React from "react";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  return (
    <section className="bg-[#194B75] w-screen min-h-screen grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-14">
      <div className="relative">
        <Image
          className="object-cover"
          src="/contact-bg.webp"
          alt="building"
          fill
        />
      </div>

      <ContactForm />
    </section>
  );
};

export default Contact;
