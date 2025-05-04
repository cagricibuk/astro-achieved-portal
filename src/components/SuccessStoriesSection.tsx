
import { useState } from "react";
import { Award, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { title } from "process";

const successStories = [
  {
    name: "ACMATRON",
    year: "2024",
    title:"Lunar Resources Utilization",
    description: "Cryogenic Storage System (CSS) Solution to Transform Wastes into useful gases (propellants) such as Oxygen, Methane & Ammonia",
    team: "International Space University Team",
    image: "src/images/acmatron-n.png"
  },
  {
    name: "VacuSpace",
    year: "2024",
    title:"Space Debris Clean-Up",
    description: "Solution for small debris in LEO by proposing an Active Debris Removal solution, by using Laser technology to target debris in the 1 to 10cm range",
    team: "MIT-Caltech Collaboration",
    image: "src/images/vacuspace-n.png"
  },
  {
    name: "Paliyama",
    year: "2024",
    title:"Space Debris Tracking & Identification",
    description: "Collaborative network leveraging a satellite-based internet structure where clients can request space debris data from a satellite constellation",
    team: "Tokyo-Berlin University Alliance",
    image: "src/images/paliyama-n.png"
  }
];

const SuccessStoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + successStories.length) % successStories.length);
  };

  return (
    <section className="py-20 px-4" id="success-stories">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Award className="w-8 h-8 text-space-cyan mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">Success Stories</h2>
        </div>
        <div className="w-20 h-1 bg-space-cyan mx-auto mb-12"></div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="glassmorphism p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-2/5 h-64 rounded-lg overflow-hidden">
                      <img 
                        src={story.image} 
                        alt={story.name} 
                        className="w-64 h-64 object-cover"
                      />
                    </div>
                    <div className="w-full md:w-3/1">
                      <div className="flex items-start mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mr-3">{story.name}</h3>
                        <span className="bg-space-blue px-2 py-1 rounded text-sm text-space-cyan">{story.year}</span>
                      </div>
                      <p className="text-gray-300 mb-6">{story.description}</p>
                      <p className="text-space-cyan font-medium">{story.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-space-cyan text-space-cyan hover:bg-space-cyan/20"
              onClick={prevSlide}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            {successStories.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentIndex === index ? "bg-space-cyan" : "bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full border-space-cyan text-space-cyan hover:bg-space-cyan/20"
              onClick={nextSlide}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
