import { Upload, Brain, MousePointer } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Resume",
    description: "Simply upload your resume and let our AI analyze your skills and experience"
  },
  {
    icon: Brain,
    title: "AI Matches You",
    description: "Our intelligent system finds the perfect job opportunities that match your profile"
  },
  {
    icon: MousePointer,
    title: "One-Click Apply",
    description: "Apply to multiple positions instantly with personalized cover letters"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your job search forever
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                {/* Step number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                
                {/* Icon container */}
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-3 text-foreground">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;