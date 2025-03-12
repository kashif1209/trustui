import BlanketDriveCarousel from '@/components/BlanketDriveCarousel';

export const metadata = {
  title: 'Blanket Drive Event - Finsbury Trust',
  description: 'Join our annual blanket drive to help provide warmth and comfort to those in need during the winter months.',
};

export default function BlanketDrivePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <BlanketDriveCarousel />
      
      {/* Event Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About the Event</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our annual Blanket Drive aims to collect new and gently used blankets for distribution to homeless shelters 
              and families in need throughout Bangalore. With winter temperatures dropping, your donation can make a significant 
              difference in someone's life.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Event Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Date:</strong> December 10-20, 2023</li>
                <li><strong>Drop-off Location:</strong> Prestige Finsbury Park Hyde, Bangalore</li>
                <li><strong>Items Needed:</strong> Blankets, sleeping bags, warm clothing</li>
                <li><strong>Goal:</strong> 1,000 blankets</li>
              </ul>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">How You Can Help</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Donate Items</h4>
                <p className="text-gray-600">Bring new or gently used blankets to our collection point.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Volunteer</h4>
                <p className="text-gray-600">Help us sort, package, and distribute the collected items.</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-blue-800 mb-2">Spread the Word</h4>
                <p className="text-gray-600">Share our event on social media to increase donations.</p>
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                Register to Volunteer
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 