'use client'

import React from 'react'
import { Facebook, Twitter, Instagram } from 'lucide-react' // Optional: Use Lucide icons for social media

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Bharat Health</h3>
            <p className="text-sm mb-4">
              Empowering healthcare professionals with efficient patient management. Stay organized, save time, and enhance care.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul>
              <li>
                <a href="#home" className="text-sm hover:text-teal-500">Home</a>
              </li>
              <li>
                <a href="#about" className="text-sm hover:text-teal-500">About</a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-teal-500">Contact</a>
              </li>
              <li>
                <a href="#privacy" className="text-sm hover:text-teal-500">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-teal-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-6 h-6 text-gray-400 hover:text-teal-500" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-teal-500" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and news.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg border border-gray-300 w-full text-sm text-black"
              />
              <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded-r-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2024 Bharat Health. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
