import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceAreas from "@/components/services/ServiceAreas";
import UrgencyCallout from "@/components/services/UrgencyCallout";
import SpecialtyCapabilities from "@/components/services/SpecialtyCapabilities";
import SimpleCTAPanel from "@/components/services/SimpleCTAPanel";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* 1. Hero */}
      <ServicesHero />
      {/* 2-4. Service Areas (3 zigzag sections) */}
      <ServiceAreas />
      {/* 5. Urgency Callout #1 */}
      <UrgencyCallout variant="primary" />
      {/* 6. Specialty Capabilities */}
      <SpecialtyCapabilities />
      {/* 7. Simple CTA Panel */}
      <SimpleCTAPanel />
      {/* 8. 3-Step Process (reused from homepage) */}
      <ProcessSection />
      {/* 9. Outcomes/Benefits (reused from homepage) */}
      <BenefitsSection />
      {/* 10. Testimonials (reused from homepage) */}
      <TestimonialsSection />
      {/* 11. Urgency Callout #2 */}
      <UrgencyCallout variant="secondary" />
      {/* 12. FAQ */}
      <ServicesFAQ />
      {/* 13. Final CTA */}
      <ServicesFinalCTA />
      <Footer />
    </div>
  );
};

export default Services;
