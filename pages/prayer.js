import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import BackButton from '../components/BackButton'
import Head from "next/head";

import Footer from "../components/Footer";
import Image from 'next/image';

const Prayer = () => {

    return (
        <>
        <div className='homeContainer'>
            <div className='relative h-screen pt-60 Container'>
                <div className='flex flex-col justify-center items-center'>
                    <Link href="/prayerMap">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">الذهاب إلى قاعة الصلاة</a>
                    </Link>
                    <Link href="/prayerMap">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">الذهاب إلى قاعة الوضوء</a>
                    </Link>
                    <Link href="/map">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">عرض هيكلة المسجد</a>
                    </Link>
                </div>
                <div className="absolute bottom-0 w-full" >
                    <Image className="mx-auto" src='/imgs/logo.png' alt='picture' width="30%" />
                </div>
                <Link href='/'><a><BackButton></BackButton></a></Link>
                <Navbar></Navbar>

                    <Footer></Footer>
                </div>
            </div>
        </>
    )
}

export default Prayer
