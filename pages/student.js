import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';

const student = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-60 Container">
          <a href='/'><BackButton></BackButton></a>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default student;