import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const scriptFont = Great_Vibes({
  weight: "400",
  variable: "--font-script",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "URBAN BITE — Restaurant & Café",
  description: "Ultra-premium mobile digital dining experience. Discover today's special, refer a friend, or share your feedback.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#FAF6F0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${sansFont.variable} ${scriptFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#F9F5EF] text-[#2D2420] selection:bg-[#E5D7C5] selection:text-[#1F1714]">
        {children}
      </body>
    </html>
  );
}
