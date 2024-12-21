import React from "react";
import { FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  const techIcons = [
    { name: "FaHtml5", color: "text-orange-600" },
    // { name: FaCss3Alt, color: "text-blue-600" },
    // { name: FaJs, color: "text-yellow-500" },
    // { name: FaReact, color: "text-sky-500" },
    // { name: RiTailwindCssFill, color: "text-teal-400" },
    // { name: FaNode, color: "text-green-600" },
    // { name: SiExpress, color: "text-gray-500" },
    // { name: SiMongodb, color: "text-green-500" },
  ];
  return (
    <div className="w-full container mx-auto  px-8 lg:px-32 md:px-32 lg:mt-8 md:mt-8">
      <p class="lg:text-2xl text-xl text-center mb-3 font-bold bg-gradient-to-r from-gray-900 via-white to-gray-900 bg-clip-text text-transparent">
        Expertise I Bring to the Table
      </p>
      <div className="flex flex-row items-center justify-center text-5xl gap-4">
        <FaHtml5 className="text-orange-600" />
        <FaCss3Alt className="text-blue-600" />
        <FaJs className="text-yellow-500" />
        <FaReact className="text-cyan-500" />
        <RiTailwindCssFill className="text-sky-500" />
        <FaNode className="text-green-600" />
        <SiExpress className="text-gray-500" />
        <SiMongodb className="text-green-500" />
      </div>
    </div>
  );
};

export default Skills;
