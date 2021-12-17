import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackButton from '../components/BackButton';
import Image from 'next/image';
import Link from 'next/link';

const prayerMap = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-40 Container">
          <Image src="/imgs/mapMousala.png" className="mx-auto rounded-lg" width="30%" alt='picture'/>
          <Link href='/prayer'><a><BackButton></BackButton></a></Link>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default prayerMap;