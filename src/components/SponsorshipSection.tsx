
import { Award, BadgeDollarSign, Handshake } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SponsorshipSection = () => {
  const benefits = [
    {
      title: "Brand Visibility",
      description: "Prominent logo placement across all ACHIEVED materials, global media coverage, and recognition at international space events. Your brand reaches over 15,000 young space professionals worldwide.",
      icon: <BadgeDollarSign className="w-10 h-10 text-space-cyan" />
    },
    {
      title: "Talent Access",
      description: "Direct engagement with top emerging space professionals and innovative thinkers. Recruit from a pool of exceptional talent and forge relationships with the future leaders of the space industry.",
      icon: <Handshake className="w-10 h-10 text-space-cyan" />
    },
    {
      title: "Strategic Alliance",
      description: "Association with leading space organizations like ESA, NASA, and UNOOSA along with prestigious academic institutions worldwide. Strengthen your position in the global space ecosystem.",
      icon: <Award className="w-10 h-10 text-space-cyan" />
    }
  ];

  const sponsorshipLevels = [
    {
      level: "Platinum",
      price: "$25,000+",
      benefits: [
        "Keynote speaking opportunity at the Sydney final",
        "Logo on all digital & printed materials (prominent placement)",
        "Full access to participant database & exclusive networking events",
        "Featured content in SGAC newsletters & social media (10+ posts)",
        "Invitation to judge final presentations"
      ]
    },
    {
      level: "Gold",
      price: "$15,000",
      benefits: [
        "Panel speaking opportunity at the Sydney final",
        "Logo on all digital & printed materials",
        "Access to select participant information & networking events",
        "Featured content in SGAC newsletters & social media (5+ posts)",
        "Workshop opportunity with participants"
      ]
    },
    {
      level: "Silver",
      price: "$7,500",
      benefits: [
        "Recognition during the Sydney final events",
        "Logo on digital materials",
        "Networking reception invitation",
        "Featured content in SGAC social media (2+ posts)",
        "Display materials at competition events"
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
          <h3 className="text-3xl font-bold text-center mb-10">Sponsorship Packages</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipLevels.map((level, index) => (
              <Card 
                key={index} 
                className="glassmorphism border-space-cyan/30 hover:border-space-cyan transition-all"
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">{level.level}</CardTitle>
                  <CardDescription className="text-xl text-center text-space-cyan font-bold">
                    {level.price}
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
