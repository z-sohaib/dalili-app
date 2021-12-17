import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";
import SelectionCase from "../../components/SelectionCase";

const filtre = () => {
  return (
    <div className="relative h-screen pt-32 Container">
      <div className="grid grid-cols-2 justify-between">
        <div>
            <a href='/tourist'>   <button className="userType text-white text-xl px-4 py-2 flex items-center ml-12">
            <img src="/imgs/menu.png" width="25" /> تصنيف
          </button></a>
       
        </div>
        <div className="pr-20">
          <a href="/tourist"><img src="/imgs/exit.png" width="30px" className="float-right"></img></a>
          
        </div>
      </div>

      <div className="grid grid-cols-5 w-10/12 mx-auto mt-16">
        <SelectionCase choice="الأقرب"></SelectionCase>
        <SelectionCase choice="الأكثر زيارة"></SelectionCase>
        <SelectionCase choice="علوم"></SelectionCase>
        <SelectionCase choice="دين"></SelectionCase>
        <SelectionCase choice="تاريخ"></SelectionCase>
      </div>

      <a href="/">
        <BackButton></BackButton>
      </a>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default filtre;
