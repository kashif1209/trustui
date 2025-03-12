import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-blue-50">
      {/* Hero Image Placeholder */}
      <div className="relative h-[600px] w-full">
        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
          <div className="text-gray-500 text-lg">Hero Image Placeholder</div>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Making a Difference Together</h1>
              <p className="text-xl mb-8">
                Finsbury Trust is dedicated to creating positive change in communities through sustainable initiatives and partnerships.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  href="/donate" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-center transition duration-300"
                >
                  Donate Now
                </Link>
                <Link 
                  href="/get-involved" 
                  className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-8 rounded-full text-center transition duration-300"
                >
                  Get Involved
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 