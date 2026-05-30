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
    image:"/bowl1.webp",
    grade: "Titanium Dioxide (TiO₂) – Jihani",
    code: "6618",
    desc: "High brightness and excellent durability for applications.",
  },
  {
    id: 2,
        image:"/bowl2.webp",
    grade: "Titanium Dioxide (TiO₂) - Kmml",
    code: " 822",
    desc: "Excellent dispersibility and strong hiding power.",
  },
  {
    id: 3,
        image:"/bowl3.webp",
    grade: "Titanium Dioxide (TiO₂) - Venator ",
    code: " TR92",
    desc: "High whiteness and ideal for indoor applications.",
  },
  {
    id: 4,
        image:"/bowl4.webp",
    grade: "Titanium Dioxide (TiO₂) - Dawn",
    code: "2195",
    desc: "Premium titanium dioxide with excellent opacity.",
  },

    {
    id: 4,
        image:"/bowl5.webp",
    grade: "Titanium Dioxide Kronos ",
    code: "R2220",
    desc: "Premium titanium dioxide with excellent opacity.",
  },

    {
    id: 4,
        image:"/bowl6.webp",
    grade: "Titanium Dioxide Kronos ",
    code: "R2310",
    desc: "Premium titanium dioxide with excellent opacity.",
  },

    {
    id: 4,
        image:"/BOWL7.webp",
    grade: " Titanium dioxide 248",
    code: "R-248",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
];

export default function TitaniumSection() {
  return (


    <>
    
    
    <section className="w-full bg-white pt-10 overflow-hidden">
      <div className="w-full mx-auto px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[350px_1fr] gap-2 items-start">
          
          {/* LEFT CONTENT */}
          <div className="pt-2 ">
            <p className="text-[#10254d] font-[700] uppercase text-[15px] tracking-wide relative inline-block">
              OUR PRODUCTS
              <span className="absolute left-0 -bottom-2 w-[55px] h-[3px] bg-[#d39a21]"></span>
            </p>

            <h2 className="mt-5 text-[28px] nimate-pulse  font-[800] text-[#10254d]">
              High Performance <br /> <span className="text-[#d39a21]">Titanium Dioxide   </span> 
         
                
            
            </h2>

            <p className="mt-1   text-black text-[18px] leading-[28px] max-w-[250px]">
              We offer a wide range of Titanium Dioxide grades
              suitable for diverse industrial applications.
            </p>

            <button className="mt-4 flex items-center gap-2 text-[#d39a21] font-[700] text-[15px] hover:gap-3 transition-all duration-300">
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
                  slidesPerView: 3,
                },
         
              }}
              className="!overflow-visible"
            >
              {products.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="min-h-[270px] bg-[#fafafa] border border-[#ececec] rounded-[10px]  py-6 hover:shadow-lg transition-all duration-300">
                    
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

                      <p className="mt-3 text-black text-[15px] leading-[24px]">
                        {item.desc}
                      </p>

                      <button className="mt-5 flex items-center gap-2 text-[#d39a21] text-[15px] font-[700]">
                        View Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

            </div>


                  
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

        </div>
      </div>



      

    </section>








<section className="relative z-10 mt-8 px-4 lg:px-8">
  <div className="mx-auto w-full rounded-[28px] border border-white/20 bg-white p-4 shadow-[0_25px_80px_rgba(0,0,0,0.12)] backdrop-blur-xl lg:p-6">

    <form className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">

      {/* Full Name */}
      <div>
        <input
          type="text"
          placeholder="Full Name"
          className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#c8921c] focus:bg-white"
        />
      </div>

      {/* Company Name */}
      <div>
        <input
          type="text"
          placeholder="Company Name"
          className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#c8921c] focus:bg-white"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#c8921c] focus:bg-white"
        />
      </div>

      {/* Phone */}
      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="h-[60px] w-full rounded-2xl border  bg-slate-50 px-5 text-[15px] outline-none transition-all duration-300 border-[#c8921c] focus:bg-white"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="group h-[60px] min-w-[220px] rounded-2xl bg-gradient-to-r from-[#c8921c] to-[#b88216] px-8 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(200,146,28,0.35)]"
      >
        Request Quote →
      </button>

    </form>

  </div>
</section>




    </>
  );
}