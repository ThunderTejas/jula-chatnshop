import React from 'react';
import { ArrowRightIcon } from './icons';

const AimHigher: React.FC = () => {
  const links = [
    'Exercise machines',
    'Training equipment',
    'Build your own home gym'
  ];

  return (
    <section className="my-8 md:my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <div>
          <img
            src="https://assets.cdn.jula.com/preset:jpgoptimized/w:3840/dmm3BWSV3/assetstream.aspx?assetid=175405&mediaformatid=50496&lastmodified=20240206151739"
            alt="A person exercising at home with a child on their shoulders"
            className="rounded-lg w-full h-auto object-cover"
          />
        </div>

        {/* Text Column */}
        <div className="pl-0 md:pl-8">
          <h2 className="text-4xl font-extrabold mb-4 text-black">Aim higher!</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Get faster, smoother and stronger with our carefully selected training range! Nothing can stop you now!
          </p>
          <ul className="space-y-4">
            {links.map((link, index) => (
              <li key={index}>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="bg-[#d41f26] rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0">
                    <ArrowRightIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-gray-800 text-lg group-hover:underline">{link}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AimHigher;