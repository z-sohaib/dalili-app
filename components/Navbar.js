import React from 'react';

const Navbar = () => {
    return (
        <div className="absolute w-full top-0">
            <div className='absolute w-full top-5'> <img className="mx-auto" src='/imgs/nav.png' width="30%"></img> </div>
            <div className="absolute top-2 right-5"><img className='' src="/imgs/bytesize_settings.png" width='150px'></img></div>
            <div className="absolute right-32 top-20 bg-white px-3 py-2 rounded-md">
                <div>Arab</div>
                <div>English</div>
            </div>
        </div>
    );
};

export default Navbar;