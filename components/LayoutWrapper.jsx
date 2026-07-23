"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Landingpage/Navbar";
import Footer from "@/components/Landingpage/Footer";
import StickyFooter from "./StickyFooter";
import AutoPopupForm from "@/components/AutoPopupForm";
export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar/Footer on /studio routes
   const hideLayout =
    pathname.startsWith("/studio") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/inquiry");

  return (
    <>

       <AutoPopupForm />
      {!hideLayout && <Navbar />}
      {!hideLayout && <StickyFooter />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
