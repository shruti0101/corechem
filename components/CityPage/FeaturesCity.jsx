"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";

import {
  FaAward,
  FaShippingFast,
  FaUserCog,
  FaHeadset,
} from "react-icons/fa";



export default function FeaturesCity() {
  const features = [
  {
    title: "Premium Quality",
    desc: "Consistent & reliable Titanium Dioxide products",
    icon: FaAward,
  },
  {
    title: "Bulk Supply",
    desc: "Timely nationwide delivery for Every orders",
    icon: FaShippingFast,
  },
  {
    title: "Industry Expertise",
    desc: "Experienced professionals in chemical supply",
    icon: FaUserCog,
  },
  {
    title: "Customer Support",
    desc: "Dedicated assistance for all your requirements",
    icon: FaHeadset,
  },
];
  return (
    <section className="py-5 md:py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold text-[#062347]">
            Why Choose Corechem Corporation?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Trusted Titanium Dioxide supplier delivering quality, reliability, and value.
          </p>
        </div>

        {/* MOBILE SWIPER */}
        <div className="block md:hidden">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={15}
            slidesPerView={1}
            freeMode={true}
            loop={true}
          >
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <SwiperSlide key={index}>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-[23vh]">

                    <div className="w-12 h-12 rounded-xl bg-[#062347] text-white flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>

                    <h4 className="font-bold text-[#062347] text-lg">
                      {item.title}
                    </h4>

                    <p className="text-gray-600 text-sm mt-2">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl bg-[#062347] text-white flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>

                <h4 className="font-bold text-[#062347] text-lg">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}