import Link from 'next/link'
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Prayer = () => {

    return (
        <div className='homeContainer'>
            <div className='relative h-screen pt-60 Container'>
                <div className='flex flex-col justify-center items-center'>
                    <Link href="/choice1">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">الذهاب إلى قاعة الصلاة</a>
                    </Link>
                    <Link href="/choice2">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">الذهاب إلى قاعة الوضوء</a>
                    </Link>
                    <Link href="/choice3">
                        <a className="userType px-16 py-6 text-center text-white my-5 cursor-pointer w-1/2">عرض هيكلة المسجد</a>
                    </Link>
                </div>
                <Navbar></Navbar>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Prayer
