import React, { useState } from "react";
import Container from "../Container/Container";
import AboutImg from "../../assets/aboutbanner.png";
import AboutDish from "../../assets/aboutdish.png";
import PrimaryButton from "../Button/PrimaryButton";
import { LuPhoneCall } from "react-icons/lu";
import { BsBoxSeam } from "react-icons/bs";
import { FaAward } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

const About = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="px-6 py-10 lg:relative min-h-[600px]">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-6">
          <div className="w-full lg:1/2 relative">
            <img
              src={AboutImg}
              className="h-96 relative w-full"
              alt="About banner"
            />

            <div className="w-[200px] absolute top-6 ml-6 bg-white rounded-2xl flex justify-between items-center gap-2 p-2">
              <div
                className="radial-progress relative text-[#FEBF00]"
                style={{ "--value": 80 }}
                role="progressbar"
              >
                <span className="text-xl font-bold text-black">50+</span>
                <div className="bg-[#FEBF00] absolute top-[12px] rounded-full h-5 w-5 flex items-center justify-center">
                  <div className="bg-white rounded-full h-2 w-2"></div>
                </div>
              </div>
              <h1 className="text-md font-semibold">
                Market <br /> Experiences
              </h1>
            </div>
          </div>
          <div className="w-full lg:1/2">
            <ul className="flex font-inter items-center border-b border-[#b72b1d] mb-6">
              <li
                className={`${
                  activeTab === 1 &&
                  "!border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl text-white bg-[#b72b1d]"
                } px-6 py-2 !border-[#d1d1d1] transition duration-300 border-transparent cursor-pointer`}
                onClick={() => setActiveTab(1)}
              >
                About
              </li>
              <li
                className={`${
                  activeTab === 2 &&
                  "!border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl text-white bg-[#b72b1d]"
                } px-6 py-2 !border-[#d1d1d1] transition duration-300 border-transparent cursor-pointer`}
                onClick={() => setActiveTab(2)}
              >
                Experience
              </li>
              <li
                className={`${
                  activeTab === 3 &&
                  "!border-[#d1d1d1] !border-t !border-l !border-r !border-b-transparent rounded-tr rounded-tl text-white bg-[#b72b1d]"
                } px-6 py-2 !border-[#d1d1d1] transition duration-300 border-transparent cursor-pointer`}
                onClick={() => setActiveTab(3)}
              >
                Contact
              </li>
            </ul>
            <div className="mt-4">
              {activeTab === 1 && (
                <div className="space-y-3 lg:space-y-4">
                  <h1 className="text-4xl lg:text-4xl max-w-sm uppercase font-bebas">
                    Exceptional culinary experience and delicious food
                  </h1>
                  <p className="font-roboto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                  <div className="flex gap-3 lg:gap-4">
                    <PrimaryButton label={"About more"} />
                    <button className="flex items-center gap-2 font-bold font-roboto">
                      <LuPhoneCall className="text-[#b72b1d] font-bold  text-xl  lg:text-2xl" />
                      +88 3426 739 485
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div>
                  <h2 className="text-lg font-semibold">Experience</h2>
                  <p>
                    This is the Experience section content. Share your work
                    experience, skills, and achievements here.
                  </p>
                </div>
              )}
              {activeTab === 3 && (
                <div>
                  <h2 className="text-lg font-semibold">Contact</h2>
                  <p>
                    This is the Contact section content. Provide contact details
                    or ways to reach you.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  gap-y-6 lg:gap-10 my-10">
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-sm lg:shadow-lg h-16 w-16 rounded-full flex items-center justify-center border-b-4 lg:border-b-2">
              <BsBoxSeam className="text-[#b72b1d] font-bold text-2xl" />
            </div>
            <div>
              <h1 className="font-bebas font-semibold tracking-wider uppercase text-lg lg:text-xl">
                Fast delivery
              </h1>
              <h4 className="font-inter">Within 30 minutes</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-sm lg:shadow-lg h-16 w-16 rounded-full flex items-center justify-center border-b-4 lg:border-b-2">
              <FaAward className="text-[#b72b1d] font-bold text-2xl" />
            </div>
            <div>
              <h1 className="font-bebas font-semibold tracking-wider uppercase text-lg lg:text-xl">
                absolute dining
              </h1>
              <h4 className="font-inter">Best buffet restaurant</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-sm lg:shadow-lg h-16 w-16 rounded-full flex items-center justify-center border-b-4 lg:border-b-2">
              <FiShoppingBag className="text-[#b72b1d] font-bold text-2xl" />
            </div>
            <div>
              <h1 className="font-bebas font-semibold tracking-wider uppercase text-lg lg:text-xl">
                pickup delivery
              </h1>
              <h4 className="font-inter">Grab your food order</h4>
            </div>
          </div>
        </div>
      </Container>
      <div className="hidden lg:flex lg:absolute right-0 top-56">
        <img src={AboutDish} className="h-72" alt="" />
      </div>
    </div>
  );
};

export default About;
