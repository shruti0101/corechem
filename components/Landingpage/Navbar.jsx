// components/Navbar.tsx

"use client";
import Image from "next/image";
import {
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaPinterestP } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="w-full overflow-hidden font-sans">
      {/* ================= TOP BAR ================= */}
      <div className="relative flex h-[53px] w-full">
        {/* EMPTY LEFT SPACE */}
        <div className="w-[238px] bg-transparent" />

        {/* BLACK BAR */}
        <div
          className="relative flex h-full flex-1 items-center justify-between bg-[#111117] "
          style={{
   clipPath: "polygon(0 0, 100% 0, 98% 100%, 3% 100%)"
          }}
        >
          {/* LEFT INFO */}
          <div className="flex items-center text-white">
            {/* EMAIL */}
            <div className="flex items-center">
              <Mail className="mr-[25px] h-[15px] w-[15px] text-[#ff5e14]" />

              <span className="text-[15px] font-[700] tracking-[-0.2px]">
                corechemcorporation@gmail.com
              </span>
            </div>

            {/* DIVIDER */}
            <div className="mx-[34px] h-[18px] w-[1px] bg-white/10" />

            {/* ADDRESS */}
            <div className="flex items-center">
              <MapPin className="mr-[11px] h-[15px] w-[15px] text-[#ff5e14]" />

              <span className="text-[15px] font-[700] tracking-[-0.2px]">
              Delhi, India
              </span>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="mr-[515px] flex items-center gap-[27px] text-[#8c8e97]">
            <Twitter className="h-[14px] w-[14px]" strokeWidth={2.5} />

            <Facebook className="h-[14px] w-[14px]" strokeWidth={2.5} />

            <FaPinterestP className="text-[13px]" />

            <Instagram className="h-[14px] w-[14px]" strokeWidth={2.5} />
          </div>
        </div>

        {/* ORANGE BUTTON */}
        <div
          className="absolute right-0 top-0 flex h-[53px] w-[420px] items-center justify-center bg-[#ff5e14]"
          style={{
            clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <button className="text-[16px] font-[800] text-white">
            Get a Free Quote
          </button>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="relative h-[100px] w-full bg-[#f3f3f5]">
        {/* WHITE LEFT SHAPE */}
        <div
          className="absolute left-0 top-0 h-full w-[330px] bg-white"
          style={{
            clipPath: "polygon(0 0, 84% 0, 100% 100%, 0 100%)",
          }}
        />

        {/* RIGHT LIGHT SHAPE NEAR PHONE */}
        <div
          className="absolute right-[345px] top-0 h-full w-[50px] bg-[#f3f3f5]"
          style={{
            clipPath: "polygon(0 0, 84% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative z-10 flex h-full items-center justify-between pl-[60px] pr-[100px]">
          {/* LOGO */}
          <div className="flex items-center">
    <Image className="mb-15" src="/logoo.png" alt="Logo" width={140} height={40} />

          
          </div>

          {/* NAV LINKS */}
          <nav className="ml-[40px] flex items-center gap-[55px]">
            {[
              "Home",
              "About Us",
              "Our Products",
              "Articles & Resources",
              "Contact Us",
            
            ].map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center text-[20px] font-[600] tracking-[-0.2px] text-black"
              
              >
                {item}

              </a>
            ))}
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

              <h3 className="text-[17px] font-[800] leading-none tracking-[-0.2px] text-[#1d2b3a]">
                +919818544039
              </h3>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}