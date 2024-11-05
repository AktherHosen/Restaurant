import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className="bg-[#b72b1d] text-white min-h-screen ">
      <div className="max-w-[1240px] mx-auto">
        {" "}
        <Navbar />
        <Banner />
      </div>
    </div>
  );
};

export default Header;
