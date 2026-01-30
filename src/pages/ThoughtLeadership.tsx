import Navbar from "@/components/Navbar";
import ThoughtLeadershipHero from "@/components/thought-leadership/ThoughtLeadershipHero";
import WhyItResonates from "@/components/thought-leadership/WhyItResonates";
import DeviceFilesPodcast from "@/components/thought-leadership/DeviceFilesPodcast";
import SpeakingSection from "@/components/thought-leadership/SpeakingSection";
import RecentArticles from "@/components/thought-leadership/RecentArticles";
import DualCTA from "@/components/thought-leadership/DualCTA";
import NewsletterSignup from "@/components/thought-leadership/NewsletterSignup";
import Footer from "@/components/Footer";

const ThoughtLeadership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ThoughtLeadershipHero />
      <WhyItResonates />
      <DeviceFilesPodcast />
      <SpeakingSection />
      <RecentArticles />
      <DualCTA />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default ThoughtLeadership;
