// This file simulates process.env for the browser environment.
// In a real production application, these keys would be managed
// through a more secure system like environment variables set during a build process.

export const process = {
  env: {
    // Get your API key from: https://aistudio.google.com/apikey
    // Replace 'YOUR_API_KEY_HERE' with your actual Gemini API key
    API_KEY: 'AIzaSyBcQxmCBAuJRhnAVT4mGg6u6r-0TV5Scdo', // Example: 'AIzaSyC...'
  }
};
