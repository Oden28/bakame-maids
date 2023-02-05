import React, { useEffect } from "react";

import checkCircle from "../../assets/images/checkCircle.svg";

const SuccessMessage = ({ message, buttonText, onButtonClick }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className=" flex flex-col justify-center my-20">
        <div className="text-center text-[24px] font-bold leading-6 w-44">
          {message}
        </div>
        <div className="flex justify-center mt-10">
          <img src={checkCircle} alt="checkCircle" />
        </div>
        <div
          onClick={onButtonClick}
          className="hover:shadow-md hover:bg-yellow cursor-pointer flex justify-center bg-green text-white p-3 rounded-[20px] my-10"
        >
          {buttonText}
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
