import React from 'react'
import Header from '../layout/Header';
import Navbar from "../components/Navbar/Navbar";
import SwiperHeader from "../components/Swiper/Swiper";
import Sets from "../components/Sets/Sets";
import Holiday from "../components/Holiday/Holiday";
import Main from '../layout/Main'
import Footer from '../layout/Footer'

const Home = () => {
  console.log("Rabotaet Homejsx")
  return <div>
    <Header/>
    <Main />
    <Footer/>
  </div>;
};

export default Home
