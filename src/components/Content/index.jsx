import React from "react";
import HomePage from "./HomePage";
import Maids from "./Maids";
import Maid from "./Maid";

import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/maids" element={<Maids />} />
        <Route path="/maids/maid" element={<Maid />} />
      </Routes>
    </div>
  );
};

export default Content;
