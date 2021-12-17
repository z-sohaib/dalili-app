import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import SimpleImageSlider from "react-simple-image-slider";
import Link from 'next/link';


const images = [
    { url: "/imgs/gallery/pic1.jpg" },
    { url: "/imgs/gallery/pic2.jpg" },
    { url: "/imgs/gallery/pic3.jpg" },
    { url: "/imgs/gallery/pic4.jpg" },
  ];
  

  
const Test = () => {
    return (
        <div className='homeContainer'>
            <div className='relative h-screen pt-32 Container'>
                <Navbar></Navbar>
                    <div className='flex justify-center mb-4'>
                        <SimpleImageSlider
                            width={800}
                            height={430}
                            images={images}
                            autoPlay={true}
                            autoPlayDelay={1.5}
                        />
                    </div>
                    <div className='flex justify-center'>
                        <Link href='/'>
                            <a className='ContainerG rounded-xl px-16 py-6 text-center text-white my-5 cursor-pointer'>Get Started</a>
                        </Link>
                    </div>
                    
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Test
