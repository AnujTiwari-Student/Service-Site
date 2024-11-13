'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { X } from 'lucide-react'; 
import { Menu } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section className='fixed top-0 left-0 w-full z-[9999]'>
        <div className='w-full py-4 px-4 md:py-4 md:px-8 xl:py-4 xl:px-10 flex justify-between shadow-md shadow-gray-200 bg-white items-center'>
          {/* Logo / Home Link */}
          <Link href="/">
            <p className='text-lg font-bold'>Brand</p>
          </Link>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-x-4 md:gap-x-6 xl:gap-x-8'>
            <Link href="/"><p className='text-md'>Home</p></Link>
            <Link href="/"><p className='text-md'>About</p></Link>
            <Link href="/"><p className='text-md'>Services</p></Link>
            <Link href="/"><p className='text-md'>Products</p></Link>
            <Link href="/"><p className='text-md'>Support</p></Link>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? (
                <X className='h-6 w-6 text-gray-800' />
              ) : (
                <Menu className='h-6 w-6 text-gray-800' />
              )}
            </button>
          </div>

          {/* Desktop Right Section */}
          <div className='hidden md:flex gap-x-8 items-center'>
            <Link href="/"><p className='text-md'>Login</p></Link>
            <button className='border border-gray-500 rounded-3xl py-2 md:py-2 px-4 xl:px-8'>
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className='md:hidden bg-white shadow-md absolute w-full flex flex-col items-start py-4 px-4'>
            <Link href="/"><p className='text-lg py-2' onClick={toggleMenu}>Home</p></Link>
            <Link href="/"><p className='text-lg py-2' onClick={toggleMenu}>About</p></Link>
            <Link href="/"><p className='text-lg py-2' onClick={toggleMenu}>Services</p></Link>
            <Link href="/"><p className='text-lg py-2' onClick={toggleMenu}>Products</p></Link>
            <Link href="/"><p className='text-lg py-2' onClick={toggleMenu}>Support</p></Link>
            <Link href="/"><p className='text-lg py-2' onClick={toggleMenu}>Login</p></Link>
            <button className='border border-gray-500 rounded-3xl py-2 px-6 mt-2'>
              Start Free Trial
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Header;
