import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const visitor = () => {
  return (
    <div className="homeContainer">
      <div className="relative h-screen pt-60 Container">
        <Navbar></Navbar>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default visitor;
