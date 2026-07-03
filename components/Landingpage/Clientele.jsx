"use client"

import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { motion } from "framer-motion"

export default function Client() {
    const clients = [
        { name: "Dominos Pizza", image: "/client/1.webp" },
        { name: "Manyavar", image: "/client/2.webp" },
        { name: "Samsung", image: "/client/3.webp" },
        { name: "HDFC Bank", image: "/client/4.webp" },
        { name: "ICICI Bank", image: "/client/5.webp" },
        { name: "Bandhan Bank", image: "/client/6.webp" },
        { name: "Union Bank", image: "/client/7.webp" },
  
    ]

    return (
        <div className="bg-gray-50">
            <h2 className="pt-5 text-center text-red-600 md:text-5xl text-4xl font-bold">
                Our Brands
            </h2>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={2}
                loop={true}
                speed={5000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                className="px-4 overflow-visible py-5! md:py-10!"
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                          
                            transition={{ type: "spring", stiffness: 200 }}
                            className="bg-white rounded-2xl p-4 flex items-center justify-center cursor-pointer border border-gray-100"
                        >
                            <motion.img
                                src={client.image}
                                alt={client.name}
                                className="h-20 md:h-54 object-contain "
                                whileHover={{ rotate: 2 }}
                            />
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}