import Image from 'next/image';

const ImpactSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through the generous support of our donors and volunteers, we've made significant progress in our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Impact Stat 1 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
            <p className="text-gray-700 font-medium">Children Educated</p>
          </div>

          {/* Impact Stat 2 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">₹2.5M</div>
            <p className="text-gray-700 font-medium">Funds Raised</p>
          </div>

          {/* Impact Stat 3 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
            <p className="text-gray-700 font-medium">Communities Served</p>
          </div>

          {/* Impact Stat 4 */}
          <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <p className="text-gray-700 font-medium">Volunteer Hours</p>
          </div>
        </div>

        {/* Featured Impact Story */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Placeholder */}
            <div className="h-64 md:h-auto bg-gray-300 flex items-center justify-center">
              <div className="text-gray-500 text-lg">Impact Story Image Placeholder</div>
            </div>
            
            {/* Content */}
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Transforming Lives in Rural Communities</h3>
              <p className="text-gray-600 mb-6">
                Our recent initiative in rural areas has provided clean water access to over 2,000 people, 
                reducing waterborne diseases by 65% and improving overall community health and productivity.
              </p>
              <div className="italic text-gray-500">
                "The Finsbury Trust's water project has transformed our village. Our children are healthier, 
                and women no longer have to walk miles for clean water." - Community Leader
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection; 