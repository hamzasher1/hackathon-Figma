
import Categories from "@/components/Categories";
import CompanyLogo from "@/components/companyLogo";

import Hero from "@/components/Hero";
import HotProduct from "@/components/hotProducts";
import OurProduct from "@/components/ourProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyLogo />
      <Categories />
      <HotProduct />
      <OurProduct />
    </>
  );
}
// import Image from "next/image";
// import HeroSection from "@/components/HeroSection"
// import Navbar from "@/components/Navbar";
// //import AboutSection from "@/components/AboutSection";
// export default function Home(){
//   return(
//     <main className="flex min-h-screen flex col bg-[#121212]" >
//       <Navbar/>
//    <div className="container mx-auto px-12 py-4 ">
//      <HeroSection />
//      {/* <AboutSection/> */}
//      </div>
//     </main>
//   )
// }
// // import React from "react";
// // import Link from "next/link";
// // import HeroSection from "@/components/HeroSection";
// // import Navbar from "@/components/Navbar"

// // export default function Home() {
// //   return (
// //     <main>
// //       <Navbar/>
// //     <div> 
// //       <HeroSection/> 
// //       </div>
// //     </main>
// //  )
// // }