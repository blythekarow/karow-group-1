import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceAreas from "@/components/services/ServiceAreas";
import SpecialtyCapabilities from "@/components/services/SpecialtyCapabilities";
import SimpleCTAPanel from "@/components/services/SimpleCTAPanel";
import ProcessSection from "@/components/ProcessSection";
import ServicesAssessmentSection from "@/components/services/ServicesAssessmentSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import Footer from "@/components/Footer";

const Services = () => {
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
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "The Karow Advisory Group",
      "url": "https://thekarowgroup.com"
    },
    "name": "MedTech Strategic Advisory Services",
    "description": "Strategic advisory services for MedTech companies including commercialization strategy, market access, regulatory navigation, and growth acceleration.",
    "serviceType": ["Product Definition", "Commercialization Strategy", "Strategic Advisory", "Regulatory Services", "Market Access", "Clinical & Evidence Strategy"]
  }), []);

  usePageSEO({
    title: "Services | The Karow Advisory Group",
    description: "Strategic advisory services for MedTech companies including commercialization strategy, market access, regulatory navigation, and growth acceleration.",
    jsonLd,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServiceAreas />
      <SimpleCTAPanel />
      <BenefitsSection />
      <SpecialtyCapabilities />
      <ProcessSection />
      <ServicesAssessmentSection />
      <ServicesFAQ />
      <ServicesFinalCTA />
      <Footer />
    </div>
  );
};

export default Services;
