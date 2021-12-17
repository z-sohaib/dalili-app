import React from 'react';
import BackButton from '../../components/BackButton';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MapPage = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-36 Container">
            <div className="MapContainer w-7/12 mx-auto relative">
                <div className="absolute locationIcon top-1/4 left-2/3 w-20 text-green-600 text-xs text-center font-bold"> 
                <img  src="/imgs/location.svg" width="40px" className="mx-auto"></img>
                <div>Great Mosque of Algiers</div>
                </div>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-green-700 loc1 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-green-700 loc2 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-green-700 loc3 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-green-700 loc4 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-green-700 loc5 cursor-pointer"></div></a>
                
            </div>
          <a href='/'><BackButton></BackButton></a>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default MapPage;