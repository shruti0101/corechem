"use client";

import {
  Users,
  Factory,
  Package,
  Globe,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: Users,
    number: "500+",
    title: "Happy Clients",
  },
  {
    id: 2,
    icon: Factory,
    number: "20+",
    title: "Years of Experience",
  },
  {
    id: 3,
    icon: Package,
    number: "100+",
    title: "Products",
  },
  {
    id: 4,
    icon: Globe,
    number: "Pan India",
    title: "Supply Network",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full  bg-[#f5f5f5] border-y border-[#e5e5e5] overflow-hidden">
      <div className=" mx-auto">
        
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className={`relative flex items-center justify-center gap-5 py-6 px-6
                ${
                  index !== stats.length - 1
                    ? "border-r border-[#dcdcdc]"
                    : ""
                }`}
              >
                {/* ICON */}
                <div className="shrink-0">
                  <Icon
                    strokeWidth={2.2}
                    className="w-[42px] h-[42px] text-[#07224b]"
                  />
                </div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-[#07224b] text-[32px] leading-[30px] font-[800]">
                    {item.number}
                  </h3>

                  <p className="mt-1 text-[#7a7a7a] text-[14px] leading-[20px] font-[500]">
                    {item.title}
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