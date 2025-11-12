import React from 'react';

const categories = [
  { name: 'Tools and Machines', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=250793&lastmodified=20241112120003' },
  { name: 'Build and Color', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=250788&lastmodified=20241112120111' },
  { name: 'Electricity and Lighting', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=250789&lastmodified=20241112120146' },
  { name: 'Clothing and Protection', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=250786&lastmodified=20241112120217' },
  { name: 'Garden', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=195827&lastmodified=20241031001806' },
  { name: 'Leisure', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=187682&lastmodified=20241031134452' },
  { name: 'Car and Garage', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=201474&lastmodified=20241031001807' },
  { name: 'Home and Household', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=250791&lastmodified=20241112124627' },
  { name: 'Christmas', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=195826&lastmodified=20241030191308' },
  { name: 'Spare parts', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=232976&lastmodified=20241030191308' },
  { name: 'Outlet', image: 'https://assets.cdn.jula.com/w:96/dmm3BWSV3/assetstream.aspx?assetid=187676&lastmodified=20241030191308' },
];

const CategoryBrowser: React.FC = () => {
  return (
    <section className="my-8 md:my-12">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-4 text-center">
        {categories.map(category => (
          <a href="#" key={category.name} className="flex flex-col items-center justify-start p-2 rounded-lg hover:bg-gray-100 transition-colors group">
            <img src={category.image} alt={category.name} className="h-12 w-12 object-contain mb-2 grayscale group-hover:grayscale-0 transition-all" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">{category.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CategoryBrowser;