import React from "react";
import BannerImg from "../../assets/banner.png";
import PrimaryButton from "../Button/PrimaryButton";
import StarImg from "../../assets/star.png";
const Banner = () => {
  return (
    <div className=" mx-auto flex flex-col lg:flex-row gap-6 lg:gap-0 items-center lg:min-h-[calc(100vh-80px)] lg:relative">
      <div className="space-y-3 lg:space-y-4 lg:relative lg:z-20 rounded-lg mt-6 lg:mt-2 lg:-mr-20">
        <h1 className="font-bebas text-4xl lg:text-7xl lg:max-w-3xl tracking-wider text-white lg:bg-[#b72b1d] lg:bg-opacity-50 inline-block  lg:py-4 lg:pr-4">
          TASTE THE AUTHENTIC SAUDI CUISINE
        </h1>
        <p className="font-roboto text-lg lg:text-xl text-white lg:max-w-xl">
          Among the best Saudi chefs in the world, serving you something beyond
          flavor.
        </p>
        <PrimaryButton label={"EXPLORE MENU"} />
      </div>

      <div className="lg:w-1/2  relative lg:-ml-12 w-full">
        <img
          src={BannerImg}
          alt="Saudi Cuisine"
          className="rounded-lg shadow-lg h-96 w-full object-cover"
        />

        <div className="absolute -top-6 lg:-top-10 -right-4 lg:-right-8">
          <img src={StarImg} alt="" />
        </div>
        <div className="bg-[#FEBF00] w-fit rounded-full p-1 text-black absolute -right-6 lg:-right-10 top-80">
          <h1 className="font-bebas border-dotted border-2 border-black uppercase rounded-full h-16 w-16 lg:h-20 lg:w-20 text-center text-xs lg:text-lg  flex items-center justify-center ">
            Today <br /> Offer
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
