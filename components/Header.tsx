import React from 'react';
import { CheckIcon, StarIcon, SearchIcon, UserIcon, DocumentIcon, CartIcon, StarOutlineIcon, HomeIcon } from './icons';

const JulaLogo = ({ className }: { className?: string }) => (
    <svg 
        className={className} 
        viewBox="0 0 258 90" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Jula Logo"
    >
        <path d="M25.8 1.5H232.2C245.3 1.5 256 12.2 256 25.3V64.7C256 77.8 245.3 88.5 232.2 88.5H25.8C12.7 88.5 2 77.8 2 64.7V25.3C2 12.2 12.7 1.5 25.8 1.5Z" fill="#fff" stroke="#d41f26" strokeWidth="3"></path>
        <g fill="#d41f26" transform="translate(25, 12) scale(1)">
            <path d="M37.8,22.2c-1.5-1.2-3.6-1.9-6.1-1.9c-5.1,0-9.1,2.9-9.1,7.8c0,3.2,1.9,5.8,5,7.2L22.9,54h6.9l5.1-8.3c1.2,0.2,2.5,0.4,3.9,0.4c4,0,7.3-1,9.8-2.8c3.1-2.3,4.7-5.9,4.7-10.2C52.3,27,47,22.2,37.8,22.2z M35.3,25.7c2.9,0,5.1,1.7,5.1,4.7c0,3.1-2.1,4.8-5.2,4.8c-1,0-1.9-0.1-2.7-0.4V26C33.5,25.8,34.4,25.7,35.3,25.7z"/>
            <path d="M63.4,20.2h6.3v29.8h-6.3V20.2z"/>
            <path d="M93.7,20.2h-6.8L75.5,50h6.7l2-5.5h10.3l2,5.5h6.7L93.7,20.2z M87.8,40.3l3-8.4l3,8.4H87.8z"/>
            <path d="M129.8,20.2h6.3V38l10.9-17.8h7.2l-11.5,20.5l12.3,9.3h-7.3l-11.6-8.8v8.8h-6.3V20.2z"/>
        </g>
        <text x="222" y="34" fontFamily="Arial, sans-serif" fontSize="18" fill="#000">®</text>
        <path d="M25.8 1.5H232.2C245.3 1.5 256 12.2 256 25.3V64.7C256 77.8 245.3 88.5 232.2 88.5H25.8C12.7 88.5 2 77.8 2 64.7V25.3C2 12.2 12.7 1.5 25.8 1.5Z" fill="none" stroke="#000" strokeWidth="1"></path>
    </svg>
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
                    <JulaLogo className="h-12 w-auto" />
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