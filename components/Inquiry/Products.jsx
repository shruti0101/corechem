"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "../Popup";

const products = [
  {
    id: "titanium-dioxide-jinhai-r6618",
    image: "/bowl1.webp",
    grade: "Titanium Dioxide (TiO₂) – Jihani",
    code: "6628",
    desc: "High brightness and excellent durability ",
  },
  {
    id: "kronos-titanium-dioxide",
    image: "/bowl6.webp",
    grade: "Titanium Dioxide Kronos",
    code: "R-2310",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-kmml-822",
    image: "/bowl2.webp",
    grade: "Titanium Dioxide (TiO₂) - Kmml",
    code: "822",
    desc: "Excellent dispersibility and strong hiding power.",
  },
  {
    id: "titanium-dioxide-venator-tr92",
    image: "/bowl3.webp",
    grade: "Titanium Dioxide (TiO₂) - Venator",
    code: "TR92",
    desc: "High whiteness and ideal for indoor applications.",
  },
  {
    id: "titanium-dioxide-kronos-r2220",
    image: "/bowl5.webp",
    grade: "Titanium Dioxide Kronos",
    code: "R-2220",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-dawn-r2195",
    image: "/bowl4.webp",
    grade: "Titanium Dioxide (TiO₂) - Dawn",
    code: "2195",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
  {
    id: "titanium-dioxide-r248",
    image: "/BOWL7.webp",
    grade: "Titanium dioxide 248",
    code: "R-248",
    desc: "Premium titanium dioxide with excellent opacity.",
  },
];

export default function Products() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="pt-7 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-4xl font-bold text-gray-900">
            Our Products
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our range
          </p>
        </div>

        {/* Slider */}
        <Swiper
          spaceBetween={20}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation
          modules={[Autoplay, Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white overflow-hidden">

                {/* Image */}
                <div className=" bg-gray-100 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.grade}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-900">
                    {product.grade}
                  </h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Code: {product.code}
                  </p>

                  <p className="text-sm text-gray-600 mt-3">
                    {product.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex gap-3 mt-5">
                    <button onClick={() => setIsOpen(true)}
                      
                      className="flex-1 text-center bg-black text-white py-2 rounded-lg text-lg hover:bg-gray-800"
                    >
                      View Details
                    </button>

                    <a
                      href={"https://wa.link/2fpjmq"}
                      target="_blank"
                      className="flex items-center justify-center gap-2 flex-1 bg-green-600 text-white py-4 rounded-lg text-lg   hover:bg-green-700"
                    >
                      <FaWhatsapp className="text-3xl" /> WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#062347] to-[#0a3a6e] py-4 md:py-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#c8921c]/30 bg-white/10 px-8 py-8 backdrop-blur-md md:flex-row">
      
      <div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Need a chemical not listed?
        </h2>
        <p className="mt-2 text-white/70">
          Our team can source custom chemicals and specialty products for your requirements.
        </p>
      </div>

      <Link
  href="https://wa.link/2fpjmq"
  target="_blank"
  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#c8921c] to-[#e6b53a] px-5 py-3 md:px-8 md:py-4 font-semibold text-white shadow-[0_10px_30px_rgba(200,146,28,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(200,146,28,0.5)]"
>
  {/* Shine Effect */}
  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

  {/* Pulse Dot */}
  

  <FaWhatsapp className="relative animate-bounce text-2xl md:text-3xl" />

  <span className="relative text-sm md:text-lg whitespace-nowrap">
    Chat With Us on WhatsApp
  </span>

  <FaArrowRight className="relative  text-sm transition-transform duration-300 group-hover:translate-x-1" />
</Link>
    </div>
  </div>
</section>
{isOpen && <ContactForm isOpen={isOpen} setIsOpen={setIsOpen} />}
    </section>
    
  );
}