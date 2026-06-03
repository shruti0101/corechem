import Image from "next/image";
import Hero from "@/components/Landingpage/Hero";
import About from "@/components/Landingpage/About";
import Categories from "@/components/Landingpage/Categories";
import Countup from "@/components/Landingpage/Countup";
import Application from "@/components/Landingpage/Application"

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
import Clientele from "@/components/Landingpage/Clientele";
import Belowhero from "@/components/Landingpage/Belowhero"
import Facilitybar from "@/components/Landingpage/Facilitybar"
import Facilitybar2 from "@/components/Landingpage/Facilitybar2"
export default function Home() {
  return (
    <>
      {/* <Popup></Popup> */}
      <Hero />
      <Facilitybar></Facilitybar>
      <Belowhero></Belowhero>
    

      <About />

      <Categories />
        <Facilitybar2></Facilitybar2>
       <Otherproduct></Otherproduct>
      <Countup />
 
     <Clientele></Clientele>
      <Dedicated></Dedicated>
<Application></Application>
    {/* <Parallex></Parallex> */}
      <Process></Process>
      <Whychoose />

      <TestimonialSlider></TestimonialSlider>
      <Faq></Faq>
      {/* <Loactions /> */}

      {/* <CityPage /> */}
    </>
  );
}
