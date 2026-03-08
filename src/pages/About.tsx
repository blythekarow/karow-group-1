import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import TeamSection from "@/components/about/TeamSection";
import ExtendedExpertise from "@/components/about/ExtendedExpertise";
import FounderStory from "@/components/about/FounderStory";
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
      <FounderStory />
      <WhenLeadersSection />
      <AboutFinalCTA />
      <Footer />
    </div>
  );
};

export default About;
