import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import Container from "../Container/Container";

const Header = () => {
  return (
    <div className="bg-[#b72b1d] text-white min-h-screen ">
      <Container>
        <Navbar />
        <Banner />
      </Container>
    </div>
  );
};

export default Header;
