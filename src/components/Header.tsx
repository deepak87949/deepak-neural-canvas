import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-border/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-space font-bold text-xl bg-gradient-neural bg-clip-text text-transparent">
          DG
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Home
          </button>
          <Button 
            variant="ghost" 
            asChild
            className="text-foreground/80 hover:text-primary"
          >
            <a href="/assets/Deepak_Gowda_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Skills Map
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-foreground/80 hover:text-primary transition-colors font-medium"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;