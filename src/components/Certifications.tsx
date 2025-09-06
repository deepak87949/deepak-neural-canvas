import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "MITx: Becoming an Entrepreneur",
    provider: "MIT",
    logo: "🎓",
    color: "primary",
    link: "#"
  },
  {
    name: "TensorFlow: Custom Models & Loss Functions",
    provider: "TensorFlow",
    logo: "🧠",
    color: "secondary",
    link: "#"
  },
  {
    name: "Google Cloud Fundamentals",
    provider: "Google Cloud",
    logo: "☁️",
    color: "accent",
    link: "#"
  },
  {
    name: "Networking in Google Cloud",
    provider: "Google Cloud",
    logo: "🌐",
    color: "synapse",
    link: "#"
  },
  {
    name: "AI & ML on Google Cloud",
    provider: "Google Cloud",
    logo: "🤖",
    color: "neuron",
    link: "#"
  },
];

const Certifications = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Professional credentials and continuous learning achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.name}
              className="glow-hover neural-glow bg-gradient-card border-border/20 cursor-pointer group animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => window.open(cert.link, '_blank')}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {cert.logo}
                </div>
                
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">
                  {cert.provider}
                </p>

                <div className="flex items-center justify-center text-primary/60 group-hover:text-primary transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </div>

                {/* Animated glow effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-neural opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </CardContent>

              {/* Corner accent */}
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary animate-neuron-pulse"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;