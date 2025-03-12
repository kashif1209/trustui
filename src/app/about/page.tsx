import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'About Us - Finsbury Trust',
  description: 'Learn about Finsbury Trust, our mission, values, and the team behind our charitable work.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Finsbury Trust</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            We are dedicated to creating positive change through sustainable initiatives and partnerships.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Story Image */}
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/about/our-story.jpg"
                alt="Finsbury Trust Story"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Finsbury Trust was founded in 2024 with a simple mission: to help communities thrive through sustainable development, education, and healthcare initiatives.
              </p>
              <p className="text-gray-600 mb-4">
                What began as a small group of dedicated volunteers has grown into a respected charitable organization with global reach. Our journey has been guided by a commitment to transparency, accountability, and measurable impact.
              </p>
              <p className="text-gray-600">
                Today, we work with partners around the world to implement programs that address critical needs while building capacity for long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide our work and define our approach to creating positive change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Value 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnerships and work closely with communities, organizations, and individuals to achieve shared goals.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">⚖️</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty, transparency, and accountability in all our operations and relationships.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">🌱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We design programs that create lasting change, building capacity within communities for continued success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who lead our organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Team Member 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <div className="text-gray-500 text-lg">Team Member Image Placeholder</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">xyz1</h3>
                <p className="text-blue-600 font-medium mb-4">Executive Director</p>
                <p className="text-gray-600">
                  With over 15 years of experience in the non-profit sector, xyz1 leads our organization with vision and compassion.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <div className="text-gray-500 text-lg">Team Member Image Placeholder</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">xyz2</h3>
                <p className="text-blue-600 font-medium mb-4">Programs Director</p>
                <p className="text-gray-600">
                  xyz2 oversees our program development and implementation, ensuring they align with our mission and create meaningful impact.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="bg-gray-300 h-64 flex items-center justify-center">
                <div className="text-gray-500 text-lg">Team Member Image Placeholder</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">xyz3</h3>
                <p className="text-blue-600 font-medium mb-4">Partnerships Manager</p>
                <p className="text-gray-600">
                  xyz3 builds and maintains our network of partners, fostering collaborations that amplify our impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Together, we can create positive change and build a better future for communities around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/get-involved" 
              className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Get Involved
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 