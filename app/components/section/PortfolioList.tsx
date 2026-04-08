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
        <Link key={el.id} href={"/portfolios/" + el.slug}>
          <motion.div
            className="md:border-2 group md:hover:text-black md:hover:bg-white transition-all duration-500 ease-in min-h-50 flex flex-col md:flex-row lg:gap-20 cursor-pointer"
          >
            <div className="relative w-full h-60 md:w-113 md:h-auto overflow-hidden">
              <Image
                className="
                  object-cover grayscale
                  md:group-hover:grayscale-0 md:group-hover:scale-105
                  transition-all duration-500 ease-in
                "
                src={el.acf.cover_image}
                alt={el.title.rendered}
                fill
              />
              <Image
                className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 brightness-0 w-xs"
                src={el.acf.project_logo}
                alt={el.title.rendered}
                height={80}
                width={240}
              />
            </div>

            <motion.div
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="py-10 md:py-0 px-4.5 self-center flex flex-col gap-4 md:max-h-38 overflow-hidden"
            >
              <h2 className="text-2xl font-heading">{el.title.rendered}</h2>
              <p className="md:max-w-[70ch]">{el.excerpt.rendered}</p>
            </motion.div>
          </motion.div>
        </Link>
      ))}
    </motion.section>
  );
};

export default PortfolioList;
