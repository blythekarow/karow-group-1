import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import LeadMagnet from "@/components/LeadMagnet";
import FounderSection from "@/components/FounderSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsSection />
      <ProblemSection />
      <BenefitsSection />
      <ServicesSection />
      <LeadMagnet />
      <FounderSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
