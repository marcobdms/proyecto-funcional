import React, { useEffect } from 'react';
import '../../src/input.css';
import $ from 'jquery';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Center = () => {
  useEffect(() => {
    $('#profile-img').css({ opacity: 0, bottom: '-20px' }).fadeIn(1000).animate({ opacity: 1, bottom: 0 }, 1000);
    $('span').css({ opacity: 0, bottom: '-20px' }).animate({ opacity: 1, bottom: 0 }, 'slow');
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <span className='font-bold text-6xl pl-3 mb-5 drop-shadow-lg' style={{ position: 'relative' }}>
        I'am a Junior Programmer
        <br />
        with cybersecurity skills.
      </span>
      <div className='flex justify-center items-center'>
        <img src="foto-main.png" alt="" width='350' className='rounded-full filter drop-shadow-lg' id="profile-img" style={{ display: 'none' }} />
      </div>
      <div className='mt-2 flex flex-col items-center'>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded drop-shadow-lg">
          <FontAwesomeIcon icon={faAngleDown} className='mr-2' />
          Ver más
        </button>
      </div>
    </div>
  );
};

export default Center;
