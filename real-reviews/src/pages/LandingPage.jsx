import React from 'react';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import WhatIsSection from '@/components/WhatIsSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Ingredients from '@/components/Ingredients';
import ProofSection from '@/components/ProofSection';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Pricing from '@/components/Pricing';

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <WhatIsSection />
      <HowItWorks />
      <div id="pricing">
        <Pricing />
      </div>
      <Benefits />
      <Ingredients />
      <ProofSection />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default LandingPage;