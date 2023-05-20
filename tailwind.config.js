/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      brand: {
        50: '#EAF2FF', // Lighter shade
        100: '#D4E4FF',
        200: '#A9C9FF',
        300: '#7EAEFF',
        400: '#5392FF',
        500: '#3F75FF', // Original color
        600: '#2A58FF',
        700: '#153CFF',
        800: '#0020FF',
        900: '#0004FF' // Darker shade
      },
      secondary: {
        50: '#FDF2F8',
        500: '#16213D'
      },
      stroke: {
        light: '#e4e6f1',
        dark: '#c6c6c6'
      },
      gray: {
        0: '#FFFFFF',
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827'
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
};
