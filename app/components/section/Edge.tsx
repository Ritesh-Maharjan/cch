"use client";

import { useRef } from "react";
import type { Splide as SplideType } from "@splidejs/react-splide";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";
import { motion } from "framer-motion";

const sectors = [
  {
    img: "https://picsum.photos/seed/1/640/400",
    title: "Real Estate",
    description:
      "Investing in commercial and residential real estate with a focus on long-term appreciation and stable cash flow generation.",
  },
  {
    img: "https://picsum.photos/seed/2/640/400",
    title: "Technology",
    description:
      "Funding innovative technology companies that build scalable digital products and drive transformation across industries.",
  },
  {
    img: "https://picsum.photos/seed/3/640/400",
    title: "Healthcare",
    description:
      "Supporting healthcare initiatives including hospitals, medical research, and biotech startups improving quality of life.",
  },
  {
    img: "https://picsum.photos/seed/4/640/400",
    title: "Renewable Energy",
    description:
      "Developing sustainable energy projects such as solar and wind farms to promote clean and environmentally friendly power.",
  },
  {
    img: "https://picsum.photos/seed/5/640/400",
    title: "Infrastructure",
    description:
      "Investing in large-scale infrastructure projects including transportation networks and smart city developments.",
  },
  {
    img: "https://picsum.photos/seed/6/640/400",
    title: "Finance",
    description:
      "Expanding financial services through fintech solutions, private equity investments, and diversified asset management.",
  },
];
const Edge = () => {
  const splideRef = useRef<SplideType | null>(null);

  return (
    <section className="w-full bg-white text-[#0C2438]">
      <div className="px-4 py-16 xl:px-0 md:py-24 w-screen max-w-312.5 mx-auto">
        <motion.div
          className="flex flex-col gap-4 mb-8 md:gap-6 md:px-4 lg:mb-12"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="text-xl w-fit rounded-full font-heading font-bold">
            Our Edge
          </span>
          <h2 className="flex flex-col w-fit text-2xl lg:text-4xl font-extralight leading-15">
            Our Primary Investment Sectors
          </h2>
          <p className="hidden md:block md:w-128.75">
            CCH Investments is a Canadian family office dedicated to investing
            in private companies with a long-term perspective and a focus on
            building lasting value. Guided by a hands.
          </p>
        </motion.div>

        <div className="relative md:pb-24">
          <Splide
            ref={splideRef}
            options={{
              perPage: 3,
              gap: "78px",
              breakpoints: {
                640: { perPage: 1 },
                1024: { perPage: 3 },
              },
              autoplay: false,
              pagination: false,
              arrows: false,
              rewind: true,
              height: "auto",
              updateOnMove: true,
            }}
            aria-label="My Favorite Images"
          >
            {sectors.map((el, index) => (
              <SplideSlide className="flex h-fit gap-4 flex-col" key={index}>
                <div className="group relative w-full h-64 md:h-115 rounded-xl overflow-hidden">
                  <Image
                    src={el.img}
                    alt={el.title}
                    fill
                    className="object-cover"
                  />
                  <div className="bg-black opacity-80 hidden group-hover:flex  absolute inset-0">
                    <Image
                      className="object-scale-down"
                      src="/web-round.svg"
                      alt=""
                      fill
                    />
                  </div>
                </div>
                <h3 className="md:text-2xl font-heading">{el.title}</h3>
                <p className="leading-8.75 wrap-break-word">{el.description}</p>
              </SplideSlide>
            ))}
          </Splide>

          <div className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none ">
            <button
              onClick={() => splideRef.current?.splide?.go("<")}
              className="pointer-events-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous slide"
            >
              <Image
                src="/circle-arrow-left.svg"
                alt="icon"
                height={60}
                width={60}
              />
            </button>

            <button
              onClick={() => splideRef.current?.splide?.go(">")}
              className="pointer-events-auto cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next slide"
            >
              <Image
                src="/circle-arrow-right.svg"
                alt="icon"
                height={60}
                width={60}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Edge;
