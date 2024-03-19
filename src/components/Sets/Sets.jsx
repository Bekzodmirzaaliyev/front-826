import React, { useState, useEffect } from "react";
import { GrShop } from "react-icons/gr";

const Sets = () => {
  const [set, setSet] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3005/popular-sets")
      .then((data) => data.json())
      .then((res) => {
        console.log("sets: ", res);
        setSet(res);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold pb-4 text-center">
        <span className="">Популярные наборы</span>
      </h2>
      <div className="flex flex-wrap justify-center">
        {set.map((item, index) => (
          <div
            key={index}
            className="w-full h-full max-w-[370px] max-h-[460px] mx-2 my-4 bg-white rounded-lg shadow-md border border-gray-300"
          >
            <div className="product-img">
              <img
                src={item.img}
                alt=""
                className=" w-full h-[60%] max-h-[300px] rounded-md shadow-md "
              />
            </div>

            <div className=" p-3">
              <p className="text-lg font-semibold mb-2">{item.name}</p>
              <p className="text-[#292929] font-normal text-sm mb-2">
                {item.description}
              </p>
              <div className="price flex items-center justify-between mt-4 border-t border-gray-300 pt-4">
                <p className="text-[#E7426A] font-semibold text-lg border-r border-gray-300 pr-40">
                  {item.price} руб
                </p>
                <div className="tobasket flex items-center">
                  <GrShop className="mr-1" />
                  <p className="font-semibold text-sm hover:text-[#E7426A]">
                    В корзину
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sets-btn flex justify-center mt-4">
        <button className="py-5 px-12 border border-[#4E9DD3] font-semibold rounded text-base hover:bg-[#4E9DD3] hover:text-white transition-all">
          Все праздничные наборы
        </button>
      </div>
    </div>
  );
};

export default Sets;
