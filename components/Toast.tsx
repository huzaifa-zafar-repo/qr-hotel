"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClear: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClear }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm pointer-events-auto"
        >
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#2C221E] text-[#FAF5EE] border border-[#C5A059]/40 shadow-2xl backdrop-blur-lg">
            <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 text-[#D4AF37] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 stroke-[2]" />
            </div>

            <p className="flex-1 text-xs font-medium leading-tight text-[#F3EBE1]">
              {message}
            </p>

            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 animate-pulse" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
