import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
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
          <div>
            <Link 
              href="/donate" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button p-2 focus:outline-none">
              <svg className="h-6 w-6 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div className="mobile-menu hidden md:hidden mt-4 pb-2">
          <Link href="/" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Home</Link>
          <Link href="/about" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">About Us</Link>
          <Link href="/our-work" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Our Work</Link>
          <Link href="/get-involved" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Get Involved</Link>
          <Link href="/contact" className="block py-2 px-4 text-gray-700 hover:bg-blue-50 rounded">Contact</Link>
          <Link href="/donate" className="block py-2 px-4 text-blue-600 font-bold hover:bg-blue-50 rounded">Donate Now</Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 