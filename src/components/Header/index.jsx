import React, { useState, useEffect, useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import Login from "../Auth/Login";

import "./styles/HeaderIndex.css";
import Drawer from "./Drawer";

export const Header = () => {
  const [menuState, setMenuState] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let menuHandler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuState(false);
      }
    };
    // Add mousedown event listener when pressing outside elements
    document.addEventListener("mousedown", menuHandler);

    return () => {
      // Remove event listener when not used
      document.removeEventListener("mousedown", menuHandler);
    };
  });

  return (
    <div>
      <div className="flex flex-row justify-between px-10 py-5 items-center ">
        <HeaderMenu onMenuPress={() => setMenuState(true)} />

        <div className="contianer px-3 py-2 bg-green text-white rounded-l-[20px] rounded-b-[20px]">
          Job Jumper
        </div>
        <Login />
      </div>
      {/* sidebar */}

      <div ref={menuRef}>
        <Drawer menuState={menuState} closeDrawer={() => setMenuState(false)} />
      </div>
    </div>
  );
};

export default Header;
