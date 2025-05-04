
import { Rocket, Earth, Satellite } from "lucide-react";

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
          <div className="glassmorphism p-8 rounded-lg transform transition-all hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="h-12 flex items-center mb-4">
              <Satellite className="w-10 h-10 text-space-light-blue mr-3" />
              <h3 className="text-xl font-bold">Sustainable and long-lasting space operations</h3>
            </div>
            <div className="h-40 mb-6 rounded-md overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/ch1.jpeg"
                alt="Sustainable Space Operations"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300">
              
            Systems and technologies that extend satellite lifespans, reduce waste, and foster adaptability. By integrating principles of reusability and sustainability, the challenge seeks to minimize the environmental impact of space operations, mitigate risks like space debris and Kessler Syndrome, and align space exploration with long-term environmental and economic goals.</p>
          </div>

          {/* Challenge 2 */}
          <div className="glassmorphism p-8 rounded-lg transform transition-all hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="h-12 flex items-center mb-4">
              <Earth className="w-10 h-10 text-space-light-blue mr-3" />
              <h3 className="text-xl font-bold">Space Innovation for Combating Drought</h3>
            </div>
            <div className="h-40 mb-6 rounded-md overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/ch2.png"
                alt="Drought Mitigation with Space Tech"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300">
            Development of innovative solutions that utilize space technologies to mitigate the adverse impacts of drought on ecosystems and communities. By leveraging satellite data for soil moisture monitoring, drought prediction, and water usage optimization in agriculture, the challenge aims to enhance community resilience, support sustainable agricultural practices, and promote efficient water resource management.
            </p>
          </div>

          {/* Challenge 3 */}
          <div className="glassmorphism p-8 rounded-lg transform transition-all hover:translate-y-[-5px] animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="h-12 flex items-center mb-4">
              <div className="text-space-light-blue mr-3">
                <MarsIcon />
              </div>
              <h3 className="text-xl font-bold">On the way to Mars and beyond</h3>
            </div>
            <div className="h-40 mb-6 rounded-md overflow-hidden">
              <img
                src="https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/ch3.jpg"
                alt="Mars Exploration Safety"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-300">
            As humanity prepares for its journey to Mars and beyond, scientists and engineers are working to solve critical challenges to ensure astronauts can survive, thrive, and work efficiently in the harsh environment of space. Therefore, participants are called to design an innovative solution to protect astronauts from the hazards of the Martian environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
