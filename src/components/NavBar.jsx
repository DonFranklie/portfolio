import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { FaFeatherAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="w-full lg:h-[80px] md:h-[80px] lg:container lg:mx-auto lg:px-32 md:px-8 md:mx-2 sm:px-2 sm:mx-2 sm:h-fit shadow-md fixed">
        <div className="flex items-center justify-between h-full px-8 pt-4">
          <a
            href="https://franklinmakokha.vercel.app/"
            target="_blank"
            className="sm:text-xl lg:text-xl md:text-xl text-xl text-gray-400 cursor-pointer hero-text"
          >
            DevFranklin
          </a>
          {/* <div className="flex flex-row gap-8">
            <span className="hover:text-white cursor-pointer">Projects</span>
            <span className="hover:text-white cursor-pointer">Resume</span>
          </div> */}
          <div className="flex flex-row gap-4 items-center">
            <a
              href="https://github.com/DonFranklie"
              target="_blank"
              className="text-xl inline-flex gap-1 hover:text-emerald-400 transition-all duration-300"
            >
              <FaGithub />{" "}
              <HiExternalLink className="justify-self-start text-xs" />
            </a>
            <a
              href="https://github.com/DonFranklie"
              target="_blank"
              className="text-xl inline-flex gap-1 hover:text-emerald-400 transition-all duration-300"
            >
              {/* <span className="text-lg">Rant</span> */}
              <FaFeatherAlt className="justify-self-start" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
