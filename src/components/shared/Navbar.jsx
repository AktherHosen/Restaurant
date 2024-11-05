import React from "react";
import Logo from "../../assets/navlogo.png";
import PrimaryButton from "../Button/PrimaryButton";
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-[80px]">
      <div className="flex gap-4 ">
        <h1 className="flex items-center text-xl gap-2 font-semibold">
          <img src={Logo} alt="" />
          Restaurant
        </h1>
        <ul className="flex items-center gap-x-2 text-sm text-gray-200">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Clients</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <PrimaryButton label={"Book a table"} />
    </nav>
  );
};

export default Navbar;
