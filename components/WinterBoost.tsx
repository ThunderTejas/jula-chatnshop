import React from 'react';
import { ArrowRightIcon } from './icons';

const WinterBoost: React.FC = () => {
  return (
    <section className="my-8 md:my-16">
      <h2 className="text-3xl font-extrabold mb-6 text-black">Winter boost car and garage!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Tire Change */}
        <a href="#" className="group">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="https://assets.cdn.jula.com/preset:jpgoptimized/w:1920/dmm3BWSV3/assetstream.aspx?assetid=161570&mediaformatid=50496&lastmodified=20241018142551" 
              alt="People changing a car tire in a garage" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="bg-[#d41f26] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-800 group-hover:underline">All for the tire change</span>
          </div>
        </a>

        {/* Card 2: Vehicle Lighting */}
        <a href="#" className="group">
          <div className="relative overflow-hidden rounded-lg">
            <img 
              src="https://assets.cdn.jula.com/preset:jpgoptimized/w:1920/dmm3BWSV3/assetstream.aspx?assetid=286551&mediaformatid=50496&lastmodified=20251029122230" 
              alt="Car with bright headlights driving at night" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" 
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 bg-[#d41f26] text-white rounded-full w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center shadow-lg">
              <span className="text-4xl sm:text-5xl font-bold">30%</span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <div className="bg-[#d41f26] rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-800 group-hover:underline">Vehicle lighting from Philips</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default WinterBoost;