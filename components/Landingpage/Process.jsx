"use client";

import {
  Paintbrush,
  Package,
  Printer,
  FileText,
  CircleDot,
  Sparkles,
  Shirt,
  Building2,
  Wrench,
  Factory,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Paints & Coatings Industry",
    desc: "Our Titanium Dioxide products improve brightness, opacity, weather resistance, and color stability in decorative and industrial coatings.",
    icon: Paintbrush,
  },

  {
    title: "Plastics & Polymer Industry",
    desc: "We supply high-performance TiO₂ solutions that enhance whiteness, UV protection, and processing efficiency in plastic manufacturing applications.",
    icon: Package,
  },

  {
    title: "Printing Ink Industry",
    desc: "Corechem Corporation provides Titanium Dioxide solutions that support excellent color consistency, opacity, and print quality for various ink formulations.",
    icon: Printer,
  },

  {
    title: "Paper Industry",
    desc: "Our products help improve paper brightness, smoothness, opacity, and printability for high-quality paper production.",
    icon: FileText,
  },

  {
    title: "Rubber Industry",
    desc: "We offer reliable Titanium Dioxide solutions that enhance appearance, durability, and performance in rubber manufacturing applications.",
    icon: CircleDot,
  },

  {
    title: "Cosmetics & Personal Care Industry",
    desc: "Our high-purity Titanium Dioxide products are suitable for cosmetic and personal care formulations requiring consistent quality and performance.",
    icon: Sparkles,
  },

  {
    title: "Textile Industry",
    desc: "We support textile manufacturers with Titanium Dioxide solutions used in textile processing and fiber applications.",
    icon: Shirt,
  },

  {
    title: "Construction Materials Industry",
    desc: "Our Titanium Dioxide products are used in construction materials and related industrial applications requiring durability and color stability.",
    icon: Building2,
  },

  {
    title: "Adhesives & Sealants Industry",
    desc: "Corechem Corporation supplies TiO₂ solutions that improve product appearance, consistency, and performance in adhesive and sealant formulations.",
    icon: Wrench,
  },


];

export default function IndustriesWeServe() {
  return (
    <section className="relative overflow-hidden bg-white py-[40px] px-10">
      
      {/* BACKGROUND GRID */}
   

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto max-w-[1700px] px-8">
        
        {/* TOP HEADING */}
        <div className="flex flex-col gap-[40px] xl:flex-row xl:items-end xl:justify-between">
          
          {/* LEFT */}
          <div>
            
            {/* SMALL TITLE */}
            <div className="flex items-center gap-[12px]">
              <span className="text-[#ff5e14] text-[22px] leading-none">
                »
              </span>

              <span className="uppercase tracking-[2px] text-[14px] font-[700] text-[#ff5e14]">
                Industries We Serve
              </span>
            </div>

            {/* MAIN TITLE */}
            <h2 className="mt-[14px] max-w-[1400px] text-[#16171b] text-[44px] leading-[56px] sm:text-[60px] sm:leading-[78px]  font-[700] ">
              Trusted Titanium
         
              Dioxide Supplier
          
              for Diverse Industries
            </h2>
          </div>

          {/* BUTTON */}
          <button className="group flex h-[78px] w-full items-center justify-center gap-[14px] border border-[#dfdfdf] bg-white px-[36px] text-[#111827] shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#111827] hover:bg-[#111827] hover:text-white sm:w-[320px]">
            
            <span className="text-[16px] font-[700]">
              View All Industries
            </span>

            <span className="transition-all duration-300 group-hover:translate-x-[5px]">
              <ArrowRight size={22} strokeWidth={2.3} />
            </span>
          </button>
        </div>

        {/* INDUSTRIES GRID */}
        <div className="mt-[40px] grid grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          
          {industries.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[6px] bg-[#16171b] p-[15px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(0,0,0,0.18)]"
              >
                
                {/* BACKGROUND TEXTURE */}
                <div className="absolute inset-0 opacity-[0.04]">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage:
                        "linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)",
                      backgroundSize: "35px 35px",
                    }}
                  />
                </div>

                {/* ORANGE SHAPE */}
                <div className="absolute bottom-[-30px] right-[20px] h-[120px] w-[120px] rounded-full bg-[#ff5e14]/10 blur-[40px]" />

                {/* CONTENT */}
                <div className="relative z-10 flex gap-[28px]">
                  
                  {/* LEFT ICON */}
                  <div className="flex flex-col items-center">
                    
                    {/* ICON BOX */}
                    <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[6px] bg-white/10 text-[#ff5e14] backdrop-blur-xl transition-all duration-300 group-hover:bg-[#ff5e14] group-hover:text-white group-hover:rotate-[360deg]">
                      <Icon size={38} strokeWidth={1.8} />
                    </div>

                    {/* VERTICAL LINE */}
                    <div className="mt-[22px] h-[110px] w-[1px] bg-white/50 group-hover:bg-orange-600" />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="flex-1">
                    
                    {/* TITLE */}
                    <h3 className="text-white text-[28px] leading-[40px] font-[700] tracking-[-1px] transition-all duration-300 group-hover:text-[#ff5e14]">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="mt-[15px] text-white text-[17px]  font-[400]">
                      {item.desc}
                    </p>

                    {/* READ MORE */}
                    <button className="mt-[20px] inline-flex items-center gap-[10px] text-white text-[18px] font-[500] transition-all duration-300 hover:text-[#ff5e14]">
                      Read More

                      <span className="transition-all duration-300 group-hover:translate-x-[4px]">
                        →
                      </span>
                    </button>
                  </div>
                </div>

                {/* HOVER BORDER */}
                <div className="absolute inset-0 border border-transparent transition-all duration-500 group-hover:border-[#ff5e14]/40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}