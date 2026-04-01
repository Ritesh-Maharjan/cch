"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { motion } from "framer-motion";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="relative flex-1 px-4 flex items-center h-full w-full max-w-312.5 mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-150 flex flex-col gap-8 md:gap-12">
        <motion.h1
          className="text-4xl md:text-5xl md:leading-15 font-semibold font-heading"
          variants={itemVariants}
        >
          FUNDING SOLUTIONS BUILT ON TRUST
        </motion.h1>
        <motion.div variants={itemVariants}>
          <Button variant="secondary" className="w-fit">
            Learn More
          </Button>
        </motion.div>
      </div>

      <Image
        className="absolute bottom-0 -right-1/2 sm:-right-1/3 xl:-right-1/4 opacity-60 w-150 h-70 lg:w-150 lg:h-100"
        height={360}
        width={420}
        src="/logo.png"
        alt=""
      />
    </motion.section>
  );
};

export default Hero;
