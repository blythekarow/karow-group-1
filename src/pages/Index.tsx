import { useEffect, useMemo } from "react";
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
      setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "The Karow Advisory Group",
    "url": "https://thekarowgroup.com",
    "logo": "https://thekarowgroup.com/favicon.png",
    "description": "Strategic advisory for medical technology companies. We help MedTech leaders accelerate commercialization, navigate regulatory pathways, and drive sustainable growth.",
    "founder": {
      "@type": "Person",
      "name": "Blythe Karow",
      "jobTitle": "Founder & CEO"
    },
    "sameAs": [],
    "serviceType": ["MedTech Strategy Consulting", "Commercialization Advisory", "Regulatory Strategy", "Market Access Planning"]
  }), []);

  usePageSEO({
    title: "The Karow Advisory Group | MedTech Strategy & Commercialization",
    description: "Strategic advisory for medical technology companies. We help MedTech leaders accelerate commercialization, navigate regulatory pathways, and drive sustainable growth.",
    jsonLd,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <ProblemSection />
      <BenefitsSection />
      <SolutionSection />
      <ProcessSection />
      <TestimonialsSection />
      <ServicesSection />
      <AssessmentSection />
      <FounderSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
