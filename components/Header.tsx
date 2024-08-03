"use client";

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import { ChevronDown, Mail, Menu, Smartphone, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <div className='flex justify-between mx-4 md:mx-auto'>
      <div className='hidden md:flex space-x-4 xl:space-x-8 items-center'>
        <div className='cursor-pointer xl:mt-0.5'>Home</div>
        <div className='flex space-x-1 items-center cursor-pointer'>
          <DropdownMenu>
            <DropdownMenuTrigger>Provider</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ChevronDown size={16} />
        </div>
        <div className='flex space-x-1 items-center cursor-pointer'>
          <DropdownMenu>
            <DropdownMenuTrigger>Product</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>About Us</DropdownMenuLabel>
              <DropdownMenuItem>Careers</DropdownMenuItem>
              <DropdownMenuItem>Blogs</DropdownMenuItem>
            </DropdownMenuContent>
            <ChevronDown size={16} />
          </DropdownMenu>
        </div>
        <div className='cursor-pointer xl:mt-0.5'>Features</div>
        <div className='cursor-pointer xl:mt-0.5'>Testimonials</div>
      </div>
      <div className='cursor-pointer md:flex justify-start md:justify-between'>
          <Image src={logo} alt="logo" />
      </div>
      <div className='hidden xl:flex space-x-6 items-center'>
        <div className='md:flex hidden'>
          <p>Consultation <span className='font-bold text-lg text-orange-600'>+1223 3837</span></p>
        </div>
        <button className='shadow-md transition-all duration-300 ease-linear text-sm text-blue-800 font-bold hover:text-white py-4 px-6 rounded-full hover:bg-green-400 cursor-pointer'>Start a project
        </button>
      </div>

      {/* Mobile View */}
      <div className='md:hidden flex items-center'>
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className='absolute top-20 right-0 bg-white shadow-lg rounded-t-none rounded-lg p-4 w-full flex flex-col justify-center'>
            <div className='hover:font-semibold cursor-pointer py-2'>Home</div>
            <div className='hover:font-semibold cursor-pointer py-2'>
              <div className='flex space-x-1 items-center'>
                <DropdownMenu>
                  <DropdownMenuTrigger>Provider</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <ChevronDown size={16} />
              </div>
            </div>
            <div className='hover:font-semibold cursor-pointer py-2'>
              <div className='flex space-x-1 items-center'>
                <DropdownMenu>
                  <DropdownMenuTrigger>Product</DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>About Us</DropdownMenuLabel>
                    <DropdownMenuItem>Careers</DropdownMenuItem>
                    <DropdownMenuItem>Blogs</DropdownMenuItem>
                  </DropdownMenuContent>
                  <ChevronDown size={16} />
                </DropdownMenu>
              </div>
            </div>
            <div className='hover:font-semibold cursor-pointer py-2'>Features</div>
            <div className='hover:font-semibold cursor-pointer py-2'>Testimonials</div>
        </div>
      )}
    </div>
  )
}

export default Header
