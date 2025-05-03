
import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 px-4 border-t border-white/10 bg-background/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex items-center flex-col md:items-start">
            <img 
              src="https://spacegeneration.org/wp-content/uploads/2020/06/SGAC_New_Logo.png" 
              alt="SGAC Logo" 
              className="h-12 mb-4"
            />
            <div>
              <div className="text-xl font-bold">ACHIEVED Competition 2025</div>
              <div className="text-sm text-gray-400">Space Generation Advisory Council</div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3 text-space-cyan">Quick Links</h4>
            <div className="space-y-2">
              <div><a href="#about" className="hover:text-space-cyan transition-colors">About ACHIEVED</a></div>
              <div><a href="#challenges" className="hover:text-space-cyan transition-colors">Competition Challenges</a></div>
              <div><a href="#timeline" className="hover:text-space-cyan transition-colors">Timeline</a></div>
              <div>
                <a href="#sponsorship" className="text-space-cyan hover:underline font-medium">
                  Sponsorship Opportunities
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-3 text-space-cyan">Sponsorship Contact</h4>
            <p className="mb-2">Interested in becoming a sponsor?</p>
            <a 
              href="mailto:sponsorship@spacegeneration.org" 
              className="flex items-center justify-center md:justify-start text-space-cyan hover:underline"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>sponsorship@spacegeneration.org</span>
            </a>
            <p className="mt-3 text-sm text-gray-400">
              Our sponsorship team will contact you within 24 hours to discuss partnership opportunities.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © {currentYear} Space Generation Advisory Council. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-space-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-space-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-space-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-space-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
