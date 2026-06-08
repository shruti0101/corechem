"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";



export default function FAQCity({city}) {

  const faqs = [
  {
    question: "What is Titanium Dioxide used for?",
    answer:
      "Titanium Dioxide is widely used in paints, coatings, plastics, inks, paper, rubber, and construction materials due to its excellent whiteness, opacity, and UV-resistant properties.",
  },
  {
    question: `Why is Corechem Corporation a trusted Titanium Dioxide Supplier in ${city}?`,
    answer:
      "Corechem Corporation is known for supplying premium-quality Titanium Dioxide, ensuring consistent product quality, competitive pricing, and timely delivery to various industries.",
  },
  {
    question: "What grades of Titanium Dioxide do you supply?",
    answer:
      "We supply both Rutile and Anatase grades of Titanium Dioxide to meet the specific requirements of different industrial applications.",
  },
  {
    question: "Which industries can benefit from Titanium Dioxide?",
    answer:
      "Industries such as paints & coatings, plastics, printing inks, paper manufacturing, rubber, adhesives, and construction materials commonly use Titanium Dioxide.",
  },
  {
    question: "What are the advantages of using Titanium Dioxide?",
    answer:
      "Titanium Dioxide offers high opacity, excellent brightness, superior whiteness, UV resistance, durability, and improved product appearance.",
  },
  {
    question: `Do you provide bulk quantities of Titanium Dioxide in ${city}?`,
    answer:
      "Yes, Corechem Corporation supplies Titanium Dioxide in both bulk and customized quantities based on customer requirements.",
  },
  {
    question: "How does Titanium Dioxide improve paint quality?",
    answer:
      "Titanium Dioxide enhances paint opacity, brightness, color retention, and weather resistance, resulting in long-lasting and high-performance coatings.",
  },
  {
    question: "Can Titanium Dioxide be used in plastic manufacturing?",
    answer:
      "Yes, Titanium Dioxide is extensively used in plastics to improve whiteness, UV stability, durability, and overall product aesthetics.",
  },
  {
    question:
      "How do you ensure the quality of your Titanium Dioxide products?",
    answer:
      "We source our products from reputed manufacturers and follow strict quality standards to ensure consistent performance and reliability.",
  },
  {
    question: `How can I place an order for Titanium Dioxide in ${city}?`,
    answer:
      "You can contact Corechem Corporation directly through our sales team for product details, pricing, bulk requirements, and delivery assistance.",
  },
];
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#f7f7f7] py-[30px] md:py-[40px] ">
      {/* BACKGROUND */}
      <div className="absolute right-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-[#BE8220]/5 blur-[90px]" />

      <div className="absolute left-[-100px] bottom-[0px] h-[260px] w-[260px] rounded-full bg-[#111827]/[0.03] blur-[80px]" />

      {/* CONTAINER */}
      <div className="mx-auto max-w-[1280px] px-4">
        {/* TOP HEADER */}
        <div className="text-center">
          {/* SMALL TITLE */}
          <span className="inline-block text-[13px] font-[700] uppercase tracking-[1.8px] text-[#BE8220]">
            Frequently Asked Questions
          </span>

          {/* TITLE */}
          <h2 className="mx-auto mt-[10px] max-w-[820px] text-[#16171b] text-[34px] leading-[46px] sm:text-[46px] sm:leading-[58px] font-[700] tracking-[-1.5px]">
            Common Questions About Our Titanium Dioxide Supply Solutions
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
                      ? "border-[#BE8220]/30 bg-white shadow-[0_15px_45px_rgba(0,0,0,0.05)]"
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
                        isActive ? "text-[#BE8220]" : "text-[#16171b]"
                      }`}
                    >
                      {faq.question}
                    </h3>

                    {/* ICON */}
                    <div
                      className={`flex h-[42px] w-[42px] min-w-[42px] items-center justify-center rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-[#BE8220] text-white"
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
