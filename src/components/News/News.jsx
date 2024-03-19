import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { GrShop } from "react-icons/gr"; // Import the react-icons library if you haven't already

export default function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/news")
      .then((data) => data.json())
      .then((res) => {
        console.log("news: ", res);
        setNews(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <div className="title mt-20">
        <h2 className="text-center mb-10 text-4xl text-black font-semibold">
          Новости
        </h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={-125}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {news.map((item, index) => (
          <SwiperSlide key={index} className="mx-1 flex justify-center">
            <div className="flex flex-col justify-between w-full h-full max-w-[370px] bg-white rounded-lg shadow-md border border-gray-300 pb-9">
              <div className="product-img">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-[40%] max-h-[220px] rounded-md shadow-md object-cover"
                />
              </div>

              <div className="p-3">
                <p className=" text-sm mb-2 text-[#969696]">{item.date}</p>
                <p className="text-lg font-semibold mb-2 line-clamp-1 text-[#292929]">
                  {item.name}
                </p>
                <p className="text-[#969696] font-normal text-sm mb-2 line-clamp-6">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="news-btn flex justify-center mt-9">
        <button className="py-4 px-12 border border-[#4E9DD3] font-semibold rounded text-sm hover:bg-[#4E9DD3] hover:text-white transition-all">
          Все новости
        </button>
      </div>

      <style>
        {`
            .custom-pagination-bullet {
            background-color: #e7426a;
            border-radius: 0;
            margin-right: 8px;
          }

          .custom-pagination-bullet-active {
            background-color: #4E9DD3;
          }

          .swiper-pagination {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(99%);
            display: flex;
            flex-direction: row;
            justify-content: end;
            z-index: 10;
          }
          .swiper-pagination-bullet {
            background-color: #e7426a;
            border-radius: 0;
          }
        `}
      </style>
    </div>
  );
}
