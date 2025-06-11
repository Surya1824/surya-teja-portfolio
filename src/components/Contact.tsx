
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            I'm always interested in discussing new opportunities, challenging projects, 
            and innovative backend solutions. Let's connect and explore how we can create 
            something amazing together.
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 mb-12">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ready to Start a Project?
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Whether you need a backend developer for your team, want to discuss 
                  microservices architecture, or have an interesting project in mind, 
                  I'd love to hear from you.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-3">📧 Email:</span>
                    <a 
                      href="mailto:suryateja5347@gmail.com"
                      className="text-primary hover:underline"
                    >
                      suryateja5347@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <span className="font-medium mr-3">📍 Location:</span>
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Button
                  size="lg"
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a href="mailto:suryateja5347@gmail.com">
                    Send Me an Email
                  </a>
                </Button>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href="https://www.linkedin.com/in/surya-teja"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="flex-1"
                  >
                    <a
                      href="https://github.com/Surya1824"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Open to full-time opportunities, freelance projects, and technical consulting
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>Backend Development</span>
            <span>•</span>
            <span>Microservices</span>
            <span>•</span>
            <span>Cloud Architecture</span>
            <span>•</span>
            <span>Technical Leadership</span>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2024 Surya Teja Darapureddy. Built with passion for backend excellence.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
