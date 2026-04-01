import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrushDivider from "@/components/BrushDivider";
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
          <AboutSection />
          <div className="section-divider opacity-50" />
          <ProductsSection />
          <div className="section-divider opacity-50" />
          <WhyChooseSection />
          <div className="section-divider opacity-50" />
          <ScrollShowcase />
          <div className="section-divider opacity-50" />
          <TestimonialsSection />
          <div className="section-divider opacity-50" />
          <StatsSection />
          <div className="container mx-auto px-4"><div className="section-divider opacity-50" /></div>
          <LocationSection />
          <CTASection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
