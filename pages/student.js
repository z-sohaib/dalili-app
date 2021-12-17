import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Head from "next/head";

const student = () => {
    return (
        <>
          <Head>
            <title>GMosque | Student</title>
            <meta name="keywords" content="gmosque"/>
          </Head>
          <div className="homeContainer">
            <div className="relative h-screen pt-60 Container">
              <a href='/'><BackButton></BackButton></a>
              <Navbar></Navbar>
              <Footer></Footer>
            </div>
          </div>
        </>
    );
};

export default student;