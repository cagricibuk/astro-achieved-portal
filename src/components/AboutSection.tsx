
import { Calendar, Star, MapPin } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-4" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">About ACHIEVED</h2>
        <div className="w-20 h-1 bg-space-cyan mx-auto mb-8"></div>

        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          The ACHIEVED Competition 2025 (AC25) is an initiative supported by SGAC’s <b><a href="https://spacegeneration.org/epd">Educational & Professional Development (EPD) Platform </a></b> that brings together young professionals and students for the development of innovative space-based solutions that address critical global challenges involving space technologies.
          The AC25 serves as a catalyst for skill development and innovation through ands-on problem-solving, mentorship, and expert feedback, while participants contribute to the long-term sustainability of outer space activities.
          The competitions interactive and applied nature fosters a sense of responsibility and awareness among emerging space professionals, reinforcing the importance of ethical and sustainable space exploration.
          <div className="w-20 h-1 bg-space-transparent mx-auto mb-8"></div>
          Following the success of its pilot edition in 2024, the AC25 is themed Sustainable Space: Resilient Earth, aligned with the objectives of the 76th International Astronautical Congress (IAC), and it has been launched to furhter its mission to cultivate responsible and sustainable space practices.        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 6-Month Program */}
          <div className="glassmorphism p-6 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-space-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-space-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">6-Month Program</h3>
            <p className="text-gray-300">
              Comprehensive development journey with structured milestones and continuous feedback.
            </p>
          </div>

          {/* Expert Reviews */}
          <div className="glassmorphism p-6 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="w-16 h-16 bg-space-blue/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-space-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">Expert Reviews</h3>
            <p className="text-gray-300">
              Industry professionals and academic leaders provide guidance and evaluation.
            </p>
          </div>

          {/* Final in Sydney 2025 */}
          <div className="glassmorphism p-6 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
