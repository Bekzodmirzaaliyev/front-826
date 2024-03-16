import React from 'react'
import Header from '../layout/Header'
import Navbar from "../components/Navbar/Navbar";
import SwiperHeader from "../components/Swiper/Swiper";
import Sets from "../components/Sets/Sets";

const Home = () => {
  return <div>
    <SwiperHeader/>
    <Header/>
    <Sets/>
  </div>;
};

export default Home