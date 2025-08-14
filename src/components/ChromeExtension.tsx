import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";
import extensionMockup from "@/assets/extension-mockup.png";

const ChromeExtension = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Apply Without Leaving Your Browser
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See AI match scores and apply in one click on LinkedIn, Indeed, and more. 
              Our Chrome extension brings the power of AspireMatch to any job board.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Extension mockup */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-secondary rounded-2xl blur-2xl opacity-20 scale-110" />
                <img
                  src={extensionMockup}
                  alt="AspireMatch Chrome Extension showing AI match scores on LinkedIn"
                  className="relative w-full rounded-2xl shadow-hover border border-white/10"
                />
              </div>
            </div>
            
            {/* Extension features */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time AI Matching</h3>
                    <p className="text-muted-foreground">See your compatibility score with every job posting as you browse.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">One-Click Applications</h3>
                    <p className="text-muted-foreground">Apply instantly with AI-generated cover letters tailored to each role.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Smart Insights</h3>
                    <p className="text-muted-foreground">Get AI-powered recommendations on how to improve your application.</p>
                  </div>
                </div>
              </div>
              
              <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                <Chrome className="mr-2 h-5 w-5" />
                Add to Chrome (Free Beta)
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChromeExtension;