import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Send, Zap } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create mailto link
    const mailtoLink = `mailto:deepakgowda974259@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.name}%0AEmail: ${formData.email}`;
    window.open(mailtoLink);
    
    toast.success("Opening email client...");
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background brainwave pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="text-primary">
          <defs>
            <pattern id="brainwave" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
              <path 
                d="M0,25 Q25,10 50,25 T100,25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="animate-synapse-pulse"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#brainwave)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-space mb-4">
            <span className="bg-gradient-neural bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to collaborate on the next big AI innovation?
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="neural-glow bg-gradient-card border-border/20 relative overflow-hidden">
            {/* Neon border effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-neural opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
            
            <CardHeader className="text-center pb-6">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl font-space">
                <div className="p-2 rounded-full bg-primary/10 border border-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                Get In Touch
              </CardTitle>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project, idea, or just say hello..."
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full neural-glow bg-gradient-neural text-primary-foreground font-semibold py-3 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Zap className="h-4 w-4 animate-spin" />
                        Connecting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </span>
                  
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-neural opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
              </form>

              {/* Direct email link */}
              <div className="mt-6 pt-6 border-t border-border/20 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Or reach out directly at
                </p>
                <a 
                  href="mailto:deepakgowda974259@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  deepakgowda974259@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Floating contact particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: '10s'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;