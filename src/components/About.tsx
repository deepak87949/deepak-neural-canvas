const About = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Brain Animation */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="brain-rotate" style={{ animationDuration: '30s' }}>
          <svg width="800" height="800" viewBox="0 0 400 400" className="text-primary">
            <path 
              d="M120,180 C100,120 140,80 180,85 C200,60 240,65 260,90 C300,85 340,120 320,180 C330,220 300,260 260,250 C240,270 200,265 180,240 C140,245 110,220 120,180 Z" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-8">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Currently working as <span className="text-primary font-semibold">Technology Assistant at IT for Change</span>, 
              while pursuing my <span className="text-secondary font-semibold">Online MCA in AI at Amrita University</span>. 
              Specialized in Linux system configuration, FOSS tools training, AI automation, and MediaWiki management.
            </p>
            
            <div className="w-16 h-1 bg-gradient-neural mx-auto my-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Exploring the intersection of <span className="text-accent font-semibold">AI</span>, 
              <span className="text-synapse font-semibold"> cloud</span>, and 
              <span className="text-neuron font-semibold"> creative problem-solving</span>. 
              Passionate about building responsible AI systems that make a positive impact.
            </p>

            {/* Floating particles around the content */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${20 + (i % 3) * 30}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: '8s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;