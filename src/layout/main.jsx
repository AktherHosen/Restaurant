import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";

const Main = () => {
  return (
    <>
      {/* Navbar  */}
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
