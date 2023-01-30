import React from "react";
import Hammenu from "../../assets/images/Hammenu.svg";
const HeaderMenu = ({ onMenuPress }) => {
  return (
    <div onClick={onMenuPress}>
      <img src={Hammenu} alt="menu" />
    </div>
  );
};

export default HeaderMenu;
