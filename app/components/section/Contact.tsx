import Image from "next/image";
import React from "react";
import ContactForm from "../ui/ContactForm";

const Contact = () => {
  return (
    <section className="bg-[#194B75] w-screen flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-14 md:min-h-screen">
      <div className="relative h-80 sm:h-80 md:h-auto">
        <Image
          className="object-cover"
          src="/contactus.jpg"
          alt="building"
          fill
        />
      </div>

      <ContactForm className="max-w-125 row-start-2 md:row-start-1 md:col-start-2 py-12 lg:py-24 px-4 flex flex-col gap-6 md:gap-8">
        <p>
          We provide strategic equity investments designed to fuel sustainable
          growth and lasting partnerships.
        </p>
      </ContactForm>
    </section>
  );
};

export default Contact;
