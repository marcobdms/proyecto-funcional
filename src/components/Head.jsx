import React from 'react';
import '../../src/input.css';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Head = () => {

  return (
    <div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded drop-shadow-lg">
          <FontAwesomeIcon icon={faAngleDown} className='mr-2' />
          Ver más
        </button>
    </div>
  );
};

export default Head