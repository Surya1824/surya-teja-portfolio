
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 px-4 transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <div className="animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
              <img
                src="/lovable-uploads/e70bf4f6-2905-47e0-8d40-5c03f4cb5498.png"
                alt="Surya Teja Darapureddy"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background shadow-2xl transition-all duration-500 group-hover:scale-105"
                style={{ 
                  objectPosition: 'center top',
                  transform: 'scale(1.2)',
                  transformOrigin: 'center'
                }}
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 transition-colors duration-300">
            Java Backend
            <span className="block text-primary bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent animate-pulse">
              Developer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            Building scalable microservices and enterprise applications at{" "}
            <span className="text-primary font-semibold hover:scale-105 inline-block transition-transform duration-300">
              Tata Consultancy Services
            </span>.
            Passionate about cloud architecture and embracing AI to accelerate development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg border-2 hover:border-primary"
            >
              Get In Touch
            </Button>
          </div>
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Surya1824"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/surya-teja-/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown
            size={32}
            className="text-muted-foreground cursor-pointer hover:text-primary transition-all duration-300 hover:scale-110"
            onClick={() => scrollToSection("about")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
