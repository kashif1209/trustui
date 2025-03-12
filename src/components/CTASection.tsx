import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 text-blue-100">
            Your support can help us continue our mission to create positive change in communities around the world.
            Whether through donations, volunteering, or spreading awareness, every contribution matters.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/donate" 
              className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Donate Now
            </Link>
            <Link 
              href="/get-involved" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 