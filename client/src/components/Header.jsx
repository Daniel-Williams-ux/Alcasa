// src/components/Header.jsx
import React, { useState } from 'react';
import PromoBanner from './PromoBanner';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Promo Banner */}
      <PromoBanner />

      {/* Header */}
      <header className="bg-slate-200 p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo or Branding (To the Right) */}
          <a href="/" className="text-white font-bold text-lg">
            <img
              src="/logo.jpg" // Update with the path to your logo image
              alt="Your Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Navigation Links (In the Middle) */}
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-black hover:text-gray-300">
              Residences
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Ownership
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Bespoke
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              About
            </a>
            <a href="#" className="text-black hover:text-gray-300">
              Experience O2
            </a>
          </nav>

          {/* Language Selector and Globe Icon */}
          <div className="flex items-center space-x-2">
            <div className="relative group inline-block text-black">
              <button className="hover:text-gray-300 focus:outline-none">
                <span>Nigeria</span>
                <svg
                  className="h-5 w-5 inline-block ml-1 group-hover:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>

              {/* Dropdown Content (Hidden by default) */}
              <div className="hidden group-hover:block absolute z-10 top-full left-0 bg-white text-gray-800 py-2 px-4 shadow-md">
                {/* Add language options here */}
                <div>Lagos</div>
                <div>Abuja</div>
                {/* Add more options for other regions */}
              </div>
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Responsive Menu for Mobile */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 right-0 bg-blue-500 p-4">
              <a href="#" className="text-white block mb-2">
                Home
              </a>
              <a href="#" className="text-white block mb-2">
                Listings
              </a>
              <a href="#" className="text-white block mb-2">
                About Us
              </a>
              <a href="#" className="text-white block mb-2">
                Contact
              </a>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
