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

/* SWIPER */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

/* SWIPER CSS */
import "swiper/css";
import "swiper/css/pagination";

const services = [
  {
    title: "Titanium Dioxide",
    desc: "High-quality titanium dioxide for superior whiteness, brightness, and opacity in industrial applications.",
    image: "/cat4.jpg",
    icon: FlaskConical,
  },

  {
    title: "Titanium Dioxide Rutile",
    desc: "Premium rutile grade titanium dioxide offering excellent UV resistance and durability for coatings and plastics.",
    image: "/cat5.avif",
    icon: ShieldCheck,
  },

  {
    title: "Color Pigment",
    desc: "Vibrant and long-lasting color pigments ideal for paints, plastics, rubber, and industrial formulations.",
    image: "/cat1.jpg",
    icon: Palette,
  },

  {
    title: "Pigment Powder",
    desc: "Fine-quality pigment powders with excellent dispersion, consistency, and rich color performance.",
    image: "/cat6.webp",
    icon: PackageSearch,
  },

  {
    title: "Lithopone",
    desc: "Reliable lithopone chemical compound used for coatings, inks, plastics, and whitening applications.",
    image: "/cat7.jpg",
    icon: Droplets,
  },

  {
    title: "Caustic Soda",
    desc: "Industrial-grade caustic soda widely used in chemical processing, textiles, paper, and cleaning solutions.",
    image: "/cat8.webp",
    icon: Beaker,
  },

  {
    title: "Calcium Carbonate",
    desc: "High-purity calcium carbonate powder for plastics, paints, rubber, paper, and construction industries.",
    image: "/cat9.jpg",
    icon: Atom,
  },

  {
    title: "Optical Brighter",
    desc: "Advanced optical brighteners that enhance brightness and whiteness in textiles, plastics, and detergents.",
    image: "/cat2.jpg",
    icon: Sparkles,
  },

  {
    title: "Carbon",
    desc: "Premium carbon materials designed for industrial manufacturing, pigmentation, and chemical applications.",
    image: "/cat3.jpg",
    icon: Circle,
  },
];

export default function IndustrialServicesSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center bg-no-repeat py-[40px] "
      style={{
        backgroundImage: "url('/bg-parallax.webp')",
      }}
    >
      {/* DARK OVERLAY */}
 


      {/* RIGHT ORANGE BAR */}
      <div className="absolute right-0 bottom-[25px] h-[60px] w-[8px] bg-[#ff5e14]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-[1600px] px-5">
        
        {/* HEADING */}
        <div className="text-center">
          
          {/* SMALL TITLE */}
          <div className="flex items-center justify-center gap-[10px]">
            <span className="text-[#ff5e14] text-[22px] leading-none">
              /
            </span>

            <span className="uppercase tracking-[2.8px] text-[14px] font-[700] text-white/90">
              Our corechem categories
            </span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="mt-[20px] text-white text-[40px] leading-[55px] sm:text-[48px] sm:leading-[58px] lg:text-[60px] lg:leading-[75px] font-[800] tracking-[-1.5px]">
            We Provide Best Quality
            <br />
            Industrial Services
          </h2>
        </div>

        {/* SWIPER */}
        <div className="mt-[53px]">
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
                  
                  <div className="group relative overflow-hidden bg-black transition-all duration-500 hover:-translate-y-3">
                    
                    {/* IMAGE */}
                    <div className="relative h-[280px] overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110"
                      />

                    </div>

                    {/* CONTENT */}
                    <div className="relative bg-black px-[24px] pb-[42px] pt-[52px] text-center">
                      
                      {/* ICON */}
                      <div className="absolute left-1/2 top-0 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff5e14] shadow-[0_15px_35px_rgba(255,94,20,0.4)] transition-all duration-500 group-hover:rotate-[360deg]">
                        <Icon
                          size={26}
                          strokeWidth={2}
                          className="text-white"
                        />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-white text-[22px] leading-[32px] font-[700] min-h-[65px]">
                        {service.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="mt-[18px] text-white text-[16px] leading-[31px] font-[400]">
                        {service.desc}
                      </p>
                    </div>

                    {/* BORDER */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-[#ff5e14]/70 transition-all duration-500" />
                  </div>
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
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .industrialSwiper .swiper-pagination-bullet-active {
          width: 34px;
          border-radius: 999px;
          background: #ff5e14;
        }
      `}</style>
    </section>
  );
}