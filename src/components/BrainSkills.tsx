import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface Skill {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
  side: 'left' | 'right';
}

const skills: Skill[] = [
  // Right Hemisphere (Tech)
  { id: 'linux', name: 'Linux', description: 'System administration and server management', x: 280, y: 120, side: 'right' },
  { id: 'bash', name: 'Bash Scripting', description: 'Automation and system scripting', x: 320, y: 160, side: 'right' },
  { id: 'python', name: 'Python', description: 'AI/ML development and data analysis', x: 300, y: 200, side: 'right' },
  { id: 'nlp', name: 'NLP', description: 'Natural Language Processing and text analysis', x: 280, y: 240, side: 'right' },
  { id: 'ai', name: 'AI Fundamentals', description: 'Machine learning and AI model development', x: 320, y: 280, side: 'right' },
  { id: 'aws', name: 'AWS', description: 'Cloud infrastructure and services', x: 290, y: 320, side: 'right' },
  { id: 'network', name: 'Networking', description: 'Network configuration and troubleshooting', x: 330, y: 350, side: 'right' },

  // Left Hemisphere (Creative + Ethics)
  { id: 'responsible-ai', name: 'Responsible AI', description: 'Ethical AI development and governance', x: 120, y: 120, side: 'left' },
  { id: 'data-protection', name: 'Data Protection', description: 'Sensitive data handling and privacy', x: 80, y: 160, side: 'left' },
  { id: 'agentic-ai', name: 'Agentic AI', description: 'Autonomous AI systems and agents', x: 100, y: 200, side: 'left' },
  { id: 'vibe-coding', name: 'Vibe Coding', description: 'Creative and intuitive programming approach', x: 120, y: 240, side: 'left' },
  { id: 'product-strategy', name: 'Product Strategy', description: 'Tech product planning and execution', x: 80, y: 280, side: 'left' },
  { id: 'neuromarketing', name: 'Neuromarketing', description: 'Psychology-driven marketing insights', x: 110, y: 320, side: 'left' },
  { id: 'data-analysis', name: 'Data Analysis', description: 'Statistical analysis and insights', x: 70, y: 350, side: 'left' },
];

const BrainSkills = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [ripples, setRipples] = useState<Array<{id: string, x: number, y: number}>>([]);

  const handleSkillClick = (skill: Skill) => {
    setActiveSkill(skill.id);
    
    // Create ripple effect
    const rippleId = `${skill.id}-${Date.now()}`;
    setRipples(prev => [...prev, { id: rippleId, x: skill.x, y: skill.y }]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== rippleId));
    }, 1000);
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              Skills Brain Map
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Interactive neural network of my technical and creative abilities
          </p>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <svg width="400" height="400" viewBox="0 0 400 400" className="mx-auto">
              <defs>
                <filter id="skillGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/> 
                  </feMerge>
                </filter>
              </defs>
              
              {/* Brain Outline */}
              <path 
                d="M120,180 C100,120 140,80 180,85 C200,60 240,65 260,90 C300,85 340,120 320,180 C330,220 300,260 260,250 C240,270 200,265 180,240 C140,245 110,220 120,180 Z" 
                fill="hsl(var(--card))"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                filter="url(#skillGlow)"
                className="opacity-20"
              />

              {/* Hemisphere Divider */}
              <line 
                x1="200" y1="85" 
                x2="200" y2="250" 
                stroke="hsl(var(--border))" 
                strokeWidth="1" 
                strokeDasharray="5,5"
                className="opacity-40"
              />

              {/* Neural Connections */}
              <g className="opacity-30">
                {skills.map((skill, index) => 
                  skills.slice(index + 1).map((otherSkill) => (
                    <line
                      key={`${skill.id}-${otherSkill.id}`}
                      x1={skill.x}
                      y1={skill.y}
                      x2={otherSkill.x}
                      y2={otherSkill.y}
                      stroke="hsl(var(--synapse))"
                      strokeWidth="0.5"
                      className="animate-synapse-pulse"
                      style={{ animationDelay: `${Math.random() * 3}s` }}
                    />
                  ))
                )}
              </g>

              {/* Skill Nodes */}
              {skills.map((skill) => (
                <g key={skill.id}>
                  <circle
                    cx={skill.x}
                    cy={skill.y}
                    r={activeSkill === skill.id ? "12" : "8"}
                    fill={skill.side === 'left' ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSkill === skill.id ? 'animate-glow-pulse' : 'animate-neuron-pulse'
                    }`}
                    onClick={() => handleSkillClick(skill)}
                    onMouseEnter={() => setActiveSkill(skill.id)}
                    onMouseLeave={() => setActiveSkill(null)}
                    filter="url(#skillGlow)"
                  />
                  <text
                    x={skill.x}
                    y={skill.y - 15}
                    textAnchor="middle"
                    className="text-xs font-medium fill-foreground pointer-events-none"
                    opacity={activeSkill === skill.id ? "1" : "0.7"}
                  >
                    {skill.name}
                  </text>
                </g>
              ))}

              {/* Ripple Effects */}
              {ripples.map((ripple) => (
                <circle
                  key={ripple.id}
                  cx={ripple.x}
                  cy={ripple.y}
                  r="0"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  opacity="0.6"
                >
                  <animate
                    attributeName="r"
                    values="0;30;60"
                    dur="1s"
                    begin="0s"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.6;0.3;0"
                    dur="1s"
                    begin="0s"
                  />
                </circle>
              ))}
            </svg>

            {/* Skill Description Tooltip */}
            {activeSkill && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 glass rounded-lg p-4 max-w-xs text-center animate-fade-in-up">
                <Badge variant="secondary" className="mb-2">
                  {skills.find(s => s.id === activeSkill)?.name}
                </Badge>
                <p className="text-sm text-muted-foreground">
                  {skills.find(s => s.id === activeSkill)?.description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hemisphere Labels */}
        <div className="flex justify-between max-w-md mx-auto mt-8 text-center">
          <div>
            <h3 className="font-semibold text-accent mb-2">Creative + Ethics</h3>
            <p className="text-sm text-muted-foreground">Left Hemisphere</p>
          </div>
          <div>
            <h3 className="font-semibold text-primary mb-2">Technical Skills</h3>
            <p className="text-sm text-muted-foreground">Right Hemisphere</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrainSkills;