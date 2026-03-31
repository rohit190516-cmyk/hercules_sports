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
          <BrushDivider from="dark" to="light" />
          <AboutSection />
          <BrushDivider from="light" to="dark" flip />
          <ProductsSection />
          <BrushDivider from="dark" to="light" />
          <WhyChooseSection />
          <BrushDivider from="light" to="dark" flip />
          <ScrollShowcase />
          <BrushDivider from="dark" to="light" />
          <TestimonialsSection />
          <BrushDivider from="light" to="dark" flip />
          <StatsSection />
          <BrushDivider from="dark" to="light" />
          <LocationSection />
          <BrushDivider from="light" to="dark" flip />
          <CTASection />
          <Footer />
        </main>
      )}
    </>
  );
};

export default Index;
