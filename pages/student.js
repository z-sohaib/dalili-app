import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton' ; 
import Link from 'next/link';
const student = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-60 Container">
        <div className='flex flex-col justify-center items-center'>
                    <Link href="/prayerMap">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">الذهاب إلى الجامعة</a>
                    </Link>
                    <Link href="/prayerMap">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">الذهاب إلى قاعة المحاضرات</a>
                    </Link>
                    <Link href="/map">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">عرض هيكلة المكتبة</a>
                    </Link>
                </div>
          <Navbar></Navbar>
          <Footer></Footer>
          <a href='/'><BackButton></BackButton></a>
        </div>
      </div>
    );
};

export default student;