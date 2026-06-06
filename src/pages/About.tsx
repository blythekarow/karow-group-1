import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import TeamSection from "@/components/about/TeamSection";
import ExtendedExpertise from "@/components/about/ExtendedExpertise";
import StrategyCTABanner from "@/components/about/StrategyCTABanner";
import AboutAssessmentSection from "@/components/about/AboutAssessmentSection";
import WhenLeadersSection from "@/components/WhenLeadersSection";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
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
    "@type": "AboutPage",
    "name": "About The Karow Advisory Group",
    "description": "Meet the team behind The Karow Advisory Group. Decades of MedTech leadership experience driving strategy, commercialization, and growth for medical technology companies.",
    "mainEntity": {
      "@type": "Organization",
      "name": "The Karow Advisory Group",
      "url": "https://thekarowgroup.com"
    }
  }), []);

  usePageSEO({
    title: "About Us | The Karow Advisory Group",
    description: "Meet the team behind The Karow Advisory Group. Decades of MedTech leadership experience driving strategy, commercialization, and growth for medical technology companies.",
    jsonLd,
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <WhyWorkWithUsSection />
      <TeamSection />
      <ExtendedExpertise />
      <StrategyCTABanner />
      <AboutAssessmentSection />
      <WhenLeadersSection />
      <AboutFinalCTA />
      <Footer />
    </div>
  );
};

export default About;
