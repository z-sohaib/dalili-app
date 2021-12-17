import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import BackButton from "../../components/BackButton";
import SelectionCase from "../../components/SelectionCase";

const filtre = () => {
  return (
    <div className="relative h-screen pt-32 Container">
      <div className="grid grid-cols-2 justify-between">
        <div>
            <Link href='/tourist'>
                <a><button className="userType text-white text-xl px-4 py-2 flex items-center ml-12">
                <Image src="/imgs/menu.png" alt="picture" width="25" /> تصنيف
              </button></a>
            </Link>
       
        </div>
        <div className="pr-20">
          <Link href="/tourist"><a><Image src="/imgs/exit.png" alt="picture" width="30px" className="float-right" /></a></Link>
        </div>
      </div>

   
      <div className="grid grid-cols-5 w-8/12 mx-auto">
        <SelectionCase choice="الأقرب"></SelectionCase>
        <SelectionCase choice="الأكثر زيارة"></SelectionCase>
        <SelectionCase choice="علوم"></SelectionCase>
        <SelectionCase choice="دين"></SelectionCase>
        <SelectionCase choice="تاريخ"></SelectionCase>
      </div>

      <Link href="/">
        <a>
          <BackButton></BackButton>
        </a>
      </Link>
      <Navbar></Navbar>
      <Footer></Footer>
    </div>
  );
};

export default filtre;
