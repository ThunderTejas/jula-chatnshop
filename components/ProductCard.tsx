import React, { useContext } from 'react';
import { StarIcon, CheckCircleIcon, StarOutlineIcon } from './icons';
import type { Product, Price } from '../data/products';
import { CartContext } from '../context/CartContext';


const renderPrice = (price: Price) => {
    switch (price.type) {
      case 'normal':
        return (
          <p className="text-3xl font-bold text-black">
            {price.value}
            {price.cents && <sup className="text-xl font-bold top-[-0.5em]">{price.cents}</sup>}
          </p>
        );
      case 'from':
        return (
          <p className="text-3xl font-bold text-black">
            <span className="text-xl font-normal align-top">From </span>
            {price.value}
            <sup className="text-xl font-bold top-[-0.5em]">{price.cents}</sup>
          </p>
        );
      case 'sale':
        return (
          <div className="text-left">
            <div className="bg-yellow-300 font-extrabold text-4xl text-black py-1 px-3 rounded-md inline-block mb-1 -skew-x-6">
              {price.current}
            </div>
            <div className="bg-[#d41f26] text-white text-xs font-bold p-1 rounded-sm inline-block -skew-x-6">
              {price.save}
            </div>
            <p className="text-sm text-black line-through mt-1">{price.original}</p>
          </div>
        );
      case 'julaClubSale':
        return (
            <div className="text-left">
              <div className="bg-[#a41e21] text-white font-extrabold text-4xl py-1 px-3 rounded-md inline-block mb-1 -skew-x-6 relative">
                <span className="absolute -top-3 left-1 text-xs font-bold normal-case">JulaClub</span>
                {price.current}
              </div>
              <div className="bg-[#d41f26] text-white text-xs font-bold p-1 rounded-sm inline-block -skew-x-6">
                {price.save}
              </div>
              <p className="text-sm text-black line-through mt-1">{price.original}</p>
            </div>
        );
    }
};

export const ProductCard: React.FC<{ product: Product, showAddToCart?: boolean }> = ({ product, showAddToCart = false }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white flex flex-col h-full group border rounded-lg overflow-hidden shadow-sm">
      <div className="relative mb-2 flex items-center justify-center aspect-square p-2">
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
        {product.badge && (
          <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded
            ${product.badge.type === 'red' ? 'bg-[#d41f26] text-white' : ''}
            ${product.badge.type === 'yellow' ? 'bg-yellow-300 text-black' : ''}
            ${product.badge.type === 'orange' ? 'bg-yellow-500 text-black' : ''}`}>
            {product.badge.text}
          </span>
        )}
      </div>
      <div className="flex-grow flex flex-col p-3">
          <h3 className="font-bold text-base text-black leading-tight flex-grow mb-1 min-h-[40px]">{product.name}</h3>
          <p className="text-sm text-black mb-1">{product.brand}</p>
          <div className="flex items-center text-xs text-black mb-2">
              <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    i < Math.floor(product.rating)
                      ? <StarIcon key={i} className="w-4 h-4 text-yellow-400" />
                      : <StarOutlineIcon key={i} className="w-4 h-4 text-gray-400" />
                  ))}
              </div>
              <span className="ml-1">({product.reviews})</span>
          </div>
          <div className="my-2 min-h-[85px]">
              {renderPrice(product.price)}
          </div>
          <ul className="text-sm space-y-0.5 mb-4 flex-grow list-disc list-inside text-black min-h-[60px]">
              {product.features.map(feature => (
              <li key={feature}>
                  <span>{feature}</span>
              </li>
              ))}
          </ul>
          <div className="text-xs space-y-1 mt-auto text-black">
              {product.infoSheet && (
                  <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center space-x-1">
                          <div className="bg-orange-500 text-white font-bold text-xs px-1.5 py-0.5 rounded-sm">{product.infoSheet.label}</div>
                          <div className="h-2.5 w-16 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-sm"></div>
                      </div>
                      <a href="#" className="underline hover:text-[#d41f26] text-black">Product sheet</a>
                  </div>
              )}
              {product.availability.online && (
                  <p className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" /> Available in stock online.</p>
              )}
              {product.availability.stores && (
                   <p className="flex items-center"><CheckCircleIcon className="w-4 h-4 text-green-600 mr-2" /> Available in {product.availability.storeCount} department stores</p>
              )}
              {product.availability.moreOptions && (
                  <p className="flex items-center text-black font-bold">
                    <span className="flex items-center justify-center w-4 h-4 rounded-full bg-black text-white text-xs font-bold mr-2 flex-shrink-0">&gt;</span>
                    {product.availability.moreOptionsText}
                  </p>
              )}
              {(product.availability.stores || !product.availability.moreOptions) && <a href="#" className="underline hover:text-[#d41f26] ml-6 text-black">Select department store</a>}
          </div>
          {showAddToCart && (
            <button 
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-[#d41f26] text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
            >
              Add to Cart
            </button>
          )}
      </div>
    </div>
  );
};
