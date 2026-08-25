"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RestaurantHeader } from "@/components/RestaurantHeader";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { FeatureStrip } from "@/components/FeatureStrip";
import { Footer } from "@/components/Footer";
import { SpecialModal } from "@/components/SpecialModal";
import { ReferralModal } from "@/components/ReferralModal";
import { ReviewModal } from "@/components/ReviewModal";
import { NavigationDrawer } from "@/components/NavigationDrawer";
import { Toast } from "@/components/Toast";

export default function Home() {
  // Modal states
  const [activeModal, setActiveModal] = useState<"special" | "referral" | "review" | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <main className="relative min-h-screen w-full text-[#2C221E] flex flex-col justify-between overflow-x-hidden select-none bg-transparent">
      {/* Pure Full Viewport Responsive Background Image Layer */}
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Mobile & Tablet Background (< lg) */}
        <Image
          src="/assets/mob-bg.png"
          alt="Full luxury restaurant mobile & tablet background"
          fill
          quality={100}
          className="object-cover object-top sm:object-center block lg:hidden"
          priority
        />
        {/* Desktop & Laptop Background (>= lg) */}
        <Image
          src="/assets/bg.png"
          alt="Full luxury restaurant desktop background"
          fill
          quality={100}
          className="object-cover object-center hidden lg:block"
          priority
        />
      </div>

      {/* Main Responsive Page Content Container */}
      <div className="relative z-10 w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6 flex flex-col justify-between min-h-screen">
        
        {/* Restaurant Header */}
        <RestaurantHeader onOpenNav={() => setIsNavOpen(true)} />

        {/* Central Experience View */}
        <div className="flex-1 flex flex-col justify-center my-2 sm:my-4">
          {/* Transparent Hero Greeting Section */}
          <HeroSection />

          {/* Main Experience Cards Layout */}
          {/* Mobile: Uses div1.png, div2.png, div3.png background images per card */}
          {/* Desktop: Sleek, compact 3-column row with reduced width & height */}
          <div className="mt-3 sm:mt-6 mb-6 sm:mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-6 items-stretch max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto w-full">
            <ExperienceCard
              type="special"
              index={0}
              onClick={() => setActiveModal("special")}
            />

            <ExperienceCard
              type="referral"
              index={1}
              onClick={() => setActiveModal("referral")}
            />

            <div className="md:col-span-2 lg:col-span-1">
              <ExperienceCard
                type="review"
                index={2}
                onClick={() => setActiveModal("review")}
              />
            </div>
          </div>

          {/* Bottom Feature Strip */}
          <FeatureStrip />
        </div>

        {/* Footer Section */}
        <Footer />
      </div>

      {/* Interactive Detail Modals */}
      <SpecialModal
        isOpen={activeModal === "special"}
        onClose={() => setActiveModal(null)}
        onShowToast={showToast}
      />

      <ReferralModal
        isOpen={activeModal === "referral"}
        onClose={() => setActiveModal(null)}
        onShowToast={showToast}
      />

      <ReviewModal
        isOpen={activeModal === "review"}
        onClose={() => setActiveModal(null)}
        onShowToast={showToast}
      />

      {/* Navigation Side Drawer */}
      <NavigationDrawer
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        onSelectCard={(type) => setActiveModal(type)}
      />

      {/* Global Notification Toast */}
      <Toast message={toastMessage} onClear={() => setToastMessage(null)} />
    </main>
  );
}
