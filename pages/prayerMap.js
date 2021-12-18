import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

const prayerMap = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-40 Container">
          <img src="/imgs/mapMousala.png" className="mx-auto rounded-lg" width="30%"></img>
          <a href='/prayer'><BackButton></BackButton></a>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default prayerMap;