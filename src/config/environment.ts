// Base configuration for all environments
const baseConfig = {
  apiUrl: 'http://localhost:3000/dev/api',
};

// Environment-specific configurations
const environments = {
  development: {
    ...baseConfig,
    apiUrl: 'https://stlogj8nj7.execute-api.us-east-1.amazonaws.com/dev/api/v1',
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
  // Use NEXT_PUBLIC_APP_ENV if defined, otherwise fallback based on NODE_ENV
  const appEnv = process.env.NEXT_PUBLIC_APP_ENV || process.env.NODE_ENV;
  
  switch (appEnv) {
    case 'production':
      return 'production';
    case 'qa':
      return 'qa';
    default:
      return 'development';
  }
};

// Export the configuration for the current environment
const currentEnv = getEnvironment();
console.log(`Running in ${currentEnv} environment`);

export const config = environments[currentEnv]; 