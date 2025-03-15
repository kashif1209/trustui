// Base configuration for all environments
const baseConfig = {
  apiUrl: 'http://localhost:3000/dev/api/v1',
  razorpay: {
    keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
  }
};

// Environment-specific configurations
const environments = {
  development: {
    ...baseConfig,
    apiUrl: 'https://stlogj8nj7.execute-api.us-east-1.amazonaws.com/dev/api/v1',
    razorpay: {
      ...baseConfig.razorpay,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_yourtestkeyhere',
    }
  },
  qa: {
    ...baseConfig,
    apiUrl: 'http://localhost:3000/qa/api',
  },
  production: {
    ...baseConfig,
    apiUrl: 'http://localhost:3000/api', // or your production domain
  },
};

// Determine current environment
const getEnvironment = () => {
  // Use NEXT_PUBLIC_DEPLOY_ENV to determine which config to use
  // This is separate from NODE_ENV which should remain standard
  const deployEnv = process.env.NEXT_PUBLIC_DEPLOY_ENV;
  
  if (deployEnv === 'qa') return 'qa';
  if (deployEnv === 'production') return 'production';
  
  // Default to development
  return 'development';
};

// Export the configuration for the current environment
const currentEnv = getEnvironment();
console.log(`Running with ${currentEnv} configuration`);

export const config = environments[currentEnv]; 