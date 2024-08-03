'use client'

import img from "../assets/spotify.png";
import img2 from "../assets/paypal.png";
import img3 from "../assets/slack.png";
import Image from "next/image";

const LogoCarousel: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full lg:w-auto">
        <div className="flex animate-marquee whitespace-nowrap">
                <div className="min-w-max mx-4 md:mx-20 xl:mx-6">
                <Image src={img} alt="Spotify" />
                </div>
                <div className="min-w-max mx-4 md:mx-20 xl:mx-6">
                <Image src={img2} alt="PayPal" />
                </div>
                <div className="min-w-max mx-4 md:mx-20 xl:mx-6">
                <Image src={img3} alt="Slack" />
                </div>
                <div className="min-w-max mx-4 md:mx-20 xl:mx-6">
                <Image src={img} alt="Spotify" />
                </div>
                <div className="min-w-max mx-4 md:mx-20 xl:mx-6">
                <Image src={img2} alt="PayPal" />
                </div>
                <div className="min-w-max mx-4 md:mx-20 xl:mx-6">
                <Image src={img3} alt="Slack" />
                </div>
                <div className="min-w-max mx-4 md:mx-20 xl:mx-4 hidden md:flex xl:hidden">
                <Image src={img} alt="Spotify" />
                </div>
        </div>
    </div>
  );
};

export default LogoCarousel;
