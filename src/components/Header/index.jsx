import React from "react";
import HeaderMenu from "./HeaderMenu";
import Login from "../Auth/Login";

import "./styles/HeaderIndex.css";

export const Header = () => {
  return (
    <div className="HeaderIndex">
      <HeaderMenu />
      Logo
      <Login />
    </div>
  );
};

export default Header;
