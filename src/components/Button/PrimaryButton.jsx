import React from "react";

const PrimaryButton = ({ label }) => {
  return (
    <button className="font-roboto px-3 py-2 lg:px-4 lg:py-3 bg-[#FEBF00] text-black rounded-sm uppercase font-semibold">
      {label}
    </button>
  );
};

export default PrimaryButton;
