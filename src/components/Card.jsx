import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Card = ({ name, description, technologiesUsed }) => {
  return (
    <div className="w-[300px] h-[200px] border-[.5px] border-emerald-300 rounded-md p-4 flex flex-col gap-10 text-white m-2">
      <div className="flex flex-col gap-2">
        <h4 className="text-base hero-text">{name}</h4>
        <p className="text-gray-600 text-xs">{description}</p>
        <div>{technologiesUsed}</div>
      </div>

      <div>
        <button className="px-4 py-2 flex items-center gap-2 text-sm border-[.5px] rounded-sm border-emerald-700">
          Read More <FiArrowRightCircle className="text-base" />
        </button>
        {/* <button>Read More</button> */}
      </div>
    </div>
  );
};

export default Card;
