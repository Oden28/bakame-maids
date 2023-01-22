import React from "react";
import HeaderMenu from "./HeaderMenu";
import Login from "../Auth/Login";

import "./styles/index.css";

export const Header = () => {
  return (
    <div className="index">
      <HeaderMenu />
      Logo
      <Login />
    </div>
  );
};

export default Header;
