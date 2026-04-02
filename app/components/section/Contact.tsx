import Image from "next/image";
import React from "react";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  return (
    <section className="bg-[#194B75] w-screen flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-14 md:min-h-screen">
      <div className="relative h-80 sm:h-80 md:h-auto">
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
