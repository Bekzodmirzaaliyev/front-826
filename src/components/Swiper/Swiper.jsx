import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function SwiperHeader() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        className="w-full"
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        <SwiperSlide className="w-full ">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-12">
            <div className="slide-logo relative">
              <img
                className="w-[32px] h-[31px]"
                src="src/components/Swiper/images/Group 108.png"
                alt=""
              />
              <img
                className="absolute bottom-0 left-3 w-[45px] h-[17px]"
                src="src/components/Swiper/images/Group 110.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">
              МИНДАЛЬНАЯ МУКА И НАТУРАЛЬНЫЕ ИНГРЕДИЕНТЫ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-5">
            <div className="slide-logo relative">
              <img
                className="w-[41px] h-[40px]"
                src="src/components/Swiper/images/Group 216.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">ВСЕГДА СВЕЖЕЕ</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-7">
            <div className="slide-logo relative">
              <img
                className="w-[45px] h-[35px]"
                src="src/components/Swiper/images/Group 214.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">
              ОПТОВЫЕ ПОСТАВКИ ОТ ПРОИЗВОДИТЕЛЯ
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="swiper-slide bg-[#D4E9F9] h-[50px] flex items-center justify-center gap-7">
            <div className="slide-logo relative">
              <img
                className="w-[45px] h-[31px]"
                src="src/components/Swiper/images/Group 213.png"
                alt=""
              />
            </div>
            <p className="text-lg font-normal">ДОСТАВКА В ДЕНЬ ЗАКАЗА</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
