import React from 'react';
import '../../src/input.css';

const Navbar = () => {
    return (
        <nav className="bg-white-200 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <img src="logo-negro.webp" alt="" width='130' />
                </div>
                <ul className="flex space-x-8">
                    <li>
                        <a href="#" className="block text-black hover:text-yellow-600 mt-2">HOME</a>
                    </li>
                    <li>
                        <a href="#" className="block text-black hover:text-gray-300 mt-2">LENGUAGES</a>
                    </li>
                    <li>
                        <a href="#" className=" block text-black hover:text-gray-300 mt-2">CS SKILLS</a>
                    </li>
                    <li>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-2 rounded">
                            Download CV
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;