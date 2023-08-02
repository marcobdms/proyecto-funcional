import React from 'react';
import '../../src/input.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fontawesome/free-solid-svg-icons';

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
                            <FontAwesomeIcon icon={faFileArrowDown} style={{ color: 'white' }} />
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;