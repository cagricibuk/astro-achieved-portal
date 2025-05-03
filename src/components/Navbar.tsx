
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Challenges", href: "#challenges" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Timeline", href: "#timeline" },
  { name: "Sponsorship", href: "#sponsorship" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="https://spacegeneration.org/wp-content/uploads/2020/06/SGAC_New_Logo.png" 
            alt="SGAC Logo" 
            className="h-8 mr-2"
          />
          <span className="font-bold text-lg hidden sm:block">ACHIEVED</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-space-cyan transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Apply Button */}
        <div className="hidden lg:block">
          <Button className="bg-space-cyan hover:bg-space-light-blue text-background">
            Apply Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden absolute w-full bg-background/95 backdrop-blur-md transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 border-b border-white/10" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className="block text-gray-300 hover:text-space-cyan transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <Button 
            className="w-full bg-space-cyan hover:bg-space-light-blue text-background"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
