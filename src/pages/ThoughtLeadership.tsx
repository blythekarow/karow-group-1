import { useMemo } from "react";
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
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Insights & Thought Leadership",
    "description": "MedTech insights, articles, and the Device Files podcast. Stay ahead with expert perspectives on medical technology strategy and commercialization.",
    "publisher": {
      "@type": "Organization",
      "name": "The Karow Advisory Group",
      "url": "https://thekarowgroup.com"
    }
  }), []);

  usePageSEO({
    title: "Insights & Thought Leadership | The Karow Advisory Group",
    description: "MedTech insights, articles, and the Device Files podcast. Stay ahead with expert perspectives on medical technology strategy and commercialization.",
    jsonLd,
  });

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
