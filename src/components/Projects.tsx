
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
const ecommerceImage = "/lovable-uploads/e42980fc-3b5f-4bfe-a534-d7ccaa02326e.png";
const insuranceImage = "/lovable-uploads/b47d2d4e-45c4-4694-9823-efb5ba8bc628.png";
const bankingImage = "/lovable-uploads/785048d6-4a35-4c65-8416-f6d7c7ef1de3.png";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices System",
      description: "A comprehensive microservices architecture featuring User, Product, Order, Inventory, and Payment services with advanced features like service discovery and API Gateway.",
      image: ecommerceImage,
      tech: ["Spring Boot", "PostgreSQL", "RabbitMQ", "Docker", "Eureka", "Swagger"],
      features: [
        "JWT-based role authentication",
        "Service discovery with Eureka",
        "API Gateway implementation",
        "Global exception handling",
        "Product filtering and snapshots",
        "RabbitMQ for inter-service communication"
      ],
      github: "https://github.com/Surya1824/E-Commers-MicroService-System",
      type: "Personal Project"
    },
    {
      title: "Insurance Application",
      description: "Enterprise-grade insurance platform built at TCS, handling complex business logic with secure RESTful APIs and robust proxy services.",
      image: insuranceImage,
      tech: ["Spring Boot", "RESTEasy", "CA API Gateway", "JUnit", "MySQL"],
      features: [
        "RESTful API development",
        "Secure proxy implementation",
        "Business logic integration",
        "Production issue resolution",
        "Comprehensive unit testing",
        "Cross-team collaboration"
      ],
      github: null,
      type: "TCS Project (2023–Present)"
    },
    {
      title: "Banking Services Platform",
      description: "Cloud migration and microservices redesign for banking operations, including performance optimization and CI/CD implementation.",
      image: bankingImage,
      tech: ["Spring Boot", "Docker", "OpenShift", "Jenkins", "VPE Testing"],
      features: [
        "PCF to OpenShift migration",
        "Microservices architecture design",
        "Performance and load testing",
        "CI/CD pipeline setup",
        "Version control management",
        "Release coordination"
      ],
      github: null,
      type: "TCS Project (2022–2023)"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of enterprise applications and microservices architectures 
            built with modern backend technologies.
          </p>
        </div>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl text-foreground">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.github && (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full sm:w-auto"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github size={16} />
                          View on GitHub
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
