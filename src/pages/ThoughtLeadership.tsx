import usePageSEO from "@/hooks/use-page-seo";
import Navbar from "@/components/Navbar";
import ThoughtLeadershipHero from "@/components/thought-leadership/ThoughtLeadershipHero";
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
