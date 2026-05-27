"use client";

import Image from "next/image";
import {
  ChevronRight,
  User,
  Phone,
  Mail,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const products = [
  {
    id: 1,
    grade: "Rutile",
    code: "ZR-965",
    desc: "High brightness and excellent durability for various applications.",
  },
  {
    id: 2,
    grade: "Rutile",
    code: "NR-950",
    desc: "Excellent dispersibility and strong hiding power.",
  },
  {
    id: 3,
    grade: "Anatase",
    code: "R-248",
    desc: "High whiteness and ideal for indoor applications.",
  },
  {
    id: 4,
    grade: "Rutile",
    code: "TR-900",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
];

export default function TitaniumSection() {
  return (
    <section className="w-full bg-white pt-10 overflow-hidden">
      <div className="w-full mx-auto px-10">
        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr_330px] gap-5 items-start">
          
          {/* LEFT CONTENT */}
          <div className="pt-2">
            <p className="text-[#10254d] font-[700] uppercase text-[15px] tracking-wide relative inline-block">
              OUR PRODUCTS
              <span className="absolute left-0 -bottom-2 w-[55px] h-[3px] bg-[#d39a21]"></span>
            </p>

            <h2 className="mt-5 text-[32px]   font-[800] text-[#10254d]">
              High Performance Titanium Oxide
         
                
            
            </h2>

            <p className="mt-2 text-black text-[15px] leading-[28px] max-w-[250px]">
              We offer a wide range of Titanium Dioxide grades
              suitable for diverse industrial applications.
            </p>

            <button className="mt-8 flex items-center gap-2 text-[#d39a21] font-[700] text-[15px] hover:gap-3 transition-all duration-300">
              View All Products
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* SWIPER SLIDER */}
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
         
              }}
              className="!overflow-visible"
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="min-h-[250px] bg-[#fafafa] border border-[#ececec] rounded-[10px] px-6 py-6 hover:shadow-lg transition-all duration-300">
                    
                    {/* IMAGE */}
                    <div className="flex justify-center">
                      <Image
                        src="/powder.png"
                        alt="powder"
                        width={120}
                        height={120}
                        className="object-contain"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="mt-3">
                      <p className="text-[#7a7f89] text-[13px] font-[600]">
                        {item.grade}
                      </p>

                      <h3 className="text-[#10254d] text-[34px] leading-[40px] font-[800] mt-1">
                        {item.code}
                      </h3>

                      <p className="mt-3 text-[#6f7684] text-[14px] leading-[24px]">
                        {item.desc}
                      </p>

                      <button className="mt-5 flex items-center gap-2 text-[#d39a21] text-[15px] font-[700]">
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#07224b] rounded-[10px] p-3">
            <h3 className="text-white text-[20px] font-[800]">
              Get a Free Quote
            </h3>

            <div className="w-[55px] h-[3px] bg-[#d39a21] mt-3"></div>

            <div className="mt-3 space-y-4">
              
              {/* NAME */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7a7a7a]" />

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full h-[52px] rounded-[5px] bg-white pl-12 pr-4 text-[14px] outline-none"
                />
              </div>

              {/* PHONE */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7a7a7a]" />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full h-[52px] rounded-[5px] bg-white pl-12 pr-4 text-[14px] outline-none"
                />
              </div>

              {/* EMAIL + SELECT */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7a7a7a]" />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-[52px] rounded-[5px] bg-white pl-12 pr-4 text-[14px] outline-none"
                  />
                </div>

                <select className="w-full h-[52px] rounded-[5px] bg-white px-4 text-[14px] outline-none text-[#6f7684]">
                  <option>Your Requirement</option>
                </select>
              </div>

              {/* BUTTON */}
              <button className="w-full h-[56px] rounded-[5px] bg-[#d39a21] text-white font-[700] text-[17px] flex items-center justify-center gap-2 hover:bg-[#be8a1c] transition-all duration-300">
                Submit Inquiry
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}