import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ChromeExtension from "@/components/ChromeExtension";
import Testimonials from "@/components/Testimonials";
import BetaSignup from "@/components/BetaSignup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <ChromeExtension />
      <Testimonials />
      <BetaSignup />
      <Footer />
    </div>
  );
};

export default Index;
