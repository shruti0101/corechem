"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaIdBadge,
  FaBoxes,
  FaEnvelope,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

const categories = [
  {
    title: "Titanium Dioxide",
    href: "/categories/titanium-dioxide",
  },
  {
    title: "Titanium Dioxide Rutile",
    href: "/categories/titanium-dioxide-rutile",
  },
  {
    title: "Color Pigment",
    href: "/categories/color-pigment",
  },
  {
    title: "Pigment Powder",
    href: "/categories/pigment-powder",
  },
  {
    title: "Lithopone",
    href: "/categories/lithopone",
  },
  {
    title: "Optical Brighter",
    href: "/categories/optical-brightening",
  },
  {
    title: "Carbon Black",
    href: "/categories/carbon-black",
  },
];

export default function StickyFooter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Categories Popup */}
      {open && (
        <>
          <div
            className="fixed inset-0  z-40"
            onClick={() => setOpen(false)}
          />

          <div className="fixed bottom-16 left-0 right-0 z-[40] rounded-t-3xl bg-white shadow-2xl pb-5 animate-slideUp">
            <div className="flex items-center justify-between p-4">
              
              

              <button className="absolute top-3 right-7" onClick={() => setOpen(false)}>
                <FaTimes className="text-2xl text-[#C8921C]" />
              </button>
              
            </div>

            <div className="max-h-[60vh]  p-4">
              <div className="grid gap-1.5">
                {categories.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                     onClick={() => setOpen(false)}
                    className="rounded-xl border border-gray-200  text-center bg-gray-50 px-4 py-4 font-bold text-[#062347] transition hover:border-[#c8921c] hover:bg-[#c8921c]/10"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Sticky Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t bg-white shadow-lg md:hidden">
        <div className="grid h-16 grid-cols-5 items-end">
          {/* Home */}
          <Link
            href="/"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
          >
            <FaHome className="mb-1 text-lg text-[#062347]" />
            <span>Home</span>
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
          >
            <FaIdBadge className="mb-1 text-lg text-[#062347]" />
            <span>About</span>
          </Link>

          {/* Products */}
          <button
            onClick={() => setOpen(true)}
            className="relative flex flex-col items-center justify-center text-xs text-gray-700"
          >
            <div className="-mt-10 mb-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#062347] text-[#c8921c] shadow-xl">
              <FaBoxes className="text-2xl text-[#FFC300]" />
            </div>

            <span className="-mt-1 mb-2 font-medium">Products</span>
          </button>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
          >
            <FaEnvelope className="mb-1 text-lg text-[#062347]" />
            <span>Contact</span>
          </Link>

          {/* Call */}
          <a
            href="tel:9818544039"
            className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
          >
            <FaPhoneAlt className="mb-1 text-lg text-[#062347]" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </>
  );
}