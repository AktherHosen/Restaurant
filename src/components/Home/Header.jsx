import React from "react";
import Navbar from "../shared/Navbar";
import Banner from "./Banner";
import Container from "../Container/Container";

const Header = () => {
  return (
    <div className="bg-[#b72b1d] text-white min-h-[600px] px-10 py-4">
      <Container>
        <Navbar />
        <Banner />
      </Container>
    </div>
  );
};

export default Header;
