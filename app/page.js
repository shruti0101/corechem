import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";


import Whychoose from "@/components/Landingpage/Whychoose";
import Process from "@/components/Landingpage/Process";
import Faq from "@/components/Landingpage/Faq";
import TestimonialSlider from "@/components/Landingpage/Testimonials";
import Formsection from "@/components/Landingpage/Formsection";
// import Popup from "@/components/Popup";
// import CityPage from "../components/City";
import Dedicated from "@/components/Landingpage/Dedicated";
import Otherproduct from "@/components/Landingpage/Otherpro";
import Parallex from "@/components/Landingpage/Parallex.jsx"
import Loactions from "@/components/Locations";


export default function Home() {
  return (
    <>
      {/* <Popup></Popup> */}
      <Hero />

      <About />

      <Categories />
       <Otherproduct></Otherproduct>
      <Countup />
 
     
      <Dedicated></Dedicated>

    <Parallex></Parallex>
      <Process></Process>
      <Whychoose />

      <TestimonialSlider></TestimonialSlider>
      <Faq></Faq>
      {/* <Loactions /> */}

      {/* <CityPage /> */}
    </>
  );
}
