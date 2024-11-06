import React from "react";
import BannerImg from "../../assets/banner.png";
import PrimaryButton from "../Button/PrimaryButton";
import StarImg from "../../assets/star.png";
const Banner = () => {
  return (
    <div className="container mx-auto flex items-center h-[calc(100vh-80px)] relative">
      <div className="space-y-4 relative z-20 rounded-lg lg:-mr-20">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-wider text-white bg-[#b72b1d] bg-opacity-50 inline-block  py-4 pr-4">
          TASTE THE AUTHENTIC <br /> SAUDI CUISINE
        </h1>
        <p className="text-lg lg:text-xl text-white">
          Among the best Saudi chefs in the world, serving <br /> you something
          beyond flavor.
        </p>
        <PrimaryButton label={"EXPLORE MENU"} />
      </div>

      <div className="lg:w-1/2 hidden lg:block relative -ml-12 w-full">
        <img
          src={BannerImg}
          alt="Saudi Cuisine"
          className="rounded-lg shadow-lg h-96 w-full object-cover"
        />

        <div className="absolute -top-10 -right-8">
          <img src={StarImg} alt="" />
        </div>
        <div className="bg-[#FEBF00] w-fit rounded-full p-1 text-black absolute -right-10 top-80">
          <h1 className="border-dotted border-2 border-black uppercase rounded-full h-20 w-20 text-center  flex items-center font-bold">
            Today Offer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
