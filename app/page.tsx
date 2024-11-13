'use client';

import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { BentoGridThirdDemo } from "@/components/MainSection";
import TrustedBySection from "@/components/TrustedBy";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TrustedBySection />
      <Cards />
      <BentoGridThirdDemo />
      <Footer />
    </main>
  );
}
