import Link from 'next/link'
import React from 'react'

const Prayer = () => {
    return (
        <div className='homeContainer'>
            <div className='relative h-screen pt-60 Container'>
                <div className='flex flex-col justify-center items-center'>
                    <Link href="/choice1">
                        <a className="userType px-16 py-6 text-center text-white mt-5 cursor-pointer w-1/2">Choice Number 1</a>
                    </Link>
                    <Link href="/choice2">
                        <a className="userType px-16 py-6 text-center text-white mt-5 cursor-pointer w-1/2">Choice Number 2</a>
                    </Link>
                    <Link href="/choice3">
                        <a className="userType px-16 py-6 text-center text-white mt-5 cursor-pointer w-1/2">Choice Number 3</a>
                    </Link>
                </div>
                <div className="absolute bottom-0 w-full" >
                    <img className="mx-auto" src='/imgs/logo.png' width="30%"></img>
                </div>
            </div>
        </div>
    )
}

export default Prayer
