import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <>
      <Head>
        <title>GMosque | Home</title>
        <meta name="keywords" content="gmosque"/>
      </Head>
      <div className="homeContainer">
        <div className="relative h-screen pt-60 Container">
          <div className="w-9/12 mx-auto grid grid-cols-3 my-auto">
            <a href="/prayer">
              {" "}
              <div className="userType w-7/12 mx-auto py-8 h-full">
                <img
                  src="/imgs/praying.png"
                  width="30%"
                  className="mx-auto"
                ></img>
                <div className="text-center text-white mt-5 cursor-pointer">
                مصلي
                </div>
              </div>
          </a>
          
          <a href='/tourist'>
            <div className="userType w-7/12 mx-auto py-8  h-full">
              <img
                src="/imgs/visitor.png"
                width="30%"
                className="mx-auto"
              ></img>
              <div className="text-center text-white mt-5 cursor-pointer">
                سائح
              </div>
              </div>
            </a>

          <a href='/student'>
            <div className="userType w-7/12 mx-auto py-8 h-full">
              <img
                src="/imgs/reading-book.png"
                width="30%"
                className="mx-auto"
              ></img>
              <div className="text-center text-white mt-5 cursor-pointer">
                قارئ/باحث
              </div>
              </div>
            </a>
          </div>
          <a href="/map"><button className="absolute bottom-12 right-12 px-6 py-2 bg-green-800 rounded-md text-white">الخريطة العامة</button></a>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
