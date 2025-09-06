import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrainSkills from "@/components/BrainSkills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background-main relative overflow-x-hidden">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <BrainSkills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Neural network lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="synapse-line"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${20 + (i * 15)}%`,
                width: `${100 + Math.random() * 200}px`,
                animationDelay: `${i * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
