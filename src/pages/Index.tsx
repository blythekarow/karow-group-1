import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";

import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import AssessmentSection from "@/components/AssessmentSection";
import FounderSection from "@/components/FounderSection";

import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as any)?.scrollTo;
    if (scrollTo) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      // Clear the state so it doesn't re-scroll on re-renders
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);
  usePageSEO({
    title: "The Karow Advisory Group | MedTech Strategy & Commercialization",
    description: "Strategic advisory for medical technology companies. We help MedTech leaders accelerate commercialization, navigate regulatory pathways, and drive sustainable growth.",
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Trusted By / Logo Carousel */}
      <LogoCarousel />
      {/* 3. The Problem */}
      <ProblemSection />
      {/* 4. Benefits - The Right Strategy */}
      <BenefitsSection />
      {/* 5. The Solution */}
      <SolutionSection />
      {/* 5. 3-Step Process */}
      <ProcessSection />
      {/* 6. Testimonials */}
      <TestimonialsSection />
      {/* 7. Services Overview */}
      <ServicesSection />
      {/* 8. Free Assessment CTA (D.E.V.I.C.E.) */}
      <AssessmentSection />
      {/* 10. Founder Story */}
      <FounderSection />
      {/* 12. Final CTA */}
      <FinalCTASection />
      {/* 13. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
