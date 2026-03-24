"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

interface AboutUsProps {
    logos: string[];
}

const AboutUs = ({ logos }: AboutUsProps) => {
    // parallax state
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [translateY, setTranslateY] = useState(0);

    useEffect(() => {
        let rafId = 0;
        const maxTranslate = 50;

        function update() {
            if (!wrapperRef.current) return;
            const rect = wrapperRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight || 1;
            const elementCenter = rect.top + rect.height / 2;
            const normalized =
                (elementCenter - windowHeight / 2) / (windowHeight / 2);
            const next = Math.max(-1, Math.min(1, normalized)) * maxTranslate;
            setTranslateY(next);
        }

        const onScroll = () => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <section className="px-4 xl:px-0 pb-28 w-screen min-h-screen max-w-312.5 mx-auto">
            <div className="flex flex-col gap-10 -mt-40 lg:-mt-32">
                <p className="text-[#033E6E] text-xl">
                    Our trusted partners, from film production to consumer products
                </p>
                {/* Swiper */}
                <div className="whitespace-nowrap py-4 flex flex-col gap-4 overflow-hidden rounded-4xl bg-white">
                    <div className="w-fit">
                        <div className="flex gap-4 animate-marquee">
                            {[...logos, ...logos].map((src, index) => (
                                <div
                                    key={index}
                                    className="relative w-32 h-24 lg:w-64 lg:h-40 shrink-0 overflow-hidden 
                                    transition duration-600 ease-out-expo"
                                >
                                    <Image
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                        fill
                                        className="object-contain p-4"
                                        sizes="256px"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden w-fit">
                        <div className="flex gap-4 animate-marquee-reverse">
                            {[...logos, ...logos].map((src, index) => (
                                <div
                                    key={index}
                                    className="relative w-32 h-24 md:w-64 md:h-40 shrink-0 overflow-hidden rounded-lg shadow-lg 
                                    transition duration-600 ease-out-expo bg-black"
                                >
                                    <Image
                                        src={src}
                                        alt={`Logo ${index + 1}`}
                                        fill
                                        className="object-contain p-4"
                                        sizes="256px"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-14 grid grid-cols-1 text-[#033E6E] gap-x-4 gap-y-8 md:gap-x-16 lg:gap-x-32 lg:grid-cols-2 lg:grid-rows-[auto_1fr] md:px-4">
                <div
                    ref={wrapperRef}
                    className="relative overflow-hidden h-150 md:h-[px] lg:row-span-2 order-2 lg:order-1"
                    aria-hidden={false}
                >
                    <div
                        className="absolute inset-0 will-change-transform"
                        style={{
                            transform: `translateY(${translateY}px)`,
                            transition: "transform 0.1s linear",
                        }}
                    >
                        <Image
                            src="/about-us.png"
                            alt="building view"
                            fill
                            className="object-cover scale-110"
                            sizes="(min-width: 1024px) 655px, 100vw"
                            priority
                        />
                    </div>
                </div>

                <div className="flex flex-col md:gap-6 order-1 lg:order-2 lg:h-fit">
                    <span className="text-xl w-fit rounded-full font-heading font-bold">
                        ABOUT US
                    </span>
                    <h2 className="flex flex-col w-fit text-2xl lg:text-4xl font-extralight leading-15">
                        Funding Solutions
                    </h2>
                </div>

                <div className="order-3 flex flex-col gap-4">
                    <p>
                        CCH Investments is a Canadian family office dedicated to investing
                        in private companies with a long-term perspective and a focus on
                        building lasting value. Guided by a hands-on, relationship-driven
                        approach, we work closely with founders and management teams to
                        support sustainable growth, operational excellence, and strategic
                        development.
                    </p>

                    <p>
                        By partnering with the businesses we invest in, CCH provides not
                        only capital but also experience, insight, and active involvement.
                        Our firm prioritizes strong relationships, aligned values, and
                        thoughtful decision-making, aiming to help companies scale
                        responsibly while creating enduring value for all stakeholders.
                    </p>

                    <Link href="/">
                        <Button variant="tertiary">LEARN MORE</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
