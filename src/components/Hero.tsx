import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient-shift bg-[length:400%_400%] opacity-10" />
      
      {/* Floating orbs for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-purple/20 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-teal/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-orange/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main headline with gradient text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Your AI-Powered Job Search Copilot
          </h1>
          
          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Find, match, and apply to your dream jobs automatically — while you focus on preparing for interviews.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Get Early Access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-brand-purple/20 hover:bg-brand-purple/5">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
          
          {/* Product mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 scale-110" />
            <img
              src={dashboardMockup}
              alt="AspireMatch Dashboard showing AI job matches and application interface"
              className="relative w-full rounded-2xl shadow-hover border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;