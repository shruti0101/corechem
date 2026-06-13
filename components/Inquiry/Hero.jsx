"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Deals from "./Deals";

export default function Hero() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.phone || form.phone.length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        platform: "Corechem Corporation",
        platformEmail: "corechemcorporation@gmail.com",
        name: form.name,
        phone: form.phone,
        email: form.email,
        product: form.product,
        message: form.message,
        place: "Website Landing Page",
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        payload,
        {
          validateStatus: (status) => status >= 200 && status < 500,
        },
      );

      if (res.status >= 200 && res.status < 300) {
        toast.success("Inquiry Submitted Successfully!");

        setForm({
          name: "",
          phone: "",
          email: "",
          product: "",
          message: "",
        });
      } else {
        toast.error("Failed to submit inquiry");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const products = [
    "Titanium Dioxide",
    "Titanium Dioxide Rutile",
    "Color Pigment",
    "Pigment Powder",
    "Lithopone",
    "Caustic Soda",
    "Calcium Carbonate",
    "Optical Brightener",
    "Carbon Black",
  ];

  return (
    <>
      {/* HERO */}
      {/* DESKTOP HERO */}
      <section
        className="relative h-[400px] xl:h-[110vh] w-full hidden md:block"
        style={{
          backgroundImage: "url('/corechem 2.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative w-full min-h-[700px]">
  {/* Form */}
  <div
    className="
      w-full
      lg:w-[330px]
      lg:absolute
      lg:right-10
      lg:top-1/2
      lg:-translate-y-1/2
      xl:right-2
      z-20
      px-4
      lg:px-0
    "
  >
    <div className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      <h3 className="text-center text-3xl font-bold text-[#062347]">
        Request a Free Quote
      </h3>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
        />

        <input
          type="tel"
          name="phone"
          maxLength={10}
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
        />

        <select
          name="product"
          value={form.product}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-3 outline-none focus:border-[#c8921c]"
        >
          <option value="">Select Product</option>

          {products.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <textarea
          name="message"
          rows="4"
          placeholder="Tell us your requirements..."
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-[#c8921c] py-4 font-semibold text-white hover:bg-[#b88418]"
        >
          {loading ? "Submitting..." : "Get Free Quote"}
        </button>
      </form>
    </div>
  </div>
</div>
      </section>

      {/* MOBILE HERO */}
      <section className="md:hidden">
        {/* Banner */}
        <div className="relative h-[395px]  w-full">
          <Image
            src="/corechem 1.webp"
            alt="Titanium Dioxide"
            fill
            className="object-contain"
          />
        </div>

        

        
      </section>
      <Deals/>
    </>
  );
}
