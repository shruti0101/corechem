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
      <div className="relative flex h-[45px] w-full">
        {/* EMPTY LEFT SPACE */}
        <div className="w-[238px] bg-transparent" />

        {/* BLACK BAR */}
        <div className="relative flex h-full flex-1 items-center justify-between bg-[#111117]">
          {/* LEFT INFO */}
          <div className="flex flex-col gap-3 text-white sm:flex-row sm:items-center sm:gap-0">
            {/* EMAIL */}
            <div className="flex min-w-0 items-center">
              <Mail className="mr-3 ml-5 h-[15px] w-[15px] shrink-0 text-[#ff5e14]" />

              <a
                href="mailto:corechemcorporation@gmail.com"
                className="text-[13px] font-[600] break-all transition hover:text-[#ff5e14] sm:text-[15px] sm:break-normal"
              >
                corechemcorporation@gmail.com
              </a>
            </div>

            {/* DIVIDER */}
            <div className="mx-[24px] hidden h-[30px] w-[1px] bg-white/60 lg:mx-[34px] sm:block" />

            {/* ADDRESS */}
            <div className="flex items-center">
              <MapPin className="mr-3 h-[15px] w-[15px] shrink-0 text-[#ff5e14]" />

              <span className="text-[13px] font-[600] sm:text-[15px]">
                Delhi, India
              </span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mr-[515px] flex items-center gap-[27px] text-white">
            <a
              href="https://twitter.com"
              target="_blank"
              className="transition hover:text-[#ff5e14]"
            >
              <Twitter className="h-[16px] w-[16px]" strokeWidth={2.5} />
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              className="transition hover:text-[#ff5e14]"
            >
              <Facebook className="h-[16px] w-[16px]" strokeWidth={2.5} />
            </a>

            <a
              href="https://pinterest.com"
              target="_blank"
              className="transition hover:text-[#ff5e14]"
            >
              <FaPinterestP className="text-[16px]" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="transition hover:text-[#ff5e14]"
            >
              <Instagram className="h-[16px] w-[16px]" strokeWidth={2.5} />
            </a>
          </div>
        </div>

        {/* ORANGE BUTTON */}
        <div
          className="absolute right-0 top-0 flex h-[53px] w-[420px] items-center justify-center bg-[#ff5e14]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <Link
            href="/contact"
            className="text-[16px] font-[800] text-white"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="relative z-[999999] min-h-[100px] w-full overflow-visible bg-[#f3f3f5]">
        {/* LEFT WHITE BG */}
        <div className="absolute left-0 top-0 h-full w-[240px] bg-white" />

        {/* RIGHT SHAPE */}
        <div className="absolute right-[345px] top-0 h-full w-[50px] bg-[#f3f3f5]" />

        <div className="relative z-[999999] flex h-[100px] items-center justify-between pl-[60px] pr-[150px]">
          {/* LOGO */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                className="cursor-pointer mb-11"
                src="/logoo.png"
                alt="Logo"
                width={140}
                height={60}
              />
            </Link>
          </div>



         {/* NAVIGATION */}
<nav className="ml-[40px] flex items-center gap-[55px] overflow-visible">
  
  {/* HOME */}
  <Link
    href="/"
    className="relative flex items-center text-[20px] font-[600] tracking-[-0.2px] text-black transition hover:text-[#ff5e14] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff5e14] after:transition-all hover:after:w-full"
  >
    Home
  </Link>

  {/* ABOUT */}
  <Link
    href="/about"
    className="relative flex items-center text-[20px] font-[600] tracking-[-0.2px] text-black transition hover:text-[#ff5e14] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff5e14] after:transition-all hover:after:w-full"
  >
    About Us
  </Link>

  {/* PRODUCTS DROPDOWN */}
  <div className="group relative flex h-[100px] items-center">
    {/* BUTTON */}
    <button className="flex items-center gap-2 text-[20px] font-[600] tracking-[-0.2px] text-black transition hover:text-[#ff5e14]">
      Our Products

      <ChevronDown className="h-5 w-5 transition duration-300 group-hover:rotate-180" />
    </button>

    {/* DROPDOWN */}
    <div className="invisible absolute left-0 top-full z-[999999] mt-0 w-[390px] translate-y-3 rounded-[24px] border border-slate-200 bg-white opacity-0 shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      
      {/* INNER */}
      <div className="max-h-[500px] overflow-y-auto p-5">
        {categories?.map((category) => (
          <div
            key={category.id}
            className="mb-2 border-b border-gray-100 pb-5 last:border-none"
          >
            {/* CATEGORY */}
            <Link
              href={`/categories/${category.id}`}
              className="block text-[18px] font-bold text-[#0f172a] transition hover:translate-x-1 hover:text-[#ff5e14]"
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ARTICLES */}
  <Link
    href="/articles"
    className="relative flex items-center text-[20px] font-[600] tracking-[-0.2px] text-black transition hover:text-[#ff5e14] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff5e14] after:transition-all hover:after:w-full"
  >
    Articles & Resources
  </Link>

  {/* CONTACT */}
  <Link
    href="/contact"
    className="relative flex items-center text-[20px] font-[600] tracking-[-0.2px] text-black transition hover:text-[#ff5e14] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-[#ff5e14] after:transition-all hover:after:w-full"
  >
    Contact Us
  </Link>
</nav>

          {/* PHONE */}
          <div className="relative z-20 flex items-center bg-[#f3f3f5] pl-[36px]">
            {/* ICON */}
            <div className="mr-[16px] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ff5e14]">
              <Phone className="h-[21px] w-[21px] text-white" />
            </div>

            {/* TEXT */}
            <div>
              <p className="mb-[4px] text-[18px] font-[500] leading-none text-[#7c7f87]">
                Call Anytime
              </p>

              <a
                href="tel:+919818544039"
                className="text-[17px] font-[800] leading-none tracking-[-0.2px] text-[#1d2b3a] transition hover:text-[#ff5e14]"
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