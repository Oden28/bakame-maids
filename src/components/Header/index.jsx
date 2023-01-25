import React from "react";
import HeaderMenu from "./HeaderMenu";
import Login from "../Auth/Login";

import "./styles/HeaderIndex.css";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between px-10 py-5 items-center">
      <HeaderMenu />
      <div className="contianer px-3 py-2 bg-green text-white rounded-l-[20px] rounded-b-[20px]">
        Job Jumper
      </div>
      <Login />
    </div>
  );
};

export default Header;
