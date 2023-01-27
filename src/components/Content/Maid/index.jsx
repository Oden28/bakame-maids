import React from "react";
import MaidPreview from "./MaidPreview";

import arrowLeft from "../../../assets/images/arrowLeft.svg";

const Maid = () => {
  return (
    <div className="mx-4 px-8 pt-5 bg-green rounded-[20px]">
      <div className="flex flex-row justify-between">
        <img src={arrowLeft} alt="arrowLeft" />
        <p className="text-white font-semibold">Profile</p>
        <div></div>
      </div>
      <MaidPreview maid_info={maid_info} />
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
