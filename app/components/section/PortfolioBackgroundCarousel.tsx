"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type CarouselPortfolio = {
    id: number;
    slug: string;
    title: { rendered: string };
    acf?: {
        cover_image?: string;
        project_logo?: string;
    };
};

const API_URL =
    "https://mediumaquamarine-partridge-477378.hostingersite.com/wp-json/wp/v2/portfolio?_embed";

export default function PortfolioBackgroundCarousel() {
    const [items, setItems] = useState<CarouselPortfolio[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let active = true;

        async function load() {
            try {
                const res = await fetch(API_URL);
                if (!res.ok) throw new Error("Failed to fetch portfolios");
                const data = (await res.json()) as CarouselPortfolio[];
                if (active) setItems(data);
            } catch (err) {
                console.error(err);
            } finally {
                if (active) setLoading(false);
            }
        }

        load();
        return () => {
            active = false;
        };
    }, []);

    const loopedItems = useMemo(
        () => (items.length > 0 ? [...items, ...items] : []),
        [items]
    );

    if (loading) {
        return (
            <section className="mt-12">
                <div className="border border-white/20 bg-black/10 p-6">
                    <p className="text-sm text-white/80">Loading portfolio carousel...</p>
                </div>
            </section>
        );
    }

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
                                className="group relative block h-52 w-80 shrink-0 overflow-hidden bg-black"
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