import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Finsbury Trust</h3>
            <p className="text-gray-300 mb-4">
              Dedicated to making a positive impact in our community through charitable initiatives and programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaInstagram size={24} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaYoutube size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/our-work" className="text-gray-300 hover:text-white">Our Work</Link></li>
              <li><Link href="/get-involved" className="text-gray-300 hover:text-white">Get Involved</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Programs</h3>
            <ul className="space-y-2">
              <li><Link href="/programs/education" className="text-gray-300 hover:text-white">Education</Link></li>
              <li><Link href="/programs/healthcare" className="text-gray-300 hover:text-white">Healthcare</Link></li>
              <li><Link href="/programs/environment" className="text-gray-300 hover:text-white">Environment</Link></li>
              <li><Link href="/programs/community" className="text-gray-300 hover:text-white">Community Development</Link></li>
              <li><Link href="/programs/disaster-relief" className="text-gray-300 hover:text-white">Disaster Relief</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Prestige Finsbury Park Hyde</p>
              <p className="mb-2">Bangalore, India</p>
              <p className="mb-2">info@finsburytrust.org</p>
              <p>+91 98765 43210</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Finsbury Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 