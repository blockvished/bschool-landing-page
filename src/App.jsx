import React from "react";
import HeroSection from "./components/HeroSection";
import LearnFromBestSection from "./components/LearnFromBestSection";
import MediaFeaturesSection from "./components/MediaFeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection.jsx";
import FaqIntroSection from "./components/FaqIntroSection.jsx";
import FaqSection from "./components/FaqSection.jsx";
import FooterFormSection from "./components/FooterFormSection.jsx";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-white text-gray-900">
      <HeroSection />
      <LearnFromBestSection />
      <MediaFeaturesSection />
      <TestimonialsSection />
      <FaqIntroSection />
      <FaqSection />
      <FooterFormSection />
      <Footer />
    </div>
  );
};

export default App;
