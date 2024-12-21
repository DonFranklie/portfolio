import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowRightArrowLeft } from "react-icons/fa6";

const HeroPage = () => {
  return (
    <>
      <div className="container mx-auto lg:px-64 h-[300px] lg:text-6xl text-2xl md:text-6xl md:px-20 text-center pt-8 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative mb-4">
            <div className="w-[144px] h-[33px] absolute bg-gradient-to-r from-gray-700 to-gray-300 rounded-full inset-0"></div>
            <button className="text-xl top-[1px] left-[1px] relative w-[calc(142px-1px)] h-[calc(32px-1px)] bg-black px-2  rounded-full flex flex-row items-center justify-between gap-2">
              <span className="text-sm">My Github</span>{" "}
              <span>
                <FaArrowCircleRight className="text-base" />
              </span>
            </button>
          </div>
          <div className="bg-gradient-to-r from-gray-600 via-white to-gray-600 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:via-blue-500 hover:to-purple-600 transition-all duration-300 lg:text-6xl md:text-6xl sm:text-5xl text-4xl">
            <p>Hello! I'm Franklin,</p>
            <p>a Full-Stack Developer</p>
          </div>
          <p className="text-sm mt-3 text-gray-400">
            I help you transform ideas into scalable, impactful web solutions
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroPage;
