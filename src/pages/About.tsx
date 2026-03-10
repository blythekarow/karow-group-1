import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import TeamSection from "@/components/about/TeamSection";
import ExtendedExpertise from "@/components/about/ExtendedExpertise";
import StrategyCTABanner from "@/components/about/StrategyCTABanner";
import WhenLeadersSection from "@/components/WhenLeadersSection";
import AboutFinalCTA from "@/components/about/AboutFinalCTA";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutHero />
      <WhyWorkWithUsSection />
      <TeamSection />
      <ExtendedExpertise />
      <StrategyCTABanner />
      <WhenLeadersSection />
      <AboutFinalCTA />
      <Footer />
    </div>
  );
};

export default About;
