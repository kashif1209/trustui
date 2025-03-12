'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import apiService from '@/services/apiService';
import { config } from '@/config/environment';

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    paymentMethod: 'card',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === 'comments' ? 'description' : id]: value
    }));
  };

  const handleAmountSelect = (amount: string) => {
    setFormData(prev => ({
      ...prev,
      amount
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      await apiService.submitDonation(formData);
      
      setSubmitResult({
        success: true,
        message: 'Thank you for your donation! Your contribution will make a difference.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        amount: '',
        paymentMethod: 'card',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting donation:', error);
      setSubmitResult({
        success: false,
        message: error instanceof Error ? error.message : 'There was an error processing your donation. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Your donation helps us continue our mission of creating positive change in communities around the world.
          </p>
          <p className="mt-2 text-sm bg-blue-700 inline-block px-3 py-1 rounded">
            Environment: {process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV} | API: {config.apiUrl}
          </p>
        </div>
      </div>

      {/* Donation Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Simple Donation Form */}
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Make a Donation</h2>
            
            {submitResult && (
              <div className={`p-4 mb-6 rounded-md ${submitResult.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {submitResult.message}
              </div>
            )}
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
              
              {/* Donation Amount */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Donation Amount</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <button 
                    type="button"
                    onClick={() => handleAmountSelect('25')}
                    className={`py-3 px-4 border rounded-md text-center transition-colors ${
                      formData.amount === '25' 
                        ? 'bg-blue-100 border-blue-500 text-blue-700' 
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    ₹25
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleAmountSelect('50')}
                    className={`py-3 px-4 border rounded-md text-center transition-colors ${
                      formData.amount === '50' 
                        ? 'bg-blue-100 border-blue-500 text-blue-700' 
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    ₹50
                  </button>
                  <button 
                    type="button"
                    onClick={() => handleAmountSelect('100')}
                    className={`py-3 px-4 border rounded-md text-center transition-colors ${
                      formData.amount === '100' 
                        ? 'bg-blue-100 border-blue-500 text-blue-700' 
                        : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    ₹100
                  </button>
                </div>
                <div>
                  <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Custom Amount (₹)</label>
                  <input 
                    type="number" 
                    id="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>
              
              {/* Payment Method */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Payment Method</h3>
                <select 
                  id="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="paypal">PayPal</option>
                  <option value="UPI">UPI</option>
                  <option value="netbanking">Net Banking</option>
                </select>
              </div>
              
              {/* Additional Comments */}
              <div>
                <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Additional Comments (Optional)</label>
                <textarea 
                  id="comments"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Donation'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donation can make a difference in the lives of people and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">₹25</div>
              <p className="text-gray-700">
                Provides educational materials for one student for a month
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">₹50</div>
              <p className="text-gray-700">
                Supplies clean water to a family for six months
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">₹100</div>
              <p className="text-gray-700">
                Funds a community health workshop for 20 people
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Other Ways to Give</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Legacy Giving</h3>
              <p className="text-gray-600 mb-4">
                Leave a lasting impact by including Finsbury Trust in your estate planning.
              </p>
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Corporate Giving</h3>
              <p className="text-gray-600 mb-4">
                Partner with us through corporate donations, matching gifts, or sponsorships.
              </p>
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Stock Donations</h3>
              <p className="text-gray-600 mb-4">
                Make a tax-efficient donation of stocks, bonds, or other securities.
              </p>
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Trust & Security</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your donation is secure and will be used effectively to support our mission. We are a registered charity committed to transparency and accountability.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Logo</span>
              </div>
              <p className="text-gray-600">Charity Registration #123456</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-gray-500">Logo</span>
              </div>
              <p className="text-gray-600">Secure Payment Processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 