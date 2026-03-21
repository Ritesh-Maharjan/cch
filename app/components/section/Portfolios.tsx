"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { PortfolioItem } from "@/lib/wordpress";
import "swiper/css";
import "swiper/css/effect-cube";

interface PortfoliosProps {
    initialSlides: PortfolioItem[];
}

export default function Portfolios({ initialSlides }: PortfoliosProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const isAnimating = useRef(false);
    const [slides, setSlides] = useState<PortfolioItem[]>(initialSlides || []);

    useEffect(() => {
        const interval = setInterval(() => {
            const swiper = swiperRef.current;
            if (!swiper || isAnimating.current) return;

            isAnimating.current = true;

            if (swiper.isEnd) {
                swiper.slideTo(0);
            } else {
                swiper.slideNext();
            }

            setTimeout(() => {
                isAnimating.current = false;
            }, 1200);
        }, 2600);

        return () => clearInterval(interval);
    }, []);

    if (!slides || slides.length === 0) {
        return <div>Loading portfolios...</div>;
    }

    return (
        <section
            id="portfolios"
            className="relative grid grid-cols-[50%_45%] place-items-center gap-16 min-h-screen px-4 md:px-16 bg-white from-[#0C2438] via-[#194B75] to-[#F9FCFF]"
        >
            <div className="max-w-[2400px]">
                <h1 className="font-[Comfortaa] text-4xl md:text-5xl font-bold text-black mb-9">
                    Capital Portfolio
                </h1>
                <p className="font-light mb-8 text-lg text-black md:text-xl">
                    Some text about the company here Our tours are designed to transport you to the heart of the worlds most captivating destinations, creating memories that will last a lifetime. You can uncover the hidden gems, iconic landmarks, and unique cultural treasures that make each destination special.
                </p>
                <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
                    Explore Tours
                </button>
            </div>

            <div className="w-[400px] h-[490px] md:w-[450px] md:h-[500px]">
                <Swiper
                    modules={[EffectCube]}
                    effect="cube"
                    cubeEffect={{
                        shadow: false,
                        slideShadows: true,
                        shadowOffset: 10,
                        shadowScale: 0.94,
                    }}
                    speed={1000}
                    grabCursor
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onSlideChangeTransitionStart={() => {
                        isAnimating.current = true;
                    }}
                    onSlideChangeTransitionEnd={() => {
                        isAnimating.current = false;
                    }}
                    className="w-full h-full"
                >
                    {slides.map((slide) => (
                        <SwiperSlide
                            key={slide.id}
                            className="relative rounded-2xl overflow-hidden border border-white/30"
                        >
                            <Image
                                src={slide.acf.cover_image}
                                alt={slide.title.rendered}
                                fill
                                className="object-cover"
                                sizes="450px"
                            />
                            <div className="absolute top-2 right-2 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-white font-semibold text-sm">
                                {slide.acf.industry}
                            </div>
                            <div className="absolute bottom-0 w-full h-[150px] bg-white/20 backdrop-blur-2xl px-4 py-3 text-white flex flex-col justify-center rounded-b-2xl">
                                <h2 className="font-semibold text-lg">{slide.title.rendered}</h2>
                                <p className="text-sm font-light">{slide.acf.description}</p>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-white text-xs">{slide.acf.region}</span>
                                    <span className="text-white text-xs">•</span>
                                    <span className="text-white text-xs">{slide.acf.year}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}