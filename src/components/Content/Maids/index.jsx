import React from "react";
import Maid from "./Maid";
import SearchBar from "./SearchBar";

const Maids = () => {
  return (
    <div className=" p-6 drop-shadow-xl">
      <div className="flex justify-center">
        <SearchBar />
      </div>
      <div className="md:flex md:justify-center">
        <div className="bg-gray rounded-[20px] p-6 mb-10 max-h-[700px] overflow-y-auto mt-3">
          <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {maids.map((maid_info) => (
              <Maid key={maid_info.id} maid_info={maid_info} />
            ))}
          </div>
          <div className="flex justify-center text-white mb-4">
            <div className="bg-green rounded-[20px] py-2 px-4">Load more</div>
          </div>
        </div>
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
