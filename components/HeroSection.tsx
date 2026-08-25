"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-14 px-4 sm:px-8 bg-transparent select-none w-full">
      {/* Subtle Ambient Gold Dust Floating Particles over body bg */}
      <motion.div
        animate={{
          y: [-6, 6, -6],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-8 left-1/4 w-2.5 h-2.5 rounded-full bg-[#C5A059]/40 blur-xs pointer-events-none"
      />
      <motion.div
        animate={{
          y: [6, -6, 6],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-20 right-1/4 w-3.5 h-3.5 rounded-full bg-[#D4AF37]/30 blur-xs pointer-events-none"
      />

      {/* Hero Central Text Content - Transparent over Body BG */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Cursive Script Heading "Welcome" */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#C5A059] leading-tight font-normal tracking-wide drop-shadow-xs"
        >
          Welcome
        </motion.span>

        {/* Main Serif Heading "Glad You're Here!" */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-[#2C221E] tracking-tight mt-1 mb-3 leading-snug"
        >
          Glad You’re Here!
        </motion.h2>

        {/* Decorative Star Line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-r from-transparent via-[#C5A059]/60 to-[#C5A059]" />
          <Sparkles className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/40" />
          <div className="h-[1px] w-10 sm:w-16 bg-gradient-to-l from-transparent via-[#C5A059]/60 to-[#C5A059]" />
        </motion.div>

        {/* Supporting Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xs sm:text-sm lg:text-base text-[#75675E] font-medium max-w-sm sm:max-w-md leading-relaxed"
        >
          Discover something special made just for you.
        </motion.p>
      </div>
    </section>
  );
};
