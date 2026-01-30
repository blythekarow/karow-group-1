import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceAreas from "@/components/services/ServiceAreas";
import SpecialtyCapabilities from "@/components/services/SpecialtyCapabilities";
import StrategicPartners from "@/components/services/StrategicPartners";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesFinalCTA from "@/components/services/ServicesFinalCTA";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServiceAreas />
      <SpecialtyCapabilities />
      <StrategicPartners />
      <ServicesFAQ />
      <ServicesFinalCTA />
      <Footer />
    </div>
  );
};

export default Services;
