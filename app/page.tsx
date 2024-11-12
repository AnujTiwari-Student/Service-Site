'use client';

import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainSection from "@/components/MainSection";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import TrustedBySection from "@/components/TrustedBy";
import WhoWeAre from "@/components/WhoWeAre";


export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <TrustedBySection />
      <Cards />
      <MainSection />
      <Footer />
      <PrivacyPolicy />
    </main>
  );
}
