import React from 'react';
import { CheckIcon, StarIcon, SearchIcon, UserIcon, DocumentIcon, CartIcon, StarOutlineIcon, HomeIcon } from './icons';
import julaLogo from '../assets/jula-logo.png';

const JulaLogo = ({ className }: { className?: string }) => (
    <img 
        src={julaLogo} 
        alt="Jula Logo" 
        className={className}
    />
);


interface HeaderProps {
  onNavigate: (page: string) => void;
  cartCount: number;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, cartCount, currentPage }) => {
  if (currentPage === 'chat') {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between h-20">
                <div className="flex-1 flex justify-start">
                    <button onClick={() => onNavigate('home')} className="hover:opacity-80 transition-opacity" aria-label="Go to home page">
                        <JulaLogo className="h-12 w-auto" />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800">Chat &amp; Shop</h1>
                        <p className="text-sm text-gray-500">Ask me to find products for you!</p>
                    </div>
                </div>
                <div className="flex-1 flex items-center justify-end space-x-4">
                    <button onClick={() => onNavigate('cart')} className="text-gray-700 hover:text-[#d41f26] relative" aria-label="View Cart">
                        <CartIcon className="w-8 h-8" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#d41f26] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {cartCount}
                            </span>
                        )}
                    </button>
                    <button 
                      onClick={() => onNavigate('home')} 
                      className="text-gray-700 hover:text-[#d41f26]"
                      aria-label="Return to homepage"
                    >
                        <HomeIcon className="w-8 h-8" />
                    </button>
                </div>
            </div>
        </header>
    );
  }
  
  if (currentPage === 'cart' || currentPage === 'checkout') {
      return (
        <header className="bg-white shadow-sm sticky top-0 z-40">
            <div className="max-w-screen-2xl mx-auto px-4 py-3 flex items-center justify-between h-20">
                 <button onClick={() => onNavigate('home')} className="flex-shrink-0">
                    <JulaLogo className="h-12 w-auto" />
                 </button>
            </div>
        </header>
      )
  }

  return (
    <>
      {/* Top Banner */}
      <div className="bg-[#d41f26] text-white">
        <div className="max-w-screen-2xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center text-sm font-bold gap-4">
          
          {/* Perks Section */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 items-center">
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              <span>Pick up in department store after 2 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              <span>Always free shipping to department stores</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckIcon className="w-4 h-4" />
              <span>Free shipping to agents from NOK 999</span>
            </div>
          </div>
          
          <div className="flex items-center gap-x-6">
            {/* Links Section */}
            <div className="hidden lg:flex flex-col items-end text-xs">
              <div className="flex space-x-4">
                  <a href="#" className="underline hover:no-underline font-semibold text-white">JulaClub</a>
                  <a href="#" className="underline hover:no-underline font-semibold text-white">JulaPro</a>
              </div>
              <a href="#" className="underline hover:no-underline font-semibold text-white">Gift card</a>
            </div>

            {/* Rating Section */}
            <div className="bg-white text-black px-4 py-1.5 rounded-full flex items-center space-x-1 shadow-md">
              <StarIcon className="w-5 h-5 text-black" />
              <StarIcon className="w-5 h-5 text-black" />
              <StarIcon className="w-5 h-5 text-black" />
              <StarIcon className="w-5 h-5 text-black" />
              <StarOutlineIcon className="w-5 h-5 text-black" />
              <span className="ml-2 text-sm font-bold whitespace-nowrap">4.4 (1,600,000+)</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-screen-2xl mx-auto px-4 py-5 flex flex-wrap justify-between items-center gap-4">
          <button onClick={() => onNavigate('home')} className="flex-shrink-0">
            <JulaLogo className="h-16 w-auto" />
          </button>
          
          <div className="flex-grow w-full md:w-auto order-3 md:order-2 flex items-stretch gap-2">
            <div className="flex-grow flex items-center border border-black rounded-md overflow-hidden">
              <input 
                type="text" 
                placeholder="Hey! What are you looking for today?" 
                className="w-full py-3 px-4 text-black placeholder-black focus:outline-none text-lg bg-white"
              />
              <button className="bg-[#d41f26] text-white p-4 hover:bg-red-700 transition-colors h-full">
                <SearchIcon className="w-6 h-6" />
              </button>
            </div>
            <button 
              onClick={() => onNavigate('chat')}
              className="bg-gray-800 text-white font-bold px-4 rounded-md hover:bg-black transition-colors text-sm whitespace-nowrap"
            >
              Chat &amp; Shop
            </button>
          </div>
          <div className="flex items-center space-x-6 order-2 md:order-3">
            <button className="text-gray-700 hover:text-[#d41f26]">
              <UserIcon className="w-8 h-8" />
            </button>
            <button className="text-gray-700 hover:text-[#d41f26]">
              <DocumentIcon className="w-8 h-8" />
            </button>
            <button onClick={() => onNavigate('cart')} className="text-gray-700 hover:text-[#d41f26] relative">
              <CartIcon className="w-8 h-8" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#d41f26] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;