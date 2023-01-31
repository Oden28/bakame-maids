import React from "react";
import starFilled from "../../../assets/images/starFilled.svg";
const Reviews = ({ review_info }) => {
  return (
    <div className="mt-5">
      <div className="flex flex-row text-[14px] items-center font-semibold">
        <div className="flex flex-row mr-3">
          <img src={starFilled} alt="starRate" />
          <img src={starFilled} alt="starRate" />
          <img src={starFilled} alt="starRate" />
          <img src={starFilled} alt="starRate" />
          <img src={starFilled} alt="starRate" />
        </div>
        <div>{review_info.reviewHeader}</div>
      </div>
      <div className="text-[12px] ml-2 mt-2">
        {review_info.reviewAuthor}, {review_info.reviewDate}
      </div>
      <div className="mt-2">
        <p className="leading-5 text-[12px]">{review_info.review}</p>
      </div>
    </div>
  );
};

export default Reviews;
