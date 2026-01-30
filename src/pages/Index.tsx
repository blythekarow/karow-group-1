import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import AboutFirmSection from "@/components/AboutFirmSection";
import ProblemSection from "@/components/ProblemSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import OutcomesSection from "@/components/OutcomesSection";
import ServicesSection from "@/components/ServicesSection";
import LeadMagnet from "@/components/LeadMagnet";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AssessmentSection from "@/components/AssessmentSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <AboutFirmSection />
      <ProblemSection />
      <ProcessSection />
      <BenefitsSection />
      <OutcomesSection />
      <ServicesSection />
      <LeadMagnet />
      <FounderSection />
      <TestimonialsSection />
      <AssessmentSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;

