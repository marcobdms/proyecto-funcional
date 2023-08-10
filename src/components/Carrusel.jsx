import React from "react";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../src/input.css'
const Card = () => {
  return (

    <div className="flex justify-center items-center mt-5">
      <div className="card1 bg-white rounded-lg overflow-hidden shadow-xl mb-24 p-9"
        style={{ maxWidth: '80%' }}>
        <div className="">
          <h2 className="text-4xl sm:text-7xl font-bold drop-shadow-lg">
            Most Used Lenguages:
          </h2>
        </div>
          <div className="flex justify-between space-x-2 items-center space-y-4 p-20 md:space-y-0 md:flex-row md:justify-between">
            <div className="flex flex-col items-center space-y-4 md:w-1/2">
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
            </div>
            <div className="flex flex-col items-center space-y-4 md:w-1/2">
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
    </div>


  );
};

export default Card;
