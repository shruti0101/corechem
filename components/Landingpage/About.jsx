"use client";

import { Play, Check, ChevronUp } from "lucide-react";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="relative w-full py-7 bg-white overflow-hidden">
      <div className="mx-auto w-full px-10  flex items-center">
        
        {/* ================= LEFT SIDE ================= */}
        <div className="relative">
          
    

          {/* IMAGE CONTAINER */}
          <div className="relative  w-[650px] h-[785px]">
            
            {/* MAIN IMAGE */}
            <Image
              src="/about.png"
              alt="about"
              fill
              priority
              className="object-cover"
            />

    
            {/* BOTTOM BLACK CARD */}
            <div className="absolute left-0 bottom-0 w-[528px] h-[171px] bg-[#111111] z-20 flex items-center">
              
              {/* CONTENT */}
              <div className="flex items-center pl-[71px]">
                
                {/* ICON */}
                <div className="relative w-[70px] h-[70px] mr-[34px]">
                  
                  <div className="absolute bottom-0 left-0 w-[56px] h-[36px] border-[3px] border-white" />
                  <div className="absolute left-[7px] bottom-[35px] w-[10px] h-[27px] border-[3px] border-white border-b-0" />
                  <div className="absolute left-[24px] bottom-[35px] w-[10px] h-[20px] border-[3px] border-white border-b-0" />
                  <div className="absolute right-0 bottom-[13px] w-[24px] h-[24px] rounded-full border-[3px] border-white" />
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-white text-[25px] font-[700] ">
                Corechem Corporation 
                <br></br>
Trusted Titanium Dioxide Supplier
                  </h3>
                </div>
              </div>

              {/* ORANGE STRIP */}
              <div className="absolute right-0 top-0 w-[13px] h-full bg-[#ff5e14]" />
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative pt-[6px] pl-[46px] mt-10">
          
          {/* SMALL HEADING */}
          <div className="flex items-center mt-[2px]">
            <span className="text-[#ff5e14] text-[28px] mr-[11px] leading-none">
              /
            </span>

            <span className="uppercase tracking-[2.7px] text-[17px] font-[600] text-[#707070]">
             About Corechem Corporation
            </span>
          </div>

          {/* MAIN TITLE */}
          <h1 className="mt-[12px] text-black text-[40px] leading-[50px] font-[800]  ">
      Trusted Titanium Dioxide Supplier 
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-[18px] text-justify text-black text-[19px] leading-[31px] font-[400] max-w-[760px]">
        At Corechem Corporation, we specialize in supplying high-quality Titanium Dioxide products to businesses across multiple industries. As a leading Titanium Dioxide Supplier, our mission is to provide reliable chemical solutions that meet international quality standards while ensuring consistent supply and customer-focused service.
As an experienced Titanium Dioxide Supplier, we understand the importance of product purity, color stability, dispersion performance, and cost efficiency. We work closely with manufacturers, distributors, and industrial clients to deliver tailored solutions that meet specific production requirements.
Our extensive supply network and quality assurance processes allow us to serve customers efficiently with timely deliveries and dependable support, making Corechem Corporation a preferred Titanium Dioxide Supplier for global industries.

          </p>

          {/* CHECKLIST */}
          <div className="mt-[16px] space-y-[22px]">
            {[
              "Trusted Titanium Dioxide Supplier for multiple industries.",
              "High-quality products with consistent performance.",
              "Reliable supply solutions and timely delivery.",
              "Customer-focused support with competitive pricing.",
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                
                {/* ICON */}
                <div className="w-[21px] h-[21px] rounded-full bg-[#ff5e14] flex items-center justify-center mr-[17px]">
                  <Check
                    size={12}
                    className="text-white"
                    strokeWidth={3.5}
                  />
                </div>

                {/* TEXT */}
                <span className="text-[#1f2d3d] text-[19px] leading-none font-[700]">
                  {item}
                </span>
              </div>
            ))}
          </div>

      {/* LOWER SECTION */}
<div className=" flex items-end">
  
  {/* LEFT CONTENT */}
  <div>


  

    {/* CONTACT INFO */}
    <div className="mt-[26px] space-y-[14px]">
      
      {/* PHONE */}
      <div className="flex items-center gap-[14px]">
        <div className="w-[42px] h-[42px] rounded-full bg-[#ff5e14] flex items-center justify-center">
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
          href="tel:+919999999999"
          className="text-[#1f2d3d] text-[20px] font-[700] hover:text-[#ff5e14] transition-all"
        >
          +91 99999 99999
        </a>
      </div>

      {/* EMAIL */}
      <div className="flex items-center gap-[14px]">
        <div className="w-[42px] h-[42px] rounded-full bg-[#ff5e14] flex items-center justify-center">
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
          href="mailto:info@sangamplastic.com"
          className="text-[#1f2d3d] text-[20px] font-[700] hover:text-[#ff5e14] transition-all"
        >
          info@sangamplastic.com
        </a>
      </div>
    </div>

    {/* BUTTON */}
  <button className="group relative mt-[24px] h-[74px] w-[245px] overflow-hidden bg-[#ff5e14] px-[12px] text-white uppercase tracking-[1.7px] text-[17px] font-[700] transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(255,94,20,0.35)] active:scale-[0.98]">
  
  {/* Animated Background */}
  <span className="absolute inset-0 bg-[#1f2d3d] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>

  {/* Shine Effect */}
  <span className="absolute top-0 left-[-120%] h-full w-[80px] rotate-[25deg] bg-[rgba(255,255,255,0.18)] blur-md transition-all duration-700 group-hover:left-[130%]"></span>

  {/* Content */}
  <span className="relative z-10 flex items-center justify-center gap-[12px]">
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
      className="transition-transform duration-300 group-hover:translate-x-[6px]"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </span>
</button>
  </div>

  {/* EXPERIENCE BOX */}
  <div className="ml-[208px] w-[272px] h-[243px] bg-[#ececef] flex flex-col items-center justify-center">
    
    <h4 className="text-[#ff5e14] text-[59px] leading-none font-[800]">
      20+
    </h4>

    <p className="mt-[15px] text-center text-[#243447] text-[20px] leading-[31px] font-[500]">
      Years of Working
      <br />
      Experience
    </p>
  </div>
</div>

          {/* FADED RIGHT PATTERN */}
          <div className="absolute right-[-30px] top-[155px] opacity-25 pointer-events-none">
          <Image src="/gear-canvas.svg" alt="Gear" width={820} height={620} />
          </div>

    
        </div>
      </div>
    </section>
  );
}