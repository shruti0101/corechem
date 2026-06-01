"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import Link from "next/link";
export default function AboutUsSection() {
  return (

    <Reveal>


   <section className="relative w-full py-10  bg-white overflow-hidden">
  <div className="w-full mx-auto px-4 md:px-7 ">
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14  items-center">
      
      {/* ================= LEFT IMAGE SECTION ================= */}
      <div className="relative w-full">
        
        {/* MAIN IMAGE */}
        <div className="relative w-full h-[420px] sm:h-[550px] lg:h-[720px] overflow-hidden rounded-[6px]">
          <Image
            src="/about.png"
            alt="About"
            fill
            priority
          
            className="object-contain"
          />

          {/* BLACK CARD */}
          <div className="absolute bottom-0 left-0 w-[92%] sm:w-[80%] bg-[#1C293C] px-5 sm:px-7 py-5 sm:py-7 flex items-center justify-between">
            
            <div className="flex items-center gap-4 sm:gap-6">
              
              {/* ICON */}
              <div className="relative min-w-[55px] h-[55px] sm:min-w-[70px] sm:h-[70px]">
                <div className="absolute bottom-0 left-0 w-[56px] h-[36px] border-[3px] border-white" />
                <div className="absolute left-[7px] bottom-[35px] w-[10px] h-[27px] border-[3px] border-white border-b-0" />
                <div className="absolute left-[24px] bottom-[35px] w-[10px] h-[20px] border-[3px] border-white border-b-0" />
                <div className="absolute right-0 bottom-[13px] w-[24px] h-[24px] rounded-full border-[3px] border-white" />
              </div>

              {/* TEXT */}
              <h3 className="text-white text-[17px] sm:text-[22px] lg:text-[25px] leading-[1.4] font-[700]">
                Corechem Corporation
                <br />
                Trusted Titanium Dioxide Supplier
              </h3>
            </div>

            {/* ORANGE STRIP */}
            <div className="absolute top-0 right-0 w-[10px] h-full bg-[#BE8220]" />
          </div>
        </div>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="relative z-10">
        
        {/* SMALL TITLE */}
        <div className="flex items-center gap-2">
          <span className="text-[#BE8220] text-[26px] leading-none">
            /
          </span>

          <span className="uppercase tracking-[2px] text-[13px] sm:text-[15px] font-[700] text-[#707070]">
            About Corechem Corporation
          </span>
        </div>

        {/* MAIN HEADING */}
        <h2 className="mt-2 text-[32px] z-50 sm:text-[40px] font-[800] ">
          Trusted Titanium Dioxide Supplier
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-2 text-[15px] sm:text-[18px]  leading-[33px] text-black text-justify">
          At Corechem Corporation, we specialize in supplying high-quality
          Titanium Dioxide products to businesses across multiple industries.
          As a leading Titanium Dioxide Supplier, our mission is to provide
          reliable chemical solutions that meet international quality
          standards while ensuring consistent supply and customer-focused
          service.
        
          As an experienced Titanium Dioxide Supplier, we understand the
          importance of product purity, color stability, dispersion
          performance, and cost efficiency. We work closely with
          manufacturers, distributors, and industrial clients to deliver
          tailored solutions that meet specific production requirements.
          <br />
          <br />
          Our extensive supply network and quality assurance processes allow
          us to serve customers efficiently with timely deliveries and
          dependable support.
        </p>

        {/* CHECKLIST */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8">
          {[
            "Trusted supplier for multiple industries.",
            "High-quality products with consistency.",
            "Reliable supply and timely delivery.",
            "Competitive pricing and support.",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              
              <div className="min-w-[22px] h-[22px] rounded-full bg-[#BE8220] flex items-center justify-center mt-[3px]">
                <Check
                  size={12}
                  className="text-white"
                  strokeWidth={3.5}
                />
              </div>

              <p className="text-[15px] sm:text-[17px] font-[700] text-black leading-[1.6]">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* CONTACT + EXPERIENCE */}
        <div className="mt-5 flex flex-col xl:flex-row items-start xl:items-center gap-8">
          
          {/* LEFT */}
          <div className="flex-1">
            
            {/* PHONE */}
            <div className="flex items-center gap-4">
              <div className="w-[46px] h-[46px] rounded-full bg-[#BE8220] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2.4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.57 2.28a2 2 0 01-.45 1.91l-1.27 1.27a16 16 0 006.72 6.72l1.27-1.27a2 2 0 011.91-.45l2.28.57A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>

              <a
                href="tel:+919818544039"
                className="text-[18px] sm:text-[20px] font-[700] text-[#1f2d3d] hover:text-[#BE8220] transition"
              >
                +91 9818544039
              </a>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 mt-2">
              <div className="w-[46px] h-[46px] rounded-full bg-[#BE8220] flex items-center justify-center shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="2.4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-16 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <a
                href="mailto:corechemcorporation@gmail.com"
                className="text-[15px] sm:text-[18px] font-[700] text-[#1f2d3d] hover:text-[#BE8220] transition break-all"
              >
                corechemcorporation@gmail.com
              </a>
            </div>

            {/* BUTTON */}
            <button className="group relative mt-8 h-[65px] w-[220px] overflow-hidden bg-[#BE8220] text-white uppercase tracking-[1.5px] text-[15px] font-[700] transition-all duration-500 hover:scale-[1.03]">
              
              <span className="absolute inset-0 bg-[#1f2d3d] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>

              <Link href={"/products"} className="relative z-10 flex items-center justify-center gap-3 h-full">
                Explore Now

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-[6px]hidden md:block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </button>
          </div>

          {/* EXPERIENCE BOX */}
          <div className="w-full sm:w-[270px] h-[220px] bg-[#f3f3f5] flex flex-col items-center justify-center px-6">
            
            <h4 className="text-[#BE8220] text-[55px] leading-none font-[800]">
              20+
            </h4>

            <p className="mt-4 text-center text-[#243447] text-[19px] leading-[30px] font-[500]">
              Years of Working
              <br />
              Experience
            </p>
          </div>
        </div>

        {/* BG SHAPE */}
        <div className="absolute right-[-120px] top-[120px] -z-10 opacity-[0.20] hidden xl:block pointer-events-none">
          <Image
            src="/gear-canvas.svg"
            alt="Gear"
            width={950}
            height={650}
          />
        </div>
      </div>
    </div>
  </div>
</section>
    </Reveal>
  );
}