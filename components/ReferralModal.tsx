"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Users, Copy, Check, MessageSquare, ArrowRight, Share2 } from "lucide-react";
import confetti from "canvas-confetti";
import { restaurantData } from "@/data/restaurantData";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [copied, setCopied] = useState(false);
  const refData = restaurantData.referral;

  const handleShareWhatsapp = () => {
    const message = encodeURIComponent(refData.whatsappText);
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, "_blank");
    onShowToast("Opening WhatsApp share invitation...");
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(refData.shareUrl);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#C5A059", "#467054", "#FAF5EE"],
    });
    onShowToast("Invitation link copied to clipboard!");
    setTimeout(() => {
      setCopied(false);
    }, 3000);
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
            className="relative w-full max-w-[440px] max-h-[90vh] rounded-[32px] bg-[#EEF4EF] border border-[#D7E6DB] shadow-2xl overflow-y-auto no-scrollbar flex flex-col"
          >
            {/* Header Toolbar */}
            <div className="sticky top-0 z-20 px-6 pt-6 pb-4 bg-[#EEF4EF]/90 backdrop-blur-md flex items-center justify-between border-b border-[#D7E6DB]/80">
              <button
                onClick={onClose}
                aria-label="Back to main page"
                className="w-10 h-10 rounded-full glass-pill flex items-center justify-center text-[#2D4534] hover:bg-white transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2]" />
              </button>

              <span className="font-serif text-xs font-bold tracking-[0.2em] text-[#467054] uppercase">
                {refData.title}
              </span>

              <div className="w-10 h-10 rounded-full bg-[#DBE9DE] text-[#3D6E4A] flex items-center justify-center shadow-xs">
                <Users className="w-4 h-4" />
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col items-center text-center">
              {/* Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C221E] tracking-tight leading-tight mb-1 mt-2">
                {refData.heading}
              </h2>

              <p className="text-xs font-semibold tracking-wider text-[#467054] uppercase mb-4">
                {refData.subheading}
              </p>

              {/* 3D Cups Asset Image */}
              <div className="relative w-64 h-56 my-2 preserve-3d">
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-48 h-5 rounded-full bg-emerald-950/10 blur-md" />
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src="/assets/3dcups.png"
                    alt="Green Coffee Cups with Floating Hearts"
                    fill
                    className="object-contain drop-shadow-xl"
                    priority
                  />
                </motion.div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#4E6153] leading-relaxed max-w-xs mb-6">
                {refData.description}
              </p>

              {/* Offer Badge Box */}
              <div className="w-full p-4 rounded-2xl bg-white/70 border border-[#D1E2D5] shadow-xs mb-6 flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4 text-[#3D6E4A]" />
                <span className="text-xs font-bold text-[#2D4534] tracking-wide">
                  {refData.offerBadge}
                </span>
              </div>

              {/* Action Buttons Section */}
              <div className="w-full space-y-3 pt-2">
                {/* SHARE ON WHATSAPP Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleShareWhatsapp}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#3D6E4A] hover:bg-[#325B3C] text-white text-sm font-bold tracking-wide uppercase flex items-center justify-between shadow-md transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                      <MessageSquare className="w-3.5 h-3.5 text-white fill-white/20" />
                    </div>
                    <span>SHARE ON WHATSAPP</span>
                  </div>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </motion.button>

                {/* COPY INVITATION LINK Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCopyLink}
                  className="w-full py-3.5 px-6 rounded-2xl bg-white/80 hover:bg-white text-[#2D4534] border border-[#CDE0D2] text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-2xs transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#3D6E4A] stroke-[3]" />
                      <span>LINK COPIED!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 stroke-[2]" />
                      <span>COPY INVITATION LINK</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
