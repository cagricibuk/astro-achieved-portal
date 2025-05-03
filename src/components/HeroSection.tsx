
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center relative px-4 overflow-hidden">
      {/* Decorative orbital paths */}
      <div className="orbit-path w-[200px] h-[200px] opacity-20"></div>
      <div className="orbit-path w-[300px] h-[300px] opacity-15"></div>
      <div className="orbit-path w-[400px] h-[400px] opacity-10"></div>
      
      {/* Animated dots representing satellites/stars */}
      <div className="absolute w-2 h-2 bg-space-cyan rounded-full animate-orbit" style={{ top: '20%', left: '30%' }}></div>
      <div className="absolute w-3 h-3 bg-space-light-blue rounded-full animate-orbit" style={{ top: '60%', left: '70%', animationDelay: '2s' }}></div>
      <div className="absolute w-1 h-1 bg-white rounded-full animate-orbit" style={{ top: '80%', left: '20%', animationDelay: '4s' }}></div>
      
      {/* SGAC Logo */}
      <div className="mb-8">
        <img 
          src="https://spacegeneration.org/wp-content/uploads/2020/06/SGAC_New_Logo.png" 
          alt="SGAC Logo" 
          className="h-16 md:h-24"
        />
      </div>
      
      <div className="text-center max-w-3xl animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
          ACHIEVED Competition 2025
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-space-cyan mb-8">
          Sustainable Space: Resilient Earth
        </h2>
        <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
          Join the next generation of space innovators tackling Earth's most pressing challenges through space technology and collaboration.
        </p>
        <Button 
          size="lg" 
          className="bg-space-cyan hover:bg-space-light-blue text-background text-lg font-bold px-8 py-6 rounded-md transition-all transform hover:scale-105"
        >
          Apply Now
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
