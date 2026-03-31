import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ScrollShowcase from "@/components/ScrollShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import LocationSection from "@/components/LocationSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onComplete={handleLoaded} />}
      {loaded && (
        <main>
          <Navbar />
          <HeroSection />
          <div className="section-divider" />
          <AboutSection />
          <ProductsSection />
          <div className="section-divider" />
          <WhyChooseSection />
          <ScrollShowcase />
          <TestimonialsSection />
          <StatsSection />
          <LocationSection />
          <div className="section-divider" />
          <CTASection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
