"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "@/lib/wordpress";

interface PortfolioBackgroundCarouselProps {
    items: PortfolioItem[];
}

export default function PortfolioBackgroundCarousel({ items }: PortfolioBackgroundCarouselProps) {
    const loopedItems = useMemo(
        () => (items.length > 0 ? [...items, ...items] : []),
        [items]
    );

    if (items.length === 0) return null;

    return (
        <section className="mt-12">
            <div className="overflow-hidden">
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {loopedItems.map((item, index) => {
                        const cover = item.acf?.cover_image;
                        const logo = item.acf?.project_logo;

                        return (
                            <Link
                                key={item.id + "-" + index}
                                href={"/portfolios/" + item.slug}
                                className="group relative block h-56 w-72 md:h-72 md:w-96 shrink-0 overflow-hidden bg-black"
                            >
                                {cover ? (
                                    <Image
                                        src={cover}
                                        alt={item.title.rendered}
                                        fill
                                        className="object-cover transition duration-500 group-hover:scale-105"
                                        sizes="320px"
                                    />
                                ) : null}

                                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/85" />

                                {logo ? (
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <Image
                                            src={logo}
                                            alt={item.title.rendered + " logo"}
                                            width={220}
                                            height={110}
                                            className="h-auto w-auto max-h-24 object-contain opacity-0 transition duration-300 group-hover:opacity-100"
                                        />
                                    </div>
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center p-6">
                                        <p className="text-center text-white opacity-0 transition duration-300 group-hover:opacity-100">
                                            {item.title.rendered}
                                        </p>
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
