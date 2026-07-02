"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import ContactForm from "../Popup";
import { useState } from "react";

const categories = [
  {
    name: "Titanium Dioxide",
    image: "/prod/Titanium Dioxide (TiO₂) – Tipure r902 (2).webp",
  },
  {
    name: "Titanium Rutile",
    image: "/prod/Titanium Dioxide Rutile.webp",
  },
  {
    name: "Color Pigment",
    image: "/prod/Orange Colour Pigment.webp",
  },
  {
    name: "Pigment Powder",
    image: "/prod/Pigment Colour Powder.webp",
  },
  {
    name: "Lithopone",
    image: "/prod/Lithopone Chemical (2).webp",
  },
  {
    name: "Carbon Black",
    image: "/prod/N330 Carbon Black.webp",
  },
];
const products = [
 
    {
    id: "titanium-dioxide-kronos-r2310",
        image:"/bowl6.webp",
    grade: "Titanium Dioxide Kronos ",
    code: "R-2310",
    desc: "Premium Industrial Grade Titanium Dioxide.",
    price:"285"
  },
  {
    id: "titanium-dioxide-kmml-822",
        image:"/bowl2.webp",
    grade: "Titanium Dioxide (TiO₂) - Kmml",
    code: " 822",
    desc: "Economical Textile Grade Anatase Titanium Dioxide.",
    price:"280"
  },
  {
    id: "titanium-dioxide-venator-tr92",
        image:"/bowl3.webp",
    grade: "Titanium Dioxide (TiO₂) - Venator ",
    code: "TR92",
    desc: "High Weather Resistance Titanium Dioxide.",
    price:"257"
  },
  
      {
      id: "titanium-dioxide-kronos-r2220",
          image:"/bowl5.webp",
      grade: "Titanium Dioxide Kronos ",
      code: "R-2220",
      desc: "High Quality Industrial Grade Titanium Dioxide.",
      price:"285"
    },
  {
    id: "titanium-dioxide-dawn-r2195",
        image:"/bowl4.webp",
    grade: "Titanium Dioxide (TiO₂) - Dawn",
    code: "2195",
    desc: "Premium Excellent Whiteness Titanium Dioxide",
     price:"290"
  },

   
  
  {
  id: "titanium-dioxide-r248",
      image:"/BOWL7.webp",
  grade: " Titanium dioxide 248",
  code: "R-248",
  price:"240",
  desc: "Factory Supply High Purity Anatase Titanium Dioxide Powder.",
},
    
];



function CategoryCard({ category }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      <div className="overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-48 md:h-60 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-3">
        <h3 className="font-semibold text-[#062347] text-center  flex items-center justify-center">
          {category.name}
        </h3>

        <div>
        <a  href={"https://wa.link/2fpjmq"} className="mt-3 w-full text-center block bg-[#c8921c] text-white py-2.5 rounded-xl font-medium hover:bg-[#b88418] transition">
           Enquire Now
        </a>
        </div>
      </div>
    </div>
  );
}

export default function Deals() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <section className="py-4 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-[#062347]">
            We Deal In
          </h2>
          <p className="text-[#c8921c] md:text-2xl mt-2">Our Products</p>
        </div>

        {/* Mobile & Tablet Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:hidden">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>

        {/* Desktop Slider */}
        {/* <div className="hidden lg:block">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            speed={1000}
          >
            {categories.map((category, index) => (
              <SwiperSlide key={index}>
                <CategoryCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper> */}
        {/* </div> */} 
        <div className="w-full overflow-hidden">
                    <Swiper
                      modules={[Autoplay]}
                      spaceBetween={20}
                      loop={true}
                      speed={900}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        640: {
                          slidesPerView: 1.3,
                        },
                        768: {
                          slidesPerView: 2,
                        },
                        1024:{
                          slidesPerView:3
                        }
                 
                      }}
                      className="!overflow-visible"
                    >
                      {products.map((item) => (
                        <SwiperSlide key={item?.id}>
                          <Link href={`/inquiry/${item?.id}`}  className="h-[280px] md:h-[320px] bg-[#fafafa] border border-[#ececec] rounded-[10px]  py-2 px-2 hover:shadow-lg transition-all duration-300">
                            
                    <div className="flex flex-row ">
          <div className="flex  justify-center">
                              <Image
                                src={item.image}
                                alt="powder"
                                width={600}
                                height={400}
                                className="object-cover"
                              />
                            </div>
        
                            {/* CONTENT */}
                            <div className="mt-3">
                              <p className="text-[#7a7f89] text-[13px] font-[600]">
                                {item.grade}
                              </p>
        
                              <h3 className="text-[#10254d] font-bold text-[25px] mt-1">
                                {item.code}
                              </h3>
                              <p className="text-lg font-bold text-black mt-3">
                   <span className="text-lg">&#8377;</span> {item.price} <span className="text-sm">/KG</span>
                   </p> 
        
                              <p className="mt-3 text-black text-[15px] leading-[24px]">
                                {item.desc}
                              </p>
        
                              <Link  onClick={(e)=>{e.stopPropagation()}} href={`https://wa.link/2fpjmq`} className="mt-5 whitespace-nowrap flex items-center justify-around gap-2 text-green-500 text-[15px] font-[700]">
                                Get WhatsApp
                                <ChevronRight className="w-4 h-4" />
                              </Link>
                            </div>
        
                    </div>
        
        
                          
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
      </div>
    </section>
    {isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}

    </>
  );
}
