import React from "react";
import PromoArea from "./PromoArea";
import Categories from "./Categories";
import ProductOffering from "./ProductOffering";
import { Link } from "react-router-dom";

import locationman from "../../../assets/images/locationman.svg";
import "./styles/HomePageIndex.css";

const HomePage = () => {
  return (
    <div className="items-center bg-slate-400 HomePageIndex mb-14">
      <div className=" md:bg-gray-dark md:px-[110px] md:mx-2 md:rounded-[20px]">
        <div className="md:flex md:flex-row md:flex-row-reverse md:justify-between md:items-center ">
          <div className="w-159 h-208 flex justify-center md:w-[300px] md:h-[380px]">
            <img src={locationman} alt="menu" />
          </div>
          <div>
            <PromoArea />
            <a href="#categories">
              <div className="hover:shadow-md hover:bg-yellow max-w-[280px] mx-auto text-center py-[20px] px-[70px] bg-green rounded-[20px] mt-4 mb-10 text-white  text-[18px]">
                Explore Now
              </div>
            </a>
          </div>
        </div>
      </div>
      <div
        id="categories"
        className="absolute top-[600px] md:top-[450px]"
      ></div>
      <div className="md:flex md:flex-row md:gap-[100px] md:mt-12">
        <Link to="/maids">
          <Categories category={"Maids"} />
        </Link>
        <Link to="/taskForm">
          <Categories category={"Task Workers"} />
        </Link>
      </div>
      <div className="py-10 text-[48px] font-bold max-w-[319px] leading-10">
        Look no further for the best workers in Rwanda!
      </div>
      <ProductOffering
        header={"Users can post tailored jobs"}
        text={
          "Users can post tasks they need help with, and the website can match them with local service providers who are available and qualified to complete the task."
        }
      />
      <ProductOffering
        header={"Users can find professional maids"}
        text={
          "Users can browse through a list of professional maids and book a maid that meets their requirements."
        }
      />
      <ProductOffering
        header={"Users can leave reviews of services"}
        text={
          "Users can rate the work done by maids and task workers by leaving a review on their profiles."
        }
      />
      <ProductOffering
        header={"24/7 support"}
        text={
          "Our team of experts are ready to answer any specific requests you may have!"
        }
      />
    </div>
  );
};

export default HomePage;
