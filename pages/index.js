import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="relative h-screen pt-60 Container">
        <div className="w-9/12 mx-auto grid grid-cols-3 my-auto">
          <a href="./prayer">
            {" "}
            <div className="userType w-7/12 mx-auto py-8 h-full">
              <img
                src="/imgs/praying.png"
                width="30%"
                className="mx-auto"
              ></img>
              <div className="text-center text-white mt-5 cursor-pointer">
                Prayer
              </div>
            </div>
          </a>
          <a href='./visitor'>
            <div className="userType w-7/12 mx-auto py-8  h-full">
              <img
                src="/imgs/visitor.png"
                width="30%"
                className="mx-auto"
              ></img>
              <div className="text-center text-white mt-5 cursor-pointer">
                Visitor
              </div>
            </div>
          </a>

          <a href='/'>
            <div className="userType w-7/12 mx-auto py-8 h-full">
              <img
                src="/imgs/reading-book.png"
                width="30%"
                className="mx-auto"
              ></img>
              <div className="text-center text-white mt-5 cursor-pointer">
                Student/Researcher
              </div>
            </div>
          </a>
        </div>
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
