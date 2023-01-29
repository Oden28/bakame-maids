import React from "react";
import HomePage from "./HomePage";
import Maids from "./Maids";
import Maid from "./Maid";
import MaidForm from "./MaidForm";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maids" element={<Maids />} />
        <Route path="/maids/maid" element={<Maid />} />
        <Route path="/maids/maid/form" element={<MaidForm />} />
      </Routes>
    </div>
  );
};

export default Content;
