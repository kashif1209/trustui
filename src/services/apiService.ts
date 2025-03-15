import { config } from '../config/environment';

class ApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.apiUrl;
  }

  async submitDonation(donationData: any) {
    try {
      const response = await fetch(`${this.baseUrl}/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(donationData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to process donation');
      }

      return await response.json();
    } catch (error) {
      console.error('Error submitting donation:', error);
      throw error;
    }
  }

  // New method to create a Razorpay order
  async createDonationOrder(orderData: any) {
    try {
      const response = await fetch(`${this.baseUrl}/donations`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create payment order');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating payment order:', error);
      throw error;
    }
  }

  // New method to verify Razorpay payment
  async verifyDonationPayment(paymentData: any) {
    try {
      const response = await fetch(`${this.baseUrl}/donations/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to verify payment');
      }

      return await response.json();
    } catch (error) {
      console.error('Error verifying payment:', error);
      throw error;
    }
  }

  // Add other API methods as needed
}

export default new ApiService(); 