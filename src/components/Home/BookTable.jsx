import React, { useRef, useState } from "react";
import Container from "../Container/Container";
import "../../index.css";
import PrimaryButton from "../Button/PrimaryButton";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

const BookTable = () => {
  const dateInputRef = useRef(null);
  const [peopleCount, setPeopleCount] = useState();

  const handleIncrease = () => setPeopleCount((prev) => prev + 1);
  const handleDecrease = () =>
    setPeopleCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="px-6 py-10 bookContainer">
      <Container>
        <div className="max-w-2xl flex min-h-[500px] justify-center items-center">
          <div className="space-y-2">
            <div className="space-y-2">
              <div className="text-primary flex items-center gap-1 font-roboto">
                <span className="block"> ■</span>{" "}
                <h4 className="font-bold text-lg">Book Now</h4>
              </div>
              <h1 className="text-white uppercase text-4xl font-bebas tracking-wide">
                book your table
              </h1>
            </div>
            <p className="text-gray-200 text-sm font-roboto">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white w-full"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white w-full"
                />

                <div>
                  <input
                    ref={dateInputRef}
                    type="date"
                    placeholder="Reservation Date"
                    className="relative Sdate bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white outline-none w-full hover:text-white"
                  />
                </div>

                <div className="relative flex items-center">
                  <input
                    type="number"
                    value={peopleCount}
                    readOnly
                    placeholder="Total People"
                    className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white outline-none w-full pr-8"
                  />
                  <div className="absolute right-5 flex flex-col text-white cursor-pointer">
                    <BiUpArrow size={10} onClick={handleIncrease} />
                    <BiDownArrow size={10} onClick={handleDecrease} />
                  </div>
                </div>
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="h-40 resize-none w-full lg:col-span-2 bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white outline-none"
                ></textarea>
              </div>
              <PrimaryButton label={"Book now"} />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BookTable;
