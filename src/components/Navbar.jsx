import { useState } from 'react';
import React from 'react';
import '../../src/input.css';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {

    
    const [nav, setNav] = useState(false);

    return (
        <nav className="bg-white-200 p-5">
            <div className="container mx-auto flex justify-between">
                <div>
                    <img src="logo-negro.webp" alt="" width='130'/>
                </div>
                <ul className="hidden md:flex space-x-5">
                    <li>
                        <a href="#" className="
                        block text-black hover:text-yellow-600 mt-2 drop-shadow-lg">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="
                        block text-black hover:text-yellow-600 mt-2 drop-shadow-lg">LENGUAGES</a>
                    </li>
                    <li>
                        <a href="#" className=" 
                        block text-black hover:text-yellow-600 mt-2 drop-shadow-lg">CS SKILLS</a>
                    </li>
                    <li>
                        <button className="bg-green-500 hover:bg-green-600 text-white 
                        font-semibold px-5 py-2 rounded 
                        drop-shadow-lg flex items-center">
                            Download CV
                            <div className='ml-4 '>
                                <FontAwesomeIcon icon={faFileArrowDown} />
                            </div>
                        </button>
                    </li>
                </ul>

                    <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                        {nav ? <FaTimes size={30} style={{ color: 'white'}}/> : <FaBars size={30} className='white-icon' />}
                    </div>

                {nav && (

                    <ul className='flex flex-col jusitify-center 
                        items-center absolute top-0 left-0 w-full h-screen 
                        bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        <li className='px-4 cursor-pointer capitalize py-5 text-4xl text-white hover:text-purple-600'>HOME</li>
                        <li className='px-4 cursor-pointer capitalize py-5 text-4xl text-white hover:text-purple-600'>LENGUAGES</li>
                        <li className='px-4 cursor-pointer capitalize py-5 text-4xl text-white hover:text-purple-600'>CYBERSECUTIRY</li>
                        <li>
                            <button className="bg-green-500 hover:bg-green-600 text-white 
                                font-semibold px-3 py-5 rounded text-4xl mt-4
                                drop-shadow-lg flex items-center">
                                Download CV
                                <div className='ml-4 '>
                                    <FontAwesomeIcon icon={faFileArrowDown} />
                                </div>
                            </button>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;