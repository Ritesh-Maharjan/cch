"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";

const slides = [
	{
		image: "/demo.jpg",
		cost: "from $230 per group",
		title: "Walking Tour in Florence",
		description:
			"Discover the fascinating beauty of this historic city by strolling through the rich cultural tapestry that makes Florence a timeless destination.",
		reviews: "138 reviews",
		stars: 4.5,
	},
	{
		image: "/demo.jpg",
		cost: "from $380 per group",
		title: "Edinburgh Guided Tour",
		description:
			"Explore the city's majestic castles and fascinating history by joining our guided tour for an unforgettable journey through Scotland's capital.",
		reviews: "307 reviews",
		stars: 5,
	},
	{
		image: "/demo.jpg",
		cost: "from $99 per adult",
		title: "New York Sightseeing Tour",
		description:
			"Experience the energy and excitement of New York City from Times Square's dazzling lights to the serene beauty of Central Park.",
		reviews: "1152 reviews",
		stars: 5,
	},
	{
		image: "/demo.jpg",
		cost: "from $117 per adult",
		title: "Japan Panoramic Tours",
		description:
			"Embark on a magical journey through Tokyo by discovering the beauty of the city as cherry blossom trees paint the streets in hues of pink.",
		reviews: "619 reviews",
		stars: 4.5,
	},
];

export default function Portfolios() {
	const swiperRef = useRef<SwiperType | null>(null);
	const isAnimating = useRef(false);

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

			// unlock after animation finishes (speed = 1000ms, add buffer)
			setTimeout(() => {
				isAnimating.current = false;
			}, 1200);
		}, 2600);

		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="portfolios"
			className="relative grid grid-cols-[50%_45%] place-items-center gap-16 min-h-screen px-4 md:px-16 bg-gradient-to-b from-[#0C2438] via-[#194B75] to-[#F9FCFF]"
		>
			{/* Content */}
			<div className="max-w-[2400px]">
				<h1 className="font-[Comfortaa] text-4xl md:text-5xl font-bold text-white mb-9">
					Capital Portfolio
				</h1>
				<p className="text-white font-light mb-8 text-lg md:text-xl">
					Some text about the company here Our tours are designed to transport you to the heart of the worlds most captivating destinations, creating memories that will last a lifetime. You can uncover the hidden gems, iconic landmarks, and unique cultural treasures that make each destination special.
				</p>
				<button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition">
					Explore Tours
				</button>
			</div>

			{/* Cube Slider */}
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
					{slides.map((slide, i) => (
						<SwiperSlide
							key={i}
							className="relative rounded-2xl overflow-hidden border border-white/30"
						>
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className="object-cover"
								sizes="450px"
							/>
							<div className="absolute top-2 right-2 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-white font-semibold text-sm">
								{slide.cost}
							</div>
							<div className="absolute bottom-0 w-full h-[150px] bg-white/20 backdrop-blur-2xl px-4 py-3 text-white flex flex-col justify-center rounded-b-2xl">
								<h2 className="font-semibold text-lg">{slide.title}</h2>
								<p className="text-sm font-light">{slide.description}</p>
								<div className="flex items-center gap-1 mt-1">
									{Array.from({ length: 5 }, (_, idx) => (
										<span
											key={idx}
											className={
												idx < Math.floor(slide.stars)
													? "text-yellow-400"
													: "text-white/40"
											}
										>
											★
										</span>
									))}
									<span className="text-white text-xs ml-2">
										{slide.reviews}
									</span>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}