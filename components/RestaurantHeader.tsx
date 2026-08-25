"use client";

import React from "react";
import { motion } from "framer-motion";
import { Menu, UtensilsCrossed, Sparkles } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

interface HeaderProps {
  onOpenNav: () => void;
}

export const RestaurantHeader: React.FC<HeaderProps> = ({ onOpenNav }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 pt-4 sm:pt-6 pb-4 px-2 sm:px-6 flex items-center justify-between w-full max-w-7xl mx-auto"
    >
      {/* Left Spacer to keep header logo perfectly centered */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 pointer-events-none shrink-0" />

      {/* Main Logo & Name Center */}
      <div className="flex flex-col items-center text-center">
        {/* Fork & Spoon Icon Ornament */}
        <div className="mb-1 text-[#C5A059] flex items-center justify-center">
          <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.5]" />
        </div>

        {/* Restaurant Title */}
        <h1 className="font-serif text-xl sm:text-3xl lg:text-4xl tracking-[0.2em] font-semibold text-[#2C221E] uppercase leading-none">
          {restaurantData.name}
        </h1>

        {/* Subtitle */}
        <p className="text-[9px] sm:text-xs tracking-[0.25em] font-bold text-[#8C7A6B] uppercase mt-1">
          {restaurantData.tagline}
        </p>

        {/* Decorative tiny diamond/star below logo */}
        <div className="flex items-center gap-2 mt-1.5 text-[#C5A059]/70">
          <span className="h-[1px] w-4 sm:w-6 bg-[#E0D3C1]" />
          <Sparkles className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/40" />
          <span className="h-[1px] w-4 sm:w-6 bg-[#E0D3C1]" />
        </div>
      </div>

      {/* Ultra-Luxury Custom 3-Line Menu Trigger Button (Circular, Icon-Only) */}
      <motion.button
        whileHover={{ scale: 1.08, y: -1 }}
        whileTap={{ scale: 0.94 }}
        onClick={onOpenNav}
        aria-label="Open Navigation Menu"
        className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#FAF4EC] via-[#F4E9DC] to-[#EBDCCA] border border-[#D5C0A5]/90 shadow-[0_4px_20px_-2px_rgba(197,160,89,0.28)] hover:shadow-[0_8px_25px_-2px_rgba(197,160,89,0.48)] hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ring-1 ring-white/80"
      >
        {/* Shimmer light sweep highlight */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none rounded-full" />

        {/* Custom 3-Line Animated Bars Icon */}
        <div className="relative z-10 flex flex-col justify-center items-center gap-[4.5px] w-5 h-5 sm:w-5.5 sm:h-5.5">
          <span className="w-5 h-[2.5px] rounded-full bg-gradient-to-r from-[#2C221E] to-[#75552D] group-hover:from-[#C5A059] group-hover:to-[#2C221E] transition-all duration-300 transform group-hover:translate-x-0.5" />
          <span className="w-3.5 h-[2.5px] rounded-full bg-gradient-to-r from-[#75552D] to-[#2C221E] group-hover:w-5 group-hover:bg-[#C5A059] transition-all duration-300" />
          <span className="w-5 h-[2.5px] rounded-full bg-gradient-to-r from-[#2C221E] to-[#75552D] group-hover:from-[#C5A059] group-hover:to-[#2C221E] transition-all duration-300 transform group-hover:translate-x-0.5" />
        </div>
      </motion.button>
    </motion.header>
  );
};
