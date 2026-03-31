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
          <BrushDivider from="background" to="light-bg" />
          <AboutSection />
          <BrushDivider from="light-bg" to="charcoal-start" flip />
          <ProductsSection />
          <BrushDivider from="charcoal-end" to="light-bg-alt" />
          <WhyChooseSection />
          <BrushDivider from="light-bg-alt" to="background" flip />
          <ScrollShowcase />
          <BrushDivider from="background" to="light-bg" />
          <TestimonialsSection />
          <BrushDivider from="light-bg" to="charcoal-start" flip />
          <StatsSection />
          <BrushDivider from="charcoal-end" to="light-bg-alt" />
          <LocationSection />
          <BrushDivider from="light-bg-alt" to="background" flip />
          <CTASection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
