import Navbar from "@/components/Navbar";
import ThoughtLeadershipHero from "@/components/thought-leadership/ThoughtLeadershipHero";
import WhyItResonates from "@/components/thought-leadership/WhyItResonates";
import RecentArticles from "@/components/thought-leadership/RecentArticles";
import NewsletterSignup from "@/components/thought-leadership/NewsletterSignup";
import DeviceFilesPodcast from "@/components/thought-leadership/DeviceFilesPodcast";
import SpeakingSection from "@/components/thought-leadership/SpeakingSection";
import DualCTA from "@/components/thought-leadership/DualCTA";
import Footer from "@/components/Footer";

const ThoughtLeadership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ThoughtLeadershipHero />
      <WhyItResonates />
      <RecentArticles />
      <NewsletterSignup />
      <DeviceFilesPodcast />
      <SpeakingSection />
      <DualCTA />
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
