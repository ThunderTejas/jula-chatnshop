import React from 'react';
import { PauseIcon } from './icons';

const JulaClubClip: React.FC = () => {
  return (
    <section className="my-8 md:my-16 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_0.5fr] min-h-[350px]">
        {/* Left Panel: Text */}
        <div className="bg-[#d41f26] text-white p-8 sm:p-12 flex flex-col justify-between">
          <div>
            <span className="block text-4xl font-serif -rotate-6 transform origin-bottom-left mb-2" style={{ fontFamily: "'Brush Script MT', cursive" }}>Veckans</span>
            <h2 className="text-6xl sm:text-7xl font-extrabold leading-tight">JulaClub-klipp</h2>
          </div>
          <a href="#" className="bg-white text-black font-bold py-3 px-6 rounded-full self-start hover:bg-gray-200 transition-transform hover:scale-105 shadow-md mt-6">
            Discover all the JulaClub offers of the week!
          </a>
        </div>

        {/* Middle Panel: Image */}
        <div className="relative flex items-center justify-center p-8 order-first md:order-none min-h-[300px]">
          <img
            src="https://assets.cdn.jula.com/w:828/DigizuiteCore/LegacyService/api/assetstream/182698/50137?lastmodified=20250516104416"
            alt="JulaClub featured product: work boots"
            className="max-h-[250px] w-auto object-contain"
          />
           <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-sm p-3 rounded-lg shadow-lg text-center border border-gray-200">
             <p className="text-gray-500 text-xs font-bold">JulaClub</p>
             <p className="text-black text-4xl font-extrabold my-1">399:-</p>
             <p className="text-red-600 text-sm font-bold bg-white px-2 py-0.5 rounded">Save 300.-</p>
           </div>
        </div>

        {/* Right Panel: Pause Button */}
        <div className="bg-[#d41f26] flex items-center justify-center py-4 md:py-0">
          <button 
            aria-label="Pause"
            className="bg-white/90 backdrop-blur-sm text-gray-800 w-14 h-14 rounded-full flex items-center justify-center hover:bg-white transition-transform hover:scale-110 shadow-md">
            <PauseIcon className="w-7 h-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default JulaClubClip;
