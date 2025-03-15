'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the mobile menu when ESC key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Prevent scrolling when drawer is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-800">
              Finsbury Trust
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About Us
            </Link>
            <Link href="/our-work" className="text-gray-700 hover:text-blue-600 font-medium">
              Our Work
            </Link>
            <Link href="/get-involved" className="text-gray-700 hover:text-blue-600 font-medium">
              Get Involved
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium">
              Contact
            </Link>
          </nav>

          {/* Donate Button */}
          <div className="hidden md:block">
            <Link 
              href="/donate" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              id="mobile-menu-button"
              className="mobile-menu-button p-2 focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Side Drawer */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <div 
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-800">Menu</h2>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <FaTimes className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        <div className="py-4">
          <Link 
            href="/" 
            className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/our-work" 
            className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link 
            href="/get-involved" 
            className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Involved
          </Link>
          <Link 
            href="/contact" 
            className="block py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-6 px-4">
            <Link 
              href="/donate" 
              className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-md text-center transition duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 