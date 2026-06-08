import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutCity({city}) {
  return (
    <section className="py-8 md:py-8 bg-white">
      {" "}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {" "}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {" "}
          {/* Image Section */}{" "}
          <div className="relative">
            {" "}
            <div className="overflow-hidden  shadow-xl shadow-[#C8921C]">
              {" "}
              <Image
                src="/about.png"
                alt="Corechem Corporation"
                width={700}
                height={800}
                className="w-full h-full object-cover"
              />{" "}
            </div>{" "}
            {/* Experience Card */}{" "}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-[#062347] text-white px-6 py-5 rounded-2xl shadow-xl">
              {" "}
              <h3 className="text-3xl font-bold">Trusted</h3>{" "}
              <p className="text-sm opacity-90">
                Industrial Chemical Supplier
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* Content Section */}{" "}
          <div>
            {" "}
            <span className="inline-block px-4 py-2 rounded-full bg-[#C8921C]/10 text-[#C8921C] font-semibold text-sm uppercase tracking-wider">
              {" "}
              About Corechem Corporation{" "}
            </span>{" "}
            <h2 className="text-3xl md:text-5xl font-bold text-[#062347] mt-5 mb-6 leading-tight">
              {" "}
              Your Trusted Titanium Dioxide Supplier in {city}{" "}
            </h2>{" "}
            <p className="text-gray-700  md:text-lg leading-relaxed mb-5">
              {" "}
              Since its establishment, <strong>Corechem Corporation</strong> has
              emerged as a trusted Titanium Dioxide Supplier in  {city},
              specializing in premium-quality Titanium Dioxide and industrial
              raw materials. Our commitment to quality, reliability, and
              customer satisfaction has helped us build long-term relationships
              with manufacturers and businesses across diverse industries.{" "}
            </p>{" "}
            <p className="text-gray-700 md:text-lg leading-relaxed mb-5">
              {" "}
              Backed by an experienced team of professionals and strong sourcing
              partnerships, we maintain stringent quality standards to ensure
              every product delivers exceptional purity, consistency, and
              performance. Our Titanium Dioxide products are widely used in
              paints, coatings, plastics, inks, paper, rubber, and construction
              applications.{" "}
            </p>{" "}
           
            
            
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
