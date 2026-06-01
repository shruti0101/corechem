"use client";
import Link from "next/link";
import {
  Droplets,
  Layers,
  FileText,
  Palette,
  Sparkles,
  Pill,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    title: "Coatings",
    icon: Layers,
    description:
      "Premium titanium dioxide solutions for industrial and decorative coatings.",
  },
  {
    title: "Plastics",
    icon: Droplets,
    description:
      "High-opacity pigments designed for durability and performance.",
  },
  {
    title: "Paper",
    icon: FileText,
    description:
      "Enhancing brightness, smoothness, and print quality in paper products.",
  },
  {
    title: "Inks",
    icon: Palette,
    description:
      "Reliable color consistency and superior pigment dispersion.",
  },
  {
    title: "Pharma & Cosmetics",
    icon: Pill,
    description:
      "High-purity ingredients for cosmetic and pharmaceutical applications.",
  },
  {
    title: "Special Applications",
    icon: Sparkles,
    description:
      "Custom-engineered solutions for unique industrial requirements.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="relative overflow-hidden bg-blue-200 py-10">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#C8921C]/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C8921C]/10 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mx-auto mb-5 max-w-5xl text-center">
          <span className="inline-flex items-center rounded-full bg-[#C8921C]/10 px-5 py-2 text-sm font-semibold text-[#C8921C]">
           Applications of Titanium Dioxide
          </span>

          <h2 className="mt-3 text-4xl font-bold md:whitespace-nowrap text-slate-900 md:text-5xl">
            Delivering Excellence Across Industries
          </h2>

          <p className="mt-4 text-lg text-black">
            Advanced Titanium Dioxide solutions engineered to meet the evolving
            needs of coatings, plastics, paper, inks, cosmetics and specialty
            applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[30px] bg-white p-5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(200,146,28,0.15)]"
              >
                {/* Gold Top Border */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-[#C8921C] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#C8921C]/10">
                  <Icon
                    size={38}
                    className="text-blue-300"
                  />
                </div>

                <h3 className="mb-2 text-3xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mb-4 leading-relaxed text-black">
                  {industry.description}
                </p>

<Link href="">


                <button className="flex items-center gap-2 font-semibold text-black transition-all duration-300 group-hover:gap-4">
                  Explore Industry
                  <ArrowRight size={18} />
                </button>
</Link>

                {/* Corner Accent */}
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#C8921C]/5 transition-all duration-500 group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}