"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Globe2,
  WalletCards,
  BriefcaseBusiness,
  PackageCheck,
 Headset,
} from "lucide-react";

const features = [
  {
    title: "High-Quality Titanium Dioxide Products",
    desc: "We supply premium-grade TiO₂ products that meet international quality standards and deliver consistent industrial performance.",
    icon: BadgeCheck,
  },

  {
    title: "Reliable Global Supply Network",
    desc: "As an experienced Titanium Dioxide Supplier, we ensure timely deliveries and uninterrupted product availability for customers worldwide.",
    icon: Globe2,
  },

  {
    title: "Competitive Pricing Solutions",
    desc: "We provide cost-effective Titanium Dioxide solutions without compromising on quality, consistency, or reliability.",
    icon: WalletCards,
  },

  {
    title: "Wide Industry Experience",
    desc: "Our expertise allows us to serve multiple industries, including paints, plastics, inks, paper, rubber, and cosmetics.",
    icon: BriefcaseBusiness,
  },

  {
    title: "Customized Supply Solutions",
    desc: "We offer flexible packaging, bulk supply options, and tailored solutions based on specific customer requirements.",
    icon: PackageCheck,
  },

  {
    title: "Dedicated Customer Support",
    desc: "Our team provides responsive communication, technical assistance, and dependable service to support your business needs.",
    icon: Headset,
  },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-[#f7f7f7] py-[50px] ">
      
      <div className="mx-auto max-w-[1320px] ">
        
        <div className="grid items-start gap-[45px] lg:grid-cols-[1fr_520px]">
          
          {/* LEFT SIDE */}
          <div>
            
            {/* SMALL TITLE */}
            <span className="text-[13px] font-[700] uppercase tracking-[1.5px] text-[#ff5e14]">
              Why Choose Us
            </span>

            {/* MAIN TITLE */}
            <h2 className="mt-[10px] max-w-[760px] text-[#16171b] text-[34px] leading-[46px]  sm:leading-[54px] font-[700] tracking-[-1.5px]">
              Why Choose Corechem Corporation as a Trusted Titanium Dioxide Supplier?
            </h2>

            {/* FEATURES */}
            <div className="mt-[38px] grid gap-[18px]">
              
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group flex gap-[18px] rounded-[8px] border border-[#e8e8e8] bg-white p-[22px] transition-all duration-300 hover:border-[#ff5e14]/30 hover:shadow-[0_12px_35px_rgba(0,0,0,0.05)]"
                  >
                    
                    {/* ICON */}
                    <div className="flex h-[62px] w-[62px] min-w-[62px] items-center justify-center rounded-[8px] bg-[#ff5e14]">
                      <Icon
                        size={28}
                        strokeWidth={2}
                        className="text-white"
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      
                      {/* TITLE */}
                      <h3 className="text-[#16171b] text-[20px] leading-[30px] font-[700]">
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p className="mt-[8px] text-[#5f6773] text-[15px] leading-[28px]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="sticky top-[50px]">
            
            <div className="relative overflow-hidden rounded-[10px]">
              
              {/* IMAGE */}
              <div className="relative h-[720px] w-full">
                <Image
                  src="/test.webp"
                  alt="Corechem Corporation"
                  fill
                  className="object-cover"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              {/* EXPERIENCE CARD */}
              <div className="absolute bottom-[25px] left-[25px] rounded-[8px] bg-white px-[24px] py-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                
                <h4 className="text-[#ff5e14] text-[38px] leading-none font-[700]">
                  15+
                </h4>

                <p className="mt-[8px] text-[#16171b] text-[14px] leading-[24px] font-[500]">
                  Years of Trusted
                  <br />
                  Industry Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}