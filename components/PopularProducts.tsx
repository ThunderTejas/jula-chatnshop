import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import { ProductCard } from './ProductCard';
import { allProducts } from '../data/products';
import type { Product } from '../data/products';

const popularProductIds = [12, 13, 14, 4, 1];
const baseProducts = allProducts.filter(p => popularProductIds.includes(p.id));

// To create a seamless loop, we can duplicate the first item
const productsData = [...baseProducts];
const firstProduct = allProducts.find(p => p.id === 12);
if (firstProduct) {
    productsData.push({ ...firstProduct, id: 15 }); // use a new id for the key
}


const PopularProducts: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

  return (
    <section className="my-8 md:my-16 relative group">
      <h2 className="text-3xl font-extrabold mb-6 text-black">Popular right now!</h2>
      <div className="absolute top-1/2 -translate-y-1/2 -left-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => scroll('left')} className="bg-[#d41f26] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700">
              <ChevronLeftIcon className="w-6 h-6" />
          </button>
      </div>
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-6 py-4 scrollbar-hide"
      >
        {productsData.map((product, index) => (
          <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[calc(100%/2.2)] sm:w-[calc(100%/3.2)] md:w-[calc(100%/4.2)] lg:w-[calc(100%/5.2)]">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
       <div className="absolute top-1/2 -translate-y-1/2 -right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => scroll('right')} className="bg-[#d41f26] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700">
              <ChevronRightIcon className="w-6 h-6" />
          </button>
      </div>
    </section>
  );
};

export default PopularProducts;