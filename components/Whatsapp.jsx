'use client'
import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Whatsapp = () => {
  return (
    <>
      
      <a
        href="https://wa.me/919818544039"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with corechem corporation"
        className="fixed bottom-18 right-4 z-50 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition animate-bounce"
      >
        <FaWhatsapp size={30} />
      </a>


      
    </>
  );
};

export default Whatsapp;
