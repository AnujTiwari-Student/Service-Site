import React from 'react';
import Card from './Card';
import { ShoppingCart, ScreenShare, CircleCheckBig, Compass } from 'lucide-react'; // Importing specific icons

function Cards() {
  return (
    <div className='w-full'>
      <div className='md:mx-20 p-4 md:p-8 lg:p-10 flex flex-col justify-center items-center xl:flex-row gap-6 md:gap-10'>
        <div className='flex xl:gap-10'>
          <Card
            title="Digital Marketing"
            description="The ultimate collection crafted by world-class designers."
            Icon={CircleCheckBig}
            bgColor="bg-green-200"
          />
          <Card
            title="No marketing skills"
            description="The ultimate collection crafted by world-class designers."
            Icon={Compass}
            bgColor="bg-gray-300"
          />
        </div>
        <div className='flex xl:gap-10'>
          <Card
            title="Graphic Design"
            description="Creative designs to captivate your audience."
            Icon={ShoppingCart}
            bgColor="bg-orange-200"
          />
          <Card
            title="Content Writing"
            description="Engaging content for various platforms."
            Icon={ScreenShare}
            bgColor="bg-green-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Cards;
