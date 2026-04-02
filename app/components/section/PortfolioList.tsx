"use client";

import { PortfolioItem } from "@/lib/wordpress";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const PortfolioList = ({ data }: { data: PortfolioItem[] }) => {
  return (
    <motion.section className="flex flex-col">
      {data.map((el) => (
        <motion.div
          key={el.id}
          className="md:border-2 group md:hover:text-black md:hover:bg-white transition-all duration-500 ease-in min-h-60 flex flex-col md:flex-row md:gap-20"
        >
          <div className="relative w-full h-100 md:w-113 md:h-auto shrink-0 overflow-hidden">
            <Image
              className="
                object-cover grayscale-100
                md:group-hover:grayscale-0 md:group-hover:scale-105
                transition-all duration-500 ease-in
              "
              src={el.acf.cover_image}
              alt={el.title.rendered}
              fill
            />
            <Image
              className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
              src={el.acf.project_logo}
              alt={el.title.rendered}
              height={50}
              width={150}
            />
          </div>

          <motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="py-10 md:py-0 px-4.5 self-center flex flex-col gap-4"
          >
            <h2 className="text-2xl font-heading">{el.title.rendered}</h2>
            <p className="md:max-w-[70ch]">{el.acf.description}</p>
            <Link
              href={"/portfolios/" + el.slug}
              className="self-start text-sm font-semibold border-2 border-gray-900 px-4 py-2 rounded-lg hover:bg-gray-900 hover:text-white transition"
            >
              View Project
            </Link>
          </motion.div>
        </motion.div>
      ))}
    </motion.section>
  );
};

export default PortfolioList;
