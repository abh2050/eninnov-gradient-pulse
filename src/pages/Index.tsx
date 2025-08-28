import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import OurValuesSection from '@/components/OurValuesSection';
import WhoWeServeSection from '@/components/WhoWeServeSection';
import ClosingSection from '@/components/ClosingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Navigation />
      <HeroSection />
      <WhoWeAreSection />
      <WhatWeDoSection />
      <OurValuesSection />
      <WhoWeServeSection />
      <ClosingSection />
      <Footer />
    </div>
  );
};

export default Index;
