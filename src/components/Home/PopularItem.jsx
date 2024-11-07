import React, { useState } from "react";
import Container from "../Container/Container";
import PopularBg from "../../assets/popularbg.png";
import Item1 from "../../assets/item1.png";
import Item2 from "../../assets/item2.png";
import Item3 from "../../assets/item3.png";
import Item4 from "../../assets/item4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularItem = () => {
  const [activeNav, setActiveNav] = useState("next");

  return (
    <div className="bg-[#FBF7F2] min-h-[400px] px-6 py-10 lg:relative">
      <Container>
        <div className="space-y-2">
          <div className="text-primary flex items-center gap-1 font-roboto">
            <span className="block"> ■</span>{" "}
            <h4 className="font-bold text-lg">Crispy, Every Bite Taste</h4>
          </div>
          <h1 className=" font-bebas tracking-wide uppercase text-4xl">
            Popular food items
          </h1>
        </div>

        <div className="relative flex flex-col lg:flex-row my-8">
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
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
              1420: {
                slidesPerView: 4,
              },
            }}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="min-h-[200px] min-w-[300px]  p-4 bg-white">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={Item1} alt="" className="h-[100px]" />
                  </div>
                  <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                  <h1 className="font-bebas tracking-wide uppercase text-lg">
                    Vegetables burger
                  </h1>
                  <h2 className="font-inter text-sm">
                    Barbecue Italian cuisine pizza
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] min-w-[300px]  p-4 bg-white">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={Item2} alt="" className="h-[100px]" />
                  </div>
                  <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                  <h1 className="font-bebas tracking-wide uppercase text-lg">
                    Spacial Pizza
                  </h1>
                  <h2 className="font-inter text-sm">
                    Barbecue Italian cuisine pizza
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] min-w-[300px]  p-4 bg-white">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={Item3} alt="" className="h-[100px]" />
                  </div>
                  <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                  <h1 className="font-bebas tracking-wide uppercase text-lg">
                    Spacial French fries
                  </h1>
                  <h2 className="font-inter text-sm">
                    Barbecue Italian cuisine pizza
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[200px] min-w-[300px]  p-4 bg-white">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={Item4} alt="" className="h-[100px]" />
                  </div>
                  <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                  <h1 className="font-bebas tracking-wide uppercase text-lg">
                    Cuisine Chicken
                  </h1>
                  <h2 className="font-inter text-sm">
                    Barbecue Italian cuisine pizza
                  </h2>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="min-h-[200px] min-w-[300px]  p-4 bg-white">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={Item1} alt="" className="h-[100px]" />
                  </div>
                  <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                  <h1 className="font-bebas tracking-wide uppercase text-lg">
                    Vegetables burger
                  </h1>
                  <h2 className="font-inter text-sm">
                    Barbecue Italian cuisine pizza
                  </h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] min-w-[300px]  p-4 bg-white">
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={Item2} alt="" className="h-[100px]" />
                  </div>
                  <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                  <h1 className="font-bebas tracking-wide uppercase text-lg">
                    Hot Pizza
                  </h1>
                  <h2 className="font-inter text-sm">
                    Barbecue Italian cuisine pizza
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex justify-center items-center gap-x-4">
            <div
              className={`swiper-button-next-custom shadow-sm border lg:absolute -bottom-14 right-52 lg:-top-20  lg:right-2 z-10 mt-4 h-10 w-10 flex items-center justify-center ${
                activeNav === "next" ? "text-primary" : "text-black"
              }`}
              onClick={() => setActiveNav("next")}
            >
              <FaArrowRight />
            </div>
            <div
              className={`swiper-button-prev-custom shadow-sm border lg:absolute -bottom-14 right-40 lg:-top-20 lg:mr-4 lg:right-12 z-10 mt-4 h-10 w-10 flex items-center justify-center ${
                activeNav === "prev" ? "text-primary" : "text-black"
              }`}
              onClick={() => setActiveNav("prev")}
            >
              <FaArrowLeft />
            </div>
          </div>
        </div>
      </Container>

      <div className="hidden lg:flex lg:absolute left-0 top-44">
        <img src={PopularBg} className="h-48" alt="" />
      </div>
    </div>
  );
};

export default PopularItem;
