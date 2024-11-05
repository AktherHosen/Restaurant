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
    <div className="py-10 relative">
      <Container>
        <div className="flex justify-between gap-2">
          <div className="w-full">
            <img src={AboutImg} className="h-96 relative" alt="About banner" />

            <div className="w-[200px] absolute top-16 ml-6 bg-white rounded-2xl flex justify-between items-center gap-2 p-2">
              <div
                className="radial-progress text-[#FEBF00]"
                style={{ "--value": 80 }}
                role="progressbar"
              >
                <span className="text-xl font-bold text-black">50+</span>
              </div>
              <h1 className="text-md font-semibold">
                Market <br /> Experiences
              </h1>
            </div>
          </div>
          <div className="w-full">
            <ul className="flex items-center border-b border-[#b72b1d] mb-6">
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
                <div className="space-y-4">
                  <h1 className="text-4xl uppercase font-semibold">
                    Exceptional culinary experience and delicious food
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                    odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                    sit amet consectetur adipiscing elit do eiusmod tempor
                    incididunt ut labore et dolore magna minim veniam nostrud
                    exercitation.
                  </p>
                  <div className="flex gap-4">
                    <PrimaryButton label={"About more"} />
                    <button className="flex items-center gap-2 font-bold">
                      <LuPhoneCall className="text-[#b72b1d] font-bold text-2xl" />
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
        <div className="flex gap-6 lg:gap-10 my-10">
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-lg h-16 w-16 rounded-full flex items-center justify-center border-b">
              <BsBoxSeam className="text-[#b72b1d] font-bold text-2xl" />
            </div>
            <div>
              <h1 className="font-bold uppercase text-xl">Fast delivery</h1>
              <h4>Within 30 minutes</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-lg h-16 w-16 rounded-full flex items-center justify-center border-b">
              <FaAward className="text-[#b72b1d] font-bold text-2xl" />
            </div>
            <div>
              <h1 className="font-bold uppercase text-xl">absolute dining</h1>
              <h4>Best buffet restaurant</h4>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white shadow-lg h-16 w-16 rounded-full flex items-center justify-center border-b">
              <FiShoppingBag className="text-[#b72b1d] font-bold text-2xl" />
            </div>
            <div>
              <h1 className="font-bold uppercase text-xl">pickup delivery</h1>
              <h4>Grab your food order</h4>
            </div>
          </div>
        </div>
      </Container>
      <div className="absolute right-0 top-56">
        <img src={AboutDish} className="h-72" alt="" />
      </div>
    </div>
  );
};

export default About;
