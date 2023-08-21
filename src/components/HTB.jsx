// import React, { useState } from "react";
import '../../src/input.css'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

function HTB() {
    const slides = [
        {
            url: 'bash.png'
        },
        {
            url: 'css.png'
        },
        {
            url: 'hackthebox.svg'
        },
    ];
    return <div className="mr-9 ml-9 p-5 flex justify-start items-center card1 bg-white rounded-lg overflow-hidden shadow-xl mb-32">
        <div style={{ backgroundImage: `url(${slides[0].url})` }}
            className="border w-[55%] h-32 ml-6 mt-5 mb-5 rounded-2xl bg-cover duration-500">
        </div>
        <div className="absolute">
            <MdOutlineKeyboardArrowLeft size={30} />
        </div>
        <div>
            <MdOutlineKeyboardArrowRight size={30} />
        </div>
        <div>
            <h2 className="ml-12  text-4xl sm:text-7xl font-bold drop-shadow-lg">
                BASH
            </h2>
            <p className="ml-12 mt-7">Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. Reprehenderit expedita dolore, 
            vero magni nihil consequatur atque a labore voluptatibus harum?</p>
        </div>
    </div>
}

export default HTB;