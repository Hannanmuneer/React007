import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";


const Navbar = () => {
  return (

    <div className='w-full shadow-md shadow-black/30 relative z-10 border-b border-gray-100 h-[120px] md:h-[100px] shrink-0 bg-white flex flex-col md:flex-row justify-between items-center py-4 md:py-0 gap-4 md:gap-0'>
  <div className="logo ml-0 md:ml-13 flex items-center">
    <a href="#"> <img className='w-[60px] h-[30px] md:w-[80px] md:h-[40px] object-cover ' src='https://furniro.archisacademy.com/assets/logo-eeab7dd6.svg' alt="image" /></a>
    <h1 className='font-extrabold text-2xl md:text-4xl'>Furniro</h1>
  </div>
  <div className="p-4 font-bold text-[#333]">
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
</div>
  )
}

export default Navbar


// import React from 'react';
// import { TbUserExclamation } from 'react-icons/tb'; // Ya MdOutlinePersonAlert
// import { IoSearchOutline, IoHeartOutline, IoCartOutline } from 'react-icons/io5';

// const Navbar = () => {
//   return (
//     <header className="w-full bg-white px-10 py-6 flex items-center justify-between shadow-sm border-b border-gray-100">
      
//       {/* 1. Logo Section (Left) */}
//       <div className="flex items-center gap-3">
//         <a href="#">
//           <img 
//             className="w-10 h-8 object-contain" 
//             src="https://furniro.archisacademy.com/assets/logo-eeab7dd6.svg" 
//             alt="Furniro Logo" 
//           />
//         </a>
//         <h1 className="font-extrabold text-3xl tracking-tight text-black font-sans">
//           Furniro
//         </h1>
//       </div>

//       {/* 2. Navigation Links (Center) */}
//       <nav>
//         <ul className="flex items-center gap-14 font-medium text-black text-base">
//           <li>
//             <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
//           </li>
//           <li>
//             <a href="#shop" className="hover:text-gray-600 transition-colors">Shop</a>
//           </li>
//           <li>
//             <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
//           </li>
//           <li>
//             <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
//           </li>
//         </ul>
//       </nav>

//       {/* 3. Action Icons (Right) */}
//       <div className="flex items-center gap-8 text-2xl text-black">
//         <button className="hover:text-gray-600 transition-colors">
//           <TbUserExclamation />
//         </button>
//         <button className="hover:text-gray-600 transition-colors">
//           <IoSearchOutline />
//         </button>
//         <button className="hover:text-gray-600 transition-colors">
//           <IoHeartOutline />
//         </button>
//         <button className="hover:text-gray-600 transition-colors">
//           <IoCartOutline />
//         </button>
//       </div>

//     </header>
//   );
// };

// export default Navbar;


 // <div className='w-full h-18 bg-red-400 flex justify-between items-center'>
    //   <div className="logo ml-13 flex items-center">
    //     <a href="#"> <img className='w-[80px] h-[40px] object-cover ' src='	https://furniro.archisacademy.com/assets/logo-eeab7dd6.svg' alt="image" /></a>
    //     <h1 className='font-extrabold text-4xl'>Furniro</h1>
    //   </div>
    //   <div className="p-4 font-bold  text-black">
    //     <ul className="flex items-center gap-6">
    //       <li>
    //         <a
    //           href="#home"
    //           className="inline-block px-4 py-2 rounded-md"
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#about"
    //           className="inline-block px-4 py-2 rounded-md "
    //         >
    //           About
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#contact"
    //           className="inline-block px-4 py-2 rounded-md  "
    //         >
    //           Contact
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#shop"
    //           className="inline-block px-4 py-2 rounded-md "
    //         >
    //           Shop
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="icons mr-13 flex items-center text-2xl gap-8">
    //     <FiUserCheck />
    //     <IoSearchOutline />
    //     <FaRegHeart />
    //     <IoCartOutline />
    //   </div>
    // </div>