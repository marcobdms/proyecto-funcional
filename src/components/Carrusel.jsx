import React from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../src/input.css'
const Card = () => {
  return (
  
  <div className="flex items-center">
    <div>
      <MdOutlineKeyboardArrowLeft className="arrowleft" size={50} />
    </div>
    <div className="card1 max-w-3x1 mx-auto mt-32 px-5 py-12
      bg-white rounded-lg overflow-hidden shadow-xl mb-48">
      <img
        src="bash.png"
        alt="bash"
        className="mt-6 h-auto object-cover"
      />
    </div>
    <div>
      <MdOutlineKeyboardArrowRight className="arrowrigth" size={50} />
    </div>
  </div>
  );
};

export default Card;
