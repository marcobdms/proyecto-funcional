import React from "react";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../src/input.css'
const Card = () => {
  return (
  
  <div className="flex justify-center items-center mt-12">
    <div className="card1
      bg-white rounded-lg overflow-hidden shadow-xl mb-32"
      style={{ height: '400px' }}>
        <div className="flex mt-12 justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold drop-shadow-lg">
            Most Used Lenguages
          </h2>
        </div>
        <div className="flex flex-col items-center space-y-4 p-20 md:flex-row md:space-x-12">
              <img
                src="bash.png"
                alt="bash"
                className="w-16 h-16 md:w-32 md:h-32 rounded-xl drop-shadow-xl"
              />
              <img
                src="css.png"
                alt="css"
                className="w-16 h-16 md:w-32 md:h-32 rounded-xl drop-shadow-xl"
              />
              <img
                src="nodejs.png"
                alt="nodejs"
                className="w-16 h-16 md:w-32 md:h-32 rounded-xl drop-shadow-xl"
              />
              <img
                src="post.png"
                alt="post"
                className="w-16 h-16 md:w-32 md:h-32 rounded-xl drop-shadow-xl"
              />
              <img
                src="python.png"
                alt="python"
                className="w-16 h-16 md:w-32 md:h-32 rounded-xl drop-shadow-xl"
              />
              <img
                src="react.png"
                alt="react"
                className="w-16 h-16 md:w-32 md:h-32 rounded-xl drop-shadow-xl"
              />
            </div>
    </div>
  </div>


  );
};

export default Card;
