"use client";

import { memo, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Move outside component
const desktopBanners = [
  "/banner2.webp",
  "/banner1.webp",
];

const mobileBanners = [
  "/corechem banner2.webp",
  "/corechem banner1.webp",
];

function Hero() {
  const modules = useMemo(
    () => [Navigation, Pagination, Autoplay],
    []
  );

  return (
    <section className="w-full bg-[#f7f7f7]">
      <div className="relative h-[400px] xl:h-[80vh] w-full">
        <Swiper
          modules={modules}
          navigation={{
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop
          preloadImages={false}
          lazyPreloadPrevNext={1}
          watchSlidesProgress={false}
          observer={false}
          observeParents={false}
          className="h-full w-full"
        >
          {desktopBanners.map((desk, i) => (
            <SwiperSlide key={desk}>
              <div className="relative h-full w-full">
                {/* Desktop */}
                <Image
                  src={desk}
                  alt={`Desktop Banner ${i + 1}`}
                  fill
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={75}
                  sizes="100vw"
                  className="hidden md:block object-cover"
                />

                {/* Mobile */}
                <Image
                  src={mobileBanners[i]}
                  alt={`Mobile Banner ${i + 1}`}
                  fill
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  quality={75}
                  sizes="100vw"
                  className="block md:hidden object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Previous */}
        <button className="hero-prev absolute left-2 md:left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white md:h-11 md:w-11">
          <ChevronLeft size={20} />
        </button>

        {/* Next */}
        <button className="hero-next absolute right-2 md:right-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white md:h-11 md:w-11">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}

export default memo(Hero);