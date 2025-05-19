import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Advantages from "@/components/Advantages";
import Tokenomics from "@/components/Tokenomics";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Integrations from "@/components/Integrations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cred.Hub",
  description: "Next-generation decentralized reputation protocol for Web3 ecosystems.",
  icons: {
    icon: "/icon.png",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Features />
      <Advantages />
      <Tokenomics />
      <FAQ />
      <Integrations />
      <Footer />
    </main>
  );
}
