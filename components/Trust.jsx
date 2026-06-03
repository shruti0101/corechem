"use client";

import Image from "next/image";
import { X } from "lucide-react";

export default function Trust({ oopen, setoopen }) {
  if (!oopen) return null;

  return (
    <section className="fixed inset-0 z-[9999] h-screen w-full overflow-hidden bg-[#062347]/90">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Popup Content */}
      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[30px] border border-white/20 bg-white shadow-2xl">
          
          {/* Close Button */}
          <button
            onClick={() => setoopen(false)}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:scale-110 hover:bg-red-600"
          >
            <X size={22} />
          </button>

          <Image
            src="/trust Elite certificate.webp"
            alt="Popup"
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}