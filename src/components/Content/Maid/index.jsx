import React from "react";
import MaidPreview from "./MaidPreview";
import Reviews from "./Reviews";

import starFilled from "../../../assets/images/starFilled.svg";
import arrowLeft from "../../../assets/images/arrowLeft.svg";

const Maid = () => {
  return (
    <div className="flex justify-center">
      <div className="mx-4 px-8 pt-5 bg-green rounded-[20px] pb-10 mb-10 md:max-w-[1000px]">
        <div className="flex flex-row justify-between">
          <img src={arrowLeft} alt="arrowLeft" />
          <p className="text-white font-semibold">Profile</p>
          <div></div>
        </div>
        <MaidPreview maid_info={maid_info} />

        <div className="font-semibold">Reviews</div>
        {/* Overall rating */}
        <div className="flex flex-row ml-5 mt-3">
          <div>5.0</div>
          <div className="flex flex-row ml-3">
            <img src={starFilled} alt="starRate" />
            <img src={starFilled} alt="starRate" />
            <img src={starFilled} alt="starRate" />
            <img src={starFilled} alt="starRate" />
            <img src={starFilled} alt="starRate" />
          </div>
        </div>
        {/* Reviews */}
        <div>
          <Reviews review_info={review_info} />
          <Reviews review_info={review_info} />
          <Reviews review_info={review_info} />
          <Reviews review_info={review_info} />
        </div>

        {/* Load more reviews */}
        <div className="flex justify-center">
          <div className="bg-gray-light rounded-[20px] flex justify-center mt-10 text-[14px] py-2 px-4 font-semibold">
            Load more reviews
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maid;

const maid_info = {
  id: 1,
  name: "Rhonda Daniels",
  gender: "female",
  image:
    "https://femalebodyguards.files.wordpress.com/2020/07/istock-627909282-1514234385.jpg",
  age: 23,
  reviews: 5,
  review_count: 50,
  avg_salary: 200000,
  open_negotiation: true,
  location: "Kigali, Rwanda",
  description:
    "I’m a big boy living in a big city and ready to work my face off! I’ve worked at multiple places in Rwanda and enjoy cleaning houses. My biggest passions are going to the movies with my child and watching her grow.",
};

const review_info = {
  overallReview: 5,
  reviewHeader: "Great Experience",
  reviewAuthor: "Francis, K",
  reviewDate: "2022",
  review:
    "I enjoyed having Didie around, he really helped with so much, I was able to win back my time and spend more times doing the things...Read More",
};
