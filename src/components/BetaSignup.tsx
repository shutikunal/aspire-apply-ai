import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Sparkles } from "lucide-react";

const BetaSignup = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-primary px-4 py-2 rounded-full text-white text-sm font-medium mb-8">
            <Sparkles className="h-4 w-4" />
            Limited Beta Access
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Ready to Transform Your Job Search?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the beta and be among the first to experience the future of job applications. 
            Limited spots available.
          </p>
          
          {/* Beta signup form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 border-border/20 bg-background/80 backdrop-blur-sm"
              />
              <Button variant="hero" size="lg" className="h-12 px-6">
                Join Beta
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Beta perks */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-brand-teal rounded-full" />
              Free lifetime access
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-brand-orange rounded-full" />
              Priority support
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-brand-pink rounded-full" />
              Early feature access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaSignup;