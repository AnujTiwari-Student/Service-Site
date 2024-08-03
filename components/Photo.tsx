import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import imgLady from '../assets/lady.jpg';
import imgMan from '../assets/man.jpg';

function Photo() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate transform with delay
  const calculateTransform = (initialOffset: number) => {
    return `translateY(${initialOffset + (scrollY - 100) * 0.1}px)`; // Adjusting the offset for initial position
  };

  return (
    <div className='hidden xl:flex h-[720px] w-maxoverflow-hidden'>
      <div
        className='h-[320px] w-[336px] transition-transform duration-500 ease-in-out'
        style={{ transform: calculateTransform(0) }}
      >
        <Image src={imgLady} alt='lady-image' layout='fill' objectFit='cover' />
      </div>
      <div
        className='h-[420px] w-[314px] relative right-40 top-56 transition-transform duration-700 ease-in-out'
        style={{ transform: calculateTransform(-50) }}
      >
        <Image src={imgMan} alt='man-image' layout='fill' objectFit='cover' />
      </div>
    </div>
  );
}

export default Photo;
