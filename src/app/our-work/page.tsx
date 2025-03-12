"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function OurWorkPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const totalImages = 8;

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % totalImages);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + totalImages) % totalImages);
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (selectedImage === null) return;
    
    if (e.key === 'ArrowRight') {
      nextImage();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'Escape') {
      closeImage();
    }
  };

  return (
    <div className="min-h-screen" onKeyDown={handleKeyDown} tabIndex={0}>
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Making a positive impact in our community through meaningful initiatives and collaborative efforts.
          </p>
        </div>
      </div>

      {/* Recent Community Impact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Recent Community Impact</h2>
          
          {/* Event Card 1 - Blanket Drive */}
          <div className="max-w-6xl mx-auto mb-16 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Blanket Drive Event</h3>
                <p className="text-gray-600">
                  Our recent blanket drive brought warmth and comfort to those in need. Thanks to our generous donors 
                  and volunteers, we were able to make a significant impact in our community.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">500+ blankets distributed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">100+ volunteers participated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">25 local communities served</span>
                  </div>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="mt-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Event Gallery</h4>
                
                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                  {Array.from({ length: totalImages }).map((_, index) => (
                    <div 
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden shadow-md group cursor-pointer"
                      onClick={() => openImage(index)}
                    >
                      <img
                        src={`/images/blanket-drive/image${index + 1}.jpg`}
                        alt={`Blanket drive image ${index + 1}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <p className="text-white p-3 text-sm">
                          Click to view
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Image Modal */}
                {selectedImage !== null && (
                  <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center" onClick={closeImage}>
                    <div className="relative max-w-6xl w-full h-[80vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                      {/* Close button */}
                      <button 
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                        onClick={closeImage}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      
                      {/* Previous button */}
                      <button 
                        className="absolute left-4 text-white hover:text-gray-300 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      
                      {/* Image */}
                      <img
                        src={`/images/blanket-drive/image${selectedImage + 1}.jpg`}
                        alt={`Blanket drive image ${selectedImage + 1}`}
                        className="max-h-full max-w-full object-contain"
                      />
                      
                      {/* Next button */}
                      <button 
                        className="absolute right-4 text-white hover:text-gray-300 z-10"
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      
                      {/* Image counter */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full">
                        {selectedImage + 1} / {totalImages}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Event Card 2 - Food Bank (Placeholder) */}
          <div className="max-w-6xl mx-auto mb-16 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Food Bank Initiative</h3>
                <p className="text-gray-600">
                  Supporting local families through our monthly food bank program, providing essential 
                  nutrition and grocery supplies to those facing food insecurity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">1000+ meals provided</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">200+ families supported</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">15 local partners engaged</span>
                  </div>
                </div>
                <Link 
                  href="/our-work/food-bank"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>

          {/* Event Card 3 - Education Program (Placeholder) */}
          <div className="max-w-6xl mx-auto mb-16 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800">Education Support Program</h3>
                <p className="text-gray-600">
                  Empowering young minds through our education support initiative, providing resources 
                  and mentorship to help students succeed.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">300+ students supported</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">50+ volunteer tutors</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-600">✓</span>
                    <span className="text-gray-600">10 schools partnered</span>
                  </div>
                </div>
                <Link 
                  href="/our-work/education-program"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Image Placeholder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <p className="text-gray-600">People Helped</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <p className="text-gray-600">Active Programs</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,000+</div>
              <p className="text-gray-600">Volunteers</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <p className="text-gray-600">Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved CTA */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join us in making a difference. Whether through volunteering, donations, or partnerships, 
            your support helps us create lasting change in our community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/volunteer" 
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300"
            >
              Volunteer With Us
            </Link>
            <Link 
              href="/donate" 
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-800 transition duration-300"
            >
              Make a Donation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}