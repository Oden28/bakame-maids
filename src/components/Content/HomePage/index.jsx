import React from "react";
import PromoArea from "./PromoArea";
import Categories from "./Categories";
import ProductOffering from "./ProductOffering";

import "./styles/HomePageIndex.css";

const HomePage = () => {
  return (
    <div className="HomePageIndex">
      LocationImage
      <PromoArea />
      <Categories />
      <Categories />
      Heading
      <ProductOffering />
      <ProductOffering />
      <ProductOffering />
      <ProductOffering />
    </div>
  );
};

export default HomePage;
