import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import AssessmentSection from "@/components/AssessmentSection";
import FounderSection from "@/components/FounderSection";
import TeamSection from "@/components/TeamSection";
import WhenLeadersSection from "@/components/WhenLeadersSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Trusted By / Logo Carousel */}
      <LogoCarousel />
      {/* 3. The Problem */}
      <ProblemSection />
      {/* 4. The Solution / Founder Intro */}
      <SolutionSection />
      {/* 5. 3-Step Process */}
      <ProcessSection />
      {/* 6. Value Proposition / Benefits */}
      <BenefitsSection />
      {/* 7. Testimonials */}
      <TestimonialsSection />
      {/* 8. Services Overview */}
      <ServicesSection />
      {/* 9. Free Assessment CTA (D.E.V.I.C.E.) */}
      <AssessmentSection />
      {/* 10. When Leaders Reach Out */}
      <WhenLeadersSection />
      {/* 11. Meet Blythe Karow */}
      <FounderSection />
      {/* 12. Team Section */}
      <TeamSection />
      {/* 13. Final Dual CTA */}
      <FinalCTASection />
      {/* 14. Footer */}
      <Footer />
    </div>
  );
};

export default Index;
