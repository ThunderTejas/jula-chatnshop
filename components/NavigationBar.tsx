import React from 'react';
import { ChevronDownIcon, StoreIcon } from './icons';

const NavigationBar: React.FC = () => {
  const navItems = ["Inspiration", "News", "Brands", "Offers", "Smart Choice", "Christmas lowest price!"];
  
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center space-x-8">
          <a href="#" className="flex items-center font-bold text-gray-800 hover:text-[#d41f26]">
            <span>Products</span>
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </a>
          <ul className="hidden lg:flex items-center space-x-8 font-bold text-gray-800">
            {navItems.map(item => (
              <li key={item}>
                <a href="#" className="hover:text-[#d41f26] transition-colors">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-6 font-bold text-gray-800">
          <a href="#" className="hidden md:block hover:text-[#d41f26] transition-colors">Customer Service</a>
          <a href="#" className="flex items-center hover:text-[#d41f26] transition-colors">
            <StoreIcon className="w-5 h-5 mr-2" />
            <span>Select department store</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;