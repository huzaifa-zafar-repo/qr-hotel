"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Tag, Clock, Flame, ChefHat } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

interface SpecialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast?: (msg: string) => void;
}

export const SpecialModal: React.FC<SpecialModalProps> = ({
  isOpen,
  onClose,
}) => {
  const dish = restaurantData.special;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md"
        >
          {/* Backdrop Click to close */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Main Modal Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-[440px] max-h-[90vh] rounded-[32px] bg-[#FAF5EE] border border-[#EBE1D5] shadow-2xl overflow-y-auto no-scrollbar flex flex-col"
          >
            {/* Header Toolbar */}
            <div className="sticky top-0 z-20 px-6 pt-6 pb-4 bg-[#FAF5EE]/90 backdrop-blur-md flex items-center justify-between border-b border-[#EDE3D6]/60">
              <button
                onClick={onClose}
                aria-label="Back to main page"
                className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-[#2C221E] hover:bg-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2]" />
              </button>

              <span className="font-serif text-xs font-bold tracking-[0.2em] text-[#8C7A6B] uppercase">
                {dish.tag}
              </span>

              <div className="w-10 h-10 rounded-full bg-[#F5E6D8] text-[#B87A4B] flex items-center justify-center shadow-xs">
                <Tag className="w-4 h-4" />
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col items-center text-center">
              {/* Cursive Heading */}
              <span className="font-script text-4xl text-[#C5A059] font-normal leading-tight">
                Today’s Special
              </span>

              {/* Dish Presentation Image */}
              <div className="relative w-64 h-64 my-2 preserve-3d">
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-48 h-6 rounded-full bg-black/15 blur-md" />
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={dish.image}
                    alt={dish.title}
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Main Dish Name */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C221E] tracking-tight uppercase leading-tight mt-1">
                {dish.title}
              </h2>

              <p className="text-xs font-semibold tracking-wider text-[#C5A059] uppercase mt-0.5 mb-2">
                {dish.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-[#75675E] leading-relaxed max-w-xs mb-4">
                {dish.description}
              </p>

              {/* Quick Info Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5E8DC] text-[#9A6237] text-xs font-medium border border-[#EBD6C3]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{dish.prepTime}</span>
                </div>

                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#F5E8DC] text-[#9A6237] text-xs font-medium border border-[#EBD6C3]">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{dish.calories}</span>
                </div>

                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#EAF2EC] text-[#3D6E4A] text-xs font-medium border border-[#D0E2D4]">
                  <ChefHat className="w-3.5 h-3.5" />
                  <span>Chef’s Selection</span>
                </div>
              </div>

              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5E6D8] border border-[#E8D0BB] text-[#9A6237] text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-ping" />
                <span>{dish.badgeText}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
