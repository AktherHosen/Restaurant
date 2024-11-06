import React from "react";
import Container from "../Container/Container";
import "../../index.css";
import PrimaryButton from "../Button/PrimaryButton";
const BookTable = () => {
  return (
    <div className="py-10  bookContainer">
      <Container>
        <div className="max-w-2xl flex min-h-[400px] justify-center items-center">
          <div className="space-y-2">
            <div className="text-primary flex items-center gap-1">
              <span className="block"> ■</span>{" "}
              <h4 className="font-bold text-lg">Book Now</h4>
            </div>
            <h1 className="text-white uppercase text-4xl font-bold tracking-wider">
              book your table
            </h1>
            <p className="text-gray-200">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
              leo molestie vel, ornare non id blandit netus.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white"
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white"
                />
                <input
                  type="date"
                  placeholder="Reservation Date"
                  className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white outline-none"
                />
                <input
                  type="number"
                  placeholder="Total People"
                  className="bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white outline-none"
                />
                <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  className="h-40 resize-none col-span-2 bg-transparent border px-4 py-2 text-sm placeholder:text-white text-white outline-none"
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
