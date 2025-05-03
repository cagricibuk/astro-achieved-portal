
import { useState } from "react";
import { Award, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const successStories = [
  {
    name: "ACMATRON",
    year: "2023",
    description: "Developed an AI-powered satellite system that autonomously detects and predicts forest fires with 94% accuracy, now being implemented by three national space agencies.",
    team: "International Space University Team",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc"
  },
  {
    name: "VacuSpace",
    year: "2022",
    description: "Created a novel debris capture mechanism using vacuum technology, reducing cleanup mission costs by 60%. Currently in prototype testing with the European Space Agency.",
    team: "MIT-Caltech Collaboration",
    image: "https://images.unsplash.com/photo-1518359094545-074231ffb616"
  },
  {
    name: "LunaGrow",
    year: "2021",
    description: "Pioneered a lunar soil enrichment technique enabling sustainable food production for long-duration missions. Technology being adapted for Mars habitation plans.",
    team: "Tokyo-Berlin University Alliance",
    image: "https://images.unsplash.com/photo-1451186859696-371d9477be93"
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
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:w-3/5">
                      <div className="flex items-center mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mr-3">{story.name}</h3>
                        <span className="bg-space-blue px-2 py-1 rounded text-sm text-space-cyan">{story.year}</span>
                      </div>
                      <p className="text-gray-300 mb-6">{story.description}</p>
                      <p className="text-space-cyan font-medium">{story.team}</p>
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
