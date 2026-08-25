"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  UtensilsCrossed,
  Wifi,
  Clock,
  MapPin,
  Phone,
  Sparkles,
  Tag,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCard: (type: "special" | "referral" | "review") => void;
}

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCard,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* VIP Slide-out Drawer Panel (Light Luxury Theme) */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative z-10 w-full max-w-sm sm:max-w-md h-full bg-gradient-to-b from-[#FFFDF9] via-[#FAF3EA] to-[#F5E8D9] text-[#2C221E] border-l border-[#E5D2B8] p-6 sm:p-7 shadow-[0_0_50px_rgba(0,0,0,0.18)] overflow-y-auto flex flex-col justify-between"
          >
            {/* Soft Warm Radial Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#FADBB6]/40 via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Header: Logo Emblem & Close Button */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DCCB] relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5E2D0] to-[#E6CCB3] flex items-center justify-center text-[#7A542E] shadow-sm border border-white">
                    <UtensilsCrossed className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg sm:text-xl font-bold tracking-widest text-[#2C221E] uppercase leading-tight">
                      {restaurantData.name}
                    </h2>
                    <p className="text-[9px] font-bold tracking-[0.2em] text-[#8C6D3F] uppercase">
                      VIP Guest Navigation
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  aria-label="Close Navigation"
                  className="w-10 h-10 rounded-full bg-white/80 border border-[#EAE0D3] flex items-center justify-center text-[#2C221E] hover:bg-[#C5A059] hover:text-white hover:border-[#C5A059] transition-all cursor-pointer shadow-xs"
                >
                  <X className="w-5 h-5 stroke-[2]" />
                </motion.button>
              </div>

              {/* Quick Navigation Links */}
              <div className="mt-7 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#8C6D3F] uppercase">
                    Featured Experiences
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                </div>

                {/* Experience 01 */}
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onSelectCard("special");
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-[#FFF9F3] to-[#F9EFE3] border border-[#F2DFCC] hover:border-[#C5A059] text-xs font-bold text-[#2C221E] flex items-center justify-between transition-all shadow-xs group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#F5E5D5] text-[#B87A4B] flex items-center justify-center border border-white shadow-2xs">
                      <Tag className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold block text-[#2C221E] group-hover:text-[#B87A4B] transition-colors">
                        01. TODAY'S SPECIAL
                      </span>
                      <span className="text-[10px] text-[#8C7A6B] font-medium">Exquisite Chef Selection</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#B87A4B] group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Experience 02 */}
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onSelectCard("referral");
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-[#F4F9F5] to-[#E5F2E8] border border-[#D3E4D7] hover:border-[#3B6649] text-xs font-bold text-[#2C221E] flex items-center justify-between transition-all shadow-xs group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D8E8DC] text-[#3B6649] flex items-center justify-center border border-white shadow-2xs">
                      <Users className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold block text-[#2C221E] group-hover:text-[#3B6649] transition-colors">
                        02. BRING A FRIEND
                      </span>
                      <span className="text-[10px] text-[#6E8574] font-medium">Shared Dining Experience</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#3B6649] group-hover:translate-x-1 transition-transform" />
                </motion.button>

                {/* Experience 03 */}
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onSelectCard("review");
                  }}
                  className="w-full text-left p-4 rounded-2xl bg-gradient-to-r from-[#FAF5FA] to-[#EFE2F2] border border-[#E4D5E6] hover:border-[#754E80] text-xs font-bold text-[#2C221E] flex items-center justify-between transition-all shadow-xs group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#EADBEC] text-[#754E80] flex items-center justify-center border border-white shadow-2xs">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold block text-[#2C221E] group-hover:text-[#754E80] transition-colors">
                        03. REVIEW US
                      </span>
                      <span className="text-[10px] text-[#856D8C] font-medium">Share Your Experience</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#754E80] group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Guest Information */}
              <div className="mt-8 space-y-3">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#8C6D3F] uppercase block mb-2">
                  Hotel Services & Info
                </span>

                <div className="flex items-start gap-3.5 py-1.5">
                  <div className="p-2 rounded-xl bg-[#3B6649]/12 text-[#3B6649] shrink-0 mt-0.5">
                    <Wifi className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#2C221E] block">Complimentary Wi-Fi</span>
                    <span className="text-[11px] text-[#5C4D42] font-mono">SSID: {restaurantData.wifiName}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-1.5">
                  <div className="p-2 rounded-xl bg-[#B87A4B]/12 text-[#B87A4B] shrink-0 mt-0.5">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#2C221E] block">Dining Hours</span>
                    <span className="text-[11px] text-[#6E5F55]">{restaurantData.openingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-1.5">
                  <div className="p-2 rounded-xl bg-[#9E4A4A]/12 text-[#9E4A4A] shrink-0 mt-0.5">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#2C221E] block">Location</span>
                    <span className="text-[11px] text-[#6E5F55]">{restaurantData.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 py-1.5">
                  <div className="p-2 rounded-xl bg-[#754E80]/12 text-[#754E80] shrink-0 mt-0.5">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-[#2C221E] block">Direct Concierge</span>
                    <span className="text-[11px] text-[#6E5F55]">{restaurantData.contactPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer note */}
            <div className="pt-6 border-t border-[#E8DCCB] text-center flex flex-col items-center mt-6">
              <p className="font-script text-2xl text-[#C5A059]">Bon Appétit!</p>
              <p className="text-[9px] text-[#8C7A6B] uppercase tracking-[0.2em] mt-1 font-bold">
                Urban Bite Digital Experience
              </p>
              <a
                href="https://wa.me/923120031236"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#E9DFD0] text-[11px] text-[#75675E] font-medium hover:border-[#25D366] hover:text-[#128C7E] transition-all cursor-pointer shadow-2xs"
              >
                <span>Powered by</span>
                <span className="font-serif font-bold text-[#2C221E] tracking-wider">Xintral</span>
                <Sparkles className="w-3 h-3 text-[#C5A059]" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
