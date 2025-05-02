import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const HeroPage = () => {
  return (
    <>
      <div className="container mx-auto lg:px-64 h-[300px] lg:text-6xl text-2xl md:text-6xl md:px-20 pt-8 px-4 flex">
        <div className="flex flex-col justify-center">
          <div className="bg-gradient-to-r from-gray-600 via-white to-gray-600 bg-clip-text text-transparent transition-all duration-300 lg:text-6xl md:text-6xl sm:text-5xl text-4xl hero-text">
            <span className="text-emerald-400 text-base">Hello! I'm </span>
            <p> Franklin Makokha,</p>
            <p>a Software Developer</p>
          </div>
          <p className="text-sm mt-3 text-gray-400">
            I transform ideas into scalable, impactful web solutions
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
