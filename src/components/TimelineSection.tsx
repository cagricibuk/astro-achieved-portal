
import { CalendarDays } from "lucide-react";

const timeline = [
  {
    phase: "Applications Open",
    date: "Jan 15, 2025",
    description: "Submit your innovative proposals"
  },
  {
    phase: "Initial Reviews",
    date: "Mar 30, 2025",
    description: "First round of expert evaluations"
  },
  {
    phase: "Team Development",
    date: "Apr - Jul 2025",
    description: "Mentorship and project refinement"
  },
  {
    phase: "Finalist Selection",
    date: "Aug 15, 2025",
    description: "Top teams announced"
  },
  {
    phase: "Final Event in Sydney",
    date: "Oct 5-7, 2025",
    description: "Pitch to global space leaders"
  },
  {
    phase: "Results & Awards",
    date: "Oct 8, 2025",
    description: "Winners announced"
  }
];

const TimelineSection = () => {
  return (
    <section className="py-20 px-4 bg-space-gradient" id="timeline">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <CalendarDays className="w-8 h-8 text-space-cyan mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Timeline</h2>
        </div>
        <div className="w-20 h-1 bg-space-cyan mx-auto mb-12"></div>
        
        <div className="relative">
          {/* Desktop timeline */}
          <div className="hidden md:block">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-space-cyan/30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div 
                  className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}
                >
                  <div className="glassmorphism p-6 inline-block animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
                    <h3 className="text-xl font-bold text-space-cyan mb-2">{item.phase}</h3>
                    <div className="text-sm font-medium text-gray-400 mb-2">{item.date}</div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-space-cyan rounded-full border-4 border-background z-10"></div>
              </div>
            ))}
          </div>
          
          {/* Mobile timeline */}
          <div className="md:hidden">
            <div className="absolute left-4 top-0 h-full w-1 bg-space-cyan/30"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-12 mb-12">
                <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 bg-space-cyan rounded-full border-2 border-background z-10"></div>
                <div className="glassmorphism p-4 animate-fade-in" style={{animationDelay: `${0.2 * index}s`}}>
                  <h3 className="text-lg font-bold text-space-cyan mb-1">{item.phase}</h3>
                  <div className="text-sm font-medium text-gray-400 mb-2">{item.date}</div>
                  <p className="text-sm text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
