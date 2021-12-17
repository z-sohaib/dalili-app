import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BackButton from "../../components/BackButton";
import SelectionCase from "../../components/SelectionCase";
import Link from "next/link";

const filtre = () => {
  return (
    <div className="relative h-screen pt-32 Container">
      <div className="grid grid-cols-2 justify-between">
        <div></div>
        <div className="pr-20">
          <a href="/tourist">
            <img
              src="/imgs/exit.png"
              width="30px"
              className="float-right"
            ></img>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-5 w-8/12 mx-auto mt-20">
        <SelectionCase choice="الأقرب"></SelectionCase>
        <SelectionCase choice="الأكثر زيارة"></SelectionCase>
        <SelectionCase choice="علوم"></SelectionCase>
        <SelectionCase choice="دين"></SelectionCase>
        <SelectionCase choice="تاريخ"></SelectionCase>
      </div>
      <a href="/tourist" className="mx-auto">
        {" "}
        <button className="userType text-white text-xl px-4 py-2 flex items-center ml-12 absolute bottom-60 mx-auto">
          <img src="/imgs/menu.png" width="25" /> تصنيف
        </button>
      </a>

      <Navbar></Navbar>
      <Footer></Footer>
      <a href="/tourist">
        <BackButton></BackButton>
      </a>
    </div>
  );
};

export default filtre;
