import React from 'react';
import BackButton from '../../components/BackButton';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const MapPage = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-36 Container">
            <div className="MapContainer w-7/12 mx-auto relative">
                <div className="absolute locationIcon top-1/4 left-2/3 w-20 text-red-500 text-xs text-center font-bold"> 
                <div>Great Mosque of Algiers</div>
                <Image  src="/imgs/localisation.png" alt='picture' width="40px" className="mx-auto" />
                </div>
                <Link href='/map/placeDetails'><a><div className="absolute p-2 rounded-xl bg-red-500 loc1 cursor-pointer"></div></a></Link>
                <Link href='/map/placeDetails'><a><div className="absolute p-2 rounded-xl bg-red-500 loc2 cursor-pointer"></div></a></Link>
                <Link href='/map/placeDetails'><a><div className="absolute p-2 rounded-xl bg-red-500 loc3 cursor-pointer"></div></a></Link>
                <Link href='/map/placeDetails'><a><div className="absolute p-2 rounded-xl bg-red-500 loc4 cursor-pointer"></div></a></Link>
                <Link href='/map/placeDetails'><a><div className="absolute p-2 rounded-xl bg-red-500 loc5 cursor-pointer"></div></a></Link>
                
            </div>
            <Link href="/"><a><BackButton></BackButton></a></Link>
          
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MapPage;