import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Code2, Zap, Cloud, Brain } from "lucide-react";

const projects = [
  {
    title: "Blood Management System",
    year: "2023",
    description: "Configured a rapid '10-minute blood delivery system' inspired by food delivery efficiency. Revolutionizing emergency medical response through tech optimization.",
    tags: ["System Design", "Healthcare", "Optimization"],
    icon: Zap,
    status: "completed",
    color: "primary"
  },
  {
    title: "NLP Experiment Pipeline",
    year: "Upcoming",
    description: "Reserved for next-generation Natural Language Processing experiment. Exploring advanced AI language models and their real-world applications.",
    tags: ["NLP", "AI/ML", "Research"],
    icon: Brain,
    status: "upcoming",
    color: "secondary"
  },
  {
    title: "AI + Cloud Tooling Build",
    year: "Upcoming",
    description: "Reserved for innovative AI-powered cloud automation tools. Bridging the gap between artificial intelligence and cloud infrastructure.",
    tags: ["AI", "Cloud", "Automation"],
    icon: Cloud,
    status: "upcoming",
    color: "accent"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              Builds & Experiments
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Projects I've built, tinkered with, or plan to explore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className="glow-hover neural-glow bg-gradient-card border-border/20 relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Status indicator */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={project.status === 'completed' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {project.status === 'completed' ? 'Built' : 'Upcoming'}
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-full bg-${project.color}/10 border border-${project.color}/20`}>
                      <IconComponent className={`h-6 w-6 text-${project.color}`} />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-space">{project.title}</CardTitle>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-foreground/80 leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="outline" 
                        className="text-xs border-border/40 hover:bg-primary/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {/* Animated background pattern */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute -right-10 -bottom-10 w-20 h-20 rounded-full bg-gradient-neural opacity-5 animate-pulse"></div>
                  <div className="absolute -left-5 -top-5 w-16 h-16 rounded-full bg-gradient-neural opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;