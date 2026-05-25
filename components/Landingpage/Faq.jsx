"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What industries use Titanium Dioxide?",
    answer:
      "Titanium Dioxide is widely used in paints, coatings, plastics, printing inks, paper, rubber, cosmetics, textiles, and various industrial manufacturing applications.",
  },

  {
    question: "What types of Titanium Dioxide do you supply?",
    answer:
      "Corechem Corporation supplies high-quality rutile and anatase Titanium Dioxide grades suitable for multiple industrial and commercial applications.",
  },

  {
    question: "Do you provide bulk Titanium Dioxide supply?",
    answer:
      "Yes, we offer bulk supply solutions along with flexible order quantities and customized packaging options based on customer requirements.",
  },

  {
    question: "Can you support international shipments?",
    answer:
      "Yes, as a trusted Titanium Dioxide Supplier, we provide reliable international supply and logistics support for global customers.",
  },

  {
    question: "What are the advantages of Rutile Titanium Dioxide?",
    answer:
      "Rutile Titanium Dioxide offers excellent opacity, brightness, weather resistance, UV protection, and durability, making it ideal for paints, coatings, and plastics.",
  },

  {
    question: "What is Anatase Titanium Dioxide used for?",
    answer:
      "Anatase Titanium Dioxide is commonly used in paper, rubber, textiles, interior coatings, and applications requiring high brightness and good dispersion performance.",
  },

  {
    question: "Do you provide customized packaging solutions?",
    answer:
      "Yes, Corechem Corporation offers customized packaging and supply solutions to meet specific industrial and operational requirements.",
  },

  {
    question: "How do you ensure product quality?",
    answer:
      "We follow strict quality control procedures and reliable sourcing practices to ensure consistent product performance and industry-standard compliance.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-[40px] ">
      
      {/* BACKGROUND */}
      <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#ff5e14]/5 blur-[90px]" />

      <div className="absolute left-[-100px] bottom-[0px] h-[260px] w-[260px] rounded-full bg-[#111827]/[0.03] blur-[80px]" />

      {/* CONTAINER */}
      <div className="mx-auto max-w-[1280px] px-4">
        
        {/* TOP HEADER */}
        <div className="text-center">
          
          {/* SMALL TITLE */}
          <span className="inline-block text-[13px] font-[700] uppercase tracking-[1.8px] text-[#ff5e14]">
            Frequently Asked Questions
          </span>

          {/* TITLE */}
          <h2 className="mx-auto mt-[10px] max-w-[820px] text-[#16171b] text-[34px] leading-[46px] sm:text-[46px] sm:leading-[58px] font-[700] tracking-[-1.5px]">
            Common Questions About Our
         
            Titanium Dioxide Supply Solutions
          </h2>
        </div>

        {/* FAQ WRAPPER */}
        <div className="mx-auto mt-[15px] max-w-[1050px]">
          
          <div className="space-y-[16px]">
            
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-[10px] border transition-all duration-300 ${
                    isActive
                      ? "border-[#ff5e14]/30 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)]"
                      : "border-[#e7e7e7] bg-white"
                  }`}
                >
                  
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-center justify-between gap-[20px] px-[24px] py-[24px] text-left transition-all duration-300 hover:bg-[#fafafa]"
                  >
                    
                    {/* TEXT */}
                    <h3
                      className={`text-[18px] leading-[30px] font-[600] transition-all duration-300 sm:text-[20px] ${
                        isActive
                          ? "text-[#ff5e14]"
                          : "text-[#16171b]"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* ICON */}
                    <div
                      className={`flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#ff5e14] text-white"
                          : "bg-[#f4f4f4] text-[#16171b]"
                      }`}
                    >
                      {isActive ? (
                        <Minus size={18} strokeWidth={2.5} />
                      ) : (
                        <Plus size={18} strokeWidth={2.5} />
                      )}
                    </div>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`grid transition-all duration-500 ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      
                      <div className="border-t border-[#f1f1f1] px-[24px] pb-[24px] pt-[20px]">
                        
                        <p className="max-w-[920px] text-[#666666] text-[16px] leading-[32px] sm:text-[17px]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}