// This file simulates process.env for the browser environment.
// In a real production application, these keys would be managed
// through a more secure system like environment variables set during a build process.

export const process = {
  env: {
    API_KEY: 'YOUR_API_KEY_HERE', // Replace with your actual Google Gemini API Key
  }
};
