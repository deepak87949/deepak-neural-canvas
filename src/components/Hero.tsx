import { Button } from "@/components/ui/button";
import deepakProfile from "@/assets/deepak-profile.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Brain */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="brain-rotate">
          <svg width="600" height="600" viewBox="0 0 400 400" className="text-primary/30">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/> 
                </feMerge>
              </filter>
            </defs>
            {/* Brain outline */}
            <path 
              d="M120,180 C100,120 140,80 180,85 C200,60 240,65 260,90 C300,85 340,120 320,180 C330,220 300,260 260,250 C240,270 200,265 180,240 C140,245 110,220 120,180 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              filter="url(#glow)"
            />
            {/* Neural pathways */}
            <g className="animate-synapse-pulse">
              <line x1="150" y1="150" x2="250" y2="180" stroke="hsl(var(--synapse))" strokeWidth="1" opacity="0.6"/>
              <line x1="180" y1="120" x2="220" y2="200" stroke="hsl(var(--synapse))" strokeWidth="1" opacity="0.6"/>
              <line x1="200" y1="140" x2="280" y2="160" stroke="hsl(var(--synapse))" strokeWidth="1" opacity="0.6"/>
              <line x1="160" y1="200" x2="240" y2="220" stroke="hsl(var(--synapse))" strokeWidth="1" opacity="0.6"/>
            </g>
            {/* Neural nodes */}
            <g className="animate-neuron-pulse">
              <circle cx="150" cy="150" r="4" fill="hsl(var(--neuron))" opacity="0.8"/>
              <circle cx="250" cy="180" r="4" fill="hsl(var(--neuron))" opacity="0.8"/>
              <circle cx="180" cy="120" r="3" fill="hsl(var(--neuron))" opacity="0.6"/>
              <circle cx="220" cy="200" r="3" fill="hsl(var(--neuron))" opacity="0.6"/>
              <circle cx="280" cy="160" r="3" fill="hsl(var(--neuron))" opacity="0.6"/>
              <circle cx="240" cy="220" r="3" fill="hsl(var(--neuron))" opacity="0.6"/>
            </g>
          </svg>
        </div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-neural opacity-50 blur-md animate-glow-pulse"></div>
              <img 
                src={deepakProfile}
                alt="Deepak S"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-primary/30 shadow-neural"
              />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold font-space mb-6 animate-fade-in-up">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              Deepak S
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            AI & Cloud Enthusiast | 
            <span className="text-primary"> Linux</span> • 
            <span className="text-secondary"> NLP</span> • 
            <span className="text-accent"> Responsible AI</span> • 
            <span className="text-synapse"> Vibe Coding</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              size="lg" 
              className="neural-glow bg-gradient-neural text-primary-foreground font-semibold px-8 py-3 rounded-full"
              asChild
            >
              <a href="/assets/Deepak_Gowda_Resume.pdf" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3 rounded-full"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;