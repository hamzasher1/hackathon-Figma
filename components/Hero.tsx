// "use client";
// import React from 'react'
// import Image from 'next/image'
// import workinggirl2 from './../../public/images/workinggirl2.png'

// const HeroSection = () => {
//   return (
//     <section>
//   <div className="grid grid-cols-1 sm:grid-cols-12">
//    <div className="col-span-7 place-self-center text-center sm:text-left " >
//    <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
//     <span className="text-transparent bg-clip-text bg-gradient-to-r">
//       Welcome to chairy
//     </span>
//       </h1>
//     <h2 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
//     Buy Furniture 
//     Collection For Your
//     Interface
//     </h2>
//     <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
//     I Am A Full Stack Developer and passionate to creat a responsive websites
//     </p>
//     <div>
//     <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-green-700 to-yellow-400 hover:bg-slate-200 text-white">
//       Hire Me</button>
//     </div>
//    </div>
//    <div className="col-span-5 place-self-center mt-4 lg:mt-0">
//      <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
//      <Image
//      src={workinggirl2}
//      alt="Website template"
//      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//      width={300}
//      height={300}
//      />
//      </div>
//    </div>
//   </div>
    
//     </section>
//   )
// }
// export default HeroSection

// // import React from 'react'
// // const HeroSection = () => {
// //   return (
// //   <section>
// //   <div className=" bg-gray-100 grid grid-cols-1 sm:grid-cols-12 items-center justify-between">
// //    <div className="flex flex-col col-span-3 gap-4 text-center items-center" >
// //    <h1 className="font-thin text-lg">
// //     Welcome to chairy
// //     </h1>
// //      <h1>
// //     <span className=" bg-clip-text bg-gradient-to-r bg-black font-bold w-40 h-40">
// //     Best Furniture
// //     Collection For Your 
// //     Interior
// //     </span>
// //     </h1>
// //     </div>
// //     </div>
// //    </section>
// //   )
// // }
// // <button className="text-white w-[230px] h-[60px] p-4 bg-blue-600">Shop Now</button>
// // export default HeroSection;
import React from "react";
import Image from "next/image"; // Import Image component from Next.js

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
          <button className="bg-[#029FAE] w-[171px] text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
            <span>Shop Now</span>
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
                d="M3 12h18M15 18l6-6-6-6"
              />
            </svg>
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <Image
            src="/Product Image.png" // Path relative to the public folder
            alt="Product Image"
            width={434} // Adjust width as needed
            height={584} // Adjust height as needed
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;





