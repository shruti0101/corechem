"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function ContactForm({setIsOpen,isOpen}) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");

  const services = [
  {
    title: "Titanium Dioxide",
    
  },

  {
    title: "Titanium Dioxide Rutile",
   
  },

  {
    title: "Color Pigment",
 
  },

  {
    title: "Pigment Powder",
   
  },

  {
    title: "Lithopone",
   
  },

  {
    title: "Caustic Soda",
   
  },

  {
    title: "Calcium Carbonate",
   
  },

  {
    title: "Optical Brighter",
   
  },

  {
    title: "Carbon",
   
  },
];

  // AUTO OPEN AFTER 15 SECONDS
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 15000);
    return () => clearTimeout(timer);
  }, []);


  // FORM SUBMIT (NO OTP)
  const submitForm = async () => {
    try {
      setLoading(true);

      const formData = {
        platform: "Corechem corporationf",
        platformEmail: "corechemcorporation@gmail.com",
        name,
        phone,
        email,
        product,
        message,
        place: "N/A",
      };

      const res = await axios.post(
        "https://brandbnalo.com/api/form/add",
        formData,
        { validateStatus: (s) => s >= 200 && s < 500 }
      );

      if (res.status >= 200 && res.status < 300) {
        setStatus("✅ Your enquiry has been submitted successfully!");
        toast.success("Form Submitted Successfully");

        // RESET FORM
        setName("");
        setPhone("");
        setEmail("");
        setProduct("");
        setMessage("");

        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        toast.error("Submission failed");
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Server error");
      setStatus("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone || phone.length < 10) {
      return toast.error("Enter Valid Phone Number");
    }

    await submitForm();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[99999] inset-0 flex items-center  px-4 justify-center bg-black/40">
      <div
        className="relative rounded-3xl shadow-2xl p-10 max-w-sm md:max-w-2xl bg-[#062347] text-white bg-cover bg-center"
        style={{ backgroundImage: "url(/bag/try2.webp)" }}
      >
        {/* CLOSE */}
        <button
  className="absolute cursor-pointer top-4 right-4 text-white hover:text-red-500 text-xl"
  onClick={() => setIsOpen(false)}
>
  ✕
</button>

        {/* TITLE */}
        <h2 className="text-center text-xl md:text-3xl font-semibold">
          Get In Touch With Us
        </h2>

        <div className="w-28 h-[4px] bg-blue-600 mx-auto mt-3 mb-8 rounded-full"></div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-3 max-md:flex-col">
            <input
              type="text"
              placeholder="Your Name"
              className="w-1/2 max-md:w-full p-3 rounded-md text-black bg-blue-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <select
  className="w-1/2 max-md:w-full p-3 rounded-md text-black bg-blue-50"
  value={product}
  onChange={(e) => setProduct(e.target.value)}
  required
>
  <option value="">Select Product</option>

  {services.map((item, index) => (
    <option key={index} value={item.title}>
      {item.title}
    </option>
  ))}
</select>
          </div>

          <input
            type="tel"
            maxLength={10}
            placeholder="Phone Number"
            className="w-full p-3 rounded-md text-black bg-blue-50"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md text-black bg-blue-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 rounded-md text-black bg-blue-50 h-28"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#0077e6] to-[#005bb5] text-white rounded-md font-semibold"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-sm mt-2">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
}