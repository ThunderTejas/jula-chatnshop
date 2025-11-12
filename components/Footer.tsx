import React from 'react';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './icons';

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

const FooterLinkColumn: React.FC<{ title: string; links: { text: string; href: string }[] }> = ({ title, links }) => (
  <div>
    <h3 className="font-bold text-white mb-4 text-lg">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.text}>
          <a href={link.href} className="text-white hover:text-white/80 underline text-base">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer: React.FC = () => {
  const shopLinks = [
    { text: 'Department stores and opening hours', href: '#' },
    { text: 'Customer Service', href: '#' },
    { text: 'Size guide', href: '#' },
    { text: 'Recalled products', href: '#' },
    { text: 'Availability', href: '#' },
  ];
  const aboutLinks = [
    { text: 'The Company Jula', href: '#' },
    { text: 'Jula\'s own brands', href: '#' },
    { text: 'Sustainability and Responsibility', href: '#' },
    { text: 'Work at Jula', href: '#' },
  ];
  const clubsLinks = [
    { text: 'About JulaClub', href: '#' },
    { text: 'Become a JulaClub member', href: '#' },
    { text: 'JulaClub Deals', href: '#' },
    { text: 'About JulaPro – for companies and associations', href: '#' },
    { text: 'Become a JulaPro Customer', href: '#' },
  ];

  return (
    <footer className="bg-[#d41f26] text-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 pt-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 text-base">
            <JulaLogo className="h-16 w-auto mb-4 bg-white p-1 rounded-lg border-2 border-black" />
            <p>At Jula you will find products for home, garden and leisure at low prices. Nothing can stop you from simplifying your everyday life and creating an active and fun life!</p>
            <p>Jula Sweden AB, Box 363, 53224 Skara<br/>Org. no. 556944-7856 VAT. no. SE556944785601</p>
          </div>
          <FooterLinkColumn title="Shop at Jula" links={shopLinks} />
          <FooterLinkColumn title="About Jula" links={aboutLinks} />
          <FooterLinkColumn title="Our customer clubs" links={clubsLinks} />
        </div>

        {/* Middle Section */}
        <div className="border-t border-red-500/50 mt-10 py-10 flex justify-center">
          <div>
            <h3 className="font-bold text-white mb-4 text-center lg:text-left text-lg">Download our app</h3>
            <div className="flex items-center gap-4">
              <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" className="h-12" /></a>
              <a href="#"><img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" className="h-[68px]" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#222] text-white/80">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-base">
          <div className="text-center md:text-left">
            <p>&copy; 2025 Jula AB</p>
            <p>https://www.jula.se</p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <a href="#" className="hover:text-white underline">Cookie settings</a>
            <a href="#" className="hover:text-white underline">About cookies</a>
            <a href="#" className="hover:text-white underline">Privacy Policy</a>
            <a href="#" className="hover:text-white underline">General purchase conditions</a>
            <a href="#" className="hover:text-white underline">Terms of Use</a>
            <a href="#" className="hover:text-white underline">Review Policy</a>
            <a href="#" className="hover:text-white underline">Part of Jula Holding</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook"><FacebookIcon className="w-6 h-6 hover:text-white" /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon className="w-6 h-6 hover:text-white" /></a>
            <a href="#" aria-label="YouTube"><YouTubeIcon className="w-6 h-6 hover:text-white" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;