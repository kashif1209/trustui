'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import apiService from '@/services/apiService';
import { config } from '@/config/environment';
import Script from 'next/script';

// Add CSS for the checkmark animation
const checkmarkAnimation = `
  @keyframes drawCheck {
    0% {
      stroke-dashoffset: 100;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  .checkmark {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: drawCheck 0.6s ease-in-out forwards;
  }
`;

// Define Razorpay interface
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function DonatePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; message?: string } | null>(null);
  const [razorpayLoaded, setRazorpayLoaded] = useState(false);

  useEffect(() => {
    // Check if Razorpay is loaded
    if (window.Razorpay) {
      setRazorpayLoaded(true);
    }
  }, []);

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

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      console.log("Initializing Razorpay----------------");
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      // Initialize Razorpay if not already loaded
      if (!window.Razorpay) {
        await initializeRazorpay();
      }

      // Create donation through API
      const donationData = {
        name: formData.name,
        email: formData.email,
        amount: Number(formData.amount),
        description: formData.description
      };

      const response = await apiService.submitDonation(donationData);
      
      if (!response || !response.data || !response.data.razorpay) {
        throw new Error('Invalid response from server');
      }

      // Extract data from response
      const donation = response.data.donation;
      const razorpayData = response.data.razorpay;

      // Initialize Razorpay payment
      const options = {
        key: razorpayData.key || config.razorpay.keyId,
        amount: razorpayData.amount,
        currency: razorpayData.currency || 'INR',
        name: 'Finsbury Trust',
        description: 'Donation',
        order_id: razorpayData.orderId,
        handler: async function(response: any) {
          try {
            // Verify payment with backend
            const verificationData = {
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
              donationId: donation.id
            };
            
            await apiService.verifyDonationPayment(verificationData);
            
            setSubmitResult({
              success: true,
              message: 'Thank you for your donation! Your contribution will make a difference.'
            });
            
            // Reset form
            setFormData({
              name: '',
              email: '',
              amount: '',
              description: ''
            });
          } catch (error) {
            console.error('Error verifying payment:', error);
            setSubmitResult({
              success: false,
              message: error instanceof Error ? error.message : 'There was an error processing your payment verification. Please contact support.'
            });
          } finally {
            setIsSubmitting(false);
          }
        },
        modal: {
          ondismiss: function() {
            console.log('Checkout form closed');
            setIsSubmitting(false);
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email
        },
        theme: {
          color: "#2563EB"
        }
      };

      // Add this to handle the case where Razorpay isn't loaded properly
      if (!window.Razorpay) {
        throw new Error("Razorpay SDK failed to load. Please check your internet connection.");
      }

      const razorpay = new window.Razorpay(options);
      razorpay.on('payment.failed', function (response: any) {
        console.error('Payment failed:', response.error);
        setSubmitResult({
          success: false,
          message: `Payment failed: ${response.error.description}`
        });
        setIsSubmitting(false);
      });
      
      razorpay.open();
      
    } catch (error) {
      console.error('Error initiating donation:', error);
      setSubmitResult({
        success: false,
        message: error instanceof Error ? error.message : 'There was an error processing your donation. Please try again.'
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Add the style tag for the animation */}
      <style jsx>{checkmarkAnimation}</style>
      
      {/* Load Razorpay script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onLoad={() => setRazorpayLoaded(true)}
      />

      {/* Hero Section */}
      <div className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Your donation helps us continue our mission of creating positive change in communities around the world.
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
              <div className={`p-6 mb-6 rounded-md text-center ${
                submitResult.success ? 'bg-green-50' : 'bg-red-100 text-red-700'
              }`}>
                {submitResult.success ? (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-green-100 rounded-full">
                      <svg 
                        className="w-10 h-10 text-green-500" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="3" 
                          d="M5 13l4 4L19 7"
                          className="checkmark"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                    <p className="text-green-600">Your donation has been successfully processed.</p>
                    <p className="text-green-600 mt-1">Your contribution will make a difference.</p>
                  </div>
                ) : (
                  <div className="text-red-700">{submitResult.message}</div>
                )}
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                    required
                  />
                </div>
              </div>
              
              {/* Accepted Payment Methods */}
              <div className="mt-4">
                <p className="text-sm text-gray-600 mb-2">We accept:</p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700">Visa</div>
                  <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700">Mastercard</div>
                  <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700">RuPay</div>
                  <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700">UPI</div>
                  <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700">Google Pay</div>
                  <div className="bg-gray-100 rounded px-3 py-1 text-xs text-gray-700">PhonePe</div>
                </div>
              </div>
              
              {/* Additional Comments */}
              <div>
                <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Additional Comments (Optional)</label>
                <textarea 
                  id="comments"
                  value={formData.description}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
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
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : 'Complete Donation'}
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