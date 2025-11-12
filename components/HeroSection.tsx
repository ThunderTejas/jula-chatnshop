import React, { useRef, useState } from 'react';
import { PauseIcon, PlayIcon } from './icons';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[550px]">
      {/* Main Video Section */}
      <div className="lg:col-span-2 relative h-[400px] lg:h-full rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          src="https://assets.cdn.jula.com/dmm3BWSV3/assetstream.aspx?assetid=251086&lastmodified=20251106075125"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <button className="bg-white text-gray-800 font-bold py-2 px-5 rounded-full hover:bg-gray-200 transition-transform hover:scale-105 shadow-md text-sm flex items-center gap-2">
            <span>Welcome to Christmas at Jula!</span>
            <span className="text-lg" role="img" aria-label="sparkles">✨</span>
          </button>
          <button className="bg-white text-gray-800 font-bold py-2 px-5 rounded-full hover:bg-gray-200 transition-transform hover:scale-105 shadow-md text-sm">
            See all current offers
          </button>
        </div>
        <button 
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm text-gray-800 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white transition-transform hover:scale-110 shadow-md">
          {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Side Banners */}
      <div className="col-span-1 flex flex-col gap-6 h-auto lg:h-full">
        {/* Top Banner */}
        <div className="relative rounded-lg overflow-hidden flex-grow">
          <img
            src="https://assets.cdn.jula.com/preset:jpgoptimized/w:1080/dmm3BWSV3/assetstream.aspx?assetid=284254&mediaformatid=50496&lastmodified=20251007141500"
            alt="Jula campaign magazine cover"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-lime-400 text-lime-900 text-xs font-bold px-3 py-1 rounded-full transform rotate-12">NY KAMPANJ!</span>
        </div>

        {/* Bottom Banner */}
        <a href="#" className="relative rounded-lg overflow-hidden flex-grow group border border-black">
          <img
            src="https://assets.cdn.jula.com/preset:jpgoptimized/w:1080/dmm3BWSV3/assetstream.aspx?assetid=282104&mediaformatid=50496&lastmodified=20250916075624"
            alt="Light up the garden with string lights"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          
          <div className="absolute top-4 right-4 bg-[#d41f26] text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center p-1 shadow-lg">
            <span className="text-xs font-semibold leading-tight">From</span>
            <span className="text-2xl font-bold leading-tight">SEK 10</span>
          </div>

          <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-gray-900 font-bold py-2 px-4 rounded-full shadow-md text-sm">
            <span>Light up the garden with string lights</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;