import React from "react";

// import revStar from "../../../assets/images/revStar.svg";
import starFilled from "../../../assets/images/starFilled.svg";
import location from "../../../assets/images/location.svg";

const MaidPreview = ({ maid_info }) => {
  return (
    <div className="bg-green p-5  text-white mb-10">
      <div className="bg-gray rounded-[20px] w-full h-[204px] mx-auto overflow-hidden ">
        <img
          className="w-full h-[204px] object-fit"
          src={maid_info.image}
          alt="profile_pic"
        />
      </div>
      <p className="text-[16px] truncate py-3">
        {maid_info.name} ({maid_info.age}, {maid_info.gender})
      </p>

      <div className="flex flex-row mb-2">
        <img className=" " src={starFilled} alt="star" />
        <img className=" " src={starFilled} alt="star" />
        <img className=" " src={starFilled} alt="star" />
        <img className=" " src={starFilled} alt="star" />
        <img className=" " src={starFilled} alt="star" />
        <p className="ml-2">{maid_info.review_count} reviews</p>
      </div>
      <div className="mb-2">
        <p className="font-semibold"> RWF {maid_info.avg_salary}/month</p>
        {maid_info.open_negotiation && <p>(Open for negotiations)</p>}
      </div>
      <div className="mb-2 flex flex-row  text-[12px]">
        <img src={location} alt="location" /> {maid_info.location}
      </div>
      <div className="w-full h-[1px] bg-white mb-2"></div>
      <div>About me</div>
      <p className="mb-3">{maid_info.description}</p>
      <div className="w-full h-[1px] bg-white mb-2"></div>
      <div className="bg-gray text-black rounded-[20px] text-center mx-10 py-2 my-5">
        <p>Book now</p>
      </div>
      <div className="w-full h-[1px] bg-white mb-2"></div>
    </div>
  );
};

export default MaidPreview;
