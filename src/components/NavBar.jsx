import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="w-full lg:h-[80px] md:h-[80px] lg:container lg:mx-auto lg:px-32 md:px-8 md:mx-2 sm:px-2 sm:mx-2 sm:h-fit">
        <div className="flex items-center justify-start h-full px-8 pt-4">
          <h3 className="sm:text-xl lg:text-2xl md:text-2xl text-2xl text-gray-600 cursor-pointer">
            DevFranklin
          </h3>
          {/* <div className="flex flex-row gap-8">
            <span className="hover:text-white cursor-pointer">Projects</span>
            <span className="hover:text-white cursor-pointer">Resume</span>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default NavBar;
