import React, { useState } from "react";
import Logo from "../../assets/navlogo.png";
import PrimaryButton from "../Button/PrimaryButton";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center h-[80px] relative">
      <div className="flex gap-4">
        <h1 className="flex items-center text-xl gap-2 font-semibold">
          <img src={Logo} alt="Logo" />
          Restaurant
        </h1>

        <ul className="hidden lg:flex items-center gap-x-2 text-sm text-gray-200">
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

      <span
        className="lg:hidden cursor-pointer transition-all duration-200"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <IoCloseSharp size={30} />
        ) : (
          <GiHamburgerMenu size={30} />
        )}
      </span>

      <ul
        className={`flex flex-col absolute top-20 left-0 w-full bg-primary bg-opacity-80 text-white text-center lg:hidden 
          transition-all duration-300 transform origin-top ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          }`}
      >
        <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
          <a href="#">Home</a>
        </li>
        <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
          <a href="#">About</a>
        </li>
        <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
          <a href="#">Portfolio</a>
        </li>
        <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
          <a href="#">Clients</a>
        </li>
        <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
          <a href="#">Blog</a>
        </li>
        <li className="py-2 hover:underline hover:underline-offset-4 transition-all duration-300">
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="hidden lg:flex">
        <PrimaryButton label={"Book a table"} />
      </div>
    </nav>
  );
};

export default Navbar;
