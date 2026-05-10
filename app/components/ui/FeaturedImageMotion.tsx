"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  sizes?: string;
  priority?: boolean;
};

export default function FeaturedImageMotion({
  src,
  alt = "",
  sizes,
  priority = false,
}: Props) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 400], [1, 1.12]);

  return (
    <motion.div
      style={{ scale, transformOrigin: "center center" }}
      className="pt-8 lg:pb-12 w-full"
    >
      <div className="relative w-full max-w-5xl h-56 sm:h-72 md:h-105 mx-auto overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes={sizes}
          priority={priority}
        />
      </div>
    </motion.div>
  );
}
