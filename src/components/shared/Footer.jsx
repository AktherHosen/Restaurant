import Container from "../Container/Container";
import { FaRegClock } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
import { IoLogoFacebook } from "react-icons/io5";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footerContainer text-opacity-50 px-6 py-10">
      <Container>
        <div className="flex flex-col  gap-y-8 items-center justify-center min-h-[500px]">
          <h1 className="uppercase  text-4xl font-bebas tracking-wide text-center leading-10 max-w-xs lg:max-w-max">
            We ready to have you the best dining experiences
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="flex flex-col justify-center items-center gap-1">
              <FaRegClock className="text-[#FEBF00] text-2xl font-bold mb-4" />
              <h1 className="uppercase text-xl font-bebas tracking-wide">
                Opening hours
              </h1>
              <h2 className="font-roboto">Monday - Sunday</h2>
              <h2 className="font-roboto">9:00 AM to 11:30 PM</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <FiPhoneCall className="text-[#FEBF00] text-2xl font-bold mb-4" />
              <h1 className="uppercase text-xl font-bebas tracking-wide">
                LET'S TALK
              </h1>
              <h2 className="font-roboto">Phone: 1-800-222-4545</h2>
              <h2 className="font-roboto">Fax: 1-800-222-4545</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <GoMail className="text-[#FEBF00] text-2xl font-bold mb-4" />
              <h1 className="uppercase text-xl font-bebas tracking-wide">
                BOOK A TABLE
              </h1>
              <h2 className="font-roboto">Email: demo@website.com</h2>
              <h2 className="font-roboto">Support: support@website.com</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-1">
              <SlLocationPin className="text-[#FEBF00] text-2xl font-bold mb-4" />
              <h1 className="uppercase text-xl font-bebas tracking-wide">
                Our Address
              </h1>
              <h2 className="font-roboto">123 Stree New York City , United </h2>
              <h2 className="font-roboto">States Of America.</h2>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-full border flex items-center justify-center p-0.5">
              <IoLogoFacebook size={21} />
            </div>
            <div className="h-12 w-12 rounded-full border flex items-center justify-center p-0.5">
              <BsTwitterX
                size={21}
                className="bg-white text-black rounded-sm p-0.5"
              />
            </div>
            <div className="h-12 w-12 rounded-full border flex items-center justify-center p-0.5">
              <AiOutlineInstagram
                size={21}
                className="bg-white text-black rounded-sm p-0.5"
              />
            </div>
            <div className="h-12 w-12 rounded-full border flex items-center justify-center p-0.5">
              <BsLinkedin size={21} />
            </div>
          </div>
          <h4 className="font-montserrat">
            &copy; 2023{" "}
            <span className="text-[#FEBF00] font-semibold">Niomax</span> All
            Rights Reserved
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
