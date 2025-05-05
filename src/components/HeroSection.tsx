
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center items-center relative px-4 overflow-hidden">
      {/* Decorative orbital paths */}
      <div className="orbit-path w-[250px] h-[250px] opacity-100"></div>
      <div className="orbit-path w-[350px] h-[350px] opacity-100"></div>
      <div className="orbit-path w-[450px] h-[450px] opacity-100"></div>

      {/* Animated dots representing satellites/stars */}
      <div className="absolute w-4 h-4 bg-space-cyan rounded-full animate-orbit" style={{ top: '20%', left: '30%' }}></div>
      <div className="absolute w-6 h-6 bg-space-light-blue rounded-full animate-orbit" style={{ top: '60%', left: '70%', animationDelay: '2s' }}></div>
      <div className="absolute w-2 h-2 bg-white rounded-full animate-orbit" style={{ top: '80%', left: '20%', animationDelay: '4s' }}></div>

      {/* SGAC Logo */}
      <div className="pt-[10vh] mb-8"> {/* Viewport height cinsinden boşluk */}
        <img
          src="https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/AC25Logo.png"
          alt="SGAC Logo"
          className="h-64 md:h-64"
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-space-light-blue hover:bg-space-cyan text-background text-lg font-bold px-8 py-6 rounded-md transition-all transform hover:scale-105"
            onClick={() => document.getElementById('sponsorship')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Become a Sponsor
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-space-cyan text-space-cyan hover:bg-space-cyan/10 text-lg font-bold px-8 py-6 rounded-md transition-all transform hover:scale-105"
            onClick={() => document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Our Sponsors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
