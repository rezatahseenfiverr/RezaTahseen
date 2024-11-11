"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-20 md:mt-40 w-full z-[20]"
    >
      {/* Left Column */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-center md:text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Fullstack Developer Portfolio</h1>
        </motion.div>

        {/* Profile Image and Name */}
        <motion.div variants={slideInFromTop} className="flex flex-col items-center md:items-start mt-5">
          <a href="#about-me" className="flex flex-col items-center">
            <Image
              src="/Profile-Image.png"
              alt="logo"
              width={150}
              height={150}
              className="cursor-pointer hover:animate-slowspin"
            />
            {/* Ensure the name is always visible */}
            <span className="font-bold text-xl text-gray-300 mt-3">Reza Tahseen</span>
          </a>
        </motion.div>

        {/* Hero Text */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience
          </span>
        </motion.div>

        {/* Hero Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        
        {/* Learn More Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right Column */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={400}
          width={400}
          className="max-w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
