import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "next/link"
import { Image } from "next/image"
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
            <Link href="/prayer">
              <a>
                {" "}
                <div className="userType w-7/12 mx-auto py-8 h-full">
                  <Image
                    src="/imgs/praying.png"
                    width="30%"
                    className="mx-auto"
                    alt="picture"
                   />
                  <div className="text-center text-white mt-5 cursor-pointer">
                  مصلي
                  </div>
                </div>
            </a>
            </Link>
            <Link href='/tourist'>
              <a>
                <div className="userType w-7/12 mx-auto py-8  h-full">
                  <Image
                    src="/imgs/visitor.png"
                    width="30%"
                    className="mx-auto"
                    alt="picture"
                  />
                  <div className="text-center text-white mt-5 cursor-pointer">
                    سائح
                  </div>
                  </div>
                </a>
            </Link>
            <Link href='/student'>
              <a>
              <div className="userType w-7/12 mx-auto py-8 h-full">
                <Image
                  src="/imgs/reading-book.png"
                  width="30%"
                  className="mx-auto"
                  alt="picture"
                />
                <div className="text-center text-white mt-5 cursor-pointer">
                  قارئ/باحث
                </div>
                </div>
              </a>
            </Link>
          </div>
          </div>
          <Link href="/map"><a className="absolute bottom-12 right-12 px-6 py-2 bg-green-800 rounded-md text-white">الخريطة العامة</a></Link>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
    </>
  );
};

export default Home;
