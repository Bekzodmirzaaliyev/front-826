import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SwiperHeader from "../components/Swiper/Swiper";
import Sets from "../components/Sets/Sets";
import News from "../components/News/News";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Sets />
      <News />
    </div>
  );
};

export default Header;
