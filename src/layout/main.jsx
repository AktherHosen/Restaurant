import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      {/* Navbar  */}
      <Outlet />
      {/* footer  */}
    </>
  );
};

export default Main;
