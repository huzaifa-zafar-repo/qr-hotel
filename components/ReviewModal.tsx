"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Star, ArrowRight, ExternalLink } from "lucide-react";
import confetti from "canvas-confetti";
import { restaurantData } from "@/data/restaurantData";

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [rating, setRating] = useState<number>(5);
  const revData = restaurantData.review;

  const handleOpenGoogleReview = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#C5A059", "#7B5985", "#4285F4"],
    });
    onShowToast("Opening Google Review page...");
    setTimeout(() => {
      window.open(revData.googleUrl, "_blank");
    }, 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-[440px] max-h-[90vh] rounded-[32px] bg-[#F6F0F6] border border-[#E8DDEB] shadow-2xl overflow-y-auto no-scrollbar flex flex-col"
          >
            {/* Header Toolbar */}
            <div className="sticky top-0 z-20 px-6 pt-6 pb-4 bg-[#F6F0F6]/90 backdrop-blur-md flex items-center justify-between border-b border-[#E8DDEB]/80">
              <button
                onClick={onClose}
                aria-label="Back to main page"
                className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-[#462F4E] hover:bg-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2]" />
              </button>

              <span className="font-serif text-xs font-bold tracking-[0.2em] text-[#7B5985] uppercase">
                {revData.title}
              </span>

              <div className="w-10 h-10 rounded-full bg-[#ECE0F0] text-[#7B5985] flex items-center justify-center shadow-xs">
                <Star className="w-4 h-4 fill-[#7B5985]/30" />
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col items-center text-center">
              {/* Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C221E] tracking-tight leading-tight mb-2 mt-1">
                {revData.heading}
              </h2>

              {/* 3D Speech Bubble Asset Image */}
              <div className="relative w-64 h-56 my-1 preserve-3d">
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-44 h-5 rounded-full bg-purple-950/10 blur-md" />
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/assets/3dreview.png"
                    alt="3D Speech Bubble with Gold Star"
                    fill
                    sizes="(max-width: 640px) 250px, 300px"
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#614A66] leading-relaxed max-w-xs mb-5">
                {revData.description}
              </p>

              {/* Interactive 5-Star Rating Selector */}
              <div className="w-full p-4 rounded-2xl bg-white/70 border border-[#E4D5E8] shadow-2xs mb-6 flex flex-col items-center gap-2">
                <span className="text-[11px] font-bold text-[#7B5985] uppercase tracking-wider">
                  Rate Your Experience Today
                </span>

                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="p-1 cursor-pointer transition-transform hover:scale-125 focus:outline-hidden"
                    >
                      <Star
                        className={`w-7 h-7 transition-colors ${
                          star <= rating
                            ? "text-[#C5A059] fill-[#C5A059]"
                            : "text-[#D8C9DE] fill-transparent"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <span className="text-xs text-[#8C7A6B] font-medium mt-0.5">
                  {rating === 5
                    ? "✨ Exceptional Dining!"
                    : rating === 4
                    ? "😊 Great Experience!"
                    : "🙏 Thank you for your feedback"}
                </span>
              </div>

              {/* Google Review CTA Button */}
              <div className="w-full pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleOpenGoogleReview}
                  className="w-full py-4 px-6 rounded-2xl bg-[#7B5985] hover:bg-[#684871] text-white text-sm font-bold tracking-wide uppercase flex items-center justify-between shadow-md transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {/* Google 'G' Custom Logo Icon */}
                    <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-xs">
                      <svg className="w-4 h-4" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>
                    <span>REVIEW US ON GOOGLE</span>
                  </div>
                  <ExternalLink className="w-4 h-4 stroke-[2]" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
