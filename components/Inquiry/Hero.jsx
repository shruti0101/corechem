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
          }
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
    backgroundImage: "url('/banner-(18).webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  }}
>
  <div className="container mx-auto h-full px-4">
    <div className="flex h-full justify-end  items-start">
      
      {/* FORM */}
      <div className="rounded-3xl w-[30%] xl:mt-22 mt-2 bg-white p-4 mb-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <h3 className="text-center text-3xl font-bold text-[#062347]">
              Request a Free Quote
            </h3>

            

            <form
              onSubmit={handleSubmit}
              className="mt-5 space-y-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2 outline-none focus:border-[#c8921c]"
              />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2 outline-none focus:border-[#c8921c]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2 outline-none focus:border-[#c8921c]"
              />

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-2 outline-none focus:border-[#c8921c]"
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
                rows="3"
                placeholder="Tell us your requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#c8921c] py-4 font-semibold text-white transition hover:bg-[#b88418]"
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
  <div className="relative h-[390px]  w-full">
    <Image
      src="/Landing mobile banner.webp"
      alt="Titanium Dioxide"
      fill
      className="object-contain"
    />
  </div>

  {/* Form Below Banner */}
  <div className="bg-[#f8f8f8] px-4 py-6">
    <div className="rounded-3xl bg-white p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      <a
  href="https://wa.link/2fpjmq"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 absolute top-103 right-15 inline-flex w-[70%] items-center justify-center gap-3 rounded-xl bg-green-600 px-4 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-700 hover:shadow-xl"
>
  <FaWhatsapp className="text-2xl" />
  <span>Connect With Expert</span>
</a>
            <h3 className="text-center text-2xl font-bold text-[#062347]">
              Request a Free Quote
            </h3>

            <p className="mt-2 text-center text-gray-500">
              Fill out the form and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-4 space-y-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
              />

              <input
                type="tel"
                name="phone"
                maxLength={10}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
              />

              <select
                name="product"
                value={form.product}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
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
                rows="5"
                placeholder="Tell us your requirements..."
                value={form.message}
                onChange={handleChange}
                required
                className="w-full rounded-xl border p-4 outline-none focus:border-[#c8921c]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-[#c8921c] py-4 font-semibold text-white transition hover:bg-[#b88418]"
              >
                {loading ? "Submitting..." : "Get Free Quote"}
              </button>
            </form>
          </div>
  </div>
</section>
    </>
  );
}