import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Get Involved - Finsbury Trust',
  description: 'Discover how you can support Finsbury Trust through donations, volunteering, partnerships, and more.',
};

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            There are many ways to support our mission and make a difference. Find the opportunity that's right for you.
          </p>
        </div>
      </div>

      {/* Ways to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ways to Support</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every contribution, big or small, helps us continue our work and expand our impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Donate */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Make a Donation</h3>
              <p className="text-gray-600 mb-6">
                Your financial support enables us to sustain and expand our programs. You can make a one-time donation or become a monthly supporter.
              </p>
              <div className="text-center">
                <Link 
                  href="/donate" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Donate Now
                </Link>
              </div>
            </div>

            {/* Volunteer */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">🤝</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Share your time and skills to support our mission. We have various volunteer opportunities both in-person and remotely.
              </p>
              <div className="text-center">
                <Link 
                  href="#volunteer-form" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Become a Volunteer
                </Link>
              </div>
            </div>

            {/* Partner */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">🤲</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Partner With Us</h3>
              <p className="text-gray-600 mb-6">
                We collaborate with organizations that share our vision. Explore partnership opportunities for greater collective impact.
              </p>
              <div className="text-center">
                <Link 
                  href="#partnership-form" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Become a Partner
                </Link>
              </div>
            </div>

            {/* Fundraise */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">📣</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Fundraise</h3>
              <p className="text-gray-600 mb-6">
                Start your own fundraising campaign for Finsbury Trust. Whether it's a birthday, marathon, or special event, your efforts make a difference.
              </p>
              <div className="text-center">
                <Link 
                  href="#fundraising-info" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Start Fundraising
                </Link>
              </div>
            </div>

            {/* Corporate Support */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">🏢</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Corporate Support</h3>
              <p className="text-gray-600 mb-6">
                Engage your company in social responsibility. We offer corporate volunteering, sponsorship opportunities, and cause-related marketing.
              </p>
              <div className="text-center">
                <Link 
                  href="#corporate-info" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Corporate Opportunities
                </Link>
              </div>
            </div>

            {/* Spread the Word */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-blue-600 text-2xl">📱</div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Spread the Word</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media and share our content to help raise awareness about our cause and the impact of our work.
              </p>
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 inline-block"
                >
                  Follow Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section id="volunteer-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Volunteer Application</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="interests" className="block text-gray-700 font-medium mb-2">Areas of Interest</label>
                <select 
                  id="interests" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select an area</option>
                  <option value="education">Education Programs</option>
                  <option value="healthcare">Healthcare Initiatives</option>
                  <option value="environment">Environmental Projects</option>
                  <option value="community">Community Development</option>
                  <option value="fundraising">Fundraising & Events</option>
                  <option value="admin">Administrative Support</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Why do you want to volunteer?</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your motivation and any relevant skills or experience"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Volunteer Testimonials</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from those who have experienced the joy of making a difference with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Photo</div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 text-center">
                "Volunteering with Finsbury Trust has been one of the most rewarding experiences of my life. I've gained new skills, made lifelong friends, and most importantly, seen the direct impact of our work on communities."
              </p>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-800">Michael Brown</h4>
                <p className="text-blue-600">Education Program Volunteer</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Photo</div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 text-center">
                "As a corporate volunteer, I've seen how our team's efforts have made a real difference. The experience has strengthened our team bonds while allowing us to contribute to meaningful causes."
              </p>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-800">Emily Chen</h4>
                <p className="text-blue-600">Corporate Volunteer</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-md">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Photo</div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6 text-center">
                "I started as a weekend volunteer and was so inspired by the work that I now dedicate much more time to the cause. The gratitude from the communities we serve is truly heartwarming."
              </p>
              <div className="text-center">
                <h4 className="text-lg font-bold text-gray-800">David Wilson</h4>
                <p className="text-blue-600">Environmental Project Volunteer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join our community of supporters and help us create positive change around the world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              href="/donate" 
              className="bg-white hover:bg-gray-100 text-blue-700 font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Donate Now
            </Link>
            <a 
              href="#volunteer-form" 
              className="bg-transparent hover:bg-blue-800 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-center transition duration-300"
            >
              Volunteer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 