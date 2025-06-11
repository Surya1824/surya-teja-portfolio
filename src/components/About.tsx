
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 bg-muted/30 border-none">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Backend Developer at TCS
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  With 3.3 years of experience in enterprise software development, I specialize in 
                  building robust, scalable microservices using Java and Spring Boot. Currently working 
                  in the insurance domain at Tata Consultancy Services, where I design and maintain 
                  RESTful APIs that serve millions of users.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about cloud technologies, DevOps practices, and leveraging AI to 
                  accelerate development workflows. My goal is to create software solutions that 
                  make a real impact on business operations and user experiences.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">🎯 Current Focus</h4>
              <p className="text-muted-foreground">
                Mastering advanced system design patterns and contributing to open-source Java tools
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">🚀 Next Goal</h4>
              <p className="text-muted-foreground">
                Transition into a senior backend architect role, leading technical decisions
              </p>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-2">🌟 Vision</h4>
              <p className="text-muted-foreground">
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
