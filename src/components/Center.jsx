import React, { useEffect } from 'react';
import '../../src/input.css';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  useEffect(() => {
    $('#profile-img').css({ opacity: 0, bottom: '-20px' }).fadeIn(1000).animate({ opacity: 1, bottom: 0 }, 1000);
    $('span').css({ opacity: 0, bottom: '-20px' }).animate({ opacity: 1, bottom: 0 }, 'slow');
  }, []);

  return (
    <div className='flex justify-center items-center h-screen mt-1'>
        <span className='font-bold text-6xl pl-3 mb-5 drop-shadow-lg' style={{ position: 'relative' }}>
        I'am a Junior Programmer
        <br />
        with cybersecurity skills.
        </span>
      <div className='flex justify-center items-center pl-10' style={{ position: 'relative'  }}>
        <img src="foto-main.png" alt="" width='350' className='rounded-full filter drop-shadow-lg' id="profile-img" style={{ display: 'none' }} />
      </div>
        <div>
            <FontAwesomeIcon icon="fa-solid fa-angle-down" style={{color: "#ffffff",}} />   
        </div>
    </div>
  );
};

export default Navbar;
