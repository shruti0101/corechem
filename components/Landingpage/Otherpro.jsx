"use client";

import Image from "next/image";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

/* SWIPER CSS */
import "swiper/css";
import "swiper/css/navigation";

const products = [
  {
    title: "Titanium Dioxide",
    desc: "Premium quality titanium dioxide for plastics, paints and industrial coating applications.",
    image: "/pro1.jpeg",
  },

  {
    title: "Color Pigment",
    desc: "High-performance color pigments with superior brightness and durability.",
    image: "/pro2.jpeg",
  },

  {
    title: "Calcium Carbonate",
    desc: "Industrial-grade calcium carbonate powder for rubber, paper and plastics.",
    image: "/pro1.jpeg",
  },

  {
    title: "Optical Brighter",
    desc: "Advanced optical brighteners for enhanced whiteness and finishing quality.",
    image: "/pro2.jpeg",
  },
];

export default function ProductShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#f3f3f3] py-[60px] ">
      
      {/* RIGHT INDUSTRIAL BG */}
      <div className="absolute right-0 bottom-0 opacity-[0.06] pointer-events-none">
        <Image
          src="/images/industry-shape.png"
          alt="shape"
          width={620}
          height={420}
          className="object-contain h-[600px]"
        />
      </div>

      {/* RIGHT FLOAT BUTTON */}
      <button className="absolute right-[42px] top-1/2 z-20 hidden h-[54px] w-[54px] -translate-y-1/2 items-center justify-center rounded-full bg-[#ececec] text-[#222] transition-all duration-300 hover:bg-[#ff0000] hover:text-white xl:flex">
        <span className="text-[30px] leading-none">+</span>
      </button>

      {/* BOTTOM SCROLL BUTTON */}
      <button className="absolute bottom-[42px] right-[28px] z-20 flex h-[64px] w-[64px] items-center justify-center bg-[#ff0000] text-white transition-all duration-300 hover:scale-105">
        <ArrowUpRight size={26} strokeWidth={2.8} />
      </button>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto flex max-w-[1720px] flex-col gap-[55px] px-5 lg:flex-row">
        
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-[430px] lg:pt-[18px]">
          
          {/* SMALL TITLE */}
          <div className="flex items-center gap-[10px]">
            <span className="text-[#ff0000] text-[24px] leading-none">
              »
            </span>

            <span className="uppercase tracking-[1px] text-[15px] font-[500] text-[#ff0000]">
              Services
            </span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="mt-[26px] text-[#1d1d1d] text-[56px] leading-[72px] font-[700] tracking-[-2px]">
            Providing
            <br />
            solutions of
            <br />
            every kind
          </h2>

          {/* DESC */}
          <p className="mt-[34px] max-w-[340px] text-[#666] text-[18px] leading-[46px] font-[400]">
            Engines prime movers and exhaust gas turbochargers.
          </p>

          {/* CTA */}
          <button className="group mt-[34px] border-b border-[#444] pb-[6px] text-[#444] text-[16px] font-[600] uppercase tracking-[-0.2px] transition-all duration-300 hover:text-[#ff0000] hover:border-[#ff0000]">
            Start Your Next Gain Project
          </button>

          {/* NAVIGATION */}
          <div className="mt-[62px] flex items-center gap-[18px]">
            
            {/* PREV */}
            <button className="product-prev flex h-[50px] w-[50px] items-center justify-center border border-[#dddddd] bg-transparent text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white">
              <ArrowLeft size={22} />
            </button>

            {/* NEXT */}
            <button className="product-next flex h-[50px] w-[50px] items-center justify-center border border-[#dddddd] bg-transparent text-[#555] transition-all duration-300 hover:bg-[#111] hover:text-white">
              <ArrowRight size={22} />
            </button>
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="min-w-0 flex-1">
          
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={34}
            slidesPerView={1}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".product-prev",
              nextEl: ".product-next",
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 2.4,
              },

              1536: {
                slidesPerView: 3,
              },
            }}
            className="productSwiper"
          >
            {products.map((item, index) => (
              <SwiperSlide key={index}>
                
                <div className="group overflow-hidden bg-[#f7f7f7]">
                  
                  {/* IMAGE */}
                  <div className="relative h-[350px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={350}
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-all duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="bg-[#f3f3f3] px-[38px] pb-[34px] pt-[36px]">
                    
                    {/* TITLE */}
                    <h3 className="text-[#222] text-[24px] leading-[44px] font-[700] tracking-[-0.7px] transition-all duration-300 group-hover:text-[#ff0000]">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="mt-[10px] text-[#666] text-[17px] leading-[35px] font-[400]">
                      {item.desc}
                    </p>

                    {/* BOTTOM */}
                    <div className="mt-[32px] flex items-center justify-between">
                      
                      <button className="text-[#666] text-[16px] font-[600] transition-all duration-300 hover:text-[#ff0000]">
                        View Details
                      </button>

                      <button className="flex h-[38px] w-[38px] items-center justify-center bg-[#e9e9e9] text-[#444] transition-all duration-300 hover:bg-[#ff0000] hover:text-white">
                        <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}