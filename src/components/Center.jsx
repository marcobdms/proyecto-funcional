import React from 'react';
import '../../src/input.css';

const Navbar = () => {
    return (
<div className='flex justify-end items-center h-screen mt-1'>
    <h1 className='font-bold text-4xl pl-3 mb-5 drop-shadow-lg'>
        I'am a Junior Programmer with cybersecurity skills.
    </h1>
    <img src="foto-main.png" alt="" width='250' className='rounded-full filter drop-shadow-lg'/>
</div>
    );
};

export default Navbar