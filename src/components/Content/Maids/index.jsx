import React from "react";
import Maid from "./Maid";
import SearchBar from "./SearchBar";

const Maids = () => {
  return (
    <div className="container p-6 drop-shadow-xl">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="bg-gray rounded-[20px] p-6 mb-10 max-h-[700px] overflow-y-auto mt-3">
        <Maid maid_info={maids[0]} />
        <Maid maid_info={maids[1]} />
        <Maid maid_info={maids[1]} />

        <div>Load more</div>
      </div>
    </div>
  );
};

export default Maids;

// maid data
const maids = [
  {
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
      "I’m a big girl living in a big city and ready to work my face off! I’ve worked...Read more",
  },
  {
    id: 2,
    name: "Kiara Ford",
    gender: "female",
    image:
      "https://content.latest-hairstyles.com/wp-content/uploads/professional-hairstyles-1.jpg",
    age: 23,
    reviews: 5,
    review_count: 50,
    avg_salary: 200000,
    open_negotiation: true,
    location: "Kigali, Rwanda",
    description:
      "I’m a big girl living in a big city and ready to work my face off! I’ve worked...Read more",
  },
  {
    id: 3,
    name: "Didie Mucyo",
    gender: "male",
    image:
      "https://femalebodyguards.files.wordpress.com/2020/07/istock-627909282-1514234385.jpg",
    age: 23,
    reviews: 5,
    review_count: 50,
    avg_salary: 200000,
    open_negotiation: true,
    location: "Kigali, Rwanda",
    description:
      "I’m a big boy living in a big city and ready to work my face off! I’ve worked...Read more",
  },
  {
    id: 4,
    name: "Didie Mucyo",
    gender: "male",
    image:
      "https://femalebodyguards.files.wordpress.com/2020/07/istock-627909282-1514234385.jpg",
    age: 23,
    reviews: 5,
    review_count: 50,
    avg_salary: 200000,
    open_negotiation: true,
    location: "Kigali, Rwanda",
    description:
      "I’m a big boy living in a big city and ready to work my face off! I’ve worked...Read more",
  },
  {
    id: 5,
    name: "Didie Mucyo",
    gender: "male",
    image:
      "https://femalebodyguards.files.wordpress.com/2020/07/istock-627909282-1514234385.jpg",
    age: 23,
    reviews: 5,
    review_count: 50,
    avg_salary: 200000,
    open_negotiation: true,
    location: "Kigali, Rwanda",
    description:
      "I’m a big boy living in a big city and ready to work my face off! I’ve worked...Read more",
  },
];
