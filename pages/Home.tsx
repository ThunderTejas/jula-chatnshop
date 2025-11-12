import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoryBrowser from '../components/CategoryBrowser';
import BikeCarousel from '../components/BikeCarousel';
import PopularProducts from '../components/PopularProducts';
import JulaClubClip from '../components/JulaClubClip';
import WinterBoost from '../components/WinterBoost';
import InspirationSection from '../components/InspirationSection';
import AimHigher from '../components/AimHigher';
import TrainingCarousel from '../components/TrainingCarousel';
import FishingCarousel from '../components/FishingCarousel';
import OfficeCarousel from '../components/OfficeCarousel';

const Home: React.FC = () => {
  return (
    <main className="max-w-screen-2xl mx-auto p-2 sm:p-4 lg:p-6">
      <HeroSection />
      <CategoryBrowser />
      <PopularProducts />
      <BikeCarousel />
      <JulaClubClip />
      <WinterBoost />
      <InspirationSection />
      <AimHigher />
      <TrainingCarousel />
      <FishingCarousel />
      <OfficeCarousel />
    </main>
  );
};

export default Home;