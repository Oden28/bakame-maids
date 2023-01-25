import React from "react";
import PromoArea from "./PromoArea";
import Categories from "./Categories";
import ProductOffering from "./ProductOffering";

import locationman from "../../../assets/images/locationman.svg";
import "./styles/HomePageIndex.css";

const HomePage = () => {
  return (
    <div className="items-center bg-slate-400 HomePageIndex">
      <div className="w-159 h-208">
        <img src={locationman} alt="menu" />
      </div>
      <PromoArea />
      <Categories category={"Maids"} />
      <Categories category={"Task Workers"} />
      Heading
      <ProductOffering />
      <ProductOffering />
      <ProductOffering />
      <ProductOffering />
    </div>
  );
};

export default HomePage;
