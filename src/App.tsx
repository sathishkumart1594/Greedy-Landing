import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebsiteCheckupModal from "./components/WebsiteCheckupModal";

import HeroSection from "./sections/HeroSection";
import LogoSection from "./sections/logoSection";
import AgencySection from "./sections/AgencySection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import StatsSection from "./sections/StatsSection";
import WhatWeDoSection from "./sections/WhatWeDoSection";
import ProvenStrategySection from "./sections/ProvenStrategySection";
import StrategySection from "./sections/StrategySection";
import TestimonialsSection from "./sections/TestimonialsSection";
import NewsletterSection from "./sections/NewsletterSection";

function App() {
  const [isCheckupOpen, setIsCheckupOpen] = useState(false);

  return (
    <>
      <Navbar onOpenCheckup={() => setIsCheckupOpen(true)} />

      <main>
        <HeroSection />
        <LogoSection />
        <AgencySection />
        <WhyChooseUsSection />
        <StatsSection />
        <WhatWeDoSection />
        <ProvenStrategySection />
        <StrategySection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>

      <Footer />

      <WebsiteCheckupModal
        isOpen={isCheckupOpen}
        onClose={() => setIsCheckupOpen(false)}
      />
    </>
  );
}

export default App;