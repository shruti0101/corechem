"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Procurement Manager",
    image: "/clients/client-1.jpg",
    company: "/brand.png",
    review:
      "Corechem Corporation has been a trusted partner for our raw material requirements. Their Titanium Dioxide quality is always consistent and reliable.",
  },

  {
    name: "Amit Verma",
    role: "Operations Head",
    image: "/clients/client-2.jpg",
    company: "/brand.png",
    review:
      "We are highly satisfied with their timely deliveries, competitive pricing, and professional customer support throughout every order.",
  },

  {
    name: "Priya Mehta",
    role: "Manufacturing Director",
    image: "/clients/client-3.jpg",
    company: "/brand.png",
    review:
      "Their products perform exceptionally well in our manufacturing process. Corechem always ensures premium quality and smooth communication.",
  },

  {
    name: "Sandeep Patel",
    role: "Supply Chain Head",
    image: "/clients/client-4.jpg",
    company: "/brand.png",
    review:
      "Excellent service and dependable product supply. The team at Corechem Corporation is responsive, professional, and easy to work with.",
  },
];
export default function TestimonialSection() {
  return (
    <section className="relative overflow-hidden bg-white py-5 md:py-[50px] ">
      {/* LEFT TOP CIRCLE */}
      <div className="absolute left-[-38px] top-[48px] h-[74px] w-[74px] rounded-full border border-[#d8d8d8]" />

      {/* ORANGE DOT */}
      <div className="absolute left-[0px] top-[75px] h-[5px] w-[5px] rounded-full bg-[#4B3089]" />

      {/* CONTAINER */}
      <div className="mx-auto max-w-[1580px] px-5">
        {/* TOP HEADER */}
        <div className="flex flex-col gap-[30px] lg:flex-row lg:items-start lg:justify-between">
          {/* LEFT */}
          <div>
            <span className="uppercase tracking-[1px] text-[14px] font-[700] text-[#4B3089]">
              Testimonials
            </span>

            <h2 className="mt-[12px] max-w-[760px] text-[#16171b] text-[42px]  font-[700] ">
              What People Say About
              <br />
              Corechem Corporation
            </h2>
          </div>

          {/* NAVIGATION */}
          <div className="flex items-center gap-[14px]">
            <button className="testimonial-prev flex h-[62px] w-[62px] items-center justify-center border border-[#dddddd] bg-white text-[#16171b] transition-all duration-300 hover:border-[#BE8220] hover:bg-[#BE8220] hover:text-white">
              ←
            </button>

            <button className="testimonial-next flex h-[62px] w-[62px] items-center justify-center border border-[#dddddd] bg-gradient-to-r from-[#2B4D9D] to-[#4B3089] text-white transition-all duration-300 hover:bg-[#16171b]">
              →
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="mt-[35px]">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={28}
            slidesPerView={1}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: ".testimonial-prev",
              nextEl: ".testimonial-next",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
            className="!overflow-visible"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="group relative overflow-hidden rounded-[2px] border border-[#ebebeb] bg-[#F5F5F5] px-[36px] pb-[14px] pt-[18px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                  {/* TOP INFO */}
                  <div className="flex items-start justify-between gap-[16px]">
                    {/* LEFT */}
                    <div className="flex items-start gap-[18px]">
                      {/* INFO */}
                      <div className="pt-[2px]">
                        <h3 className="text-[#16171b] text-[20px] leading-none font-[700]">
                          {item.name}
                        </h3>

                        <p className="mt-[14px] text-[#6d6d6d] text-[16px] leading-none">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* REVIEW */}
                  <p className="mt-[30px] md:mt-[34px] text-[#666666] text-[18px] md:leading-[38px] font-[400]">
                    {item.review}
                  </p>

                  {/* LINE */}
                  <div className="mt-[34px] h-[1px] w-full bg-[#ebebeb]" />

                  {/* FOOTER */}
                  <div className="mt-[20px] md:mt-[28px] flex items-center justify-between">
                    {/* STARS */}
                    <div className="flex items-center gap-[4px]  text-transparent bg-clip-text bg-gradient-to-r from-[#2B4D9D] to-[#4B3089]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={18}
                          fill="#4B3089"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>

                    {/* QUOTE ICON */}
                    <div className="text-[#d8d8d8] transition-all duration-300 group-hover:text-[#BE8220]/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="72"
                        height="72"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5H5v8h5" />
                        <path d="M14 21c3 0 7-1 7-8V5h-5v8h5" />
                      </svg>
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
