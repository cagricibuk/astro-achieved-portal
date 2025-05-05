
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ChallengesSection from "@/components/ChallengesSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import TimelineSection from "@/components/TimelineSection";
import SponsorshipSection from "@/components/SponsorshipSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChallengesSection />
      <SuccessStoriesSection />
      <TimelineSection />
      <SponsorshipSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
