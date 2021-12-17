import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import BackButton from '../components/BackButton';

import Footer from "../components/Footer";
import Image from 'next/image';
const eventDetails = () => {
    return (
        <div className="homeContainer">
        <div className="relative h-screen pt-36 Container">
            <div className="grid grid-cols-12 infocontainer pb-4 w-9/12 rounded-t-md mx-auto">
                <div className="col col-span-5 pt-16"><Image src="/imgs/tajwid.png" alt='picture' width="55%" className="mx-auto rounded-xl" /></div>
                <div className=" p-5 pr-12 text-right col col-span-7">
                    <h1 className="text-white font-bold  text-32 infotitle">حلقة تجويد</h1>
                    <div className='mt-2 text-white text-md'>في منتصف الطريق على طول منحنى لطيف من خليج الجزائر العاصمة، يرتفع مجمع مباني مترامي الأطراف ببطء من الأرض.</div>
                    <div className='mt-2 text-white text-md'>وفي النهاية سيظهر "مسجد الجزائر الأعظم"، والذي سيضم أطول منارة (مئذنة) مسجد في العالم يبلغ ارتفاعها 265 مترا، وسيضم أيضا مدرسة لتعليم القرآن ومكتبة ومتحف ومدرجات وحدائق بها أشجار فاكهة.</div>
                    <div className='mt-2 text-white text-md'>ويمكن للمصلين الوصول للمسجد بعدة طرق، سواء بالسيارات أو الترام أو حتى بالقوارب لقربه من البحر، ويتسع المسجد لحوالي 120 ألف مصل، وسيتصل بمرسى على ساحل البحر المتوسط من خلال ممرين.</div>
                    <div className='mt-2 text-white text-md'>وسيكون المسجد الجزائري ثالث أكبر مسجد في العالم، من حيث المساحة، لكنه سيكون الأكبر في أفريقيا.</div>
                </div>
            </div>
          <Link href='/map'><a><BackButton></BackButton></a></Link>
          <Navbar></Navbar>
          <Footer></Footer>
        </div>
      </div>
    );
};

export default eventDetails;