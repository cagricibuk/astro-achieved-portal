
import { Card, CardContent } from "@/components/ui/card";

const SponsorsSection = () => {
  const sponsors = [
    {
      name: "Nova Space",
      logo: "https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/nova-space-logo.png",
      description: "Pioneering space technology solutions"
    },
    {
      name: "Spicy SE",
      logo: "https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/spicy-se-logo.png",
      description: "Innovative space engineering"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-space-blue/20 to-background" id="sponsors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-space-cyan to-space-light-blue bg-clip-text text-transparent mb-4">
            Our Sponsors
          </h2>
          <div className="w-32 h-1 bg-space-cyan mx-auto mb-8"></div>
          
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            We are grateful to our sponsors for their support in making ACHIEVED Competition 2025 possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
          {sponsors.map((sponsor, index) => (
            <Card 
              key={index}
              className="glassmorphism border-space-cyan/30 hover:border-space-cyan transition-all p-8 flex flex-col items-center"
            >
              <CardContent className="p-0 flex flex-col items-center">
                <div className="w-64 h-64 flex items-center justify-center mb-6 p-4">
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`} 
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/400x200/333/FFF?text=" + sponsor.name;
                    }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-space-cyan">{sponsor.name}</h3>
                <p className="text-center text-gray-300">{sponsor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-300">
            Interested in becoming a sponsor? 
            <a href="#sponsorship" className="ml-2 text-space-cyan hover:text-space-light-blue transition-colors">
              Learn more about our sponsorship opportunities
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
