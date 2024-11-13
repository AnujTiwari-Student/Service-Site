import React from 'react';
import Card from './Card';
import { Heart, Stethoscope, FileText, ShieldCheck } from 'lucide-react'; // Importing healthcare-related icons
import FeaturesSectionDemo from './blocks/features-section-demo-2';

function Cards() {
  return (
    <div className='w-full'>
      <div className='md:mx-20 p-4 md:p-8 lg:p-10 flex flex-col justify-center items-center xl:flex-row gap-6 md:gap-10'>
        <FeaturesSectionDemo />
      </div>
    </div>
  );
}

export default Cards;
