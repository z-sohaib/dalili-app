import React from 'react';
import BackButton from '../../components/BackButton';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const MapPage = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-36 Container">
            <div className="MapContainer w-7/12 mx-auto relative">
                <div className="absolute locationIcon top-1/4 left-2/3 w-20 text-red-500 text-xs text-center font-bold"> 
                <div>Great Mosque of Algiers</div>
                <img  src="/imgs/localisation.png" width="40px" className="mx-auto"></img>
                </div>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-red-500 loc1 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-red-500 loc2 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-red-500 loc3 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-red-500 loc4 cursor-pointer"></div></a>
                <a href='/map/placeDetails'><div className="absolute p-2 rounded-xl bg-red-500 loc5 cursor-pointer"></div></a>
                
            </div>
           
          
          <Navbar></Navbar>
          <Footer></Footer>
          <a href="/"><BackButton></BackButton></a> 
        </div>
      </div>
    );
};

export default MapPage;