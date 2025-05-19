import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generalSans } from "./fonts";
import "./globals.css";
import "./lenis.css";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Cred.Hub",
    default: "Cred.Hub - The Trust Passport for Web3 and Beyond",
  },
  description: "Next-generation decentralized reputation protocol for Web3 ecosystems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${generalSans.variable} antialiased`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
