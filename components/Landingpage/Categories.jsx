"use client";

import Image from "next/image";
import {
  FlaskConical,
  ShieldCheck,
  Palette,
  PackageSearch,
  Droplets,
  Beaker,
  Atom,
  Sparkles,
  Circle,
} from "lucide-react";
import Reveal from "./Reveal";

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

/* SWIPER CSS */
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const services = [
  {
    title: "Titanium Dioxide",
    href:"/categories/titanium-dioxide",
    desc: "High-quality titanium dioxide for superior whiteness, brightness, and opacity in industrial applications.",
    image: "/cat4.jpg",
    icon: FlaskConical,
  },

  {
    title: "Titanium Dioxide Rutile",
    href:"/categories/titanium-dioxide-rutile",
    desc: "Premium rutile grade titanium dioxide offering excellent UV resistance and durability for coatings and plastics.",
    image: "/cat5.avif",
    icon: ShieldCheck,
  },

  {
    title: "Color Pigment",
    href:"/categories/color-pigment",
    desc: "Vibrant and long-lasting color pigments ideal for paints, plastics, rubber, and industrial formulations.",
    image: "/cat1.jpg",
    icon: Palette,
  },

  {
    title: "Pigment Powder",
    href:"/categories/pigment-powder",
    desc: "Fine-quality pigment powders with excellent dispersion, consistency, and rich color performance.",
    image: "/cat6.webp",
    icon: PackageSearch,
  },

  {
    title: "Lithopone",
    href:"/categories/lithopone",
    desc: "Reliable lithopone chemical compound used for coatings, inks, plastics, and whitening applications.",
    image: "/cat7.jpg",
    icon: Droplets,
  },

  // {
  //   title: "Caustic Soda",
  //   desc: "Industrial-grade caustic soda widely used in chemical processing, textiles, paper, and cleaning solutions.",
  //   image: "/cat8.webp",
  //   icon: Beaker,
  // },

  // {
  //   title: "Calcium Carbonate",
  //   desc: "High-purity calcium carbonate powder for plastics, paints, rubber, paper, and construction industries.",
  //   image: "/cat9.jpg",
  //   icon: Atom,
  // },

  {
    title: "Optical Brighter",
    href:"/categories/optical-brightening",
    desc: "Advanced optical brighteners that enhance brightness and whiteness in textiles, plastics, and detergents.",
    image: "/cat2.jpg",
    icon: Sparkles,
  },

  {
    title: "Carbon",
    href:"/categories/carbon-black",
    desc: "Premium carbon materials designed for industrial manufacturing, pigmentation, and chemical applications.",
    image: "/cat3.jpg",
    icon: Circle,
  },
];

export default function IndustrialServicesSection() {
  return (


<Reveal>

    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-[40px] "
      style={{
        backgroundImage: "url('/bg-parallax.webp')",
      }}
    >
   

     



      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* HEADING */}
        <div className="text-center">
          
          {/* SMALL TITLE */}
          <div className="flex items-center justify-center gap-[10px]">
            <span className="text-[#4B3089] text-[20px] sm:text-[22px] leading-none">
              /
            </span>

            <span className="uppercase tracking-[2.4px] sm:tracking-[2.8px] text-[12px] sm:text-[14px] font-[700] text-white/90">
              Our corechem categories
            </span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="mt-[18px] text-white text-[30px] leading-[42px] sm:text-[42px] sm:leading-[56px] lg:text-[60px] lg:leading-[75px] font-[800] tracking-[-1.5px]">
            We Provide Best Quality
            <br />
            Industrial Services
          </h2>
        </div>

        {/* SWIPER */}
        <div className="mt-[45px] sm:mt-[53px]">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              540: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
              1536: {
                slidesPerView: 5,
              },
            }}
            className="industrialSwiper !pb-[70px]"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <SwiperSlide key={index}>
                  
                  <Link href={service.href} className="group  relative overflow-hidden rounded-[8px] bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-3 h-[600px] hover:shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
                    
                    {/* TOP GLOW */}
                    <div className="absolute left-0 top-0 z-10 h-[3px] w-0 bg-[#2B4D9D] transition-all duration-700 group-hover:w-full" />

                    {/* IMAGE */}
                    <div className="relative h-[240px]  lg:h-[280px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      {/* IMAGE OVERLAY */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="relative bg-[#0d0d0d] px-[20px] sm:px-[24px] md:pb-[16px] sm:pb-[42px] pt-[48px] sm:pt-[52px] text-center">
                      
                      {/* ICON */}
                      <div className="absolute left-1/2 top-0 flex h-[58px] w-[58px] sm:h-[62px] sm:w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2B4D9D] shadow-[0_15px_35px_rgba(255,94,20,0.4)] transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110">
                        <Icon
                          size={26}
                          strokeWidth={2}
                          className="text-white"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-white text-[20px] sm:text-[22px] leading-[30px] sm:leading-[32px] font-[700] min-h-[65px]">
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-[15px] sm:mt-[18px] pb-2 text-white/80 text-[15px] sm:text-[16px] leading-[28px] sm:leading-[31px] font-[400]">
                        {service.desc}
                      </p>
                    </div>

                    {/* BORDER */}
                    <div className="absolute inset-0 border border-white/5 group-hover:border-[#BE8220]/70 transition-all duration-500" />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* CUSTOM SWIPER STYLE */}
      <style jsx global>{`
        .industrialSwiper .swiper-pagination {
          bottom: 0px !important;
        }

        .industrialSwiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.35);
          opacity: 1;
          transition: all 0.35s ease;
        }

        .industrialSwiper .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 999px;
          background: #2B4D9D;
          box-shadow: 0 0 18px rgba(255, 94, 20, 0.7);
        }
      `}</style>
    </section>
</Reveal>

  );
}