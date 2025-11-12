import React from 'react';
import { ArrowRightIcon } from './icons';

const inspirationData = [
  {
    image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:828/dmm3BWSV3/assetstream.aspx?assetid=157193&mediaformatid=50496&lastmodified=20250422062415',
    text: 'Which jack should I buy?',
  },
  {
    image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:828/dmm3BWSV3/assetstream.aspx?assetid=156708&mediaformatid=50496&lastmodified=20250425175038',
    text: 'Storage and storage for the garden',
  },
  {
    image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:828/dmm3BWSV3/assetstream.aspx?assetid=197554&mediaformatid=50496&lastmodified=20251109234706',
    text: 'Visible in the dark with reflexes',
  },
  {
    image: 'https://assets.cdn.jula.com/preset:jpgoptimized/w:828/dmm3BWSV3/assetstream.aspx?assetid=282545&mediaformatid=50496&lastmodified=20251015064752',
    text: 'Novelty! Warning clothes at prices that are barely visible!',
    badge: 'Nyheter',
  },
];

const InspirationCard: React.FC<{ item: typeof inspirationData[0] }> = ({ item }) => (
  <a href="#" className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={item.image} alt={item.text} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      {item.badge && (
        <span className="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-md">{item.badge}</span>
      )}
    </div>
    <div className="bg-[#d41f26] text-white p-4 flex items-center justify-between min-h-[80px]">
      <p className="font-semibold text-sm leading-tight pr-2">{item.text}</p>
      <div className="bg-white rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center">
        <ArrowRightIcon className="w-5 h-5 text-black" />
      </div>
    </div>
  </a>
);

const InspirationSection: React.FC = () => {
  return (
    <section className="my-8 md:my-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {inspirationData.map((item, index) => (
          <InspirationCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default InspirationSection;