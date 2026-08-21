import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (

    <div className='w-full shadow-md shadow-black/30 relative z-10 border-b border-gray-100 h-[80px] md:h-[100px] shrink-0 bg-white flex justify-between items-center px-4 md:px-0'>

      <div className="logo ml-0 md:ml-13 flex items-center">
        <a href="#"> <img className='w-[60px] h-[30px] md:w-[80px] md:h-[40px] object-cover ' src='https://furniro.archisacademy.com/assets/logo-eeab7dd6.svg' alt="image" /></a>
        <h1 className='font-extrabold text-2xl md:text-4xl ml-2'>Furniro</h1>
      </div>


      <div className="p-4 font-bold text-[#333] hidden md:block">
        <ul className="flex justify-center items-center gap-3 md:gap-6">
          <li><a href="#home" className="inline-block px-4 py-2 rounded-md">Home</a></li>
          <li><a href="#about" className="inline-block px-4 py-2 rounded-md">About</a></li>
          <li><a href="#contact" className="inline-block px-4 py-2 rounded-md">Contact</a></li>
          <li><a href="#shop" className="inline-block px-4 py-2 rounded-md">Shop</a></li>
        </ul>
      </div>


      <div className="icons hidden md:flex items-center text-2xl gap-8 mr-0 md:mr-13">
        <FiUserCheck />
        <IoSearchOutline />
        <FaRegHeart />
        <IoCartOutline />
      </div>


      <div className="block md:hidden text-3xl mr-2 cursor-pointer text-[#333]">
        <RxHamburgerMenu />

      </div>

    </div>
  )
}

export default Navbar

