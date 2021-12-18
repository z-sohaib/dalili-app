import React from 'react'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ActivityCard from '../../components/shared/ActivityCard';
import EventCard from '../../components/shared/EventCard';
import 'swiper/css/bundle';

function Tourist() {
    return (
        <div className='homeContainer'> 
            <div className='relative h-screen pt-24 Container'>
                <Navbar></Navbar>
                    <div className='flex justify-between px-32'>
                        <a href="/tourist/filtre">
                        <button className='userType text-white text-xl px-4 py-2 flex items-center'><img src='/imgs/menu.png' width="25" className='mx-1'/>  تصنيف</button>
                        </a>
                        
                        <p className='text-white text-2xl'>الأماكن المتاحة</p>
                    </div>
                    <div className='pr-40 pl-72 '>
                        <Swiper
                        modules={[Navigation, A11y]}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides={true}
                        className='flex space-x-20 mt-4'
                        >
                            <SwiperSlide><a href='map/placeDetails'><ActivityCard bgimage="bg-manara" message="المنارة" /></a></SwiperSlide>
                            <SwiperSlide><a href='map/placeDetails'><ActivityCard bgimage="bg-mosala" message="قاعة الصلاة" /></a></SwiperSlide>
                            <SwiperSlide><a href='map/placeDetails'><ActivityCard bgimage="bg-musee" message="متحف المسجد" /></a></SwiperSlide>
                            <SwiperSlide><a href='map/placeDetails'><ActivityCard bgimage="bg-manara" message="المنارة" /></a></SwiperSlide>
                            <SwiperSlide><a href='map/placeDetails'><ActivityCard bgimage="bg-mosala" message="قاعة الصلاة" /></a></SwiperSlide>
                            <SwiperSlide><a href='map/placeDetails'><ActivityCard bgimage="bg-musee" message="متحف المسجد" /></a></SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='flex justify-between px-32 mt-12'>
                    <a href="/tourist/filtre">
                        <button className='userType text-white text-xl px-4 py-2 flex items-center'><img src='/imgs/menu.png' width="25" className='mx-1'/>  تصنيف</button>
                        </a>
                        <p className='text-white text-2xl'>اخر الأحداث</p>
                    </div>
                    <div className='pr-40 pl-72'>
                        <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides={true}
                        className='flex space-x-40 mt-4'
                        >
                            
                            <SwiperSlide>
                                <a href="/eventDetails"><EventCard bgimage="bg-salat" message="اقامة الصلاة" time="15:16"/></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                <a href="/eventDetails"><EventCard bgimage="bg-tajwid" message="حلقة تجويد" time="19:20"/></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                <a href="/eventDetails"><EventCard bgimage="bg-salat" message="اقامة الصلاة" time="15:16"/></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                <a href="/eventDetails"><EventCard bgimage="bg-salat" message="اقامة الصلاة" time="20:00"/></a>
                                </SwiperSlide>
                                <SwiperSlide>
                                <a href="/eventDetails"><EventCard bgimage="bg-tajwid" message="حلقة تجويد" time="15:16"/></a>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Tourist
