// "use client";
// import Link from 'next/link'
// import React, { useState } from 'react'
// import NavLink from "./NavLink"
// import { Bars3Icon, XMarkIcon } from ""
// import MenuOverlay from './MenuOverlay';
// const navLinks = [
//  {
//   title:"About",
//   path:"#about",
//  },
//  {
//   title:"Projects",
//   path:"#projects",
//  },
//  {
//   title:"Contact",
//   path:"#contact",
//  }
// ]

//  const Navbar = () => {
//    const [navbarOpen , setNavbarOpen] = useState(false);
//   return (
//    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
//     <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
//     <Link href={"/"} className="text-2x1 md:text-5xl text-white from from font-semibold">
//       HANI
//     </Link>
//     <div className="mobile-menu block md:hidden">
//      {!navbarOpen ? (
//           <button
//            onClick={() => setNavbarOpen(true)}
//            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
//           <Bars3Icon className="h-5 w-5"/>
//           </button>
//         ) :(
//           <button 
//           onClick={() => setNavbarOpen(false)}
//           className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
//            <XMarkIcon className="h-5 w-5"/>
//            </button>
//         )
//       }
//     </div>
//     <div className="mobile-menu block ">
  
//      <div className="menu block md:w-auto" id="navbar">
//       <ul className="flex  p-4 md:p-0 md:flex-row md:space-x-8 mt-0 justify-items-center right-10 ">
//        {navLinks.map((link, title) => (
//         <li key={'index'}>
//       <NavLink href={link.path} title={link.title} />
//         </li>  
//          ))}
//      </ul>  
//      </div> 
//    </div>
//    </div>
//   {/* {navbarOpen ? <MenuOverlay links={navLinks} /> : null}  */}
//   </nav>
//   )
//  }
//  export default Navbar;

// // import React from 'react'
// // import Link from 'next/link'
// // const Navbar = () => {
// //   return (
// //    <nav>
// //     <div className="container mx-auto px-12 py-4 ">
// //    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
// //     <div>
// //    <Link href={"/"} className="text-2x1 md:text-5xl text-white from from font-semibold">
// //      Comforty
// //    </Link> 
// //     <h1 className="flex justify-between px-4 shadow-2xl cursor-pointer">
// //       <li>Home</li>
// //       <li>About</li>
// //       <li>Product</li>
// //       <li>Cart</li>
// //     </h1>
// //     </div>
// //    </div>
// //   </div>
// //     </nav>
// //   )
// // }

// // export default Navbar
"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-white pt-[14px] pb-[14px]">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 ml-3">
        {/* Desktop Menu (Visible above 768px, hidden on mobile) */}
        <div className="hidden md:flex gap-8 ml-3">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Shop
          </Link>
          <Link href="/product" className="text-[14px] font-medium">
            Product
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium">
            About
          </Link>
        </div>

        {/* Contact Information (Visible above 768px) */}
        <div className="hidden md:flex items-center gap-4 ml-auto mr-4">
          <span className="font-normal text-[#636270] text-[14px]">
            Contact:
          </span>
          <span className="font-medium text-[#272343] text-[14px] ml-1">
            (808) 555-0111
          </span>
        </div>

        {/* Mobile Menu Button (Visible below 768px) */}
        <button
          className="lg:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Items (Visible below 768px) */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
          <Link href="/" className="text-[#007580] text-[14px] font-medium">
            Home
          </Link>
          <Link href={""} className="text-[14px] font-medium">
            Shop
          </Link>
          <Link href="/product" className="text-[14px] font-medium">
            Product
          </Link>
          <Link href={"#"} className="text-[14px] font-medium">
            Pages
          </Link>
          <Link href="/about" className="text-[14px] font-medium">
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;