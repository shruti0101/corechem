"use client";

import {
  ShieldCheck,
  FlaskConical,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Premium Quality",
    desc: "Consistent quality that meets global standards.",
  },
  {
    id: 2,
    icon: FlaskConical,
    title: "Wide Applications",
    desc: "Ideal for paints, plastics,\ninks, coatings & more.",
  },
  {
    id: 3,
    icon: Truck,
    title: "Timely Delivery",
    desc: "Reliable logistics and\non-time dispatch.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Trusted Partner",
    desc: "Serving industries\nacross India & abroad.",
  },
  {
    id: 5,
    icon: Headphones,
    title: "Expert Support",
    desc: "Technical assistance\nwhenever you need.",
  },
];

export default function FeatureStrip() {
  return (
    <section className="w-full rounded-md  mx-auto bg-[#02224b]  overflow-hidden ">
      <div className=" mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
             <div
  key={item.id}
  className={`relative flex flex-col md:flex-row md:justify-items-center md:justify-center items-center gap-5 px-4 py-3 md:py-7 min-h-[118px]
  ${
    index !== features.length - 1
      ? "lg:border-r border-white/10"
      : ""
  }`}
>
  {/* ICON */}
  <div className="shrink-0 flex justify-center md:block">
    <Icon
      strokeWidth={1.8}
      className="w-[48px] h-[48px] text-[#d79a19]"
    />
  </div>

  {/* CONTENT */}
  <div className="text-center md:text-left">
    <h3 className="text-white text-[20px] leading-[24px] font-[700]">
      {item.title}
    </h3>

    <p className="mt-2 text-white/75 text-[14px] leading-[24px] whitespace-pre-line font-[400]">
      {item.desc}
    </p>
  </div>
</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}