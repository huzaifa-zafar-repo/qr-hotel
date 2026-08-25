"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Tag, Users, Star, LucideIcon } from "lucide-react";

export interface CardConfig {
  id: "special" | "referral" | "review";
  number: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  icon: LucideIcon;
  bgColor: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
  buttonBg: string;
  buttonHoverBg: string;
  arrowColor: string;
  shadowGlow: string;
  glowGradient: string;
}

export const cardConfigs: Record<string, CardConfig> = {
  special: {
    id: "special",
    number: "01",
    title: "TODAY'S SPECIAL",
    subtitle: "Exquisite Chef Selection",
    description: "Something special, crafted just for today.",
    imageSrc: "/assets/3dfood.png",
    imageAlt: "Today's Special Golden Cloche Dish",
    icon: Tag,
    bgColor: "bg-gradient-to-br from-[#FFF9F3] via-[#FCF2E8] to-[#F7E6D7]", // VIP Warm Peach / Champagne
    borderColor: "border-[#F2DFCC]",
    badgeBg: "bg-[#F5E5D5]",
    badgeText: "text-[#B87A4B]",
    buttonBg: "bg-gradient-to-r from-[#EBD6C3] to-[#DFBF9F]",
    buttonHoverBg: "hover:from-[#E4C9B1] hover:to-[#D5B08C]",
    arrowColor: "text-[#3D2E25]",
    shadowGlow: "rgba(212, 175, 55, 0.22)",
    glowGradient: "from-[#FADBB6]/40 via-transparent to-transparent",
  },
  referral: {
    id: "referral",
    number: "02",
    title: "BRING A FRIEND",
    subtitle: "Shared Dining Experience",
    description: "Good food is better when shared together.",
    imageSrc: "/assets/3dcups.png",
    imageAlt: "Green Coffee Cups with Floating Hearts",
    icon: Users,
    bgColor: "bg-gradient-to-br from-[#F4F9F5] via-[#EBF3ED] to-[#DBE9DF]", // VIP Soft Emerald
    borderColor: "border-[#D3E4D7]",
    badgeBg: "bg-[#D8E8DC]",
    badgeText: "text-[#3B6649]",
    buttonBg: "bg-gradient-to-r from-[#CCE1D2] to-[#B2D3BC]",
    buttonHoverBg: "hover:from-[#BFD8C6] hover:to-[#A2C7AD]",
    arrowColor: "text-[#233A2A]",
    shadowGlow: "rgba(59, 102, 73, 0.22)",
    glowGradient: "from-[#BEE3C8]/40 via-transparent to-transparent",
  },
  review: {
    id: "review",
    number: "03",
    title: "REVIEW US",
    subtitle: "Share Your Experience",
    description: "Loved your experience? We'd love your feedback.",
    imageSrc: "/assets/3dreview.png",
    imageAlt: "3D Speech Bubble with Gold Star",
    icon: Star,
    bgColor: "bg-gradient-to-br from-[#FAF5FA] via-[#F4ECF5] to-[#E9DDEB]", // VIP Soft Lavender
    borderColor: "border-[#E4D5E6]",
    badgeBg: "bg-[#EADBEC]",
    badgeText: "text-[#754E80]",
    buttonBg: "bg-gradient-to-r from-[#E2CEE6] to-[#CBA9D1]",
    buttonHoverBg: "hover:from-[#D7BEDC] hover:to-[#BE99C5]",
    arrowColor: "text-[#3C2442]",
    shadowGlow: "rgba(117, 78, 128, 0.22)",
    glowGradient: "from-[#E6C6EE]/40 via-transparent to-transparent",
  },
};

