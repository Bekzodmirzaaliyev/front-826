import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SwiperHeader from "../components/Swiper/Swiper";


const Header = () => {
  return (
    <div>
      <SwiperHeader/>
      <Navbar />
      <Sets/>
      <News/>
    </div>
  );
};

export default Header;
