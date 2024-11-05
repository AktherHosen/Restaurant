import React from "react";

const PrimaryButton = ({ label }) => {
  return (
    <button className="px-4 py-3 bg-[#FEBF00] text-black rounded-sm uppercase font-semibold">
      {label}
    </button>
  );
};

export default PrimaryButton;
