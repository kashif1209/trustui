import Image from 'next/image';

const MissionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower communities through sustainable development, education, and healthcare initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Mission Card 1 */}
          <div className="bg-blue-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-blue-600 text-3xl">🌱</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainable Development</h3>
            <p className="text-gray-600">
              We promote sustainable practices that help communities thrive while preserving natural resources for future generations.
            </p>
          </div>

          {/* Mission Card 2 */}
          <div className="bg-blue-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-blue-600 text-3xl">📚</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Education For All</h3>
            <p className="text-gray-600">
              We believe education is a fundamental right and work to provide quality learning opportunities for underserved communities.
            </p>
          </div>

          {/* Mission Card 3 */}
          <div className="bg-blue-50 rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="text-blue-600 text-3xl">❤️</div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Healthcare Access</h3>
            <p className="text-gray-600">
              We work to improve healthcare access and outcomes for vulnerable populations through targeted programs and partnerships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection; 