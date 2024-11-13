'use client';

import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { BentoGridThirdDemo } from "@/components/MainSection";
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TypewriterEffectDemo />
      <Cards />
      <BentoGridThirdDemo />
      <Footer />
    </main>
  );
}
