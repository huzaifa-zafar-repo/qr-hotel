"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Leaf, Heart } from "lucide-react";
import { restaurantData } from "@/data/restaurantData";

const iconMap = {
  Clock: Clock,
  Leaf: Leaf,
  Heart: Heart,
};

const featureStyles = [
  {
    iconColor: "text-[#C5A059]", // 1st Icon: Warm Amber/Gold
    circleBg: "bg-[#FFFBF2] border-[#F4E7D3]",
  },
  {
    iconColor: "text-[#2E7D32]", // 2nd Icon: Green
    circleBg: "bg-[#F1F8F3] border-[#D1E7D6]",
  },
  {
    iconColor: "text-[#E53935]", // 3rd Icon: Red
    circleBg: "bg-[#FDF2F2] border-[#F8D5D5]",
  },
];

export const FeatureStrip: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full rounded-[24px] sm:rounded-[30px] bg-white/40 backdrop-blur-md border border-white/60 p-4 sm:p-6 lg:p-7 shadow-xs mb-8 max-w-5xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
        {restaurantData.features.map((feature, idx) => {
          const IconComponent = iconMap[feature.iconName as keyof typeof iconMap] || Clock;
          const style = featureStyles[idx % featureStyles.length];

          return (
            <div
              key={feature.id}
              className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-colors ${
                idx !== 2 ? "sm:border-r border-[#E6D9C8]/40 sm:pr-4" : ""
              }`}
            >
              {/* Icon Circle */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${style.circleBg} border flex items-center justify-center ${style.iconColor} mb-2.5 shadow-2xs transition-transform hover:scale-105`}>
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.75]" />
              </div>

              {/* Title */}
              <h4 className="font-serif text-xs sm:text-sm lg:text-base font-bold text-[#2C221E] uppercase tracking-wider leading-tight">
                {feature.title}
              </h4>

              {/* Subtitle */}
              <p className="text-[11px] sm:text-xs text-[#8C7A6B] font-medium leading-tight mt-1.5 max-w-[200px]">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
