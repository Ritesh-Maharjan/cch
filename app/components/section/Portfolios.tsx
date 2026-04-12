"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { PortfolioItem } from "@/lib/wordpress";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import Link from "next/link";
import Button from "../ui/Button";

interface PortfoliosProps {
    initialSlides: PortfolioItem[];
}

export default function Portfolios({ initialSlides }: PortfoliosProps) {
    const swiperRef = useRef<SwiperType | null>(null);
    const isAnimating = useRef(false);
    const [slides] = useState<PortfolioItem[]>(initialSlides || []);
    const [activeSlide, setActiveSlide] = useState<PortfolioItem | null>(
        slides[0] || null,
    );

    const truncateWords = (text: string, limit = 50) => {
        const words = text.trim().split(/\s+/);
        if (words.length <= limit) return text;
        return words.slice(0, limit).join(" ") + "...";
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const swiper = swiperRef.current;
            if (!swiper || isAnimating.current) return;

            isAnimating.current = true;

            // If on last slide, go to first
            if (swiper.activeIndex === slides.length - 1) {
                swiper.slideTo(0);
            } else {
                swiper.slideNext();
            }

            setTimeout(() => {
                isAnimating.current = false;
            }, 1200);
        }, 2600);

        return () => clearInterval(interval);
    }, [slides.length]);

    useEffect(() => {
        const handleSlideChange = (swiper: SwiperType) => {
            const slide = slides[swiper.realIndex];
            setActiveSlide(slide || null);
        };

        swiperRef.current?.on("slideChange", handleSlideChange);
        return () => {
            swiperRef.current?.off("slideChange", handleSlideChange);
        };
    }, [slides]);

    if (!slides || slides.length === 0) {
        return <div>Loading portfolios...</div>;
    }
    return (
        <section className="w-full bg-white">
            <div className="max-w-7xl mx-auto py-20 relative flex flex-col items-center gap-8 min-h-screen px-4 md:px-8 lg:grid lg:grid-cols-[50%_45%] lg:place-items-center lg:gap-16">
                <div className="order-2 lg:order-1 w-full max-w-[2400px]">
                    <h1 className="text-2xl lg:text-4xl font-extralight leading-8 md:leading-15 text-black mb-9">
                        {activeSlide?.title.rendered || "Capital Portfolio"}
                    </h1>
                    <p className="mb-8 text-black">
                        {truncateWords(
                            activeSlide?.acf.description ||
                                "Some text about the company here. Our tours are designed to transport you to the heart of the world's most captivating destinations, creating memories that will last a lifetime. You can uncover the hidden gems, iconic landmarks, and unique cultural treasures that make each destination special.",
                            50,
                        )}
                    </p>
                    <div className="space-y-1 text-sm md:text-base text-zinc-700 mb-8">
                        <p>
                            <span className="font-semibold">Region:</span>{" "}
                            {activeSlide?.acf.region || "N/A"}
                        </p>
                        <p>
                            <span className="font-semibold">Industry:</span>{" "}
                            {activeSlide?.acf.industry || "N/A"}
                        </p>
                        <p>
                            <span className="font-semibold">Year:</span>{" "}
                            {activeSlide?.acf.year || "N/A"}
                        </p>
                    </div>
                    <Link href="/portfolios">
                        <Button variant="secondary" className="w-fit">
                            View all portfolios
                        </Button>
                    </Link>
                </div>

                <div className="order-1 lg:order-2 relative w-[320px] h-[420px] sm:w-[360px] sm:h-[460px] md:w-[420px] md:h-[500px]">
                    <button
                        aria-label="Previous slide"
                        className="portfolio-prev absolute -left-12 top-1/2 z-20 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-black shadow"
                        type="button"
                    >
                        &#10094;
                    </button>

                    <button
                        aria-label="Next slide"
                        className="portfolio-next absolute -right-12 top-1/2 z-20 -translate-y-1/2 h-9 w-9 rounded-full bg-white/90 text-black shadow"
                        type="button"
                    >
                        &#10095;
                    </button>

                    <Swiper
                        modules={[EffectCube, Navigation]}
                        effect="cube"
                        loop={true}
                        navigation={{
                            prevEl: ".portfolio-prev",
                            nextEl: ".portfolio-next",
                        }}
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
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
