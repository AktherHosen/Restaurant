import React, { useState } from "react";
import Container from "../Container/Container";
import PopularBg from "../../assets/popularbg.png";
import Item1 from "../../assets/item1.png";
import Item2 from "../../assets/item2.png";
import Item3 from "../../assets/item3.png";
import Item4 from "../../assets/item4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../index.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularItem = () => {
  const [activeNav, setActiveNav] = useState("next");

  return (
    <div className="bg-[#FBF7F2] min-h-[400px] py-10 relative">
      <Container>
        <div className="text-primary flex items-center gap-1">
          <span className="block"> ■</span>{" "}
          <h4 className="font-bold text-lg">Crispy, Every Bite Taste</h4>
        </div>
        <h1 className="font-bold uppercase text-2xl">Popular food items</h1>

        <div className="relative my-8">
          <Swiper
            cssMode={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={30}
            mousewheel={true}
            slidesPerView={4}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper relative"
          >
            <SwiperSlide>
              <div className="min-h-[200px] p-4 w-[300px] bg-white flex flex-col items-center justify-center text-center gap-y-1">
                <img src={Item1} alt="" className="h-[100px]" />
                <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                <h1 className="font-bold uppercase text-lg">
                  Vegetables burger
                </h1>
                <h2>Barbecue Italian cuisine pizza</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] p-4 w-[300px] bg-white flex flex-col items-center justify-center text-center gap-y-1">
                <img src={Item2} alt="" className="h-[100px]" />
                <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                <h1 className="font-bold uppercase text-lg">Spacial Pizza</h1>
                <h2>Barbecue Italian cuisine pizza</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] p-4 w-[300px] bg-white flex flex-col items-center justify-center text-center gap-y-1">
                <img src={Item3} alt="" className="h-[100px]" />
                <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                <h1 className="font-bold uppercase text-lg">
                  Spacial French fries
                </h1>
                <h2>Barbecue Italian cuisine pizza</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] p-4 w-[300px] bg-white flex flex-col items-center justify-center text-center gap-y-1">
                <img src={Item4} alt="" className="h-[100px]" />
                <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                <h1 className="font-bold uppercase text-lg">Cuisine Chicken</h1>
                <h2>Barbecue Italian cuisine pizza</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="min-h-[200px] p-4 w-[300px] bg-white flex flex-col items-center justify-center text-center gap-y-1">
                <img src={Item1} alt="" className="h-[100px]" />
                <div className="w-[60px] h-1 mx-auto bg-primary my-3"></div>
                <h1 className="font-bold uppercase text-lg">
                  Vegetable Burger
                </h1>
                <h2>Barbecue Italian cuisine pizza</h2>
              </div>
            </SwiperSlide>
          </Swiper>

          <div
            className={`swiper-button-next-custom absolute -top-16 right-2 z-10 ${
              activeNav === "next" ? "text-primary" : "text-black"
            }`}
            onClick={() => setActiveNav("next")}
          >
            <FaArrowRight />
          </div>
          <div
            className={`swiper-button-prev-custom absolute -top-16 right-12 z-10 ${
              activeNav === "prev" ? "text-primary" : "text-black"
            }`}
            onClick={() => setActiveNav("prev")}
          >
            <FaArrowLeft />
          </div>
        </div>
      </Container>

      <div className="absolute left-0 top-44">
        <img src={PopularBg} className="h-48" alt="" />
      </div>
    </div>
  );
};

export default PopularItem;
