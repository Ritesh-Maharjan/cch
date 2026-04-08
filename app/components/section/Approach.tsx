"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Approach = () => {
  return (
    <section className=" bg-[#194B75] max-h-2/3 w-screen grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-14">
      <div className="relative">
        <Image className="object-cover" src="/aproach-bg.webp" alt="" fill />
      </div>

      <motion.div
        className="max-w-125 row-start-2 md:row-start-1 md:col-start-2 py-24 px-4 flex flex-col gap-6 md:gap-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <span className="text-xl w-fit rounded-full font-heading font-bold">
          Our Approach
        </span>
        <h2 className="flex flex-col w-fit text-2xl lg:text-4xl font-extralight leading-8 md:leading-15">
          Partners in Performance
        </h2>
        <p>
          We provide strategic equity investments designed to fuel sustainable
          growth and lasting partnerships. Rooted in principled decision-making,
          our mission is to provide exclusive access to aligned capital
          strategies that deliver a competitive advantage.We provide strategic
          equity investments designed to fuel sustainable growth and lasting
          partnerships. Rooted in principled decision-making, our
        </p>
      </motion.div>
    </section>
  );
};

export default Approach;
