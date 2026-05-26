"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function Hero() {
  // Desktop banners
  const desktopBanners = [
      "/banner2.webp",
      "/banner3.webp",
    "/banner1.webp",
  
  ];

  // Mobile banners
  const mobileBanners = [
    "/banner/mob1.png",
    "/banner/mob2.png",
  ];

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-[#f7f7f7]">
        <div className="relative h-[400px] xl:h-[100vh] w-full ">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".hero-next",
              prevEl: ".hero-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop
            className="h-full w-full"
          >
            {desktopBanners.map((desk, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full w-full">
                  {/* Desktop Image */}
                  <Image
                    src={desk}
                    alt={`Desktop Banner ${i + 1}`}
                    fill
                    priority={i === 0}
                    className="hidden md:block max-w-full h-auto"
                  />

                  {/* Mobile Image */}
                  <Image
                    src={mobileBanners[i]}
                    alt={`Mobile Banner ${i + 1}`}
                    fill
                    priority={i === 0}
                    className="block md:hidden object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* PREV BUTTON */}
          <button className="hero-prev absolute left-2 md:left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white md:h-11 md:w-11">
            <ChevronLeft size={20} />
          </button>

          {/* NEXT BUTTON */}
          <button className="hero-next absolute right-2 md:right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white md:h-11 md:w-11">
            <ChevronRight size={20} />
          </button>
        </div>

    
      </section>
    </>
  );
}