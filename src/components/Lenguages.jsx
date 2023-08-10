import React from "react";
// import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import '../../src/input.css'
const Card = () => {
  return (
  
  <div className="flex justify-center items-center mt-12">
    <div className="card1
      bg-white rounded-lg overflow-hidden shadow-xl mb-32"
      style={{ width: '1300px', height: '800px' }}>
        <div className="flex justify-center items-center p-12 mt-8">
        <img
        src="imagenuno.jpg"
        alt="bash"
        className="mt-3 mb-3 max-w-sm rounded-xl" 
        width={300} height={200}
      />
      <img
        src="imagendos.jpg"
        alt="bash"
        className="mt-3 mb-3 max-w-sm rounded-xl " 
        width={300} height={200}
      />
      <img
        src="imagentres.jpg"
        alt="bash"
        className="mt-3 mb-3 max-w-sm rounded-xl" 
        width={300} height={200}
      />
        </div>
      <div>
      </div>
    </div>
  </div>


  );
};

export default Card;