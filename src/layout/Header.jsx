import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SwiperHeader from "../components/Swiper/Swiper";
import Sets from "../components/Sets/Sets";
import News from "../components/News/News";
import SetCards from "../components/SetCards/SetCards";

const Header = () => {
  return (
    <div>
      <Navbar />
      <SetCards/>
      <Sets/>
      <News />
    </div>
  );
};

export default Header;
