'use client';

import LogoCarousel from "@/components/Carousal";

const TrustedBySection: React.FC = () => {
  return (
    <div className="xl:absolute xl:top-[720px] xl:ml-20 mx-4 md:mx-10 xl:w-2/5">
      <p className="font-semibold">TRUSTED BY</p>
      <div className="my-10">
        <LogoCarousel />
      </div>
    </div>
  );
};

export default TrustedBySection;
