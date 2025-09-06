import { Button } from "@/components/ui/button";
import { Mail, FileText, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-neural"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Button 
              variant="ghost" 
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <a href="/assets/Deepak_Gowda_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Resume
              </a>
            </Button>

            <Button 
              variant="ghost" 
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <a href="https://linkedin.com/in/deepakgowda" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>

            <Button 
              variant="ghost" 
              size="sm"
              asChild
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <a href="mailto:deepakgowda974259@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Email
              </a>
            </Button>
          </div>

          {/* Witty quote */}
          <div className="mb-6">
            <p className="text-lg md:text-xl font-space text-foreground/80 italic">
              "You, me, and the AI — all just atoms, if we zoom deep enough :)"
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-2xl animate-neuron-pulse">✨</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/10">
            <p className="text-sm text-muted-foreground">
              © 2024 Deepak Gowda. Built with neural networks and good vibes.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 rounded-full bg-primary animate-neuron-pulse"></div>
        </div>
        
        <div className="absolute bottom-4 left-4">
          <div className="w-1 h-1 rounded-full bg-accent animate-particle-float"></div>
        </div>
        
        <div className="absolute bottom-4 right-4">
          <div className="w-1 h-1 rounded-full bg-secondary animate-particle-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;