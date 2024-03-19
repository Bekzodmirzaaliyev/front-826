import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sets from "../components/Sets/Sets";
import News from "../components/News/News";
import { SwiperSlide } from "swiper/react";
import SwiperHeader from "../components/Swiper/Swiper";

const Header = () => {
  return (
    <div>
      <SwiperHeader />
      <Navbar />
      <Sets/>
      <News/>
    </div>
  );
};

export default Header;
