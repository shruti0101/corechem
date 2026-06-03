"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

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

  return (
    <section className="relative overflow-hidden py-6 md:py-15">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/bag/try2.webp')",
        }}
      />

      <div className="absolute inset-0 bg-[#062347]/90" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="inline-block rounded-full border border-[#c8921c] px-5 py-2 text-sm font-medium text-[#c8921c]">
              Premium Titanium Dioxide Supplier
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Looking for High-Quality
              <span className="block text-[#c8921c]">
                Titanium Dioxide?
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Get premium-grade Titanium Dioxide for paints, plastics,
              coatings, inks, rubber, paper, and industrial applications.
              Contact our experts today for pricing, bulk orders, and
              technical support.
            </p>

            <div className="hidden mt-10 md:grid gap-4 sm:grid-cols-2">
              {[
                "High Whiteness",
                "Excellent Opacity",
                "Bulk Supply Available",
                "Competitive Pricing",
                "Fast Delivery",
                "Industrial Grade Quality",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <h3 className="text-center text-3xl font-bold text-[#062347]">
              Request a Free Quote
            </h3>

            <p className="mt-2 text-center text-gray-500">
              Fill out the form and our team will contact you shortly.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-4"
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
      </div>
    </section>
  );
}