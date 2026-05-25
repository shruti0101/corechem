"use client";

import Image from "next/image";

export default function IndustrialCTA() {
  return (
    <section className="w-full overflow-hidden">
      
      {/* MAIN WRAPPER */}
      <div className="relative flex h-[265px] w-full flex-col lg:flex-row">
        
        {/* LEFT ORANGE SIDE */}
        <div className="relative flex w-full items-center bg-[#ff5e14] px-[35px] py-[50px] sm:px-[60px] md:px-[90px] lg:w-[64.5%]">
          
          {/* TITLE */}
          <h2 className="max-w-[720px] text-white text-[38px] leading-[52px] sm:text-[52px] sm:leading-[68px] lg:text-[58px] lg:leading-[72px] font-[700] tracking-[-2px]">
            Contact to Expertise in the
            <br />
            manufacturing industry
          </h2>

          {/* CENTER CIRCLE ICON */}
          <div className="absolute right-[-58px] top-1/2 z-20 hidden h-[118px] w-[118px] -translate-y-1/2 items-center justify-center rounded-full border-[8px] border-white bg-[#111111] lg:flex">
            
            {/* YOUR SVG ICON */}
            <img
              src="/icons/industry-icon.svg"
              alt="icon"
              className="h-[52px] w-[52px] object-contain"
            />
          </div>
        </div>

        {/* RIGHT IMAGE SIDE */}
        <div className="relative h-[265px] w-full lg:w-[35.5%]">
          
          <Image
            src="/images/cta-worker.jpg"
            alt="workers"
            fill
            priority
            className="object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* MOBILE ICON */}
        <div className="absolute left-1/2 top-[100%] z-20 flex h-[95px] w-[95px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[7px] border-white bg-[#111111] lg:hidden">
          <img
            src="/icons/industry-icon.svg"
            alt="icon"
            className="h-[42px] w-[42px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}