
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto transition-all duration-500"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="group">
            <Card className="p-8 bg-muted/30 border-none transition-all duration-500 hover:bg-muted/50 hover:shadow-xl hover:scale-105">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-4 transition-colors duration-300">
                  Backend Developer at TCS
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6 transition-colors duration-300">
                  With 3+ years of experience in enterprise software development, I specialize in 
                  building robust, scalable microservices using Java and Spring Boot. Currently working 
                  in the insurance domain at Tata Consultancy Services, where I design and maintain 
                  RESTful APIs that serve millions of users.
                </p>
                <p className="text-muted-foreground leading-relaxed transition-colors duration-300">
                  I'm deeply passionate about cloud technologies, DevOps practices, and exploring 
                  how AI can streamline development workflows. My focus is on delivering solutions 
                  that improve both business efficiency and user experience.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg transition-all duration-500 hover:from-primary/20 hover:to-primary/10 hover:scale-105 hover:shadow-lg group">
              <h4 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">🎯 Current Focus</h4>
              <p className="text-muted-foreground transition-colors duration-300">
                Mastering advanced system design patterns and contributing to open-source Java tools
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg transition-all duration-500 hover:from-primary/20 hover:to-primary/10 hover:scale-105 hover:shadow-lg group">
              <h4 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">🚀 Next Goal</h4>
              <p className="text-muted-foreground transition-colors duration-300">
                Transition into a senior backend architect role, leading technical decisions
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg transition-all duration-500 hover:from-primary/20 hover:to-primary/10 hover:scale-105 hover:shadow-lg group">
              <h4 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">🌟 Vision</h4>
              <p className="text-muted-foreground transition-colors duration-300">
                Build enterprise SaaS platforms that integrate AI and scalable microservices
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
