
import { Calendar, Star, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About ACHIEVED</h2>
        <div className="w-20 h-1 bg-space-cyan mx-auto mb-8"></div>
        
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          The ACHIEVED Competition (AC25) is SGAC's premier initiative bringing together young professionals and students to develop innovative space-based solutions for global challenges. Through mentorship, expert guidance, and international collaboration, participants transform ideas into impactful projects.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 6-Month Program */}
          <div className="glassmorphism p-6 text-center animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="w-16 h-16 bg-space-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-space-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">6-Month Program</h3>
            <p className="text-gray-300">
              Comprehensive development journey with structured milestones and continuous feedback.
            </p>
          </div>
          
          {/* Expert Reviews */}
          <div className="glassmorphism p-6 text-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="w-16 h-16 bg-space-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-space-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Reviews</h3>
            <p className="text-gray-300">
              Industry professionals and academic leaders provide guidance and evaluation.
            </p>
          </div>
          
          {/* Final in Sydney 2025 */}
          <div className="glassmorphism p-6 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <div className="w-16 h-16 bg-space-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-space-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">Final in Sydney 2025</h3>
            <p className="text-gray-300">
              Showcase your innovation at the prestigious final event in Sydney, Australia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
