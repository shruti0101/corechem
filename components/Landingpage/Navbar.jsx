// components/Navbar.tsx

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  ChevronDown,
  ShieldCheck 
} from "lucide-react";

import { FaPinterestP } from "react-icons/fa";

import { categories } from "@/Data";

export default function Navbar() {
  const navLinks = [
    {
      name: "Home",
      href: "/",
    },

    {
      name: "About Us",
      href: "/about",
    },

    {
      name: "Articles & Resources",
      href: "/articles",
    },

    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  return (
<header className="relative z-[999999] w-full overflow-visible font-sans">
  {/* TOP BAR */}
  <div className="relative flex h-[40px] w-full bg-[#062347]">
    {/* LEFT INFO */}
    <div className="flex flex-1 items-center pl-[58px] text-white">
      {/* EMAIL */}
      <div className="flex items-center">
        <Mail className="mr-[8px] h-[12px] w-[12px] text-[#c8921c]" />

        <a
          href="mailto:corechemcorporation@gmail.com"
          className="text-[15px] font-[500] tracking-[0.2px] transition hover:text-[#c8921c]"
        >
          corechemcorporation@gmail.com
        </a>
      </div>

      {/* DIVIDER */}
      <div className="mx-[18px] h-[14px] w-[1px] bg-white" />

      {/* ADDRESS */}
      <div className="flex items-center">
        <MapPin className="mr-[8px] h-[12px] w-[12px] text-[#c8921c]" />

        <span className="text-[15px] font-[500]">
          Delhi, India
        </span>
      </div>

      {/* DIVIDER */}
      <div className="mx-[18px] h-[14px] w-[1px] bg-white" />

      {/* GST */}
      <div className="flex items-center">
        <ShieldCheck className="mr-[8px] h-[12px] w-[12px] text-[#c8921c]" />

        <span className="text-[15px] font-[500] uppercase">
          GST NO. 07EOXPG8261J1Z5
        </span>
      </div>
    </div>

    {/* SOCIALS */}
    <div className="mr-[250px] flex items-center gap-[15px] text-white">
      <a
        href="https://facebook.com"
        target="_blank"
        className="transition hover:text-[#c8921c]"
      >
        <Facebook className="h-[15px] w-[15px]" strokeWidth={2.3} />
      </a>

      <a
        href="https://instagram.com"
        target="_blank"
        className="transition hover:text-[#c8921c]"
      >
        <Instagram className="h-[15px] w-[15px]" strokeWidth={2.3} />
      </a>
    </div>

    {/* QUOTE BUTTON */}
    <div
      className="absolute right-0 top-0 flex h-[40px] w-[220px] items-center justify-center bg-[#c8921c]"
      style={{
        clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <Link
        href="/contact"
        className="flex items-center gap-[6px] text-[15px] font-[700] text-white"
      >
        Get a Free Quote →

      </Link>
    </div>
  </div>

  {/* MAIN NAVBAR */}
  <div className="relative z-[999999] h-[88px] w-full bg-[#f5f5f5]">
    <div className="flex h-full items-center justify-between pl-[34px] pr-[42px]">
      {/* LOGO */}
      <div className="flex h-full items-center bg-white pr-[45px]">
        <Link href="/">
          <Image
            className="cursor-pointer object-contain"
            src="/logoo.png"
            alt="Logo"
            width={215}
            height={58}
            priority
          />
        </Link>
      </div>

      {/* NAVIGATION */}
      <nav className="ml-[30px] flex items-center gap-[42px] overflow-visible">
        {/* HOME */}
        <Link
          href="/"
          className="relative flex items-center text-[20px] font-[700] tracking-[0.1px] text-black transition hover:text-[#c8921c]"
        >
          Home

      
        </Link>

        {/* ABOUT */}
        <Link
          href="/about"
          className="relative flex items-center text-[20px] font-[500] tracking-[0.1px] text-black transition hover:text-[#c8921c]"
        >
          About Us
        </Link>

        {/* PRODUCTS DROPDOWN */}
        <div className="group relative flex h-[78px] items-center">
          <button className="flex items-center gap-[4px] text-[20px] font-[500] tracking-[0.1px] text-black transition hover:text-[#c8921c]">
            Our Products

            <ChevronDown className="h-[14px] w-[14px] transition duration-300 group-hover:rotate-180" />
          </button>

          {/* DROPDOWN */}
          <div className="invisible absolute left-0 top-full z-[999999] mt-0 w-[390px] translate-y-3 rounded-[18px] border border-slate-200 bg-white opacity-0 shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
            <div className="max-h-[500px] overflow-y-auto p-5">
              {categories?.map((category) => (
                <div
                  key={category.id}
                  className="mb-2 border-b border-gray-100 pb-4 last:border-none"
                >
                  <Link
                    href={`/categories/${category.id}`}
                    className="block text-[15px] font-[600] text-[#0f172a] transition hover:translate-x-1 hover:text-[#c8921c]"
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* INDUSTRIES */}
        <Link
          href="/industries"
          className="relative flex items-center text-[20px] font-[500] tracking-[0.1px] text-black transition hover:text-[#c8921c]"
        >
          Industries
        </Link>

        {/* ARTICLES */}
        <Link
          href="/articles"
          className="relative flex items-center text-[20px] font-[500] tracking-[0.1px] text-black transition hover:text-[#c8921c]"
        >
          Articles & Resources
        </Link>

        {/* CONTACT */}
        <Link
          href="/contact"
          className="relative flex items-center text-[20px] font-[500] tracking-[0.1px] text-black transition hover:text-[#c8921c]"
        >
          Contact Us
        </Link>
      </nav>

      {/* PHONE */}
      <div className="relative z-20 flex items-center bg-[#f5f5f5] pl-[20px]">
        {/* ICON */}
        <div className="mr-[12px] flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#c8921c]">
          <Phone className="h-[18px] w-[18px] text-white" />
        </div>

        {/* TEXT */}
        <div>
          <p className="mb-[3px] text-[15px] font-[500] leading-none text-[#7c7f87]">
            Call Anytime
          </p>

          <a
            href="tel:+919818544039"
            className="text-[18px]  font-[800] leading-none tracking-[-0.2px] text-[#1d2b3a] transition hover:text-[#c8921c]"
          >
            +91 9818544039
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
  );
}
