import React from "react";

import arrowRight from "../../../assets/images/arrowRight.svg";

const Categories = ({ category }) => {
  return (
    <div className="flex flex-col justify-between my-3 text-white p-10 w-[342px] h-[304px] bg-green rounded-[20px]">
      <div className="font-bold text-[48px] max-w-[205px] leading-10">
        {category}
      </div>
      <div className="flex flex-row items-center">
        <div className="text-[20px] pr-4">Explore now</div>
        <div>
          <img src={arrowRight} alt="arrow right" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
