"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import { Hospital } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  Store,
  Hotel,
  Home,
  Leaf,
  Warehouse,
  Truck,
  Tags,
  Handshake,
} from "lucide-react";
import Products from "@/components/CityPage/Products";
import AboutCity from "@/components/CityPage/AboutCity";
import WhychooseCity from "@/components/CityPage/WhychooseCity";
import CTACity from "@/components/CityPage/CTACity";
import FAQCity from "@/components/CityPage/FAQCity";
import BelowCTA from "@/components/CityPage/BelowCTA";
import FeaturesCity from "@/components/CityPage/FeaturesCity";
import Loactions from "@/components/Locations";

const Location = () => {
  const params = useParams();

  const city = params?.location?.includes("-in-")
    ? params.location
        .split("-in-")[1]
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "India";

 
  return (
    <>
      {/* Hero */}
      <div className="">
  <section
    style={{
      backgroundImage: "url('/aboutimg.webp')",
      backgroundSize: "cover",
      backgroundPosition: "50% 40%",
    }}
    className="relative py-20 md:h-[80vh] z-10 flex items-center justify-center"
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-gray-900/60" />

    {/* Content */}
    <div className="relative z-10 text-center px-5">
      <h1 className="font-serif font-bold text-white text-3xl md:text-6xl leading-snug">
        Titanium Dioxide Supplier in{" "}
        <span className="text-[#C8921C]">{city}</span>
      </h1>
    </div>
  </section>
</div>

      <section className="max-w-7xl mx-auto px-4 md:px-0  py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {" "}
          {/* Content Section */}{" "}
          <div>
            {" "}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {" "}
              Titanium Dioxide Supplier in {city}{" "}
            </h2>{" "}
            <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
              {" "}
              Welcome to <strong>Corechem Corporation</strong>, a dependable
              name for{" "}
              <Link
                href="/"
                className="font-bold text-[#C8921C] hover:underline"
              >
                {" "}
                Titanium Dioxide Supplier in {city}{" "}
              </Link>{" "}
              . We are a trusted importer and supplier, providing
              premium-quality Titanium Dioxide solutions that contribute to
              superior product performance across various industries.{" "}
            </p>{" "}
            <p className="text-gray-700 mb-5 text-base md:text-lg leading-relaxed">
              {" "}
              Our commitment to{" "}
              <strong>quality, consistency, and reliability</strong> helps
              manufacturers achieve better results while maintaining efficiency
              in their production processes. We source and supply high-grade
              Titanium Dioxide that meets stringent industry standards for
              purity, brightness, and performance.{" "}
            </p>{" "}
            {/* <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              {" "}
              Serving customers across {city}, we cater to industries such as
              paints, coatings, plastics, inks, paper, rubber, and construction
              materials. With competitive pricing, timely delivery, and
              dedicated customer support, Corechem Corporation has established
              itself as a trusted partner for businesses seeking reliable
              Titanium Dioxide supply solutions.{" "}
            </p>{" "} */}
          </div>{" "}
          {/* Image Section */}{" "}
          <div className="flex justify-center lg:justify-end">
            {" "}
            <Image
              src="/About us (12).webp"
              alt={`Titanium Dioxide Supplier in ${city}`}
              width={600}
              height={750}
              priority
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain "
            />{" "}
          </div>{" "}
        </div>
      </section>



          {/* //Products */}
          <Products/>

          <FeaturesCity/>

         {/* about */}
         <AboutCity city={city}/>
         <BelowCTA city={city}/>
     

      {/* why us */}
      <WhychooseCity city={city} />

      {/* CTA */}
          <CTACity city={city}/>

          {/* FAQ */}
          <FAQCity city={city}/>

           <Loactions />
          

      {/* Detail */}
    </>
  );
};

export default Location;
