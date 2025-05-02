import React from "react";
import Card from "./Card";
import { FaBootstrap } from "react-icons/fa6";
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
            name="Reservation System"
            description="Manage reservations, rooms and customers"
            // tech={`<div></div>`}
            technologiesUsed={
              <div className="flex gap-4 text-3xl">
                <SiPhp className="text-indigo-800" />
                <SiMysql className="text-blue-800" />
                <FaBootstrap className="text-purple-600" />
              </div>
            }
          />
          <Card
            name="Sales System"
            description="Manage orders, sales and inventory"
            technologiesUsed={
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
