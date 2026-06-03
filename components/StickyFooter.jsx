"use client";

import Link from "next/link";
import {
  FaHome,
  FaIdBadge,
  FaBoxes,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function StickyFooter() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg md:hidden">
      <div className="grid grid-cols-5 items-end h-16">
        {/* Home */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
        >
          <FaHome size={20} className="text-lg mb-1 text-[#062347]" />
          <span>Home</span>
        </Link>

        {/* About */}
        <Link
          href="/about"
          className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
        >
          <FaIdBadge size={20} className="text-lg mb-1 text-[#062347]" />
          <span>About Us</span>
        </Link>

        {/* Products (Floating Center Button) */}
        <Link
          href="/products"
          className="flex flex-col items-center justify-center text-xs text-gray-700 relative"
        >
          <div className="-mt-10 mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#062347] text-[#c8921c] shadow-xl border-4 border-white">
            <FaBoxes size={20} className="text-2xl text-[#FFC300]" />
          </div>
          <span className="-mt-1 mb-2 font-medium">Products</span>
        </Link>

        {/* Contact */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
        >
          <FaEnvelope size={20} className="text-lg mb-1 text-[#062347]" />
          <span>Contact</span>
        </Link>

        {/* Call */}
        <a
          href="tel:9818544039"
          className="flex flex-col items-center justify-center py-2 text-xs text-gray-700"
        >
          <FaPhoneAlt size={20} className="text-lg mb-1 text-[#062347]" />
          <span>Call Now</span>
        </a>
      </div>
    </div>
  );
}