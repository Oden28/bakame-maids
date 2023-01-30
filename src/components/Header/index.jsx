import React, { useState, useEffect, useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import Login from "../Auth/Login";

import "./styles/HeaderIndex.css";

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
    <div className="flex flex-row justify-between px-10 py-5 items-center ">
      <HeaderMenu onMenuPress={() => setMenuState(true)} />
      {/* sidebar */}

      <div ref={menuRef}>
        <div
          className={`z-20 fixed top-0 left-0 w-9/12 h-full drop-shadow-2xl shadow-2xl bg-gray transition  duration-300 ease-in-out ${
            menuState ? " tanslate-x-0" : " -translate-x-full "
          } `}
        ></div>
      </div>

      <div className="contianer px-3 py-2 bg-green text-white rounded-l-[20px] rounded-b-[20px]">
        Job Jumper
      </div>
      <Login />
    </div>
  );
};

export default Header;
