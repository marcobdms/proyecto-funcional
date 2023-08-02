import React from 'react';
import '../../src/input.css';
// import { faFileArrowDown } from '@fontawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="bg-white-200 p-5">
            <div className="container mx-auto flex justify-between space-x-9">
                <div>
                    <img src="logo-negro.webp" alt="" width='130'/>
                </div>
                <ul className="flex space-x-5">
                    <li>
                        <a href="#" className="block text-black hover:text-yellow-600 mt-2 drop-shadow-lg">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="block text-black hover:text-yellow-600 mt-2 drop-shadow-lg">LENGUAGES</a>
                    </li>
                    <li>
                        <a href="#" className=" block text-black hover:text-yellow-600 mt-2 drop-shadow-lg">CS SKILLS</a>
                    </li>
                    <li>
                        <button className="bg-green-500 hover:bg-green-600 text-white 
                        font-semibold px-5 py-2 rounded 
                        drop-shadow-lg flex items-center">
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 384 512" className='w-4 h-4 ml-4 text-white'>
                                <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 
                                64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 
                                0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 
                                24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6
                                0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;