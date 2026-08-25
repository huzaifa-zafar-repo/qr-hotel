"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, MessageCircle, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const whatsappUrl = "https://wa.me/923120031236";
  const emailUrl = "mailto:xintrallabs@gmail.com";

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="flex flex-col items-center justify-center pt-2 pb-10 text-center select-none"
    >
      {/* Thank you script line */}
      <p className="font-script text-2xl sm:text-3xl text-[#C5A059] font-normal tracking-wide mb-2">
        Thank you for dining with us!
      </p>

      {/* Champagne Gold Divider */}
      <div className="flex items-center justify-center gap-2 mb-4 text-[#C5A059]/60">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C5A059]/40" />
        <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-[#C5A059]/30" />
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C5A059]/40" />
      </div>

      {/* Powered by Xintral Labs pill linking directly to WhatsApp */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        title="Contact Xintral on WhatsApp"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF5EE] border border-[#E9DFD0] shadow-xs text-xs text-[#8C7A6B] font-medium transition-all hover:border-[#25D366]/60 hover:bg-[#F0FDF4] hover:shadow-md group cursor-pointer"
      >
        <span>Powered by</span>
        <span className="font-serif font-bold text-[#2C221E] tracking-wider group-hover:text-[#128C7E] transition-colors">
          Xintral Labs
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#C5A059] group-hover:text-[#25D366] transition-colors" />
      </motion.a>

      {/* Xintral Direct WhatsApp & Email Contact details */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-[#8C7A6B]">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 hover:text-[#25D366] transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
          <span className="font-medium">+92 312 0031236</span>
        </a>
        <span className="text-[#D8C7B5]">•</span>
        <a
          href={emailUrl}
          className="flex items-center gap-1.5 hover:text-[#C5A059] transition-colors"
        >
          <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="font-medium">xintrallabs@gmail.com</span>
        </a>
      </div>
    </motion.footer>
  );
};

