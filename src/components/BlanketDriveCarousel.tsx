'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface CarouselImage {
  src: string;
  alt: string;
}

const BlanketDriveCarousel = () => {
  // Sample images for the carousel
  const images: CarouselImage[] = [
    { src: '/images/events/blanket-drive-1.jpg', alt: 'Blanket Drive Volunteers' },
    { src: '/images/events/blanket-drive-2.jpg', alt: 'Community Distribution' },
    { src: '/images/events/blanket-drive-3.jpg', alt: 'Blanket Donation' },
    { src: '/images/events/blanket-drive-4.jpg', alt: 'Recipients' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // Navigation functions
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you'd handle the submission, likely with an API call
    console.log('Registration submitted:', formData);
    alert(`Thank you, ${formData.name}! You've been registered for the Blanket Drive.`);
    setShowRegistrationForm(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="relative">
      {/* Carousel Display */}
      <div className="h-[500px] w-full relative">
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          fill
          className="object-cover rounded-lg"
        />
        
        {/* Left Arrow */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full cursor-pointer">
          <FaChevronLeft size={24} color="white" onClick={goToPrevious} />
        </div>
        
        {/* Right Arrow */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 rounded-full cursor-pointer">
          <FaChevronRight size={24} color="white" onClick={goToNext} />
        </div>
        
        {/* Description Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
          <h3 className="text-2xl font-bold mb-2">Annual Blanket Drive</h3>
          <p className="mb-4">Help provide warmth to those in need this winter</p>
          <button 
            onClick={() => setShowRegistrationForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
          >
            Register to Volunteer
          </button>
        </div>
      </div>
      
      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Register for Blanket Drive</h3>
            <p className="text-gray-600 mb-6">
              Join us in providing warmth to those in need. Fill out the form below to volunteer for our annual blanket drive.
            </p>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="flex justify-end space-x-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowRegistrationForm(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-6 rounded-md transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition duration-300"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlanketDriveCarousel; 