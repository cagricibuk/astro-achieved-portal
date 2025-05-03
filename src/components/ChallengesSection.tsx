
import { Rocket, Earth } from "lucide-react";

const ChallengesSection = () => {
  // Custom icon for Mars exploration
  const MarsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M7 14C8.5 16.5 15.5 16.5 17 14" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="9" r="1" fill="currentColor" />
      <circle cx="16" cy="9" r="1" fill="currentColor" />
    </svg>
  );

  return (
    <section className="py-20 px-4 bg-space-gradient" id="challenges">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Competition Challenges</h2>
        <div className="w-20 h-1 bg-space-cyan mx-auto mb-8"></div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Explore the three critical challenge areas for AC25, each addressing important aspects of space sustainability and Earth resilience.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Challenge 1 */}
          <div className="glassmorphism p-8 rounded-lg transform transition-all hover:translate-y-[-5px] animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="h-12 flex items-center mb-4">
              <Rocket className="w-10 h-10 text-space-light-blue mr-3" />
              <h3 className="text-xl font-bold">Sustainable Space Operations</h3>
            </div>
            <div className="h-40 mb-6 rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                alt="Sustainable Space Operations" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300">
              Develop innovative approaches to reduce space debris, optimize satellite operations, and ensure sustainable use of orbital resources for future generations.
            </p>
          </div>
          
          {/* Challenge 2 */}
          <div className="glassmorphism p-8 rounded-lg transform transition-all hover:translate-y-[-5px] animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="h-12 flex items-center mb-4">
              <Earth className="w-10 h-10 text-space-light-blue mr-3" />
              <h3 className="text-xl font-bold">Drought Mitigation with Space Tech</h3>
            </div>
            <div className="h-40 mb-6 rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb" 
                alt="Drought Mitigation with Space Tech" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300">
              Apply satellite data and space technologies to address water scarcity, improve agricultural resilience, and develop early warning systems for drought-prone regions.
            </p>
          </div>
          
          {/* Challenge 3 */}
          <div className="glassmorphism p-8 rounded-lg transform transition-all hover:translate-y-[-5px] animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="h-12 flex items-center mb-4">
              <div className="text-space-light-blue mr-3">
                <MarsIcon />
              </div>
              <h3 className="text-xl font-bold">Mars Exploration Safety</h3>
            </div>
            <div className="h-40 mb-6 rounded-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                alt="Mars Exploration Safety" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300">
              Create solutions to protect human explorers from radiation, habitat failures, and psychological challenges during long-duration Mars missions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