interface ExperienceCardProps {
  type: "special" | "referral" | "review";
  onClick: () => void;
  index: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  type,
  onClick,
  index,
}) => {
  const config = cardConfigs[type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.1 * index,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow: `0 24px 44px -8px ${config.shadowGlow}, 0 12px 20px -4px rgba(0,0,0,0.08)`,
      }}
      whileTap={{ scale: 0.97, y: -2 }}
      onClick={onClick}
      className={`relative w-full h-full rounded-[24px] sm:rounded-[28px] lg:rounded-[34px] ${config.bgColor} border ${config.borderColor} p-3.5 sm:p-5 lg:p-6 cursor-pointer overflow-hidden transition-all duration-300 shadow-soft-3d group flex flex-col justify-between max-w-full lg:max-w-[340px] xl:max-w-[360px] mx-auto ring-1 ring-white/60`}
    >
      {/* Soft Ambient Radial Background Glow */}
      <div className={`absolute top-0 right-0 w-44 h-44 rounded-full bg-gradient-to-br ${config.glowGradient} blur-2xl pointer-events-none`} />

      {/* Glass Top Reflection Highlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-black/5 pointer-events-none rounded-[24px] sm:rounded-[28px] lg:rounded-[34px]" />

      {/* Category Icon Badge on Mobile (Top Right) */}
      <div className={`lg:hidden absolute top-3 right-3 z-20 p-1.5 sm:p-2 rounded-full ${config.badgeBg} ${config.badgeText} shadow-xs border border-white/80`}>
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
      </div>

      {/* Desktop Top Header: Number 01 02 03 & Icon Badge (Desktop only) */}
      <div className="relative z-10 hidden lg:flex items-center justify-between w-full mb-2">
        <span className="font-serif text-sm lg:text-base font-bold tracking-widest text-[#8C7A6B]/80">
          {config.number}
        </span>
        <div className={`p-2.5 rounded-full ${config.badgeBg} ${config.badgeText} shadow-xs border border-white/80`}>
          <Icon className="w-4 h-4 lg:w-4.5 lg:h-4.5" />
        </div>
      </div>

      {/* Mobile Layout (< lg): Large 3D Image Left, Content Middle (with 01/02/03), Right Arrow shifted lower */}
      <div className="relative z-10 flex lg:hidden items-center justify-between gap-3 sm:gap-4 py-1">
        {/* Large Prominent 3D Visual Asset (Increased size) */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 flex items-center justify-center preserve-3d -ml-2">
          {/* Soft Ground Shadow Pedestal */}
          <div className="absolute bottom-1 w-28 sm:w-32 h-4 rounded-full bg-black/15 blur-sm transform scale-x-110" />
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.12, rotate: 3, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Image
              src={config.imageSrc}
              alt={config.imageAlt}
              fill
              className="object-contain filter drop-shadow-2xl transition-transform duration-300 scale-110"
              sizes="200px"
              priority={index === 0}
            />
          </motion.div>
        </div>

        {/* Text Content: Number 01 02 03, Title & FULL Description (No cut off!) */}
        <div className="flex-1 min-w-0 pr-2 flex flex-col justify-center my-auto">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="font-serif text-xs sm:text-sm font-bold tracking-widest text-[#8C7A6B]">
              {config.number}
            </span>
          </div>
          <h3 className="font-serif text-base sm:text-xl font-bold text-[#2C221E] tracking-tight leading-snug">
            {config.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6E5F55] leading-relaxed mt-1 font-medium">
            {config.description}
          </p>
        </div>

        {/* Action Arrow (positioned lower down on the right using self-end) */}
        <motion.div
          whileHover={{ scale: 1.12, x: 3 }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${config.buttonBg} ${config.buttonHoverBg} ${config.arrowColor} flex items-center justify-center shadow-md border border-white/70 transition-all shrink-0 self-end mb-1`}
        >
          <ArrowRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
        </motion.div>
      </div>

      {/* Desktop / Laptop Layout (>= lg): Large 3D Image Centered & Blended */}
      <div className="hidden lg:flex relative z-10 flex-col items-center text-center flex-1 justify-between pt-1">
        {/* Large VIP 3D Image Presentation Area */}
        <div className="relative w-44 h-44 xl:w-48 xl:h-48 my-2 flex items-center justify-center preserve-3d">
          <div className="absolute bottom-2 w-32 h-5 rounded-full bg-black/15 blur-sm transform scale-x-110" />
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.12, y: -6, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Image
              src={config.imageSrc}
              alt={config.imageAlt}
              fill
              className="object-contain filter drop-shadow-2xl transition-transform duration-500 ease-out group-hover:scale-108"
              sizes="200px"
              priority={index === 0}
            />
          </motion.div>
        </div>

        {/* Content Text */}
        <div className="mt-2 mb-4">
          <h3 className="font-serif text-xl xl:text-2xl font-bold text-[#2C221E] tracking-tight leading-tight group-hover:text-[#C5A059] transition-colors">
            {config.title}
          </h3>
          <p className="text-xs xl:text-sm text-[#6E5F55] leading-relaxed mt-1.5 font-medium max-w-[240px]">
            {config.description}
          </p>
        </div>

        {/* Bottom Action Bar */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-black/5">
          <span className="text-[11px] font-bold text-[#8C7A6B] uppercase tracking-wider">
            Tap to explore
          </span>
          <motion.div
            whileHover={{ scale: 1.12, x: 3 }}
            whileTap={{ scale: 0.95 }}
            className={`w-11 h-11 rounded-full ${config.buttonBg} ${config.buttonHoverBg} ${config.arrowColor} flex items-center justify-center shadow-md border border-white/70 transition-all group-hover:shadow-lg cursor-pointer`}
          >
            <ArrowRight className="w-5 h-5 stroke-[2.2] transition-transform group-hover:translate-x-0.5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
