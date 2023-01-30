import React from "react";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InboxIcon from "@mui/icons-material/Inbox";
import ReviewsIcon from "@mui/icons-material/Reviews";
import CloseIcon from "@mui/icons-material/Close";
import close from "../../assets/images/close.svg";

const Drawer = ({ menuState, closeDrawer }) => {
  return (
    <div>
      <div
        className={`z-20 p-6 fixed top-0 left-0 w-9/12 h-full drop-shadow-2xl shadow-2xl bg-gray transition  duration-300 ease-in-out ${
          menuState ? " tanslate-x-0" : " -translate-x-full "
        } `}
      >
        <div onClick={closeDrawer} className="flex justify-end">
          <div
            className="hover:bg-gray-light hover:rounded-[10px] p-2 hover:text-green scale-110
          "
          >
            {/* <img
              className="scale-75 hover:"
              src={close}
              alt="close"
            /> */}
            <CloseIcon />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-green rounded-[20px] py-2 px-20 mt-5 text-white text-[18px]">
            Sign In
          </div>
        </div>
        <div className="flex flex-row items-center mt-3 ml-3 p-2 text-[18px] hover:bg-gray-light hover:rounded-[10px] hover:text-green cursor-pointer">
          <InboxIcon />
          <div className="ml-3">Inbox</div>
        </div>
        <div className="text-gray-light mt-4 mb-2 flex px-5">
          <hr className="w-full" />
        </div>
        <div className="flex flex-row items-center mt-3 ml-3 p-2 text-[18px] hover:bg-gray-light hover:rounded-[10px] hover:text-green cursor-pointer">
          <AccountBoxIcon />
          <div className="ml-3">Profile</div>
        </div>
        <div className="text-gray-light mt-4 mb-2 flex px-5">
          <hr className="w-full" />
        </div>
        <div className="flex flex-row items-center mt-3 ml-3 p-2 text-[18px] hover:bg-gray-light hover:rounded-[10px] hover:text-green cursor-pointer">
          <ReviewsIcon />
          <div className="ml-3">Reviews</div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
