import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Tech Startup",
    avatar: "SC",
    content: "AspireMatch saved me hours every week — it's like having a job search assistant 24/7. I landed 3 interviews in my first week using it!",
    rating: 5
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager",
    company: "Fortune 500",
    avatar: "MJ",
    content: "The AI matching is incredibly accurate. It found roles I never would have discovered on my own, and the auto-apply feature is a game changer.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Scale-up",
    avatar: "ER",
    content: "Finally, a job search tool that actually understands what I'm looking for. The personalized cover letters are spot-on every time.",
    rating: 5
  }
];

const companyLogos = ["TechCorp", "InnovateLabs", "FutureWorks", "DataSystems"];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
            Loved by Job Seekers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their job search with AspireMatch
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-hover transition-shadow duration-300 border border-border/50"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-brand-purple/20 mb-4" />
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Company logos */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8">Trusted by professionals at leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((company, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-muted rounded-lg text-muted-foreground font-semibold"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;