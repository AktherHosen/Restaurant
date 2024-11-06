import React, { useState } from "react";
import Container from "../Container/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialImg1 from "../../assets/testimonialdish.png";
import TestimonialImg2 from "../../assets/testimonialtree.png";
import Flower from "../../assets/flower.svg";
import Qoute from "../../assets/qoute.png";
import User from "../../assets/user.png";
import Movie from "../../assets/movie.mp4";
import Thumbnail from "../../assets/Video.png";

const Testimonial = () => {
  const [activeNav, setActiveNav] = useState("next");
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
    const video = document.getElementById("myVideo");
    video.play();
  };

  return (
    <div className="p-10 lg:relative ">
      <Container>
        <div className="min-h-[600px]">
          <div className="text-primary flex items-center gap-1">
            <span className="block"> ■</span>{" "}
            <h4 className="font-bold text-lg">Crispy, Every Bite Taste</h4>
          </div>
          <h1 className="font-bold uppercase text-2xl">
            What Some of my Customers Say
          </h1>

          <div className="relative my-8 min-h-[400px]">
            <Swiper
              cssMode={true}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              spaceBetween={30}
              mousewheel={true}
              slidesPerView={1}
              keyboard={true}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="relative"
            >
              <SwiperSlide>
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-1/3 bg-[#FEBF00] relative">
                    <div className="px-10 py-12 space-y-16 lg:space-y-28 max-w-md">
                      <div className="relative">
                        <h2 className="text-sm leading-6 tracking-wide text-start">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          definitely recommend it.
                        </h2>
                        <img
                          className="absolute -top-1 -left-4 h-2"
                          src={Qoute}
                          alt="Quote Icon"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-start flex-1">
                          <h1 className="text-sm font-semibold uppercase">
                            Khalid Al Dawsry
                          </h1>
                          <h4 className="text-sm">Jeddah, Saudi</h4>
                          <div className="h-[0.5px] bg-black mt-1.5"></div>
                        </div>
                        <div>
                          <img src={User} alt="User Avatar" />
                          <div className="bg-primary h-1 w-10 mt-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-0">
                      <img src={Flower} alt="Flower Icon" className="h-16" />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 relative">
                    {!isPlaying ? (
                      <div className="relative">
                        <img
                          src={Thumbnail}
                          alt="Video Thumbnail"
                          className="w-full object-cover h-[300px] lg:h-[400px]"
                        />
                        <button
                          onClick={playVideo}
                          className="absolute inset-0 flex items-center justify-center text-black text-4xl bg-[#FFC900] bg-opacity-60 rounded-full w-16 h-16 m-auto"
                        >
                          &#9658;
                        </button>
                      </div>
                    ) : (
                      <video
                        id="myVideo"
                        src={Movie}
                        controls
                        className="w-full object-cover h-[300px] lg:h-[400px]"
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-1/3 bg-[#FEBF00] relative">
                    <div className="px-10 py-12 space-y-16 lg:space-y-28 max-w-md">
                      <div className="relative">
                        <h2 className="text-sm leading-6 tracking-wide text-start">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          definitely recommend it.
                        </h2>
                        <img
                          className="absolute -top-1 -left-4 h-2"
                          src={Qoute}
                          alt="Quote Icon"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-start flex-1">
                          <h1 className="text-sm font-semibold uppercase">
                            Khalid Al Dawsry
                          </h1>
                          <h4 className="text-sm">Jeddah, Saudi</h4>
                          <div className="h-[0.5px] bg-black mt-1.5"></div>
                        </div>
                        <div>
                          <img src={User} alt="User Avatar" />
                          <div className="bg-primary h-1 w-10 mt-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-0">
                      <img src={Flower} alt="Flower Icon" className="h-16" />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 relative">
                    {!isPlaying ? (
                      <div className="relative">
                        <img
                          src={Thumbnail}
                          alt="Video Thumbnail"
                          className="w-full object-cover h-[300px] lg:h-[400px]"
                        />
                        <button
                          onClick={playVideo}
                          className="absolute inset-0 flex items-center justify-center text-black text-4xl bg-[#FFC900] bg-opacity-60 rounded-full w-16 h-16 m-auto"
                        >
                          &#9658;
                        </button>
                      </div>
                    ) : (
                      <video
                        id="myVideo"
                        src={Movie}
                        controls
                        className="w-full object-cover h-[300px] lg:h-[400px]"
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex flex-col-reverse lg:flex-row">
                  <div className="w-full lg:w-1/3 bg-[#FEBF00] relative">
                    <div className="px-10 py-12 space-y-16 lg:space-y-28 max-w-md">
                      <div className="relative">
                        <h2 className="text-sm leading-6 tracking-wide text-start">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          definitely recommend it.
                        </h2>
                        <img
                          className="absolute -top-1 -left-4 h-2"
                          src={Qoute}
                          alt="Quote Icon"
                        />
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="text-start flex-1">
                          <h1 className="text-sm font-semibold uppercase">
                            Khalid Al Dawsry
                          </h1>
                          <h4 className="text-sm">Jeddah, Saudi</h4>
                          <div className="h-[0.5px] bg-black mt-1.5"></div>
                        </div>
                        <div>
                          <img src={User} alt="User Avatar" />
                          <div className="bg-primary h-1 w-10 mt-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-0">
                      <img src={Flower} alt="Flower Icon" className="h-16" />
                    </div>
                  </div>
                  <div className="w-full lg:w-2/3 relative">
                    {!isPlaying ? (
                      <div className="relative">
                        <img
                          src={Thumbnail}
                          alt="Video Thumbnail"
                          className="w-full object-cover h-[300px] lg:h-[400px]"
                        />
                        <button
                          onClick={playVideo}
                          className="absolute inset-0 flex items-center justify-center text-black text-4xl bg-[#FFC900] bg-opacity-60 rounded-full w-16 h-16 m-auto"
                        >
                          &#9658;
                        </button>
                      </div>
                    ) : (
                      <video
                        id="myVideo"
                        src={Movie}
                        controls
                        className="w-full object-cover h-[300px] lg:h-[400px]"
                      />
                    )}
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div
              className={`swiper-button-next-custom shadow-sm border absolute right-52 lg:-top-16 lg:right-2 z-10 mt-4 ${
                activeNav === "next" ? "text-primary" : "text-black"
              }`}
              onClick={() => setActiveNav("next")}
            >
              <FaArrowRight />
            </div>
            <div
              className={`swiper-button-prev-custom shadow-sm border absolute right-40 lg:-top-16 lg:right-12 z-10 mt-4 ${
                activeNav === "prev" ? "text-primary" : "text-black"
              }`}
              onClick={() => setActiveNav("prev")}
            >
              <FaArrowLeft />
            </div>
          </div>
          <div className="hidden lg:flex lg:absolute left-0 top-20">
            <img
              src={TestimonialImg1}
              className="h-48"
              alt="Testimonial Dish"
            />
          </div>
          <div className="hidden lg:flex lg:absolute right-0 bottom-0">
            <img
              src={TestimonialImg2}
              className="h-80"
              alt="Testimonial Tree"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
