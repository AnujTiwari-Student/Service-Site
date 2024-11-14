'use client';

import Image from "next/image";
import img from "/public/Images@2x.png";
import { AppleCardsCarouselDemo } from "./AppleCardCarousel";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:mx-10 xl:mx-20 mx-4 my-8 md:my-16 xl:my-22">
      <div className="space-y-4 w-full md:w-2/4 xl:w-2/5 xl:mt-16 md:mt-10">
        <h1 className="font-semibold xl:text-xl">BHARAT HEALTH</h1>
        <h1 className="md:text-6xl text-4xl font-bold">
          <span>Your Health,</span> Our Priority.
        </h1>
        <div className="md:py-4 lg:py-6 xl:py-10">
          <p className="md:text-base xl:text-xl">
            Bharat Health app provides seamless access to healthcare services, helping you connect with trusted providers, manage health records, and access essential health information at your fingertips.
          </p>
        </div>
        <button className="py-4 px-8 bg-green-500 font-bold rounded-full text-white shadow-lg shadow-green-300 hover:bg-black ease-linear duration-250 transition-all hover:shadow-gray-700">
          GET STARTED
        </button>
      </div>
      <div className="md:h-[480px] md:w-auto xl:h-auto xl:w-[600px]">
       <AppleCardsCarouselDemo />
      </div>
    </div>
  );
};

export default HeroSection;
