import React from 'react';

interface CheckoutProps {
  onNavigate: (page: string) => void;
}

const Checkout: React.FC<CheckoutProps> = ({ onNavigate }) => {
  return (
    <main className="max-w-screen-2xl mx-auto p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-10 rounded-lg shadow-md text-center">
        <div className="flex justify-center mb-4">
            <svg className="w-16 h-16 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <h1 className="text-4xl font-extrabold text-black mb-4">Thank You for Your Purchase!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your order has been placed successfully. We've sent a confirmation email to your address.
        </p>
        <button
          onClick={() => onNavigate('home')}
          className="bg-[#d41f26] text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition-colors text-lg"
        >
          Continue Shopping
        </button>
      </div>
    </main>
  );
};

export default Checkout;
