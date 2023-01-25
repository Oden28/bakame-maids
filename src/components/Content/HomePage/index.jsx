import React from "react";
import PromoArea from "./PromoArea";
import Categories from "./Categories";
import ProductOffering from "./ProductOffering";

import locationman from "../../../assets/images/locationman.svg";
import "./styles/HomePageIndex.css";

const HomePage = () => {
  return (
    <div className="items-center bg-slate-400 HomePageIndex mb-14">
      <div className="w-159 h-208">
        <img src={locationman} alt="menu" />
      </div>
      <PromoArea />
      <Categories category={"Maids"} />
      <Categories category={"Task Workers"} />
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
