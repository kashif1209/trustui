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

  // Add other API methods as needed
}

export default new ApiService(); 