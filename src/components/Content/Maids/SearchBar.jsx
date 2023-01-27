import React from "react";
import search from "../../../assets/images/search.svg";

const SearchBar = () => {
  return (
    <div className="mb-5 p-2 bg-green flex flex-row rounded-[20px]">
      <img src={search} alt="search" />
      <input
        className="bg-green px-2 h-full rounded-r-[20px] text-white border-white border-2 placeholder-white"
        type="text"
        placeholder="location"
      />
    </div>
  );
};

export default SearchBar;
