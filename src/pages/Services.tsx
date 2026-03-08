import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceAreas from "@/components/services/ServiceAreas";
import UrgencyCallout from "@/components/services/UrgencyCallout";
import SpecialtyCapabilities from "@/components/services/SpecialtyCapabilities";
import SimpleCTAPanel from "@/components/services/SimpleCTAPanel";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServiceAreas />
      <SimpleCTAPanel />
      <UrgencyCallout variant="primary" />
      <SpecialtyCapabilities />
      <ProcessSection />
      <BenefitsSection />
      <ServicesFAQ />
      <ServicesFinalCTA />
      <Footer />
    </div>
  );
};

export default Services;
