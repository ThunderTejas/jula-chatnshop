import React from 'react';
import { FacebookIcon, InstagramIcon, YouTubeIcon } from './icons';
import julaLogo from '../assets/jula-logo.png';

const JulaLogo = ({ className }: { className?: string }) => (
    <img 
        src={julaLogo} 
        alt="Jula Logo" 
        className={className}
    />
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