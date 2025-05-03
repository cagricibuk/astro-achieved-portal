
import { Badge } from "lucide-react";

const SponsorshipSection = () => {
  const benefits = [
    {
      title: "Brand Visibility",
      description: "Prominent logo placement across all platforms, media coverage, and event materials.",
      icon: "🌟"
    },
    {
      title: "Talent Access",
      description: "Direct engagement with top emerging space professionals and innovative thinkers.",
      icon: "👥"
    },
    {
      title: "Strategic Alliance",
      description: "Association with leading space organizations and academic institutions worldwide.",
      icon: "🤝"
    }
  ];

  return (
    <section className="py-20 px-4" id="sponsorship">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Badge className="w-8 h-8 text-space-cyan mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Sponsorship Benefits</h2>
        </div>
        <div className="w-20 h-1 bg-space-cyan mx-auto mb-8"></div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Partner with ACHIEVED Competition to showcase your organization's commitment to innovation, sustainability, and the next generation of space leaders.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glassmorphism p-8 text-center animate-fade-in" 
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-space-cyan hover:bg-space-light-blue text-background font-bold py-3 px-8 rounded-md transition-all"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
