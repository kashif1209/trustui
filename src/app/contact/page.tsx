import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import MapSection from '@/components/MapSection';

export const metadata = {
  title: 'Contact Us - Finsbury Trust',
  description: 'Get in touch with Finsbury Trust. Contact us for inquiries, partnerships, or to learn more about our charitable initiatives.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>
      </div>

      {/* Main Content Section with Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-1 bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                  <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" required />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <input type="text" id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter subject" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea id="message" rows={6} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" required></textarea>
                </div>
                
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Us</h2>
              
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Prestige Finsbury Park Hyde<br />
                      Bangalore, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@finsburytrust.org<br />
                      support@finsburytrust.org
                    </p>
                  </div>
                </div>
              </div>
            
              {/* Map */}
              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
                <MapSection />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Connect With Us</h2>
          <div className="flex justify-center space-x-6">
            <Link href="https://www.facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
              <FaFacebook size={32} />
            </Link>
            <Link href="https://www.twitter.com" target="_blank" className="text-blue-600 hover:text-blue-800">
              <FaTwitter size={32} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" className="text-blue-600 hover:text-blue-800">
              <FaInstagram size={32} />
            </Link>
            <Link href="https://www.youtube.com" target="_blank" className="text-blue-600 hover:text-blue-800">
              <FaYoutube size={32} />
            </Link>
            <Link href="https://www.linkedin.com" target="_blank" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={32} />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stay updated with our latest events, initiatives, and success stories.
          </p>
          <div className="flex flex-col md:flex-row max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" className="flex-grow px-4 py-3 rounded-full md:rounded-r-none focus:outline-none text-gray-800" />
            <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-full md:rounded-l-none transition duration-300 mt-2 md:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 