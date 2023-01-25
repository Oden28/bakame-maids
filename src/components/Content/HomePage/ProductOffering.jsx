import React from "react";

import offeringTick from "../../../assets/images/offeringTick.svg";

const ProductOffering = ({ header, text }) => {
  return (
    <div className="self-start px-[35px]">
      <div className="flex flex-row items-center ">
        <div className="w-[41px] h-[41px] mr-5 shrink-0">
          <img src={offeringTick} alt="tick" />
        </div>
        <div className=" font-bold text-[24px] leading-7">{header}</div>
      </div>
      <p className="my-5 text-[20px] leading-7">{text}</p>
    </div>
  );
};

export default ProductOffering;
