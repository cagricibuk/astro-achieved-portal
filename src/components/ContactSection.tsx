
import { Users, Mail, User, Building } from "lucide-react";
import { ContactForm } from "./ContactForm";

const team = [
  {
    name: "Maria Casanovas Crespo",
    role: "ACHIEVED Competition Co-Lead",
    email: "maria.casanovas@spacegeneration.org",
    image: "https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/maria.jpeg"
  },
  {
    name: "Serena Campioli",
    role: "ACHIEVED Competition Co-Lead",
    email: "serena.campioli@spacegeneration.org",
    image: "https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/serena.jpeg"
  },
  {
    name: "Albert Nicolás López",
    role:"ACHIEVED Competition Sponsorship Management",
    email: "albert.nlopez@spacegeneration.org",
    image: "https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/Albert.jpeg"
  },
  {
    name: "Daniel Ugbede Isah",
    role: "ACHIEVED Competition Sponsorship Management",
    email: "daniel.isah@spacegeneration.org",
    image: "https://raw.githubusercontent.com/cagricibuk/astro-achieved-portal/refs/heads/main/src/images/Isah.jpeg"
  }
];

const ContactSection = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-space-cyan mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Contact & Team</h2>
          </div>
          <div className="w-20 h-1 bg-space-cyan mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="glassmorphism p-6 text-center animate-fade-in" 
              style={{animationDelay: `${0.15 * index}s`}}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-space-cyan">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold mb-1">{member.name}</h3>
              <p className="text-space-cyan text-sm mb-3">{member.role}</p>
              <a 
                href={`mailto:${member.email}`} 
                className="flex items-center justify-center text-gray-300 hover:text-space-cyan transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">{member.email}</span>
              </a>
            </div>
          ))}
        </div>
        
        <div className="glassmorphism mt-16 p-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <h3 className="text-xl font-bold mb-4 text-center">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4 text-gray-300">
                For any inquiries about the competition, sponsorship opportunities, or how to get involved, please don't hesitate to reach out to our team.
              </p>
              <div className="flex items-center mb-3">
                <Mail className="w-5 h-5 mr-3 text-space-cyan" />
                <a href="mailto:achieved-competition@spacegeneration.org" className="text-space-cyan hover:underline">
                achieved-competition@spacegeneration.org
                </a>
              </div>
              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  Space Generation Advisory Council<br />
                  Vienna International Center<br />
                  P.O. Box 500, 1400 Vienna, Austria
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
