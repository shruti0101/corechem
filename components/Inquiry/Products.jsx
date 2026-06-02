"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaWhatsapp } from "react-icons/fa";

const products = [
  {
    id: "titanium-dioxide-jinhai-r6618",
    image: "/bowl1.webp",
    grade: "Titanium Dioxide (TiO₂) – Jihani",
    code: "6628",
    desc: "High brightness and excellent durability for applications.",
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
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
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
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="border rounded-xl shadow-sm hover:shadow-lg transition bg-white overflow-hidden">

                {/* Image */}
                <div className="h-52 bg-gray-100 flex items-center justify-center">
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
                    <a
                      href={`/products/${product.id}`}
                      className="flex-1 text-center bg-black text-white py-2 rounded-lg text-sm hover:bg-gray-800"
                    >
                      View Details
                    </a>

                    <a
                      href={`https://wa.me/91XXXXXXXXXX?text=I%20am%20interested%20in%20${product.grade}`}
                      target="_blank"
                      className="flex items-center justify-center gap-2 flex-1 bg-green-600 text-white py-2 rounded-lg text-sm hover:bg-green-700"
                    >
                      <FaWhatsapp /> WhatsApp
                    </a>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}