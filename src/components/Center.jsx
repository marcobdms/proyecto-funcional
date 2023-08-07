import React, { useEffect } from "react";
import "../../src/input.css";
import $ from "jquery";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Center = () => {
  useEffect(() => {
    $("#profile-img")
      .css({ opacity: 0, bottom: "-20px" })
      .fadeIn(1000)
      .animate({ opacity: 1, bottom: 0 }, 1000);
    $(".animate-me")
      .css({ opacity: 0, bottom: "-20px" })
      .animate({ opacity: 1, bottom: 0, translateY: -10 }, "slow");
  }, []);

  return (
    <div name="home" className="relative">
      <div className="sm:block md:hidden lg:hidden xl:block mt-32 absolute "
        >
          <ul className="space-y-8">
            <li className="flex justify-between items-center h-1/4 px-4">
              <a
                href="#"
                className="flex justify-between items-center w-full text-3xl"
              >
                <>
                  {" "}
                  <FaLinkedin />
                </>
              </a>
            </li>
            <li className="flex justify-between items-center h-1/4 px-4 ml">
              <a
                href="#"
                className="flex justify-between items-center w-full text-3xl"
              >
                <>
                  {" "}
                  <FaGithub />
                </>
              </a>
            </li>
            <li className="flex justify-between items-center h-1/4 px-4 ml">
              <a href="#" className="flex justify-between items-center w-full">
                <img src="hackthebox.svg" alt="" width={30} />
              </a>
            </li>
          </ul>
        </div>
      <div
        className="max-w-screen-lg mx-auto flex 
        flex-col items-center justify-center
        px-4 md:flex-row mt-16"
      >

        <div className="drop-shadow-lg w-50">
          <img
            src="foto-main.png"
            alt=""
            className="rounded-full mx-auto w-2/3 
            md:w-full drop-shadow-lg"
            id="profile-img"
          />
        </div>

        <div className="mb-1 pl-9 flex flex-col justify-center drop-shadow-lg animate-me mt-16">
          <h2 className="text-4xl sm:text-7xl font-bold">
            I'm a Junior Programmer with cybersecurity skills.
          </h2>

          <p className="text-gray-500 py-4 animate-me">
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab enim
            maiores aperiam tempora quasi quis commodi corrupti nihil minus
            nesciunt possimus excepturi, assumenda aliquid accusamus."
          </p>

          <div className="flex justify-center items-center mr-8 mt-0">
            <button>
              <span>
                <MdOutlineKeyboardArrowDown className="arrowdown" size={50} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Center;
