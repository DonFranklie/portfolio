import React from "react";
import Card from "./Card";
import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPhp } from "react-icons/si";

const Projects = () => {
  return (
    <div className="mt-10">
      <div className="w-full lg:container lg:mx-auto lg:px-32 md:px-8 md:mx-2 sm:px-2 sm:mx-2 sm:h-fit ">
        {/* <div className="border-b-[.5px] border-gray-500"> */}
        <div>
          <h4 className="hero-text text-xl text-gray-500">Projects</h4>
        </div>

        <div className="flex flex-row items-center justify-center gap-4 flex-wrap mt-8">
          <Card
            name="Hotel Reservation System"
            desc="Manage reservations, rooms and customers"
            // tech={`<div></div>`}
            tech={
              <div className="flex gap-4 text-3xl">
                <SiPhp className="text-indigo-800" />
                <SiMysql className="text-blue-800" />
                <FaBootstrap className="text-purple-600" />
              </div>
            }
          />
          <Card
            name="Hotel Sales System"
            desc="Manage Hotel orders, sales and inventory"
            tech={
              <div className="flex gap-4 text-3xl">
                <SiPhp className="text-indigo-800" />
                <SiMysql className="text-blue-800" />
                <FaBootstrap className="text-purple-600" />
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
