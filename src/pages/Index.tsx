import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServicesSection from "@/components/ServicesSection";
import AssessmentSection from "@/components/AssessmentSection";
import FounderSection from "@/components/FounderSection";

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
      {/* 2B. Why Companies Work With Us */}
      <WhyWorkWithUsSection />
      {/* 3. The Problem */}
      <ProblemSection />
      {/* 4. The Solution */}
      <SolutionSection />
      {/* 5. 3-Step Process */}
      <ProcessSection />
      {/* 6. Outcomes / Benefits */}
      <BenefitsSection />
      {/* 7. Testimonials */}
      <TestimonialsSection />
      {/* 8. Services Overview */}
      <ServicesSection />
      {/* 9. Free Assessment CTA (D.E.V.I.C.E.) */}
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
