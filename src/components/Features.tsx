import { Target, Zap, Filter, Chrome } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "AI Resume Matching",
    description: "Our advanced AI analyzes thousands of job postings and matches them to your unique skills and experience. Find top-fit opportunities in seconds, not hours.",
    gradient: "gradient-primary"
  },
  {
    icon: Zap,
    title: "Auto-Apply",
    description: "Apply to multiple positions instantly with AI-generated, personalized cover letters. Your applications are tailored to each role automatically.",
    gradient: "gradient-secondary"
  },
  {
    icon: Filter,
    title: "Smart Filters",
    description: "Set your preferences for location, salary range, company size, and remote-friendly options. Our AI learns and refines matches based on your choices.",
    gradient: "gradient-accent"
  },
  {
    icon: Chrome,
    title: "Chrome Extension",
    description: "Seamlessly integrate with LinkedIn, Indeed, and other major job boards. See AI match scores and apply directly from any job listing page.",
    gradient: "gradient-primary"
  }
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to supercharge your job search and land your dream role
          </p>
        </div>
        
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Feature icon and title */}
              <div className="lg:w-1/2">
                <div className={`w-16 h-16 bg-${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-card`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
              
              {/* Feature illustration placeholder */}
              <div className="lg:w-1/2">
                <div className={`h-64 bg-${feature.gradient} rounded-2xl opacity-20 flex items-center justify-center shadow-card`}>
                  <feature.icon className="h-20 w-20 text-white/60" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;