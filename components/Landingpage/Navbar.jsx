
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  ChevronDown,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";

import { categories } from "@/Data";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-[999999] w-full bg-white shadow-sm">

      {/* ================= TOP BAR ================= */}
      <div className="hidden lg:flex h-[42px] items-center justify-between bg-[#062347] px-8 xl:px-14">

        <div className="flex items-center gap-5 text-white text-[13px]">

          <div className="flex items-center gap-2">
            <Mail className="h-3 w-3 text-[#c8921c]" />
            <a href="mailto:corechemcorporation@gmail.com">
              corechemcorporation@gmail.com
            </a>
          </div>

          <div className="h-3 w-px bg-white/30" />

          <div className="flex items-center gap-2">
            <MapPin className="h-3 w-3 text-[#c8921c]" />
            Delhi, India
          </div>

          <div className="h-3 w-px bg-white/30" />

          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3 w-3 text-[#c8921c]" />
            GST NO. 07EOXPG8261J1Z5
          </div>
        </div>

        <div className="flex items-center gap-5 text-white">

          <a href="#">
            <Facebook className="h-4 w-4 hover:text-[#c8921c]" />
          </a>

          <a href="#">
            <Instagram className="h-4 w-4 hover:text-[#c8921c]" />
          </a>

          <Link
            href="/contact"
            className="bg-[#c8921c] px-5 py-[11px] text-[13px] font-semibold text-white hover:bg-[#b88312]"
          >
            Get Free Quote →
          </Link>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="h-[85px] bg-white">

        <div className="mx-auto flex h-full max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-10">

          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={260}
              height={100}
              priority
              className="h-auto w-[200px] sm:w-[220px] lg:w-[340px]"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden xl:flex items-center gap-10">

            <Link
              href="/"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              About Us
            </Link>

            {/* PRODUCTS */}
            <div className="group relative">

<Link href="/products">


              <button className="flex items-center gap-2 font-semibold text-[17px] hover:text-[#c8921c]">
                Our Products
                <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
              </button>
</Link>

              <div className="invisible absolute left-0 top-full z-[999999] mt-5 w-[350px] rounded-2xl border border-slate-200 bg-white opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-300 group-hover:visible group-hover:mt-3 group-hover:opacity-100">

                <div className="max-h-[450px] overflow-y-auto p-5">

                  {categories?.map((category) => (
                    <Link
                      key={category.id}
                      href={`/categories/${category.id}`}
                      className="block border-b border-slate-100 py-3 text-[16px] font-medium text-slate-800 transition hover:translate-x-2 hover:text-[#c8921c]"
                    >
                      {category.name}
                    </Link>
                  ))}

                </div>
              </div>
            </div>

            <Link
              href="/our-blogs"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              Articles & Resources
            </Link>

            <Link
              href="/contact"
              className="font-semibold text-[17px] hover:text-[#c8921c]"
            >
              Contact Us
            </Link>

          </nav>

          {/* PHONE */}
          <div className="hidden lg:flex items-center gap-3">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8921c]">
              <Phone className="h-5 w-5 text-white" />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Call Anytime
              </p>

              <a
                href="tel:+919818544039"
                className="font-bold text-[#062347]"
              >
                +91 9818544039
              </a>
            </div>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="xl:hidden"
          >
            {mobileMenu ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`xl:hidden fixed top-0 right-0 h-screen w-[320px] bg-white shadow-2xl transition-all duration-300 z-[999999]
        ${
          mobileMenu
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b p-5">
          <h3 className="font-bold text-lg">
            Menu
          </h3>

          <button onClick={() => setMobileMenu(false)}>
            <X />
          </button>
        </div>

        <div className="flex flex-col p-6">

          <Link href="/" className="py-3 font-medium">
            Home
          </Link>

          <Link href="/about" className="py-3 font-medium">
            About Us
          </Link>

          <Link href="/industries" className="py-3 font-medium">
            Industries
          </Link>

          <Link href="/our-blogs" className="py-3 font-medium">
            Articles & Resources
          </Link>

          <Link href="/contact" className="py-3 font-medium">
            Contact Us
          </Link>

          <div className="mt-6 border-t pt-5">
<Link href="/products">
            <h4 className="mb-4 font-semibold">
              Our Products
            </h4>

</Link>

            <div className="max-h-[300px] overflow-y-auto">

              {categories?.map((category) => (
                <Link
                  key={category.id}
                  href={`/categories/${category.id}`}
                  className="block py-2 text-sm text-gray-700"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <a
            href="tel:+919818544039"
            className="mt-6 rounded-lg bg-[#c8921c] py-3 text-center font-semibold text-white"
          >
            Call Now
          </a>

        </div>
      </div>

    </header>
  );
}