import React from 'react'
import Header from '../layout/Header';
import Navbar from "../components/Navbar/Navbar";
import SwiperHeader from "../components/Swiper/Swiper";
import Sets from "../components/Sets/Sets";
import Cared from '../components/Cared/Cared';

const Home = () => {
  return <div>
    <SwiperHeader/>
    <Header/>
    <Cared/>
  </div>;
};

export default Home
