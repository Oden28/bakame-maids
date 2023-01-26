import React from "react";
import HomePage from "./HomePage";
import Maids from "./Maids";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maids" element={<Maids />} />
      </Routes>
    </div>
  );
};

export default Content;
