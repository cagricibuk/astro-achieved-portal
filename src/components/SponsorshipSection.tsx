
import { Award, BadgeDollarSign, Hand, Handshake, Rocket, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SponsorshipSection = () => {
  const benefits = [
    {
      title: "Brand Visibility",
      description: "Showcase your organization to influential international stakeholders including our panel of experts in the space domain, attendees and exhibitors at the IAC Sydney 2025.",
      icon: <Rocket className="w-10 h-10 text-space-cyan" />
    },
    {
      title: "Meet the Sponsors",
      description: "Social media and newsletter promotional material that highlights your organization and your relevance towards the competition goals.",
      icon: <Star className="w-10 h-10 text-space-cyan" />
    },
    {
      title: "Source New Talents",
      description: "Introduction to AC25 teams and to the SGAC network (35,000 young space professionals).",
      icon: <Award className="w-10 h-10 text-space-cyan" />
    },
    {
      title: "Strategic Alliance",
      description: "Secure your place within SGAC's network of strategic partners. Strengthen your brand as a driving force behind the future space workforce.",
      icon: <Handshake className="w-10 h-10 text-space-cyan" />
    }
  ];

  const sponsorshipLevels = [
    {
      level: "Asteroid",
      price: "EUR 500€ / USD $565.07",
      benefits: [
        "Companies logo prominently displayed on all official presentations and event roll-up banners",
        "Acknowledgment of company's support during the formal award segment of the Grand Final",
        "Promotion via SGAC’s official social media channels and inclusion in the SGAC newsletter (1 publication)",
        "Featured content in SGAC newsletters & social media (10+ posts)",
        "Invitation to judge final presentations",
        "One guaranteed seat for your representative (in person or virtual) at the Grand Final event (observer)"
      ]
    },
    {
      level: "Galaxy",
      price: "EUR 1000€ / USD $1130.14",
      benefits: [
        "Companies logo prominently displayed on all official presentations and event roll-up banners",
        "Acknowledgment of company's support during the formal award segment of the Grand Final",
        "Companies brochure or branded item in the official tote bag distributed at the Grand Final event",
        "Promotion via SGAC’s official social media channels and inclusion in the SGAC newsletter (3 publications)",
        "Access to profiles of participating teams and tailored SGAC profiles",
        "Access to the full summary report of the competition, including key outcomes and statistics (reduced version)",
        "Reserved seats for your representatives in the intermediate review sessions (observer)",
        "One guaranteed seat for your representative (in person or virtual) at the Grand Final event (1 member in the jury panel)",
        "Keynote speaking opportunity at the Grand final, either in person or virtually (5 min)",
      ]
    },
    {
      level: "Universe",
      price: "EUR +1500€ / USD +$1695.20",
      benefits: [
        "Companies logo prominently displayed on all official presentations and event roll-up bannerss",
        "Acknowledgment of companies support during the formal award segment of the Grand Final",
        "Companies brochure or branded item in the official tote bag distributed at the Grand Final event",
        "Promotion via SGAC’s official social media channels and inclusion in the SGAC newsletter (5+ publications)",
        "Access to profiles of participating teams and tailored SGAC profiles",
        "Access to the full summary report of the competition, including key outcomes and statistics",
        "Reserved seats for your representatives in the intermediate review sessions (jury panel)",
        "One guaranteed seat for your representative (in person or virtual) at the Grand Final event (3 members in the jury panel)",
        "Keynote speaking opportunity at the Grand final, either in person or virtually (15 min)",
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-space-blue/20" id="sponsorship">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-space-cyan to-space-light-blue bg-clip-text text-transparent mb-4">
            Partner with ACHIEVED
          </h2>
          <div className="w-32 h-1 bg-space-cyan mx-auto mb-8"></div>
          
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Join leading organizations supporting the next generation of space innovation. Your sponsorship fuels breakthrough solutions for global challenges while connecting you to the brightest minds in the space sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glassmorphism p-8 text-center transform transition-all hover:translate-y-[-5px] animate-fade-in" 
              style={{animationDelay: `${0.2 * index}s`}}
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-space-cyan">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-10">Sponsorship Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <Card 
                key={index} 
                className="glassmorphism border-space-cyan/30 hover:border-space-cyan transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{level.level}</CardTitle>
                  <CardDescription className="text-xl text-center text-space-cyan font-bold">
                   
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <span className="text-space-cyan mr-2">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-block bg-space-cyan hover:bg-space-light-blue text-background font-bold py-3 px-8 rounded-md transition-all transform hover:scale-105"
          >
            Become a Sponsor
          </a>
          
          <p className="mt-6 text-gray-300 italic">
            Custom sponsorship packages are available to meet your specific objectives.<br />
            Contact our sponsorship team for details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorshipSection;
