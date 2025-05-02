import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPhp } from "react-icons/si";

const Skills = () => {
  return (
    <div className="w-full container mx-auto px-8 lg:px-32 md:px-32 lg:mt-8 md:mt-8">
      <p className="lg:text-2xl text-xl text-center mb-3 font-bold bg-gradient-to-r from-gray-900 via-white to-gray-900 bg-clip-text text-transparent">
        Expertise I Bring to the Table
      </p>
      <div className="flex flex-row items-center justify-center text-3xl gap-4">
        <FaHtml5 className="text-orange-600" />
        <FaCss3Alt className="text-blue-600" />
        <FaJs className="text-yellow-500" />
        <SiPhp className="text-indigo-800" />
        <SiMysql className="text-blue-800" />
        <FaBootstrap className="text-purple-600" />
        <RiTailwindCssFill className="text-sky-500" />
      </div>
    </div>
  );
};

export default Skills;
